'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsToMany(models.Events, { through: 'UserActivities'})
      Users.belongsTo(models.Address)
    }
  };
  Users.init({
    id: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    Identifier: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};