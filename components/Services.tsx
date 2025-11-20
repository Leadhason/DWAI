import React from 'react';
import { PhoneIncoming, DatabaseZap, CalendarCheck, LucideIcon, ArrowRight } from 'lucide-react';
import { SERVICES } from '../constants';

const iconMap: Record<string, LucideIcon> = {
  PhoneIncoming,
  DatabaseZap,
  CalendarCheck
};

interface Props {
  onNavigate?: () => void;
}

export const Services: React.FC<Props> = ({ onNavigate }) => {
  return (
    <section id="solutions" className="py-20 px-4 bg-driftwood-light-surface dark:bg-driftwood-dark-surface transition-colors duration-300 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-driftwood-dark-bg dark:text-white mb-4">
              Core Capabilities
            </h2>
            <p className="text-driftwood-light-text dark:text-driftwood-dark-text">
              Enterprise-grade voice infrastructure designed for scale.
            </p>
          </div>
          {onNavigate && (
            <button 
              onClick={onNavigate}
              className="hidden md:flex items-center gap-2 text-driftwood-orange font-mono text-sm hover:underline mt-4 md:mt-0"
            >
              EXPLORE_SOLUTIONS <ArrowRight size={16} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.iconName];
            return (
              <div key={idx} className="flex flex-col items-start group">
                <div className="p-3 rounded bg-driftwood-orange/10 text-driftwood-orange mb-6 group-hover:scale-110 transition-transform">
                    <Icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-driftwood-dark-bg dark:text-white mb-2">
                  {service.title}
                </h3>
                <h4 className="font-mono text-sm text-driftwood-orange mb-4 uppercase tracking-widest">
                  {service.subtitle}
                </h4>
                <p className="text-driftwood-light-text dark:text-driftwood-dark-text leading-relaxed">
                  {service.description}
                </p>
                
                {idx === 0 && (
                    <div className="mt-6 font-mono text-xs text-driftwood-dark-text bg-black/5 dark:bg-white/5 p-2 rounded w-full border border-dashed border-driftwood-light-border dark:border-driftwood-dark-border">
                        Stack: Twilio + Python + OpenAI
                    </div>
                )}
              </div>
            );
          })}
        </div>

        {onNavigate && (
            <div className="mt-12 md:hidden text-center">
                <button 
                  onClick={onNavigate}
                  className="inline-flex items-center gap-2 text-driftwood-orange font-mono text-sm hover:underline"
                >
                  EXPLORE_SOLUTIONS <ArrowRight size={16} />
                </button>
            </div>
        )}
      </div>
    </section>
  );
};