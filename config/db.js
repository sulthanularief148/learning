const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
  {
    dialect: "postgres",
    logging: console.log,
  }
);

const colorize = (text, color) => `\x1b[${color}m${text}\x1b[0m`;

const connectDb = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log(colorize(`Database connected successfully`, '35')); // Green color (32) for success
    })
    .catch((err) => {
      console.log(colorize(`Error connecting to the database: ${err}`, '31')); // Red color (31) for error
    });
};

module.exports = { sequelize, connectDb };
