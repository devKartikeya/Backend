var chalk = require("chalk");
const log = console.log;

module.exports = {
    info: (...args) => log(chalk.blueBright(...args)),
    success: (...args) => log(chalk.greenBright(...args)),
    warn: (...args) => log(chalk.yellowBright(...args)),
    error: (...args) => log(chalk.redBright(...args))
};
