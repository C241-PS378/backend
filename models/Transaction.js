module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        TransactionID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        OrderID: {
            type: DataTypes.INTEGER,
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
        PaymentGateway: {
            type: DataTypes.STRING,
        },
        PaymentMethodID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        CreatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: false,
    });

    return Transaction;
};
