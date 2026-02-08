var validator = require("validator");

function checkUser(req, res, next) {
  const { username, email, password } = req.body;

  if (
    !validator.isAlphanumeric(username) ||
    !validator.isLength(username, { min: 6 })
  ) {
    return res.send(`Not a valid Username`);
  }
  if (!validator.isLength(password, { min: 6 })) {
    return res.send(`Password length is smaller than 6`);
  }
  if (!validator.isEmail(email) || !email.endsWith('@gmail.com')){
    return res.send(`Invalid email`);
  }
  next();
}

module.exports = checkUser;
