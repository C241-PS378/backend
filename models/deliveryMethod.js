module.exports = (sequelize, DataTypes) => {
    const DeliveryMethod = sequelize.define('DeliveryMethod', {
        DeliveryMethodID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        MethodName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PricePerKg: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    }, {
        timestamps: false,
    });

    return DeliveryMethod;
};
