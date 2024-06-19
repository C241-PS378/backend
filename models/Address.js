module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
      AddressID: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
      },
      UserID: {
          type: DataTypes.INTEGER,
          allowNull: false,
      },
      Address: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      City: {
          type: DataTypes.STRING,
      },
      State: {
          type: DataTypes.STRING,
      },
      Country: {
          type: DataTypes.STRING,
      },
      PostalCode: {
          type: DataTypes.STRING,
      },
      CreatedAt: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW,
      },
  }, {
      timestamps: false,
  });

  return Address;
};
