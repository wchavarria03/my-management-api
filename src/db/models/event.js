'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    eventDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    isDeleted: DataTypes.BOOLEAN,
  });

  Event.associate = (models) => {
    Event.hasMany(models.Guest, {
      foreignKey: 'eventId',
      as: 'guests',
    });
    Event.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return Event;
};