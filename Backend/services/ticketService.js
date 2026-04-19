const Ticket = require("../models/Ticket");

// CREATE
const insertTicket = async (
 from,
  to,
  departureDate,
  returnDate,
  price,
  availableSeats,
  type,
) => {
  try {
    const ticketToCreate = {
      from,
      to,
      departureDate,
      returnDate,
      price,
      availableSeats,
      type,
    
    };

    const newTicket = await Ticket.create(ticketToCreate);

    return {
      id: newTicket._id,
    };
  } catch (err) {
    throw err;
  }
};

// GET ALL
const getTickets = async () => {
  try {
    const tickets = await Ticket.find();
    return tickets;
  } catch (err) {
    throw err;
  }
};

// GET BY ID
const getTicketById = async (id) => {
  try {
    const ticket = await Ticket.findById(id);
    return ticket ? ticket : [];
  } catch (err) {
    throw err;
  }
};

// UPDATE
const updateTicket = async (id, data) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(
      id,
      data,
      { new: true }
    );

    if (!updatedTicket) {
      throw new Error("Ticket not found");
    }

    return updatedTicket;
  } catch (err) {
    throw err;
  }
};

// DELETE
const deleteTicket = async (id) => {
  try {
    const deletedTicket = await Ticket.findByIdAndDelete(id);

    if (!deletedTicket) {
      throw new Error("Ticket not found");
    }

    return deletedTicket;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  insertTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket
};