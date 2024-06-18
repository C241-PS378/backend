const express = require('express');
const router = express.Router();
const { wasteInfo, selectAddress, confirmation } = require('../controllers/sellwasteController');

// POST /sellWaste/wasteInfo
router.post('/wasteInfo', wasteInfo);

// POST /sellWaste/selectAddress
router.post('/selectAddress', selectAddress);

// POST /sellWaste/confirmation
router.post('/confirmation', confirmation);

module.exports = router;
