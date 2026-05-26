const User = require("../models/User");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = async (to, subject, text) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  });
};

const insertUser = async (
  firstName,
  lastName,
  username,
  email,
  password,
  phoneNumber,
  location,
  age
) => {
  const hashedPass = await bcrypt.hash(password, 12);

  const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();

  const userToCreate = {
    firstName,
    lastName,
    username,
    email,
    password: hashedPass,
    phoneNumber,
    location,
    age,
    isVerified: false,
    verificationCode,
  };

  const newUser = await User.create(userToCreate);

  await sendEmail(
    email,
    "Verify Your LET'S GO Account",
    `Your verification code is: ${verificationCode}`
  );

  return {
    id: newUser._id,
    message: "Signup successful. Verification code sent to your email.",
  };
};

const verifyEmail = async (email, code) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  if (user.verificationCode !== code) {
    throw new Error("Invalid verification code");
  }

  user.isVerified = true;
  user.verificationCode = null;

  await user.save();

  return { message: "Email verified successfully" };
};

const forgotPassword = async (email) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const resetCode = Math.floor(100000 + Math.random() * 900000).toString();

  user.resetPasswordCode = resetCode;
  user.resetPasswordExpires = Date.now() + 10 * 60 * 1000;

  await user.save();

  await sendEmail(
    email,
    "Reset Your LET'S GO Password",
    `Your password reset code is: ${resetCode}`
  );

  return { message: "Reset code sent to your email" };
};

const resetPassword = async (email, code, newPassword) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  if (
    user.resetPasswordCode !== code ||
    !user.resetPasswordExpires ||
    user.resetPasswordExpires < Date.now()
  ) {
    throw new Error("Invalid or expired reset code");
  }

  user.password = await bcrypt.hash(newPassword, 12);
  user.resetPasswordCode = null;
  user.resetPasswordExpires = null;

  await user.save();

  return { message: "Password reset successfully" };
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const getUsers = async () => {
  return await User.find();
};

const changeUserPassword = async (userId, currentPassword, newPassword) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(currentPassword, user.password);

  if (!isMatch) {
    throw new Error("Current password is incorrect");
  }

  user.password = await bcrypt.hash(newPassword, 12);

  await user.save();

  return { message: "Password updated" };
};

const updateUser = async (userId, data) => {
  const updatedUser = await User.findByIdAndUpdate(userId, data, {
    new: true,
  });

  if (!updatedUser) {
    throw new Error("User not found");
  }

  return updatedUser;
};

const deleteUser = async (userId) => {
  const deletedUser = await User.findByIdAndDelete(userId);

  if (!deletedUser) {
    throw new Error("User not found");
  }

  return deletedUser;
};

module.exports = {
  insertUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getUserById,
  getUsers,
  changeUserPassword,
  updateUser,
  deleteUser,
};