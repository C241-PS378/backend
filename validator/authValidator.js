const { body } = require('express-validator');

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
    validateRegistration,
    validateLogin
};