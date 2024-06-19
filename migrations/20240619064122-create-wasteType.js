'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('wasteType', {
      WasteTypeID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    PricePerKg: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    tableName: 'wasteType',
    timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('wasteType');
  }
};
