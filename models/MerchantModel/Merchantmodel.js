const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");
const colorize = (text, color) => `\x1b[${color}m${text}\x1b[0m`;

const merchant = sequelize.define(
    "merchant",
    {
        merchantName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        storeName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        openTime: {
            type: DataTypes.TIME,
            allowNull: false
        },
        closeTime: {
            type: DataTypes.TIME,
            allowNull: false
        }

    }
)
// MerchantModel.bulkCreate(merchant, {ignoreDuplicates: true});
sequelize
    .sync()
    .then(() => {
        console.log(colorize("Your Merchant schema was created successfully", "35"))
    })
  .catch((err) => {console.log("Your Merchant schema table creation Error is : ", err)})

module.exports = { merchant }