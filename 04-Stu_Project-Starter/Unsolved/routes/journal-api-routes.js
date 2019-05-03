var db = require("../models");

module.exports = function(app) {
  app.get("/api/journal", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.journal.findAll({}).then(function(dbjournal) {
      res.json(dbjournal);
    });
  });

  app.get("/api/journal/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.journal
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbjournal) {
        res.json(dbjournal);
      });
  });

  app.post("/api/journal", function(req, res) {
    db.journal.create(req.body).then(function(dbjournal) {
      res.json(dbjournal);
    });
  });

  app.delete("/api/journal/:id", function(req, res) {
    db.journal
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(function(dbjournal) {
        res.json(dbjournal);
      });
  });
};
