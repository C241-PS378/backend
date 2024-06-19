'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Collector', {
    CollectorID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  Name: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  Location: {
      type: Sequelize.STRING,
      allowNull: false,
  },
  Contact: {
      type: Sequelize.STRING,
  },
}, {
  tableName: 'Collector',
  timestamps: false,
});
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Collector');
  }
};
