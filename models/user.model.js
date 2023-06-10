const Sequelize = require("sequelize")
const sequelize = require("../config/connect.js");

const User = sequelize.define('user', {
  userId:{
    type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
  },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  
  module.exports = {User};
