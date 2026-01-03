import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLocation } from 'wouter';
import './HeroSlider.css';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  color: string;
  glowColor: string;
  link: string;
  modelNumber: string;
}

const slides: Slide[] = [
  {
    id: 'terminator',
    title: 'Terminator X',
    subtitle: '34" Curved Ultra-wide',
    description: 'Dominate your games with stunning 4K visuals, 144Hz refresh rate, and immersive curved display. The ultimate choice for competitive gamers.',
    image: '/images/terminator x (1).png',
    color: '#00D9FF',
    glowColor: 'rgba(0, 217, 255, 0.3)',
    link: '/products/terminator-x',
    modelNumber: 'AK-TX-34'
  },
  {
    id: 'crash',
    title: 'Crash Site',
    subtitle: '29" Ultra-wide Gaming',
    description: 'Experience ultra-wide immersion with 200Hz refresh rate and 0.5ms response time. Perfect for competitive gaming and professional work.',
    image: '/images/CRASH SUI (7).png',
    color: '#00FF41',
    glowColor: 'rgba(0, 255, 65, 0.3)',
    link: '/products/crash-site',
    modelNumber: 'AK-CS-29'
  },
  {
    id: 'scorpion',
    title: 'Scorpion',
    subtitle: '27" High-Performance',
    description: 'Lightning-fast 240Hz refresh rate with 0.3ms response time. Built for esports champions and precision gamers. Unmatched performance.',
    image: '/images/scorpion trance.png',
    color: '#FF6600',
    glowColor: 'rgba(255, 102, 0, 0.3)',
    link: '/products/scorpion',
    modelNumber: 'AK-SC-27'
  },
  {
    id: 'tier-x',
    title: 'Tier X',
    subtitle: 'Gaming Series',
    description: 'High-performance gaming monitor with yellow neon fluorescent design. Engineered for competitive gaming with 165Hz+ refresh rates.',
    image: '/images/t-rex.jpg',
    color: '#FFFF00',
    glowColor: 'rgba(255, 255, 0, 0.3)',
    link: '/products/tier-x',
    modelNumber: 'AK-TX-GAMING'
  },
  {
    id: 'klassur',
    title: 'Klassur',
    subtitle: 'Office & Professional',
    description: 'Professional-grade monitor for productivity. Available in multiple sizes with color-accurate IPS panels. Perfect for creative professionals.',
    image: '/images/clasour.jpg',
    color: '#FF0080',
    glowColor: 'rgba(255, 0, 128, 0.3)',
    link: '/products/klassur',
    modelNumber: 'AK-KL-OFFICE'
  },
  {
    id: 'akinake',
    title: 'AKINAKE',
    subtitle: 'Gaming Revolution',
    description: 'Wisdom • Innovation • Stunning - Discover the future of gaming monitors. Where neon meets performance, and dreams become reality.',
    image: '/images/akinake neon.png',
    color: '#FF0080',
    glowColor: 'rgba(255, 0, 128, 0.3)',
    link: '/',
    modelNumber: 'AKINAKE BRAND'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tiltX, setTiltX] = useState(0);
  const [tiltY, setTiltY] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  // Mouse tracking for 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });

    // Calculate tilt based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    setTiltX(rotateX);
    setTiltY(rotateY);
  };

  const handleMouseLeave = () => {
    setTiltX(0);
    setTiltY(0);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 6000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 6000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 6000);
  };

  const handleExplore = (link: string) => {
    window.location.href = link;
  };

  const slide = slides[currentSlide];

  return (
    <div className="hero-slider-container">
      <div
        ref={sliderRef}
        className="hero-slider"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          perspective: '1000px',
        }}
      >
        {/* Background with gradient */}
        <div
          className="slider-background"
          style={{
            background: `linear-gradient(135deg, ${slide.glowColor}, transparent)`,
          }}
        />

        {/* Glow effect */}
        <div
          className="slider-glow"
          style={{
            boxShadow: `0 0 60px ${slide.glowColor}, inset 0 0 60px ${slide.glowColor}`,
          }}
        />

        {/* Slides container */}
        <div className="slides-wrapper">
          {slides.map((s, index) => (
            <div
              key={s.id}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{
                opacity: index === currentSlide ? 1 : 0,
                visibility: index === currentSlide ? 'visible' : 'hidden',
                transform: index === currentSlide
                  ? `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1)`
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(0.95)',
              }}
            >
              {/* Image container */}
              <div className="slide-image-container">
                <img
                  src={s.image}
                  alt={s.title}
                  className="slide-image"
                  style={{
                    filter: `drop-shadow(0 0 30px ${s.color}80)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="slide-content">
                <div className="slide-label" style={{ color: s.color }}>
                  {s.modelNumber}
                </div>
                <h1 className="slide-title" style={{ color: s.color }}>
                  {s.title}
                </h1>
                <p className="slide-subtitle">{s.subtitle}</p>
                <p className="slide-description">{s.description}</p>
                <button
                  className="slide-cta"
                  style={{
                    borderColor: s.color,
                    color: s.color,
                  }}
                  onClick={() => handleExplore(s.link)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = s.color;
                    e.currentTarget.style.color = '#0A0E27';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = s.color;
                  }}
                >
                  Explore Now →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons */}
        <button className="slider-nav-btn slider-nav-prev" onClick={prevSlide} title="Previous slide">
          <ChevronLeft size={32} />
        </button>
        <button className="slider-nav-btn slider-nav-next" onClick={nextSlide} title="Next slide">
          <ChevronRight size={32} />
        </button>

        {/* Dots indicator */}
        <div className="slider-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              style={{
                backgroundColor: index === currentSlide ? slides[index].color : 'rgba(255, 255, 255, 0.3)',
              }}
              title={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="slide-counter">
          <span className="current">{String(currentSlide + 1).padStart(2, '0')}</span>
          <span className="separator">/</span>
          <span className="total">{String(slides.length).padStart(2, '0')}</span>
        </div>
      </div>
    </div>
  );
}
