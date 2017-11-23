'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    Description: {
      type:DataTypes.STRING,
      allowNull: false
    },
    Complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    }
  });

  TodoItem.associate = (models) => {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };
  return TodoItem;
};