import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import Collective from './Collective';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import GlobalFooter from './components/GlobalFooter';
import Navbar from './components/Navbar';
import ScrollSequence from './components/ScrollSequence';
import AuditModal from './components/AuditModal';
import Lenis from 'lenis';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : false;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>('');
  
  const lenisRef = useRef<Lenis | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const openGeneralAudit = () => {
    setSelectedTier('');
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(element, {
          offset: -90, 
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (location.pathname === '/' && location.state && (location.state as any).scrollTo) {
      const id = (location.state as any).scrollTo;
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          if (lenisRef.current) {
            lenisRef.current.scrollTo(element, {
              offset: -90,
              duration: 1.2,
              easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            });
          } else {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 100);
      navigate('/', { replace: true, state: {} });
    }
  }, [location, navigate]);

  return (
    <main className="relative w-full min-h-screen text-white bg-transparent font-sans antialiased overflow-x-hidden selection:bg-zinc-200 dark:selection:bg-zinc-800">
      {/* Layer 1: The Background Canvas (z-0) */}
      <div className="fixed top-0 left-0 w-full h-screen z-0 pointer-events-none">
        <ScrollSequence />
      </div>
      <div className="fixed inset-0 w-full h-screen bg-transparent dark:bg-black/50 z-[1] pointer-events-none transition-colors duration-500"></div>

      {/* Layer 2: The Content Wrapper (z-10) */}
      <div className="relative z-10 w-full flex flex-col pointer-events-none [&_button]:pointer-events-auto [&_a]:pointer-events-auto [&_.cursor-pointer]:pointer-events-auto">
        {/* Navbar Section */}
        <Navbar
          darkMode={darkMode}
          onToggleTheme={toggleTheme}
          onOpenAudit={openGeneralAudit}
          scrollToSection={scrollToSection}
        />
        
        <Routes>
          <Route path="/" element={<HomePage onOpenAudit={openGeneralAudit} onSelectTier={(tierName) => { setSelectedTier(tierName); setIsModalOpen(true); }} />} />
          <Route path="/collective" element={<Collective />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        
        <GlobalFooter />
        
        {/* Operational Bleed Diagnostics Audit Modal */}
        <AuditModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedTier={selectedTier}
        />
      </div>
    </main>
  );
}

export default function App() {
  const [isGlobalLoading, setIsGlobalLoading] = useState(true);

  useEffect(() => {
    const verifyAssets = async () => {
      // 1. Wait for the FIRST hero frame to load
      const heroFrame = new Image();
      heroFrame.src = "/hero-frames/hero_00000001.webp";
      await new Promise((resolve) => {
        heroFrame.onload = resolve;
      });

      // 2. Lift the curtain immediately so the Hero is interactive
      setIsGlobalLoading(false);

      // 3. Optional: Let the rest of the page/videos load in the background without blocking the user
    };

    // Trigger check if already loaded, otherwise wait for window 'load'
    if (document.readyState === 'complete') {
      verifyAssets();
    } else {
      window.addEventListener('load', verifyAssets);
      return () => window.removeEventListener('load', verifyAssets);
    }
  }, []);

  return (
    <>
      {isGlobalLoading && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]">
          <div className="relative flex items-center justify-center">
             {/* Outer spinning ring */}
             <div className="absolute w-16 h-16 border-t-2 border-green-500 border-solid rounded-full animate-spin"></div>
             {/* Inner pulsing logo/dot */}
             <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
          </div>
          <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-white/50 uppercase">
            Initializing Architecture...
          </p>
        </div>
      )}
      <BrowserRouter>
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </>
  );
}
