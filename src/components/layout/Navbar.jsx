import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navigation } from '../../data/navigation';
import Logo from '../shared/Logo';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const sectionMapping = {
    '/': 'home',
    '/about': 'about',
    '/products': 'products',
    '/export': 'export-network',
    '/sustainability': 'sustainability',
    '/contact': 'contact'
  };

  const handleLinkClick = (e, path) => {
    const sectionId = sectionMapping[path];
    if (sectionId) {
      if (location.pathname === '/') {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
          const yOffset = -80; // height of fixed navbar
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          setMobileOpen(false);
        }
      }
    }
  };

  const getToPath = (path) => {
    const sectionId = sectionMapping[path];
    if (sectionId) {
      return location.pathname === '/' ? `#${sectionId}` : `/#${sectionId}`;
    }
    return path;
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-nav">
      <div className="navbar__inner container--wide">
        <Link to="/" className="navbar__logo" id="navbar-logo" onClick={(e) => handleLinkClick(e, '/')}>
          <Logo height={42} />
        </Link>

        <nav className="navbar__nav" id="main-navigation">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="navbar__item"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.children ? (
                <>
                  <span className={`navbar__link ${location.pathname.startsWith(item.path) && item.path !== '#' ? 'navbar__link--active' : ''}`}>
                    {item.label}
                    <svg className="navbar__chevron" width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        className="navbar__dropdown"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.children.map((child) => (
                          <Link 
                            key={child.path} 
                            to={getToPath(child.path)} 
                            onClick={(e) => handleLinkClick(e, child.path)}
                            className="navbar__dropdown-link"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  to={getToPath(item.path)}
                  onClick={(e) => handleLinkClick(e, item.path)}
                  className={`navbar__link ${location.pathname === item.path ? 'navbar__link--active' : ''}`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <Link 
          to={getToPath('/contact')} 
          onClick={(e) => handleLinkClick(e, '/contact')}
          className="navbar__cta btn btn-primary btn-sm" 
          id="navbar-cta"
        >
          Get a Quote
        </Link>

        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 2rem) 2rem)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 2rem) 2rem)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <nav className="navbar__mobile-nav">
              {navigation.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  {item.children ? (
                    <div className="navbar__mobile-group">
                      <span className="navbar__mobile-label">{item.label}</span>
                      {item.children.map((child) => (
                        <Link 
                          key={child.path} 
                          to={getToPath(child.path)} 
                          onClick={(e) => handleLinkClick(e, child.path)}
                          className="navbar__mobile-link navbar__mobile-link--sub"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link 
                      to={getToPath(item.path)} 
                      onClick={(e) => handleLinkClick(e, item.path)}
                      className="navbar__mobile-link"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Link 
                  to={getToPath('/contact')} 
                  onClick={(e) => handleLinkClick(e, '/contact')}
                  className="btn btn-primary btn-lg" 
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  Get a Quote
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
