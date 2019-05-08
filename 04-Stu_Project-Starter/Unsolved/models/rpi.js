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
  rpiData.associate = function(models) {
    // We're saying that rpiData data should belong to a user
    rpiData.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return rpiData;
};
