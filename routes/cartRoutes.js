const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

// Endpoint to add an item to the cart
router.post('/cart/add', cartController.addToCart);

// Endpoint to remove an item from the cart
router.delete('/cart/remove/:cartItemId', cartController.removeFromCart);

module.exports = router;
