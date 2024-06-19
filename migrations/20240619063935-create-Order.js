'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Order', {
      OrderID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    TotalPrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    PaymentMethodID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    DeliveryMethodID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    CreatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'Order',
    timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Order');
  }
};
