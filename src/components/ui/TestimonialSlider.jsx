import { useState, useEffect, useCallback } from 'react';

export default function TestimonialSlider({ testimonials }) {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  return (
    <div
      className="testimonial-slider"
      id="testimonial-slider"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="testimonial-slider__quote-mark">"</div>
      <div className="testimonial-slider__content">
        {testimonials.map((t, i) => (
          <div
            key={t.id}
            className={`testimonial-slider__item ${i === current ? 'testimonial-slider__item--active' : ''}`}
          >
            <blockquote className="testimonial-slider__text body-lg">
              {t.quote}
            </blockquote>
            <div className="testimonial-slider__author">
              <p className="testimonial-slider__name">{t.name}</p>
              <p className="testimonial-slider__role">
                {t.role}, {t.company} — {t.country}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-slider__dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`testimonial-slider__dot ${i === current ? 'testimonial-slider__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
