function showIndexPage(req, res) {
  res.render("index", { title: 'Express' });
}

function showLoginPage(req, res) {
  res.render("login");
};

function showHomePage(req, res) {
  res.render("home");
};

module.exports = { showIndexPage, showLoginPage, showHomePage };
