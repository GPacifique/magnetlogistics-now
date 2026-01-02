import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { FaTruck, FaBoxOpen, FaGlobe, FaDollarSign } from 'react-icons/fa';
import { images } from '../assets/images';
import SocialLinks from '../components/SocialLinks';
  const partners = [
    { name: 'GlobalExpress', img: images.generated.planes },
    { name: 'OceanWave', img: images.generated.boats },
    { name: 'SkyCargo', img: images.services.air },
    { name: 'TransRail', img: images.generated.train },
    { name: 'WareHub', img: images.generated.warehouse },
  ];
import './Home.css';

function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [socialInView, setSocialInView] = useState(false);
  const [showAllPosts, setShowAllPosts] = useState(false);
  const socialRef = useRef(null);

  const posts = [
    { title: 'Optimizing Air Freight in Q1', meta: 'Dec 18, 2025 · 5 min read', href: '#' },
    { title: 'Sea Freight Cost-Saving Strategies', meta: 'Dec 10, 2025 · 7 min read', href: '#' },
    { title: 'Customs Compliance Checklist 2026', meta: 'Dec 02, 2025 · 4 min read', href: '#' },
    { title: 'Warehousing: Improving Pick & Pack', meta: 'Nov 20, 2025 · 6 min read', href: '#' },
    { title: 'Inland Transport: Route Optimization', meta: 'Nov 05, 2025 · 4 min read', href: '#' },
  ];
  
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

  // Reveal Social section on scroll
  useEffect(() => {
    const el = socialRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSocialInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

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
            <div className="feature-icon" aria-hidden="true"><FaTruck /></div>
            <h3>Fast Delivery</h3>
            <p>Swift and reliable delivery services across the globe</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true"><FaBoxOpen /></div>
            <h3>Secure Packaging</h3>
            <p>Professional packaging to ensure your items arrive safely</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true"><FaGlobe /></div>
            <h3>Global Coverage</h3>
            <p>Worldwide shipping network spanning 200+ countries</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon" aria-hidden="true"><FaDollarSign /></div>
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

      {/* Brand Presence Section */}
      <section className="brand-section" aria-label="Brand presence">
        <div className="brand-container">
          <h2 className="brand-title">Your trusted partner in global logistics solutions</h2>
          <p className="brand-subtitle">Delivering excellence since 2010</p>
          <SocialLinks
            links={{
              facebook: 'https://www.facebook.com/',
              twitter: 'https://x.com/',
              linkedin: 'https://www.linkedin.com/',
              instagram: 'https://www.instagram.com/'
            }}
            variant="row"
            showLabels={false}
            size={18}
          />
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners" aria-label="Our partners">
        <div className="partners-container">
          <h2>Trusted by partners worldwide</h2>
          <p className="partners-subtitle">A selection of brands we collaborate with</p>
          <div className="partners-grid">
            {partners.map((p, idx) => (
              <div key={idx} className="partner-card" aria-label={p.name}>
                <div className="partner-logo">
                  <img src={p.img} alt={p.name} onError={(e) => (e.currentTarget.src = images.placeholder)} />
                </div>
                <div className="partner-name">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <h2>Ready to Ship with Us?</h2>
        <p>Get started today and experience world-class logistics services</p>
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </section>

      {/* Social & Recent Posts Section */}
      <section ref={socialRef} className={`social ${socialInView ? 'in-view' : ''}`}>
        <div className="social-container">
          <div className="social-grid">
            <div className="social-card social-hero">
              <h2 className="social-hero-title">Your trusted partner in global logistics solutions</h2>
              <p className="social-hero-subtitle">Delivering excellence since 2010</p>
              <SocialLinks
                links={{
                  facebook: 'https://www.facebook.com/',
                  twitter: 'https://x.com/',
                  linkedin: 'https://www.linkedin.com/',
                  instagram: 'https://www.instagram.com/'
                }}
                variant="row"
                showLabels={false}
                size={18}
              />
            </div>

            <div className="posts-card">
              <h3>Recent Posts</h3>
              <p className="social-subtitle">Insights from our logistics team</p>
              <ul className="posts-list">
                {(showAllPosts ? posts : posts.slice(0, 3)).map((p, idx) => (
                  <li key={idx} className="post-item">
                    <a href={p.href} className="post-link" title={p.title}>
                      <span className="post-title">{p.title}</span>
                      <span className="post-meta">{p.meta}</span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="posts-toggle">
                <button className="btn btn-secondary" onClick={() => setShowAllPosts((v) => !v)}>
                  {showAllPosts ? 'Show Less' : 'Load More'}
                </button>
              </div>
              <div className="posts-actions">
                <Link to="/services" className="btn btn-secondary">Explore Services</Link>
                <Link to="/contact" className="btn btn-primary">Talk to Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
