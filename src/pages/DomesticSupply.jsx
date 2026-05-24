import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import StatCard from '../components/ui/StatCard';
import TextReveal from '../components/motion/TextReveal';
import ScrollReveal from '../components/motion/ScrollReveal';
import { domesticStats } from '../data/stats';
import { domesticCities, domesticCapabilities } from '../data/domesticData';

export default function DomesticSupply() {
  return (
    <>
      <SEOHead title="Domestic Supply" description="DODA GLOBAL's pan-India supply network covering 24+ states — sourcing to distribution." />

      <section className="page-hero grain-overlay">
        <div className="container page-hero__content">
          <p className="overline">Pan-India Network</p>
          <TextReveal tag="h1" className="heading-1">Domestic Supply Network</TextReveal>
          <p className="body-lg color-secondary" style={{ maxWidth: 600 }}>
            Connecting India's agricultural heartlands with buyers across 24+ states.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading overline="Our Strengths" title="Network Capabilities" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)' }}>
            {domesticCapabilities.map((cap) => (
              <ScrollReveal key={cap.title} className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
                <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: 'var(--space-md)' }}>{cap.icon}</span>
                <h4 className="heading-4" style={{ marginBottom: 'var(--space-sm)' }}>{cap.title}</h4>
                <p className="body-sm color-secondary">{cap.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="section">
        <div className="container">
          <SectionHeading overline="Presence" title="Key Locations" description="Our sourcing and distribution network spans India's most important agro-trade centers." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-md)' }}>
            {domesticCities.map((city) => (
              <ScrollReveal key={city.name} className="card" style={{ padding: 'var(--space-md)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ fontWeight: 600 }}>{city.name}</h4>
                    <p className="body-sm color-secondary">{city.state}</p>
                  </div>
                  <span style={{ padding: '0.25rem 0.75rem', background: 'rgba(200,155,60,0.1)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)', fontSize: 'var(--text-xs)', color: 'var(--color-primary)' }}>{city.type}</span>
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
            {domesticStats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
          </div>
        </div>
      </section>
    </>
  );
}
