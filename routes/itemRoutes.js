const express = require('express');
const router = express.Router();
const { Item } = require('../models'); // Import model Item

// Contoh route untuk membuat item baru
router.post('/items', async (req, res) => {
    try {
        const { userId, name, amount, weight, type, imageUrl, pricePerKg, totalPrice } = req.body;
        const newItem = await Item.create({
            userId,
            name,
            amount,
            weight,
            type,
            imageUrl,
            pricePerKg,
            totalPrice
        });
        res.status(201).json(newItem);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Contoh route untuk mendapatkan semua item
router.get('/items', async (req, res) => {
    try {
        const items = await Item.findAll();
        res.status(200).json(items);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
