import React from 'react';
import { Target, Network, FileText, Database, BarChart, UserPlus, TrendingUp, Globe, Bot } from 'lucide-react';
import { MotionSection, MotionItem, TiltCard } from '../components/Motion';
import { Hero3DBackground } from '../components/Hero3DBackground';
import { Button } from '../components/Button';

export const Services = () => {
  return (
    <div className="relative bg-black text-white">
      <MotionSection className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
        <Hero3DBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <MotionItem elementType="h1" className="text-4xl md:text-5xl lg:text-6xl font-black mb-6">
            C AI O Infrastructure. Data-Led Initiatives. Built for Serious Businesses.
          </MotionItem>
          <MotionItem elementType="h2" className="text-2xl md:text-3xl text-primary font-bold mb-8">
            Built to Save Time, Reduce Costs, and Deliver Results Where It Matters Most.
          </MotionItem>
          <MotionItem elementType="p" className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            For solopreneurs and teams of five or fewer, our systems match the output of a full-time hire without the cost—saving you hours and tens of thousands a year, while optimizing core operations. For teams of ten or more, ROI is immediate, with time savings showing up before any additional services even begin.
          </MotionItem>
        </div>
      </MotionSection>

      <MotionSection className="py-24 bg-dark-classic">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <MotionItem elementType="p" className="text-2xl text-gray-300 font-bold">
              Build smarter systems that replace manual processes, reduce inefficiencies, and create scalable, measurable infrastructure across your business.
            </MotionItem>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 font-orbitron text-primary">Your Automated and Personalized AI Secretary</h3>
                <p className="text-gray-400 mb-4">Your AI Secretary supports every layer of your business—from leadership to admin, HR, and frontline staff.</p>
                <div className="space-y-4 text-gray-400 pl-4 border-l-2 border-primary/20">
                  <p>It automates repetitive tasks, connects your tools, and reduces overhead.</p>
                  <p>Sales support, lead booking, reminders, and marketing sync all run on autopilot.</p>
                  <p>HR operations like hiring workflows, onboarding, and training are streamlined to ramp up your team faster.</p>
                </div>
                <p className="text-gray-400 mt-4">Real-time AI-guided scripts boost sales team performance, while every action is tracked with live KPIs. That means smarter decisions, instant visibility into what’s working, and continuous optimization.</p>
              </div>

              <div>
                <p className="text-2xl font-bold mb-4 font-orbitron text-primary">Your CRM should do more than hold data — it should power conversions, align your team, and drive performance in real time.</p>
                <div className="space-y-4 text-gray-400">
                  <p>Assign clear ownership across tasks, deals, and communications — reducing missed follow-ups and accountability gaps.</p>
                  <p>Monitor every stage of your pipeline with real-time updates on lead behavior, client activity, and internal execution.</p>
                  <p>Works with Salesforce, HubSpot, GoHighLevel, Apollo, Outreach, and more — with workflows tailored to your team’s structure and goals.</p>
                  <p>Live dashboards track the metrics that matter, so you act on data—not assumptions.</p>
                  <p>Includes CRM setup, custom workflows, pipeline tracking, and fully integrated reporting.</p>
                  <p>The result? Faster follow-through, cleaner handoffs, and sharper decision-making—unlocking hours of productivity and thousands in recovered revenue.</p>
                </div>
              </div>

              <div>
                <p className="text-2xl font-bold mb-4 font-orbitron text-primary">Connect to your clients with high quality lead magnets, and nurture your leads in every stage of your buyer’s journey with synchronized messaging, that enhances buyer experience, and delivers measurable progress.</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 font-orbitron text-primary">Omnichannel Funnels with Smart Lead Magnets Built to Convert<br/>Omnichannel Funnels Built to Convert</h3>
                <div className="space-y-4 text-gray-400">
                  <p>We connect your organic, paid, affiliate, content, and outreach strategies into one AI-optimized funnel that qualifies, nurtures, and converts.</p>
                  <p>Lead magnets like surveys, quizzes, and assessments capture buyer intent and segment leads instantly.</p>
                  <p>AI tracks engagement across every step—so no clicks are wasted and every next action is intentional.</p>
                  <p>Real-time insights and A/B-tested data help you refine what works and scale what performs.</p>
                  <p>Small teams move faster. Large teams stay aligned.</p>
                  <p>You get a complete conversion system designed to grow with your business—from first click to closed deal.</p>
                </div>
              </div>

              <div>
                <p className="text-2xl font-bold mb-4 font-orbitron text-primary">Your campaigns should do more than deliver — they should convert, retarget, and refine every step of the buyer journey.</p>
                <div className="space-y-4 text-gray-400">
                  <p>AI-enhanced segmentation personalizes each message based on behavior, intent, and funnel stage.</p>
                  <p>Campaigns adapt in real time — keeping content relevant, timing sharp, and follow-ups automatic.</p>
                  <p>Multi-channel outreach aligns with client profiles to maintain consistent, high-quality communication.</p>
                  <p>Every send is backed by data — optimized for engagement, retention, and ROI across your entire funnel.</p>
                  <p>The result? Higher open rates, better follow-through, and stronger conversions — all on autopilot.</p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              <div>
                <p className="text-2xl font-bold mb-4 font-orbitron text-primary">We use predictive analytics before you spend a single dollar so you see a return on ROI before you even start testing.</p>
                <div className="space-y-4 text-gray-400">
                  <p>Each paid ad and every creative is based on forecasting, real-time insights, and effective budgeting.</p>
                  <p>So we can predict your ROI before launch and improve it continuously through optimization and data-backed campaign execution.</p>
                  <p>Campaigns are connected directly to your funnel, CRM, and retargeting flows to stay fully aligned across your strategy.</p>
                  <p>We help your ad strategy target high-intent audiences, refine creative in real time, providing consistent and ever improving ROI.</p>
                </div>
              </div>

              <div>
                <p className="text-2xl font-bold mb-4 font-orbitron text-primary">Position your social media around clear goals—whether that’s building awareness, driving conversions, or leading your category.</p>
                <div className="space-y-4 text-gray-400">
                  <p>You'll get long-term visibility, controlled messaging, and lead flow that isn’t tied to ad budgets. We build the infrastructure behind it—so content creation, outreach, and engagement are structured, repeatable, and tied to business outcomes.</p>
                  <p>Your organic, affiliate, and sponsorship strategies are mapped to platforms where your audience already pays attention—LinkedIn, Instagram, YouTube, and others—so every post, DM, and asset drives your business forward.</p>
                  <p>The result: qualified inbound leads, clear brand positioning, and a marketing process that builds equity over time.</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4 font-orbitron text-primary">Stop Losing Qualified Leads. While You Focus on the Work That Matters</h3>
                <div className="space-y-4 text-gray-400">
                  <p>You got your lead funnels in place, and You’re booked 80–90% of the time—and missing 1 in 8 leads because there’s no way to answer every call or reply within 30 seconds.</p>
                  <p>Whether you're booking a service or a discovery call, our booking agents are trained on your FAQs and use your messaging to guide qualified prospects to a meeting—and follow up with reminders. Behavior-based forms qualify in real time, while a Voice Agent responds instantly through voice, chat, or SMS.</p>
                  <p>Includes branded funnels, Voice Agent setup, and full calendar integration.</p>
                  <p>The result: no missed leads, stronger bookings, and zero manual follow-up.</p>
                </div>
              </div>

              <div>
                <p className="text-2xl font-bold mb-4 font-orbitron text-primary">Develop a performance-ready online presence through intelligent design, behavioral analytics, and search visibility.</p>
              </div>

              <div>
                <p className="text-2xl font-bold mb-4 font-orbitron text-primary">Predictive heat mapping guided by buyer behavior indicators, buyer intent, SEO strategy, and A/B conversion optimization.</p>
                <div className="space-y-4 text-gray-400">
                  <p>Get a website designed to convert, using heat mapping combined with design, structure, and functionality to create a fast, buyer-friendly experience that turns interest into conversions.</p>
                  <p>Build a site with persuasive copy and strategic visuals that guide buyers through every step of their decision. The design, messaging, and layout work in harmony to build trust, reduce friction, and turn interest into action.</p>
                  <p>Develop an SEO strategy that drives visibility based on your business goals.</p>
                </div>
              </div>

              <div>
                <p className="text-2xl font-bold mb-4 font-orbitron text-primary">We target the critical 10% of SEO strategies that generate 90% of your results—so your website and content get seen, ranked, and clicked by the right people.</p>
                <div className="space-y-4 text-gray-400">
                  <p>Connect your website and content to the platforms that matter—Google, LinkedIn, Facebook, YouTube, and more. We make sure your content gets found, ranked, and clicked by the right people.</p>
                  <p>Based on your goals, audience, and model, we build an SEO strategy that brings your target audience to you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="py-24 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <p className="text-2xl font-bold text-white">A unified strategy led by your Small Business Chief AI Officer—built to simplify operations, accelerate growth, and scale with precision.</p>
          <div className="text-lg text-gray-400 space-y-4">
            <p>We connect marketing, delivery, and client service into one cohesive structure—reducing friction, increasing visibility, and giving you more control throughout your business.</p>
            <p>Your Small Business Chief AI Officer provides more than just automated support—we design scalable frameworks that evolve with your goals. From lean teams to expanding companies, every solution is tailored to fit your structure, budget, and long-term trajectory without added complexity or overhead.</p>
            <p className="mt-8 font-bold text-white">Gain full team support at a fraction of traditional staffing costs—while reclaiming time through AI-driven systems. The ROI is immediate. In many cases, it’s like receiving enterprise-level marketing and operations support without added expense.</p>
          </div>
          <p className="text-xl font-bold text-primary pt-8">Find out how we can simplify your processes. Book your consultation today.</p>
          <Button href="/get-started" variant="primary">Book My AI Consultation</Button>
        </div>
      </MotionSection>
    </div>
  );
};
