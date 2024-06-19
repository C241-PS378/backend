// welcomeRoutes.js

const express = require('express');
const router = express.Router();
const welcomeController = require('../controllers/welcomeController');

// Route untuk menampilkan halaman Welcome
router.get('/', welcomeController.showWelcomePage);

module.exports = router;