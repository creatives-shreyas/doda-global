import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useStaggerReveal(childSelector = ':scope > *') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll(childSelector);

    gsap.fromTo(
      children,
      { y: 50, opacity: 0, scale: 0.95 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'power3.out',
        stagger: {
          amount: 0.6,
          from: 'start',
        },
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [childSelector]);

  return ref;
}
