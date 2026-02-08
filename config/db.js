const mongoose = require("mongoose");
var chalk = require("chalk");

const log = console.log;
function connectDB() {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      log(chalk.green(`Connected to MONGOdb at port ${process.env.MONGO_PORT}`));
    })
    .catch(err => {
      log(chalk.red(`Error in connecting to MONGOdb`));
      console.log(err.message);
    });
}

module.exports = connectDB;