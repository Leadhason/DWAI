import React, { useState } from 'react';
import { AUDIO_SAMPLES } from '../constants';
import { AudioPlayer } from './AudioPlayer';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const AudioDemos: React.FC = () => {
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const navigate = useNavigate();

  return (
    <section id="demos" className="py-20 px-4 bg-driftwood-light-bg dark:bg-driftwood-dark-bg transition-colors duration-300 scroll-mt-28">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-driftwood-dark-bg dark:text-white mb-4">
                Audible Intelligence
            </h2>
            <p className="text-driftwood-light-text dark:text-driftwood-dark-text max-w-2xl mx-auto mb-8">
                Listen to how our models handle complex negotiation, objection handling, and empathetic tones.
            </p>
            
            <button 
              onClick={() => navigate('/demos')}
              className="inline-flex items-center gap-2 text-driftwood-orange font-mono text-sm hover:underline"
            >
              VIEW_ALL_AGENTS <ArrowRight size={16} />
            </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AUDIO_SAMPLES.map((sample) => (
            <AudioPlayer
              key={sample.id}
              sample={sample}
              isActive={activeAudioId === sample.id}
              onPlay={setActiveAudioId}
              onStop={() => setActiveAudioId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};