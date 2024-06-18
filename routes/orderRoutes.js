const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/create', authMiddleware, orderController.createOrder);
router.post('/cart', authMiddleware, orderController.addToCart);
router.get('/cart', authMiddleware, orderController.getCart);
router.delete('/cart/:id', authMiddleware, orderController.removeFromCart);

module.exports = router;
