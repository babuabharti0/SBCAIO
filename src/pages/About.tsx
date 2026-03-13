import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star } from 'lucide-react';
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

export const About = () => {
  return (
    <>
      {/* Page Title Section */}
      <section className="pt-40 pb-20 bg-dark-classic text-white relative overflow-hidden">
        <AnimatedBackground />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-6 font-orbitron">About Us.</h1>
          <div className="flex items-center space-x-4 text-sm font-medium uppercase tracking-widest text-gray-400">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            <span className="text-white">About Us</span>
          </div>
        </div>
        
        {/* Background Decorative Element */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-full bg-primary/5 blur-[120px] rounded-full"></div>
      </section>

      {/* About Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-primary font-orbitron font-bold mb-4 uppercase tracking-widest">About SBCAIO</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">The AI Gap Is Growing</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-12">
              <p>We help small businesses like yours adapt and implement AI in practical ways, that used to be reserved for industry leaders.</p>
              <p>You don’t need a bigger team, you need proven AI solutions and strategies developed around your unique needs.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <h5 className="font-bold text-xl mb-4 font-orbitron text-black">Our Mission</h5>
                <p className="text-gray-500 leading-relaxed">Our mission is to make this level of leadership and strategy accessible to small businesses delivering AI-powered systems, structured support, and long-term guidance without the burden of building an in-house team.</p>
              </div>
              <div>
                <h5 className="font-bold text-xl mb-4 font-orbitron text-black">Why We Exist</h5>
                <p className="text-gray-500 leading-relaxed">Most businesses have a CEO, COO, or CFO—but few have someone responsible for leading their AI strategy. At SB CAIO, we serve as your Chief AI Officer, guiding the integration of automation, analytics, and scalable systems across your operations.</p>
              </div>
              <div>
                <h5 className="font-bold text-xl mb-4 font-orbitron text-black">Our Vision</h5>
                <p className="text-gray-500 leading-relaxed">To become a global leader in AI-driven automation by reshaping how companies engage with customers, manage operations, and make decisions through scalable, human-centric AI solutions.</p>
              </div>
              <div>
                <h5 className="font-bold text-xl mb-4 font-orbitron text-black">About Ethics</h5>
                <p className="text-gray-500 leading-relaxed">Doing good and doing well should go hand in hand. Revolutionize your systems while supporting a world wide initiative. In various parts of the world, people work 10 to 12 hour days, six to seven days a week.</p>
              </div>
            </div>

            <div className="mt-12">
              <Button href="/contact">Book My Consultation</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-gray-50">
              <img 
                src={`${BASE_URL}wp-content/uploads/2025/07/IMG-7Y4H3DY.jpg`} 
                alt="About Us" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[32px] shadow-2xl border border-black/5 hidden md:block">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 size={32} />
                </div>
                <div>
                  <div className="text-3xl font-black font-orbitron">150+</div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Workflows</div>
                </div>
              </div>
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

      {/* Growth Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-primary font-orbitron font-bold mb-4 uppercase tracking-widest">ARTIFICIAL INTELLIGENCE agency</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">AI-Powered Solutions Built for <span className="heading-title-gradient">Business Growth</span></h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[40px] overflow-hidden shadow-2xl"
            >
              <img 
                src={`${BASE_URL}wp-content/uploads/2025/07/ai-nuclear-energy-future-innovation-disruptive-technology-683x1024.jpg`} 
                alt="Growth" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <div className="space-y-12">
              <p className="text-gray-600 text-lg leading-relaxed">
                At <strong>SB CAIO</strong>, we deliver innovative, fully customized AI automation systems that help businesses scale faster, reduce costs, and stay competitive. Whether it's streamlining operations or elevating customer experience we engineer the intelligence behind your business success.
              </p>

              <div className="grid gap-8">
                <div className="flex gap-6 p-8 rounded-3xl bg-gray-50 border border-black/5 hover:border-primary/20 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <img src={`${BASE_URL}wp-content/uploads/2025/07/icon-brand-2.png`} className="w-10 h-10 group-hover:invert" alt="" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-orbitron">Business Automation</h4>
                    <p className="text-gray-500">Cut down operational costs, save time, and maximize resource efficiency with AI-powered workflow automation across departments.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-8 rounded-3xl bg-gray-50 border border-black/5 hover:border-primary/20 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <img src={`${BASE_URL}wp-content/uploads/2025/07/icon-brand-2.png`} className="w-10 h-10 group-hover:invert" alt="" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-orbitron">AI for Personalization</h4>
                    <p className="text-gray-500">Deliver hyper-targeted experiences through intelligent personalization. Enhance marketing performance and boost conversion rates with AI-driven insights.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-6 pt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white border-2 border-white">
                      <Star size={14} fill="currentColor" />
                    </div>
                  ))}
                </div>
                <div className="text-lg font-bold font-orbitron">4.9 star google review</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
