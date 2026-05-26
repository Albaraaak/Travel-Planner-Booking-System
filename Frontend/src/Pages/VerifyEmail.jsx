import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function VerifyEmail() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(location.state?.email || "");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const handleVerify = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/users/verify-email", {
        email,
        code,
      });

      setMessage(res.data.message);

      alert("Email verified successfully ✅");
      navigate("/Login");
    } catch (err) {
      setMessage(err.response?.data?.message || "Verification failed");
    }
  };

  return (
    <form onSubmit={handleVerify}>
      <h3>Verify Email</h3>

      {message && <p>{message}</p>}

      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Verification Code</label>
      <input
        type="text"
        placeholder="Enter code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />

      <button type="submit">Verify Email</button>
    </form>
  );
}

export default VerifyEmail;