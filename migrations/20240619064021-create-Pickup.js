'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Pickup', {
      PickupID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    CollectorID: {
        type: Sequelize.INTEGER,
        allowNull: true,
    },
    AddressID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Status: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    PickupDate: {
        type: Sequelize.DATE,
        allowNull: true,
    },
    CreatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'Pickup',
    timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Pickup');
  }
};
