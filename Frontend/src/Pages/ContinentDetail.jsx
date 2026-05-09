import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function ContinentDetail() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const [showAvailable, setShowAvailable] = useState(false);
const [tickets, setTickets] = useState([]);
useEffect(() => {
  axios.get("http://localhost:3000/api/tickets")
    .then((res) => {
      setTickets(res.data.data || []);
    })
    .catch((err) => {
      console.error(err);
    });
}, []);

  if (!state) return <p>No data</p>;

  const { continent, image, description, countries } = state;

  // ======================================
  // CORE LOGIC: countries with tickets
  // ======================================
  const countriesToShow = countries.filter((country) => {
    if (!showAvailable) return true; // show all countries

    // check if THIS country has at least 1 available ticket
    return tickets?.some(
      (ticket) =>
        ticket.to?.toLowerCase().trim() === country.name.toLowerCase().trim() &&
        ticket.availableSeats > 0
    );
  });

  // ======================================
  // NAVIGATION
  // ======================================
  const handleCountryClick = (country) => {
    navigate("/CountryDetail", {
      state: { country }
    });
  };

  return (
    <>
      <div className="continent-details">
        <img
          src={image}
          alt={continent}
          style={{ width: "50%", height: "40%" }}
        />

        <h1>{continent}</h1>
        <p>{description}</p>

        {/* ================= FILTER BUTTON ================= */}
        <button
          onClick={() => setShowAvailable((prev) => !prev)}
          style={{
            padding: "10px",
            margin: "10px 0",
            cursor: "pointer",
            borderRadius: "8px"
          }}
        >
          {showAvailable
            ? "Show All Countries"
            : "✨ Show Countries With Tickets Only"}
        </button>

        <h2>Popular Destinations</h2>

        {/* ================= COUNTRIES ================= */}
        {countriesToShow.map((c, i) => (
          <button
            key={i}
            onClick={() => handleCountryClick(c)}
            style={{
              display: "block",
              margin: "8px 0",
              padding: "10px",
              cursor: "pointer"
            }}
          >
            {c.name}
          </button>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default ContinentDetail;