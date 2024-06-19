'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Address', {
    AddressID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  UserID: {
      type: Sequelize.INTEGER,
      allowNull: false,
  },
  Address: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  City: {
      type: Sequelize.STRING,
  },
  State: {
      type: Sequelize.STRING,
  },
  Country: {
      type: Sequelize.STRING,
  },
  PostalCode: {
      type: Sequelize.STRING,
  },
  CreatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
  },
}, {
  tableName: 'Address',
  timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Address');
  }
};
