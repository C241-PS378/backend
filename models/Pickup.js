module.exports = (sequelize, DataTypes) => {
    const Pickup = sequelize.define('Pickup', {
        PickupID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        UserID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        CollectorID: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        AddressID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PickupDate: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        CreatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    }, {
        timestamps: false,
    });

    return Pickup;
};
