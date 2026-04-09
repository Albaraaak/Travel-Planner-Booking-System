import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Country.css'
function Country() {
  const navigate = useNavigate();
  const { state } = useLocation();

  if (!state) return <p>No country selected</p>;

  const { country } = state;
  const seats = ["A1","A2","A3","B1","B2","B3","C1","C2","C3","D1","D2","D3","E1","E2","E3","F1","F2","F3",];
  const [form, setForm] = useState({
    from: "",
    to: country.name,
    departureDate: "",
    returnDate: "",
    tripType: "oneway",
    passengers: 1,
    travelClass: "economy",
  });

  const basePrice = 500;
  const classMultiplier = {
  economy: 1,
  business: 1.5,
  first: 2,
};

const pricePerTicket = basePrice * classMultiplier[form.travelClass];
const totalPrice = pricePerTicket * form.passengers;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
navigate("/checkout", {
  state: {
    ...form,
    pricePerTicket,
    totalPrice,
  },
});
    // Basic validation
    if (!form.from || !form.departureDate || !form.passengers) {
      alert("Please fill required fields!");
      return;
    }

    if (form.tripType === "roundtrip" && !form.returnDate) {
      alert("Please select return date!");
      return;
    }

    // Navigate to checkout with ALL data
    navigate("/checkout", {
      state: form,
    });
  };

  return (
    <div className="ticket-form">
      <h1>Book your trip to {country.name} ✈️</h1>
     <p>{country.description || "No description yet."}</p>
      <form onSubmit={handleSubmit}>
        {/* From */}
        <input
          type="text"
          name="from"
          placeholder="From (City)"
          value={form.from}
          onChange={handleChange}
          required
        />

        {/* To */}
        <input
          type="text"
          name="to"
          value={form.to}
          readOnly
        />

        {/* Trip Type */}
        <div>
          <label>
            <input
              type="radio"
              name="tripType"
              value="oneway"
              checked={form.tripType === "oneway"}
              onChange={handleChange}
            />
            One Way
          </label>

          <label>
            <input
              type="radio"
              name="tripType"
              value="roundtrip"
              checked={form.tripType === "roundtrip"}
              onChange={handleChange}
            />
            Round Trip
          </label>
        </div>

        {/* Departure */}
        <input
          type="date"
          name="departureDate"
          value={form.departureDate}
          onChange={handleChange}
           min={new Date().toISOString().split("T")[0]} 
          required
        />

        {/* Return Date (only if roundtrip) */}
        {form.tripType === "roundtrip" && (
          <input
            type="date"
            name="returnDate"
            value={form.returnDate}
            onChange={handleChange}
            min={form.departureDate || new Date().toISOString().split("T")[0]}
          />
        )}

        {/* Passengers */}
        <input
          type="number"
          name="passengers"
          min="1"
          value={form.passengers}
          onChange={handleChange}
        />

        {/* Class */}
        <select
          name="travelClass"
          value={form.travelClass}
          onChange={handleChange}
        >
          <option value="economy">Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select>

         <select name="seat"
          value={form.seat} onChange={handleChange} required>
          <option value="">Select Seat</option>
          {seats.map((s, idx) => <option key={idx} value={s}>{s}</option>)}
        </select>



        <div className="price-box">
          <p>Price per ticket: ${pricePerTicket}</p>
            <p><strong>Total: ${totalPrice}</strong></p>
        </div>
        <button type="submit">Continue to Checkout</button>
      </form>
    </div>
  );
}

export default Country;