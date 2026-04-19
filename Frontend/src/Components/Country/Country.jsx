import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Country.css";

function Country() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) return <p>No country selected</p>;

  const { country } = state;

  // ✈️ SAME DATA BUT MIXED TYPES
  const ticketsData = [
    {
      country: "France",
      tickets: [
        { id: 1, from: "Beirut", type: "oneway", date: "2026-06-10", price: 500, seat: "A1" },
        { id: 2, from: "Dubai", type: "roundtrip", date: "2026-06-15", returnDate: "2026-06-25", price: 650, seat: "B2" },
        { id: 3, from: "London", type: "oneway", date: "2026-06-20", price: 700, seat: "C3" },
      ],
    },
    {
      country: "Japan",
      tickets: [
        { id: 1, from: "Beirut", type: "roundtrip", date: "2026-07-01", returnDate: "2026-07-15", price: 900, seat: "A2" },
        { id: 2, from: "Paris", type: "oneway", date: "2026-07-05", price: 1000, seat: "B1" },
        { id: 3, from: "Doha", type: "roundtrip", date: "2026-07-10", returnDate: "2026-07-20", price: 1100, seat: "C2" },
      ],
    },
    {
      country: "USA",
      tickets: [
        { id: 1, from: "Beirut", type: "oneway", date: "2026-08-01", price: 800, seat: "A3" },
        { id: 2, from: "Dubai", type: "roundtrip", date: "2026-08-10", returnDate: "2026-08-25", price: 950, seat: "B3" },
        { id: 3, from: "Istanbul", type: "oneway", date: "2026-08-15", price: 1200, seat: "D1" },
      ],
    },
    {
      country: "Italy",
      tickets: [
        { id: 1, from: "Beirut", type: "oneway", date: "2026-05-10", price: 400, seat: "A1" },
        { id: 2, from: "Athens", type: "roundtrip", date: "2026-05-12", returnDate: "2026-05-18", price: 450, seat: "B2" },
        { id: 3, from: "Paris", type: "oneway", date: "2026-05-15", price: 550, seat: "C1" },
      ],
    },
    {
      country: "Lebanon",
      tickets: [
        { id: 1, from: "Dubai", type: "oneway", date: "2026-04-20", price: 200, seat: "A1" },
        { id: 2, from: "Paris", type: "roundtrip", date: "2026-04-22", returnDate: "2026-04-30", price: 250, seat: "B1" },
        { id: 3, from: "Istanbul", type: "oneway", date: "2026-04-25", price: 300, seat: "C3" },
      ],
    },
    {
      country: "UAE",
      tickets: [
        { id: 1, from: "Beirut", type: "roundtrip", date: "2026-09-01", returnDate: "2026-09-07", price: 350, seat: "A2" },
        { id: 2, from: "London", type: "oneway", date: "2026-09-05", price: 450, seat: "B2" },
        { id: 3, from: "Rome", type: "roundtrip", date: "2026-09-10", returnDate: "2026-09-20", price: 500, seat: "C2" },
      ],
    },
    {
      country: "Brazil",
      tickets: [
        { id: 1, from: "Beirut", type: "oneway", date: "2026-10-01", price: 1100, seat: "A3" },
        { id: 2, from: "Madrid", type: "roundtrip", date: "2026-10-05", returnDate: "2026-10-15", price: 1200, seat: "B1" },
        { id: 3, from: "Paris", type: "oneway", date: "2026-10-10", price: 1300, seat: "C1" },
      ],
    },
    {
      country: "Germany",
      tickets: [
        { id: 1, from: "Beirut", type: "roundtrip", date: "2026-11-01", returnDate: "2026-11-10", price: 600, seat: "A1" },
        { id: 2, from: "Rome", type: "oneway", date: "2026-11-03", price: 650, seat: "B3" },
        { id: 3, from: "London", type: "oneway", date: "2026-11-06", price: 700, seat: "C2" },
      ],
    },
  ];

  const currentTickets =
    ticketsData.find((t) => t.country === country.name)?.tickets || [];

  const handleBook = (ticket) => {
    navigate("/checkout", {
      state: {
        country: country.name,
        from: ticket.from,
        date: ticket.date,
        returnDate: ticket.returnDate || null,
        type: ticket.type,
        seat: ticket.seat,
        price: ticket.price,
      },
    });
  };

  return (
    <div className="ticket-form">

      <h1>Available Tickets to {country.name} ✈️</h1>
      <p>{country.description || "No description yet."}</p>

      {currentTickets.length === 0 ? (
        <p>No tickets available for this country 😢</p>
      ) : (
        currentTickets.map((ticket) => (
          <div
            key={ticket.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          >
            <p><b>From:</b> {ticket.from}</p>
            <p><b>Type:</b> {ticket.type}</p>
            <p><b>Departure:</b> {ticket.date}</p>

            {/* ✅ SHOW ONLY IF ROUNDTRIP */}
            {ticket.type === "roundtrip" && (
              <p><b>Return:</b> {ticket.returnDate}</p>
            )}

            <p><b>Seat:</b> {ticket.seat}</p>
            <p><b>Price:</b> ${ticket.price}</p>

            <button onClick={() => handleBook(ticket)}>
              Book Now
            </button>
          </div>
        ))
      )}

    </div>
  );
}

export default Country;