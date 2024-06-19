module.exports = (sequelize, DataTypes) => {
    const MidtransTransaction = sequelize.define('MidtransTransaction', {
        TransactionID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        OrderID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        MidtransOrderID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        PaymentMethod: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CreatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        UpdatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: true,
    });

    return MidtransTransaction;
};
