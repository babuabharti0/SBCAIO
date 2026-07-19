import React from 'react';
import { ArrowRight, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-transparent py-12 sm:py-28 flex items-center justify-center p-4 sm:p-8">
      <div className="relative max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] shadow-2xl rounded-2xl overflow-hidden">
        
        {/* Left Column: Operational Information */}
        <div className="p-8 sm:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/[0.08]">
          <h2 className="text-[#1BC311] text-2xl sm:text-4xl font-semibold mb-4 tracking-tight">
            Initiate Architecture Review
          </h2>
          <p className="text-[#E2E2E2] text-sm sm:text-base leading-relaxed mb-8">
            Connect with our engineering leadership to discuss deployment parameters, data sovereignty requirements, and custom algorithmic stewardship for your enterprise.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="text-white/50 shrink-0 mt-1" size={20} />
              <div>
                <p className="text-[#E2E2E2] font-medium mb-1">Secure Communications</p>
                <p className="text-[#E2E2E2] text-sm">engineering@sbcaio.dev</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <MapPin className="text-white/50 shrink-0 mt-1" size={20} />
              <div>
                <p className="text-[#E2E2E2] font-medium mb-1">Global HQ</p>
                <p className="text-[#E2E2E2] text-sm">Dallas, TX (On-Premises Access)</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <Clock className="text-white/50 shrink-0 mt-1" size={20} />
              <div>
                <p className="text-[#E2E2E2] font-medium mb-1">Standardized Operational Hours</p>
                <p className="text-[#E2E2E2] text-sm">Monday – Friday: 09:00 AM – 05:00 PM IST</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-5 h-5 rounded-full border border-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              </div>
              <div>
                <p className="text-[#E2E2E2] font-medium mb-1">Operational SLA</p>
                <p className="text-[#E2E2E2] text-sm">Strict 24-Hour Response Guarantee.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: The Input Form */}
        <div className="p-8 sm:p-12 flex flex-col justify-center">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-[#E2E2E2] text-xs font-semibold uppercase tracking-wider mb-2">
                Name
              </label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all pointer-events-auto"
              />
            </div>
            
            <div>
              <label className="block text-[#E2E2E2] text-xs font-semibold uppercase tracking-wider mb-2">
                Corporate Email
              </label>
              <input 
                type="email" 
                placeholder="john@enterprise.com" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all pointer-events-auto"
              />
            </div>
            
            <div>
              <label className="block text-[#E2E2E2] text-xs font-semibold uppercase tracking-wider mb-2">
                Project Scope
              </label>
              <textarea 
                rows={4}
                placeholder="Describe your operational infrastructure and integration requirements..." 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:ring-1 focus:ring-white/30 transition-all pointer-events-auto resize-none"
              ></textarea>
            </div>
            
            <div className="pt-2">
              <button 
                type="submit"
                className="w-full bg-white hover:bg-neutral-200 text-black font-semibold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 pointer-events-auto"
              >
                <span>Submit Request</span>
                <ArrowRight size={18} strokeWidth={2} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
