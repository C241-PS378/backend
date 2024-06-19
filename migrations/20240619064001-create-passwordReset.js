'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('passwordReset', {
      PasswordResetID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    UserID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    Token: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ExpiryDate: {
        type: Sequelize.DATE,
        allowNull: false,
    },
}, {
    tableName: 'passwordReset',
    timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('passwordReset');
  }
};
