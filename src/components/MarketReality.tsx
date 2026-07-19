import React from 'react';
import { Layers, Database, Cpu, TrendingUp, AlertTriangle, Workflow } from 'lucide-react';
import { motion } from 'motion/react';

export default function MarketReality() {
  return (
    <section
      id="architecture"
      className="px-4 md:px-6 py-12 md:py-28 relative overflow-hidden bg-transparent transition-colors duration-300"
    >
      <div className="max-w-[88rem] mx-auto relative z-10">
        {/* Row 1: 2-Column High-Contrast Header Grid */}
        <div
          id="market-header-grid"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-12 md:mb-24 items-start"
        >
          {/* Left Column */}
          <div id="market-header-left" className="lg:col-span-5">
            <h2
              id="market-title"
              className="text-[#1BC311] text-3xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-[-0.03em]"
            >
              We Build Moats,
              <br />
              Not Chatbots.
            </h2>
          </div>
          {/* Right Column */}
          <div id="market-header-right" className="lg:col-span-7 pt-2 lg:pt-8">
            <p
              id="market-description"
              className="text-[#E2E2E2] text-base sm:text-xl lg:text-2xl leading-relaxed font-normal"
            >
              <strong className="text-[#E2E2E2] font-medium">76% of businesses fail</strong> to embed AI into core operations, leaving them trapped under manual labor costs and tool sprawl. <span className="text-[#E2E2E2]">SBCAIO</span> structures your proprietary operational data loop directly into enterprise-grade middleware.
            </p>
          </div>
        </div>

        <motion.div
          id="bento-grid-cards"
          style={{ perspective: 1200 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8"
        >
          {/* Card 1: Intelligent Architecture */}
          <motion.div
            id="bento-card-autonomous"
            variants={{
              hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)', rotateX: 15 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                filter: 'none', 
                rotateX: 0,
                transition: { type: 'spring', damping: 25, stiffness: 120, duration: 0.8 }
              }
            }}
            whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
            
            className="group relative flex flex-col justify-between p-5 md:p-10 min-h-[160px] md:min-h-80 cursor-pointer bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] shadow-2xl rounded-2xl overflow-hidden md:rounded-3xl"
          >
            {/* Top Area */}
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1BC311] tracking-tight mb-2 md:mb-4">
                Autonomous Middleware
              </h3>
            </div>
            {/* Bottom Area */}
            <p className="relative z-10 text-[#E2E2E2] text-xs sm:text-sm md:text-base leading-relaxed font-normal mt-2 md:mt-4">
              Self-hosted enterprise execution pipelines built on the Model Context Protocol (MCP) to prevent brittle, breaking APIs.
            </p>
          </motion.div>

          {/* Card 2: Proprietary Data Loops */}
          <motion.div
            id="bento-card-information"
            variants={{
              hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)', rotateX: 15 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                filter: 'none', 
                rotateX: 0,
                transition: { type: 'spring', damping: 25, stiffness: 120, duration: 0.8 }
              }
            }}
            whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
            
            className="group relative flex flex-col justify-between p-5 md:p-10 min-h-[160px] md:min-h-80 cursor-pointer bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] shadow-2xl rounded-2xl overflow-hidden md:rounded-3xl"
          >
            {/* Top Area */}
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1BC311] tracking-tight mb-2 md:mb-4">
                Information Gain
              </h3>
            </div>
            {/* Bottom Area */}
            <p className="relative z-10 text-[#E2E2E2] text-xs sm:text-sm md:text-base leading-relaxed font-normal mt-2 md:mt-4">
              Localized Vector Databases converting your sales history and procedures into non-commoditized, secure RAG execution layers.
            </p>
          </motion.div>

          {/* Card 3: Deep Systems Integration */}
          <motion.div
            id="bento-card-embedded"
            variants={{
              hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)', rotateX: 15 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                filter: 'none', 
                rotateX: 0,
                transition: { type: 'spring', damping: 25, stiffness: 120, duration: 0.8 }
              }
            }}
            whileHover={{ y: -6, scale: 1.02, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
            
            className="group relative flex flex-col justify-between p-5 md:p-10 min-h-[160px] md:min-h-80 cursor-pointer bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] shadow-2xl rounded-2xl overflow-hidden md:rounded-3xl"
          >
            {/* Top Area */}
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1BC311] tracking-tight mb-2 md:mb-4">
                Zero-Silo Embeddedness
              </h3>
            </div>
            {/* Bottom Area */}
            <p className="relative z-10 text-[#E2E2E2] text-xs sm:text-sm md:text-base leading-relaxed font-normal mt-2 md:mt-4">
              Deep configurations within internal ERP and financial suites, driving human <span className="text-[#04bf0d]">capital</span> away from repetitive entry toward revenue.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
