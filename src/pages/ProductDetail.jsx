import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';
import TextReveal from '../components/motion/TextReveal';
import ImageReveal from '../components/motion/ImageReveal';
import ScrollReveal from '../components/motion/ScrollReveal';
import { products } from '../data/products';

export default function ProductDetail() {
  const { category } = useParams();
  const product = products.find((p) => p.id === category);

  if (!product) {
    return (
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center">
          <h1 className="heading-2">Product Not Found</h1>
          <Link to="/products" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>Back to Products</Link>
        </div>
      </section>
    );
  }

  const otherProducts = products.filter((p) => p.id !== category);

  return (
    <>
      <SEOHead title={product.name} description={product.tagline} />

      <section className="page-hero grain-overlay" style={{ backgroundImage: `linear-gradient(rgba(10,43,31,0.85), rgba(10,43,31,0.9)), url(${product.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container page-hero__content">
          <Link to="/products" className="overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-md)' }}>
            ← Back to Products
          </Link>
          <TextReveal tag="h1" className="heading-1">{product.name}</TextReveal>
          <p className="body-lg color-secondary" style={{ maxWidth: 600 }}>{product.tagline}</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-2xl)', alignItems: 'start' }}>
          <div>
            <ScrollReveal>
              <h2 className="heading-3" style={{ marginBottom: 'var(--space-md)' }}>Overview</h2>
              <div className="gold-line" style={{ marginBottom: 'var(--space-lg)' }} />
              <p className="body-lg color-secondary">{product.description}</p>
            </ScrollReveal>

            <ScrollReveal>
              <h3 className="heading-4" style={{ margin: 'var(--space-xl) 0 var(--space-md)' }}>Product Range</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                {product.items.map((item) => (
                  <div key={item.name} className="card" style={{ padding: 'var(--space-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong>{item.name}</strong>
                    <span className="body-sm color-secondary">{item.spec}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div>
            <ImageReveal src={product.heroImage} alt={product.name} direction="right" />
            <ScrollReveal>
              <h3 className="heading-4" style={{ margin: 'var(--space-xl) 0 var(--space-md)' }}>Key Features</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-sm)' }}>
                {product.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>✓</span>
                    <span className="body-base">{f}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <Link to="/contact" className="btn btn-primary btn-lg" style={{ marginTop: 'var(--space-xl)', width: '100%' }}>
              Request Quote for {product.name}
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="section section--dark">
        <div className="container">
          <SectionHeading overline="More Products" title="Explore Other Categories" />
          <div className="home-products__grid">
            {otherProducts.map((p) => (
              <div key={p.id} className="product-card hover-lift">
                <Link to={`/products/${p.id}`}>
                  <div className="product-card__image hover-zoom">
                    <img src={p.image} alt={p.name} loading="lazy" />
                    <div className="product-card__overlay" />
                  </div>
                  <div className="product-card__content">
                    <span className="overline">{p.id}</span>
                    <h3 className="product-card__title">{p.name}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeading({ overline, title }) {
  return (
    <div className="text-center" style={{ marginBottom: 'var(--space-2xl)' }}>
      <p className="overline" style={{ marginBottom: 'var(--space-sm)' }}>{overline}</p>
      <TextReveal tag="h2" className="heading-2">{title}</TextReveal>
      <div className="gold-line" style={{ margin: '1rem auto' }} />
    </div>
  );
}
