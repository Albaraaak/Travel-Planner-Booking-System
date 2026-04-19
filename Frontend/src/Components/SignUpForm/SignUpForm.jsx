import './SignUpForm.css'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function SignUpForm() {
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [message, setmessage] = useState("");
   const navigate = useNavigate(); 
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response= await axios.post(
       "http://localhost:3000/api/users/signup",
        { firstName, lastName, username, email, password,phoneNumber }
      );
      console.log(response.data)
        setmessage( response.data.message)
        navigate("/Login")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
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

 <label>UserName</label>
  <input
    type="text"
    placeholder="Choose your username"
    value={username}
    onChange={(e) => setusername(e.target.value)}
  />
  <label>Password</label>
  <input
    type="password"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <label>PhoneNumber</label>
  <input
    type="number"
    placeholder="Enter your phone number"
    value={phoneNumber}
    onChange={(e) => setphoneNumber(e.target.value)}
  />

  <button type="submit">Sign Up</button>

  <p>
    Already have an account? <a href="/Login">Login</a>
  </p>
</form>
<p>{message}</p>
  </>);
}

export default SignUpForm;