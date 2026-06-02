import "./SignUpForm.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [message, setmessage] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setmessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/signup",
        {
          firstName,
          lastName,
          username,
          email,
          password,
          confirmPassword,
          phoneNumber,
        },
        { withCredentials: true }
      );

      setmessage(response.data.message);

      navigate("/verify-email", {
        state: { email },
      });
    } catch (err) {
      console.log(err.response?.data || err.message);
      setmessage(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <h3>Sign Up</h3>

        {message && <p>{message}</p>}

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label>Username</label>
        <input
          type="text"
          placeholder="Choose your username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {confirmPassword && (
          <p className={password === confirmPassword ? "success-message" : "error-message"}>
            {password === confirmPassword
              ? "Passwords match"
              : "Passwords do not match"}
          </p>
        )}

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phoneNumber}
          onChange={(e) => setphoneNumber(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>

        <p>
          Already have an account? <Link to="/Login">Login</Link>
        </p>
      </form>
    </>
  );
}

export default SignUpForm;
