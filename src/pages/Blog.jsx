import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/ui/SectionHeading';
import BlogCard from '../components/ui/BlogCard';
import TextReveal from '../components/motion/TextReveal';
import useStaggerReveal from '../hooks/useStaggerReveal';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const gridRef = useStaggerReveal();

  return (
    <>
      <SEOHead title="Market Insights" description="Stay updated with market insights, industry analysis, and trends in agro sourcing, export, and sustainability." />

      <section className="page-hero grain-overlay">
        <div className="container page-hero__content">
          <p className="overline">Knowledge Hub</p>
          <TextReveal tag="h1" className="heading-1">Market Insights</TextReveal>
          <p className="body-lg color-secondary" style={{ maxWidth: 600 }}>
            Industry analysis, market trends, and insights from the agro-export world.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-grid" ref={gridRef}>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
