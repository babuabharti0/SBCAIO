import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  className?: string;
}

export default function ThemeToggle({
  darkMode,
  onToggleTheme,
  className = '',
}: ThemeToggleProps) {
  return (
    <div
      id="theme-toggle-root"
      className={`select-none pointer-events-auto shrink-0 flex items-center justify-center ${className}`}
    >
      <button
        id="glass-theme-switch-btn"
        onClick={onToggleTheme}
        className="relative flex items-center justify-between w-[128px] h-[38px] liquid-glass-track cursor-pointer group rounded-full"
        aria-label="Toggle visual theme"
      >
        {/* Glow effect under the track */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/5 to-white/0 group-hover:via-white/10 transition-all duration-300 blur-md pointer-events-none" />

        {/* Sliding physical 3D liquid glass knob */}
        <motion.div
          id="liquid-glass-knob-wrapper"
          className="absolute w-[56px] h-[56px] z-20 pointer-events-none"
          style={{ top: '-10px' }}
          animate={{
            left: darkMode ? 'calc(100% - 47px)' : '-9px',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 25,
          }}
        >
          {/* Main 3D Spherical Glass Orb */}
          <div className="relative w-full h-full rounded-full liquid-glass-knob overflow-hidden flex items-center justify-center">
            {/* Liquid glare highlight (reflection crescent at top) */}
            <div className="absolute top-[2px] left-[2px] right-[2px] h-[55%] rounded-full bg-gradient-to-b from-white/40 to-white/0 border-t border-white/60 pointer-events-none" />
            
            {/* Secondary lower gloss highlight */}
            <div className="absolute bottom-[2px] left-[15%] right-[15%] h-[20%] rounded-full bg-gradient-to-t from-white/15 to-transparent pointer-events-none" />

            {/* Glowing back-light behind the icon */}
            <div className={`absolute inset-3 rounded-full blur-sm transition-opacity duration-300 ${
              darkMode ? 'bg-neutral-500/20 opacity-100' : 'bg-neutral-400/25 opacity-100'
            }`} />

            {/* Icon inside the glass orb */}
            <div className="relative z-30 flex items-center justify-center w-full h-full">
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="moon"
                    initial={{ scale: 0.5, rotate: -45, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: 45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon
                      size={18}
                      className="text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.4)]"
                      strokeWidth={2.5}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="sun"
                    initial={{ scale: 0.5, rotate: 45, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.5, rotate: -45, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun
                      size={18}
                      className="text-white drop-shadow-[0_2px_4px_rgba(255,255,255,0.5)]"
                      strokeWidth={2.5}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Text labels styled with perfect negative space */}
        <div className="w-full h-full flex items-center justify-between px-5 font-sans">
          {/* Dark state text (shows on left when knob is on right) */}
          <span
            className={`text-xs font-bold tracking-wider transition-all duration-300 ${
              darkMode
                ? 'opacity-100 translate-x-0 text-white'
                : 'opacity-0 -translate-x-2 text-transparent pointer-events-none'
            }`}
          >
            Dark
          </span>

          {/* Light state text (shows on right when knob is on left) */}
          <span
            className={`text-xs font-bold tracking-wider transition-all duration-300 ${
              !darkMode
                ? 'opacity-100 translate-x-0 text-white'
                : 'opacity-0 translate-x-2 text-transparent pointer-events-none'
            }`}
          >
            Light
          </span>
        </div>
      </button>
    </div>
  );
}
