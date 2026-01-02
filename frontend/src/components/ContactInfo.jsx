import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import './ContactInfo.css';

/**
 * Reusable contact info component using react-icons.
 * Props:
 * - address: string
 * - mapLink: optional string (URL to map)
 * - phones: string[] (numbers will be converted to tel: links)
 * - email: string
 * - hours: string
 * - compact: boolean (smaller spacing)
 * - className: extra container class
 */
export default function ContactInfo({
  address,
  mapLink,
  phones = [],
  email,
  hours,
  compact = false,
  className = '',
}) {
  const telHref = (n) => `tel:${n.replace(/\s+/g, '')}`;
  const mailHref = (e) => `mailto:${e}`;

  return (
    <ul className={`contact-info-ui ${compact ? 'compact' : ''} ${className}`}>      
      {address && (
        <li className="contact-item">
          <span className="contact-icon" aria-hidden="true"><FaMapMarkerAlt size={14} /></span>
          {mapLink ? (
            <a href={mapLink} target="_blank" rel="noopener noreferrer" className="contact-text">{address}</a>
          ) : (
            <span className="contact-text">{address}</span>
          )}
        </li>
      )}
      {phones.map((p, i) => (
        <li key={i} className="contact-item">
          <span className="contact-icon" aria-hidden="true"><FaPhoneAlt size={14} /></span>
          <a href={telHref(p)} className="contact-text">{p}</a>
        </li>
      ))}
      {email && (
        <li className="contact-item">
          <span className="contact-icon" aria-hidden="true"><FaEnvelope size={14} /></span>
          <a href={mailHref(email)} className="contact-text">{email}</a>
        </li>
      )}
      {hours && (
        <li className="contact-item">
          <span className="contact-icon" aria-hidden="true"><FaClock size={14} /></span>
          <span className="contact-text">{hours}</span>
        </li>
      )}
    </ul>
  );
}
