module.exports = function(sequelize, DataTypes) {
  var rpiData = sequelize.define("rpi", {
    light: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    temp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    mac: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  rpiData.associate = function(models) {
    // We're saying that rpi data should belong to a user
    rpiData.belongsTo(models.User, {
      foreignKey: {
        allowNull: true
      }
    });
  };
  return rpiData;
};
