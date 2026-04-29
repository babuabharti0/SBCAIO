import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, ArrowUp, Home, Info, Briefcase, FolderGit2, Mail } from 'lucide-react';
import { Button } from './Button';
import { MotionIcon } from './MotionIcon';

const NavItem = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link to={to} className={`group relative flex items-center justify-center p-2 transition-colors hover:text-primary ${active ? 'text-primary' : 'text-white'}`}>
      {children}
      <span className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
    </Link>
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const { scrollY } = useScroll();
  const backgroundPositionY = useTransform(scrollY, (y) => `${y * -0.1}px`);

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
    <div className="min-h-screen flex flex-col relative">
      <motion.div 
        className="fixed inset-0 z-[40] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(128, 128, 128, 0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128, 128, 128, 0.07) 1px, transparent 1px)`,
          backgroundSize: '3rem 3rem',
          backgroundPositionX: 'center',
          backgroundPositionY
        }}
      />
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-md py-3' : 'bg-black/40 backdrop-blur-sm py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center text-primary">
            <img src="/logo.png" alt="SBCAIO Logo" className="h-8 md:h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-10">
            <NavItem to="/">
              <div className="flex items-center gap-2"><Home size={20}/><span className="hidden md:inline text-sm">Home</span></div>
            </NavItem>
            <NavItem to="/services">
              <div className="flex items-center gap-2"><Briefcase size={20}/><span className="hidden md:inline text-sm">Services</span></div>
            </NavItem>
            <NavItem to="/case-studies">
              <div className="flex items-center gap-2"><FolderGit2 size={20}/><span className="hidden md:inline text-sm">Case Studies</span></div>
            </NavItem>
            <NavItem to="/about">
              <div className="flex items-center gap-2"><Info size={20}/><span className="hidden md:inline text-sm">About</span></div>
            </NavItem>
            <NavItem to="/contact">
              <div className="flex items-center gap-2"><Mail size={20}/><span className="hidden md:inline text-sm">Contact</span></div>
            </NavItem>
          </nav>
          <div className="hidden md:block">
            <Button href="/contact" onClick={(e) => { e.preventDefault(); navigate('/contact'); setIsMenuOpen(false); }}>Book My AI Consultation</Button>
          </div>
          <button className="md:hidden text-white group" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <MotionIcon type="shift">
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </MotionIcon>
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-black/95 backdrop-blur-md shadow-xl p-6 flex flex-col space-y-6 md:hidden">
            <NavItem to="/">
              <div className="flex items-center gap-2"><Home size={20}/><span className="hidden md:inline text-sm">Home</span></div>
            </NavItem>
            <NavItem to="/services">
              <div className="flex items-center gap-2"><Briefcase size={20}/><span className="hidden md:inline text-sm">Services</span></div>
            </NavItem>
            <NavItem to="/case-studies">
              <div className="flex items-center gap-2"><FolderGit2 size={20}/><span className="hidden md:inline text-sm">Case Studies</span></div>
            </NavItem>
            <NavItem to="/about">
              <div className="flex items-center gap-2"><Info size={20}/><span className="hidden md:inline text-sm">About</span></div>
            </NavItem>
            <NavItem to="/contact">
              <div className="flex items-center gap-2"><Mail size={20}/><span className="hidden md:inline text-sm">Contact</span></div>
            </NavItem>
            <Button href="/contact" className="w-full" onClick={(e) => { e.preventDefault(); navigate('/contact'); setIsMenuOpen(false); }}>Book My AI Consultation</Button>
          </div>
        )}
      </header>
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-black border-t border-white/[0.06] py-12 md:py-16 text-white/70 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <img src="/logo.png" alt="SBCAIO Logo" className="h-9 w-auto mb-2 opacity-90" />
              <span className="text-2xl font-black text-white mb-2 font-orbitron tracking-wide">SBCAIO</span>
              <p className="text-sm">AI Infrastructure for Serious Businesses</p>
            </div>
            
            {/* Column 2 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-sm font-bold text-white/90 uppercase tracking-widest mb-4">Navigation</span>
              <nav className="flex flex-col space-y-3 items-center md:items-start">
                <Link to="/" className="text-sm hover:text-white transition-colors">Home</Link>
                <Link to="/services" className="text-sm hover:text-white transition-colors">Services</Link>
                <Link to="/case-studies" className="text-sm hover:text-white transition-colors">Case Studies</Link>
                <Link to="/about" className="text-sm hover:text-white transition-colors">About</Link>
                <Link to="/contact" className="text-sm hover:text-white transition-colors">Contact</Link>
              </nav>
            </div>
            
            {/* Column 3 */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <span className="text-sm font-bold text-white/90 uppercase tracking-widest mb-4">Contact</span>
              <div className="flex flex-col space-y-4 items-center md:items-start">
                <div>
                  <div className="text-xs text-white/50 mb-1">Email</div>
                  <a href="mailto:ceo@sbcaio.com" className="text-sm hover:text-white transition-colors">ceo@sbcaio.com</a>
                </div>
                <div>
                  <div className="text-xs text-white/50 mb-1">Phone</div>
                  <a href="tel:+17253046728" className="text-sm hover:text-white transition-colors">(725) 304-6728</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-white/50">
            <p className="text-center md:text-left">© 2026 SBCAIO. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/privacy-policy" className="text-sm px-3 py-1 border border-white/10 rounded-md hover:border-white/20 hover:text-white transition-all">
                Privacy Policy
              </Link>
              <Link to="/terms-and-conditions" className="text-sm px-3 py-1 border border-white/10 rounded-md hover:border-white/20 hover:text-white transition-all">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>

        <div className="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`w-12 h-12 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
};
