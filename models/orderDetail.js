module.exports = (sequelize, DataTypes) => {
    const OrderDetail = sequelize.define('OrderDetail', {
        OrderDetailID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        OrderID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        ProductID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        CreatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: false,
    });

    return OrderDetail;
};
