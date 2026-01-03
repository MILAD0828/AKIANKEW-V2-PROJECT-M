import { Hono } from 'hono'
import { renderer } from './renderer'
import { 
  MAIN_LOGO_MOTION, 
  AKINAKE_LOGO,
  TERMINATOR_X_PRODUCT, 
  TERMINATOR_X_HERO,
  CRASH_SITE_PRODUCT,
  CRASH_SITE_HERO,
  SCORPION_PRODUCT,
  SCORPION_HERO
} from './assets'
// no client-side React hooks needed in server-rendered pages
import { getActiveSocialLinks, companyInfo } from './contact-info'
import { CATALOG } from './data/products'

const app = new Hono()
app.use(renderer)

// Home page
app.get('/', (c) => {
  return c.render(<HomeHero />)
})

// Products page
app.get('/products', (c) => {
  return c.render(<ProductsPage />)
})

// Product category pages
app.get('/products/monitors', (c) => {
  return c.render(<MonitorsPage />)
})

app.get('/products/monitors/gaming', (c) => {
  return c.render(<GamingMonitorsPage />)
})

app.get('/products/ssds', (c) => {
  return c.render(<SSDsPage />)
})

app.get('/products/keyboards-mice', (c) => {
  return c.render(<PeripheralsPage />)
})

app.get('/products/accessories', (c) => {
  return c.render(<AccessoriesPage />)
})

// Terminator X page
app.get('/terminator-x', (c) => {
  return c.render(<TerminatorXPage />)
})

// Crash Site page
app.get('/crash-site', (c) => {
  return c.render(<CrashSitePage />)
})

// Scorpion page
app.get('/scorpion', (c) => {
  return c.render(<ScorpionPage />)
})

// Articles page
app.get('/articles', (c) => {
  return c.render(<ArticlesPage />)
})

// Contact page
app.get('/contact', (c) => {
  return c.render(<ContactPage />)
})

function HomeHero() {
  // Render claim visible by default for static SSR pages.
  const showClaim = true
  return (
    <main class="home-fullscreen-hero">
      <div class="logo-motion-bg-wrap">
        <video
          class="logo-motion-bg"
          src={MAIN_LOGO_MOTION}
          autoPlay
          muted
          loop
          playsInline
          style="object-fit:cover;"
        />
        <div class="hero-glass-border" />
        <div style={{position:'absolute',zIndex:2, width:'100%',left:0,display:'flex',flexDirection:'column',alignItems:'center',pointerEvents:'none', bottom:'8vh'}}>
            <div class="holiday-logo" style={{pointerEvents:'none', marginBottom:12}}>
              <img src={AKINAKE_LOGO} alt="AKINAKE" style={{width:140, opacity:0.95}} />
            </div>
          <div
            className={"main-claim brand-claim-fadein" + (showClaim ? ' active' : '')}
            style={{opacity: showClaim ? 1 : 0, transition:'opacity .8s cubic-bezier(.6,0,.5,1)'}}
          >
            <span class="magic-word magic-word--wisdom">Wisdom</span>
            <span class="magic-word magic-word--innovation">Innovation</span>
            <span class="magic-word magic-word--stunning">Stunning</span>
          </div>
          <div className={"brand-revolution brand-claim-fadein" + (showClaim ? ' active' : '')} style={{opacity: showClaim ? 1 : 0, transition:'opacity .8s .17s cubic-bezier(.6,0,.5,1)'}}>AKINAKE Gaming Revolution</div>
        </div>
      </div>
    </main>
  )
}

