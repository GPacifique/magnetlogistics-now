import { useState, useEffect } from 'react';
import { FaBullseye, FaBinoculars, FaHandshake, FaLightbulb, FaUsers, FaGlobe, FaBolt, FaRocket, FaLock, FaDollarSign } from 'react-icons/fa';
import { images } from '../assets/images';
import './About.css';

function About() {
  const [counters, setCounters] = useState({
    countries: 0,
    shipments: 0,
    years: 0,
    satisfaction: 0
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const statsElement = document.querySelector('.about-stats');
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      countries: 200,
      shipments: 1000000,
      years: 15,
      satisfaction: 98
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setCounters({
        countries: Math.floor(targets.countries * progress),
        shipments: Math.floor(targets.shipments * progress),
        years: Math.floor(targets.years * progress),
        satisfaction: Math.floor(targets.satisfaction * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    return num.toLocaleString();
  };

  return (
    <div className="about">
      <section className="about-hero">
        <div className="hero-content-about">
          <h1 className="fade-in-up">About Magnet Logistics</h1>
          <p className="fade-in-up delay-1">Leading the way in global logistics solutions since 2010</p>
        </div>
        <div className="hero-shape"></div>
      </section>

      <section className="about-content">
        <div className="about-story">
          <div className="story-image">
            <img src={images.generated.faces} alt="Our Story" onError={(e) => (e.currentTarget.src = images.placeholder)} />
            <div className="image-overlay">
              <span className="year-badge">Since 2010</span>
            </div>
          </div>
          <div className="story-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2010, Magnet Logistics has grown from a small local shipping company 
              to a global logistics powerhouse. We pride ourselves on delivering excellence in 
              every shipment, ensuring that your cargo reaches its destination safely and on time.
            </p>
            <p>
              With state-of-the-art tracking systems and a dedicated team of logistics professionals,
              we've revolutionized the way businesses and individuals ship their goods worldwide.
            </p>
          </div>
        </div>

        <div className="mission-vision">
          <div className="mission-card" style={{backgroundImage: `url(${images.generated.planes})`}}>
            <div className="card-icon" aria-hidden="true"><FaBullseye /></div>
            <h2>Our Mission</h2>
            <p>
              To provide innovative, reliable, and efficient logistics solutions that connect 
              businesses and individuals across the globe. We are committed to exceeding customer 
              expectations through cutting-edge technology and exceptional service.
            </p>
          </div>

          <div className="mission-card vision-card" style={{backgroundImage: `url(${images.generated.boats})`}}>
            <div className="card-icon" aria-hidden="true"><FaBinoculars /></div>
            <h2>Our Vision</h2>
            <p>
              To be the world's most trusted logistics partner, setting industry standards
              through innovation, sustainability, and unmatched customer service excellence.
            </p>
          </div>
        </div>

        <div className="about-section values-section">
          <h2>Our Core Values</h2>
          <p className="section-subtitle">The principles that guide everything we do</p>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon" aria-hidden="true"><FaBullseye /></div>
              <h3>Reliability</h3>
              <p>We deliver on our promises, every single time</p>
            </div>
            <div className="value-item">
              <div className="value-icon" aria-hidden="true"><FaHandshake /></div>
              <h3>Integrity</h3>
              <p>Honesty and transparency in all our dealings</p>
            </div>
            <div className="value-item">
              <div className="value-icon" aria-hidden="true"><FaLightbulb /></div>
              <h3>Innovation</h3>
              <p>Constantly evolving to meet changing needs</p>
            </div>
            <div className="value-item">
              <div className="value-icon" aria-hidden="true"><FaUsers /></div>
              <h3>Customer Focus</h3>
              <p>Your satisfaction is our top priority</p>
            </div>
            <div className="value-item">
              <div className="value-icon" aria-hidden="true"><FaGlobe /></div>
              <h3>Sustainability</h3>
              <p>Committed to eco-friendly logistics solutions</p>
            </div>
            <div className="value-item">
              <div className="value-icon" aria-hidden="true"><FaBolt /></div>
              <h3>Excellence</h3>
              <p>Striving for perfection in every delivery</p>
            </div>
          </div>
        </div>

        <div className="about-stats">
          <div className="stat">
            <div className="stat-number">{counters.countries}+</div>
            <p>Countries Served</p>
            <div className="stat-bar"></div>
          </div>
          <div className="stat">
            <div className="stat-number">{formatNumber(counters.shipments)}+</div>
            <p>Shipments Delivered</p>
            <div className="stat-bar"></div>
          </div>
          <div className="stat">
            <div className="stat-number">{counters.years}+</div>
            <p>Years of Experience</p>
            <div className="stat-bar"></div>
          </div>
          <div className="stat">
            <div className="stat-number">{counters.satisfaction}%</div>
            <p>Customer Satisfaction</p>
            <div className="stat-bar"></div>
          </div>
        </div>

        <div className="team-section">
          <h2>Why Choose Us?</h2>
          <div className="features-showcase">
            <div className="showcase-item">
              <div className="showcase-image">
                <img src={images.generated.train} alt="Fast Delivery" />
              </div>
              <div className="showcase-icon" aria-hidden="true"><FaRocket /></div>
              <h3>Fast & Reliable</h3>
              <p>Express delivery options with real-time tracking for complete peace of mind</p>
            </div>
            <div className="showcase-item">
              <div className="showcase-image">
                <img src={images.generated.warehouse} alt="Secure Storage" />
              </div>
              <div className="showcase-icon" aria-hidden="true"><FaLock /></div>
              <h3>Secure Handling</h3>
              <p>Advanced security measures to protect your valuable shipments</p>
            </div>
            <div className="showcase-item">
              <div className="showcase-image">
                <img src={images.generated.road} alt="Ground Transport" />
              </div>
              <div className="showcase-icon" aria-hidden="true"><FaDollarSign /></div>
              <h3>Competitive Pricing</h3>
              <p>Best rates in the industry without compromising on quality</p>
            </div>
            <div className="showcase-item">
              <div className="showcase-image">
                <img src={images.services.customs} alt="Global Network" />
              </div>
              <div className="showcase-icon" aria-hidden="true"><FaGlobe /></div>
              <h3>Global Network</h3>
              <p>Extensive worldwide coverage with local expertise everywhere</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
