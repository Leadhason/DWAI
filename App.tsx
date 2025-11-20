import React, { useState, useEffect } from 'react';
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
import { Theme, ViewState } from './types';

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [currentView, setCurrentView] = useState<ViewState>('home');
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

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderView = () => {
      switch (currentView) {
        case 'solutions':
          return <SolutionsPage />;
        case 'demos':
          return <DemosPage />;
        case 'methodology':
          return <MethodologyPage />;
        case 'contact':
          return <ContactPage onOpenModal={() => setIsContactOpen(true)} />;
        case 'privacy':
          return <PrivacyPolicy onBack={() => handleNavigate('home')} />;
        case 'terms':
          return <TermsOfService onBack={() => handleNavigate('home')} />;
        case 'home':
        default:
          return (
            <main>
                <Hero onNavigate={handleNavigate} />
                <DevelopmentProcess onLearnMore={() => handleNavigate('methodology')} />
                <AudioDemos onNavigate={() => handleNavigate('demos')} />
                <Services onNavigate={() => handleNavigate('solutions')} />
                <Automation />
            </main>
          );
      }
  };

  return (
    <ErrorBoundary>
        <div className="min-h-screen w-full font-sans bg-driftwood-light-bg dark:bg-driftwood-dark-bg text-driftwood-light-text dark:text-white selection:bg-driftwood-orange selection:text-white">
        <Navbar 
            theme={theme} 
            toggleTheme={toggleTheme} 
            onDeployClick={() => setIsContactOpen(true)}
            onNavigate={handleNavigate}
        />
        
        {renderView()}
        
        <Footer 
            onNavigate={handleNavigate} 
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