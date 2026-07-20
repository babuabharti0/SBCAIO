import React from 'react';
import Hero from './components/Hero';
import MarketReality from './components/MarketReality';
import CAIOTiers from './components/CAIOTiers';
import Team from './components/Team';
import DigitalRealEstate from './components/DigitalRealEstate';
import LeadCapture from './components/LeadCapture';
import Contact from './components/Contact';
import Faq from './components/Faq';

interface HomePageProps {
  onOpenAudit: () => void;
  onSelectTier: (tier: string) => void;
}

export default function HomePage({ onOpenAudit, onSelectTier }: HomePageProps) {
  return (
    <>
      <div id="hero">
        <Hero onOpenAudit={onOpenAudit} />
      </div>
      <MarketReality />
      <CAIOTiers onSelectTier={onSelectTier} />
      <Team />
      <DigitalRealEstate />
      <LeadCapture onOpenAudit={onOpenAudit} />
      <Faq />
      <Contact />
    </>
  );
}
