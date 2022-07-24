const { DataTypes } = require("sequelize");

const createActivityModal = (orm) => {
  const Activities = orm.define("Activities", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    startTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    finishTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activityType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return Activities;
};

module.exports = createActivityModal;
