const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const { merchant } = require("./Merchantmodel")
const colorize = (text, color) => `\x1b[${color}m${text}\x1b[0m`;


const MerchantServicesSchema = sequelize.define(
    "MerchantServicesSchema",
    {
        hairCutting: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shaving: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hairCutShaving: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hairStraightening: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        hairColoring: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        others: {
            type: DataTypes.STRING,
            allowNull: true
        }
    })


sequelize
    .sync()
    .then(() => { console.log(colorize("Your Merchant schema was created successfully", "35")) })
    .catch((error) => { ` Your Merchant Services schema table creation Error is : ${console.error(error)}` })

module.exports = { MerchantServicesSchema }




