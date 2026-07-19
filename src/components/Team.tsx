import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageSrc: string;
  socials: SocialLink[];
}

const teamData: TeamMember[] = [
  {
    name: "John Bella",
    role: "Founder & CEO",
    bio: "Drives enterprise acquisition, strategic marketing architecture, and high-level client relations. The primary bridge between complex algorithmic solutions and business scale.",
    imageSrc: "/assets/john-bela.png", // Builder will replace this with exact file name
    socials: [
      { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} strokeWidth={1.5}/> },
      { platform: "Instagram", url: "#", icon: <Instagram size={18} strokeWidth={1.5}/> }
    ]
  },
  {
    name: "Dinesh Kumar",
    role: "Co-Founder & Chief Developer",
    bio: "Engineers autonomous middleware, AI workflows, and digital infrastructure. Oversees dual-role technical quoting and client engagement to ensure flawless execution.",
    imageSrc: "/assets/dinesh.png", // Builder will replace this with exact file name
    socials: [
      { platform: "LinkedIn", url: "#", icon: <Linkedin size={18} strokeWidth={1.5}/> },
      { platform: "Instagram", url: "https://www.instagram.com/babua_bharti", icon: <Instagram size={18} strokeWidth={1.5}/> }
    ]
  }
];

// Fallback images to prevent broken profiles in preview if local assets are not yet uploaded
const fallbackImages: Record<string, string> = {
  "/assets/john-bela.png": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
  "/assets/dinesh.png": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
};

function TeamMemberCard({ member, idx }: { member: TeamMember; idx: number; key?: React.Key }) {
  const [imgSrc, setImgSrc] = useState(member.imageSrc);

  return (
    <div
      id={`team-member-card-${idx}`}
      className="glass-immutable rounded-2xl md:rounded-3xl overflow-hidden flex flex-col h-full group"
    >
      {/* Image Container: Massive edge-to-edge */}
      <div className="h-80 w-full overflow-hidden relative">
        <img
          id={`team-member-img-${idx}`}
          src={imgSrc}
          alt={member.name}
          onError={() => {
            console.error("Asset not found at path:", imgSrc);
            if (fallbackImages[member.imageSrc]) {
              setImgSrc(fallbackImages[member.imageSrc]);
            }
          }}
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-in-out cursor-pointer"
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Content Block */}
      <div className="p-6 md:p-8 flex flex-col justify-between flex-1 relative">
        <div>
          <h3
            id={`team-member-name-${idx}`}
            className="text-xl md:text-2xl font-semibold text-[#1BC311] tracking-tight"
          >
            {member.name}
          </h3>
          <p
            id={`team-member-role-${idx}`}
            className="text-[#E2E2E2] font-bold text-xs mb-4 uppercase tracking-wider"
          >
            {member.role}
          </p>
          <p
            id={`team-member-bio-${idx}`}
            className="text-[#E2E2E2] text-xs sm:text-sm md:text-base leading-relaxed font-normal"
          >
            {member.bio}
          </p>
        </div>

        {/* Social links block */}
        <div className="flex items-center gap-4 mt-6 justify-end">
          {member.socials.map((social, sIdx) => (
            <a
              key={sIdx}
              id={`team-member-social-${idx}-${sIdx}`}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on ${social.platform}`}
              className="text-white/40 hover:text-white transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="py-12 md:py-28 px-4 md:px-6 relative overflow-hidden bg-transparent transition-colors duration-300"
    >
      <div className="max-w-[88rem] mx-auto relative z-10" style={{ perspective: 1200 }}>
        <motion.div
          id="team-container"
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)', rotateX: 15 }}
          whileInView={{ opacity: 1, scale: 1, filter: 'none', rotateX: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', damping: 25, stiffness: 120, duration: 0.8 }}
          className="w-full flex flex-col"
        >
          {/* Header Block */}
          <div id="team-header" className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span
              id="team-eyebrow"
              className="text-xs sm:text-sm tracking-widest uppercase text-[#E2E2E2] font-bold block mb-4"
            >
              Algorithmic Stewardship
            </span>
            <h2
              id="team-title"
              className="text-[#1BC311] text-3xl sm:text-5xl md:text-6xl font-semibold tracking-[-0.03em] mb-4 md:mb-6"
            >
              The Architects.
            </h2>
            <p
              id="team-subtitle"
              className="text-[#E2E2E2] text-base md:text-xl leading-relaxed"
            >
              Engineered by a specialized collective of automation architects, data scientists, and operational scalers.
            </p>
          </div>

          {/* 3-Column Bento Grid */}
          <div
            id="team-grid"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto w-full"
          >
            {teamData.map((member, idx) => (
              <TeamMemberCard key={idx} member={member} idx={idx} />
            ))}
            
            <div className="relative w-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-[30px] shadow-2xl rounded-3xl p-8 flex flex-col justify-between overflow-hidden group">
              {/* Static Background covering the whole card */}
              <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover opacity-100"
                  src="https://res.cloudinary.com/jbblynim/video/upload/v1784398695/WhatsApp_Video_2026-07-18_at_23.47.08_zqo6w9.mp4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10"></div>
              </div>

              {/* Spacer to push content down below the graphic area */}
              <div className="h-48 w-full mb-6 relative z-10"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-[#1BC311] mb-1">Global Network</h3>
                <p className="text-[#E2E2E2]/60 text-[10px] uppercase tracking-widest font-bold mb-4">
                  DECENTRALIZED ARCHITECTURE
                </p>
                
                <p className="text-[#E2E2E2] text-sm leading-relaxed mb-8">
                  Wanna meet our team? Click to meet our collective of automation architects from all around the globe.
                </p>
                {/* CTA Button */}
                <Link 
                  to="/collective"
                  className="relative z-10 w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/[0.05] border border-white/20 text-white text-[13px] font-semibold hover:bg-white/[0.1] hover:border-white/40 transition-all"
                >
                  View The Collective
                  <span className="text-[#1BC311]">→</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
