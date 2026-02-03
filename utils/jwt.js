const jwt = require("jsonwebtoken");

var config = require("../config.js");

exports.signToken = payLoad => {
  return jwt.sign(payLoad, config.SECRET, {
    expiresIn: "15M"
  });
};
