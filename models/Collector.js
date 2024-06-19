module.exports = (sequelize, DataTypes) => {
    const Collector = sequelize.define('Collector', {
        CollectorID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Location: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Contact: {
            type: DataTypes.STRING,
        },
    }, {
        timestamps: false,
    });

    return Collector;
};
