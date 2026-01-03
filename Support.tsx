import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { pageMetaTags } from '@/lib/seo';
import './Support.css';

interface SupportCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  items: {
    name: string;
    description: string;
    link?: string;
  }[];
}

const supportCategories: SupportCategory[] = [
  {
    id: 'drivers',
    title: 'Drivers & Software',
    description: 'Download the latest drivers and software for your AKINAKE monitor',
    icon: '⬇️',
    color: '#00D9FF',
    items: [
      {
        name: 'Terminator X Drivers',
        description: 'Latest drivers for Terminator X 34" monitors',
        link: '#'
      },
      {
        name: 'Crash Site Drivers',
        description: 'Drivers for Crash Site 29" ultra-wide monitors',
        link: '#'
      },
      {
        name: 'Scorpion Drivers',
        description: 'Drivers for Scorpion 27" gaming monitors',
        link: '#'
      },
      {
        name: 'Firmware Updates',
        description: 'Latest firmware for monitor optimization',
        link: '#'
      }
    ]
  },
  {
    id: 'documentation',
    title: 'Documentation',
    description: 'User manuals, datasheets, and technical documentation',
    icon: '📄',
    color: '#00FF41',
    items: [
      {
        name: 'User Manuals',
        description: 'Complete user guides for all AKINAKE monitors',
        link: '#'
      },
      {
        name: 'Technical Specifications',
        description: 'Detailed technical datasheets and specifications',
        link: '#'
      },
      {
        name: 'Setup Guides',
        description: 'Step-by-step setup and installation guides',
        link: '#'
      },
      {
        name: 'Troubleshooting',
        description: 'Common issues and solutions',
        link: '#'
      }
    ]
  },
  {
    id: 'warranty',
    title: 'Warranty & Support',
    description: 'Warranty information and customer support',
    icon: '🛡️',
    color: '#FF6600',
    items: [
      {
        name: 'Warranty Information',
        description: '2-year comprehensive warranty coverage',
        link: '#'
      },
      {
        name: 'Warranty Registration',
        description: 'Register your product for warranty',
        link: '#'
      },
      {
        name: 'RMA Process',
        description: 'Return and replacement procedures',
        link: '#'
      },
      {
        name: 'Support Ticket',
        description: 'Submit a support ticket for assistance',
        link: '#'
      }
    ]
  },
  {
    id: 'resources',
    title: 'Resources & FAQ',
    description: 'Frequently asked questions and helpful resources',
    icon: '❓',
    color: '#FF0080',
    items: [
      {
        name: 'FAQ',
        description: 'Frequently asked questions about AKINAKE monitors',
        link: '#'
      },
      {
        name: 'Video Tutorials',
        description: 'Video guides for setup and optimization',
        link: '#'
      },
      {
        name: 'Calibration Guide',
        description: 'Monitor calibration for best performance',
        link: '#'
      },
      {
        name: 'Contact Support',
        description: 'Get in touch with our support team',
        link: '/contact'
      }
    ]
  }
];

export default function Support() {
  return (
    <div className="support-page">
      <SEOHead meta={pageMetaTags.support} />
      <Header />

      {/* Hero Section */}
      <section className="support-hero">
        <div className="container">
          <h1 className="hero-title">Support & Resources</h1>
          <p className="hero-subtitle">
            Find drivers, documentation, and support for your AKINAKE gaming monitor
          </p>
        </div>
      </section>

      {/* Support Categories */}
      <section className="support-categories">
        <div className="container">
          <div className="categories-grid">
            {supportCategories.map((category) => (
              <div
                key={category.id}
                className="category-card"
                style={{
                  '--category-color': category.color,
                  borderColor: category.color
                } as React.CSSProperties & { '--category-color': string }}
              >
                <div className="category-header">
                  <span className="category-icon">{category.icon}</span>
                  <h2 className="category-title" style={{ color: category.color }}>
                    {category.title}
                  </h2>
                </div>
                <p className="category-description">{category.description}</p>

                <div className="category-items">
                  {category.items.map((item, index) => (
                    <a
                      key={index}
                      href={item.link || '#'}
                      className="category-item"
                      style={{
                        borderLeftColor: category.color
                      }}
                    >
                      <div className="item-content">
                        <h4 className="item-name">{item.name}</h4>
                        <p className="item-description">{item.description}</p>
                      </div>
                      <span className="item-arrow">→</span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <div className="container">
          <h2 className="section-title">Quick Links</h2>
          <div className="quick-links-grid">
            <a href="#" className="quick-link quick-link-blue">
              <span className="link-icon">📥</span>
              <span className="link-text">Download Drivers</span>
            </a>
            <a href="#" className="quick-link quick-link-green">
              <span className="link-icon">📖</span>
              <span className="link-text">View Manuals</span>
            </a>
            <a href="#" className="quick-link quick-link-orange">
              <span className="link-icon">🎥</span>
              <span className="link-text">Watch Tutorials</span>
            </a>
            <a href="/contact" className="quick-link quick-link-red">
              <span className="link-icon">💬</span>
              <span className="link-text">Contact Support</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="support-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Need Additional Help?</h2>
            <p>Our support team is ready to assist you</p>
            <a href="/contact" className="cta-button">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
