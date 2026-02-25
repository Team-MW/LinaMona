import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PlanityWidget from './components/PlanityWidget';
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';
import Prestations from './pages/Prestations';
import About from './pages/About';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/prestations" element={<PageTransition><Prestations /></PageTransition>} />
          <Route path="/a-propos" element={<PageTransition><About /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/mentions-legales" element={<PageTransition><Legal /></PageTransition>} />
        </Routes>
      </AnimatePresence>
      <PlanityWidget />
      <Footer />
    </>
  );
}

export default App;
