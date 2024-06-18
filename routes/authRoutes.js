const express = require('express');
const router = express.Router();
const { validateRegistration, validateLogin } = require('../validator/authValidator');
const { Register, Login, Logout, refreshToken } = require('../controllers/authController');

router.post('/register', validateRegistration, Register);
router.post('/login', validateLogin, Login);
router.delete('/logout', Logout);
router.get('/token', refreshToken);

module.exports = router;
