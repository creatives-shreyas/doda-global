import { useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function ScrollReveal({ children, className = '', config = {} }) {
  const ref = useScrollReveal(config);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
