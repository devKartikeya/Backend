const userModel = require("../models/user");

async function checkUser({ email, username }) {
  const data = await userModel.findOne({
    $or: [{ email }, { username }]
  });
  if (!data) {
    return {
      exists: false,
      emailExists: false,
      usernameExists: false
    };
  }

  return {
    exists: true,
    emailExists: data.email === email,
    usernameExists: data.username === username
  };
}

module.exports = checkUser;
