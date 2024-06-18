var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
const { User } = require('../models/User');
const { validationResult } = require('express-validator');

// Register
const Register = async (req, res) => {
    try {
      const { username, email, phoneNumber, password } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({
        where: {
          username: username
        }
      });
  
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
        username: username,
        email: email,
        phoneNumber: phoneNumber,
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

module.exports = {
  Register,  
  Login,
  Logout,
  refreshToken
};