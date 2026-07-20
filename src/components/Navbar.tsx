import React from 'react';
import LogoIcon from './LogoIcon';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  darkMode: boolean;
  onToggleTheme: () => void;
  onOpenAudit: () => void;
  scrollToSection: (id: string) => void;
}

export default function Navbar({
  darkMode,
  onToggleTheme,
  onOpenAudit,
  scrollToSection,
}: NavbarProps) {
  return (
    <nav
      id="navbar-container"
      className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 py-2 max-w-[88rem] mx-auto mt-1 md:mt-2"
    >
      <div
        id="navbar-glass-pill"
        className="w-full glass-immutable rounded-full px-3 py-1 md:px-6 md:py-2 flex items-center justify-between"
      >
        {/* Left: Logo + Wordmark */}
        <div
          id="navbar-logo-group"
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => scrollToSection('hero')}
        >
          <LogoIcon className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] text-white transition-transform duration-300 group-hover:scale-110" />
        </div>

        {/* Center: Links (hidden below md) */}
        <div
          id="navbar-menu-links"
          className="hidden md:flex items-center gap-8"
        >
          <button
            id="nav-link-home"
            onClick={() => scrollToSection('hero')}
            className="text-sm text-white/70 hover:text-white font-medium transition-colors duration-200 cursor-pointer"
          >
            Home
          </button>
          <button
            id="nav-link-architecture"
            onClick={() => scrollToSection('architecture')}
            className="text-sm text-white/70 hover:text-white font-medium transition-colors duration-200 cursor-pointer"
          >
            Architecture
          </button>
          <button
            id="nav-link-caio"
            onClick={() => scrollToSection('caio')}
            className="text-sm text-white/70 hover:text-white font-medium transition-colors duration-200 cursor-pointer"
          >
            Fractional CAIO
          </button>
          <button
            id="nav-link-real-estate"
            onClick={() => scrollToSection('real-estate')}
            className="text-sm text-white/70 hover:text-white font-medium transition-colors duration-200 cursor-pointer"
          >
            Digital Infrastructure
          </button>
          <button
            id="nav-link-metrics"
            onClick={() => scrollToSection('metrics')}
            className="text-sm text-white/70 hover:text-white font-medium transition-colors duration-200 cursor-pointer"
          >
            Performance Metrics
          </button>
        </div>

        {/* Right: Action button and Theme Toggle */}
        <div id="navbar-actions" className="flex items-center gap-2 md:gap-4">
          <ThemeToggle
            darkMode={darkMode}
            onToggleTheme={onToggleTheme}
            className="scale-75 sm:scale-90 md:scale-100 origin-right"
          />
          {/* Action button */}
          <button
            id="navbar-audit-button"
            onClick={onOpenAudit}
            className="bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-black/15 dark:border-white/15 text-xs md:text-sm font-semibold px-3 py-1.5 md:px-5 md:py-2 rounded-full hover:scale-102 hover:shadow-lg active:scale-98 transition-all duration-200 cursor-pointer shrink-0"
          >
            <span className="hidden sm:inline">Audit My Inefficiencies</span>
            <span className="sm:hidden">Audit</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
