import React from 'react';

interface LogoIconProps {
  className?: string;
}

export default function LogoIcon({ className = 'w-7 h-7' }: LogoIconProps) {
  return (
    <img
      id="logo-icon-img"
      src="/assets/logo.png"
      alt="CAIO Logo"
      className={`${className} object-contain`}
      referrerPolicy="no-referrer"
    />
  );
}
