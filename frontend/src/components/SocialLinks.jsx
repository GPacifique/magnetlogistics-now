import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import './SocialLinks.css';

/**
 * Reusable social links component using react-icons.
 * Props:
 * - links: { facebook?, instagram?, twitter?, linkedin?, youtube? } URLs
 * - size: icon size in px (default 18)
 * - variant: 'row' | 'grid' (default 'row')
 * - showLabels: boolean to show text labels (default false)
 * - className: extra class for container
 */
export default function SocialLinks({
  links = {},
  size = 18,
  variant = 'row',
  showLabels = false,
  className = '',
}) {
  const items = [
    { key: 'facebook', label: 'Facebook', Icon: FaFacebookF, color: '#1877F2', url: links.facebook },
    { key: 'twitter', label: 'Twitter', Icon: FaTwitter, color: '#000000', url: links.twitter },
    { key: 'linkedin', label: 'LinkedIn', Icon: FaLinkedinIn, color: '#0A66C2', url: links.linkedin },
    { key: 'instagram', label: 'Instagram', Icon: FaInstagram, color: '#E1306C', url: links.instagram },
    { key: 'youtube', label: 'YouTube', Icon: FaYoutube, color: '#FF0000', url: links.youtube },
  ].filter((i) => !!i.url);

  return (
    <div className={`social-links-ui ${variant} ${className}`} role="list">
      {items.map(({ key, label, Icon, color, url }) => (
        <a
          key={key}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          role="listitem"
          className={`social-link-ui ${key}`}
          style={{ '--brand-color': color }}
        >
          <span className="icon-wrap" aria-hidden="true">
            <Icon size={size} />
          </span>
          {showLabels && <span className="icon-label">{label}</span>}
        </a>
      ))}
    </div>
  );
}
