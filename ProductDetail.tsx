import { useState } from 'react';
import { useLocation } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { pageMetaTags, generateProductSchema } from '@/lib/seo';
import './ProductDetail.css';

interface ProductSpec {
  label: string;
  value: string;
}

interface Product {
  id: string;
  name: string;
  modelNumber: string;
  series: string;
  color: string;
  glowColor: string;
  image: string;
  description: string;
  tagline: string;
  specs: ProductSpec[];
  features: string[];
  models?: {
    name: string;
    modelNumber: string;
    resolution: string;
    specs: ProductSpec[];
  }[];
}

const products: Record<string, Product> = {
  'terminator-x': {
    id: 'terminator-x',
    name: 'Terminator X',
    modelNumber: 'AK-TX-34',
    series: 'Gaming Series',
    color: '#00D9FF',
    glowColor: 'rgba(0, 217, 255, 0.3)',
    image: '/images/terminator x (1).png',
    description: 'The ultimate gaming experience with stunning visuals and immersive curved display. Designed for competitive gamers and content creators.',
    tagline: '34" Curved Ultra-wide Gaming Monitor',
    specs: [
      { label: 'Model Number', value: 'AK-TX-34' },
      { label: 'Screen Size', value: '34 inches (86.4 cm)' },
      { label: 'Resolution', value: '3440x1440 (4K) / 2560x1440 (2K)' },
      { label: 'Panel Type', value: 'IPS Curved' },
      { label: 'Refresh Rate', value: '144Hz' },
      { label: 'Response Time', value: '1ms (GtG)' },
      { label: 'Aspect Ratio', value: '21.5:9' },
      { label: 'Color Gamut', value: '99% sRGB' },
      { label: 'Brightness', value: '350 nits' },
      { label: 'Contrast Ratio', value: '1000:1' },
      { label: 'Curvature', value: '1800R' },
      { label: 'Ports', value: 'DP 1.4, HDMI 2.1, USB-C' },
      { label: 'Power Consumption', value: '65W (typical)' },
      { label: 'Warranty', value: '3 Years' }
    ],
    features: [
      'Ultra-wide curved display for immersive gaming',
      '144Hz refresh rate for smooth gameplay',
      '1ms response time for competitive advantage',
      'HDR support for enhanced visuals',
      'USB-C connectivity with power delivery',
      'Height and tilt adjustment',
      'VESA mount compatible',
      'Premium build quality',
      'Quantum Dot technology',
      'G-Sync and FreeSync compatible'
    ],
    models: [
      {
        name: '4K Ultra-wide',
        modelNumber: 'AK-TX-34-4K',
        resolution: '3440x1440',
        specs: [
          { label: 'Model Number', value: 'AK-TX-34-4K' },
          { label: 'Resolution', value: '3440x1440 (4K)' },
          { label: 'Pixel Density', value: '110 PPI' },
          { label: 'Refresh Rate', value: '120Hz' },
          { label: 'Color Gamut', value: '98.5% DCI-P3' }
        ]
      },
      {
        name: '2K Wide',
        modelNumber: 'AK-TX-34-2K',
        resolution: '2560x1440',
        specs: [
          { label: 'Model Number', value: 'AK-TX-34-2K' },
          { label: 'Resolution', value: '2560x1440 (2K)' },
          { label: 'Pixel Density', value: '109 PPI' },
          { label: 'Refresh Rate', value: '144Hz' },
          { label: 'Color Gamut', value: '99% sRGB' }
        ]
      }
    ]
  },
  'crash-site': {
    id: 'crash-site',
    name: 'Crash Site',
    modelNumber: 'AK-CS-29',
    series: 'Gaming Series',
    color: '#00FF41',
    glowColor: 'rgba(0, 255, 65, 0.3)',
    image: '/images/CRASH SUI (7).png',
    description: 'Immersive gameplay with ultra-wide design and exceptional performance. Perfect for competitive gaming and professional use.',
    tagline: '29" Ultra-wide Gaming Monitor',
    specs: [
      { label: 'Model Number', value: 'AK-CS-29' },
      { label: 'Screen Size', value: '29 inches (73.7 cm)' },
      { label: 'Resolution', value: '2560x1080' },
      { label: 'Panel Type', value: 'VA Curved' },
      { label: 'Refresh Rate', value: '200Hz' },
      { label: 'Response Time', value: '0.5ms (GtG)' },
      { label: 'Aspect Ratio', value: '21:9' },
      { label: 'Color Gamut', value: '99% sRGB' },
      { label: 'Brightness', value: '350 nits' },
      { label: 'Contrast Ratio', value: '3000:1' },
      { label: 'Ports', value: 'DP 1.4, HDMI 2.1, USB 3.0' },
      { label: 'Power Consumption', value: '45W (typical)' },
      { label: 'Warranty', value: '3 Years' }
    ],
    features: [
      'Curved ultra-wide display for enhanced field of view',
      '200Hz refresh rate for smooth gaming',
      '0.5ms response time for competitive play',
      'VA panel for superior contrast',
      'Multiple connectivity options',
      'Ergonomic stand with adjustments',
      'Low blue light technology',
      'Professional color accuracy',
      'AMD FreeSync Premium',
      'VESA DisplayHDR 400'
    ]
  },
  'scorpion': {
    id: 'scorpion',
    name: 'Scorpion',
    modelNumber: 'AK-SC-27',
    series: 'Gaming Series',
    color: '#FF6600',
    glowColor: 'rgba(255, 102, 0, 0.3)',
    image: '/images/scorpion trance.png',
    description: 'Precision gaming at 100Hz with stunning visuals and responsive performance. Ideal for esports and fast-paced gaming.',
    tagline: '27" High-Performance Gaming Monitor',
    specs: [
      { label: 'Model Number', value: 'AK-SC-27' },
      { label: 'Screen Size', value: '27 inches (68.6 cm)' },
      { label: 'Resolution', value: '2560x1440 (QHD)' },
      { label: 'Panel Type', value: 'IPS Flat' },
      { label: 'Refresh Rate', value: '240Hz' },
      { label: 'Response Time', value: '0.3ms (GtG)' },
      { label: 'Aspect Ratio', value: '16:9' },
      { label: 'Color Gamut', value: '98% DCI-P3' },
      { label: 'Brightness', value: '400 nits' },
      { label: 'Contrast Ratio', value: '1000:1' },
      { label: 'Ports', value: 'DP 2.1, HDMI 2.1 x2, USB-C' },
      { label: 'Power Consumption', value: '55W (typical)' },
      { label: 'Warranty', value: '3 Years' }
    ],
    features: [
      '240Hz refresh rate for smooth gameplay',
      '0.3ms response time for competitive gaming',
      'IPS panel for wide viewing angles',
      'QHD resolution for clarity',
      'Eye care technology',
      'Flicker-free display',
      'Multiple input options',
      'Sleek modern design',
      'NVIDIA G-Sync Ultimate',
      'Quantum Dot technology'
    ]
  },
  'tier-x': {
    id: 'tier-x',
    name: 'Tier X',
    modelNumber: 'AK-TX-GAMING',
    series: 'Gaming Series',
    color: '#FFFF00',
    glowColor: 'rgba(255, 255, 0, 0.3)',
    image: '/images/t-rex.jpg',
    description: 'High-performance gaming monitor with yellow neon fluorescent design. Built for competitive gamers.',
    tagline: 'Gaming Series Monitor',
    specs: [
      { label: 'Model Number', value: 'AK-TX-GAMING' },
      { label: 'Panel Type', value: 'IPS' },
      { label: 'Refresh Rate', value: '165Hz+' },
      { label: 'Response Time', value: '1ms' },
      { label: 'Color Gamut', value: '95% sRGB' },
      { label: 'Brightness', value: '350 nits' },
      { label: 'Contrast Ratio', value: '1000:1' },
      { label: 'Ports', value: 'DP, HDMI, USB 3.0' },
      { label: 'Power Consumption', value: '40W (typical)' },
      { label: 'Warranty', value: '2 Years' }
    ],
    features: [
      'High refresh rate gaming performance',
      'Fast response time for competitive play',
      'Color-accurate IPS panel',
      'Multiple connectivity options',
      'Adjustable stand with ergonomic design',
      'Energy-efficient operation',
      'Gaming-optimized settings',
      'Anti-glare coating',
      'Built-in speakers',
      'Wall-mount compatible'
    ]
  },
  'klassur': {
    id: 'klassur',
    name: 'Klassur',
    modelNumber: 'AK-KL-OFFICE',
    series: 'Office Series',
    color: '#FF0080',
    glowColor: 'rgba(255, 0, 128, 0.3)',
    image: '/images/clasour.jpg',
    description: 'Professional office monitor available in multiple sizes. Perfect for productivity and professional work.',
    tagline: 'Office & Professional Monitor',
    specs: [
      { label: 'Model Number', value: 'AK-KL-OFFICE' },
      { label: 'Available Sizes', value: 'Small, Medium, Large' },
      { label: 'Panel Type', value: 'IPS' },
      { label: 'Resolution', value: '1920x1080 - 2560x1440' },
      { label: 'Refresh Rate', value: '60Hz' },
      { label: 'Response Time', value: '5ms' },
      { label: 'Color Gamut', value: '99% sRGB' },
      { label: 'Brightness', value: '300 nits' },
      { label: 'Contrast Ratio', value: '1000:1' },
      { label: 'Viewing Angle', value: '178° H / 178° V' },
      { label: 'Ports', value: 'HDMI, VGA, USB 3.0' },
      { label: 'Power Consumption', value: '30W (typical)' },
      { label: 'Warranty', value: '3 Years' }
    ],
    features: [
      'Professional-grade color accuracy',
      'Wide viewing angles for collaborative work',
      'Flicker-free technology for eye comfort',
      'Multiple size options for different workspaces',
      'VESA mount compatible',
      'Adjustable height and tilt stand',
      'Low blue light filter',
      'Energy Star certified',
      'USB hub with multiple ports',
      'Professional design in multiple finishes'
    ],
    models: [
      {
        name: 'Small',
        modelNumber: 'AK-KL-OFFICE-S',
        resolution: '1920x1080',
        specs: [
          { label: 'Model Number', value: 'AK-KL-OFFICE-S' },
          { label: 'Screen Size', value: '21.5 inches' },
          { label: 'Resolution', value: '1920x1080 (Full HD)' }
        ]
      },
      {
        name: 'Medium',
        modelNumber: 'AK-KL-OFFICE-M',
        resolution: '2560x1440',
        specs: [
          { label: 'Model Number', value: 'AK-KL-OFFICE-M' },
          { label: 'Screen Size', value: '27 inches' },
          { label: 'Resolution', value: '2560x1440 (QHD)' }
        ]
      },
      {
        name: 'Large',
        modelNumber: 'AK-KL-OFFICE-L',
        resolution: '2560x1440',
        specs: [
          { label: 'Model Number', value: 'AK-KL-OFFICE-L' },
          { label: 'Screen Size', value: '32 inches' },
          { label: 'Resolution', value: '2560x1440 (QHD)' }
        ]
      }
    ]
  }
};

