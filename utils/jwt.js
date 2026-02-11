var jwt = require("jsonwebtoken");

function generateToken(payLoad) {
    const token = jwt.sign(payLoad, process.env.SECRET);
    return token;
};

function verifyToken(token) {
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        return decoded;
    } catch (err) {
        return null;
    }
};

module.exports = {generateToken, verifyToken};