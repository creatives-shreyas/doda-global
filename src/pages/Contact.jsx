import SEOHead from '../components/shared/SEOHead';
import ContactForm from '../components/ui/ContactForm';
import TextReveal from '../components/motion/TextReveal';
import ScrollReveal from '../components/motion/ScrollReveal';

export default function Contact() {
  return (
    <>
      <SEOHead title="Contact Us" description="Get in touch with DODA GLOBAL for export inquiries, domestic supply, partnerships, or product samples." />

      <section className="page-hero grain-overlay">
        <div className="container page-hero__content">
          <p className="overline">Let's Connect</p>
          <TextReveal tag="h1" className="heading-1">Get in Touch</TextReveal>
          <p className="body-lg color-secondary" style={{ maxWidth: 600 }}>
            Export enquiries, partnerships, or product samples — we're here to help.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 'var(--space-2xl)', alignItems: 'start' }}>
          <ScrollReveal>
            <ContactForm />
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
            <ScrollReveal className="card" style={{ padding: 'var(--space-xl)' }}>
              <h3 className="heading-4" style={{ marginBottom: 'var(--space-md)' }}>Office Address</h3>
              <p className="body-base color-secondary" style={{ marginBottom: 'var(--space-md)' }}>
                📍 Nagpur, Maharashtra, India
              </p>
              <a href="tel:+919876543210" className="body-base color-primary" style={{ display: 'block', marginBottom: 'var(--space-sm)' }}>
                📞 +91 98765 43210
              </a>
              <a href="mailto:info@dodaglobal.com" className="body-base color-primary" style={{ display: 'block' }}>
                ✉️ info@dodaglobal.com
              </a>
            </ScrollReveal>

            <ScrollReveal>
              <a href="https://wa.me/919876543210?text=Hello%20DODA%20GLOBAL" target="_blank" rel="noopener noreferrer"
                className="btn btn-lg" style={{ width: '100%', background: '#25D366', color: 'white', padding: '1.25rem' }}>
                💬 WhatsApp Us
              </a>
            </ScrollReveal>

            <ScrollReveal>
              <a href="tel:+919876543210"
                className="btn btn-secondary btn-lg" style={{ width: '100%' }}>
                📞 Click to Call
              </a>
            </ScrollReveal>

            <ScrollReveal className="card" style={{ padding: 'var(--space-xl)' }}>
              <h3 className="heading-4" style={{ marginBottom: 'var(--space-md)' }}>Business Hours</h3>
              <p className="body-base color-secondary">Monday – Saturday: 9:00 AM – 6:00 PM IST</p>
              <p className="body-base color-secondary">Sunday: Closed</p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section section--dark" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d238132.52480796875!2d78.87465857421875!3d21.1458004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
              width="100%" height="400" style={{ border: 0, display: 'block', filter: 'grayscale(0.5) contrast(1.1)' }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="DODA GLOBAL Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
