const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');
const User = require('./User');
const Waste = require('./Waste');

const Cart = sequelize.define('Cart', {
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
    }
}, {
    timestamps: true
});

module.exports = Cart;
