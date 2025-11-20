import React from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Theme, ViewState } from '../types';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  onDeployClick: () => void;
  onNavigate: (view: ViewState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, onDeployClick, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navLinks: { name: string; view: ViewState }[] = [
    { name: 'Solutions', view: 'solutions' },
    { name: 'Voice Demos', view: 'demos' },
    { name: 'Methodology', view: 'methodology' },
    { name: 'Contact', view: 'contact' },
  ];

  const handleLinkClick = (view: ViewState) => {
      setIsMobileMenuOpen(false);
      onNavigate(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeploy = () => {
      setIsMobileMenuOpen(false);
      onDeployClick();
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-driftwood-light-border dark:border-driftwood-dark-border bg-driftwood-light-bg/80 dark:bg-driftwood-dark-bg/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer" 
            onClick={() => { onNavigate('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L4 26H28L16 2Z" className="fill-driftwood-orange" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
              <path d="M16 10L10 22H22L16 10Z" className="fill-driftwood-dark-bg dark:fill-white" />
            </svg>
            <span className="font-sans font-bold text-xl tracking-tight text-driftwood-light-text dark:text-white">
              Driftwood<span className="text-driftwood-orange">AI</span>
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.view)}
                className="font-mono text-sm text-driftwood-light-text dark:text-driftwood-dark-text hover:text-driftwood-orange dark:hover:text-driftwood-orange transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-driftwood-light-text dark:text-driftwood-dark-text"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
                onClick={onDeployClick}
                className="font-mono text-sm px-5 py-2 rounded bg-transparent border border-driftwood-orange text-driftwood-orange hover:bg-driftwood-orange hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(247,140,54,0.2)] hover:shadow-[0_0_20px_rgba(247,140,54,0.5)]"
            >
              Deploy Agent
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-driftwood-light-text dark:text-driftwood-dark-text"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-driftwood-light-text dark:text-driftwood-dark-text"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-driftwood-light-bg dark:bg-driftwood-dark-bg border-b border-driftwood-light-border dark:border-driftwood-dark-border p-4 flex flex-col gap-4 shadow-2xl h-screen">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.view)}
              className="font-mono text-lg text-driftwood-light-text dark:text-white text-left"
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={handleDeploy}
            className="mt-2 w-full font-mono text-sm px-5 py-3 rounded bg-driftwood-orange text-white font-bold shadow-[0_0_15px_rgba(247,140,54,0.4)]"
          >
            Deploy Agent
          </button>
        </div>
      )}
    </nav>
  );
};