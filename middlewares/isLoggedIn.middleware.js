const jwt = require("../utils/jwt");

function isLoggedIn(req, res, next){
    const token = req.cookies.token;
    if (!token) {
        return res.redirect('/login');
    }
    const decoded = jwt.verifyToken(token);
    if (!decoded) {
        return res.redirect('/login');
    }

    req.user = decoded;
    next();
}

module.exports = isLoggedIn;