module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define('History', {
      HistoryID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      UserID: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      ProductID: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      TransactionType: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      TransactionDate: {
          type: DataTypes.DATE,
          allowNull: false,
      },
      TotalPrice: {
          type: DataTypes.DECIMAL(10, 2),
          allowNull: false,
      },
  }, {
      timestamps: false,
  });

  return History;
};
