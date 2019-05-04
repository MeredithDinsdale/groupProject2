module.exports = function(sequelize, DataTypes) {
  var rpiData = sequelize.define("rpi", {
    light: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    temp: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return rpiData;
};
