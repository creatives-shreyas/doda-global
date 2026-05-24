import { Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/ui/StatCard';
import TextReveal from '../components/motion/TextReveal';
import ScrollReveal from '../components/motion/ScrollReveal';
import { exportStats } from '../data/stats';
import { exportCapabilities, exportProcess, exportRegions } from '../data/exportData';

export default function Export() {
  return (
    <>
      <SEOHead title="Global Export" description="DODA GLOBAL exports premium agro products to 15+ countries. Explore our export capabilities, regions, and process." />

      <section className="page-hero grain-overlay">
        <div className="container page-hero__content">
          <p className="overline">International Trade</p>
          <TextReveal tag="h1" className="heading-1">Global Export Network</TextReveal>
          <p className="body-lg color-secondary" style={{ maxWidth: 600 }}>
            Premium Indian agro products delivered to global markets with end-to-end logistics support.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading overline="What We Offer" title="Export Capabilities" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-lg)' }}>
            {exportCapabilities.map((cap) => (
              <ScrollReveal key={cap.title} className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 'var(--space-md)' }}>{cap.icon}</span>
                <h4 className="heading-4" style={{ marginBottom: 'var(--space-sm)' }}>{cap.title}</h4>
                <p className="body-sm color-secondary">{cap.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="section">
        <div className="container">
          <SectionHeading overline="Our Reach" title="Markets We Serve" description="Exporting premium agro products across 5 continents." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-lg)' }}>
            {exportRegions.map((region) => (
              <ScrollReveal key={region.name} className="card">
                <h4 className="heading-4 color-primary" style={{ marginBottom: 'var(--space-sm)' }}>{region.name}</h4>
                <p className="body-sm color-secondary" style={{ marginBottom: 'var(--space-md)' }}>{region.countries.join(' • ')}</p>
                <div style={{ display: 'flex', gap: 'var(--space-xs)', flexWrap: 'wrap' }}>
                  {region.products.map((p) => (
                    <span key={p} style={{ padding: '0.25rem 0.75rem', background: 'rgba(200,155,60,0.1)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-xs)' }}>{p}</span>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section--dark">
        <div className="container">
          <div className="home-stats__grid">
            {exportStats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container">
          <SectionHeading overline="How It Works" title="Our Export Process" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)' }}>
            {exportProcess.map((step) => (
              <ScrollReveal key={step.step} className="card" style={{ position: 'relative', paddingTop: 'var(--space-xl)' }}>
                <span className="heading-2 color-primary" style={{ position: 'absolute', top: '-0.5rem', left: 'var(--space-lg)', opacity: 0.3, fontSize: 'var(--text-5xl)' }}>{step.step}</span>
                <h4 className="heading-4" style={{ marginBottom: 'var(--space-sm)' }}>{step.title}</h4>
                <p className="body-sm color-secondary">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <div className="container text-center">
          <h2 className="heading-2" style={{ color: 'var(--bg-surface)' }}>Start Your Export Inquiry</h2>
          <p className="body-lg" style={{ color: 'rgba(10,43,31,0.7)', maxWidth: 500, margin: '1rem auto 2rem' }}>
            Get a quote for your specific product requirements and volumes.
          </p>
          <Link to="/contact" className="btn btn-lg" style={{ background: 'var(--bg-surface)', color: 'var(--color-primary)' }}>Send Export Inquiry</Link>
        </div>
      </section>
    </>
  );
}
