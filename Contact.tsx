import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { pageMetaTags } from '@/lib/seo';
import './Contact.css';

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

export default function Contact() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleMouseMove = (e: React.MouseEvent, name: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setHoveredLink(name);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <SEOHead meta={pageMetaTags.contact} />
      <Header />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1 className="hero-title">Get In Touch</h1>
          <p className="hero-subtitle">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <h2 className="info-title">Contact Information</h2>

              <div className="info-item">
                <span className="info-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:info@akinake-tech.com">info@akinake-tech.com</a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+97148819766">+971 4 881 9766</a>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>Tech Street, Free Zone<br />Dubai, United Arab Emirates</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">💬</span>
                <div>
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/+989177379861">+98 917 737 9861</a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Message subject"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message"
                  rows={5}
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Links Section with Pure Icon Effects */}
      <section className="social-section">
        <div className="container">
          <h2 className="section-title">Follow Us</h2>
          <p className="section-subtitle">Connect with us on social media</p>

          <div className="social-links-container">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-icon"
                onMouseMove={(e) => handleMouseMove(e, link.name)}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  '--social-color': link.color,
                  '--is-hovered': hoveredLink === link.name ? '1' : '0'
                } as React.CSSProperties & { '--social-color': string; '--is-hovered': string }}
                title={link.name}
              >
                <span className="icon-glyph">{link.icon}</span>
                {hoveredLink === link.name && (
                  <div
                    className="icon-glow"
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
      </section>

      <Footer />
    </div>
  );
}
