const Sequelize = require("sequelize")
const path = require('path')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, 'database.sqlite'),
    logging: false
});

class Device extends Sequelize.Model {}
Device.init(
    {
        jdid: {
            type: Sequelize.STRING,
            unique: true
        },
        brand: Sequelize.STRING,
        name: Sequelize.STRING,
        resolution: Sequelize.STRING
    },
    {
        sequelize,
        modelName: 'device'
    }
);
Device.sync()

exports.sequelize = sequelize
exports.Device = Device