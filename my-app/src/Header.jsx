import { Link } from 'react-router-dom';
import './css/Header.css'; 

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        
        {/* Link 1: Toggles between 'H' and 'Home' via CSS */}
        <Link to="/">
          <span className="mobile-text">H</span>
          <span className="desktop-text">Home</span>
        </Link>
        
        {/* Link 2: Toggles between 'More' and 'More About Services' via CSS */}
        <Link to="/services">
          <span className="mobile-text">More</span>
          <span className="desktop-text">More About Services</span>
        </Link>

      </nav>
    </header>
  );
}

export default Header;