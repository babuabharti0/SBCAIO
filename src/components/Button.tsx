import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Button = ({ children, variant = 'primary', className = '', href = '#', onClick }: { children: React.ReactNode; variant?: 'primary' | 'outline'; className?: string; href?: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => {
  const [rippleArray, setRippleArray] = useState<{ x: number, y: number, id: number }[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRippleArray(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRippleArray(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);
  };

  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-8 py-3 rounded-full font-orbitron text-sm font-bold transition-all duration-300";
  const variants = {
    primary: "bg-primary text-white shadow-[0_0_15px_rgba(0,255,0,0.2)] hover:shadow-[0_0_30px_rgba(0,255,0,0.6)] border border-primary/50 hover:border-primary/100",
    outline: "border-2 border-primary text-primary hover:bg-primary/90 hover:text-white shadow-[0_0_10px_rgba(0,255,0,0.1)] hover:shadow-[0_0_25px_rgba(0,255,0,0.5)]"
  };
  
  return (
    <motion.a 
      href={href} 
      onClick={handleClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`group ${baseStyles} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-full blur-md"></div>
      
      {/* Ripple Container */}
      <div className="absolute inset-0 pointer-events-none rounded-full overflow-hidden">
        <AnimatePresence>
          {rippleArray.map((ripple) => (
            <motion.span
              key={ripple.id}
              initial={{ top: ripple.y, left: ripple.x, scale: 0, opacity: 0.4 }}
              animate={{ scale: 4, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute w-20 h-20 -mt-10 -ml-10 bg-white/40 rounded-full"
            />
          ))}
        </AnimatePresence>
      </div>
    </motion.a>
  );
};
