const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model { }

Category.init(
  {
    // define columns
    // column will go here
    id: {
      type: DataTypes.INTEGER,
      // allow null is not needed here because primarykey has it feature in it and unique feature.
      allowNull: false,
      // primary key
      primaryKey: true,
      // auto increment
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      // here it is needed to be/ we dont have other things that has it feature by default
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
