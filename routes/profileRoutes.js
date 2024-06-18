const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/auth');

router.get('/', authMiddleware, profileController.getProfile);
router.get('/items', authMiddleware, profileController.getUserItems);
router.get('/addresses', authMiddleware, profileController.getUserAddresses);
router.get('/pickup-history', authMiddleware, profileController.getPickupHistory);
router.get('/sold-bought-history', authMiddleware, profileController.getSoldBoughtHistory);
router.post('/logout', authMiddleware, profileController.logout);

module.exports = router;
