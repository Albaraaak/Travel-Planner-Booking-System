import './LoginForm.css'
import { useState } from "react";
import { useLocation} from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
function LoginForm(){
  const location = useLocation() ;
  const state= location.state;
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError(null);

      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          email: email,
          password: password,
        }
      );

      console.log("response", response);
       setmessage( response.data.message)
      navigate("/Home");

    } catch (err) {
      setError(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Login</h3>

      <div>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your username or email"
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
      <p>Don't have an account?  <Link to="/SignUp">Sign Up</Link> </p>
    </form>
  );
}

export default LoginForm;