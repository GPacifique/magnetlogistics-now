import { Link } from 'react-router-dom';
import { images } from '../assets/images';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img className="logo-image" src={images.logo} alt="Magnet Logistics" onError={(e) => (e.currentTarget.src = images.placeholder)} />
          <span className="logo-text">Magnet Logistics</span>
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/tracking" className="nav-link">Track Shipment</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
        </ul>
        
        <div className="nav-auth">
          <Link to="/login" className="btn btn-outline">Login</Link>
          <Link to="/register" className="btn btn-primary">Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
