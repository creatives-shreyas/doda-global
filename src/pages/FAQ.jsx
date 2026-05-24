import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';
import TextReveal from '../components/motion/TextReveal';
import AccordionItem from '../components/ui/AccordionItem';
import ScrollReveal from '../components/motion/ScrollReveal';
import { faqData } from '../data/faqData';

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState(faqData[0].category);
  const [openIndex, setOpenIndex] = useState(null);

  const activeQuestions = faqData.find((c) => c.category === activeCategory)?.questions || [];

  return (
    <>
      <SEOHead title="FAQ" description="Frequently asked questions about DODA GLOBAL's products, export services, quality, and domestic supply." />

      <section className="page-hero grain-overlay">
        <div className="container page-hero__content">
          <p className="overline">Help & Support</p>
          <TextReveal tag="h1" className="heading-1">Frequently Asked Questions</TextReveal>
          <p className="body-lg color-secondary" style={{ maxWidth: 600 }}>
            Find answers to common questions about our products, export, and supply services.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 'var(--container-narrow)', margin: '0 auto' }}>
          {/* Category Tabs */}
          <div className="products-filter" style={{ marginBottom: 'var(--space-xl)' }}>
            {faqData.map((cat) => (
              <button
                key={cat.category}
                className={`products-filter__btn ${activeCategory === cat.category ? 'products-filter__btn--active' : ''}`}
                onClick={() => { setActiveCategory(cat.category); setOpenIndex(null); }}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Questions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
            {activeQuestions.map((item, i) => (
              <AccordionItem
                key={`${activeCategory}-${i}`}
                question={item.q}
                answer={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container text-center">
          <ScrollReveal>
            <h2 className="heading-3" style={{ marginBottom: 'var(--space-md)' }}>Still Have Questions?</h2>
            <p className="body-lg color-secondary" style={{ maxWidth: 500, margin: '0 auto var(--space-xl)' }}>
              Our team is ready to help. Reach out to us and we'll get back within 24 hours.
            </p>
            <Link to="/contact" className="btn btn-primary btn-lg">Contact Us</Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
