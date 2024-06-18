const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConnection'); // Sesuaikan dengan konfigurasi database Anda

const History = sequelize.define('History', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  transactionType: {
    type: DataTypes.ENUM('sold', 'bought'),
    allowNull: false,
  },
  transactionAmount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  transactionDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = History;
