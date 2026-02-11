const userModel = require("../models/user.js");
const bcrypt = require("../utils/bcrypt");

async function createUser(username, email, password) {
  const data = await checkUser(username, email);

  if (!data.success) return data;

  const hash = await bcrypt.hashPassword(password);

  const user = await userModel.create({ username, email, password: hash });
  return { success: true, field: "", user };
}

async function login(email, password) {
  const user = await userModel.findOne({ email });

  if (!user) {
    return { success: false, field: "email" };
  }
  const data = await bcrypt.verifyPassword(password, user.password);

  if (!data.success) {
    return { success: false, field: "password" };
  }
  return { success: true, field: "" };
}

async function checkUser(username, email) {
  const userCheck = await userModel.findOne({ username: username });
  if (userCheck) return { success: false, field: "username" };

  const emailCheck = await userModel.findOne({ email: email });
  if (emailCheck) return { success: false, field: "email" };

  return { success: true };
}

module.exports = { createUser, login, checkUser };
