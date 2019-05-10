/* eslint-disable camelcase */
/* eslint-disable prettier/prettier */
var db = require("../models");

module.exports = function(app) {
  app.get("/api/data/", function(req, res) {
    db.rpi.findAll({}).then(function(dbrpi) {
      res.json(dbrpi);
    });
  });

  app.get("/api/data/:mac_address", function(req, res) {
    db.rpi
      .findOne({
        where: {
          // eslint-disable-next-line camelcase
          mac_address: req.params.mac_address
        }
      })
      .then(function(dbrpi) {
        res.json(dbrpi);
      });
  });

  app.put("/api/data/light/:mac_address/:light", function(req, res) {
    lightVal = req.params.light;

    if (lightVal === "0") {
      lightVal = 0;
    } else if (lightVal === "1") {
      lightVal = 1;
    } else {
      lightVal = 0;
    }

    db.rpi.update(
      {
        light: lightVal
      },
      {
        where: {
          mac_address: req.params.mac_address
        }
      }
    ).then(function() {
      //res.json(updatePi);
      res.send(200);
    });
  });

  app.put("/api/data/temp/:mac_address/:temp", function(req, res){
   
    tempVal = parseInt(req.params.temp);

    console.log(tempVal);

    db.rpi.update({
      temp: tempVal
    },{
      where: {
        mac_address: req.params.mac_address
      }
    }).then(function(){
      res.send(200);
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
