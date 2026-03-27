import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { ParticleNetwork } from '../components/ParticleNetwork';
import { DepthLayer, useGlobal3D } from '../components/Global3D';

const BASE_URL = 'https://sbcaio.com/';

const StatCard = ({ number, symbol, title, description }: { number: string; symbol: string; title: string; description: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ transformStyle: "preserve-3d", transform: 'translateZ(70px)' }}
      className="flex flex-col p-6 rounded-2xl bg-white shadow-xl border border-black/5 hover:border-primary/50 hover:shadow-[0_12px_40px_-10px_rgba(0,255,0,0.2)] transition-colors duration-500 group text-center"
    >
      <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
        <div className="mb-4">
          <div className="text-4xl font-bold font-orbitron">
            <span className="text-black">{number}</span>
            <span className="text-primary">{symbol}</span>
          </div>
        </div>
        <h4 className="text-lg font-bold mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const ServiceCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{ transformStyle: "preserve-3d", transform: 'translateZ(70px)' }}
      className="relative p-8 rounded-3xl bg-[#0a0a0a] text-white shadow-xl border border-white/10 hover:border-primary/50 hover:shadow-[0_12px_40px_-10px_rgba(0,255,0,0.3)] transition-colors duration-500 group overflow-hidden cursor-pointer"
    >
      {/* Subtle animated background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'translateZ(-10px)' }} />
      
      <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
        <h4 className="text-xl font-bold mb-4 font-orbitron group-hover:text-primary transition-colors duration-300">{title}</h4>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

const TeamCard = ({ name, role, image, href = "#" }: { name: string; role: string; image?: string; href?: string }) => {
  return (
    <motion.div 
      style={{ transformStyle: "preserve-3d", transform: 'translateZ(70px)' }}
      className="flex flex-col items-center text-center group p-8 rounded-3xl bg-white shadow-xl border border-black/5 hover:border-primary/50 hover:shadow-[0_12px_40px_-10px_rgba(0,255,0,0.2)] transition-colors duration-500"
    >
      <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-3xl shadow-lg" style={{ transform: 'translateZ(20px)' }}>
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-2xl"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 font-orbitron text-4xl">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div style={{ transform: 'translateZ(40px)' }}>
        <a href={href} className="text-xl font-bold font-orbitron hover:text-primary transition-colors">{name}</a>
        <p className="text-sm text-primary font-medium uppercase tracking-wider mt-1">{role}</p>
      </div>
    </motion.div>
  );
};

const Button = ({ children, variant = 'primary', className = '', href = '#' }: { children: React.ReactNode; variant?: 'primary' | 'outline'; className?: string; href?: string }) => {
  const baseStyles = "btn-premium inline-flex items-center justify-center px-8 py-3 rounded-full font-orbitron text-sm font-bold transition-all duration-300";
  const variants = {
    primary: "primary bg-primary text-white shadow-[0_0_15px_rgba(0,255,0,0.3)] hover:shadow-[0_0_25px_rgba(0,255,0,0.6)]",
    outline: "outline border-2 border-primary text-primary hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(0,255,0,0.5)]"
  };
  
  return (
    <motion.a 
      href={href} 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export const Home = () => {
  const { isMobile } = useGlobal3D();

  const { scrollY } = useScroll();
  
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const bgY = useTransform(smoothScrollY, (value) => isMobile ? 0 : value * 0.4);
  const lettersY = useTransform(smoothScrollY, (value) => isMobile ? 0 : value * 0.2);

  return (
    <div className="relative bg-black">
      <DepthLayer depth={-200} interactive={true} className="fixed inset-0 pointer-events-none z-0">
        <ParticleNetwork />
      </DepthLayer>
      <DepthLayer depth={0} interactive={true}>
        {/* Hero Section */}
        <section 
          className="relative pt-40 pb-20 overflow-hidden text-white min-h-screen flex flex-col justify-center bg-transparent"
          style={{ transformStyle: 'preserve-3d' }}
        >
        {/* Animated Background */}
        <DepthLayer depth={-200} className="absolute inset-[-10%] w-[120%] h-[120%] z-0">
          <motion.div style={{ y: bgY }} className="w-full h-full">
            <AnimatedBackground />
          </motion.div>
        </DepthLayer>

        {/* Large AI Letters Background */}
        <DepthLayer depth={-100} className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <motion.div style={{ y: lettersY }}>
            <span className="text-[40vw] font-black font-orbitron text-white/[0.03] select-none">
              AI
            </span>
          </motion.div>
        </DepthLayer>

        <DepthLayer depth={40} className="max-w-5xl mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20, z: 30 }}
            animate={{ opacity: 1, y: [0, -4, 0], z: 30 }}
            transition={{ delay: 0.2, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            className="text-primary font-orbitron font-bold tracking-[0.2em] mb-6"
            style={{ transform: 'translateZ(40px)' }}
          >
            AI AUTOMATION AGENCY
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20, z: 50 }}
            animate={{ opacity: 1, y: [0, -6, 0], z: 50 }}
            transition={{ delay: 0.4, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            className="text-4xl md:text-7xl font-black mb-8 leading-tight"
            style={{ transform: 'translateZ(60px)' }}
          >
            Stay Ahead. Build Smarter. <br />
            <motion.span 
              className="heading-title-gradient inline-block drop-shadow-[0_0_15px_rgba(0,255,0,0.4)]"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Scale Faster.
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20, z: 20 }}
            animate={{ opacity: 1, y: [0, -3, 0], z: 20 }}
            transition={{ delay: 0.6, y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" } }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
            style={{ transform: 'translateZ(30px)' }}
          >
            You have a CEO. You have a CFO. You have a COO. But who’s leading your AI strategy?
          </motion.p>
        </DepthLayer>
      </section>

      {/* About Section */}
      <motion.section 
        className="py-24 bg-white"
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-1 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-orbitron font-bold mb-4">ABOUT SBCAIO</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">The AI Gap Is Growing</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p>We help small businesses like yours adapt and implement AI in practical ways, that used to be reserved for industry leaders.</p>
              <p>You don’t need a bigger team, you need proven AI solutions and strategies developed around your unique needs.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              <div>
                <h5 className="font-bold text-xl mb-3 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Our Vision
                </h5>
                <p className="text-sm text-gray-500">To become a global leader in AI-driven automation by reshaping how companies engage with customers.</p>
              </div>
              <div>
                <h5 className="font-bold text-xl mb-3 flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Our Mission
                </h5>
                <ul className="space-y-2">
                  {['Help businesses unlock productivity', 'Bridge the gap between tech and people', 'Build ethical AI systems'].map((item, i) => (
                    <li key={i} className="text-sm text-gray-500 flex items-start">
                      <CheckCircle2 size={16} className="text-primary mr-2 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button variant="outline" href="/contact">Book My Consultation</Button>
              <div className="bg-primary text-white px-6 py-3 rounded-full shadow-xl inline-flex items-center gap-4">
                <div className="text-2xl font-black font-orbitron">98%</div>
                <div className="text-xs font-medium uppercase tracking-widest">Accuracy Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        className="py-24 bg-gray-50"
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              number="150" symbol="+" 
              title="Automated Workflows" 
              description="From client acquisition to data analysis, all tailored to industry needs"
            />
            <StatCard 
              number="10" symbol="K+" 
              title="Tasks Deployed Daily" 
              description="Smart systems managing conversations, lead gen, budgets, and more"
            />
            <StatCard 
              number="98" symbol="%" 
              title="Accuracy in AI Responses" 
              description="Ensuring quality and consistency across every AI interaction"
            />
            <StatCard 
              number="200" symbol="+" 
              title="Global Clients" 
              description="Trusted by brands, startups, and agencies worldwide"
            />
          </div>
        </div>
      </motion.section>

      {/* Competitive Edge Section */}
      <motion.section 
        className="py-24 bg-dark-classic/90 text-white"
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-3xl md:text-4xl font-black mb-12 text-center">Our Competitive Edge</h4>
            
            <div className="space-y-10">
              {[
                { label: 'Innovation Drive', value: 95 },
                { label: 'Quality Assurance', value: 92 },
                { label: 'Customer Satisfaction', value: 98 }
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-3">
                    <h6 className="text-lg font-bold">{item.label}</h6>
                    <span className="text-primary font-orbitron font-bold text-2xl">{item.value}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-24 bg-gray-50"
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-primary font-orbitron font-bold mb-4">Our Team</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Meet Our International <span className="heading-title-gradient">Foundation</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <TeamCard name="John Bela" role="CEO" image="/john-bela.png" />
            <TeamCard name="Peter" role="Digital Marketer" image="/peter.png" />
            <TeamCard name="Kunmi Oduola" role="AI Developer" image="/kunmi-oduola.png" />
            <TeamCard name="Rares Mateas" role="HOC" image="/rares-mateas.png" />
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section 
        className="py-24 bg-white overflow-hidden"
        initial={{ opacity: 0, scale: 0.95, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-1 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-primary font-orbitron font-bold mb-4">BENEFITS OF HIRING AN AI AGENCY</div>
              <h2 className="text-4xl md:text-5xl font-black mb-8">Power Your business With <span className="heading-title-gradient">Intelligent Automation</span></h2>
              <p className="text-gray-600 text-lg mb-12">Partnering with an AI agency like SB CAIO means unlocking smarter systems, faster decisions, and higher performance across every department.</p>
              
              <div className="space-y-10">
                {[
                  { id: '01', title: 'Accelerate Growth with Automation', desc: 'We eliminate repetitive manual tasks and replace them with streamlined, AI-driven workflows.' },
                  { id: '02', title: 'Smarter, Data-Driven solutions', desc: 'Our advanced AI models analyze patterns, trends, and KPIs, empowering you to make high-impact choices.' },
                  { id: '03', title: 'Scale Without Increasing Headcount', desc: 'Deploy bots that work round the clock. Our AI agents handle support, sales, booking, and more.' }
                ].map((benefit) => (
                  <div key={benefit.id} className="flex gap-6">
                    <div className="text-4xl font-black font-orbitron text-gray-200 shrink-0">{benefit.id}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{benefit.title}</h4>
                      <p className="text-gray-500">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Button variant="outline" href="/contact">Book My Consultation</Button>
                <div className="bg-primary px-6 py-4 rounded-3xl text-white shadow-xl flex items-center gap-4">
                  <div className="text-2xl font-black font-orbitron">95%</div>
                  <div className="text-xs uppercase tracking-widest">Efficiency Boost</div>
                </div>
                <div className="bg-dark-classic px-6 py-4 rounded-3xl text-white shadow-xl flex items-center gap-4">
                  <div className="text-2xl font-black font-orbitron">24/7</div>
                  <div className="text-xs uppercase tracking-widest">AI Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      </DepthLayer>
    </div>
  );
};
