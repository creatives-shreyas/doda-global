import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useParallax(speed = 0.3) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      y: () => speed * 200,
      ease: 'none',
      scrollTrigger: {
        trigger: el.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el.parentElement) t.kill();
      });
    };
  }, [speed]);

  return ref;
}
