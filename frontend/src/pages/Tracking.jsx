import { useState } from 'react';
import './Tracking.css';

function Tracking() {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResult, setTrackingResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleTrack = async (e) => {
    e.preventDefault();
    
    if (!trackingNumber.trim()) {
      setError('Please enter a tracking number');
      return;
    }

    setLoading(true);
    setError('');
    setTrackingResult(null);

    // Simulate API call
    setTimeout(() => {
      // Mock tracking data
      setTrackingResult({
        trackingNumber: trackingNumber,
        status: 'In Transit',
        origin: 'New York, USA',
        destination: 'London, UK',
        estimatedDelivery: 'January 5, 2026',
        currentLocation: 'Frankfurt, Germany',
        history: [
          { date: '2026-01-02 14:30', location: 'Frankfurt, Germany', status: 'In Transit', description: 'Package is in transit to next facility' },
          { date: '2026-01-02 08:15', location: 'Paris, France', status: 'Departed', description: 'Departed from facility' },
          { date: '2026-01-01 22:45', location: 'Paris, France', status: 'Arrived', description: 'Arrived at sorting facility' },
          { date: '2026-01-01 18:30', location: 'New York, USA', status: 'Picked Up', description: 'Package picked up from sender' },
          { date: '2026-01-01 10:00', location: 'New York, USA', status: 'Order Created', description: 'Shipment order created' }
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="tracking">
      <section className="tracking-hero">
        <div className="tracking-hero-images">
          <img src="/images/road.svg" alt="" className="hero-bg-img" />
          <img src="/images/warehouse.svg" alt="" className="hero-bg-img" />
        </div>
        <h1>Track Your Shipment</h1>
        <p>Enter your tracking number to get real-time updates</p>
      </section>

      <section className="tracking-content">
        <div className="tracking-form-container">
          <form onSubmit={handleTrack} className="tracking-form">
            <input
              type="text"
              placeholder="Enter tracking number (e.g., MGL123456789)"
              value={trackingNumber}
              onChange={(e) => setTrackingNumber(e.target.value)}
              className="tracking-input"
            />
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Tracking...' : 'Track Package'}
            </button>
          </form>
          
          {error && <div className="error-message">{error}</div>}
        </div>

        {trackingResult && (
          <div className="tracking-results">
            <div className="result-header">
              <h2>Tracking Details</h2>
              <div className="tracking-number">#{trackingResult.trackingNumber}</div>
            </div>

            <div className="result-summary">
              <div className="summary-item">
                <span className="label">Status:</span>
                <span className={`status ${trackingResult.status.toLowerCase().replace(' ', '-')}`}>
                  {trackingResult.status}
                </span>
              </div>
              <div className="summary-item">
                <span className="label">Origin:</span>
                <span>{trackingResult.origin}</span>
              </div>
              <div className="summary-item">
                <span className="label">Destination:</span>
                <span>{trackingResult.destination}</span>
              </div>
              <div className="summary-item">
                <span className="label">Current Location:</span>
                <span>{trackingResult.currentLocation}</span>
              </div>
              <div className="summary-item">
                <span className="label">Estimated Delivery:</span>
                <span className="highlight">{trackingResult.estimatedDelivery}</span>
              </div>
            </div>

            <div className="tracking-history">
              <h3>Shipment History</h3>
              <div className="timeline">
                {trackingResult.history.map((event, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-date">{event.date}</div>
                      <div className="timeline-location">{event.location}</div>
                      <div className="timeline-status">{event.status}</div>
                      <div className="timeline-description">{event.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Tracking;
