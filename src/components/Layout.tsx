import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Phone, 
  ArrowUp, 
  Github, 
  Twitter, 
  Youtube, 
  Linkedin, 
  MessageSquare
} from 'lucide-react';
import KumarAssistant from './KumarAssistant';

const BASE_URL = 'https://sbcaio.com/';

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const active = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-sm font-medium transition-colors hover:text-primary ${active ? 'text-primary' : 'text-white'}`}
    >
      {children}
    </Link>
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

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col" style={{ transformStyle: 'preserve-3d' }}>
      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-md py-3' : 'bg-black/40 backdrop-blur-sm py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-orbitron font-bold text-white tracking-widest">SBCAIO</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/services">Service</NavItem>
            <NavItem to="/contact">Contact Us</NavItem>
          </nav>

          <div className="hidden md:block">
            <Button href="tel:+17253046728">Call now</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md shadow-xl p-6 flex flex-col space-y-6 md:hidden"
            >
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About Us</NavItem>
              <NavItem to="/services">Service</NavItem>
              <NavItem to="/contact">Contact Us</NavItem>
              <Button href="tel:+17253046728" className="w-full">Call now</Button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-grow" style={{ transformStyle: 'preserve-3d' }}>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white pt-0 pb-10 border-t border-black/5">
        {/* CTA Section */}
        <section className="py-24 bg-dark-classic text-white relative overflow-hidden mb-20">
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <div className="text-primary font-orbitron font-bold mb-4 uppercase tracking-widest">Get Started</div>
            <h2 className="text-4xl md:text-6xl font-black mb-8">Let’s Automate Smarter. <span className="heading-title-gradient">Grow Faster.</span></h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              SB CAIO makes AI automation simple, scalable, and tailored to your business goals. From customer acquisition to data analysis we help you optimize workflows.
            </p>
            <Button href="/contact">Book My Consultation</Button>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <div className="mb-8">
                <span className="text-2xl font-orbitron font-bold text-black tracking-widest">SBCAIO</span>
              </div>
              <p className="text-gray-500 leading-relaxed">
                Las Vegas, Nevada, US
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center text-sm">
                  <span className="font-bold mr-2">Phone:</span>
                  <a href="tel:+17253046728" className="hover:text-primary transition-colors">+1 (725) 304-6728</a>
                </div>
                <div className="flex items-center text-sm">
                  <span className="font-bold mr-2">Email:</span>
                  <a href="mailto:ceo@sbcaio.com" className="hover:text-primary transition-colors">ceo@sbcaio.com</a>
                </div>
              </div>
            </div>

            <div>
              <h6 className="text-sm font-orbitron font-bold uppercase tracking-widest mb-8">Pages</h6>
              <ul className="space-y-4">
                {['Home', 'About Us', 'Services'].map((page) => (
                  <li key={page}>
                    <Link to={page === 'Home' ? '/' : `/${page.toLowerCase().replace(' ', '')}`} className="text-gray-500 hover:text-primary transition-colors flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary/20 rounded-full mr-3"></span>
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-sm font-orbitron font-bold uppercase tracking-widest mb-8">Support</h6>
              <ul className="space-y-4">
                {['Whatsapp', 'FAQ', 'Contact Us'].map((page) => (
                  <li key={page}>
                    <Link to={page === 'Contact Us' ? '/contact' : '#'} className="text-gray-500 hover:text-primary transition-colors flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary/20 rounded-full mr-3"></span>
                      {page}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="text-sm font-orbitron font-bold uppercase tracking-widest mb-8">Follow us</h6>
              <div className="flex space-x-4">
                {[
                  { icon: <Github size={20} />, label: 'Github' },
                  { icon: <Twitter size={20} />, label: 'X' },
                  { icon: <Youtube size={20} />, label: 'Youtube' },
                  { icon: <Linkedin size={20} />, label: 'Linkedin' }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-all transform hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-black/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 SBCAIO | Built by SBCAIO AI Automation Team</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Utility Buttons (Left Side) */}
      <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
        {/* Floating Action Button (Top) */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.02 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`w-12 h-12 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <ArrowUp size={24} />
        </motion.button>

        {/* Call Now Button (Green) */}
        <motion.a 
          href="tel:+17253046728" 
          className="btn-premium primary w-14 h-14 bg-[#008A00] text-white rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(0,138,0,0.5)] hover:shadow-[0_0_25px_rgba(0,138,0,0.8)] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Phone size={28} />
        </motion.a>
      </div>

      {/* Kumar AI Assistant */}
      <KumarAssistant />
    </div>
  );
};
