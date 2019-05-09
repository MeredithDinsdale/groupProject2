// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Character" model that matches up with DB
var Character = sequelize.define("rpi", {
  // the routeName gets saved as a string
  light: Sequelize.BOOLEAN,
  // the name of the character (a string)
  temp: Sequelize.FLOAT,
  // the character's role (a string)
}, {
  // disable the modification of tablenames; By default, sequelize will automatically
  // transform all passed model names (first parameter of define) into plural.
  // if you don't want that, set the following
  freezeTableName: true
});

// Syncs with DB
rpi.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = rpi;
