const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authentication");
const adminOnly = require("../middleware/adminOnly");
const User = require("../models/User");

// GET ALL USERS - ADMIN ONLY
router.get("/getAllUsers", authenticateToken, adminOnly, async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      data: users,
      message: "Users returned successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// DELETE USER - ADMIN ONLY
router.delete("/delete-user/:id", authenticateToken, adminOnly, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

// CHANGE ROLE - ADMIN ONLY
router.put("/change-role/:id", authenticateToken, adminOnly, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { role: req.body.role },
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: user,
      message: "Role changed successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

module.exports = router;