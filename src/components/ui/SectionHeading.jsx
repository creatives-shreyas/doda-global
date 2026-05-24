import TextReveal from '../motion/TextReveal';

export default function SectionHeading({ overline, title, description, align = 'center', light = false }) {
  return (
    <div className={`section-heading ${align === 'left' ? 'text-left' : 'text-center'}`} style={{ marginBottom: 'var(--space-2xl)' }}>
      {overline && <p className="overline" style={{ marginBottom: 'var(--space-sm)' }}>{overline}</p>}
      <TextReveal tag="h2" className="heading-2">
        {title}
      </TextReveal>
      <div className={`gold-line ${align === 'center' ? '' : ''}`} style={{ margin: align === 'center' ? '1rem auto' : '1rem 0' }} />
      {description && (
        <p className={light ? 'body-lg' : 'body-lg color-secondary'} style={{ maxWidth: '600px', margin: align === 'center' ? '0 auto' : '0' }}>
          {description}
        </p>
      )}
    </div>
  );
}
