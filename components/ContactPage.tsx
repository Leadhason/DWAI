import React, { useEffect } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

interface ContactPageProps {
  onOpenModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 bg-driftwood-light-bg dark:bg-driftwood-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-driftwood-dark-bg dark:text-white mb-6">
                Deploy Your Agent.
            </h1>
            <p className="text-xl text-driftwood-light-text dark:text-driftwood-dark-text max-w-2xl mx-auto">
                Ready to automate your outreach? Our team is ready to audit your current process and build your prototype.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Direct Contact Info */}
            <div className="bg-driftwood-light-surface dark:bg-driftwood-dark-surface p-8 md:p-12 rounded-2xl border border-driftwood-light-border dark:border-driftwood-dark-border shadow-lg">
                <h2 className="text-2xl font-bold text-driftwood-dark-bg dark:text-white mb-8">Contact Information</h2>
                
                <div className="space-y-8">
                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-driftwood-orange/10 rounded text-driftwood-orange">
                            <Mail size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-driftwood-dark-bg dark:text-white">Email Us</h3>
                            <p className="text-driftwood-light-text dark:text-driftwood-dark-text text-sm mb-1">For general inquiries and partnerships.</p>
                            <a href="mailto:hello@driftwood.ai" className="text-driftwood-orange hover:underline">hello@driftwood.ai</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-driftwood-orange/10 rounded text-driftwood-orange">
                            <Phone size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-driftwood-dark-bg dark:text-white">Sales</h3>
                            <p className="text-driftwood-light-text dark:text-driftwood-dark-text text-sm mb-1">Speak to a solution architect.</p>
                            <a href="tel:+15550102020" className="text-driftwood-orange hover:underline">+1 (555) 010-2020</a>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="p-3 bg-driftwood-orange/10 rounded text-driftwood-orange">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-driftwood-dark-bg dark:text-white">Headquarters</h3>
                            <p className="text-driftwood-light-text dark:text-driftwood-dark-text text-sm">
                                123 Tech Plaza, Suite 400<br/>
                                San Francisco, CA 94105
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-driftwood-light-border dark:border-driftwood-dark-border">
                    <h3 className="font-mono text-xs text-gray-500 mb-4 uppercase tracking-widest">Operating Hours</h3>
                    <div className="flex justify-between text-sm text-driftwood-light-text dark:text-gray-300 font-mono">
                        <span>MON - FRI</span>
                        <span>09:00 - 18:00 PST</span>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col justify-center items-start">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-driftwood-dark-bg dark:text-white mb-4">
                        Start with an Audit.
                    </h2>
                    <p className="text-driftwood-light-text dark:text-driftwood-dark-text leading-relaxed">
                        Not sure where to start? We offer a comprehensive technical audit of your current sales and support workflows. We'll identify the bottlenecks and calculate the exact ROI of implementing Voice AI.
                    </p>
                </div>
                
                <button 
                    onClick={onOpenModal}
                    className="w-full md:w-auto px-8 py-4 bg-driftwood-orange text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(247,140,54,0.3)] flex items-center justify-center gap-3"
                >
                    <Send size={20} /> Initialize Project Request
                </button>
            </div>

        </div>
      </div>
    </div>
  );
};