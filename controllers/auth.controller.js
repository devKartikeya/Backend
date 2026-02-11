const authService = require("../services/auth.service");
const jwt = require("../utils/jwt");

async function register(req, res) {
  const { username, email, password } = req.body;
  const user = await authService.createUser(username, email, password);

  if (!user.success) return res.json({ user });

  const payLoad = { id: user._id, email };
  const token = jwt.generateToken(payLoad);

  res.cookie("token", token);
  res.redirect("/home");
}

async function login(req, res) {
  const { email, password } = req.body;
  
  const data = await authService.login(email, password);

  if (!data.success && data.field == "email") {
    return res.json({ data });
  }
  if (!data.success && data.field == "password") {
    return res.json({ data });
  }
  const payLoad = { id: data._id, email };
  const token = jwt.generateToken(payLoad);

  res.cookie("token", token);
  return res.json({ data });
}

async function checkUser(req, res) {
  const { input } = req.body;
  const username = input;
  const email = input;
  const data = await authService.checkUser(username, email);
  res.json({ data });
}

module.exports = { register, login, checkUser };
