/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var schedule = sequelize.define("schedule", {
    plant: {
      type: DataTypes.STRING,
      allowNull: false
    },
    plant_date: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    maturity_timeline: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return schedule;
};
