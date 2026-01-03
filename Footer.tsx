import { useState } from 'react';
import './Footer.css';

interface SocialLink {
  name: string;
  url: string;
  color: string;
  icon: string;
}

const socialLinks: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/akinake.tech',
    color: '#E1306C',
    icon: '📷'
  },
  {
    name: 'YouTube',
    url: 'https://www.youtube.com/@akinaketech',
    color: '#FF0000',
    icon: '▶'
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/company/akinake-tech',
    color: '#0A66C2',
    icon: '💼'
  },
  {
    name: 'TikTok',
    url: 'https://tiktok.com/@akinaketech',
    color: '#000000',
    icon: '♪'
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/akinaketech',
    color: '#1877F2',
    icon: 'f'
  },
  {
    name: 'X',
    url: 'https://x.com/Akinaketech',
    color: '#000000',
    icon: '𝕏'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+989177379861',
    color: '#25D366',
    icon: '💬'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/akinaketech',
    color: '#0088cc',
    icon: '✈'
  }
];

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, name: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setHoveredLink(name);
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section footer-brand">
          <h3 className="footer-brand-name">AKINAKE</h3>
          <p className="footer-tagline">Gaming Revolution</p>
          <p className="footer-description">
            Wisdom • Innovation • Stunning
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section footer-links">
          <h4 className="footer-section-title">Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/support">Support</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Company Info */}
        <div className="footer-section footer-info">
          <h4 className="footer-section-title">Contact Info</h4>
          <div className="info-item">
            <span className="info-label">Email:</span>
            <a href="mailto:info@akinake-tech.com">info@akinake-tech.com</a>
          </div>
          <div className="info-item">
            <span className="info-label">Phone:</span>
            <a href="tel:+97148819766">+971 4 881 9766</a>
          </div>
          <div className="info-item">
            <span className="info-label">Location:</span>
            <span>Dubai, UAE</span>
          </div>
        </div>

        {/* Social Links with 3D Hover */}
        <div className="footer-section footer-social">
          <h4 className="footer-section-title">Follow Us</h4>
          <div className="social-links-container">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                onMouseMove={(e) => handleMouseMove(e, link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  '--social-color': link.color,
                  '--is-hovered': hoveredLink === link.name ? '1' : '0'
                } as React.CSSProperties & { '--social-color': string; '--is-hovered': string }}
              >
                <span className="social-icon">{link.icon}</span>
                <span className="social-name">{link.name}</span>
                {hoveredLink === link.name && (
                  <div
                    className="social-glow"
                    style={{
                      left: `${mousePos.x}px`,
                      top: `${mousePos.y}px`
                    }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            © 2024 AKINAKE Gaming Monitors. All rights reserved.
          </p>
          <div className="footer-bottom-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="/terms">Terms of Service</a>
            <span className="separator">•</span>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
