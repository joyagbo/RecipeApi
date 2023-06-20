const express = require('express')
const {userLogin, registerUser,getUsers,
    updateUser,
    deleteUser,} = require('../controllers/user.controller');
const { getRecipes, createRecipe } = require('../controllers/recipe.controller');
const { verifyToken } = require('../middleware/auth');
const route = express.Router()

route.post('/login', verifyToken,userLogin);
route.post('/register',registerUser)
route.get('/users', getUsers);
route.put('/users/:id', updateUser);
route.delete('/users/:id', deleteUser);
route.post('/recipe', createRecipe)
route.get('/recipe', getRecipes)



module.exports = {route}