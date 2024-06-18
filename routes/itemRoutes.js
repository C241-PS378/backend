const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');
const authMiddleware = require('../middleware/auth');

router.get('/youritems', authMiddleware, itemController.getUserItems);

module.exports = router;
