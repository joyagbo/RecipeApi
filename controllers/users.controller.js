const User = require("../models/user.model.js")
const bcrypt = require("bcrypt");
const saltRounds = bcrypt.genSaltSync(10);

const getAllUsers = async (req, res) => {
    try {
      const result = await users.find();
      res.status(200).json({
        status: "success",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "fail",
        message: error.message,
      });
    }
  };
  

  //Newuser registration
  const newUser = async (req, res)=>{
    try{
        const {
            username,
            password
        }= req.body

        // Check if user with the same email already exists
        const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ 
        status: "fail",
        message: 'User already exists' });
    }
  } catch(error){}
  //hash password
  const hashedPassword = await bcrypt.hash(password, salt);

  //create newuser
  const newUser = await User.create{
    username,
    password: 
  }
}
  module.exports ={getAllUsers,newUser} 