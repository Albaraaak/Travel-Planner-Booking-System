import './LoginForm.css'
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        { username: email, password },  
        { withCredentials: true }
      );

      console.log(response.data);
      localStorage.setItem("loggedIn", "true");
      navigate("/");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Login</button>
      <p>Don't have an account? <Link to="/SignUp">Sign Up</Link></p>
    </form>
  );
}

export default LoginForm;