//Npm Modules
require("dotenv").config();
const express = require("express");
const server = express();
const colorize = (text, color) => `\x1b[${color}m${text}\x1b[0m`;
//Imported Modules
const sequelize = require("./config/db")
const { MerchantModel } = require("./models/MerchantModel/Merchantmodel");
const {insertMerchantDetails} = require("./Controllers/MerchantController/MerchantRegister");
const router = require("./Router/postRoutes")
// Port Listening
const PORT = process.env.PORT;



// MiddleWares
server.use(express.json());
server.use(express.urlencoded({extended: true}))
server.use("/", router)






// DB connection
sequelize.connectDb();




server.listen(PORT, (req, res) => {
    console.log(colorize(`Your port is running on port: ${PORT}`, '35'))
})