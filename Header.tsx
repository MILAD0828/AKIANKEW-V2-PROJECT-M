import { useState } from 'react';
import { Link } from 'wouter';
import { Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isProductDrawerOpen, setIsProductDrawerOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleProductClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsProductDrawerOpen(!isProductDrawerOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <img src="/images/FINALY LOGO-TRANC.png" alt="AKINAKE" className="logo-image" />
          <span className="logo-glow"></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          <Link href="/" className="nav-link">Home</Link>
          
          <div className="nav-item-with-menu">
            <button 
              className="nav-link nav-link-with-arrow"
              onClick={handleProductClick}
            >
              Products
              <ChevronDown size={16} className={isProductDrawerOpen ? 'rotate' : ''} />
            </button>
            
            {/* Product Drawer */}
            {isProductDrawerOpen && (
              <div className="product-drawer">
                <div className="drawer-content">
                  {/* Monitors Section */}
                  <div className="drawer-section">
                    <h3 className="section-title">Monitors</h3>
                    <div className="section-tabs">
                      <Link href="/products/monitors/gaming" className="tab-link">Gaming</Link>
                      <Link href="/products/monitors/office" className="tab-link">Office</Link>
                    </div>
                    
                    {/* Gaming Monitor Series */}
                    <div className="series-container">
                      <Link href="/products/terminator-x" className="series-item series-blue">
                        <div className="series-color-indicator"></div>
                        <div>
                          <h4>Terminator X</h4>
                          <p>34" Curved Ultra-wide</p>
                          <span className="series-models">4K • 2K</span>
                        </div>
                      </Link>
                      
                      <Link href="/products/crash-site" className="series-item series-green">
                        <div className="series-color-indicator"></div>
                        <div>
                          <h4>Crash Site</h4>
                          <p>29" Ultra-wide</p>
                          <span className="series-models">Standard</span>
                        </div>
                      </Link>
                      
                      <Link href="/products/scorpion" className="series-item series-orange">
                        <div className="series-color-indicator"></div>
                        <div>
                          <h4>Scorpion</h4>
                          <p>27" High-Performance</p>
                          <span className="series-models">1K 100Hz</span>
                        </div>
                      </Link>
                    </div>
                  </div>

                  {/* Storage & Accessories Section */}
                  <div className="drawer-section">
                    <h3 className="section-title">Storage & Accessories</h3>
                    <div className="section-links">
                      <Link href="/products/storage" className="drawer-link">Hard Drives</Link>
                      <Link href="/products/accessories" className="drawer-link">Accessories</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/support" className="nav-link">Support</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="nav-mobile">
          <Link href="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Home</Link>
          
          <button 
            className="mobile-nav-link mobile-nav-link-menu"
            onClick={() => setActiveMenu(activeMenu === 'products' ? null : 'products')}
          >
            Products
            <ChevronDown size={16} className={activeMenu === 'products' ? 'rotate' : ''} />
          </button>
          
          {activeMenu === 'products' && (
            <div className="mobile-submenu">
              <div className="mobile-submenu-section">
                <h4>Gaming Monitors</h4>
                <Link href="/products/terminator-x" className="mobile-submenu-link" onClick={() => setIsOpen(false)}>Terminator X</Link>
                <Link href="/products/crash-site" className="mobile-submenu-link" onClick={() => setIsOpen(false)}>Crash Site</Link>
                <Link href="/products/scorpion" className="mobile-submenu-link" onClick={() => setIsOpen(false)}>Scorpion</Link>
              </div>
              <div className="mobile-submenu-section">
                <h4>Other</h4>
                <Link href="/products/storage" className="mobile-submenu-link" onClick={() => setIsOpen(false)}>Hard Drives</Link>
                <Link href="/products/accessories" className="mobile-submenu-link" onClick={() => setIsOpen(false)}>Accessories</Link>
              </div>
            </div>
          )}

          <Link href="/support" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Support</Link>
          <Link href="/contact" className="mobile-nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  );
}
