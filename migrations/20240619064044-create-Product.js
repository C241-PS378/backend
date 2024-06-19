'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Product', {
      ProductID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ProductName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ProductType: {
        type: Sequelize.STRING,
    },
    Weight: {
        type: Sequelize.DECIMAL(10, 2),
    },
    Amount: {
        type: Sequelize.INTEGER,
    },
    PricePerKg: {
        type: Sequelize.DECIMAL(10, 2),
    },
    ImageURL: {
        type: Sequelize.STRING,
    },
    CreatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'Product',
    timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Product');
  }
};
