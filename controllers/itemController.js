const Item = require('../models/Item');

exports.getUserItems = async (req, res) => {
    try {
        const items = await Item.findAll({ where: { userId: req.user.id } });
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch user items' });
    }
};
