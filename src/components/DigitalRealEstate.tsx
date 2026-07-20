import React, { useState, useEffect } from 'react';
import { Phone, Check, ChevronRight, Sparkles, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function DigitalRealEstate() {
  const [activeSector, setActiveSector] = useState<number>(0);
  const [isRouting, setIsRouting] = useState<boolean>(false);
  const [routedCount, setRoutedCount] = useState<number>(1824);
  const [lastTenantName, setLastTenantName] = useState<string>('Apex Roofing Partners');

  const sectors = [
    {
      id: 'roofing',
      title: 'Specialized Commercial Roofing',
      leadValue: '$150',
      ticketSize: '$12,000',
      tenant: 'Apex Roofing Partners',
      location: 'Dallas-Fort Worth Metroplex',
      volume: '94 calls / mo',
      calls: ['Urgent flat roof leakage', 'Commercial warehouse estimate', 'TPO roof replacement quote'],
    },
    {
      id: 'epoxy',
      title: 'Concrete Leveling & Epoxy Logistics',
      leadValue: '$80',
      ticketSize: '$4,500',
      tenant: 'Vanguard Industrial Floors',
      location: 'Chicagoland Area',
      volume: '118 calls / mo',
      calls: ['Warehouse floor coating request', 'Driveway crack level estimate', 'Commercial garage floor coating'],
    },
    {
      id: 'tree',
      title: 'Emergency Tree Infrastructure',
      leadValue: '$95',
      ticketSize: '$3,200',
      tenant: 'Metro Tree & Crane Services',
      location: 'Metro Atlanta',
      volume: '142 calls / mo',
      calls: ['Post-storm oak tree removal', 'Commercial property land clearance', 'Stump removal urgent dispatch'],
    },
  ];

  // Trigger simulated lead routing
  const triggerRoutingSim = () => {
    if (isRouting) return;
    setIsRouting(true);
    setTimeout(() => {
      setIsRouting(false);
      setRoutedCount((prev) => prev + 1);
      setLastTenantName(sectors[activeSector].tenant);
    }, 2000);
  };

  return (
    <section
      id="real-estate"
      className="px-4 md:px-6 py-12 md:py-28 relative overflow-hidden bg-transparent transition-colors duration-300"
    >
      <div className="max-w-[88rem] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column (Content) */}
          <div id="real-estate-left" className="lg:col-span-5">
            <span
              id="real-estate-eyebrow"
              className="text-xs uppercase tracking-widest text-[#E2E2E2] font-bold block mb-3 md:mb-4"
            >
              Dual-Revenue Stability Engine
            </span>
            <h2
              id="real-estate-title"
              className="text-[#1BC311] text-2xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] mb-4 md:mb-6 tracking-[-0.04em]"
            >
              Digital Real Estate
              <br />
              Asset Leasing.
            </h2>
            <p
              id="real-estate-paragraph"
              className="text-[#E2E2E2] text-sm md:text-lg leading-relaxed mb-6 md:mb-8 max-w-lg"
            >
              We engineer and rank hyper-local, exact-match digital lead-generation assets for high-ticket service sectors. Inbound, urgent commercial phone calls are captured and routed directly to exclusive market tenants.
            </p>

            {/* Selector list */}
            <div id="real-estate-selectors" className="space-y-3">
              {sectors.map((sec, idx) => (
                <button
                  key={sec.id}
                  id={`sector-tab-${sec.id}`}
                  onClick={() => {
                    if (!isRouting) {
                      setActiveSector(idx);
                    }
                  }}
                  
                  className={`w-full text-left p-3.5 md:p-4 flex items-center justify-between transition-all duration-300 cursor-pointer relative bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] shadow-2xl rounded-2xl overflow-hidden ${
                    activeSector === idx
                      ? 'scale-[1.02] shadow-md shadow-black/5'
                      : 'hover:scale-[1.01]'
                  }`}
                >
                  {/* Custom active ambient background glow */}
                  {activeSector === idx && (
                    <div className="absolute inset-0 bg-neutral-900/[0.04] dark:bg-white/[0.08] pointer-events-none z-0 animate-fade-in" />
                  )}
                  {/* Active 3D glass sheen border */}
                  {activeSector === idx && (
                    <div className="absolute inset-0 border border-black/40 dark:border-white/30 rounded-2xl pointer-events-none z-10" />
                  )}
                  
                  {/* Left-edge glowing indicator pill */}
                  <div 
                    className={`absolute left-0 top-3 bottom-3 w-1 rounded-r-md transition-all duration-300 ${
                      activeSector === idx 
                        ? 'bg-black dark:bg-white scale-y-100 opacity-100' 
                        : 'bg-transparent scale-y-50 opacity-0'
                    }`} 
                  />

                  <div className="flex items-center gap-3 md:gap-4 relative z-10 pl-1.5">
                    <span className={`text-sm font-semibold font-mono transition-colors duration-300 ${
                      activeSector === idx ? 'text-white' : 'text-white/40'
                    }`}>
                      0{idx + 1}
                    </span>
                    <span className={`transition-colors duration-300 text-xs sm:text-sm md:text-base ${
                      activeSector === idx ? 'text-white font-semibold' : 'text-white/70 font-normal'
                    }`}>
                      {sec.title}
                    </span>
                  </div>
                  <ChevronRight
                    size={16}
                    strokeWidth={activeSector === idx ? 2 : 1.5}
                    className={`transition-all duration-300 shrink-0 relative z-10 ${
                      activeSector === idx ? 'translate-x-1 text-white' : 'text-white/40'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column (Visual Card Block) */}
          <div id="real-estate-right" className="lg:col-span-7" style={{ perspective: 1200 }}>
            {/* Liquid Glass Card Wrapper with physical 3D reveal */}
            <motion.div
              id="real-estate-dashboard-card"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)', rotateX: 15 }}
              whileInView={{ opacity: 1, scale: 1, filter: 'none', rotateX: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: 'spring', damping: 25, stiffness: 120, duration: 0.8 }}
              whileHover={{ y: -2, transition: { type: 'spring', stiffness: 100 } }}
              className="p-4 sm:p-6 md:p-8 relative bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] shadow-2xl rounded-2xl overflow-hidden"
            >
              {/* Header with status */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between mb-6 md:mb-8 pb-4 md:pb-6 border-b border-black/10 dark:border-white/10">
                <div className="flex items-center gap-3">
                  <div>
                    <h4 className="text-sm font-semibold text-[#1BC311] uppercase tracking-wider">
                      Live Telemetry Broker
                    </h4>
                    <p className="text-xs text-[#E2E2E2] font-mono">
                      Routing System v4.1.2
                    </p>
                  </div>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-xs font-semibold text-[#E2E2E2] uppercase">
                    Total Routed Leads
                  </p>
                  <span className="text-lg font-bold text-[#E2E2E2] font-mono">
                    {routedCount}
                  </span>
                </div>
              </div>

              {/* Sub-grid of target sectors metrics */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-4 md:mb-6">
                <div className="p-3 md:p-4 relative bg-white/[0.03] border border-white/[0.04] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] rounded-2xl overflow-hidden">
                  <span className="text-[10px] sm:text-xs text-[#E2E2E2] font-semibold uppercase block mb-1">
                    Avg Lead Value
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#E2E2E2] font-mono">
                    {sectors[activeSector].leadValue}
                  </span>
                </div>
                <div className="p-3 md:p-4 relative bg-white/[0.03] border border-white/[0.04] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] rounded-2xl overflow-hidden">
                  <span className="text-[10px] sm:text-xs text-[#E2E2E2] font-semibold uppercase block mb-1">
                    Avg Ticket Size
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-[#E2E2E2] font-mono">
                    {sectors[activeSector].ticketSize}
                  </span>
                </div>
              </div>

              {/* Details and Live Routing interactive simulator */}
              <div className="mb-4 md:mb-6 p-4 sm:p-5 relative bg-white/[0.03] border border-white/[0.04] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] rounded-2xl overflow-hidden">
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 sm:items-center justify-between mb-4">
                  <span className="text-xs font-semibold text-[#E2E2E2] flex items-center gap-1.5 uppercase">
                    <MapPin size={16} strokeWidth={1.5} className="text-white/40 shrink-0" />
                    Asset Zone: {sectors[activeSector].location}
                  </span>
                  <span className="text-xs font-mono font-bold text-emerald-500 bg-emerald-500/10 dark:bg-emerald-500/20 px-2.5 py-0.5 rounded-full w-fit">
                    {sectors[activeSector].volume}
                  </span>
                </div>

                <h5 className="text-xs sm:text-sm font-semibold text-[#1BC311] uppercase mb-3">
                  Live Dispatch Stream
                </h5>
                <div className="space-y-2.5 mb-5">
                  {sectors[activeSector].calls.map((call, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex items-center gap-2.5 sm:gap-3 p-2.5 md:p-3 relative bg-white/[0.03] border border-white/[0.04] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] rounded-xl overflow-hidden"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-[#E2E2E2]">
                        {call}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Simulated tenant broker info */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 sm:items-center justify-between pt-4 border-t border-black/10 dark:border-white/10">
                  <div>
                    <span className="text-[10px] text-[#E2E2E2] uppercase font-semibold block">
                      Exclusive Tenant Partner
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-[#E2E2E2]">
                      {sectors[activeSector].tenant}
                    </span>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[10px] text-[#E2E2E2] uppercase font-semibold block">
                      Status
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-500 flex items-center gap-1 sm:justify-end">
                      <Check size={16} strokeWidth={1.5} /> Exclusive Leasing Active
                    </span>
                  </div>
                </div>
              </div>

              {/* Lead Routing Simulator Controller */}
              <button
                id="simulate-lead-route-button"
                onClick={triggerRoutingSim}
                disabled={isRouting}
                
                className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/5 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold flex items-center justify-center gap-2 md:gap-3 transition-all duration-300 relative overflow-hidden group cursor-pointer disabled:opacity-80 active:scale-99 shadow-2xl hover:bg-black/5 dark:hover:bg-white/10"
              >
                {isRouting && (
                  <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-500/10 animate-pulse" />
                )}
                <Phone size={18} strokeWidth={1.5} className={isRouting ? 'animate-bounce' : 'group-hover:rotate-12'} />
                <span className="font-semibold text-[#E2E2E2] text-xs sm:text-sm md:text-base">
                  {isRouting ? `Routing Lead...` : 'Simulate Inbound Lead Routing'}
                </span>
                {!isRouting && <ArrowRight size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />}
              </button>

              {/* Counter notifier */}
              <div className="text-center mt-3">
                <span className="text-[11px] text-[#E2E2E2]">
                  Last lead routed: {lastTenantName} • Real-time call logs updated
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
