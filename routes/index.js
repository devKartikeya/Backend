var express = require("express");
var router = express.Router();
var multer = require("multer");
var chalk = require("chalk");

const auth = require("../controllers/auth")
const userModel = require("../models/user");
const checkUser = require("../utils/checkUser");
const register = require("../controllers/register");
const verification = require("../middlewares/verification.js");

const upload = multer();
const log = console.log;

router.get('/', (req, res) => {
  log(chalk.green("Sign-up Page"));
  res.render('index', { title: "Express" });
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/sign-in', auth);

router.get('/home', (req, res)=>{
  res.render('home')
})

router.post('/signup', verification, register);

router.post("/verify-User", async (req, res) => {
  const { email, username } = req.body;
  const result = await checkUser({ email, username })
  res.json(result);
});

module.exports = router;