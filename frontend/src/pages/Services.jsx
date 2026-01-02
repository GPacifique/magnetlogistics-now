import { Link } from 'react-router-dom';
import { useState } from 'react';
import { images } from '../assets/images';
import './Services.css';

function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      title: 'Air Freight',
      icon: '✈️',
      description: 'Fast and reliable air cargo services for urgent shipments worldwide with priority handling',
      features: ['Express delivery options', 'Real-time GPS tracking', 'Door-to-door service', 'Customs clearance assistance', 'Temperature-controlled cargo', 'Hazardous materials handling'],
      image: images.services.air,
      benefits: 'Fastest transit times, ideal for time-sensitive cargo'
    },
    {
      title: 'Sea Freight',
      icon: '🚢',
      description: 'Cost-effective ocean freight solutions for large-scale shipments across all major ports',
      features: ['Full Container Load (FCL)', 'Less than Container Load (LCL)', 'Port-to-port service', 'Comprehensive insurance coverage', 'Break-bulk cargo', 'Roll-on/Roll-off (RoRo)'],
      image: images.services.sea,
      benefits: 'Most economical for large volumes and non-urgent cargo'
    },
    {
      title: 'Inland Transport',
      icon: '🚛',
      description: 'Efficient ground transportation for domestic and cross-border deliveries nationwide',
      features: ['Nationwide coverage', 'Temperature-controlled trucks', 'Heavy cargo handling', '24/7 tracking support', 'Last-mile delivery', 'Multi-stop routing'],
      image: images.services.inland,
      benefits: 'Flexible scheduling and direct delivery to your location'
    },
    {
      title: 'Customs Clearance',
      icon: '📋',
      description: 'Expert customs clearance services to streamline your imports and exports efficiently',
      features: ['Documentation assistance', 'Duty & tax calculation', 'Compliance support', 'Fast processing', 'Regulatory consulting', 'Import/Export permits'],
      image: images.services.customs,
      benefits: 'Hassle-free customs procedures and faster clearance'
    },
    {
      title: 'Warehousing',
      icon: '🏭',
      description: 'Secure storage solutions with advanced inventory management and distribution services',
      features: ['Climate-controlled facilities', 'Advanced security systems', 'Real-time inventory tracking', 'Order fulfillment services', 'Cross-docking', 'Pick and pack services'],
      image: images.services.warehousing,
      benefits: 'Strategic locations with 24/7 security and monitoring'
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <div className="hero-content-services">
          <h1>Our Services</h1>
          <p>Comprehensive logistics solutions tailored to your business needs</p>
        </div>
        <div className="hero-shape"></div>
      </section>

      <section className="services-intro">
        <div className="intro-content">
          <h2>Complete Logistics Solutions</h2>
          <p>
            From air and sea freight to warehousing and customs clearance, we provide end-to-end 
            logistics services that keep your business moving. Our integrated approach ensures 
            seamless coordination across all touchpoints of your supply chain.
          </p>
        </div>
      </section>

      <section className="services-content">
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`service-card ${activeService === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveService(index)}
              onMouseLeave={() => setActiveService(null)}
            >
              <div className="service-image">
                <img src={service.image} alt={service.title} onError={(e) => (e.currentTarget.src = images.placeholder)} />
                <div className="service-overlay">
                  <div className="service-icon">{service.icon}</div>
                </div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-benefit">
                  <span className="benefit-label">Key Benefit:</span>
                  <span className="benefit-text">{service.benefits}</span>
                </div>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="service-btn">Learn More</button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-features-grid">
          <h2>Why Choose Our Services?</h2>
          <div className="feature-boxes">
            <div className="feature-box">
              <div className="feature-box-icon">🌍</div>
              <h3>Global Network</h3>
              <p>Access to 200+ countries with local expertise everywhere</p>
            </div>
            <div className="feature-box">
              <div className="feature-box-icon">⚡</div>
              <h3>Fast Processing</h3>
              <p>Quick turnaround times for all your logistics needs</p>
            </div>
            <div className="feature-box">
              <div className="feature-box-icon">💰</div>
              <h3>Competitive Rates</h3>
              <p>Best value for money without compromising quality</p>
            </div>
            <div className="feature-box">
              <div className="feature-box-icon">🔒</div>
              <h3>Secure & Insured</h3>
              <p>Full insurance coverage and security for your cargo</p>
            </div>
          </div>
        </div>

        <div className="services-cta">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today for a customized logistics solution that fits your specific requirements</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">Get a Quote</Link>
              <Link to="/tracking" className="btn btn-white">Track Shipment</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
