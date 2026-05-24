import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/shared/SEOHead';
import TextReveal from '../components/motion/TextReveal';
import BlogCard from '../components/ui/BlogCard';
import { blogPosts } from '../data/blogPosts';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="text-center">
          <h1 className="heading-2">Article Not Found</h1>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>Back to Blog</Link>
        </div>
      </section>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <SEOHead title={post.title} description={post.excerpt} />

      <section className="page-hero grain-overlay" style={{ backgroundImage: `linear-gradient(rgba(10,43,31,0.85), rgba(10,43,31,0.9)), url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container page-hero__content">
          <Link to="/blog" className="overline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-md)' }}>
            ← Back to Blog
          </Link>
          <span className="overline" style={{ display: 'block', marginBottom: 'var(--space-sm)' }}>{post.category}</span>
          <TextReveal tag="h1" className="heading-2">{post.title}</TextReveal>
          <p className="body-base color-secondary" style={{ marginTop: 'var(--space-md)' }}>
            {new Date(post.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })} • {post.readTime}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container container--narrow">
          <div className="blog-post__body">
            <p className="body-lg">{post.content}</p>
            <p className="body-lg" style={{ marginTop: 'var(--space-lg)' }}>
              This article provides in-depth analysis and insights for international importers and domestic buyers
              in the agro-export industry. For more information or to discuss your specific sourcing requirements,
              contact our team directly.
            </p>
          </div>
          <div style={{ marginTop: 'var(--space-2xl)', padding: 'var(--space-xl)', background: 'var(--bg-surface-2)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
            <h3 className="heading-4" style={{ marginBottom: 'var(--space-md)' }}>Interested in Sourcing?</h3>
            <p className="body-base color-secondary" style={{ marginBottom: 'var(--space-lg)' }}>Get in touch with our team to discuss your product requirements.</p>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section section--dark">
          <div className="container">
            <h2 className="heading-3 text-center" style={{ marginBottom: 'var(--space-xl)' }}>Related Articles</h2>
            <div className="blog-grid">
              {relatedPosts.map((p) => <BlogCard key={p.id} post={p} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
