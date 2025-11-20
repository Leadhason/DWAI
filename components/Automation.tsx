import React from 'react';
import { CheckCircle, Workflow } from 'lucide-react';

export const Automation: React.FC = () => {
  return (
    <section id="methodology" className="py-20 px-4 bg-driftwood-light-bg dark:bg-driftwood-dark-bg relative overflow-hidden transition-colors duration-300 scroll-mt-28">
      {/* Connector Line */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-driftwood-orange/0 via-driftwood-orange to-driftwood-orange/0 opacity-50"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Copy */}
        <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
                <Workflow className="text-driftwood-orange" size={20} />
                <span className="font-mono text-driftwood-light-text dark:text-driftwood-dark-text text-sm tracking-widest">
                    [ SYSTEM_INTEGRATION_LAYER ]
                </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-driftwood-dark-bg dark:text-white mb-6">
                Beyond the Voice.
            </h2>
            <p className="text-lg text-driftwood-light-text dark:text-driftwood-dark-text mb-8">
                A voice agent is only as good as the data it connects to. We don't just build the voice; we automate the entire workflow to ensure data integrity and instant follow-up.
            </p>

            <ul className="space-y-4">
                {[
                    "CRM Sync: Instant call transcription and tagging (HubSpot, GHL, Salesforce).",
                    "Workflow Triggers: Automated SMS follow-ups and Slack notifications post-call.",
                    "Make/Zapier Logic: Complex routing based on call outcomes."
                ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="text-driftwood-orange flex-shrink-0 mt-1" size={18} />
                        <span className="text-driftwood-light-text dark:text-gray-300">{item}</span>
                    </li>
                ))}
            </ul>
            
            <div className="mt-10">
                 <button className="px-6 py-3 border border-driftwood-orange text-driftwood-orange font-mono text-sm hover:bg-driftwood-orange hover:text-white transition-colors rounded">
                    View API Documentation
                 </button>
            </div>
        </div>

        {/* Right: Visual Representation */}
        <div className="flex-1 w-full relative">
            <div className="relative z-10 bg-driftwood-light-surface dark:bg-driftwood-dark-surface border border-driftwood-light-border dark:border-driftwood-dark-border rounded-lg p-6 shadow-2xl">
                <div className="flex justify-between items-center border-b border-driftwood-light-border dark:border-driftwood-dark-border pb-4 mb-4">
                    <span className="font-mono text-xs text-gray-400">pipeline_visualizer.json</span>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                    </div>
                </div>
                {/* Mock Code/Flow */}
                <div className="space-y-3 font-mono text-xs sm:text-sm text-driftwood-light-text dark:text-driftwood-dark-text">
                    <div className="flex items-center gap-2">
                        <span className="text-purple-400">const</span>
                        <span className="text-blue-400">processCall</span>
                        <span className="text-white">=</span>
                        <span className="text-yellow-300">async</span>
                        <span className="text-white">(audio)</span>
                        <span className="text-white">{`=> {`}</span>
                    </div>
                    <div className="pl-4 text-gray-500">// 1. Transcribe Audio</div>
                    <div className="pl-4 flex items-center gap-2">
                        <span className="text-purple-400">const</span>
                        <span className="text-white">transcript</span>
                        <span className="text-white">=</span>
                        <span className="text-green-400">await</span>
                        <span className="text-white">Driftwood.stt(audio);</span>
                    </div>
                    <div className="pl-4 mt-2 text-gray-500">// 2. Extract Intent</div>
                    <div className="pl-4 flex items-center gap-2">
                        <span className="text-purple-400">if</span>
                        <span className="text-white">(transcript.intent === </span>
                        <span className="text-green-300">'BOOKING'</span>
                        <span className="text-white">) {`{`}</span>
                    </div>
                    <div className="pl-8 text-driftwood-orange">CRM.createDeal(transcript.lead);</div>
                    <div className="pl-8 text-driftwood-orange">Calendar.schedule(transcript.time);</div>
                    <div className="pl-4 text-white">{`}`}</div>
                    <div className="text-white">{`}`}</div>
                </div>
            </div>
            {/* Decorative Glow behind code block */}
            <div className="absolute -top-10 -right-10 w-full h-full bg-driftwood-orange/10 blur-3xl -z-0 rounded-full"></div>
        </div>

      </div>
    </section>
  );
};