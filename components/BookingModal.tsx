import React from 'react';
import { X, Calendar } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-driftwood-dark-bg/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-white dark:bg-driftwood-dark-surface w-full max-w-4xl h-[80vh] rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-fade-in-up flex flex-col">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-driftwood-dark-border bg-gray-50 dark:bg-driftwood-dark-bg">
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

        {/* Mock Calendar Content (Placeholder for Cal.com/Calendly iframe) */}
        <div className="flex-1 bg-white overflow-y-auto p-8 flex flex-col items-center justify-center text-center">
            <div className="max-w-md">
                <div className="mb-6 inline-block p-4 bg-driftwood-orange/10 rounded-full">
                    <Calendar size={48} className="text-driftwood-orange" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Select a Time</h2>
                <p className="text-gray-500 mb-8">
                    Duration: 30 min • Platform: Google Meet
                </p>

                {/* Mock Grid */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                    {['9:00 AM', '9:30 AM', '10:00 AM', '1:00 PM', '2:30 PM', '4:00 PM'].map((time) => (
                        <button 
                            key={time} 
                            className="px-4 py-3 border border-gray-200 rounded hover:border-driftwood-orange hover:text-driftwood-orange transition-colors text-sm font-medium text-gray-700"
                        >
                            {time}
                        </button>
                    ))}
                </div>
                
                <p className="text-xs text-gray-400">
                    *This is a demo interface. In production, this would be a functional Cal.com or Calendly embed.*
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};