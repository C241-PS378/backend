'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('paymentMethod', {
      PaymentMethodID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    MethodName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
}, {
    tableName: 'paymentMethod',
    timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('paymentMethod');
  }
};
