'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isDeleted: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasMany(models.Event, {
      foreignKey: 'userId',
      as: 'events',
    });
  };
  return User;
};