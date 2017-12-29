'use strict';
module.exports = (sequelize, DataTypes) => {
  const Guest = sequelize.define('Guest', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    extraSpaces: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    isConfirmed: {
      type: DataTypes.BOOLEAN,
    },
    confirmedSpaces: {
      type: DataTypes.INTEGER,
    },
  });

  Guest.associate = (models) => {
    Guest.belongsTo(models.Event, {
      foreignKey: 'eventId',
      onDelete: 'CASCADE',
    });
  };
  return Guest;
};