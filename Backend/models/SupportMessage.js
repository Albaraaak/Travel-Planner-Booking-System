const mongoose = require("mongoose");

const supportMessageSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    username: {
      type: String,
    },

    email: {
      type: String,
    },

    message: {
      type: String,
      required: true,
    },

    reply: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["pending", "resolved"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "SupportMessage",
  supportMessageSchema
);