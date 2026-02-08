var express = require("express");
var router = express.Router();
var multer = require("multer");

const authController = require("../controllers/auth.controller");
const checkUser = require("../middlewares/auth.middleware");
var logger = require("../utils/logger");
const upload = multer();

router.get('/', (req, res) => {
  logger.info("Sign-up Page");
  res.render('index', { title: "Express" });
});

router.get('/home', authController.showHomePage);

router.get('/login', (req, res) => {
  res.render('login');
})

router.post('/sign-up', checkUser, authController.register);

module.exports = router;