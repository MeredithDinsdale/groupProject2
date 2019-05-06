module.exports = function(sequelize, DataTypes) {
  var journal = sequelize.define("journal", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return journal;
};
