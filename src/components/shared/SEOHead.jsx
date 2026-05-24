import { useEffect } from 'react';

export default function SEOHead({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | DODA GLOBAL` : 'DODA GLOBAL — From Indian Farms to Global Markets';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || 'DODA GLOBAL — Premium agro sourcing, supply & export company specializing in coconut, spices, coffee, and tea from India.');
    }
  }, [title, description]);

  return null;
}
