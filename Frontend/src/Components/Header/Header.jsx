import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const getToken = () => {
    const cookie = document.cookie.split('; ').find(r => r.startsWith('token='));
    return cookie ? cookie.split('=')[1] : null;
  };
  const isLoggedIn= localStorage.getItem('loggedIn')
  const navigate = useNavigate();

  return (
    <header>
      <div className="header-inner">
        <h1 className="logo">Let's GO</h1>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/bestpicks">Best Picks</Link>

          {isLoggedIn ? (
            <>
              <Link to="/favorites">Favorites</Link>
              <Link to="/profile">Profile</Link>
            </>
          ) : (
            <button onClick={() => { navigate('/Login'); }}>
              Login
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;