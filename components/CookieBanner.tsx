import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('driftwood_consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('driftwood_consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-fade-in-up">
      <div className="bg-driftwood-light-surface dark:bg-driftwood-dark-surface border border-driftwood-light-border dark:border-driftwood-dark-border p-6 rounded-lg shadow-2xl">
        <div className="flex items-start gap-4">
          <div className="p-2 bg-driftwood-orange/10 rounded-full text-driftwood-orange shrink-0">
            <Cookie size={20} />
          </div>
          <div>
            <h4 className="font-bold text-driftwood-dark-bg dark:text-white text-sm mb-2">
              Cookie Policy
            </h4>
            <p className="text-xs text-driftwood-light-text dark:text-driftwood-dark-text mb-4 leading-relaxed">
              We use cookies to analyze traffic and improve your experience. By utilizing our voice agents, you agree to our data processing protocols.
            </p>
            <div className="flex gap-3">
              <button 
                onClick={handleAccept}
                className="flex-1 bg-driftwood-orange text-white text-xs font-bold py-2 px-4 rounded hover:bg-orange-600 transition-colors"
              >
                ACCEPT
              </button>
              <button 
                onClick={handleAccept}
                className="flex-1 bg-transparent border border-driftwood-light-border dark:border-driftwood-dark-border text-driftwood-light-text dark:text-driftwood-dark-text text-xs font-bold py-2 px-4 rounded hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
              >
                DECLINE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};