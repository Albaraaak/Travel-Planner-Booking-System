import './SignUpForm.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUpForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
   const navigate = useNavigate(); 
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        { email, password }
      );

        navigate("/Home");
    } catch (err) {
      console.log(err);
    }
  };

  return (
   <form onSubmit={handleSignup}>
  <h3>Sign Up</h3>

  <label>Email</label>
  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <input
      type="text"
      placeholder="First Name"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
    />
    <input
      type="text"
      placeholder="Last Name"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
    />

  <label>Password</label>
  <input
    type="password"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />

  <button type="submit">Sign Up</button>

  <p>
    Already have an account? <a href="/">Login</a>
  </p>
</form>
  );
}

export default SignUpForm;