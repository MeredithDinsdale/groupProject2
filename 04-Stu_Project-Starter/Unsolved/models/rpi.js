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
    mac_address: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  rpi.associate = function(models) {
    // We're saying that rpi data should belong to a user
    rpi.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return rpiData;
};
