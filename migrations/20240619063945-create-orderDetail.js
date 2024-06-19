'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('orderDetail', {
      OrderDetailID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    OrderID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ProductID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    CreatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'orderDetail',
    timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('orderDetail');
  }
};
