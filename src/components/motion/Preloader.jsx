import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Preloader.css';

export default function Preloader({ onComplete }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => onComplete?.(), 800);
    }, 2200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="preloader"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
          <motion.div
            className="preloader__content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="preloader__logo">
              <span className="preloader__logo-text">DODA</span>
              <span className="preloader__logo-accent">GLOBAL</span>
            </div>
            <motion.div
              className="preloader__bar-track"
            >
              <motion.div
                className="preloader__bar"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
              />
            </motion.div>
            <motion.p
              className="preloader__tagline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              From Indian Farms to Global Markets
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
