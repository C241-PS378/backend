const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const User = require('./User');
const Address = require('./Address');
const Waste = require('./Waste');

const Order = sequelize.define('Order', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: 'id'
        }
    },
    wasteId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Waste,
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    addressId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Address,
            key: 'id'
        }
    },
    deliveryService: {
        type: DataTypes.STRING,
        allowNull: false
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    paymentMethod: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalOrder: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'Pending'
    }
}, {
    timestamps: true
});

module.exports = Order;
