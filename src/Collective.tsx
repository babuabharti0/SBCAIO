import React from 'react';
import { Link } from 'react-router-dom';

export default function Collective() {
  return (
    <div className="relative min-h-screen w-full pt-32 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-12">
          <span>←</span> Return to Architecture
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
          The Autonomy Collective
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="relative flex flex-col bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] shadow-2xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Ole</h2>
            <p className="text-sm font-bold text-green-500 uppercase tracking-wider mb-6">
              Director of Client Acquisition
            </p>
            <p className="text-[#E2E2E2]/70 leading-relaxed">
              Directs revenue architecture, outbound campaign infrastructure, and high-level enterprise integration. Focuses on client acquisition and growth.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative flex flex-col bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] shadow-2xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Daniel</h2>
            <p className="text-sm font-bold text-green-500 uppercase tracking-wider mb-6">
              Content Architecture Lead
            </p>
            <p className="text-[#E2E2E2]/70 leading-relaxed">
              Engineers the platform's digital footprint, visual authority, and online brand ecosystems.
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative flex flex-col bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] shadow-2xl rounded-3xl p-8">
            <h2 className="text-2xl font-bold text-white mb-2">Inyene</h2>
            <p className="text-sm font-bold text-green-500 uppercase tracking-wider mb-6">
              Head of Development
            </p>
            <p className="text-[#E2E2E2]/70 leading-relaxed">
              Leads technical execution, algorithmic infrastructure, and decentralized systems engineering.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
