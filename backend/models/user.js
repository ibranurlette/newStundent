'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    foto: DataTypes.STRING,
    status: DataTypes.ENUM("admin", "user")
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};