import React from 'react';
import { MotionSection, MotionItem, TiltCard } from '../components/Motion';
import { Hero3DBackground } from '../components/Hero3DBackground';

export const About = () => {
  return (
    <div className="relative bg-black text-white min-h-screen">
      <Hero3DBackground />
      <MotionSection className="relative z-10 pt-40 pb-24 max-w-6xl mx-auto px-6 space-y-20">
        
        <div className="max-w-4xl mx-auto space-y-20">
          <div className="space-y-6">
            <MotionItem elementType="h2" className="text-3xl md:text-4xl font-black text-primary">
              Our Mission: To Make the Role of Chief AI Officer Accessible to Small Businesses
            </MotionItem>
            <MotionItem elementType="p" className="text-lg md:text-xl text-gray-300 leading-relaxed">
              The Chief AI Officer (CAIO) is an emerging executive role that’s becoming essential to how successful businesses operate, grow, and stay competitive. Our mission is to make this level of leadership and strategy accessible to small businesses—delivering AI-powered systems, structured support, and long-term guidance without the burden of building an in-house team.
            </MotionItem>
          </div>

          <div className="space-y-6">
            <MotionItem elementType="h2" className="text-3xl md:text-4xl font-black text-primary">
              With SB CAIO it's About More Than Growth—It’s About Ethics
            </MotionItem>
            <MotionItem elementType="p" className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Doing good and doing well should go hand in hand. Revolutionize your systems while supporting a world wide initiative. In various parts of the world, people work 10 to 12 hour days, six to seven days a week. When you partner with SB CAIO, support U.S.-based teams and partners facing otherwise limited opportunities, creating meaningful work for experienced professionals globally.
            </MotionItem>
          </div>

          <div className="space-y-6">
            <MotionItem elementType="h2" className="text-3xl md:text-4xl font-black text-primary">
              Why We Exist
            </MotionItem>
            <MotionItem elementType="p" className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Most businesses have a CEO, COO, or CFO—but few have someone responsible for leading their AI strategy. At SB CAIO, we serve as your Chief AI Officer, guiding the integration of automation, analytics, and scalable systems across your operations. Our role is to help you implement the kind of infrastructure once reserved for large enterprises—minus the cost or complexity of building it in-house.
            </MotionItem>
          </div>

          <div className="space-y-6">
            <MotionItem elementType="h2" className="text-3xl md:text-4xl font-black text-primary">
              Who We Are
            </MotionItem>
            <MotionItem elementType="p" className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Alexis Alford is a health and beauty social media influencer supported by a U.S.-based team specializing in Client Success, AI integration and operational strategy. Together, we apply proven systems to help businesses streamline workflows, strengthen their digital presence, and scale with consistency and control.
            </MotionItem>
          </div>
        </div>

        <div className="space-y-12 pt-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <MotionItem elementType="p" className="text-primary font-bold tracking-widest uppercase text-sm">
              Our Team
            </MotionItem>
            <MotionItem elementType="h2" className="text-3xl md:text-5xl font-black">
              Meet Our International Foundation
            </MotionItem>
          </div>
          <MotionItem className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <TiltCard className="bg-[#111] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto border-2 border-primary/20 p-1">
                <img src="/john-bela.png" alt="John Bela" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">John Bela</h3>
              <p className="text-primary text-xs font-bold tracking-widest uppercase">CEO & CHIEF AI OFFICER</p>
            </TiltCard>
            
            <TiltCard className="bg-[#111] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto border-2 border-primary/20 p-1">
                <img src="/peter.png" alt="Peter" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">Peter</h3>
              <p className="text-primary text-xs font-bold tracking-widest uppercase">AI GROWTH ARCHITECT</p>
            </TiltCard>
            
            <TiltCard className="bg-[#111] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto border-2 border-primary/20 p-1">
                <img src="/kunmi-oduola.png" alt="Kunmi Oduola" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">Kunmi Oduola</h3>
              <p className="text-primary text-xs font-bold tracking-widest uppercase">LEAD AI DEVELOPER</p>
            </TiltCard>
            
            <TiltCard className="bg-[#111] border border-white/5 p-8 rounded-3xl flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-6 mx-auto border-2 border-primary/20 p-1">
                <img src="/rares-mateas.png" alt="Rares Mateas" className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rares Mateas</h3>
              <p className="text-primary text-xs font-bold tracking-widest uppercase">HEAD OF AI OPS</p>
            </TiltCard>
          </MotionItem>
        </div>

      </MotionSection>
    </div>
  );
};
