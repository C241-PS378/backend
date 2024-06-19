'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Item', {
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    amount: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    weight: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        allowNull: true
    },
    pricePerKg: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    totalPrice: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'Item',
    timestamps: true
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Item');
  }
};
