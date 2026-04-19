const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  from: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  },
  departureDate: {
    type: String,
    required: true
  },
  returnDate: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  availableSeats: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    enum: ["economy", "business", "first-class"],
    required: true
  },
  

}, { timestamps: true });

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;