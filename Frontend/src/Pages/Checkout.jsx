import { useState } from "react";
import { useLocation } from "react-router-dom"
function Checkout() {
  const { state } = useLocation();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    paymentMethod: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.paymentMethod) {
      alert("Please fill all fields!");
      return;
    }

    alert(
      `✅ Booking Confirmed!\n\nName: ${form.name}\nPhone: ${form.phone}\nPayment: ${form.paymentMethod}`
    );

    setForm({ name: "", phone: "", paymentMethod: "" });
  };

  return (
    <div className="checkout">
      <h1>Complete Your Booking</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={handleChange}
          required
        />

        <h3>Payment Method</h3>
        <select
          name="paymentMethod"
          value={form.paymentMethod}
          onChange={handleChange}
          required
        >
          <option value="">Select Payment</option>
          <option value="whish">Whish Money</option>
          <option value="western">Western Union</option>
          <option value="office">Visit Our Office</option>
        </select>
        {state && (
  <>
   <p style={{ color: "blue" }}>Price per ticket: ${state.pricePerTicket}</p>
<p style={{ color: "blue" }}><strong>Total: ${state.totalPrice}</strong></p>
  </>
)}

        {form.paymentMethod === "office" && (
          <p style={{ color: "cyan" }}>📍 Visit us at: Bekaa, Masnaa-Rashaya Road</p>
        )}
        {form.paymentMethod === "whish" &&  (
        <p  style={{
    color: "red",
    fontWeight: "bold",
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>  <img
      src="https://th.bing.com/th/id/OIP.Dr6BJg9Z2ZUxOLbzGk5Q9QHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
      alt="Whish Money"
      style={{ width: "24px", height: "24px" }}
    />Send money to: 76-410829</p>
        )}
        {form.paymentMethod === "western" && (
          <p style={{
    color: "gold",
    fontWeight: "bold",
    marginTop: "5px",
    display: "flex",
    alignItems: "center",
    gap: "8px"
  }}>
    <img
      src="https://th.bing.com/th/id/OIP.iB6bO2xdI6t2ubZ8vyyMFQHaHa?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
      alt="Western Union"
      style={{ width: "80px", height: "24px" }}
    />Via Western Union to: Let's GO</p>
        )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Checkout;