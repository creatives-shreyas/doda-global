export const navigation = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'Coconut Products', path: '/products/coconut' },
      { label: 'Spices', path: '/products/spices' },
      { label: 'Coffee', path: '/products/coffee' },
      { label: 'Tea', path: '/products/tea' },
    ],
  },
  { label: 'Export', path: '/export' },
  { label: 'Domestic Supply', path: '/domestic-supply' },
  {
    label: 'Company',
    path: '#',
    children: [
      { label: 'Sustainability', path: '/sustainability' },
      { label: 'Certifications', path: '/certifications' },
      { label: 'FAQ', path: '/faq' },
    ],
  },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];
