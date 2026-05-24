import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import useLenis from './hooks/useLenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Preloader from './components/motion/Preloader';
import PageTransition from './components/motion/PageTransition';
import FloatingWhatsApp from './components/shared/FloatingWhatsApp';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Export from './pages/Export';
import DomesticSupply from './pages/DomesticSupply';
import Sustainability from './pages/Sustainability';
import Certifications from './pages/Certifications';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  const location = useLocation();
  useLenis();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/products" element={<PageTransition><Products /></PageTransition>} />
            <Route path="/products/:category" element={<PageTransition><ProductDetail /></PageTransition>} />
            <Route path="/export" element={<PageTransition><Export /></PageTransition>} />
            <Route path="/domestic-supply" element={<PageTransition><DomesticSupply /></PageTransition>} />
            <Route path="/sustainability" element={<PageTransition><Sustainability /></PageTransition>} />
            <Route path="/certifications" element={<PageTransition><Certifications /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);

  return (
    <BrowserRouter>
      {!preloaderDone && <Preloader onComplete={() => setPreloaderDone(true)} />}
      {preloaderDone && <AppRoutes />}
    </BrowserRouter>
  );
}
