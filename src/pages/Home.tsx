import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { MotionSection, MotionItem, TiltCard } from '../components/Motion';
import { Hero3DBackground } from '../components/Hero3DBackground';
import { Button } from '../components/Button';
import { MotionIcon } from '../components/MotionIcon';

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-2xl mb-4 bg-white shadow-sm overflow-hidden transition-all duration-300">
      <button onClick={() => setIsOpen(!isOpen)} className="w-full group text-left px-6 py-5 flex justify-between items-center focus:outline-none focus:bg-gray-50/50 hover:bg-gray-50/50">
        <span className="font-bold text-lg text-gray-900 pr-8">{question}</span>
        <MotionIcon type="shift">
          <ChevronDown className={`w-5 h-5 text-primary transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
        </MotionIcon>
      </button>
      <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors">{answer}</p>
      </div>
    </div>
  );
};

export const Home = () => {
  return (
    <div className="relative bg-black">
      <div className="relative z-0">
        <MotionSection className="relative pt-40 pb-20 overflow-hidden text-white min-h-screen flex flex-col justify-center bg-transparent">
          <Hero3DBackground />
          <div className="max-w-4xl mx-auto px-6 text-center relative z-20 space-y-6">
            <MotionItem elementType="h1" className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              Stay Ahead. Build Smarter. Scale Faster.
            </MotionItem>
            <MotionItem elementType="p" className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
              You have a CEO. You have a CFO. You have a COO.<br />
              But who’s leading your AI transformation?
            </MotionItem>
            <MotionItem className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Button href="/get-started" variant="primary">Book My AI Consultation</Button>
            </MotionItem>
          </div>
        </MotionSection>

        <MotionSection className="py-24 bg-gray-50">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <MotionItem elementType="h2" className="text-4xl md:text-5xl font-black mb-6">The AI Gap Is Growing</MotionItem>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>AI is transforming business faster than most businesses can adapt.</p>
              <p>Businesses don’t know where to begin or how to use it strategically.</p>
              <p>Without the right infrastructure and strategic guidance, growth slows and opportunities slip away.</p>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <MotionItem elementType="h2" className="text-4xl md:text-5xl font-black mb-6">Your Chief AI Officer Small Business Solutions</MotionItem>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <h3 className="text-xl font-bold mb-4 font-orbitron">Your Automated and Personalized AI Secretary</h3>
                <p className="text-gray-600 mb-6">Your AI Secretary adapts to every layer of your business—from executive leadership to admin, HR, marketing, and frontline staff.</p>
                <Button href="/services" variant="outline">Learn More</Button>
              </TiltCard>
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <h3 className="text-xl font-bold mb-4 font-orbitron">Centralized Processes and Oversight, Designed to Enhance Conversions and</h3>
                <p className="text-gray-600 mb-6">Transform your CRM into a performance engine—tracking lead behavior, automating follow-ups, and keeping every team aligned in real time. Projects move faster, campaigns stay on track, and results are always measurable.</p>
              </TiltCard>
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <h3 className="text-xl font-bold mb-4 font-orbitron">Funnels Aligned With Your AI Campaign</h3>
                <p className="text-gray-600 mb-6">Dynamic sales funnels built around your marketing strategy. Each step is A/B tested to create high-conversion paths that guide leads smoothly from start to finish.</p>
                <Button href="/services" variant="outline">Discover What’s Included</Button>
              </TiltCard>
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <h3 className="text-xl font-bold mb-4 font-orbitron">Email Automation Powered by AI Optimization</h3>
                <p className="text-gray-600 mb-6">Your AI Secretary delivers email campaigns with persuasive copy, real-time behavior tracking, and hands-free execution to refine every send. Drive results by nurturing leads on autopilot while staying aligned with live campaigns.</p>
                <Button href="/services" variant="outline">Explore the Solution</Button>
              </TiltCard>
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <h3 className="text-xl font-bold mb-4 font-orbitron">Customize Your Paid Ads Campaigns</h3>
                <p className="text-gray-600 mb-6">Grow your paid ads using integrated strategies that connect organic, affiliate, and email marketing into a unified retargeting framework. Predictive analytics protect your budget early, reducing waste and strengthening your advantage.</p>
                <Button href="/services" variant="outline">See How It Works</Button>
              </TiltCard>
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <h3 className="text-xl font-bold mb-4 font-orbitron">Organic Marketing That Builds Long-Term Trust</h3>
                <p className="text-gray-600 mb-6">We help you grow through strategic organic content, affiliate partnerships, influencer sponsorships, and personalized outreach. Every move is guided by data—so your brand stays visible, trusted, and active across platforms like Instagram, LinkedIn, and beyond.</p>
                <Button href="/services" variant="outline">Learn More</Button>
              </TiltCard>
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <h3 className="text-xl font-bold mb-4 font-orbitron">Leads Into Booked Calls or Services</h3>
                <p className="text-gray-600 mb-6">Whether it’s a cold or hot lead—text, email, or DM, we help you respond quickly and book faster. AI secretaries qualify leads and schedule discovery calls or paid services instantly—no ghosting, no delays. Every qualified message turns into a scheduled call or service.</p>
                <Button href="/services" variant="outline">Explore the Solution</Button>
              </TiltCard>
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <h3 className="text-xl font-bold mb-4 font-orbitron">End-to-End Website Development Systems</h3>
                <p className="text-gray-600 mb-6">We build websites using predictive analytics, performance-driven AI, heat mapping, and complete SEO from day one. Launch a site that attracts stronger traffic, converts more leads, and fuels measurable growth.</p>
              </TiltCard>
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <h3 className="text-xl font-bold mb-4 font-orbitron">Strategic SEO for Scalable Visibility</h3>
                <p className="text-gray-600 mb-6">We focus on the 10% of SEO that drives 90% of your organic growth.<br/>Connect your website and content to the platforms that matter—Google, LinkedIn, Facebook, YouTube, and more. We make sure your content gets found, ranked, and clicked by the right people.</p>
              </TiltCard>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="py-24 bg-gray-50 border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <MotionItem elementType="h2" className="text-4xl font-black mb-6">Tailored for Your Business. Structured for Results.</MotionItem>
            <p className="text-gray-600 mb-16">Every AI plan is fully customizable — but here’s what we typically recommend based on where you are in your journey.</p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <p className="font-bold text-lg mb-4 text-primary">Start Small. Automate What Counts. See Real Results.</p>
                <p className="text-gray-600 mb-6">Designed for founders and micro teams, this plan provides a dedicated Chief AI Officer (CAIO) and your own AI Secretary to streamline lead generation, rapid response, and funnel execution without the overhead.</p>
                <p className="text-gray-600 mb-6">○ Save 2–4 hours per person every week  ○ Replace 1 full-time + 1 part-time employee</p>
                <p className="text-gray-900 font-bold mb-6">Average Investment: $10K–$30K/year</p>
              </TiltCard>
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <p className="font-bold text-lg mb-4 text-primary">For Teams Outgrowing Their Systems</p>
                <p className="text-gray-600 mb-6">This is where structure eliminates stress.<br/>You’ll get end-to-end marketing engines, operational workflows, and people systems, designed to support you and your growth.<br/>Your Chief AI Officer constructs systems around your company’s evolving needs—aligning every moving part so nothing slows you down.</p>
                <p className="text-gray-600 mb-6">○ Save 2–4 hours per person every week  ○ Replace up to 3 roles with a single system</p>
                <p className="text-gray-900 font-bold mb-6">Average Investment: $30K–$60K/year</p>
              </TiltCard>
              <TiltCard className="bg-white p-8 rounded-3xl shadow-xl border border-black/5">
                <p className="font-bold text-lg mb-4 text-primary">For Innovative Industry Leaders Focused on Staying Ahead of the Competition</p>
                <p className="text-gray-600 mb-6">You’ve secured your position. Now it's time to leverage AI.<br/>Your CAIO delivers fully integrated AI systems with executive-level reporting tailored to each department head.<br/>Everything runs in sync—from unified data to coordinated cross-team execution.</p>
                <p className="text-gray-600 mb-6">○ Save 40+ man hours a week across departments  ○ Replace 5+ roles with one centralized system</p>
                <p className="text-gray-900 font-bold mb-6">Average Investment: $60K+/year</p>
              </TiltCard>
            </div>
            <div className="mt-16 text-center">
              <p className="text-xl font-bold mb-6">Get a Customized Plan for Your Business</p>
              <Button href="/get-started" variant="primary">Book My AI Consultation</Button>
            </div>
          </div>
        </MotionSection>

        <MotionSection className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <MotionItem elementType="h2" className="text-4xl md:text-5xl font-black mb-16 text-center">FAQ's</MotionItem>
            <div className="space-y-4">
              <FAQItem question="1. What services will I receive with my plan?" answer="A: Services vary depending on your bottlenecks and growth needs analysis. Each plan is custom-built to solve the specific challenges holding your business back." />
              <FAQItem question="2. Can your systems integrate with the tools I already use?" answer="A: Yes. We work with most platforms using APIs, Make, Zapier, or custom integrations. If a direct connection isn’t available, we’ll find a practical solution." />
              <FAQItem question="3. Will I be left on my own after setup?" answer="A: No. Your Chief AI Officer is like a full-time employee (or five) — without the full-time costs. They're with you through setup, implementation, reporting, and ongoing optimization." />
              <FAQItem question="4. How quickly can I get started?" answer="A: You can get started immediately. Before you even sign up with us, we conduct a growth assessment and define clear milestones, timeframes, and expected outcomes. Smaller systems may be fully launched in under 2 weeks, while full builds are rolled out in stages and typically completed within 30–90 days, depending on your needs." />
              <FAQItem question="5. Do I have to learn coding?" answer="A: Not at all. You tell us what you want — we build and implement the systems for you. No tech experience needed." />
              <FAQItem question="6. What kind of results should I expect — and when?" answer="A: Most businesses see time and cost savings within weeks. Full systems show measurable improvements in efficiency, leads, or sales within 30–90 days, depending on the plan." />
              <FAQItem question="7. Do you work off commission?" answer="A: Yes. We’re open to creative financing models, including sweat equity or partial or full commission structures. We evaluate every project professionally, based on its scope, complexity, and potential value." />
            </div>
          </div>
        </MotionSection>
      </div>
    </div>
  );
};
