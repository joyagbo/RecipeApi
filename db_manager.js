const sequelize = require("./config/connect");
const Recipe = require("./models/recipe.model");
const User = require("./models/user.model");


  sequelize.sync().then(() => {
    console.log('Tables created successfully.');
  }).catch((error) => {
    console.error('Error creating tables:', error);
  });
