const mongoose = require("mongoose");
var chalk = require('chalk');

const log = console.log;

const config = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL,
  SECRET: process.env.SECRET,
  NODE_ENV: process.env.NODE_ENV
};

function connectDB() {
  if (process.env.NODE_ENV === "development") {
    return mongoose
      .connect(config.DB_URL)
      .then(() => log(chalk.green("Connected to local MongoDB! " + config.NODE_ENV)))
      .catch(err => log( chalk.red("Error connecting to local MongoDB:", err)));
  }
  return OK;
}

module.exports = { ...config, connectDB };
