var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const { User } = require('../models');
const { body, validationResult } = require('express-validator');
const { PasswordReset }= require('../models/passwordReset');

// Register
const Register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, email, phoneNumber, password } = req.body;
    
  try {
      // Check if user already exists
      const existingUser = await User.findOne({ where: { username } });
  
      if (existingUser) {
        return res.status(400).json({
          status: 'fail',
          message: 'Username sudah digunakan'
        });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = await User.create({
        username,
        email,
        phoneNumber,
        password: hashedPassword
      });
  
      res.status(201).json({
        status: 'success',
        message: 'User berhasil terdaftar',
        user: {
           id: newUser.id,
           username: newUser.username,
           email: newUser.email,
           phoneNumber: newUser.phoneNumber
        }
      });
  
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 'error',
        message: 'Internal server error'
      });
    }
  };  

// Login
const Login = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
          status: 'error',
          message: errors.array()[0].msg
        });
      }
    
      try {
        const user = await User.findOne({
          where: {
            email: req.body.email
          }
        });
    
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) {
          return res
            .status(400)
            .json({
              status: 'fail',
              message: 'Password salah'
            })
        }

    const userId = user.id;
    const username = user.username;
    const email = user.email;
    const accessToken = jwt.sign({ userId, username, email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '20s' });
    const refreshToken = jwt.sign({ userId, username, email }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1d' });

    await User.update({ refresh_token: refreshToken }, {
      where: {
        id: userId
      }
    });

    res.cookie('refreshToken', refreshToken, {
      httpOnly: false,
      maxAge: 24 * 60 * 60 * 1000
      // , secure: true
    });

    res.json({ accessToken });
  } catch (error) {
    res
      .status(404)
      .json({
        status: 'fail',
        message: 'Username tidak ditemukan'
      })
  }
}

// Logout
const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(401);

  const user = await User.findOne({
    where: {
      refresh_token: refreshToken
    }
  });

  if (!user) return res.sendStatus(204);

  const userId = user.id;
  await User.update({ refresh_token: null }, {
    where: {
      id: userId
    }
  });

  res.clearCookie('refreshToken');
  return res.sendStatus(200);
}

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const user = await User.findOne({
      where: {
        refresh_token: refreshToken
      }
    });

    if (!user) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);
      const userId = user.id;
      const username = user.username;
      const email = user.email;
      const accessToken = jwt.sign({ userId, username, email }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '15s'
      });
      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
  }
}

// Password Reset
const resetPassword = async (req, res) => {
  const { email, newPassword, confirmPassword, resetToken } = req.body;

  try {
    // Cari token reset password berdasarkan email
    const resetInfo = await PasswordReset.findOne({ where: { email, resetToken } });

    if (!resetInfo) {
      return res.status(400).json({ error: 'Invalid or expired reset token' });
    }

    // Validasi apakah password dan confirm password sama
    if (newPassword !== confirmPassword) {
      return res.status(400).json({ error: 'Password and confirm password do not match' });
    }

    // Hash password baru
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password di database
    await User.update({ password: hashedPassword }, { where: { email } });

    // Hapus token reset password dari database setelah digunakan
    await PasswordReset.destroy({ where: { email } });

    // Kirim respons bahwa reset password berhasil
    return res.status(200).json({ message: 'Password reset successful' });
  } catch (error) {
    console.error('Error resetting password:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
};

// Validasi Register
const validateRegistration = [
  body('username').notEmpty().withMessage('Username tidak boleh kosong'),
  body('email').isEmail().withMessage('Format email tidak valid'),
  body('phoneNumber').matches(/^\d+$/).withMessage('Nomor telepon hanya boleh berisi angka'),
  body('password').isLength({ min: 8 }).withMessage('Password minimal 8 karakter')
];

// Validasi Login
const validateLogin = [
  body('email').isEmail().withMessage('Format email tidak valid'),
  body('password').isLength({ min: 8 }).withMessage('Password minimal 8 karakter')
];


module.exports = {
  Register,  
  Login,
  Logout,
  refreshToken,
  resetPassword,
  validateLogin,
  validateRegistration,
};