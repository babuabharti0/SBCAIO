import React, { createContext, useContext, useEffect, useState } from 'react';
import { useMotionValue, useSpring, useTransform, motion, MotionValue, useScroll, useMotionTemplate } from 'motion/react';

interface Global3DContextType {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  rotateX: MotionValue<number>;
  rotateY: MotionValue<number>;
  isMobile: boolean;
}

const Global3DContext = createContext<Global3DContextType | null>(null);

export const useGlobal3D = () => {
  const context = useContext(Global3DContext);
  if (!context) {
    throw new Error('useGlobal3D must be used within a Global3DProvider');
  }
  return context;
};

export const Global3DProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.5 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.5 });

  const rotateX = useTransform(smoothMouseY, [-1, 1], [5, -5]);
  const rotateY = useTransform(smoothMouseX, [-1, 1], [-5, 5]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    let animationFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth) * 2 - 1;
        const y = (e.clientY / innerHeight) * 2 - 1;
        mouseX.set(x);
        mouseY.set(y);
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile, mouseX, mouseY]);

  return (
    <Global3DContext.Provider value={{ mouseX: smoothMouseX, mouseY: smoothMouseY, rotateX, rotateY, isMobile }}>
      {children}
    </Global3DContext.Provider>
  );
};

export const DepthLayer: React.FC<{ 
  children: React.ReactNode; 
  depth: number; 
  className?: string;
  interactive?: boolean;
}> = ({ children, depth, className = '', interactive = false }) => {
  const { rotateX, rotateY, isMobile } = useGlobal3D();
  const { scrollY } = useScroll();
  const transformOriginY = useTransform(scrollY, (y) => `${y + (typeof window !== 'undefined' ? window.innerHeight / 2 : 0)}px`);
  const transformOrigin = useMotionTemplate`50% ${transformOriginY}`;
  
  return (
    <motion.div
      className={className}
      style={{
        z: depth,
        rotateX: interactive && !isMobile ? rotateX : 0,
        rotateY: interactive && !isMobile ? rotateY : 0,
        transformStyle: 'preserve-3d',
        transformOrigin: interactive ? transformOrigin : 'center center'
      }}
    >
      {children}
    </motion.div>
  );
};
