import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';

const BASE_URL = 'https://sbcaio.com/';

const StatCard = ({ number, symbol, title, description, icon }: { number: string; symbol: string; title: string; description: string; icon: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col p-6 rounded-2xl bg-white shadow-xl border border-black/5 hover:border-primary/20 transition-all group"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="text-4xl font-bold font-orbitron">
        <span className="text-black">{number}</span>
        <span className="text-primary">{symbol}</span>
      </div>
      <img src={`${BASE_URL}${icon}`} alt={title} className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
    </div>
    <h4 className="text-lg font-bold mb-2">{title}</h4>
    <p className="text-sm text-gray-600">{description}</p>
  </motion.div>
);

const ServiceCard = ({ title, description, icon }: { title: string; description: string; icon: string }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="p-8 rounded-3xl bg-white shadow-lg border border-black/5 hover:shadow-2xl transition-all group"
  >
    <div className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
      <img src={`${BASE_URL}${icon}`} alt={title} className="w-10 h-10 group-hover:invert transition-all" referrerPolicy="no-referrer" />
    </div>
    <h4 className="text-xl font-bold mb-4 font-orbitron">{title}</h4>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const TeamCard = ({ name, role, image, href = "#" }: { name: string; role: string; image: string; href?: string }) => (
  <motion.div 
    whileHover={{ y: -2 }}
    className="flex flex-col items-center text-center group"
  >
    <div className="relative w-full aspect-[3/4] mb-4 overflow-hidden rounded-3xl bg-gray-100">
      <img 
        src={`${BASE_URL}${image}`} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]" 
        referrerPolicy="no-referrer"
      />
    </div>
    <a href={href} className="text-xl font-bold font-orbitron hover:text-primary transition-colors">{name}</a>
    <p className="text-sm text-primary font-medium uppercase tracking-wider mt-1">{role}</p>
  </motion.div>
);

const Button = ({ children, variant = 'primary', className = '', href = '#' }: { children: React.ReactNode; variant?: 'primary' | 'outline'; className?: string; href?: string }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 rounded-full font-orbitron text-sm font-bold transition-all duration-300 transform hover:scale-[1.02]";
  const variants = {
    primary: "bg-primary text-white hover:bg-opacity-90 shadow-lg shadow-primary/20",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white"
  };
  
  return (
    <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

export const Home = () => {
  const partners = [
    'wp-content/uploads/2025/07/1-1.png',
    'wp-content/uploads/2025/07/2-1.png',
    'wp-content/uploads/2025/07/3-1.png',
    'wp-content/uploads/2025/07/4-1.png',
    'wp-content/uploads/2025/07/6-1.png'
  ];

  const floatingIcons = [
    { src: 'wp-content/uploads/2025/07/brand1-thinkapt.png', className: 'top-20 left-[10%]' },
    { src: 'wp-content/uploads/2025/07/brand5-thinkapt.png', className: 'top-40 right-[15%]' },
    { src: 'wp-content/uploads/2025/07/brand3-thinkapt.png', className: 'bottom-40 left-[15%]' },
    { src: 'wp-content/uploads/2025/07/brand2-thinkapt.png', className: 'bottom-20 right-[10%]' },
    { src: 'wp-content/uploads/2025/07/brand6-thinkapt.png', className: 'top-[50%] left-[5%] hidden md:block' },
    { src: 'wp-content/uploads/2025/07/brand4-thinkapt.png', className: 'top-[50%] right-[5%] hidden md:block' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden text-white min-h-screen flex flex-col justify-center bg-black">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Large AI Letters Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <span className="text-[40vw] font-black font-orbitron text-white/[0.03] select-none">
            AI
          </span>
        </div>

        {floatingIcons.map((icon, idx) => (
          <img 
            key={idx}
            src={`${BASE_URL}${icon.src}`}
            className={`absolute w-16 md:w-24 opacity-30 pointer-events-none z-10 ${icon.className}`}
            alt=""
            referrerPolicy="no-referrer"
          />
        ))}

        <div className="max-w-5xl mx-auto px-6 text-center relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-orbitron font-bold tracking-[0.2em] mb-6"
          >
            AI AUTOMATION AGENCY
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-4xl md:text-7xl font-black mb-8 leading-tight"
          >
            Stay Ahead. Build Smarter. <br />
            <span className="heading-title-gradient">Scale Faster.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
          >
            You have a CEO. You have a CFO. You have a COO. But who’s leading your AI strategy?
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mt-10"
          >
            <p className="text-sm font-orbitron text-gray-500 uppercase tracking-widest mb-8">Our Official Partners</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
              {partners.map((p, i) => (
                <img key={i} src={`${BASE_URL}${p}`} alt="Partner" className="h-8 md:h-12 w-auto" referrerPolicy="no-referrer" />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
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

            <Button variant="outline" href="/contact">Book My Consultation</Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src={`${BASE_URL}wp-content/uploads/2025/07/IMG-7Y4H3DY.jpg`} alt="About" className="w-full h-auto" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-primary text-white p-8 rounded-3xl shadow-xl hidden lg:block">
              <div className="text-4xl font-black font-orbitron">98%</div>
              <div className="text-sm font-medium uppercase tracking-widest">Accuracy Rate</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              number="150" symbol="+" 
              title="Automated Workflows" 
              description="From client acquisition to data analysis, all tailored to industry needs"
              icon="wp-content/uploads/2025/07/icon04-VTV89M9.png"
            />
            <StatCard 
              number="10" symbol="K+" 
              title="Tasks Deployed Daily" 
              description="Smart systems managing conversations, lead gen, budgets, and more"
              icon="wp-content/uploads/2025/07/icon13-VTV89M9.png"
            />
            <StatCard 
              number="98" symbol="%" 
              title="Accuracy in AI Responses" 
              description="Ensuring quality and consistency across every AI interaction"
              icon="wp-content/uploads/2025/07/icon08-VTV89M9.png"
            />
            <StatCard 
              number="200" symbol="+" 
              title="Global Clients" 
              description="Trusted by brands, startups, and agencies worldwide"
              icon="wp-content/uploads/2025/07/icon15-VTV89M9.png"
            />
          </div>
        </div>
      </section>

      {/* Competitive Edge Section */}
      <section className="py-24 bg-dark-classic text-white">
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
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="text-primary font-orbitron font-bold mb-4">Our Team</div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Meet Our International <span className="heading-title-gradient">Foundation</span></h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <TeamCard name="John Bela" role="CEO" image="wp-content/uploads/2026/02/WhatsApp-Image-2026-02-09-at-8.19.07-PM.jpeg" />
            <TeamCard name="Peter" role="Digital Marketer" image="wp-content/uploads/2026/02/peter-headshot--scaled.png" />
            <TeamCard name="Kunmi Oduola" role="AI Developer" image="wp-content/uploads/2025/08/3-1.png" />
            <TeamCard name="Rares Mateas" role="HOC" image="wp-content/uploads/2026/02/IMG-20260203-WA0008.jpg" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
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
              
              <div className="mt-12">
                <Button variant="outline" href="/contact">Book My Consultation</Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6 pt-12">
                  <img src={`${BASE_URL}wp-content/uploads/2026/02/Screenshot-2026-02-16-201320.png`} alt="Benefit 1" className="rounded-3xl shadow-xl" referrerPolicy="no-referrer" />
                  <div className="bg-primary p-8 rounded-3xl text-white">
                    <div className="text-3xl font-black font-orbitron mb-2">95%</div>
                    <div className="text-xs uppercase tracking-widest">Efficiency Boost</div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="bg-dark-classic p-8 rounded-3xl text-white">
                    <div className="text-3xl font-black font-orbitron mb-2">24/7</div>
                    <div className="text-xs uppercase tracking-widest">AI Support</div>
                  </div>
                  <img src={`${BASE_URL}wp-content/uploads/2026/02/Screenshot-2026-02-16-201618.png`} alt="Benefit 2" className="rounded-3xl shadow-xl" referrerPolicy="no-referrer" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};
