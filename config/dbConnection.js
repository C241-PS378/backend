const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'mysql',
    database: 'cuan_sampah',
    user: 'root',
    password: '12345678',
    host: '34.128.107.19',
    port: 3306,
})

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
module.exports = sequelize;