const User =require("../models/User")
const bcrypt = require ('bcrypt');


const insertUser = async (firstName, lastName, username, email, password,phoneNumber,location,age) => {
  try{
    const hashedPass = await bcrypt.hash(password,12);
    console.log(hashedPass)
  const userToCreate = {firstName, lastName, username, email, password: hashedPass,phoneNumber,location,age}
  if (location && location.trim()!==''){
    userToCreate.location = location
  }
   if (age){
    userToCreate.age = age
  }
  //save in db
 const newUser = await User.create(userToCreate)
  return {
    id:  newUser._id
    
  };
}catch(err){
 throw err;
}
}
const getUserById = async(id) => {
    try{
    const user = await User.findById(id);
    return user;
    }catch(err){
    throw err;
}
}

const getUsers = async() => {
    try{
      const users = await User.find();
      return users;
    }
    catch(err){
    throw err;
}
}
const changeUserPassword = async (userId, currentPassword, newPassword) => {
  const user = await User.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(currentPassword, user.password);

  if (!isMatch) {
    throw new Error("Current password is incorrect");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12);
  user.password = hashedPassword;

  await user.save();

  return { message: "Password updated" };
};
const updateUser = async (userId, data) => {
  const updatedUser = await User.findByIdAndUpdate(
    userId,
    data,
    { new: true }
  );

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


module.exports = { insertUser,getUserById,getUsers,changeUserPassword,updateUser,deleteUser}