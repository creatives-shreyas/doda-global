import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedCounter({ target, suffix = '', prefix = '', duration = 2, className = '' }) {
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (hasAnimated) return;
        setHasAnimated(true);
        gsap.to(obj, {
          val: target,
          duration,
          ease: 'power2.out',
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.val).toLocaleString('en-IN')}${suffix}`;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [target, suffix, prefix, duration, hasAnimated]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
