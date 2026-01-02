import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Get stored users from localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Find user with matching email and password
      const user = users.find(u => u.email === formData.email && u.password === formData.password);
      
      if (user) {
        // Store authentication data
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('currentUser', JSON.stringify({
          name: user.name,
          email: user.email,
          phone: user.phone
        }));
        
        navigate('/');
      } else {
        setError('Invalid email or password. Please try again.');
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-card">
          <h1>Welcome Back</h1>
          <p className="auth-subtitle">Sign in to your Magnet Logistics account</p>
          
          {error && <div className="error-message">{error}</div>}
          
          <form onSubmit={handleSubmit} className="auth-form">
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
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <a href="#" className="forgot-password">Forgot password?</a>
            </div>
            
            <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          
          <div className="auth-footer">
            Don't have an account? <Link to="/register">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
