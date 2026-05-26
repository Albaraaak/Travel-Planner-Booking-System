import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgot = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/users/forgot-password", {
        email,
      });

      setMessage(res.data.message);

      navigate("/reset-password", {
        state: { email },
      });
    } catch (err) {
      setMessage(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <form onSubmit={handleForgot}>
      <h3>Forgot Password</h3>

      {message && <p>{message}</p>}

      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your account email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <button type="submit">Send Reset Code</button>
    </form>
  );
}

export default ForgotPassword;