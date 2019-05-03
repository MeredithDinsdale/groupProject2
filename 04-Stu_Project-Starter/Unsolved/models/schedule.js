/* eslint-disable camelcase */
module.exports = function(sequelize, DataTypes) {
  var schedule = sequelize.define("schedule", {
    plant: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    plant_date: {
      type: DataTypes.INTEGER,
      allowNull: false,
      len: [1]
    },
    maturity_timeline: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });
  return schedule;
};
