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
        crops: DataTypes.STRING,
        livestock: DataTypes.STRING,
        wildcrops: DataTypes.STRING,
        handling: DataTypes.STRING
    }, {
        timestamps: false
    });

    return Vendor;
};