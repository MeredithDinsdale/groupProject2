var db = require("../models");

module.exports = function(app) {
  app.get("/api/journal", function(req, res) {
    db.journal.findAll({}).then(function(dbjournal) {
      res.json(dbjournal);
    });
  });

  app.get("/api/journal/:id", function(req, res) {
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
