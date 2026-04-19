const express = require('express');
const router = express.Router();

const { insertTicketController, getTicketsController, updateTicketController, getTicketByIdController, deleteTicketController } = require('../Controllers/ticketController');

router.post("/",  insertTicketController);
router.get("/", getTicketsController);
router.get("/:id", getTicketByIdController);
router.put("/:id",  updateTicketController);
router.delete("/:id",  deleteTicketController);
module.exports = router;