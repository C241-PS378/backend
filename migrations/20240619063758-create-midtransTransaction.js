'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('midtransTransaction', {
      TransactionID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    OrderID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    MidtransOrderID: {
        type: Sequelize.STRING,
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
    PaymentMethod: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    CreatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
    UpdatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'midtransTransaction',
    timestamps: true,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('midtransTransaction');
  }
};
