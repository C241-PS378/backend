const User = require('../models/User');
const Pickup = require('../models/Pickup');
const History = require('../models/History');
const Address = require('../models/Address');
const Item = require('../models/Item');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findByPk(req.user.id, {
            attributes: ['username', 'email', 'phoneNumber']
        });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch profile' });
    }
};

exports.getUserItems = async (req, res) => {
    try {
        const items = await Item.findAll({ where: { userId: req.user.id } });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch items' });
    }
};

exports.getUserAddresses = async (req, res) => {
    try {
        const addresses = await Address.findAll({ where: { userId: req.user.id } });
        res.status(200).json(addresses);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch addresses' });
    }
};

exports.getPickupHistory = async (req, res) => {
    try {
        const pickups = await Pickup.findAll({ where: { userId: req.user.id } });
        res.status(200).json(pickups);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch pickup history' });
    }
};

exports.getSoldBoughtHistory = async (req, res) => {
    try {
        const history = await History.findAll({ where: { userId: req.user.id } });
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch sold and bought history' });
    }
};

exports.logout = (req, res) => {
    req.logout();
    res.status(200).json({ message: 'Successfully logged out' });
};
