import React, { useState } from 'react';
import { MotionSection, MotionItem } from '../components/Motion';
import { Hero3DBackground } from '../components/Hero3DBackground';

const WEBHOOK_URL = "https://sbcaio.app.n8n.cloud/webhook/3b59e432-05cf-47cb-b825-574dbb93dd55"

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
    budget: '',
    timeline: '',
    honeypot: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess(false);

    try {
      const urlEncodedData = new URLSearchParams(formData as Record<string, string>).toString();

      // Use no-cors and form-urlencoded to bypass browser CORS preflight blocks completely
      // n8n webhook nodes automatically parse application/x-www-form-urlencoded payloads.
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: urlEncodedData
      });

      // In no-cors mode, we won't get a readable response. If fetch didn't throw an immediate network error, we assume it was dispatched.
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-black min-h-screen">
      <MotionSection className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden pt-32 pb-24">
        <Hero3DBackground />
        
        <div className="relative z-10 w-full max-w-xl mx-auto px-6">
          <MotionItem className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-black mb-4">Start Your AI Transformation</h1>
            <p className="text-gray-400 text-lg">
              Tell us about your business and what you want to achieve. We’ll respond with a tailored plan.
            </p>
          </MotionItem>

          <MotionItem className="bg-[#111] border border-white/10 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full opacity-50 pointer-events-none" />
            
            {success ? (
              <div className="relative z-10 text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white">Thank You</h3>
                <p className="text-gray-400">
                  Request sent successfully. We'll contact you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                
                {/* HONEYPOT - HIDDEN FROM USERS */}
                <div className="hidden" aria-hidden="true">
                  <input type="text" name="honeypot" tabIndex={-1} value={formData.honeypot} onChange={handleChange} autoComplete="off" />
                </div>

                {error && (
                  <div className="bg-red-500/20 border border-red-500 text-red-300 p-4 rounded-lg text-sm text-center">
                    {error}
                  </div>
                )}

              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">Full Name *</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-300 mb-2">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="businessType" className="block text-sm font-bold text-gray-300 mb-2">Business Type</label>
                <input 
                  type="text" 
                  id="businessType" 
                  name="businessType" 
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                  placeholder="E-commerce, Agency, Local Service, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">What do you need help with? *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Describe your bottlenecks and goals..."
                ></textarea>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="budget" className="block text-sm font-bold text-gray-300 mb-2">Budget Range</label>
                  <select 
                    id="budget" 
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="" className="bg-[#111] text-gray-400">Select an option</option>
                    <option value="Under $5k" className="bg-[#111]">Under $5k</option>
                    <option value="$5k - $10k" className="bg-[#111]">$5k - $10k</option>
                    <option value="$10k - $30k" className="bg-[#111]">$10k - $30k</option>
                    <option value="$30k+" className="bg-[#111]">$30k+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="timeline" className="block text-sm font-bold text-gray-300 mb-2">Timeline</label>
                  <select 
                    id="timeline" 
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-white/10 rounded-md px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="" className="bg-[#111] text-gray-400">Select an option</option>
                    <option value="ASAP" className="bg-[#111]">ASAP</option>
                    <option value="Within 1 month" className="bg-[#111]">Within 1 month</option>
                    <option value="1-3 months" className="bg-[#111]">1-3 months</option>
                    <option value="Just exploring" className="bg-[#111]">Just exploring</option>
                  </select>
                </div>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full mt-4 bg-primary text-black font-bold py-4 rounded-md transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_15px_rgba(0,255,0,0.15)] hover:shadow-[0_0_25px_rgba(0,255,0,0.4)]"
              >
                {isSubmitting ? 'Submitting...' : 'Request Consultation'}
              </button>
            </form>
            )}
          </MotionItem>
        </div>
      </MotionSection>
    </div>
  );
};
