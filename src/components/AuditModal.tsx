import React from 'react';
import { X } from 'lucide-react';

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
}

export default function AuditModal({ isOpen, onClose, selectedTier }: AuditModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex items-center justify-center">
      <div className="relative w-full max-w-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] shadow-2xl rounded-2xl p-8 z-50">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <X size={24} />
        </button>
        <h2 className="text-2xl font-semibold text-[#1BC311] mb-6">Initiate Architecture Review</h2>
        
        {selectedTier && <p className="text-[#E2E2E2] mb-4">Selected Tier: {selectedTier}</p>}
        
        <form className="flex flex-col">
          <div>
            <label className="block text-sm font-medium text-[#E2E2E2] mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full bg-white/[0.05] border border-white/10 rounded-lg p-3 text-white mb-4 outline-none focus:border-white/[0.2] transition-colors"
              placeholder="John Doe"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[#E2E2E2] mb-1">
              Corporate Email
            </label>
            <input
              type="email"
              className="w-full bg-white/[0.05] border border-white/10 rounded-lg p-3 text-white mb-4 outline-none focus:border-white/[0.2] transition-colors"
              placeholder="executive@company.com"
            />
          </div>
          <button
            type="button"
            onClick={onClose}
            className="mt-2 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-colors cursor-pointer"
          >
            Submit Audit
          </button>
        </form>
      </div>
    </div>
  );
}
