// homeRoutes.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Routes untuk top navbar
router.get('/cart', homeController.goToCart);
router.get('/history', homeController.goToHistory);

// Routes untuk middle section "Our Services"
router.get('/sellWaste', homeController.goToSellWaste);
router.get('/pickup', homeController.goToPickupWaste);

// Routes untuk bottom navbar
router.get('/home', homeController.goToHome); // Opsional, bisa langsung ke '/' di app.js
router.get('/market', homeController.goToMarket);
router.get('/camera', homeController.goToCamera);
router.get('/profile', homeController.goToProfile);

module.exports = router;
