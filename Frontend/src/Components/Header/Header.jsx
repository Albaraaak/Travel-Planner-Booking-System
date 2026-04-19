import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
function Header() {
  const[isLoggedIn,setIsLoggedIn] = useState(false)
  const navigate= useNavigate()
  return (
    <header>
      <h1>Let's GO</h1>
      <nav className="nav">
        <Link to="/" >Home</Link> | {" "}
        <Link to="/destinations">Destinantions</Link>
        <Link to="/packages">Packages</Link>
        <Link to="/bestpicks">Best Picks</Link>
          {isLoggedIn?
          ( <>
          <Link to="/favorites">Favorites</Link>
          <Link to="/profile">Profile</Link>
          </>)
          :

          (<>
         
          <button onClick={()=>{setIsLoggedIn (true)
            console.log("LoggedIn Value", isLoggedIn,)
            navigate("/Login");

          }
          }>Login</button>
          </>)
          }
      
        
    
        </nav>
    
      
    </header>
  );
}
export default Header;
