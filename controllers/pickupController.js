// controllers/pickup.js
const Pickup = require('../models/Pickup');

exports.getAllPickups = async (req, res) => {
    try {
        const pickups = await Pickup.findAll();
        res.status(200).json(pickups);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch pickups' });
    }
};

exports.getPickupByStatus = async (req, res) => {
    const status = req.params.status;
    try {
        const pickups = await Pickup.findAll({ where: { status } });
        res.status(200).json(pickups);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch pickups' });
    }
};

exports.createPickup = async (req, res) => {
    const { userId, wasteType, amount, address, collectorId } = req.body;
    try {
        const newPickup = await Pickup.create({ userId, wasteType, amount, address, collectorId });
        res.status(201).json(newPickup);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create pickup' });
    }
};

exports.updatePickupStatus = async (req, res) => {
    const { id, status } = req.body;
    try {
        const pickup = await Pickup.findByPk(id);
        if (pickup) {
            pickup.status = status;
            await pickup.save();
            res.status(200).json(pickup);
        } else {
            res.status(404).json({ message: 'Pickup not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Failed to update pickup status' });
    }
};
