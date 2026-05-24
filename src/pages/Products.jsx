import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import ProductCard from '../components/ui/ProductCard';
import TextReveal from '../components/motion/TextReveal';
import ScrollReveal from '../components/motion/ScrollReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';
import { products } from '../data/products';

export default function Products() {
  const [filter, setFilter] = useState('all');
  const gridRef = useStaggerReveal();

  const filtered = filter === 'all' ? products : products.filter((p) => p.id === filter);

  return (
    <>
      <SEOHead title="Products" description="Explore DODA GLOBAL's premium agro products — coconut, spices, coffee, and tea sourced directly from Indian farms." />

      <section className="page-hero grain-overlay">
        <div className="container page-hero__content">
          <p className="overline">Our Portfolio</p>
          <TextReveal tag="h1" className="heading-1">Our Products</TextReveal>
          <p className="body-lg color-secondary" style={{ maxWidth: 600 }}>
            Premium-quality agro products sourced from India's finest growing regions.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <div className="products-filter" id="product-filters">
            {['all', 'coconut', 'spices', 'coffee', 'tea'].map((f) => (
              <button
                key={f}
                className={`products-filter__btn ${filter === f ? 'products-filter__btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f === 'all' ? 'All Products' : f.charAt(0).toUpperCase() + f.slice(1)}
              </button>
            ))}
          </div>

          <div className="home-products__grid" ref={gridRef} style={{ marginTop: 'var(--space-xl)' }}>
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading overline="Why Us" title="Why Choose Our Products" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-lg)' }}>
            {[
              { icon: '✅', title: 'Quality Assured', desc: '200+ parameter lab testing on every lot. FSSAI, ISO, HACCP certified.' },
              { icon: '🔍', title: 'Full Traceability', desc: 'Direct-from-farm sourcing with complete traceability from field to shipment.' },
              { icon: '💰', title: 'Competitive Pricing', desc: 'Elimination of middlemen ensures best-in-class pricing for premium products.' },
            ].map((item) => (
              <ScrollReveal key={item.title} className="card" style={{ textAlign: 'center', padding: 'var(--space-xl)' }}>
                <span style={{ fontSize: '2.5rem' }}>{item.icon}</span>
                <h4 className="heading-4" style={{ margin: 'var(--space-md) 0 var(--space-sm)' }}>{item.title}</h4>
                <p className="body-base color-secondary">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
