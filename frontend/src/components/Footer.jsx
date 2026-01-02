import { Link } from 'react-router-dom';
import { images } from '../assets/images';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-brand">
            <img className="logo-image" src={images.logo} alt="Magnet Logistics" onError={(e) => (e.currentTarget.src = images.placeholder)} />
            <span className="logo-text">Magnet Logistics</span>
          </h3>
          <p>Your trusted partner in global logistics solutions. Delivering excellence since 2010.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="LinkedIn">💼</a>
            <a href="#" aria-label="Instagram">📷</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/tracking">Track Shipment</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Air Freight</a></li>
            <li><a href="#">Ocean Freight</a></li>
            <li><a href="#">Land Transport</a></li>
            <li><a href="#">Warehousing</a></li>
            <li><a href="#">Express Delivery</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <ul className="contact-info">
            <li>📍 GIKONDO/MAGERWA</li>
            <li>📞 078 152 3519</li>
            <li>📞 078 823 1034</li>
            <li>📧 info@magnetlogistics.com</li>
            <li>🕒 Mon-Fri: 8AM - 8PM EST</li>
          </ul>
          {/* WhatsApp links moved to global floating buttons */}
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 Magnet Logistics. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <span>|</span>
          <a href="#">Terms of Service</a>
          <span>|</span>
          <a href="#">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
