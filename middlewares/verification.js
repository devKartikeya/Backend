var validator = require("validator");

const checkUser = require("../utils/checkUser");

module.exports = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    return res.status(400).json({ messgae: `Invalid details!` });
  }

  if (
    !validator.isEmail(email) ||
    !validator.isLength(password, { min: 6, max: 30 })
  ) {
    return res.status(400).json({ messgae: `Invalid details` });
  }

  const result = await checkUser({ email, username });
  if (result.exists) {
    if (result.emailExists) {
      return res.status(400).json({ message: `Email already exists` });
    }
    if (result.usernameExists) {
      return res.status(400).json({ message: `Username already exists` });
    }
  }
  next();
};
