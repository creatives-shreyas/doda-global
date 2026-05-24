import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useScrollReveal(config = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const defaults = {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      ...config,
    };

    gsap.fromTo(
      el,
      { y: defaults.y, opacity: defaults.opacity },
      {
        y: 0,
        opacity: 1,
        duration: defaults.duration,
        ease: defaults.ease,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          end: 'top 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, []);

  return ref;
}
