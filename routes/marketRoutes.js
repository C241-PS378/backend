const express = require('express');
const router = express.Router();
const marketController = require('../controllers/marketController');

// Route to get all products by type
router.get('/:type', marketController.getAllProductsByType);

module.exports = router;