export default function ProductDetail() {
  const [location] = useLocation();
  const productId = location.split('/').pop() || 'terminator-x';
  const product = products[productId] || products['terminator-x'];
  const [selectedModel, setSelectedModel] = useState(0);

  // Get SEO meta tags based on product
  const metaTags = pageMetaTags[productId as keyof typeof pageMetaTags] || pageMetaTags.terminatorX;
  const productSchema = generateProductSchema({
    name: product.name,
    description: product.description,
    image: product.image
  });

  return (
    <div className="product-detail-page">
      <SEOHead 
        meta={metaTags}
        structuredData={productSchema}
      />
      <Header />

      {/* Hero Section */}
      <section className="product-hero" style={{ '--glow-color': product.glowColor } as React.CSSProperties}>
        <div className="hero-background" />
        <div className="container">
          <div className="hero-content">
            <span className="hero-series" style={{ color: product.color }}>
              {product.series}
            </span>
            <h1 className="hero-title" style={{ color: product.color, textShadow: `0 0 20px ${product.color}` }}>
              {product.name}
            </h1>
            <p className="model-info" style={{ color: product.color }}>
              Model: {product.modelNumber}
            </p>
            <p className="hero-tagline">{product.tagline}</p>
            <p className="hero-description">{product.description}</p>
          </div>
        </div>
      </section>

      {/* Product Image Section */}
      <section className="product-image-section">
        <div className="container">
          <div className="image-container">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
              style={{ filter: `drop-shadow(0 0 40px ${product.color}80)` }}
            />
          </div>
        </div>
      </section>

      {/* Model Selection (if applicable) */}
      {product.models && product.models.length > 1 && (
        <section className="model-selection-section">
          <div className="container">
            <h2 className="section-title">Available Models</h2>
            <div className="model-tabs">
              {product.models.map((model, index) => (
                <button
                  key={index}
                  className={`model-tab ${selectedModel === index ? 'active' : ''}`}
                  onClick={() => setSelectedModel(index)}
                  style={{
                    borderColor: selectedModel === index ? product.color : 'rgba(255, 255, 255, 0.2)',
                    color: selectedModel === index ? product.color : '#A0AEC0'
                  }}
                >
                  {model.name}
                  <br />
                  <small>{model.modelNumber}</small>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Specifications Section */}
      <section className="specs-section">
        <div className="container">
          <h2 className="section-title">Technical Specifications</h2>
          <div className="specs-grid">
            {(product.models && product.models[selectedModel]
              ? product.models[selectedModel].specs
              : product.specs
            ).map((spec, index) => (
              <div key={index} className="spec-item" style={{ borderLeftColor: product.color }}>
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value" style={{ color: product.color }}>
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            {product.features.map((feature, index) => (
              <div key={index} className="feature-item" style={{ borderColor: product.color }}>
                <div className="feature-icon" style={{ backgroundColor: `${product.color}20` }}>
                  ✓
                </div>
                <p>{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Upgrade Your Experience?</h2>
            <p>Experience the difference with {product.name} ({product.modelNumber})</p>
            <button
              className="cta-button"
              style={{
                borderColor: product.color,
                color: product.color
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = product.color;
                e.currentTarget.style.color = '#0A0E27';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = product.color;
              }}
            >
              Get {product.name} Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
