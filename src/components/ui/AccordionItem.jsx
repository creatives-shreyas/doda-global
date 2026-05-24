import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className={`accordion-item ${isOpen ? 'accordion-item--open' : ''}`}>
      <button className="accordion-item__trigger" onClick={onToggle} aria-expanded={isOpen}>
        <span className="accordion-item__question">{question}</span>
        <span className="accordion-item__icon">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }}>
            <path d="M8 3V13M3 8H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="accordion-item__content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="accordion-item__answer body-base color-secondary">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
