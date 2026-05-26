import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function ResetPassword() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState(location.state?.email || "");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3000/api/users/reset-password", {
        email,
        code,
        newPassword,
      });

      setMessage(res.data.message);

      alert("Password reset successfully ✅");
      navigate("/Login");
    } catch (err) {
      setMessage(err.response?.data?.message || "Password reset failed");
    }
  };

  return (
    <form onSubmit={handleReset}>
      <h3>Reset Password</h3>

      {message && <p>{message}</p>}

      <label>Email</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>Reset Code</label>
      <input
        type="text"
        placeholder="Enter reset code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />

      <label>New Password</label>
      <input
        type="password"
        placeholder="Enter new password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />

      <button type="submit">Reset Password</button>
    </form>
  );
}

export default ResetPassword;