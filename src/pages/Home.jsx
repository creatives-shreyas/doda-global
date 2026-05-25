import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/ui/ContactForm';
import ExportMap from '../components/ui/ExportMap';
import ScrollReveal from '../components/motion/ScrollReveal';
import ImageReveal from '../components/motion/ImageReveal';
import MagneticButton from '../components/motion/MagneticButton';
import useParallax from '../hooks/useParallax';
import { products } from '../data/products';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const parallaxBg = useParallax(-0.15);
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.home-hero__badge', { y: 35, opacity: 0, duration: 0.9, delay: 0.3 })
        .from('.home-hero__title-line', { y: '110%', opacity: 0, duration: 1.1, stagger: 0.2 }, '-=0.5')
        .from('.home-hero__subtitle', { y: 25, opacity: 0, duration: 0.9 }, '-=0.6')
        .from('.home-hero__ctas > *', { y: 25, opacity: 0, duration: 0.7, stagger: 0.12 }, '-=0.5')
        .from('.home-hero__scroll', { opacity: 0, duration: 0.7 }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const timer = setTimeout(() => {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }, 600);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // Filter products based on selected tab
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.id === activeCategory);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80; // height of fixed navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEOHead
        title="DODA GLOBAL — From Indian Farms to Global Markets"
        description="Premium agro sourcing, supply & export company specializing in coconut, spices, coffee, and tea from Indian farms to global markets."
      />

      {/* ===================================================================
         1. HERO / BACKDROP SECTION
         =================================================================== */}
      <section className="home-hero grain-overlay" ref={heroRef} id="home">
        <div className="home-hero__bg-wrapper">
          <div 
            className="home-hero__bg" 
            ref={parallaxBg}
          />
          <div className="home-hero__overlay" />
        </div>

        <div className="container home-hero__content">
          <div className="home-hero__badge">
            <span className="home-hero__badge-dot" />
            An Agro Export Company
          </div>

          <h1 className="home-hero__title">
            <span className="home-hero__title-line">From Indian Farms</span>
            <span className="home-hero__title-line color-primary">to Global Markets</span>
          </h1>

          <p className="home-hero__subtitle body-lg">
            Sourcing premium agricultural commodities directly from India's finest crop networks 
            to serve leading global brands, importers, and food manufacturers.
          </p>

          <div className="home-hero__ctas">
            <a 
              href="#contact" 
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="btn btn-primary btn-lg home-hero__btn-primary"
            >
              Contact Now
            </a>
            <a 
              href="https://wa.me/919876543210?text=Hello%20DODA%20GLOBAL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary btn-lg home-hero__btn-secondary"
            >
              Contact Today
            </a>
          </div>

          <div className="home-hero__scroll">
            <div className="home-hero__scroll-mouse">
              <div className="home-hero__scroll-wheel" />
            </div>
            <span className="overline" style={{ fontSize: '9px', marginTop: '4px', opacity: 0.7 }}>Scroll</span>
          </div>
        </div>
      </section>


      {/* ===================================================================
         2. ABOUT SECTION (Circle Frame + Stats Row)
         =================================================================== */}
      <section className="section section--dark" id="about">
        <div className="container">
          <div className="home-about">
            <ScrollReveal className="home-about__content">
              <p className="overline">Our Story</p>
              <h2 className="heading-2 home-about__title">About DODA GLOBAL</h2>
              <div className="gold-line" style={{ marginBottom: 'var(--space-md)' }} />
              <p className="home-about__desc">
                DODA GLOBAL is an agro sourcing, supply, and export company specializing in premium coconut 
                products, carefully selected spices, specialty coffee, and fine Indian teas. We operate on a 
                direct-from-farm sourcing network that spans across multiple states, ensuring unmatched quality control, 
                consistent year-round supply, and highly competitive pricing.
              </p>
              <p className="home-about__desc" style={{ opacity: 0.8 }}>
                By establishing strong ties with farmer clusters and cooperative communities, we ensure full 
                traceability, fair trading standards, and high agricultural integrity.
              </p>
              <Link to="/about" className="btn btn-secondary" style={{ marginTop: 'var(--space-sm)' }}>
                Learn More About Us
              </Link>
            </ScrollReveal>

            <div className="home-about__circle-container">
              <ScrollReveal>
                <div className="home-about__circle-frame">
                  <img src="/images/about_coffee_spices.png" alt="Coffee beans and cinnamon spices" />
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="home-about__divider" />

          {/* Bottom stats inside About section */}
          <div className="home-about__stats-grid">
            <ScrollReveal className="home-about__stat-card">
              <div className="home-about__stat-number">300+</div>
              <div className="home-about__stat-label">Sourcing Network</div>
            </ScrollReveal>
            <ScrollReveal className="home-about__stat-card">
              <div className="home-about__stat-number">276+</div>
              <div className="home-about__stat-label">Shipments Completed</div>
            </ScrollReveal>
            <ScrollReveal className="home-about__stat-card">
              <div className="home-about__stat-number">30+</div>
              <div className="home-about__stat-label">Service Areas</div>
            </ScrollReveal>
            <ScrollReveal className="home-about__stat-card">
              <div className="home-about__stat-number">98+</div>
              <div className="home-about__stat-label">Happy Customers</div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* ===================================================================
         3. PRODUCTS SECTION
         =================================================================== */}
      <section className="section" id="products">
        <div className="container">
          <div className="products-filter-header">
            <ScrollReveal>
              <p className="overline">Our Portfolio</p>
              <h2 className="heading-2">Featured Products</h2>
            </ScrollReveal>

            <ScrollReveal className="products-filter-group">
              <button 
                className={`products-filter-btn ${activeCategory === 'all' ? 'products-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory('all')}
              >
                All Categories
              </button>
              <button 
                className={`products-filter-btn ${activeCategory === 'coconut' ? 'products-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory('coconut')}
              >
                Coconut
              </button>
              <button 
                className={`products-filter-btn ${activeCategory === 'spices' ? 'products-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory('spices')}
              >
                Spices
              </button>
              <button 
                className={`products-filter-btn ${activeCategory === 'coffee' ? 'products-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory('coffee')}
              >
                Coffee
              </button>
              <button 
                className={`products-filter-btn ${activeCategory === 'tea' ? 'products-filter-btn--active' : ''}`}
                onClick={() => setActiveCategory('tea')}
              >
                Tea
              </button>
            </ScrollReveal>
          </div>

          <div className="products-mockup-grid">
            {filteredProducts.map((product) => (
              <ScrollReveal key={product.id} className="product-mockup-card">
                <div className="product-mockup-image">
                  <img src={`/images/product_${product.id}.png`} alt={product.name} />
                  <div className="product-mockup-overlay" />
                  <div className="product-mockup-info">
                    <span className="product-mockup-category">{product.id}</span>
                    <h3 className="product-mockup-name">{product.name}</h3>
                    <p className="product-mockup-desc">{product.tagline}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-ghost btn-sm" style={{ alignSelf: 'flex-start', paddingLeft: 0 }}>
                      View Details →
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ===================================================================
         4. EXPORT NETWORK SECTION
         =================================================================== */}
      <section className="section section--dark" id="export-network">
        <div className="container">
          <div className="export-network-wrapper">
            <ScrollReveal style={{ textAlign: 'center' }}>
              <p className="overline">Global Footprint</p>
              <h2 className="heading-2" style={{ marginTop: 'var(--space-xs)' }}>Export Network</h2>
              <div className="gold-line" style={{ margin: 'var(--space-md) auto' }} />
              <p className="body-lg color-secondary" style={{ maxWidth: '600px' }}>
                Connecting traditional agricultural farm hubs in India directly to major global 
                markets in USA, Europe, Middle East, Southeast Asia, and Australia.
              </p>
            </ScrollReveal>

            {/* Custom World Map Graphic */}
            <ScrollReveal style={{ width: '100%' }}>
              <ExportMap />
            </ScrollReveal>

            {/* Export stats row */}
            <div className="export-network-stats">
              <ScrollReveal className="export-network-stat-card">
                <span className="export-network-stat-icon">🚢</span>
                <span className="export-network-stat-value">4.00M+</span>
                <span className="export-network-stat-label">Export Volume</span>
              </ScrollReveal>
              <ScrollReveal className="export-network-stat-card">
                <span className="export-network-stat-icon">🌍</span>
                <span className="export-network-stat-value">23%+</span>
                <span className="export-network-stat-label">Export Regions</span>
              </ScrollReveal>
              <ScrollReveal className="export-network-stat-card">
                <span className="export-network-stat-icon">📈</span>
                <span className="export-network-stat-value">99%</span>
                <span className="export-network-stat-label">Statistics</span>
              </ScrollReveal>
              <ScrollReveal className="export-network-stat-card">
                <span className="export-network-stat-icon">🛡️</span>
                <span className="export-network-stat-value">ASTA</span>
                <span className="export-network-stat-label">Capabilities</span>
              </ScrollReveal>
              <ScrollReveal className="export-network-stat-card">
                <span className="export-network-stat-icon">📦</span>
                <span className="export-network-stat-value">Custom</span>
                <span className="export-network-stat-label">Capability</span>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>


      {/* ===================================================================
         5. SUSTAINABILITY SECTION
         =================================================================== */}
      <section className="section" id="sustainability">
        <div className="container">
          <ScrollReveal style={{ marginBottom: 'var(--space-2xl)' }}>
            <p className="overline">Our Roots</p>
            <h2 className="heading-2">Sustainability & Sourcing</h2>
            <div className="gold-line" style={{ marginTop: 'var(--space-sm)' }} />
          </ScrollReveal>

          <div className="sustainability-grid">
            {/* Left Card: Farmer Profile */}
            <ScrollReveal className="farmer-profile-card">
              <div className="farmer-profile-header">
                <h3 className="farmer-profile-title">Farmer Profile</h3>
                <p className="farmer-profile-subtitle">Local Sourcing Network</p>
              </div>
              <div className="farmer-profile-image">
                <img src="/images/farmer_profile.png" alt="Indian Farmer Portrait" />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="body-sm" style={{ fontWeight: 600 }}>Ramesh K., Kerala Hub</p>
                <div className="farmer-profile-actions">
                  <button className="farmer-profile-btn" aria-label="Like farmer profile">❤️</button>
                  <button className="farmer-profile-btn" aria-label="Email details">✉️</button>
                </div>
              </div>
            </ScrollReveal>

            {/* Middle Card: Sourcing Farm */}
            <ScrollReveal className="sourcing-showcase-card">
              <div className="sourcing-showcase-bg">
                <img src="/images/farm_sourcing.png" alt="Tropical farm sourcing network" />
              </div>
              <div className="sourcing-showcase-overlay" />
              <div className="sourcing-showcase-content">
                <p className="overline" style={{ color: 'var(--color-primary)' }}>Plantation</p>
                <h3 className="heading-4" style={{ color: 'white', marginTop: 'var(--space-xs)' }}>Direct Farms</h3>
                <p className="body-sm" style={{ color: 'rgba(255,255,255,0.85)', marginTop: 'var(--space-xs)' }}>
                  Our sourcing channels support ethical trade and organic cultivation methods.
                </p>
                <Link to="/sustainability" className="sourcing-showcase-arrow" aria-label="View farm sourcing details">
                  →
                </Link>
              </div>
            </ScrollReveal>

            {/* Right Card: Warehousing Sourcing */}
            <ScrollReveal className="sourcing-showcase-card">
              <div className="sourcing-showcase-bg">
                <img src="/images/warehouse.png" alt="Logistics warehouse and storage" />
              </div>
              <div className="sourcing-showcase-overlay" />
              <div className="sourcing-showcase-content">
                <p className="overline" style={{ color: 'var(--color-primary)' }}>Quality Center</p>
                <h3 className="heading-4" style={{ color: 'white', marginTop: 'var(--space-xs)' }}>State-Of-The-Art Storage</h3>
                <p className="body-sm" style={{ color: 'rgba(255,255,255,0.85)', marginTop: 'var(--space-xs)' }}>
                  Consolidated warehouses ensure temperature control and strict lot separations.
                </p>
                <Link to="/certifications" className="sourcing-showcase-arrow" aria-label="View warehousing details">
                  →
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Organic certifications logos at the bottom */}
          <ScrollReveal className="sustainability-certs-row">
            <div className="cert-logo-wrapper">
              <svg className="cert-logo-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H7c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.04-.42 1.99-1.07 2.75z"/>
              </svg>
              <div>
                <span className="cert-logo-text">USDA Organic</span>
              </div>
            </div>
            
            <div className="cert-logo-wrapper">
              <svg className="cert-logo-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L1 21h22L12 2zm0 4l7.53 13H4.47L12 6z"/>
              </svg>
              <div>
                <span className="cert-logo-text">Organic Certified</span>
              </div>
            </div>
            
            <div className="cert-logo-wrapper">
              <svg className="cert-logo-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
              </svg>
              <div>
                <span className="cert-logo-text">ISO 22000 Quality</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* ===================================================================
         6. CONTACT SECTION
         =================================================================== */}
      <section className="section section--dark" id="contact">
        <div className="container">
          <ScrollReveal style={{ marginBottom: 'var(--space-2xl)' }}>
            <p className="overline">Get in Touch</p>
            <h2 className="heading-2">Contact</h2>
            <div className="gold-line" style={{ marginTop: 'var(--space-sm)' }} />
          </ScrollReveal>

          <div className="home-contact-grid">
            <ScrollReveal>
              <ContactForm />
            </ScrollReveal>

            <div className="home-contact-info">
              {/* WhatsApp Action button */}
              <ScrollReveal>
                <a 
                  href="https://wa.me/919876543210?text=Hello%20DODA%20GLOBAL" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="whatsapp-action-btn"
                >
                  <span className="whatsapp-icon">💬</span>
                  <span>WhatsApp</span>
                </a>
              </ScrollReveal>

              {/* Map embed labeled DODA GLOBAL Map */}
              <ScrollReveal className="google-map-card">
                <div className="google-map-header">
                  <span className="google-map-title">DODA GLOBAL Map</span>
                  <a 
                    href="https://maps.google.com/?q=Nagpur,Maharashtra,India" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="google-map-direction"
                  >
                    View Directions ↗
                  </a>
                </div>
                <div className="google-map-body" style={{ height: '240px' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.52480796875!2d78.87465857421875!3d21.1458004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
                    width="100%" 
                    height="100%" 
                    style={{ border: 0, display: 'block', filter: 'grayscale(0.6) contrast(1.2) invert(0.9) hue-rotate(140deg)' }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="DODA GLOBAL Location Map"
                  />
                </div>
              </ScrollReveal>

              {/* Address details card */}
              <ScrollReveal className="address-details-card">
                <h3 className="address-details-title">Doda Address</h3>
                <p className="address-details-text">
                  DODA GLOBAL PRIVATE LIMITED<br />
                  Nagpur, Maharashtra, India<br />
                  Pin Code: 440001
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: 'var(--space-sm)' }}>
                  <a href="tel:+919876543210" className="body-sm color-primary">📞 +91 98765 43210</a>
                  <a href="mailto:info@dodaglobal.com" className="body-sm color-primary">✉_ info@dodaglobal.com</a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
