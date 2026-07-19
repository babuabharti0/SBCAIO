import React, { useEffect, useRef } from 'react';

interface HeroProps {
  onOpenAudit: () => void;
}

export default function Hero({ onOpenAudit }: HeroProps) {
  const heroSectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    for (let i = 1; i <= 125; i++) {
      const img = new Image();
      img.src = `/hero-frames/hero_${String(i).padStart(8, '0')}.webp`;
      images.push(img);
    }
    imagesRef.current = images;

    images[0].onload = () => {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext('2d');
        if (ctx) {
          ctx.drawImage(images[0], 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      }
    };

    const handleScroll = () => {
      if (!heroSectionRef.current || !canvasRef.current) return;

      const rect = heroSectionRef.current.getBoundingClientRect();

      // The New Performance Gate: Only calculate and draw if the card is visible on screen
      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const scrollDistance = Math.max(0, -rect.top); 
      const maxScroll = rect.height || window.innerHeight;
      const scrollFraction = Math.min(1, scrollDistance / maxScroll);
      const frameIndex = Math.min(124, Math.max(0, Math.floor(scrollFraction * 125)));

      requestAnimationFrame(() => {
        if (imagesRef.current[frameIndex]?.complete) {
          const ctx = canvasRef.current.getContext('2d');
          if (ctx) ctx.drawImage(imagesRef.current[frameIndex], 0, 0, canvasRef.current.width, canvasRef.current.height);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    
    return () => window.removeEventListener('scroll', handleScroll, { capture: true });
  }, []);

  return (
    <section ref={heroSectionRef} className="relative w-full min-h-screen flex items-center justify-center px-4 sm:px-8 pt-20">
      <div 
        ref={containerRef}
        className="relative w-full max-w-5xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] shadow-2xl rounded-3xl p-10 md:p-16 text-left z-10 overflow-hidden"
      >
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full object-cover -z-20 opacity-100 rounded-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.05] border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span className="text-[11px] font-bold text-[#E2E2E2] uppercase tracking-widest">Enterprise Autonomy Engine</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#1BC311] tracking-tight leading-tight mb-6">
            Stop <span className="text-red-500">Bleeding</span> <span className="text-green-500">Capital</span><br />
            To Manual Operations
          </h1>
          
          <p className="text-[16px] md:text-[18px] text-[#E2E2E2] leading-relaxed max-w-3xl mb-10 font-medium">
            Embedded algorithmic infrastructure replacing fragmented software spend with hard operational margins. We engineer autonomous systems that work without overhead, fatigue, or churn.
          </p>
          
          <button onClick={onOpenAudit} className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-white/[0.05] border border-white/20 text-white text-[14px] font-semibold hover:bg-white/[0.1] transition-colors cursor-pointer">
            Audit Inefficiencies 
            <span className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-xs">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}
