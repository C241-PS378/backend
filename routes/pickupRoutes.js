// routes/pickup.js
const express = require('express');
const router = express.Router();
const pickupController = require('../controllers/pickupController');

router.get('/', pickupController.getAllPickups);
router.get('/:status', pickupController.getPickupByStatus);
router.post('/', pickupController.createPickup);
router.put('/status', pickupController.updatePickupStatus);

module.exports = router;
