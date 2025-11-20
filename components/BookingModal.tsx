import React from 'react';
import { X, Calendar } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // In a real production scenario, you would replace the src below with your Calendly or Cal.com URL.
  // Example: src="https://cal.com/driftwood/audit?embed=true"
  // For now, we show a placeholder state that mimics the embedding.

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-driftwood-dark-bg/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white dark:bg-driftwood-dark-surface w-full max-w-4xl h-[85vh] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-fade-in-up flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-driftwood-dark-border bg-gray-50 dark:bg-driftwood-dark-bg shrink-0">
          <div className="flex items-center gap-2">
             <Calendar className="text-driftwood-orange" size={20} />
             <h3 className="font-bold text-gray-900 dark:text-white">Technical Audit Scheduler</h3>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 dark:text-driftwood-dark-text hover:text-driftwood-orange transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Iframe Container */}
        <div className="flex-1 w-full h-full bg-white relative">
             {/* 
                This iframe would be your actual Cal.com / Calendly embed.
                I'm using a blank src here but styling it as if it were loaded.
                Ideally: <iframe src="https://cal.com/your-link" ... />
             */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                <Calendar size={48} className="text-gray-300 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to Connect?</h3>
                <p className="text-gray-500 max-w-md mb-6">
                  This is a production-ready modal container. To go live, simply replace this placeholder div with your scheduling tool's embed iframe code.
                </p>
                <div className="w-full max-w-md p-4 bg-gray-100 rounded border border-gray-200 font-mono text-xs text-gray-600 overflow-x-auto">
                  &lt;iframe src="https://cal.com/driftwood/30min" width="100%" height="100%" frameborder="0"&gt;&lt;/iframe&gt;
                </div>
             </div>
        </div>
      </div>
    </div>
  );
};