function ProductsPage() {
  return (
    <main>
      <section class="hero">
        <div class="glow-ring" />
        <div class="container">
          <h1>Products</h1>
          <p>Browse AKINAKE product categories and subcategories</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="category-grid">
            {CATALOG.map((cat) => (
              <div class="category-card">
                <h3>{cat.title}</h3>
                <div class="category-links">
                  {cat.subcategories.map((sub) => (
                    <a href={`/products/${cat.id}${sub.id ? '/' + sub.id : ''}`}>{sub.title}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function MonitorsPage() {
  const monitors = CATALOG.find((c) => c.id === 'monitors')
  return (
    <main>
      <section class="hero">
        <div class="glow-ring" />
        <div class="container">
          <h1>Monitors</h1>
          <p>Gaming and Office monitors — choose your category</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="category-links">
            {monitors?.subcategories.map((s) => (
              <a href={`/products/monitors/${s.id}`}>{s.title}</a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function GamingMonitorsPage() {
  // reuse the existing hero-character markup for gaming monitors
  return (
    <main>
      <section class="hero">
        <div class="glow-ring" />
        <div class="container">
          <h1>Gaming Monitors</h1>
          <p>Experience the future of gaming with AKINAKE's premium monitor lineup</p>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="product-characters">
            <div class="product-character product-character--terminator" data-theme="blue">
              <div class="character-bg">
                <img src={TERMINATOR_X_HERO} alt="Terminator X Character" class="character-image" />
                <div class="character-glow character-glow--blue"></div>
              </div>
              <div class="character-content">
                <h3 class="character-title">Terminator X</h3>
                <p class="character-subtitle">34-inch Curved Ultra-wide Gaming Monitor</p>
                <p class="character-desc">The ultimate gaming experience with stunning visuals and immersive curved display</p>
                <a href="/terminator-x" class="character-cta" data-theme="blue"><span>Explore</span></a>
              </div>
            </div>
            <div class="product-character product-character--crash" data-theme="green">
              <div class="character-bg">
                <img src={CRASH_SITE_HERO} alt="Crash Site Character" class="character-image" />
                <div class="character-glow character-glow--green"></div>
              </div>
              <div class="character-content">
                <h3 class="character-title">Crash Site</h3>
                <p class="character-subtitle">29-inch Ultra-wide Gaming Monitor</p>
                <p class="character-desc">Immersive gameplay with ultra-wide design and exceptional performance</p>
                <a href="/crash-site" class="character-cta" data-theme="green"><span>Explore</span></a>
              </div>
            </div>
            <div class="product-character product-character--scorpion" data-theme="orange">
              <div class="character-bg">
                <img src={SCORPION_HERO} alt="Scorpion Character" class="character-image" />
                <div class="character-glow character-glow--orange"></div>
              </div>
              <div class="character-content">
                <h3 class="character-title">Scorpion</h3>
                <p class="character-subtitle">27-inch High-Performance Gaming Monitor</p>
                <p class="character-desc">Precision gaming at 100Hz with stunning visuals and responsive performance</p>
                <a href="/scorpion" class="character-cta" data-theme="orange"><span>Explore</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function SSDsPage() {
  return (
    <main>
      <section class="hero"><div class="glow-ring" /><div class="container"><h1>SSDs (اکیناکه)</h1><p>High-performance storage solutions</p></div></section>
      <section class="section"><div class="container"><p>Coming soon — add SSD models to the catalog.</p></div></section>
    </main>
  )
}

function PeripheralsPage() {
  return (
    <main>
      <section class="hero"><div class="glow-ring" /><div class="container"><h1>Keyboards & Mice</h1><p>Mechanical keyboards and gaming mice</p></div></section>
      <section class="section"><div class="container"><p>Coming soon — add keyboards & mice models to the catalog.</p></div></section>
    </main>
  )
}

function AccessoriesPage() {
  return (
    <main>
      <section class="hero"><div class="glow-ring" /><div class="container"><h1>Accessories & Gaming</h1><p>Accessories to complete your setup</p></div></section>
      <section class="section"><div class="container"><p>Coming soon — add accessories to the catalog.</p></div></section>
    </main>
  )
}

function TerminatorXPage() {
  return (
    <main data-theme="blue">
      <section class="hero">
        <div class="glow-ring" />
        <div class="container">
          <h1 class="hover-neon product-page-title">Terminator X</h1>
          <p class="product-page-subtitle">34-inch Curved Gaming Monitor — Ultra-wide excellence</p>
          <div class="model-selector-info">
            Available in <strong>2K (2560x1440)</strong> and <strong>4K (3440x1440)</strong> variants
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div class="model-toggle-wrapper">
            <button class="model-toggle-btn active" data-model="4k">4K Ultra-wide (3440x1440)</button>
            <button class="model-toggle-btn" data-model="2k">2K Wide (2560x1440)</button>
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container grid grid-2">
          <div class="product-image-wrap">
            <img src={TERMINATOR_X_PRODUCT} alt="Terminator X" class="product-main-image" />
            <div class="product-character-hero">
              <img src={TERMINATOR_X_HERO} alt="Terminator X Character" class="character-hero-img" />
            </div>
          </div>
          <div>
            <h2 class="specs-title">Technical Specifications</h2>
            <div class="specs" id="specs-container">
              <div class="spec-group" data-model="4k">
                <div class="spec spec-colored">
                  <strong>Screen Size</strong>
                  <span>34 inches (86.4 cm)</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Model Name</strong>
                  <span>Terminator X — 4K Model</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Curvature</strong>
                  <span>1500R Ultra-wide Curved</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Resolution</strong>
                  <span>3440 x 1440 (UWQHD)</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Refresh Rate</strong>
                  <span>144Hz / 165Hz (OC)</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Response Time</strong>
                  <span>1ms (MPRT)</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Panel Type</strong>
                  <span>VR Panel (Premium)</span>
                </div>
                <div class="spec spec-colored">
                  <strong>RGB Lighting</strong>
                  <span>Customizable Backlight System</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Multi-window Capability</strong>
                  <span>Display up to 4 devices simultaneously with different images</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Connectivity</strong>
                  <span>HDMI 2.1, DisplayPort 1.4</span>
                </div>
              </div>
              <div class="spec-group hidden" data-model="2k">
                <div class="spec spec-colored">
                  <strong>Screen Size</strong>
                  <span>34 inches (86.4 cm)</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Model Name</strong>
                  <span>Terminator X — 2K Model</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Curvature</strong>
                  <span>1500R Ultra-wide Curved</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Resolution</strong>
                  <span>2560 x 1440 (QHD)</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Refresh Rate</strong>
                  <span>165Hz / 180Hz (OC)</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Response Time</strong>
                  <span>1ms (MPRT)</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Panel Type</strong>
                  <span>IPS (Premium)</span>
                </div>
                <div class="spec spec-colored">
                  <strong>RGB Lighting</strong>
                  <span>Customizable Backlight System</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Multi-window Capability</strong>
                  <span>Display up to 4 devices simultaneously with different images</span>
                </div>
                <div class="spec spec-colored">
                  <strong>Connectivity</strong>
                  <span>HDMI 2.1, DisplayPort 1.4</span>
                </div>
              </div>
            </div>
            <div class="product-description">
              <h3 class="desc-title">About Terminator X</h3>
              <p class="desc-text">The Terminator X represents the pinnacle of ultra-wide gaming monitors. With its stunning 34-inch curved display and 3440x1440 resolution, it delivers an immersive gaming experience that wraps around your vision. The 1500R curvature creates a natural viewing angle, while the 144Hz-165Hz refresh rate ensures buttery-smooth gameplay.</p>
              
              <h4 class="feature-title">Core Features</h4>
              <p class="desc-text">Equipped with customizable RGB backlighting, the Terminator X doesn't just display your games—it becomes part of your gaming setup. The premium build quality and futuristic design make it a statement piece for any gaming battlestation.</p>
              
              <h4 class="feature-title">Multi-Window Mastery</h4>
              <p class="desc-text">One of the most powerful features of Terminator X is its ability to display content from up to 4 different devices simultaneously, each with completely different images on its own dedicated window. Perfect for content creators, traders, and multitasking professionals who need to monitor multiple sources at once without switching focus.</p>
              
              <h4 class="feature-title">Available Models</h4>
              <ul class="specs-list">
                <li><strong>4K Ultra-Wide:</strong> 3440x1440 resolution with 144Hz-165Hz refresh rate, ideal for maximum visual quality and immersion</li>
                <li><strong>2K Wide:</strong> 2560x1440 resolution with up to 180Hz refresh rate, perfect for competitive gaming with exceptional responsiveness</li>
              </ul>
              
              <h4 class="feature-title">Why Choose Terminator X?</h4>
              <p class="desc-text">Whether you're exploring vast open worlds, competing in fast-paced esports, or multitasking across multiple applications, the Terminator X provides the screen real estate and performance you need to dominate. The 1ms response time eliminates motion blur, while advanced color technology delivers vibrant, accurate visuals.</p>
              
              <p class="desc-text">The seamless integration of multiple inputs through the Multi-Window capability makes this monitor ideal for professionals in finance, design, and content creation, alongside serious gamers who demand the best.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function CrashSitePage() {
  return (
    <main data-theme="green">
      <section class="hero">
        <div class="glow-ring" />
        <div class="container">
(Content truncated due to size limit. Use page ranges or line ranges to read remaining content)