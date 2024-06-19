'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('User', {
      UserID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    Email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    Password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    PhoneNumber: {
        type: Sequelize.STRING,
    },
    CreatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
    },
}, {
    tableName: 'User',
    timestamps: false,
});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('User');
  }
};
