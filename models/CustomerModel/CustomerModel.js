const { Sequelize, DataTypes } = require("sequelize")
const { sequelize } = require("../../config/db");
const colorize = (text, color) => `\x1b[${color}m${text}\x1b[0m`;


const CustomerSchema = sequelize.define(
    "CustomerSchema",
    {
        customerName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        customerPhoneNumber: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        emailId: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        district: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        pincode: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }
)


sequelize
  .sync()
  .then(() => {console.log(colorize("Your Customer schema was created successfully", "35"))})
  .catch((error) => { ` Your Customer schema table creation Error is : ${console.error(error)}` })

  module.exports = {CustomerSchema}