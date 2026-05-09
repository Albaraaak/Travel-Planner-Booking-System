import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Country.css";

function Country() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
const [showAvailable, setShowAvailable] = useState(false);
  // ❌ no country selected
  if (!state) return <p>No country selected</p>;

  const { country } = state;

  // ===============================
  // FETCH TICKETS FROM BACKEND
  // ===============================
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/api/tickets"
        );

        setTickets(res.data.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  // ===============================
  // FILTER BY SELECTED COUNTRY
  // ===============================
 const filteredByCountry = tickets.filter(
  (ticket) =>
    ticket.to?.toLowerCase().trim() ===
    country.name?.toLowerCase().trim()
);

const currentTickets = showAvailable
  ? filteredByCountry.filter((t) => t.availableSeats > 0)
  : filteredByCountry;

  // ===============================
  // BOOK BUTTON
  // ===============================
  const handleBook = (ticket) => {
    navigate("/checkout", {
      state: {
        ticketId: ticket._id,
        country: ticket.to,
        from: ticket.from,
        departureDate: ticket.departureDate,
        returnDate: ticket.returnDate || null,
        type: ticket.type,
        travelType: ticket.travelType,
        price: ticket.price,
      },
    });
  };

  return (
    <div className="ticket-form">

      <h1>Available Tickets to {country.name} ✈️</h1>
      <p>{country.description || "No description yet."}</p>

      {loading && <p>Loading tickets...</p>}

      {!loading && currentTickets.length === 0 && (
        <p>No tickets available for this country 😢</p>
      )}

      {!loading &&
        currentTickets.map((ticket) => (
          <div
            key={ticket._id}
            style={{
              border: "1px solid #ccc",
              padding: "12px",
              marginBottom: "12px",
              borderRadius: "8px",
              background: "#f9f9f9",
            }}
          >
            <p><b>From:</b> {ticket.from}</p>

            <p>
              <b>Travel Type:</b>{" "}
              {ticket.travelType === "round-trip"
                ? "Round Trip"
                : "One Way"}
            </p>

            <p><b>Class:</b> {ticket.type}</p>

            <p><b>Departure:</b> {ticket.departureDate}</p>

            {ticket.travelType === "round-trip" && (
              <p><b>Return:</b> {ticket.returnDate}</p>
            )}

            <p><b>Available Seats:</b> {ticket.availableSeats}</p>

            <p><b>Price:</b> ${ticket.price}</p>

            <button onClick={() => handleBook(ticket)}>
              Book Now
            </button>
          </div>
        ))}
    </div>
  );
}

export default Country;