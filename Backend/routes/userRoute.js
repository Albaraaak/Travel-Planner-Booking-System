const express = require("express");
const { insertUserValidation } = require("../validators/userValidation");

const {
  insertUserController,
  getUserByIdController,
  getUsersController,
  changePasswordController,
  updateProfileController,
  deleteProfileController,
  verifyEmailController,
  forgotPasswordController,
  resetPasswordController,
} = require("../Controllers/userControllers");

const authenticateToken = require("../middleware/authentication");
const { loginController } = require("../Controllers/authController");
const User = require("../models/User");
const adminOnly = require("../middleware/adminOnly");

const router = express.Router();

router.post("/signup", insertUserValidation, insertUserController);
router.post("/login", loginController);
router.post("/verify-email", verifyEmailController);
router.post("/forgot-password", forgotPasswordController);
router.post("/reset-password", resetPasswordController);
router.get("/getUserById/:id", authenticateToken, getUserByIdController);
router.put("/changePassword", authenticateToken, changePasswordController);
router.put("/updateProfile", authenticateToken, updateProfileController);

router.delete("/deleteProfile", authenticateToken, deleteProfileController);

module.exports = router;