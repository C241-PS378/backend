const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

// GET all addresses by user ID
router.get('/:userId', addressController.getAllAddressesByUserId);

// POST create new address
router.post('/', addressController.createAddress);

// PUT update address by ID
router.put('/:id', addressController.updateAddress);

// DELETE delete address by ID
router.delete('/:id', addressController.deleteAddress);

module.exports = router;
