var db = require("../models");

module.exports = function(app) {
  app.get("/api/journal/", function(req, res) {
    db.journal.findAll({}).then(function(dbjournal) {
      res.json(dbjournal);
    });
  });

  app.get("/api/journal/:date", function(req, res) {
    db.journal
      .findAll({
        where: {
          date: req.params.date
        }
      })
      .then(function(dbjournal) {
        res.json(dbjournal);
      });
  });

  app.post("/api/journal", function(req, res) {
    db.journal
      .create({
        title: req.body.title,
        body: req.body.body
      })
      .then(function(dbjournal) {
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

  app.put("/api/journal", function(req, res) {
    db.journal
      .update(req.body, {
        where: {
          id: req.body.id
        }
      })
      .then(function(dbjournal) {
        res.json(dbjournal);
      });
  });
};
