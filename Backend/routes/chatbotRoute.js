const express = require("express");
const router = express.Router();

const { askChatbot } = require("../Controllers/chatbotController");

router.post("/", askChatbot);

module.exports = router;