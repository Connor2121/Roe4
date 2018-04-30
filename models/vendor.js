module.exports = function(sequelize, DataTypes) {
    var Vendor = sequelize.define('Vendor', {
        id: { type: DataTypes.INTEGER, primaryKey: true },
        vendor: DataTypes.STRING,
        contact: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        zip: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        certified: DataTypes.STRING,
        crops: DataTypes.STRING(5000),
        livestock: DataTypes.STRING(1000),
        wildcrops: DataTypes.STRING(1000),
        handling: DataTypes.STRING(5000)
    }, {
        timestamps: false
    });

    return Vendor;
};