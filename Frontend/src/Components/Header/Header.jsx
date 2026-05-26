import { Link, useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const isLoggedIn = localStorage.getItem('loggedIn');
  const navigate = useNavigate();

  const toggleTheme = () => {
    document.body.classList.toggle("light-mode");
  };

  return (
    <header>
      <div className="header-inner">

        <h1 className="logo">Let's GO</h1>

        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/destinations">Destinations</Link>
          <Link to="/packages">Packages</Link>
          <Link to="/bestpicks">Best Picks</Link>
          <Link to="/faq">FAQ</Link>

          {isLoggedIn ? (
            <>
              <Link to="/favorites">Favorites</Link>
              <Link to="/profile">Profile</Link>
            </>
          ) : (
            <button onClick={() => navigate('/Login')}>
              Login
            </button>
          )}

          <button
            className="theme-toggle"
            onClick={toggleTheme}
          >
            🌙 / ☀️
          </button>
        </nav>

      </div>
    </header>
  );
}

export default Header;