const sequelize  = require("../config/connect.js");
const {User} = require("../models/user.model.js")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const saltRounds = bcrypt.genSaltSync(10);
const secret ="secret"

// Retrieve all users
const getUsers = async (req, res) => {
  try {
    const result = await User.findAll();
    res.status(200).json({
      status: "success",
      data: result,
    });

  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

//User login
const userLogin = async(req, res) =>{
  try {
    const { username, password } = req.body;

    // Find the user with the provided username
    const user = await User.findOne({
      where: {
        username,
      },
    });

    // If user is not found, return authentication failed
    if (!user) {
      return res.status(401).json({ error: 'user not found' });
    }

    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // checking If password is not invalid
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ userId: user.id }, "secret", {
      expiresIn: '7 days', // Token expiration time
    });

    // Authentication successful
    res.status(200).json({ message: 'successful', token });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
}


//New User Registraion
const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({
      where: {
        username,
      },
    });

    if (existingUser) {
      return res.status(409).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user record
    const newUser = await User.create({
      username,
      password: hashedPassword,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

// Update an existing user
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password } = req.body;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    await user.update({
      username,
      password: hashedPassword,
    });

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};


// Delete a user
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    await user.destroy();

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

module.exports = {
  userLogin, registerUser,
  getUsers,
  updateUser,
  deleteUser,
};
