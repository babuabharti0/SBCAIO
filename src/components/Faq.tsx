import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is a Fractional CAIO and why do we need one?",
    answer: "You don't need another SaaS tool; you need an architectural overhaul. A Fractional Chief AI Officer provides executive-level artificial intelligence strategy and engineering without the $300,000+ full-time overhead. We build, deploy, and maintain autonomous systems that replace manual administrative load."
  },
  {
    question: "How is this different from buying ChatGPT Enterprise for our team?",
    answer: "ChatGPT is a conversational interface that requires human prompting. We build deterministic execution pipelines (using n8n, local vector databases, and MCP) that operate without human intervention. We build systems that do the work, not systems that talk about the work."
  },
  {
    question: "What exactly is an \"Operational Bleed Audit\"?",
    answer: "It is a mathematical diagnostic of your software waste. We map your current manual data entry, disconnected CRM routing, and API sprawl, and calculate the exact capital you are bleeding monthly. We then engineer a precise automation blueprint to reclaim that margin."
  },
  {
    question: "How do you handle data sovereignty and security?",
    answer: "Total isolation. We utilize localized vector databases and self-hosted enterprise execution pipelines. Your proprietary sales history, SOPs, and financial data are never used to train public models."
  },
  {
    question: "What is the deployment timeline?",
    answer: "We operate on a strict 30-Day Foundation sprint. Within 30 days, we conduct the systems diagnostic, map data sovereignty, and deploy one high-ROI core autonomous workflow pilot to prove empirical financial value before scaling."
  },
  {
    question: "What are your support SLAs and operational hours?",
    answer: "High-performance systems require rigorous engineering, not midnight panic fixes. To maintain standardized quality, all system diagnostics and support are executed within a strict 8-hour daily operational window. Emergency out-of-hours intervention is exclusively reserved for Enterprise Elite retainers."
  },
  {
    question: "Will this replace my administrative staff?",
    answer: "It reallocates them. We engineer autonomous systems to handle the robotic, repetitive data entry, driving your human capital away from manual fatigue and toward high-leverage, revenue-generating stewardship."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative w-full bg-transparent py-24 px-4 sm:px-8 flex justify-center">
      <div className="relative max-w-4xl w-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] shadow-2xl rounded-3xl p-8 sm:p-12 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1BC311] tracking-tight mb-10 text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="flex flex-col">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="flex flex-col">
                <button
                  onClick={() => toggleOpen(index)}
                  className="w-full text-left py-5 flex justify-between items-center text-[#E2E2E2] font-medium text-[16px] md:text-[17px] border-b border-white/10 hover:text-white/80 transition-colors focus:outline-none group cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    strokeWidth={1.5} 
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'group-hover:translate-y-0.5'}`} 
                  />
                </button>
                <div 
                  className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[14px] md:text-[15px] text-[#E2E2E2] leading-relaxed pt-2 pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col items-center text-center">
          <h3 className="text-[16px] font-medium text-[#1BC311] mb-2">Have a highly specific architectural question?</h3>
          <p className="text-[14px] text-[#E2E2E2] mb-6 max-w-md">
            Our engineering team is available for deep-dive technical reviews. Route your inquiry to our lead architects.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black text-[14px] font-semibold hover:bg-gray-200 transition-colors duration-200"
          >
            Contact Operational Team →
          </a>
        </div>
      </div>
    </section>
  );
}
