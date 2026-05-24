import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import ProductCard from '../components/ui/ProductCard';
import StatCard from '../components/ui/StatCard';
import TestimonialSlider from '../components/ui/TestimonialSlider';
import ImageReveal from '../components/motion/ImageReveal';
import MagneticButton from '../components/motion/MagneticButton';
import useStaggerReveal from '../hooks/useStaggerReveal';
import useParallax from '../hooks/useParallax';
import { products } from '../data/products';
import { stats } from '../data/stats';
import { testimonials } from '../data/testimonials';
import './Home.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef(null);
  const parallaxBg = useParallax(-0.2);
  const productsGrid = useStaggerReveal();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero__badge', { y: 30, opacity: 0, duration: 0.8, delay: 0.2 })
        .from('.hero__title .line', { y: '110%', opacity: 0, duration: 1, stagger: 0.15 }, '-=0.4')
        .from('.hero__subtitle', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
        .from('.hero__ctas > *', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.4')
        .from('.hero__scroll', { opacity: 0, duration: 0.6 }, '-=0.2');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <SEOHead
        title="Home"
        description="DODA GLOBAL — Premium agro sourcing, supply & export company. Coconut, spices, coffee, and tea from Indian farms to global markets."
      />

      {/* ===== HERO ===== */}
      <section className="hero grain-overlay" ref={heroRef} id="hero-section">
        <div className="hero__bg-wrapper">
          <div className="hero__bg" ref={parallaxBg}
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80)' }}
          />
          <div className="hero__overlay" />
        </div>

        <div className="container hero__content">
          <div className="hero__badge overline">
            <span className="hero__badge-dot" />
            Premium Agro Export Since 2021
          </div>

          <h1 className="hero__title heading-hero">
            <span className="line">From Indian Farms</span>
            <span className="line">to <span className="color-primary">Global Markets</span></span>
          </h1>

          <p className="hero__subtitle body-lg">
            Premium coconut, spices, coffee & tea — sourced directly from Indian farmers,
            delivered to the world with uncompromising quality.
          </p>

          <div className="hero__ctas">
            <MagneticButton className="btn btn-primary btn-lg" onClick={() => window.location.href = '/products'}>
              Explore Products
            </MagneticButton>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Contact Us
            </Link>
          </div>

          <div className="hero__scroll">
            <div className="hero__scroll-line" />
            <span className="hero__scroll-text">Scroll</span>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SNAPSHOT ===== */}
      <section className="section section--dark" id="about-snapshot">
        <div className="container home-about">
          <div className="home-about__text">
            <p className="overline">Who We Are</p>
            <h2 className="heading-3" style={{ marginTop: 'var(--space-sm)' }}>
              Direct-From-Farm Sourcing for the World
            </h2>
            <div className="gold-line" style={{ margin: 'var(--space-md) 0' }} />
            <p className="body-lg color-secondary">
              DODA GLOBAL operates on a direct-from-farm sourcing model, ensuring superior quality control,
              consistent supply, competitive pricing, and full traceability. We serve international export
              markets and pan-India domestic supply chains with strong logistics capability.
            </p>
            <div className="home-about__features">
              <div className="home-about__feature">
                <span className="home-about__feature-icon">🌾</span>
                <div>
                  <h4>Farm-Direct Sourcing</h4>
                  <p className="body-sm color-secondary">Verified farmer partnerships across India</p>
                </div>
              </div>
              <div className="home-about__feature">
                <span className="home-about__feature-icon">✅</span>
                <div>
                  <h4>Quality Assured</h4>
                  <p className="body-sm color-secondary">200+ parameter lab testing on every lot</p>
                </div>
              </div>
              <div className="home-about__feature">
                <span className="home-about__feature-icon">🌍</span>
                <div>
                  <h4>Global Reach</h4>
                  <p className="body-sm color-secondary">Exporting to 15+ countries worldwide</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn btn-ghost" style={{ marginTop: 'var(--space-lg)' }}>
              Learn More About Us →
            </Link>
          </div>
          <div className="home-about__image">
            <ImageReveal
              src="https://images.unsplash.com/photo-1595475207225-428b62bda831?w=700&q=80"
              alt="Premium spices sourcing"
              direction="right"
            />
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="section" id="products-section">
        <div className="container">
          <SectionHeading
            overline="Our Products"
            title="Premium Agro Products"
            description="Carefully sourced and quality-assured products from India's finest growing regions."
          />
          <div className="home-products__grid" ref={productsGrid}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center" style={{ marginTop: 'var(--space-xl)' }}>
            <Link to="/products" className="btn btn-secondary">View All Products</Link>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="section section--dark" id="stats-section">
        <div className="container">
          <div className="home-stats__grid">
            {stats.map((stat) => (
              <StatCard key={stat.label} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPORT / DOMESTIC SPLIT ===== */}
      <section className="section" id="split-section">
        <div className="container home-split">
          <Link to="/export" className="home-split__card hover-lift">
            <div className="home-split__image hover-zoom">
              <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5eb95?w=700&q=80" alt="Global export" loading="lazy" />
            </div>
            <div className="home-split__content">
              <p className="overline">International</p>
              <h3 className="heading-4">Global Export Network</h3>
              <p className="body-base color-secondary">Exporting premium agro products to 15+ countries across 5 continents.</p>
              <span className="btn btn-ghost">Explore Export →</span>
            </div>
          </Link>
          <Link to="/domestic-supply" className="home-split__card hover-lift">
            <div className="home-split__image hover-zoom">
              <img src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80" alt="Domestic supply" loading="lazy" />
            </div>
            <div className="home-split__content">
              <p className="overline">Pan-India</p>
              <h3 className="heading-4">Domestic Supply Network</h3>
              <p className="body-base color-secondary">Supplying to retail chains, manufacturers & distributors across 24+ states.</p>
              <span className="btn btn-ghost">Explore Network →</span>
            </div>
          </Link>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section section--dark" id="testimonials-section">
        <div className="container">
          <SectionHeading
            overline="Testimonials"
            title="Trusted by Partners Worldwide"
          />
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="home-cta" id="cta-banner">
        <div className="container text-center">
          <h2 className="heading-2" style={{ color: 'var(--bg-surface)' }}>
            Ready to Partner with DODA GLOBAL?
          </h2>
          <p className="body-lg" style={{ color: 'rgba(10, 43, 31, 0.7)', maxWidth: '500px', margin: '1rem auto 2rem' }}>
            Whether you're an international importer or a domestic buyer, we're ready to deliver.
          </p>
          <div className="flex justify-center gap-md" style={{ flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-lg" style={{ background: 'var(--bg-surface)', color: 'var(--color-primary)' }}>
              Send Enquiry
            </Link>
            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-lg" style={{ background: '#25D366', color: 'white' }}>
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
