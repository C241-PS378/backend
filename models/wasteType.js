module.exports = (sequelize, DataTypes) => {
    const WasteType = sequelize.define('WasteType', {
        WasteTypeID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Name: {
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

    return WasteType;
};
