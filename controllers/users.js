const User = require("../models/user");

const getAllUsers = async (req, res) => {
  const myUsers = await User.find({});
  res.status(200).json({ myUsers });
};

const registerUser = async (req, res) => {
  console.log(req.body);

  const myUsers = await User.find({});
  console.log(myUsers);
  const user = req.body;
  const data = new User(user);
  const val = await data.save();
  const myUsers1 = await User.find({});
  console.log(myUsers1);
  res.json(val);
};

module.exports = { getAllUsers, registerUser };
