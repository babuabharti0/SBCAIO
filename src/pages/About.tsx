import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Star } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';
import { DepthLayer } from '../components/Global3D';

const StatCard = ({ number, symbol, title, description }: { number: string; symbol: string; title: string; description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    style={{ transformStyle: "preserve-3d", transform: 'translateZ(70px)' }}
    className="flex flex-col p-6 rounded-2xl bg-white shadow-xl border border-black/5 hover:border-primary/50 hover:shadow-[0_12px_40px_-10px_rgba(0,255,0,0.2)] transition-colors duration-500 group"
  >
    <div className="relative z-10" style={{ transform: 'translateZ(30px)' }}>
      <div className="flex items-center justify-between mb-4">
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

export const About = () => {
  return (
    <DepthLayer depth={0} interactive={true}>
      {/* Page Title Section */}
      <section className="pt-40 pb-20 bg-dark-classic text-white relative overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
        <DepthLayer depth={-200} className="absolute inset-[-10%] w-[120%] h-[120%] z-0">
          <AnimatedBackground />
        </DepthLayer>
        <div className="max-w-7xl mx-auto px-6 relative z-10" style={{ transform: 'translateZ(40px)' }}>
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
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-1 gap-20 items-center">
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

            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button href="/contact">Book My Consultation</Button>
              <div className="bg-white p-6 rounded-[32px] shadow-xl border border-black/5 flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-2xl font-black font-orbitron">150+</div>
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
      </section>

      {/* Growth Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-primary font-orbitron font-bold mb-4 uppercase tracking-widest">ARTIFICIAL INTELLIGENCE agency</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">AI-Powered Solutions Built for <span className="heading-title-gradient">Business Growth</span></h2>
          </div>

          <div className="grid lg:grid-cols-1 gap-16 items-center">
            <div className="space-y-12">
              <p className="text-gray-600 text-lg leading-relaxed">
                At <strong>SB CAIO</strong>, we deliver innovative, fully customized AI automation systems that help businesses scale faster, reduce costs, and stay competitive. Whether it's streamlining operations or elevating customer experience we engineer the intelligence behind your business success.
              </p>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex gap-6 p-8 rounded-3xl bg-gray-50 border border-black/5 hover:border-primary/20 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Star size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-orbitron">Business Automation</h4>
                    <p className="text-gray-500">Cut down operational costs, save time, and maximize resource efficiency with AI-powered workflow automation across departments.</p>
                  </div>
                </div>

                <div className="flex gap-6 p-8 rounded-3xl bg-gray-50 border border-black/5 hover:border-primary/20 transition-all group">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
                    <Star size={24} className="text-primary group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 font-orbitron">AI for Personalization</h4>
                    <p className="text-gray-500">Deliver hyper-targeted experiences through intelligent personalization. Enhance marketing performance and boost conversion rates with AI-driven insights.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-6 pt-6">
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
    </DepthLayer>
  );
};
