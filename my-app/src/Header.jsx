import { Link } from 'react-router-dom';
import './css/Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        
        <Link to="/">
          <span className="mobile-text">Home</span>
          <span className="desktop-text">Home</span>
        </Link>
      

        <Link to="/Why Choose Me?">
          <span className="mobile-text">Why Me?</span>
          <span className="desktop-text">Why Choose Me?</span>
        </Link>

        <Link to="/services">
          <span className="mobile-text">Services</span>
          <span className="desktop-text">Services</span>
        </Link>

        <Link to="/Contact">
          <span className="mobile-text">Contact</span>
          <span className="desktop-text">Contact</span>
        </Link>

      </nav>
    </header>
  );
}

export default Header;