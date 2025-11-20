import React, { useEffect } from 'react';
import { FULL_METHODOLOGY } from '../constants';
import { CheckCircle } from 'lucide-react';

export const MethodologyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-driftwood-light-bg dark:bg-driftwood-dark-bg transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
            <span className="font-mono text-driftwood-orange text-xs tracking-widest uppercase mb-2 block">
                Service Delivery Lifecycle
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-driftwood-dark-bg dark:text-white mb-6">
                From Audit to Automation.
            </h1>
            <p className="text-lg text-driftwood-light-text dark:text-driftwood-dark-text max-w-2xl mx-auto">
                We don't just hand over a login. We architect, build, and stress-test a complete infrastructure tailored to your business goals.
            </p>
        </div>

        <div className="space-y-12 relative">
             {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-driftwood-light-border dark:bg-driftwood-dark-border -translate-x-1/2 hidden md:block"></div>

            {FULL_METHODOLOGY.map((step, index) => (
                <div key={step.number} className={`flex flex-col md:flex-row gap-8 md:gap-16 items-start ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* Number Marker (Mobile: Left, Desktop: Center) */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-12 h-12 rounded-full bg-driftwood-light-bg dark:bg-driftwood-dark-bg border-4 border-driftwood-light-surface dark:border-driftwood-dark-surface text-driftwood-orange font-bold font-mono shadow-lg z-10">
                        {step.number}
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 w-full">
                        <div className="bg-driftwood-light-surface dark:bg-driftwood-dark-surface border border-driftwood-light-border dark:border-driftwood-dark-border p-8 rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(247,140,54,0.1)] transition-shadow">
                            <div className="flex items-center gap-4 mb-4 md:hidden">
                                <span className="font-mono text-driftwood-orange font-bold text-xl">{step.number}</span>
                                <h2 className="text-2xl font-bold text-driftwood-dark-bg dark:text-white">{step.title}</h2>
                            </div>
                            <h2 className="hidden md:block text-2xl font-bold text-driftwood-dark-bg dark:text-white mb-3">{step.title}</h2>
                            
                            <p className="text-driftwood-light-text dark:text-driftwood-dark-text mb-6 font-medium">
                                {step.description}
                            </p>
                            
                            <div className="space-y-2">
                                {step.details?.map((detail, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle size={16} className="text-driftwood-orange mt-1 flex-shrink-0" />
                                        <span className="text-sm text-driftwood-light-text dark:text-gray-400">{detail}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* Spacer for the other side of the grid */}
                    <div className="flex-1 hidden md:block"></div>
                </div>
            ))}
        </div>

        <div className="mt-20 text-center p-8 bg-driftwood-orange/10 rounded-xl border border-driftwood-orange/20">
            <h3 className="text-2xl font-bold text-driftwood-dark-bg dark:text-white mb-4">Ready to start Phase 01?</h3>
            <p className="text-driftwood-light-text dark:text-driftwood-dark-text mb-6">
                Let's begin the Discovery & Scoping phase for your business.
            </p>
            <button 
                onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
                className="px-8 py-3 bg-driftwood-orange text-white font-bold rounded hover:bg-orange-600 transition-colors shadow-lg"
            >
                Book Discovery Call
            </button>
        </div>
      </div>
    </div>
  );
};