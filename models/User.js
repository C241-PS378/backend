module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
      UserID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      Username: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      Email: {
          type: DataTypes.STRING,
          unique: true,
          allowNull: false,
      },
      Password: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      PhoneNumber: {
          type: DataTypes.STRING,
      },
      CreatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
      },
  }, {
      tableName: 'User',
      timestamps: false,
  });

  return User;
};
