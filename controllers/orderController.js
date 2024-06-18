const Order = require('../models/Order');
const Cart = require('../models/Cart');
const Waste = require('../models/Waste');
const Address = require('../models/Address');

const deliveryPrices = {
    JNE: 10000,
    JNT: 12000,
    SiCepat: 12000
};

exports.createOrder = async (req, res) => {
    try {
        const { wasteId, quantity, addressId, deliveryService, notes, paymentMethod } = req.body;

        // Validate the request
        const waste = await Waste.findByPk(wasteId);
        if (!waste) {
            return res.status(404).json({ message: 'Waste not found' });
        }

        const address = await Address.findByPk(addressId);
        if (!address) {
            return res.status(404).json({ message: 'Address not found' });
        }

        const deliveryPrice = deliveryPrices[deliveryService];
        if (!deliveryPrice) {
            return res.status(400).json({ message: 'Invalid delivery service' });
        }

        const totalProduct = waste.price * quantity;
        const totalOrder = totalProduct + deliveryPrice;

        const order = await Order.create({
            userId: req.user.id,
            wasteId,
            quantity,
            addressId,
            deliveryService,
            notes,
            paymentMethod,
            totalOrder
        });

        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: 'Failed to create order', error });
    }
};

exports.addToCart = async (req, res) => {
    try {
        const { wasteId, quantity } = req.body;

        const waste = await Waste.findByPk(wasteId);
        if (!waste) {
            return res.status(404).json({ message: 'Waste not found' });
        }

        const cartItem = await Cart.create({
            userId: req.user.id,
            wasteId,
            quantity
        });

        res.status(201).json(cartItem);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add to cart', error });
    }
};

exports.getCart = async (req, res) => {
    try {
        const cartItems = await Cart.findAll({ where: { userId: req.user.id }, include: [Waste] });
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch cart', error });
    }
};

exports.removeFromCart = async (req, res) => {
    try {
        const { id } = req.params;
        const cartItem = await Cart.findOne({ where: { id, userId: req.user.id } });

        if (!cartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }

        await cartItem.destroy();
        res.status(200).json({ message: 'Cart item removed' });
    } catch (error) {
        res.status(500).json({ message: 'Failed to remove from cart', error });
    }
};
