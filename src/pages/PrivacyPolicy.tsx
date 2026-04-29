import React from 'react';
import { MotionSection } from '../components/Motion';

export const PrivacyPolicy = () => {
  return (
    <div className="bg-black min-h-screen text-white pt-32 pb-24 px-6 relative">
       {/* Background gradient blur to maintain consistency */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

      <MotionSection className="relative z-10 max-w-3xl mx-auto space-y-12">
        <div className="space-y-4 text-center md:text-left border-b border-white/10 pb-8">
          <h1 className="text-4xl md:text-5xl font-black">Privacy Policy — SBCAIO</h1>
          <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Effective Date: April 26, 2026</p>
        </div>

        <div className="space-y-10 text-gray-300 leading-relaxed max-w-3xl">
            <p>
              SBCAIO ("Company", "we", "our", "us") respects your privacy and is committed to protecting your personal data.
            </p>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">1. Information We Collect</h2>
              <p>We may collect: name, email address, phone number, business information, and any data submitted via forms.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">2. How We Use Information</h2>
              <p>To respond to inquiries, provide services, improve systems, and communicate updates.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">3. Data Sharing</h2>
              <p>We may share data with service providers or authorities if legally required.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">4. Data Retention</h2>
              <p>We retain data only as long as necessary.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">5. Security</h2>
              <p>We use reasonable safeguards but cannot guarantee absolute security.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">6. Your Rights</h2>
              <p>
                You may request access, correction, or deletion of your data.<br />
                Contact: <a href="mailto:ceo@sbcaio.com" className="text-primary hover:underline">ceo@sbcaio.com</a>
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">7. Cookies</h2>
              <p>We may use cookies for analytics and performance.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">8. Third-Party Links</h2>
              <p>We are not responsible for external websites.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">9. Limitation of Liability</h2>
              <p>We are not liable for unauthorized access or third-party failures.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">10. Changes</h2>
              <p>We may update this policy anytime.</p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-bold text-white">11. Contact</h2>
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
