import React from 'react';
import { MotionSection } from '../components/Motion';

export const TermsAndConditions = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24 px-6 relative">
       {/* Background gradient blur to maintain consistency */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <MotionSection className="relative z-10 max-w-3xl mx-auto space-y-12">
        <div className="space-y-4 text-center md:text-left border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-black">Terms & Conditions — SBCAIO</h1>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Effective Date: April 26, 2026</p>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed max-w-3xl">
          <p>By using SBCAIO services, you agree to the following:</p>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">1. Services</h2>
            <p>We provide AI infrastructure and advisory services. No guaranteed results.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">2. No Liability</h2>
            <p>We are not responsible for business losses or decisions made using our services.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">3. No Guarantees</h2>
            <p>No promises of ROI, performance, or uptime.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">4. User Responsibility</h2>
            <p>You are responsible for your business decisions and data accuracy.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">5. Intellectual Property</h2>
            <p>All materials belong to SBCAIO.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">6. Payments</h2>
            <p>All payments are final unless stated otherwise.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">7. Termination</h2>
            <p>We may refuse or terminate service at any time.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">8. Limitation of Liability</h2>
            <p>We are not liable for indirect or consequential damages.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">9. Indemnification</h2>
            <p>You agree to hold SBCAIO harmless from claims arising from your use.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">10. Jurisdiction</h2>
            <p>Governed under applicable laws of your operating jurisdiction.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">11. Changes</h2>
            <p>We may update terms anytime.</p>
          </section>

          <section className="space-y-3">
            <h2 className="text-2xl font-bold text-white">12. Contact</h2>
            <p>
              Email: <a href="mailto:ceo@sbcaio.com" className="text-primary hover:underline">ceo@sbcaio.com</a><br />
              Phone: <a href="tel:+17253046728" className="text-primary hover:underline">(725) 304-6728</a>
            </p>
          </section>
        </div>
      </MotionSection>
    </div>
  );
};
