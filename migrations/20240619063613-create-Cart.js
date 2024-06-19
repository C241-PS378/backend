'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('Cart', {
        CartID: {
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
      Quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
      },
      CreatedAt: {
          type: Sequelize.DATE,
          defaultValue: Sequelize.NOW,
        },
      }, {
        tableName: 'Cart',
        timestamps: false,
      });
    },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Cart');
  }
};
