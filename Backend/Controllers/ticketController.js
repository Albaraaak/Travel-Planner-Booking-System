const { validationResult } = require("express-validator");

const { insertTicket, getTickets, getTicketById, updateTicket, deleteTicket} = require("../services/ticketService");
const Ticket = require("../models/Ticket");
// CREATE
const insertTicketController = async (req, res) => {
  try {
    const tickets = req.body;

    // if array → insertMany
    if (Array.isArray(tickets)) {
      const result = await Ticket.insertMany(tickets);

      return res.status(201).json({
        success: true,
        data: result,
        message: "Multiple tickets created"
      });
    }

    // if single object → normal insert
    const result = await Ticket.create(tickets);

    res.status(201).json({
      success: true,
      data: result,
      message: "Ticket created"
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server error"
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
const adminDeleteUserController = async (req, res) => {
  try {
    const { id } = req.params;

    await deleteUser(id);

    res.status(200).json({
      success: true,
      message: "User deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server error"
    });
  }
};

const adminChangeRoleController = async (req, res) => {
  try {
    const { id } = req.params;
    const { role } = req.body;

    const response = await updateUser(id, { role });

    res.status(200).json({
      success: true,
      data: response,
      message: "User role updated successfully"
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server error"
    });
  }
};
module.exports = { insertTicketController,getTicketsController,getTicketByIdController,updateTicketController,deleteTicketController
,adminDeleteUserController,adminChangeRoleController};