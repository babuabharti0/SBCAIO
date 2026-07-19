import React from 'react';
import { ShieldCheck, Zap, LineChart, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CAIOTiersProps {
  onSelectTier: (tierName: string) => void;
}

export default function CAIOTiers({ onSelectTier }: CAIOTiersProps) {
  const tiers = [
    {
      id: 'foundation',
      name: '30-Day Foundation',
      icon: Zap,
      subtitle: 'Audit & High-ROI Pilot',
      pricing: '$2,999 - $4,999',
      period: 'Fixed Fee',
      focus: 'Operational workflow audit, strict data governance layout, and deployment of one high-ROI pilot system to prove empirical financial value.',
      features: [
        'Full Systems Diagnostic & Audit',
        'Strict Data Sovereignty Mapping',
        '1x Core Autonomous Workflow Pilot',
        'Zero API Churn Guarantee',
        'Executive Playbook Delivery',
      ],
      isHighlighted: false,
      ctaText: 'Deploy Foundation',
    },
    {
      id: 'caio',
      name: 'Operational CAIO',
      icon: ShieldCheck,
      subtitle: 'Fractional Retainer',
      pricing: '$2,999 - $4,999',
      period: '/ mo',
      focus: 'Active infrastructure management. Connects CRM, fulfillment, and operations via enterprise-grade middleware. Expands workflow capacity equivalent to 3 full-time roles.',
      features: [
        'Dedicated Fractional CAIO Support',
        'Unlimited API Integrations (MCP-based)',
        'Fulfillment & CRM Deep Plumbing',
        'Direct SLA Performance Monitoring',
        'Saves ~120 Administrative Hours/Mo',
        'Equivalent to 3x Full-Time Roles',
      ],
      isHighlighted: true,
      ctaText: 'Initialize Retainer',
    },
    {
      id: 'enterprise',
      name: 'Enterprise Elite',
      icon: LineChart,
      subtitle: 'Complete Algorithmic Control',
      pricing: '$9,999+',
      period: '/ mo',
      focus: 'Complete data sovereignty, advanced vector models, compounding algorithmic feedback loops, and automated board-level metric reporting.',
      features: [
        'Custom Vector & LLM Finetuning',
        'Compounding Algorithmic Feedback Loops',
        'SLA-Backed High-Performance Middleware',
        'Automated Board-Level Metric Reporting',
        'Private Cloud/On-Prem Deployments',
        'Dedicated Operational Engineers',
      ],
      isHighlighted: false,
      ctaText: 'Integrate Elite Class',
    },
  ];

  return (
    <section
      id="caio"
      className="px-4 md:px-6 py-12 md:py-28 relative overflow-hidden bg-transparent transition-colors duration-300"
    >
      <div className="max-w-[88rem] mx-auto relative z-10">
        {/* Header Block */}
        <div id="caio-header" className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <h2
            id="caio-title"
            className="text-[#1BC311] text-2xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] mt-6 mb-4 md:mb-6"
          >
            Fractional CAIO Architecture
          </h2>
          <p
            id="caio-subtitle"
            className="text-[#E2E2E2] text-sm md:text-xl leading-relaxed"
          >
            Avoid the overhead of a permanent $350k+ executive payroll liability. Allocate capital efficiently into modular enterprise-grade algorithmic stewardship.
          </p>
        </div>

        {/* Pricing/Retainer Grid with Advanced 3D Reveal and Staggering */}
        <motion.div
          id="caio-grid"
          style={{ perspective: 1200 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {tiers.map((tier) => {
            const IconComponent = tier.icon;
            return (
              <motion.div
                key={tier.id}
                id={`caio-card-${tier.id}`}
                variants={{
                  hidden: { opacity: 0, scale: 0.95, filter: 'blur(10px)', rotateX: 15 },
                  visible: { 
                    opacity: 1, 
                    scale: 1, 
                    filter: 'none', 
                    rotateX: 0,
                    transition: { type: 'spring', damping: 25, stiffness: 120, duration: 0.8 }
                  }
                }}
                whileHover={{ y: tier.isHighlighted ? -4 : -6, scale: tier.isHighlighted ? 1.03 : 1.02, transition: { type: 'spring', stiffness: 200, damping: 20 } }}
                className={`flex flex-col justify-between p-5 md:p-10 relative bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] backdrop-saturate-[210%] backdrop-brightness-[95%] shadow-2xl rounded-2xl overflow-hidden ${
                  tier.isHighlighted
                    ? 'border-2 border-black/60 dark:border-white/60 lg:scale-103 z-10 shadow-lg dark:shadow-white/5'
                    : ''
                }`}
              >


                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-[#1BC311] tracking-tight">
                        {tier.name}
                      </h3>
                      <p className="text-[10px] md:text-xs text-[#E2E2E2] uppercase tracking-wider font-semibold mt-1">
                        {tier.subtitle}
                      </p>
                    </div>
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-black/10 dark:bg-white/10 flex items-center justify-center text-white border border-black/20 dark:border-white/20 shrink-0">
                      <IconComponent size={20} md:size={24} strokeWidth={1.5} />
                    </div>
                  </div>

                  {/* Pricing Tag */}
                  <div className="mb-4 md:mb-6 flex items-baseline gap-2">
                    <span className="text-xl md:text-4xl font-semibold text-[#E2E2E2] tracking-tight">
                      {tier.pricing}
                    </span>
                    <span className="text-xs md:text-sm font-medium text-[#E2E2E2]">
                      {tier.period}
                    </span>
                  </div>

                  {/* Focus Statement */}
                  <p className="text-[#E2E2E2] text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-8">
                    {tier.focus}
                  </p>

                  <div className="border-t border-black/10 dark:border-white/10 my-4 md:my-6" />

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 md:space-y-4 mb-6 md:mb-8">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 md:gap-3">
                        <CheckCircle2 size={16} md:size={18} strokeWidth={1.5} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-[#E2E2E2] text-xs sm:text-sm md:text-base">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3 md:py-4 rounded-full font-semibold text-xs sm:text-sm md:text-base transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                    tier.isHighlighted
                      ? 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md shadow-md'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ChevronRight size={14} md:size={16} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
