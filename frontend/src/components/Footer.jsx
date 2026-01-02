import { Link } from 'react-router-dom';
import { images } from '../assets/images';
import './Footer.css';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

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
          <SocialLinks
            links={{
              facebook: 'https://www.facebook.com/',
              twitter: 'https://x.com/',
              linkedin: 'https://www.linkedin.com/',
              instagram: 'https://www.instagram.com/',
              // youtube: 'https://www.youtube.com/@yourchannel',
            }}
            size={18}
            variant="row"
            className="footer-social"
          />
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
          <ContactInfo
            address="GIKONDO/MAGERWA"
            mapLink="https://www.google.com/maps/search/?api=1&query=GIKONDO%20MAGERWA"
            phones={["078 152 3519", "078 823 1034"]}
            email="info@magnetlogistics.com"
            hours="Mon-Fri: 8AM - 8PM EST"
            compact
          />
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
