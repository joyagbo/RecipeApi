const sequelize  = require("../config/connect");
const { Recipe } = require("../models/recipe.model");
const bcrypt = require("bcrypt");
const saltRounds = bcrypt.genSaltSync(10);

const createRecipe = async (req, res) => {
    try {
      const { recipeName, ingredients, instructions } = req.body;
  
      // Create a new recipe
      const newRecipe = await Recipe.create({
        recipeName,
        ingredients,
        instructions,
      });
  
      res.status(201).json({ message: 'Recipe created successfully', recipe: newRecipe });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
  
  const getRecipes = async (req, res) => {
    try {
      // Fetch all recipes from the database
      const recipes = await Recipe.findAll();
  
      res.status(200).json({ recipes });
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  };
  
  module.exports = {
    createRecipe,
    getRecipes,
  };