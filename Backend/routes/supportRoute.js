const express = require("express");
const router = express.Router();

const authenticateToken = require("../middleware/authentication");
const adminOnly = require("../middleware/adminOnly");

const SupportMessage = require("../models/SupportMessage");
const User = require("../models/User");

router.post("/send", authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    const newMessage = await SupportMessage.create({
      userId: user._id,
      username: user.username,
      email: user.email,
      message: req.body.message,
    });

    res.status(201).json({
      success: true,
      data: newMessage,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});

router.get(
  "/all",
  authenticateToken,
  adminOnly,
  async (req, res) => {
    try {
      const messages = await SupportMessage.find().sort({
        createdAt: -1,
      });

      res.status(200).json({
        success: true,
        data: messages,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);

router.put(
  "/reply/:id",
  authenticateToken,
  adminOnly,
  async (req, res) => {
    try {
      const updated = await SupportMessage.findByIdAndUpdate(
        req.params.id,
        {
          reply: req.body.reply,
          status: "resolved",
        },
        { new: true }
      );

      res.status(200).json({
        success: true,
        data: updated,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);

router.delete(
  "/:id",
  authenticateToken,
  adminOnly,
  async (req, res) => {
    try {
      await SupportMessage.findByIdAndDelete(req.params.id);

      res.status(200).json({
        success: true,
        message: "Message deleted",
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: err.message,
      });
    }
  }
);router.get("/my-inbox", authenticateToken, async (req, res) => {
  try {
    const messages = await SupportMessage.find({
      userId: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: messages,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
});
module.exports = router;