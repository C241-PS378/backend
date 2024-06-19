module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        OrderID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        TotalPrice: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        PaymentMethodID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        DeliveryMethodID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CreatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: false,
    });

    return Order;
};
