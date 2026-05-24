import { Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import ImageReveal from '../components/motion/ImageReveal';
import StatCard from '../components/ui/StatCard';
import TextReveal from '../components/motion/TextReveal';
import ScrollReveal from '../components/motion/ScrollReveal';
import { stats } from '../data/stats';

const timeline = [
  { year: '2021', title: 'Founded in Nagpur', desc: 'DODA GLOBAL established with a vision to bridge Indian farmers with global markets.' },
  { year: '2022', title: 'First Export Shipment', desc: 'Successfully exported our first container of premium coconut products to the Middle East.' },
  { year: '2023', title: 'Spice Portfolio Launch', desc: 'Expanded into turmeric, pepper, cardamom, and chilli sourcing from Kerala and Tamil Nadu.' },
  { year: '2024', title: 'Coffee & Tea Division', desc: 'Added specialty coffee from Coorg and premium teas from Assam and Darjeeling.' },
  { year: '2025', title: 'Pan-India & Global Growth', desc: 'Reached 15+ export destinations and 24+ states in domestic distribution. 500+ farmer partnerships.' },
];

export default function About() {
  return (
    <>
      <SEOHead title="About Us" description="Learn about DODA GLOBAL — our story, vision, mission, and commitment to connecting Indian farms with global markets." />

      {/* Hero */}
      <section className="page-hero grain-overlay">
        <div className="container page-hero__content">
          <p className="overline">About DODA GLOBAL</p>
          <TextReveal tag="h1" className="heading-1">Our Story</TextReveal>
          <p className="body-lg color-secondary" style={{ maxWidth: 600 }}>
            From a vision born in Nagpur to a growing global presence — the DODA GLOBAL journey.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section section--dark">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'center' }}>
          <ScrollReveal>
            <p className="overline" style={{ marginBottom: 'var(--space-sm)' }}>Our Journey</p>
            <h2 className="heading-3">From Indian Farms to Global Markets</h2>
            <div className="gold-line" style={{ margin: 'var(--space-md) 0' }} />
            <p className="body-lg color-secondary" style={{ marginBottom: 'var(--space-md)' }}>
              Founded in 2021 in Nagpur, Maharashtra, DODA GLOBAL began with a clear mission: to create
              reliable, transparent supply chains connecting India's finest agricultural produce with
              buyers worldwide.
            </p>
            <p className="body-base color-secondary">
              Our direct-from-farm sourcing model eliminates middlemen, ensuring better quality,
              fair pricing for farmers, and full traceability for our partners. Today, we serve
              international importers across 15+ countries and domestic buyers across 24+ Indian states.
            </p>
          </ScrollReveal>
          <ImageReveal src="https://images.unsplash.com/photo-1595475207225-428b62bda831?w=700&q=80" alt="Spice sourcing" direction="right" />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-lg)' }}>
          <ScrollReveal className="card" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
            <span style={{ fontSize: '3rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>"</span>
            <h3 className="heading-4" style={{ margin: 'var(--space-md) 0' }}>Our Vision</h3>
            <p className="body-lg color-secondary">
              To become India's most trusted agro-export partner, recognized globally for quality,
              reliability, and sustainable sourcing practices.
            </p>
          </ScrollReveal>
          <ScrollReveal className="card" style={{ textAlign: 'center', padding: 'var(--space-2xl)' }}>
            <span style={{ fontSize: '3rem', color: 'var(--color-primary)', fontFamily: 'var(--font-heading)' }}>"</span>
            <h3 className="heading-4" style={{ margin: 'var(--space-md) 0' }}>Our Mission</h3>
            <p className="body-lg color-secondary">
              To deliver premium Indian agro products to global markets through direct farmer partnerships,
              rigorous quality assurance, and scalable supply chain solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading overline="Milestones" title="Our Growth Journey" />
          <div className="about-timeline">
            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} className="about-timeline__item">
                <div className="about-timeline__year color-primary heading-3">{item.year}</div>
                <div className="about-timeline__line">
                  <div className="about-timeline__dot" />
                </div>
                <div className="about-timeline__content">
                  <h4 className="heading-4">{item.title}</h4>
                  <p className="body-base color-secondary">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section">
        <div className="container">
          <div className="home-stats__grid">
            {stats.map((stat) => <StatCard key={stat.label} stat={stat} />)}
          </div>
        </div>
      </section>
    </>
  );
}
