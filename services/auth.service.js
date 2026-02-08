const userModel = require("../models/user.js");
const hashPassword = require("../utils/bcrypt")

async function createUser(username, email, password) {
    const hash = await hashPassword(password);

    const user = await userModel.create(
        { username, email, password: hash }
    );
    return user;
}

module.exports = createUser;