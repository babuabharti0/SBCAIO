import React, { useRef, Suspense } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

// Lazy load the heavy 3D components to prevent blocking the main thread
const LazyHero3DScene = React.lazy(() => import('./Hero3DScene'));

export const Hero3DBackground = React.memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  
  // Use framer-motion inView to immediately kill background 3D calculations when scrolling past the hero
  const inView = useInView(ref, { margin: "200px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  // Very minimal movement (scrolls down slightly slower than the page to create parallax)
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-60 overflow-hidden">
      <div ref={ref} className="relative w-full h-full">
        <motion.div style={{ y }} className="w-full h-full">
          {inView && (
            <Suspense fallback={null}>
              <LazyHero3DScene />
            </Suspense>
          )}
        </motion.div>
      </div>
    </div>
  );
});
