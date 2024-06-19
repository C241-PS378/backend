'use strict';

const Sequelize = require('sequelize');
const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config')[env];

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./User')(sequelize, Sequelize);
db.Address = require('./Address')(sequelize, Sequelize);
db.Product = require('./Product')(sequelize, Sequelize);
db.Order = require('./Order')(sequelize, Sequelize);
db.OrderDetail = require('./orderDetail')(sequelize, Sequelize);
db.History = require('./History')(sequelize, Sequelize);
db.PasswordReset = require('./passwordReset')(sequelize, Sequelize);
db.WasteType = require('./wasteType')(sequelize, Sequelize);
db.Cart = require('./Cart')(sequelize, Sequelize);
db.Collector = require('./Collector')(sequelize, Sequelize);
db.Transaction = require('./Transaction')(sequelize, Sequelize);
db.PaymentMethod = require('./paymentMethod')(sequelize, Sequelize);
db.DeliveryMethod = require('./deliveryMethod')(sequelize, Sequelize);
db.Pickup = require('./Pickup')(sequelize, Sequelize);
db.MidtransTransaction = require('./midtransTransaction')(sequelize, Sequelize);
db.Waste = require('./Waste')(sequelize, Sequelize);
db.Item = require('./Item')(sequelize, Sequelize);

// Associations
db.User.hasMany(db.Address, { foreignKey: 'UserID' });
db.Address.belongsTo(db.User, { foreignKey: 'UserID' });

db.User.hasMany(db.Product, { foreignKey: 'UserID' });
db.Product.belongsTo(db.User, { foreignKey: 'UserID' });

db.User.hasMany(db.Order, { foreignKey: 'UserID' });
db.Order.belongsTo(db.User, { foreignKey: 'UserID' });

db.Order.hasMany(db.OrderDetail, { foreignKey: 'OrderID' });
db.OrderDetail.belongsTo(db.Order, { foreignKey: 'OrderID' });

db.User.hasMany(db.History, { foreignKey: 'UserID' });
db.History.belongsTo(db.User, { foreignKey: 'UserID' });

db.User.hasMany(db.PasswordReset, { foreignKey: 'UserID' });
db.PasswordReset.belongsTo(db.User, { foreignKey: 'UserID' });

db.Product.belongsTo(db.WasteType, { foreignKey: 'WasteTypeID' });

db.User.hasMany(db.Cart, { foreignKey: 'UserID' });
db.Cart.belongsTo(db.User, { foreignKey: 'UserID' });

db.Product.hasMany(db.Cart, { foreignKey: 'ProductID' });
db.Cart.belongsTo(db.Product, { foreignKey: 'ProductID' });

db.User.hasMany(db.Pickup, { foreignKey: 'UserID' });
db.Pickup.belongsTo(db.User, { foreignKey: 'UserID' });

db.Address.hasMany(db.Pickup, { foreignKey: 'AddressID' });
db.Pickup.belongsTo(db.Address, { foreignKey: 'AddressID' });

db.Collector.hasMany(db.Pickup, { foreignKey: 'CollectorID' });
db.Pickup.belongsTo(db.Collector, { foreignKey: 'CollectorID' });

db.Order.hasOne(db.MidtransTransaction, { foreignKey: 'OrderID' });
db.MidtransTransaction.belongsTo(db.Order, { foreignKey: 'OrderID' });

db.PaymentMethod.hasMany(db.Transaction, { foreignKey: 'PaymentMethodID' });
db.Transaction.belongsTo(db.PaymentMethod, { foreignKey: 'PaymentMethodID' });

db.DeliveryMethod.hasMany(db.Order, { foreignKey: 'DeliveryMethodID' });
db.Order.belongsTo(db.DeliveryMethod, { foreignKey: 'DeliveryMethodID' });

module.exports = db;
