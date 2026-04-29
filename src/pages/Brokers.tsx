import React from 'react';
import { MotionSection } from '../components/Motion';
import { Hero3DBackground } from '../components/Hero3DBackground';

export const Brokers = () => {
  return (
    <div className="relative bg-black min-h-screen">
      <MotionSection className="relative min-h-[60vh] flex items-center justify-center text-white overflow-hidden">
        <Hero3DBackground />
      </MotionSection>
    </div>
  );
};
