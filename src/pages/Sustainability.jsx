import { Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import ImageReveal from '../components/motion/ImageReveal';
import TextReveal from '../components/motion/TextReveal';
import ScrollReveal from '../components/motion/ScrollReveal';
import AnimatedCounter from '../components/motion/AnimatedCounter';

const practices = [
  { icon: '🤝', title: 'Ethical Sourcing', desc: 'Fair pricing and transparent partnerships with farming communities across India.' },
  { icon: '🌱', title: 'Organic Practices', desc: 'Supporting farmers transitioning to organic farming with training and certification assistance.' },
  { icon: '♻️', title: 'Eco Packaging', desc: 'Biodegradable and recyclable packaging options for environmentally conscious buyers.' },
  { icon: '🏘️', title: 'Community Support', desc: 'Investing in rural infrastructure, education, and healthcare in sourcing communities.' },
];

export default function Sustainability() {
  return (
    <>
      <SEOHead title="Sustainability" description="DODA GLOBAL's commitment to sustainable sourcing, farmer partnerships, and ethical supply chains." />

      <section className="page-hero grain-overlay">
        <div className="container page-hero__content">
          <p className="overline">Our Commitment</p>
          <TextReveal tag="h1" className="heading-1">From Farm to Future</TextReveal>
          <p className="body-lg color-secondary" style={{ maxWidth: 600 }}>
            Building sustainable supply chains that empower farmers and protect the planet.
          </p>
        </div>
      </section>

      {/* Farmer Network */}
      <section className="section section--dark">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
          <ScrollReveal>
            <p className="overline" style={{ marginBottom: 'var(--space-sm)' }}>Our Roots</p>
            <h2 className="heading-3">Direct Farmer Partnerships</h2>
            <div className="gold-line" style={{ margin: 'var(--space-md) 0' }} />
            <p className="body-lg color-secondary" style={{ marginBottom: 'var(--space-md)' }}>
              At the heart of DODA GLOBAL's business model is our direct partnership with 500+ farmers
              across India. By eliminating middlemen, we ensure fair pricing for farmers while
              maintaining superior quality for our buyers.
            </p>
            <p className="body-base color-secondary">
              Our field teams work directly with farming communities, providing technical support,
              quality guidance, and market access that transforms livelihoods.
            </p>
          </ScrollReveal>
          <ImageReveal src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=700&q=80" alt="Indian farming" direction="right" />
        </div>
      </section>

      {/* Practices */}
      <section className="section">
        <div className="container">
          <SectionHeading overline="What We Practice" title="Sustainability Initiatives" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-lg)' }}>
            {practices.map((p) => (
              <ScrollReveal key={p.title} className="card" style={{ display: 'flex', gap: 'var(--space-lg)', padding: 'var(--space-xl)' }}>
                <span style={{ fontSize: '2.5rem', flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 className="heading-4" style={{ marginBottom: 'var(--space-sm)' }}>{p.title}</h4>
                  <p className="body-base color-secondary">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading overline="Our Impact" title="Making a Difference" />
          <div className="home-stats__grid">
            {[
              { value: 500, suffix: '+', label: 'Partner Farmers' },
              { value: 50, suffix: '+', label: 'Villages Supported' },
              { value: 100, suffix: '%', label: 'Fair Trade Commitment' },
              { value: 30, suffix: '%', label: 'Organic Sourcing' },
            ].map((stat) => (
              <div key={stat.label} className="stat-card">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} className="heading-2 color-primary" />
                <p className="stat-card__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading overline="Trust" title="Certifications" description="Our sustainable practices are backed by internationally recognized certifications." />
          <div className="text-center">
            <Link to="/certifications" className="btn btn-primary btn-lg">View All Certifications</Link>
          </div>
        </div>
      </section>
    </>
  );
}
