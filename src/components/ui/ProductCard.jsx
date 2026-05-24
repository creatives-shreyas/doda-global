import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="product-card hover-lift" id={`product-${product.id}`}>
      <div className="product-card__image hover-zoom">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-card__overlay" />
      </div>
      <div className="product-card__content">
        <span className="overline">{product.id}</span>
        <h3 className="product-card__title">{product.name}</h3>
        <p className="product-card__tagline">{product.tagline}</p>
        <span className="product-card__link">
          Explore Products
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
