const { validationResult } = require("express-validator");

const { insertTicket, getTickets, getTicketById, updateTicket, deleteTicket} = require("../services/ticketService");

// CREATE
const insertTicketController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: errors.array(),
        message: "Validation error",
      });
    }

    const {
      from,
      to,
      departureDate,
      returnDate,
      price,
      availableSeats,
      type,
      airline,
      duration
    } = req.body;

    const response = await insertTicket(
      from,
      to,
      departureDate,
      returnDate,
      price,
      availableSeats,
      type,
      airline,
      duration
    );

    res.status(201).json({
      success: true,
      data: response,
      message: "Ticket added successfully",
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

// GET ALL
const getTicketsController = async (req, res) => {
  try {
    const response = await getTickets();

    res.status(200).json({
      success: true,
      data: response,
      message: "Tickets returned successfully",
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

// GET BY ID
const getTicketByIdController = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await getTicketById(id);

    if (!response) {
      return res.status(404).json({
        success: false,
        error: "No ticket found with this ID",
        message: "Not found",
      });
    }

    res.status(200).json({
      success: true,
      data: response,
      message: "Ticket returned successfully",
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

// UPDATE
const updateTicketController = async (req, res) => {
  try {
    const { id } = req.params;

    const response = await updateTicket(id, req.body);

    res.status(200).json({
      success: true,
      data: response,
      message: "Ticket updated successfully ✅",
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

// DELETE
const deleteTicketController = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteTicket(id);

    res.status(200).json({
      success: true,
      message: "Ticket deleted successfully ❌",
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error",
    });
  }
};

module.exports = { insertTicketController,getTicketsController,getTicketByIdController,updateTicketController,deleteTicketController
};