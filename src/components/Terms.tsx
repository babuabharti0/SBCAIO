import React from 'react';

export default function Terms() {
  return (
    <section className="relative w-full min-h-screen bg-transparent py-24 px-4 sm:px-8 flex items-start justify-center">
      <div className="relative max-w-4xl w-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] shadow-2xl rounded-3xl p-8 sm:p-12 overflow-hidden">
        <h1 className="text-3xl md:text-4xl font-semibold text-[#1BC311] tracking-tight mb-8 border-b border-white/10 pb-6">
          TERMS AND CONDITIONS
        </h1>
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#E2E2E2] mb-4">
          Last Updated: July 2026
        </p>

        <h2 className="text-lg font-semibold text-[#1BC311] mt-8 mb-3 uppercase tracking-wider">
          1. AGREEMENT TO TERMS
        </h2>
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#E2E2E2] mb-4">
          These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("Client", "you", or "your") and the operators of this platform ("Company", "we", "us", or "our"), concerning your access to and use of our website, as well as any other media form, media channel, mobile website, or application related, linked, or otherwise connected thereto (collectively, the "Site"). You agree that by accessing the Site and engaging our Fractional CAIO, middleware, or algorithmic services, you have read, understood, and agreed to be bound by all of these Terms and Conditions. <span className="text-[#E2E2E2] font-medium">IF YOU DO NOT AGREE WITH ALL OF THESE TERMS AND CONDITIONS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND MUST DISCONTINUE USE IMMEDIATELY.</span>
        </p>

        <h2 className="text-lg font-semibold text-[#1BC311] mt-8 mb-3 uppercase tracking-wider">
          2. INTELLECTUAL PROPERTY RIGHTS
        </h2>
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#E2E2E2] mb-4">
          Unless otherwise indicated, the Site and all core operational systems, including but not limited to proprietary vector databases, n8n automation architectures, algorithmic feedback loops, source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various other intellectual property rights and unfair competition laws. The provisioning of a service, including bespoke LLM fine-tuning or API integrations, does not transfer ownership of the underlying architectural codebase to the Client unless explicitly stated in a separate Enterprise Master Service Agreement (MSA).
        </p>

        <h2 className="text-lg font-semibold text-[#1BC311] mt-8 mb-3 uppercase tracking-wider">
          3. SERVICE PROVISION AND OPERATIONAL SLA
        </h2>
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#E2E2E2] mb-4">
          The Company engineers autonomous systems to reduce manual operational load. However, the Client acknowledges that artificial intelligence, machine learning models, and API-reliant middleware are subject to third-party outages, rate limits, and probabilistic outputs.
        </p>
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#E2E2E2] mb-4">
          3.1. Liability of Output: We do not warrant that the results obtained from the use of our algorithmic infrastructure will be fully error-free, accurate, or reliable. The Company shall not be held liable for any financial bleed, data loss, or operational downtime resulting from third-party API deprecations or algorithmic hallucinations.
        </p>
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#E2E2E2] mb-4">
          3.2. Operational Hours and Boundaries: To ensure the highest standardized quality of service and infrastructure management, all direct support, maintenance, and system diagnostics are strictly confined to standard operating hours. Support queries are processed within a strict eight-hour daily operational window. Demands for immediate, out-of-hours intervention fall outside standard retainers and will be categorically ignored unless governed by a separate Elite Tier SLA.
        </p>

        <h2 className="text-lg font-semibold text-[#1BC311] mt-8 mb-3 uppercase tracking-wider">
          4. LIMITATION OF LIABILITY
        </h2>
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#E2E2E2] font-medium mb-4">
          IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE OR OUR ALGORITHMIC INFRASTRUCTURE, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO THE AMOUNT PAID, IF ANY, BY YOU TO US DURING THE ONE (1) MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION ARISING.
        </p>

        <h2 className="text-lg font-semibold text-[#1BC311] mt-8 mb-3 uppercase tracking-wider">
          5. GOVERNING LAW AND DISPUTE RESOLUTION
        </h2>
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#E2E2E2] mb-4">
          These Terms shall be governed by and defined following the laws of India. The Company and yourself irrevocably consent that the courts of Lucknow, Uttar Pradesh, India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms. Any legal action or proceeding related to this platform shall be brought exclusively in said courts, waiving any jurisdictional, venue, or inconvenient forum objections to such courts.
        </p>

        <h2 className="text-lg font-semibold text-[#1BC311] mt-8 mb-3 uppercase tracking-wider">
          6. INDEMNIFICATION
        </h2>
        <p className="text-[14px] md:text-[15px] leading-relaxed text-[#E2E2E2] mb-4">
          You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) your use of the Site; (2) breach of these Terms and Conditions; (3) any breach of your representations and warranties set forth in these Terms and Conditions; (4) your violation of the rights of a third party, including but not limited to intellectual property rights.
        </p>
      </div>
    </section>
  );
}
