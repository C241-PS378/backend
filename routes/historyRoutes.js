const express = require('express');
const router = express.Router();
const historyController = require('../controllers/historyController');

router.get('/history/sold/:userId', historyController.getSoldHistory);
router.get('/history/bought/:userId', historyController.getBoughtHistory);

module.exports = router;