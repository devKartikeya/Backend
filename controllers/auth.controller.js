const createUser = require("../services/auth.service");
const jwt = require("../utils/jwt");

async function register(req, res) {
  const { username, email, password } = req.body;
  const user = await createUser(username, email, password);

  const payLoad = { id: user._id, email };
  const token = jwt.generateToken(payLoad);

  res.cookie("token", token);
  res.redirect("/home");
}

function showHomePage(req, res) {
  res.render("home");
}

module.exports = { register, showHomePage };
