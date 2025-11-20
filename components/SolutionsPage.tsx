import React, { useEffect } from 'react';
import { SERVICES } from '../constants';
import { PhoneIncoming, DatabaseZap, CalendarCheck, LucideIcon } from 'lucide-react';
import { Automation } from './Automation'; // Reusing the "Backend" section as part of this page

const iconMap: Record<string, LucideIcon> = {
  PhoneIncoming,
  DatabaseZap,
  CalendarCheck
};

export const SolutionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-driftwood-light-bg dark:bg-driftwood-dark-bg transition-colors duration-300">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <h1 className="text-4xl md:text-6xl font-bold text-driftwood-dark-bg dark:text-white mb-6">
            Voice is just the Interface.<br/>
            <span className="text-driftwood-orange">Automation is the Engine.</span>
        </h1>
        <p className="text-xl text-driftwood-light-text dark:text-driftwood-dark-text max-w-2xl">
            We deploy full-stack voice infrastructure. From the first "Hello" to the final CRM tag, the entire process is autonomous.
        </p>
      </div>

      {/* Detailed Services Grid */}
      <div className="max-w-7xl mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 gap-12">
          {SERVICES.map((service, idx) => {
            const Icon = iconMap[service.iconName];
            return (
              <div key={idx} className="bg-driftwood-light-surface dark:bg-driftwood-dark-surface border border-driftwood-light-border dark:border-driftwood-dark-border rounded-2xl p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-start hover:shadow-xl transition-shadow">
                
                <div className="md:w-1/3">
                    <div className="inline-flex p-4 bg-driftwood-orange/10 rounded-lg text-driftwood-orange mb-6">
                        <Icon size={40} />
                    </div>
                    <h3 className="text-3xl font-bold text-driftwood-dark-bg dark:text-white mb-2">
                        {service.title}
                    </h3>
                    <h4 className="font-mono text-sm text-driftwood-orange uppercase tracking-widest mb-4">
                        {service.subtitle}
                    </h4>
                </div>

                <div className="md:w-2/3">
                    <p className="text-lg text-driftwood-light-text dark:text-driftwood-dark-text leading-relaxed mb-8">
                        {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {service.details?.map((detail, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 bg-black/5 dark:bg-black/20 rounded border border-driftwood-light-border dark:border-driftwood-dark-border">
                                <div className="w-2 h-2 bg-driftwood-orange rounded-full"></div>
                                <span className="text-sm font-mono text-driftwood-dark-bg dark:text-gray-300">{detail}</span>
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Reuse the Automation/Backend Section */}
      <Automation />
    </div>
  );
};