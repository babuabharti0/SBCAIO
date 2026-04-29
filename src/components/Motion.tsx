import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

// Custom smooth tween easing to guarantee no bounce
const calmEasing: [number, number, number, number] = [0.25, 1, 0.5, 1];

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Increase delay for calmer sequential flow
      delayChildren: 0.1,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 12 }, // Keep slide-in very slight so it feels like a soft float
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.0, // Long smooth duration
      ease: calmEasing,
    },
  },
};

export const headingReveal = {
  hidden: { opacity: 0, y: 12, letterSpacing: "-0.03em", filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    letterSpacing: "0em",
    filter: "blur(0px)",
    transition: {
      duration: 1.2, 
      ease: calmEasing,
    },
  },
};

// Wrapper for container sections to trigger child animations
export const MotionSection = ({ children, className = '', id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-5%" }} // Fire slightly earlier
    variants={staggerContainer}
    className={`relative ${className}`}
  >
    {children}
  </motion.section>
);

// Wrapper for individual elements (headings, text, buttons)
export const MotionItem = ({ 
  children, 
  className = '', 
  elementType = 'div',
  customVariant,
  ...props 
}: { 
  children: React.ReactNode; 
  className?: string; 
  elementType?: keyof typeof motion;
  customVariant?: any;
  [key: string]: any;
}) => {
  const Component = motion[elementType as keyof typeof motion] as any;
  
  // Choose variant based on element type automatically if not provided
  let selectedVariant = fadeUp;
  if (customVariant) {
    selectedVariant = customVariant;
  } else if (typeof elementType === 'string' && elementType.startsWith('h')) {
    selectedVariant = headingReveal;
  }

  return (
    <Component variants={selectedVariant} className={className} {...props}>
      {children}
    </Component>
  );
};

// Interactive Tilt Card for cursor-responsive 3D effect
export const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Softened the spring massively to prevent erratic bounce when hovering/leaving
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 40 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 40 });

  // 3-5 degrees max tilt as requested
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const combinedVariants: any = {
    ...fadeUp,
    hover: { 
      y: -5, 
      scale: 1.02, 
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 255, 0, 0.4)",
      borderColor: "rgba(0, 255, 0, 0.8)",
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <motion.div
      variants={combinedVariants} 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover="hover"
      className={`relative group ${className}`}
    >
      <div className="absolute inset-0 rounded-3xl sm:-inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 z-0 pointer-events-none" />
      <div style={{ transform: "translateZ(10px)" }} className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
};

// Subtle background parallax wrapper
export const ParallaxLayer = ({ 
  children, 
  className = '', 
  offset = 50 // tiny pixel offset prevents huge layout shifts
}: { 
  children: React.ReactNode; 
  className?: string; 
  offset?: number; 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Create a tracking bounds that maps specifically between the element entering and leaving the screen
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Transform scrolls slightly against the grain of the viewport
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div ref={ref} className="relative w-full h-full">
        {/* We apply a negative inset to ensure the translated div doesn't reveal its edges */}
        <motion.div 
          style={{ y }} 
          className="absolute -inset-[100px] w-[calc(100%+200px)] h-[calc(100%+200px)]"
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};
