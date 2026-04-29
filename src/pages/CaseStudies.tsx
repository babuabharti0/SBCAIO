import React from 'react';
import { MotionSection, MotionItem } from '../components/Motion';
import { Hero3DBackground } from '../components/Hero3DBackground';
import { Button } from '../components/Button';

export const CaseStudies = () => {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <MotionSection className="relative pt-32 pb-20 overflow-hidden flex flex-col justify-center">
        <Hero3DBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center space-y-8">
          <MotionItem elementType="h1" className="text-4xl md:text-5xl lg:text-6xl font-black">
            Proof Over Promises. See What Works.
          </MotionItem>
          <MotionItem elementType="p" className="text-xl md:text-2xl text-primary font-bold">
            Real KPIs, proven results, trusted partners, and clear strategies—everything you need to move forward with confidence.
          </MotionItem>
          <MotionItem elementType="h2" className="text-3xl font-bold">
            See the Work. Measure the Impact.
          </MotionItem>
          <MotionItem elementType="h2" className="text-3xl font-bold">
            Proven Results. Transparent Systems.
          </MotionItem>
          <div className="text-lg text-gray-300 space-y-6 max-w-4xl mx-auto text-left">
            <MotionItem elementType="p">
              Explore how we transform complex challenges into scalable solutions—built for performance, precision, and measurable ROI. Every portfolio includes before-and-after comparisons, real KPIs, client dashboards, and visual walkthroughs to show how our systems perform in real business environments.
            </MotionItem>
            <MotionItem elementType="p">
              From CRM integrations to AI-driven funnels, web development to automation—we highlight the results that matter. When available, you’ll also find verified testimonials and full case studies tied to specific outcomes.
            </MotionItem>
          </div>
          <MotionItem elementType="p" className="text-2xl font-bold pt-8">
            See the systems in action.
          </MotionItem>
          <MotionItem className="flex justify-center gap-6 pb-20">
            <Button href="#" variant="primary">View Featured Work</Button>
            <Button href="/contact" variant="outline">Request a Walkthrough</Button>
          </MotionItem>
        </div>
      </MotionSection>

      <MotionSection className="py-24 bg-gray-900 border-t border-white/10">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
          <MotionItem elementType="h2" className="text-3xl font-black">
            Expert Insights Launching Soon
          </MotionItem>
          <MotionItem elementType="p" className="text-gray-400 text-lg">
            Our insights section is under development. Soon, you’ll find expert articles on SEO, web development, automation, AI strategy, and more—designed to help small businesses grow smarter and faster.
          </MotionItem>
          <MotionItem elementType="p" className="text-gray-400 text-lg font-bold">
            Stay tuned.
          </MotionItem>
          <MotionItem className="pt-12 p-8 bg-black/50 rounded-3xl border border-white/5 inline-block">
            <p className="text-xl font-bold text-white mb-6">🔔 Want early access?</p>
            <p className="text-gray-400 mb-6">Join our list to get notified the moment new content goes live.</p>
            <Button href="/contact" variant="primary">Subscribe for Updates</Button>
          </MotionItem>
        </div>
      </MotionSection>
    </div>
  );
};
