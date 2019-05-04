var db = require("../models");

module.exports = function(app) {
  app.get("/api/schedule", function(req, res) {
    db.schedule.findAll({}).then(function(dbschedule) {
      res.json(dbschedule);
    });
  });

  app.get("/api/schedule/:id", function(req, res) {
    db.schedule
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbschedule) {
        res.json(dbschedule);
      });
  });

  app.post("/api/schedule", function(req, res) {
    db.schedule.create(req.body).then(function(dbschedule) {
      res.json(dbschedule);
    });
  });

  app.delete("/api/schedule/:id", function(req, res) {
    db.schedule
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbschedule) {
        res.json(dbschedule);
      });
  });
};
