'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Transaction', {
      TransactionID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    OrderID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Amount: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
    PaymentGateway: {
        type: Sequelize.STRING,
    },
    PaymentMethodID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    CreatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'Transaction',
    timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Transaction');
  }
};
