import React from 'react';
import { Link } from 'react-router-dom';

export default function GlobalFooter() {
  return (
    <footer className="relative w-full bg-transparent py-12 px-4 sm:px-8 border-t border-white/[0.08] mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h4 className="text-[#1BC311] font-semibold text-lg mb-4">SBCAIO</h4>
          <p className="text-[#E2E2E2] text-sm leading-relaxed">
            Engineered algorithmic infrastructure replacing fragmented software spend with hard operational margins.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">Contact</h4>
          <div className="flex flex-col gap-4">
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Email</p>
              <a href="mailto:ceo@sbcaio.com" className="text-white/70 text-sm hover:text-white transition-colors">
                ceo@sbcaio.com
              </a>
            </div>
            <div>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Phone</p>
              <a href="tel:7253046728" className="text-white/70 text-sm hover:text-white transition-colors">
                (725) 304-6728
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-[#1BC311] font-semibold mb-4 uppercase tracking-wider text-sm">Operations</h4>
          <div className="flex flex-col gap-2">
            <p className="text-[#E2E2E2] text-sm leading-relaxed font-bold">100% Decentralized Architecture</p>
            <p className="text-[#E2E2E2] text-sm leading-relaxed">Engineered by a distributed global team. Operating without borders.</p>
          </div>
        </div>

        <div>
          <h4 className="text-[#1BC311] font-semibold mb-4 uppercase tracking-wider text-sm">SLA & Legal</h4>
          <p className="text-[#E2E2E2] text-sm mb-4 leading-relaxed">Asynchronous Global Support:<br/>Always-On Pipeline Routing.</p>
          <div className="flex flex-col space-y-2">
            <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between">
        <p className="text-[#E2E2E2] text-xs">© 2026 Aetheris. All rights reserved.</p>
      </div>
    </footer>
  );
}
