'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('deliveryMethod', {
    DeliveryMethodID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  MethodName: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  PricePerKg: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
  },
}, {
  tableName: 'deliveryMethod',
  timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('deliveryMethod');
  }
};
