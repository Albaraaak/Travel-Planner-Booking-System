const bcrypt = require("bcrypt");
const User = require("../models/User");

const loginUser = async (username, password) => {
  const user = await User.findOne({ username });

  if (!user) {
    throw new Error("User not found");
  }

  if (!user.isVerified) {
    throw new Error("Please verify your email before login");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Incorrect password");
  }

  return user;
};

module.exports = { loginUser };