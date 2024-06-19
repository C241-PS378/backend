module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
      ProductID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      UserID: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      ProductName: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      ProductType: {
          type: DataTypes.STRING,
      },
      Weight: {
          type: DataTypes.DECIMAL(10, 2),
      },
      Amount: {
          type: DataTypes.INTEGER,
      },
      PricePerKg: {
          type: DataTypes.DECIMAL(10, 2),
      },
      ImageURL: {
          type: DataTypes.STRING,
      },
      CreatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
      },
  }, {
      timestamps: false,
  });

  return Product;
};
