const { sequelize } = require("./config/connect");
const { Recipe } = require("./models/recipe.model");
const { User } = require("./models/user.model");

sequelize.sync().then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})