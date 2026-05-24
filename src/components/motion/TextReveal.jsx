import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TextReveal({ children, tag: Tag = 'h2', className = '', delay = 0 }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent;
    const words = text.split(' ');
    el.innerHTML = words
      .map((word) => `<span class="word-wrap"><span class="word">${word}</span></span>`)
      .join(' ');

    const wordSpans = el.querySelectorAll('.word');

    gsap.fromTo(
      wordSpans,
      { y: '110%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.04,
        delay,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () =>
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
  }, [delay]);

  return (
    <Tag ref={ref} className={`text-reveal ${className}`}>
      {children}
    </Tag>
  );
}
