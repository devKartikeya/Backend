var chalk = require("chalk");
var bcrypt = require("bcrypt");

const jwt = require("../utils/jwt");
const userModel = require("../models/user");

const log = console.log;

async function register(req, res) {
  const { username, email, password } = req.body;

  const hash = await bcrypt.hash(password, 10);
  let data = await userModel.create({
    username,
    email,
    password: hash
  });

  log(chalk.yellow(data));

  const payLoad = { id: data.id, email: data.email };
  
  res.cookie("token", jwt.signToken(payLoad), {
    httpOnly: true,
    sameSite: "strict"
  });

  res.redirect('/home');
}

module.exports = register;
