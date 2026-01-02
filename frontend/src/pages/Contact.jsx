import { useState } from 'react';
import { images } from '../assets/images';
import './Contact.css';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    channel: 'email',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    // Send via Email only (WhatsApp links handled by floating buttons)
    const to = 'info@magnetlogistics.com';
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Hello Magnet Logistics,%0A%0A${formData.message}%0A%0A— ${formData.name}${formData.phone ? ' | ' + formData.phone : ''}%0A${formData.email}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        channel: 'email',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="contact-hero-images">
          <img src="/images/planes.svg" alt="" className="hero-bg-img img-1" />
          <img src="/images/boats.svg" alt="" className="hero-bg-img img-2" />
          <img src="/images/train.svg" alt="" className="hero-bg-img img-3" />
        </div>
        <h1>Contact Us</h1>
        <p>Get in touch with our team - we're here to help</p>
      </section>

      <section className="contact-content">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
          
          <div className="info-cards">
            <div className="info-card" style={{backgroundImage: `url(${images.generated.warehouse})`}}>
              <div className="info-icon" aria-hidden="true"><FaMapMarkerAlt /></div>
              <h3>Visit Us</h3>
              <p>GIKONDO/MAGERWA<br/>Kigali, Rwanda</p>
            </div>
            
            <div className="info-card" style={{backgroundImage: `url(${images.services.customs})`}}>
              <div className="info-icon" aria-hidden="true"><FaEnvelope /></div>
              <h3>Email Us</h3>
              <p>info@magnetlogistics.com<br/>support@magnetlogistics.com</p>
            </div>
            
            <div className="info-card" style={{backgroundImage: `url(${images.generated.road})`}}>
              <div className="info-icon" aria-hidden="true"><FaPhoneAlt /></div>
              <h3>Call Us</h3>
              <p>078 152 3519<br/>078 823 1034<br/>Mon-Fri: 8AM - 8PM EST</p>
            </div>

            {/* WhatsApp quick links removed; use floating buttons instead */}
          </div>

          <div className="map-container">
            <iframe
              title="Magnet Logistics Location"
              src="https://www.google.com/maps?q=GIKONDO%2F%20MAGERWA&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          
          {submitted && (
            <div className="success-message">
              ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className={`form-group ${errors.name ? 'error' : ''}`}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>
              
              <div className={`form-group ${errors.email ? 'error' : ''}`}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div className={`form-group ${errors.subject ? 'error' : ''}`}>
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                {errors.subject && <span className="error-text">{errors.subject}</span>}
              </div>
            </div>
            
            <div className={`form-group ${errors.message ? 'error' : ''}`}>
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Preferred Channel</label>
                <div className="radio-group">
                  <label><input type="radio" name="channel" value="email" checked={formData.channel === 'email'} onChange={handleChange} /> Email</label>
                </div>
              </div>
            </div>
            
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
