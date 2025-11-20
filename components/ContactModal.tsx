import React, { useState } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-driftwood-dark-bg/90 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className="relative bg-driftwood-light-surface dark:bg-driftwood-dark-surface border border-driftwood-light-border dark:border-driftwood-dark-border w-full max-w-lg rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden animate-fade-in-up">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-driftwood-light-border dark:border-driftwood-dark-border">
          <div>
             <h3 className="text-xl font-bold text-driftwood-dark-bg dark:text-white">Deploy Agent</h3>
             <p className="text-xs font-mono text-driftwood-orange mt-1">INITIALIZE_CONTACT_PROTOCOL</p>
          </div>
          <button 
            onClick={onClose}
            className="text-driftwood-light-text dark:text-driftwood-dark-text hover:text-driftwood-orange transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {status === 'success' ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-4">
                <CheckCircle size={32} />
              </div>
              <h4 className="text-xl font-bold text-driftwood-dark-bg dark:text-white mb-2">Request Received</h4>
              <p className="text-driftwood-light-text dark:text-driftwood-dark-text mb-6">
                Our system has logged your inquiry. An onboarding specialist will contact you shortly.
              </p>
              <button 
                onClick={onClose}
                className="px-6 py-2 bg-driftwood-orange text-white rounded font-bold hover:bg-orange-600 transition-colors"
              >
                Close Terminal
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-driftwood-light-text dark:text-driftwood-dark-text">NAME</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-black/5 dark:bg-black/20 border border-driftwood-light-border dark:border-driftwood-dark-border rounded p-3 text-driftwood-dark-bg dark:text-white focus:border-driftwood-orange focus:outline-none focus:ring-1 focus:ring-driftwood-orange transition-all"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono text-driftwood-light-text dark:text-driftwood-dark-text">COMPANY</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-black/5 dark:bg-black/20 border border-driftwood-light-border dark:border-driftwood-dark-border rounded p-3 text-driftwood-dark-bg dark:text-white focus:border-driftwood-orange focus:outline-none focus:ring-1 focus:ring-driftwood-orange transition-all"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-xs font-mono text-driftwood-light-text dark:text-driftwood-dark-text">EMAIL</label>
                <input 
                  type="email" 
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/5 dark:bg-black/20 border border-driftwood-light-border dark:border-driftwood-dark-border rounded p-3 text-driftwood-dark-bg dark:text-white focus:border-driftwood-orange focus:outline-none focus:ring-1 focus:ring-driftwood-orange transition-all"
                  placeholder="jane@acme.com"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono text-driftwood-light-text dark:text-driftwood-dark-text">MESSAGE / REQUIREMENTS</label>
                <textarea 
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-black/5 dark:bg-black/20 border border-driftwood-light-border dark:border-driftwood-dark-border rounded p-3 text-driftwood-dark-bg dark:text-white focus:border-driftwood-orange focus:outline-none focus:ring-1 focus:ring-driftwood-orange transition-all resize-none"
                  placeholder="Describe your use case (e.g., Inbound Customer Support, Cold Outreach)..."
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={status === 'submitting'}
                  className="w-full py-3 bg-driftwood-orange text-white rounded font-bold hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(247,140,54,0.3)] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin" size={18} />
                      PROCESSING...
                    </>
                  ) : (
                    <>
                      INITIALIZE AGENT <Send size={18} />
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-[10px] text-center text-driftwood-light-text dark:text-driftwood-dark-text/50">
                By submitting, you agree to our Privacy Policy and Terms of Service.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};