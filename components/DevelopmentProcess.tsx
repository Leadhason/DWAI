import React from 'react';
import { PROCESS_SUMMARY } from '../constants';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const DevelopmentProcess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-driftwood-light-surface dark:bg-driftwood-dark-surface transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-driftwood-dark-bg dark:text-white mb-4">
                    How We Build.
                </h2>
                <p className="text-driftwood-light-text dark:text-driftwood-dark-text">
                    From audit to deployment, our process is designed for speed and reliability.
                </p>
            </div>
            <button 
                onClick={() => navigate('/methodology')}
                className="hidden md:flex items-center gap-2 text-driftwood-orange font-mono text-sm hover:underline mt-4 md:mt-0"
            >
                VIEW_FULL_LIFECYCLE <ArrowRight size={16} />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS_SUMMARY.map((step) => (
                <div key={step.number} className="relative p-6 border border-driftwood-light-border dark:border-driftwood-dark-border rounded-lg hover:border-driftwood-orange transition-colors group">
                    <div className="text-6xl font-bold text-black/5 dark:text-white/5 absolute top-4 right-4 font-sans group-hover:text-driftwood-orange/10 transition-colors">
                        {step.number}
                    </div>
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold text-driftwood-dark-bg dark:text-white mb-3 mt-8">
                            {step.title}
                        </h3>
                        <p className="text-sm text-driftwood-light-text dark:text-driftwood-dark-text leading-relaxed">
                            {step.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
            <button 
                onClick={() => navigate('/methodology')}
                className="inline-flex items-center gap-2 text-driftwood-orange font-mono text-sm hover:underline"
            >
                VIEW_FULL_LIFECYCLE <ArrowRight size={16} />
            </button>
        </div>
      </div>
    </section>
  );
};