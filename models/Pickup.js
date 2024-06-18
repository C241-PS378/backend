// models/pickup.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection');

const Pickup = sequelize.define('Pickup', {
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    wasteType: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'In Progress'
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    collectorId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    timestamps: true
});

module.exports = Pickup;
