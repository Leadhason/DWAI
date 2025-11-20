import React from 'react';
import { Twitter, Linkedin, Mail } from 'lucide-react';
import { ViewState } from '../types';

interface FooterProps {
  onNavigate: (view: ViewState) => void;
  onBookClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onBookClick }) => {
  return (
    <footer id="contact" className="bg-driftwood-dark-bg border-t border-driftwood-dark-border py-16 px-4 relative overflow-hidden scroll-mt-28">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Stop Drowning in Admin. <br/>
            <span className="text-driftwood-orange">Start Scaling.</span>
        </h2>
        <p className="text-driftwood-dark-text mb-10 text-lg">
            Book a technical audit to see where voice AI fits into your current stack.
        </p>

        <button 
            onClick={onBookClick}
            className="px-10 py-4 bg-driftwood-orange text-white font-bold text-lg rounded hover:scale-105 transition-transform shadow-[0_0_30px_rgba(247,140,54,0.3)] mb-16"
        >
            Book Your Audit
        </button>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 2L4 26H28L16 2Z" className="fill-driftwood-orange"/>
                    <path d="M16 10L10 22H22L16 10Z" className="fill-driftwood-dark-bg" />
                </svg>
                <span className="text-white font-sans font-bold">Driftwood AI</span>
            </div>

            <div className="flex gap-6 text-driftwood-dark-text">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-driftwood-orange transition-colors"><Linkedin size={20} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-driftwood-orange transition-colors"><Twitter size={20} /></a>
                <a href="mailto:hello@driftwood.ai" className="hover:text-driftwood-orange transition-colors"><Mail size={20} /></a>
            </div>

            <div className="mt-4 md:mt-0 flex flex-col md:flex-row gap-4 text-xs text-white/30 font-mono text-center md:text-right">
                <span>© 2025 Driftwood AI.</span>
                <div className="flex gap-4 justify-center md:justify-end">
                    <button onClick={() => { onNavigate('privacy'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Privacy</button>
                    <button onClick={() => { onNavigate('terms'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Terms</button>
                </div>
            </div>
        </div>
      </div>
      
      {/* Footer bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-driftwood-orange/5 blur-[100px] pointer-events-none"></div>
    </footer>
  );
};