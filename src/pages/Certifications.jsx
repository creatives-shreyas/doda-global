import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import TextReveal from '../components/motion/TextReveal';
import ScrollReveal from '../components/motion/ScrollReveal';
import { certifications, qualityProcess } from '../data/certifications';

export default function Certifications() {
  return (
    <>
      <SEOHead title="Certifications & Quality" description="DODA GLOBAL's quality certifications — FSSAI, ISO 22000, APEDA, HACCP, and organic certifications." />

      <section className="page-hero grain-overlay">
        <div className="container page-hero__content">
          <p className="overline">Trust & Compliance</p>
          <TextReveal tag="h1" className="heading-1">Certifications & Quality</TextReveal>
          <p className="body-lg color-secondary" style={{ maxWidth: 600 }}>
            Internationally recognized certifications backing every product we deliver.
          </p>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <SectionHeading overline="Our Certifications" title="Quality You Can Trust" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)' }}>
            {certifications.map((cert) => (
              <ScrollReveal key={cert.id} className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: 'var(--space-md)' }}>{cert.icon}</span>
                <h3 className="heading-4 color-primary" style={{ marginBottom: '0.25rem' }}>{cert.name}</h3>
                <p className="body-sm" style={{ fontWeight: 500, marginBottom: 'var(--space-md)' }}>{cert.fullName}</p>
                <p className="body-sm color-secondary">{cert.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading overline="Our Process" title="Quality Assurance Journey" description="From farm to shipment — every step is quality-controlled." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)' }}>
            {qualityProcess.map((step) => (
              <ScrollReveal key={step.step} className="card" style={{ position: 'relative', paddingTop: 'var(--space-xl)' }}>
                <span className="heading-2 color-primary" style={{ position: 'absolute', top: '-0.5rem', left: 'var(--space-lg)', opacity: 0.3, fontSize: 'var(--text-5xl)' }}>{step.step}</span>
                <h4 className="heading-4" style={{ marginBottom: 'var(--space-sm)' }}>{step.title}</h4>
                <p className="body-sm color-secondary">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
