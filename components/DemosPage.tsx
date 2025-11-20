import React, { useState } from 'react';
import { AUDIO_SAMPLES } from '../constants';
import { AudioPlayer } from './AudioPlayer';
import { Helmet } from 'react-helmet-async';

export const DemosPage: React.FC = () => {
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);

  return (
    <>
      <Helmet>
        <title>Voice Demos | Driftwood AI</title>
        <meta name="description" content="Listen to our AI voice agents in action. Experience human-level intonation, objection handling, and instant response times." />
      </Helmet>
      <div className="min-h-screen pt-24 pb-20 px-4 bg-driftwood-light-bg dark:bg-driftwood-dark-bg transition-colors duration-300">
         <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-bold text-driftwood-dark-bg dark:text-white mb-6">
                  Audible Intelligence
              </h1>
              <p className="text-xl text-driftwood-light-text dark:text-driftwood-dark-text max-w-3xl mx-auto">
                  Driftwood agents are trained on millions of sales conversations. They understand nuance, handle objections, and sound indistinguishable from your best human rep.
              </p>
          </div>

          <div className="space-y-24">
            {AUDIO_SAMPLES.map((sample, index) => (
              <div key={sample.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Player Section */}
                  <div className="w-full lg:w-1/2">
                      <AudioPlayer
                          sample={sample}
                          isActive={activeAudioId === sample.id}
                          onPlay={setActiveAudioId}
                          onStop={() => setActiveAudioId(null)}
                      />
                  </div>

                  {/* Details Section */}
                  <div className="w-full lg:w-1/2">
                      <div className="mb-6">
                          <span className="font-mono text-xs text-driftwood-orange border border-driftwood-orange/30 px-2 py-1 rounded">
                              MODEL: {sample.label}
                          </span>
                      </div>
                      <h2 className="text-3xl font-bold text-driftwood-dark-bg dark:text-white mb-4">
                          {sample.title}
                      </h2>
                      <p className="text-lg text-driftwood-light-text dark:text-driftwood-dark-text mb-8">
                          {sample.description}
                      </p>

                      <div className="bg-driftwood-light-surface dark:bg-driftwood-dark-surface p-6 rounded-xl border border-driftwood-light-border dark:border-driftwood-dark-border mb-8">
                          <h3 className="font-bold text-driftwood-dark-bg dark:text-white mb-4 border-b border-driftwood-light-border dark:border-driftwood-dark-border pb-2">
                              Capabilities
                          </h3>
                          <ul className="space-y-3">
                              {sample.details?.map((detail, i) => (
                                  <li key={i} className="flex items-start gap-3 text-sm text-driftwood-light-text dark:text-gray-300">
                                      <span className="text-driftwood-orange mt-1">▹</span>
                                      {detail}
                                  </li>
                              ))}
                          </ul>
                      </div>

                      <div>
                          <h3 className="font-mono text-xs text-gray-500 mb-3 uppercase">Best Deployed For:</h3>
                          <div className="flex flex-wrap gap-2">
                              {sample.useCases?.map((useCase, i) => (
                                  <span key={i} className="px-3 py-1 bg-black/5 dark:bg-white/10 rounded-full text-xs font-bold text-driftwood-dark-bg dark:text-white">
                                      {useCase}
                                  </span>
                              ))}
                          </div>
                      </div>
                  </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};