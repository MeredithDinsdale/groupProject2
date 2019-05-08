// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Character = require("../models/rpi.js/index.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/rpi", function(req, res) {

      Character.findAll({}).then(function(result) {
        return res.json(result);
      });
    });
  } 

