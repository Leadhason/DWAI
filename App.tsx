import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AudioDemos } from './components/AudioDemos';
import { Services } from './components/Services';
import { Automation } from './components/Automation';
import { Footer } from './components/Footer';
import { ErrorBoundary } from './components/ErrorBoundary';
import { CookieBanner } from './components/CookieBanner';
import { ContactModal } from './components/ContactModal';
import { BookingModal } from './components/BookingModal';
import { PrivacyPolicy, TermsOfService } from './components/Legal';
import { DevelopmentProcess } from './components/DevelopmentProcess';
import { MethodologyPage } from './components/MethodologyPage';
import { SolutionsPage } from './components/SolutionsPage';
import { DemosPage } from './components/DemosPage';
import { ContactPage } from './components/ContactPage';
import { Theme } from './types';

// ScrollToTop component to ensure navigation starts at the top
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Home = () => (
  <main>
    <Hero />
    <DevelopmentProcess />
    <AudioDemos />
    <Services />
    <Automation />
  </main>
);

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Initialize theme based on preference or default to dark
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Handle Body Scroll Lock when modals are open
  useEffect(() => {
      if (isContactOpen || isBookingOpen) {
          document.body.classList.add('modal-open');
      } else {
          document.body.classList.remove('modal-open');
      }
  }, [isContactOpen, isBookingOpen]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ErrorBoundary>
        <ScrollToTop />
        <div className="min-h-screen w-full font-sans bg-driftwood-light-bg dark:bg-driftwood-dark-bg text-driftwood-light-text dark:text-white selection:bg-driftwood-orange selection:text-white">
        <Navbar 
            theme={theme} 
            toggleTheme={toggleTheme} 
            onDeployClick={() => setIsContactOpen(true)}
        />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/demos" element={<DemosPage />} />
          <Route path="/methodology" element={<MethodologyPage />} />
          <Route path="/contact" element={<ContactPage onOpenModal={() => setIsContactOpen(true)} />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
        
        <Footer 
            onBookClick={() => setIsBookingOpen(true)}
        />
        
        {/* Global Overlays */}
        <CookieBanner />
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        </div>
    </ErrorBoundary>
  );
}