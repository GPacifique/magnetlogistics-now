import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate passwords match
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }

    // Validate password length
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      setLoading(false);
      return;
    }

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Get existing users or initialize empty array
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if email already exists
      const emailExists = users.some(u => u.email === formData.email);
      
      if (emailExists) {
        setError('Email already registered. Please use a different email.');
        setLoading(false);
        return;
      }
      
      // Create new user
      const newUser = {
        id: Date.now(),
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        password: formData.password, // In production, this would be hashed
        createdAt: new Date().toISOString()
      };
      
      // Add to users array
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Store authentication data
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify({
        name: newUser.name,
        email: newUser.email,
        phone: newUser.phone
      }));
      
      navigate('/');
      setLoading(false);
    }, 800);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1>Create Account</h1>
          <p className="auth-subtitle">Join Magnet Logistics today</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
              />
            </div>
            
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" required />
                <span>I agree to the Terms & Conditions</span>
              </label>
            </div>
            
            <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>
          
          <div className="auth-footer">
            Already have an account? <Link to="/login">Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
