const { validationResult } = require('express-validator');
const {
  insertUser,
  verifyEmail,
  forgotPassword,
  resetPassword,
  getUserById,
  getUsers,
  changeUserPassword,
  updateUser,
  deleteUser,
} = require("../services/userServices");

const insertUserController = async (req, res) => {
  try {
    console.log("Hi",req.body)
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
       return res.status(400).json({
        success: false,
        error: errors.array(),
        message: "Validation error"   
    })
    }
    const { firstName, lastName, username, email, password,phoneNumber,location,age } = req.body;
    const response = await insertUser(firstName, lastName, username, email, password,phoneNumber,location,age);
      res.status(201).json({
        success: true,
        data: response,
        message: "Signed Up Successfuly"   
    })

  } catch (error) {
      res.status(500).json({
        success: false,
        error: error.message,
        message: "Server error"   
    });
  }

};
const getUserByIdController = async (req,res) => {
  try{
  const {id}= req.params;
  const response = await getUserById(id);
   res.status(200).json({
        success:true,
        data: response,
        message:' User returned Successfully'
    })
  }catch(err){
     return res.status(500).json({
        success:false,
        error: err.message,
        message:'Server error'
    })
  }

}

const getUsersController = async (req,res) => {
  try{

  const response = await getUsers();
   res.status(200).json({
        success:true,
        data: response,
        message:' Users returned Successfully'
    })
  }catch(err){
     return res.status(500).json({
        success:false,
        error: err.message,
        message:'Server error'
    })
  }

}

const changePasswordController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: errors.array(),
        message: "Validation error"
      });
    }

    const userId = req.user.id;
    const { currentPassword, newPassword } = req.body;

    const response = await changeUserPassword(userId, currentPassword, newPassword);

    res.status(200).json({
      success: true,
      data: response,
      message: "Password updated successfully ✅"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server error"
    });
  }
};
const updateProfileController = async (req, res) => {
  try {
    const userId = req.user.id;

    const response = await updateUser(userId, req.body);

    res.status(200).json({
      success: true,
      data: response,
      message: "Profile updated successfully ✅"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server error"
    });
  }
};
const deleteProfileController = async (req, res) => {
  try {
    const userId = req.user.id;

    await deleteUser(userId);

    res.status(200).json({
      success: true,
      message: "Profile deleted successfully ❌"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server error"
    });
  }
};
const verifyEmailController = async (req, res) => {
  try {
    const { email, code } = req.body;

    const response = await verifyEmail(email, code);

    res.status(200).json({
      success: true,
      message: response.message,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const forgotPasswordController = async (req, res) => {
  try {
    const { email } = req.body;

    const response = await forgotPassword(email);

    res.status(200).json({
      success: true,
      message: response.message,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const resetPasswordController = async (req, res) => {
  try {
    const { email, code, newPassword } = req.body;

    const response = await resetPassword(email, code, newPassword);

    res.status(200).json({
      success: true,
      message: response.message,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  insertUserController,
  getUserByIdController,
  getUsersController,
  changePasswordController,
  updateProfileController,
  deleteProfileController,
  verifyEmailController,
  forgotPasswordController,
  resetPasswordController,
};