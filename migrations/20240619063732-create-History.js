'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('History', {
      HistoryID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    ProductID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    TransactionType: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    TransactionDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    TotalPrice: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'History',
    timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('History');
  }
};
