var jwt = require("jsonwebtoken");

function generateToken(payLoad) {
    const token = jwt.sign(payLoad, process.env.SECRET) 
    return token;
}

module.exports = generateToken;