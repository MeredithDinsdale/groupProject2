var db = require("../models");

module.exports = function(app) {
  app.get("/api/schedule", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.schedule.findAll({}).then(function(dbschedule) {
      res.json(dbschedule);
    });
  });

  app.get("/api/schedule/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
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
