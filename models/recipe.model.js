const Sequelize  = require("sequelize");
const sequelize = require("../config/connect.js");

const Recipe = sequelize.define('recipe', {
    recipeId:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    recipeName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ingredients: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    instructions: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
  });
  
  module.exports = {Recipe};