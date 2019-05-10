var db = require("../models");

module.exports = function(app) {
  app.get("/api/data/", function(req, res) {
    db.rpi.findAll({ }).then(function(dbrpi) {
      res.json(dbrpi);
    });
  });

  app.get("/api/data/:mac_address", function(req, res) {
    db.rpi
      .findOne({
        where: {
          mac_address: req.params.mac_address
        }
      })
      .then(function(dbrpi) {
        res.json(dbrpi);
      });
  });

  app.put("/api/data", function(req, res) {
    db.rpi
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbrpi) {
        res.json(dbrpi);
      });
  });

  app.post("/api/data", function(req, res) {
    db.rpi
      .create({
        light: req.body.light,
        temp: req.body.temp
      })
      .then(function(dbrpi) {
        res.json(dbrpi);
      });
  });
};
