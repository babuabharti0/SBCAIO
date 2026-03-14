import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { AnimatedBackground } from '../components/AnimatedBackground';

const BASE_URL = 'https://sbcaio.com/';

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

const IndustryCard = ({ title, description, icon, image }: { title: string; description: string; icon: string; image: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative rounded-[32px] overflow-hidden group bg-white shadow-xl border border-black/5"
  >
    <div className="h-64 overflow-hidden">
      <img 
        src={`${BASE_URL}${image}`} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="p-8 relative">
      <div className="absolute -top-10 left-8 w-20 h-20 rounded-2xl bg-white shadow-xl flex items-center justify-center">
        <img src={`${BASE_URL}${icon}`} className="w-12 h-12" alt="" referrerPolicy="no-referrer" />
      </div>
      <h5 className="text-xl font-bold mb-4 mt-6 font-orbitron">{title}</h5>
      <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
      <a href="/contact" className="inline-flex items-center text-primary font-bold text-sm uppercase tracking-widest hover:translate-x-2 transition-transform">
        Explore More <ArrowRight size={16} className="ml-2" />
      </a>
    </div>
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

export const Services = () => {
  return (
    <>
      {/* Page Title Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-dark-classic text-white overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <AnimatedBackground />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
          <h1 className="text-5xl md:text-7xl font-black mb-6 font-orbitron">Our Services.</h1>
          <div className="flex items-center justify-center space-x-4 text-sm font-medium uppercase tracking-widest text-gray-400">
            <a href="/" className="hover:text-primary transition-colors">Home</a>
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            <span className="text-white">Our Services</span>
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

      {/* Main Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-primary font-orbitron font-bold mb-4 uppercase tracking-widest">SBCAIO SERVICES</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Unlock Business Efficiency With AI <span className="heading-title-gradient">Powered Automation</span></h2>
            <p className="text-gray-600 text-lg">We help businesses tap into the real power of artificial intelligence — not just with tools, but with smart systems designed to streamline processes, boost output, and personalize customer journeys.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="AI Model Development"
              description="We create context-aware, industry-specific AI models tailored to your business use case. Precision meets performance."
              icon="wp-content/uploads/2025/07/icon10-VTV89M9.png"
            />
            <ServiceCard 
              title="Data Analysis & KPI Intelligence"
              description="Turn data into insights. Our systems analyze trends, patterns, and KPIs that drive smarter decisions and higher ROI."
              icon="wp-content/uploads/2025/07/icon14-VTV89M9.png"
            />
            <ServiceCard 
              title="Client Acquisition Automation"
              description="Reach your ideal customers with hyper-targeted messaging via WhatsApp, Gmail, LinkedIn, or Telegram — powered by AI segmentation."
              icon="wp-content/uploads/2025/07/icon19-VTV89M9.png"
            />
            <ServiceCard 
              title="Marketing and Sales Support"
              description="Dynamic sales funnels built around your marketing strategy. Each step is A/B tested to create high-conversion paths."
              icon="wp-content/uploads/2025/07/icon19-VTV89M9.png"
            />
            <ServiceCard 
              title="SEO & Website Creation"
              description="From smart landing pages to SEO-optimized websites, we build everything needed to generate and convert traffic — in one click."
              icon="wp-content/uploads/2025/07/icon19-VTV89M9.png"
            />
            <ServiceCard 
              title="AI Chatbots & Call Centers"
              description="24/7 AI-powered support agents for WhatsApp, Instagram, calls, and more — customized to act just like you."
              icon="wp-content/uploads/2025/07/icon12-VTV89M9.png"
            />
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="text-primary font-orbitron font-bold mb-4 uppercase tracking-widest">Our industry expertise</div>
            <h2 className="text-4xl md:text-5xl font-black mb-8">Powering Innovation <span className="heading-title-gradient">Across Industries.</span></h2>
            <p className="text-gray-600 text-lg">We specialize in delivering AI prompt solutions across diverse industries, combining domain knowledge with advanced prompt engineering for impactful.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <IndustryCard 
              title="Healthcare"
              description="Enhancing patient engagement and diagnostics through empathetic, precise prompt flows."
              icon="wp-content/uploads/2025/07/icon05-VTV89M9.png"
              image="wp-content/uploads/2025/07/IMG-W42J8H4.jpg"
            />
            <IndustryCard 
              title="Local services"
              description="Delivering secure and compliant AI interactions for banking, insurance, and fintech platforms."
              icon="wp-content/uploads/2025/07/icon25-VTV89M9.png"
              image="wp-content/uploads/2025/07/IMG-FM26MYA.jpg"
            />
            <IndustryCard 
              title="Home Services"
              description="Designing adaptive prompt systems that support personalized and interactive learning experiences."
              icon="wp-content/uploads/2025/07/icon08-VTV89M9.png"
              image="wp-content/uploads/2025/07/students-at-school-on-lesson-UYTSAFQ.jpg"
            />
            <IndustryCard 
              title="E-Commerce"
              description="Optimizing product discovery, virtual shopping assistants, and customer support automation."
              icon="wp-content/uploads/2025/07/icon15-VTV89M9.png"
              image="wp-content/uploads/2025/07/friends-shopping-shoes-online-5PAKNV2.jpg"
            />
            <IndustryCard 
              title="Professional Services"
              description="Structuring AI prompts to streamline case analysis, document review, and legal research assistance."
              icon="wp-content/uploads/2025/07/icon04-VTV89M9.png"
              image="wp-content/uploads/2025/07/the-legal-execution-department-makes-an-appointmen-FCSJDA7.jpg"
            />
            <IndustryCard 
              title="Education"
              description="Empowering smarter property search, virtual agent chats, and investment recommendation tools."
              icon="wp-content/uploads/2025/07/icon13-VTV89M9.png"
              image="wp-content/uploads/2025/07/students-at-school-on-lesson-UYTSAFQ.jpg"
            />
          </div>

          <div className="mt-20 text-center">
            <h5 className="text-2xl font-bold mb-8 font-orbitron">Unlock AI for Your Industry</h5>
            <Button href="/contact">Contact Us</Button>
          </div>
        </div>
      </section>
    </>
  );
};
