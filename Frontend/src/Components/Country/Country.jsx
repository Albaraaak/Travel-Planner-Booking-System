import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./Country.css";

function Country() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/tickets");
        setTickets(res.data.data || []);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (!state) {
    return (
      <div className="ticket-form">
        <h1>No country selected</h1>
      </div>
    );
  }

  const { country } = state;

  const filteredByCountry = tickets.filter(
    (ticket) =>
      ticket.to?.toLowerCase().trim() === country.name?.toLowerCase().trim()
  );

  const currentTickets = filteredByCountry;

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-GB");
  };

  const handleBook = (ticket) => {
    const isLoggedIn = localStorage.getItem("loggedIn");

    if (!isLoggedIn) {
      alert("Please login first to continue booking.");
      navigate("/login");
      return;
    }

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
      <p>
        {country.description ||
          "Choose a ticket and complete your booking securely."}
      </p>

      {loading && <p>Loading tickets...</p>}

      {!loading && currentTickets.length === 0 && (
        <p>No tickets available for this country 😢</p>
      )}

      <div className="tickets-container">
        {!loading &&
          currentTickets.map((ticket) => (
            <div className="boarding-pass" key={ticket._id}>
              <div className="ticket-main">
                <div className="ticket-header">
                  <div className="airline-logo">✈</div>
                  <div>
                    <h2>LET'S GO</h2>
                    <span>BOARDING PASS</span>
                  </div>
                </div>

                <div className="ticket-body">
                  <div className="barcode"></div>

                  <div className="ticket-info">
                    <div>
                      <small>From</small>
                      <h3>{ticket.from}</h3>
                    </div>

                    <div>
                      <small>To</small>
                      <h3>{ticket.to}</h3>
                    </div>

                    <div>
                      <small>Date</small>
                      <h3>{formatDate(ticket.departureDate)}</h3>
                    </div>

                    <div>
                      <small>Class</small>
                      <h3>{ticket.type}</h3>
                    </div>

                    <div>
                      <small>Travel Type</small>
                      <h3>
                        {ticket.travelType === "round-trip"
                          ? "Round Trip"
                          : "One Way"}
                      </h3>
                    </div>

                    <div>
                      <small>Seats Left</small>
                      <h3>{ticket.availableSeats}</h3>
                    </div>

                    {ticket.travelType === "round-trip" && (
                      <div>
                        <small>Return</small>
                        <h3>{formatDate(ticket.returnDate)}</h3>
                      </div>
                    )}

                    <div>
                      <small>Price</small>
                      <h3>${ticket.price}</h3>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ticket-side">
                <h3>BOARDING PASS</h3>
                <p>
                  <b>From:</b> {ticket.from}
                </p>
                <p>
                  <b>To:</b> {ticket.to}
                </p>
                <p>
                  <b>Date:</b> {formatDate(ticket.departureDate)}
                </p>
                <p>
                  <b>Class:</b> {ticket.type}
                </p>
                <p>
                  <b>Price:</b> ${ticket.price}
                </p>

                <button onClick={() => handleBook(ticket)}>Book Now</button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Country;