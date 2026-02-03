var bcrypt = require("bcrypt");
const jwt = require("../utils/jwt");
const userModel = require("../models/user");

const auth = async (req, res) => {
  const { email, password } = req.body;
  const data = await userModel.findOne({ email });
  if (!data) {
    return res.redirect("/login");
  }
  const match = await bcrypt.compare(password, data.password);
  if (!match) {
    return res.redirect("/login");
  }
  const payLoad = { id: data.id, email: data.email };

  res.cookie("token", jwt.signToken(payLoad), {
    httpOnly: true,
    sameSite: "strict"
  });
  return res.redirect("/home");
};

module.exports = auth;
