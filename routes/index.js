var express = require("express");
var router = express.Router();

const authController = require("../controllers/auth.controller");
const pageController = require("../controllers/page.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const isLoggedIn = require("../middlewares/isLoggedIn.middleware")

router.get("/", pageController.showIndexPage);

router.post("/sign-up", authMiddleware.checkUser, authController.register);

router.get("/home", isLoggedIn, pageController.showHomePage);

router.get("/login", pageController.showLoginPage);

router.post("/checkUser", authController.checkUser);

router.post("/log-in", authMiddleware.verifyLogin, authController.login)

module.exports = router;