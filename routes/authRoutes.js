const express = require('express');
const router = express.Router();
const { validateRegistration, validateLogin } = require('../validator/authValidator');
const { Register, Login, Logout, refreshToken, resetPassword } = require('../controllers/authController');

router.post('/register', validateRegistration, Register);
router.post('/login', validateLogin, Login);
router.delete('/logout', Logout);
router.get('/token', refreshToken);
router.post('/reset-password', resetPassword);

module.exports = router;
