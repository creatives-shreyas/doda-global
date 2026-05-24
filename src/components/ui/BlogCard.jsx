import { Link } from 'react-router-dom';

export default function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card hover-lift" id={`blog-${post.slug}`}>
      <div className="blog-card__image hover-zoom">
        <img src={post.image} alt={post.title} loading="lazy" />
      </div>
      <div className="blog-card__content">
        <div className="blog-card__meta">
          <span className="blog-card__category">{post.category}</span>
          <span className="blog-card__date">{new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
        </div>
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__excerpt">{post.excerpt}</p>
        <span className="blog-card__read-time">{post.readTime}</span>
      </div>
    </Link>
  );
}
