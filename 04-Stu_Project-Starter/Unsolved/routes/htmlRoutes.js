// Dependencies
// =============================================================
const path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notHandlebars/index.html"));
  });

  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notHandlebars/login.html"));
  });

  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notHandlebars/signup.html"));
  });

  app.get("/rpisetup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notHandlebars/rpisetup.html"));
  });

  app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notHandlebars/main.html"));
  });

  app.get("/journal", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notHandlebars/journal.html"));
  });

  app.get("/timeline", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/notHandlebars/timeline.html"));
  });

};
