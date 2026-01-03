import Header from '@/components/Header';
import HeroSlider from '@/components/HeroSlider';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { pageMetaTags, generateOrganizationSchema } from '@/lib/seo';
import './Home.css';

export default function Home() {
  return (
    <div className="home-page">
      <SEOHead 
        meta={pageMetaTags.home}
        structuredData={generateOrganizationSchema()}
      />
      <Header />
      
      {/* Hero Slider */}
      <HeroSlider />

      {/* Featured Products Section */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Gaming Series</h2>
            <p className="section-subtitle">Experience the ultimate gaming with AKINAKE's premium monitor lineup</p>
          </div>

          <div className="featured-grid">
            {/* Terminator X */}
            <div className="featured-card featured-card-blue">
              <div className="card-header">
                <h3 className="card-title">Terminator X</h3>
                <span className="card-badge">34" Ultra-wide</span>
              </div>
              <div className="card-specs">
                <div className="spec">
                  <span className="spec-label">Resolution</span>
                  <span className="spec-value">4K / 2K</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Refresh Rate</span>
                  <span className="spec-value">144Hz</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Panel Type</span>
                  <span className="spec-value">IPS Curved</span>
                </div>
              </div>
              <p className="card-description">
                The ultimate gaming experience with stunning visuals and immersive curved display
              </p>
              <a href="/products/terminator-x" className="card-cta">
                Explore Terminator X
              </a>
            </div>

            {/* Crash Site */}
            <div className="featured-card featured-card-green">
              <div className="card-header">
                <h3 className="card-title">Crash Site</h3>
                <span className="card-badge">29" Ultra-wide</span>
              </div>
              <div className="card-specs">
                <div className="spec">
                  <span className="spec-label">Resolution</span>
                  <span className="spec-value">2560x1080</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Refresh Rate</span>
                  <span className="spec-value">120Hz</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Panel Type</span>
                  <span className="spec-value">VA Curved</span>
                </div>
              </div>
              <p className="card-description">
                Immersive gameplay with ultra-wide design and exceptional performance
              </p>
              <a href="/products/crash-site" className="card-cta">
                Explore Crash Site
              </a>
            </div>

            {/* Scorpion */}
            <div className="featured-card featured-card-orange">
              <div className="card-header">
                <h3 className="card-title">Scorpion</h3>
                <span className="card-badge">27" High-Performance</span>
              </div>
              <div className="card-specs">
                <div className="spec">
                  <span className="spec-label">Resolution</span>
                  <span className="spec-value">1920x1080</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Refresh Rate</span>
                  <span className="spec-value">100Hz</span>
                </div>
                <div className="spec">
                  <span className="spec-label">Panel Type</span>
                  <span className="spec-value">IPS Flat</span>
                </div>
              </div>
              <p className="card-description">
                Precision gaming at 100Hz with stunning visuals and responsive performance
              </p>
              <a href="/products/scorpion" className="card-cta">
                Explore Scorpion
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>Cutting-edge technology and design for the next generation of gaming</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Precision</h3>
              <p>Every detail crafted to deliver the ultimate gaming experience</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Performance</h3>
              <p>High refresh rates and response times for competitive gaming</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Quality</h3>
              <p>Premium materials and rigorous testing for lasting durability</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
