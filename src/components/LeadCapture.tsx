import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

interface LeadCaptureProps {
  onOpenAudit: () => void;
}

export default function LeadCapture({ onOpenAudit }: LeadCaptureProps) {
  return (
    <section id="metrics" className="relative w-full bg-transparent p-4 sm:p-8 flex items-center justify-center py-12 sm:py-28">
      <div className="relative max-w-[1200px] w-full min-h-[400px] sm:min-h-[600px] rounded-3xl overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
          src="https://res.cloudinary.com/jbblynim/video/upload/v1784484518/Matt___Self-Care___Systems_for_Busy_Parents_MP4_aab4ps.mp4"
        />
      
      <div className="absolute inset-0 bg-black/60 z-[1] pointer-events-none"></div>

      <div className="relative z-10 w-full flex flex-col items-center justify-center h-full px-6 py-12 sm:py-20">
        <div className="flex items-center gap-2 mb-4 md:mb-6 px-3 py-1 md:px-4 md:py-1.5 rounded-full glass-immutable w-fit shadow-md">
          <Flame size={16} strokeWidth={1.5} className="text-amber-500 animate-pulse animate-duration-1000" />
          <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-[#E2E2E2]">
            The Cost of Inaction
          </span>
        </div>
        
        <h1
          id="lead-capture-title"
          className="text-[#1BC311] text-2xl sm:text-4xl md:text-6xl font-semibold leading-[1.1] mb-4 md:mb-6 tracking-[-0.03em] text-center"
        >
          Stop Funding <span className="text-[#ff0000]">Inefficiency</span>.
        </h1>
        
        <p
          id="lead-capture-text"
          className="text-[#E2E2E2] text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-xl font-medium text-center"
        >
          Your competitors are currently leveraging agentic systems to reduce CRM administrative hours by over 40%. It is a mathematical certainty that manual operations will price you out of the market. Let's find out exactly where your operations team is bleeding capital.
        </p>

        <button
          id="lead-capture-cta-button"
          onClick={onOpenAudit}
          
          className="inline-flex items-center gap-3 md:gap-5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white text-sm md:text-base font-semibold px-5 py-3 md:px-8 md:py-5 rounded-full hover:scale-103 active:scale-98 transition-all duration-300 group border border-white/5 shadow-2xl hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)] cursor-pointer text-center pointer-events-auto"
        >
          <span className="hidden xs:inline">Book Your Complimentary Workflow Audit</span>
          <span className="xs:hidden">Book Complimentary Audit</span>
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/20 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-black shrink-0">
            <ArrowRight size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </button>
      </div>
      </div>
    </section>
  );
}
