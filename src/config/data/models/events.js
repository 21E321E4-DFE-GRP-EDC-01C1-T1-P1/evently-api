'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Events extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Events.belongsToMany(models.Users, { through: 'UserActivities' })
      Events.belongsTo(models.Address)
      Events.belongsTo(models.Activity)
    }
  };
  Events.init({
    name: DataTypes.STRING,
    maxParticipants: DataTypes.INTEGER,
    numbParticipants: DataTypes.INTEGER,
    day: DataTypes.DATEONLY,
    startTime: DataTypes.DATEONLY,
    endTime: DataTypes.DATEONLY,
    waitEvent: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Events',
  });
  return Events;
};