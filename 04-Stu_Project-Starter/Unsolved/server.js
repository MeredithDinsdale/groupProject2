//require("dotenv").config();
var express = require("express");
var exphbs = require("express-handlebars");
var passport = require("./config/passport");
//var env = require("dotenv").load();

var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
//==Express
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
//==Passport
app.use(passport.initialize());
app.use(passport.session());
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );

// Handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

// Routes
require("./routes/journal-api-routes")(app);
require("./routes/schedule-api-routes")(app);
require("./routes/rpi-api-routes")(app);
require("./routes/auth-api-routes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port 3000. Visit http://localhost:3000/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
