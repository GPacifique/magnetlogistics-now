import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { images } from '../assets/images';
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Build slides from services flyers to show in hero
  const slides = [
    {
      src: images.generated.heroGlobal,
      title: 'Global Logistics Operation',
      description: 'Integrated sea, road, and air freight',
    },
    {
      src: images.services.air,
      title: 'Air Freight Solutions',
      description: 'Fast and reliable air cargo services worldwide',
    },
    {
      src: images.services.sea,
      title: 'Ocean Shipping',
      description: 'Cost-effective sea freight for large shipments',
    },
    {
      src: images.services.inland,
      title: 'Ground Transportation',
      description: 'Reliable truck and rail logistics services',
    },
    {
      src: images.services.customs,
      title: 'Customs Clearance',
      description: 'Expert documentation and compliance for your shipments',
    },
    {
      src: images.services.warehousing,
      title: 'Warehousing & Distribution',
      description: 'Secure storage and efficient distribution networks',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Testimonials data
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechCorp International',
      company: 'TechCorp',
      rating: 5,
      text: 'Magnet Logistics has transformed our supply chain. Their air freight service is incredibly fast and reliable. We\'ve seen a 40% improvement in delivery times since partnering with them.',
      image: images.generated.faces
    },
    {
      name: 'Michael Chen',
      position: 'Operations Director',
      company: 'Global Manufacturing Ltd',
      rating: 5,
      text: 'Outstanding service! Their team handled our complex customs requirements seamlessly. The real-time tracking system gives us complete visibility of our shipments.',
      image: images.generated.faces
    },
    {
      name: 'Emma Williams',
      position: 'Logistics Manager',
      company: 'Retail Solutions Inc',
      rating: 5,
      text: 'Professional, efficient, and cost-effective. Magnet Logistics understands our business needs and consistently delivers on their promises. Highly recommended!',
      image: images.generated.faces
    },
    {
      name: 'David Martinez',
      position: 'Supply Chain Head',
      company: 'Pharma Dynamics',
      rating: 5,
      text: 'Their warehousing solutions are top-notch. Temperature-controlled storage and careful handling of our sensitive products. Excellent customer support 24/7.',
      image: images.generated.faces
    },
    {
      name: 'Rachel Thompson',
      position: 'Import/Export Manager',
      company: 'Continental Traders',
      rating: 5,
      text: 'We ship to over 50 countries and Magnet Logistics handles it all flawlessly. Their sea freight rates are competitive and delivery times are impressive.',
      image: images.generated.faces
    }
  ];

  // Auto-slide testimonials
  useEffect(() => {
    const testimonialTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(testimonialTimer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <div className="home">
      {/* Hero Section with Auto-Sliding Services Flyers */}
      <section className="hero">
        <div className="slider-container">
          <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="slide">
                <img src={slide.src} alt={slide.title} onError={(e) => (e.currentTarget.src = images.placeholder)} />
                <div className="slide-content">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                  <div className="hero-buttons">
                    <Link to="/tracking" className="btn btn-primary">Track Shipment</Link>
                    <Link to="/services" className="btn btn-secondary">Our Services</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="slider-btn slider-btn-prev" onClick={prevSlide}>
            ❮
          </button>
          <button className="slider-btn slider-btn-next" onClick={nextSlide}>
            ❯
          </button>

          <div className="slider-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose Magnet Logistics?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-bg-image">
              <img src={images.generated.road} alt="" />
            </div>
            <div className="feature-icon">🚚</div>
            <h3>Fast Delivery</h3>
            <p>Swift and reliable delivery services across the globe</p>
          </div>
          <div className="feature-card">
            <div className="feature-bg-image">
              <img src={images.generated.warehouse} alt="" />
            </div>
            <div className="feature-icon">📦</div>
            <h3>Secure Packaging</h3>
            <p>Professional packaging to ensure your items arrive safely</p>
          </div>
          <div className="feature-card">
            <div className="feature-bg-image">
              <img src={images.generated.boats} alt="" />
            </div>
            <div className="feature-icon">🌍</div>
            <h3>Global Coverage</h3>
            <p>Worldwide shipping network spanning 200+ countries</p>
          </div>
          <div className="feature-card">
            <div className="feature-bg-image">
              <img src={images.generated.planes} alt="" />
            </div>
            <div className="feature-icon">💰</div>
            <h3>Competitive Rates</h3>
            <p>Best prices in the industry without compromising quality</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="testimonials-container">
          <h2>What Our Customers Say</h2>
          <p className="testimonials-subtitle">Trusted by businesses worldwide</p>
          
          <div className="testimonials-slider">
            <div className="testimonials-wrapper" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-slide">
                  <div className="testimonial-card">
                    <div className="testimonial-header">
                      <div className="testimonial-avatar">
                        <img src={testimonial.image} alt={testimonial.name} />
                      </div>
                      <div className="testimonial-info">
                        <h4>{testimonial.name}</h4>
                        <p className="testimonial-position">{testimonial.position}</p>
                        <p className="testimonial-company">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                    
                    <div className="testimonial-text">
                      <p>"{testimonial.text}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="testimonial-btn testimonial-btn-prev" onClick={prevTestimonial}>
              ❮
            </button>
            <button className="testimonial-btn testimonial-btn-next" onClick={nextTestimonial}>
              ❯
            </button>

            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-dot ${currentTestimonial === index ? 'active' : ''}`}
                  onClick={() => goToTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Ship with Us?</h2>
        <p>Get started today and experience world-class logistics services</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </section>
    </div>
  );
}

export default Home;
