import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20 overflow-hidden bg-driftwood-light-bg dark:bg-driftwood-dark-bg transition-colors duration-300">
      
      {/* Badge */}
      <div className="mb-8 animate-fade-in-up">
        <span className="font-mono text-xs md:text-sm text-driftwood-orange border border-driftwood-orange/30 bg-driftwood-orange/10 px-3 py-1 rounded uppercase tracking-wider">
          v2.0 // NEXT_GEN_VOICE_INFRASTRUCTURE
        </span>
      </div>

      {/* Headline */}
      <h1 className="max-w-4xl font-sans font-bold text-4xl md:text-6xl lg:text-7xl leading-tight text-driftwood-dark-bg dark:text-white mb-6">
        The Best Sales Rep You’ve Ever Hired is <span className="text-transparent bg-clip-text bg-gradient-to-r from-driftwood-orange to-orange-300">Artificial.</span>
      </h1>

      {/* Sub-headline */}
      <p className="max-w-2xl font-sans text-lg md:text-xl text-driftwood-light-text dark:text-driftwood-dark-text mb-12">
        Driftwood AI deploys hyper-realistic Voice Agents that qualify leads, book appointments, and reactivate databases 24/7.
      </p>

      {/* Interactive Waveform Line */}
      <div 
        className="w-full max-w-3xl h-16 mb-12 flex items-center justify-center gap-1 cursor-crosshair group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {Array.from({ length: 60 }).map((_, i) => (
          <div 
            key={i}
            className={`w-1 bg-driftwood-orange rounded-full transition-all duration-300 ${isHovered ? 'animate-wave' : 'h-1 opacity-50 group-hover:opacity-100'}`}
            style={{
              animationDelay: `${i * 0.02}s`,
              height: isHovered ? undefined : '2px'
            }}
          />
        ))}
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
        <button 
            onClick={() => navigate('/demos')}
            className="w-full sm:w-auto px-8 py-4 bg-driftwood-orange text-white font-sans font-bold rounded hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(247,140,54,0.4)] flex items-center justify-center gap-2"
        >
          Listen to Samples ▶
        </button>
        <button 
            onClick={() => navigate('/solutions')}
            className="w-full sm:w-auto px-8 py-4 border border-driftwood-light-border dark:border-driftwood-dark-border text-driftwood-light-text dark:text-white font-sans font-medium rounded hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center gap-2"
        >
          View Automation Stack <ArrowRight size={16} />
        </button>
      </div>

      {/* Background Glow Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-driftwood-orange/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </section>
  );
};