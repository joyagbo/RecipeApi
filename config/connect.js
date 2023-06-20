const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()


//console.log("this is dotenv",process.env.DB_USER,process.env.DB_NAME,process.env.PASSWORD)

const sequelize = new Sequelize('recipe','root' , '08134715847', {
    dialect:"mysql", 
    host:"localhost",
    logging: console.log
});
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Database connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

module.exports = sequelize;