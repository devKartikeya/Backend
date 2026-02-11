var validator = require("validator");

function checkUser(req, res, next) {
  const { username, email, password } = req.body;

  if (
    !validator.isAlphanumeric(username) ||
    !validator.isLength(username, { min: 6 })
  ) {
    return  res.redirect('/');;
  }
  if (!validator.isLength(password, { min: 6 })) {
    return  res.redirect('/');;
  }
  if (!validator.isEmail(email) || !email.endsWith('@gmail.com')){
    return  res.redirect('/');;
  }
  next();
}


function verifyLogin(req, res, next) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ success: false, field: "email" });
  }
  if (!validator.isEmail(email) || !email.endsWith('@gmail.com')) {
    return res.json({ success: false, field: "email" });
  }
  if (!validator.isLength(password, { min: 6 })) {
    return res.json({ success: false, field: "password" });
  }
  next();
}

module.exports = { checkUser, verifyLogin };