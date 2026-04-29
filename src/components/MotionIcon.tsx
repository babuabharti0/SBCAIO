import React from 'react';
import { motion } from 'framer-motion';

export type MotionIconType = 'rotate' | 'lift' | 'pulse' | 'shift';

interface MotionIconProps {
  type: MotionIconType;
  children: React.ReactNode;
  className?: string;
}

export const MotionIcon: React.FC<MotionIconProps> = ({ type, children, className = '' }) => {
  const getVariants = () => {
    switch (type) {
      case 'rotate':
        return {
          hover: { rotate: 10, scale: 1.08 },
        };
      case 'lift':
        return {
          hover: { y: -3, scale: 1.05 },
        };
      case 'pulse':
        return {
          hover: { 
            scale: [1, 1.06, 1], 
            filter: "drop-shadow(0px 0px 8px rgba(0,255,0,0.6))",
          },
        };
      case 'shift':
        return {
          hover: { x: 3, scale: 1.05 },
        };
      default:
        return { hover: {} };
    }
  };

  return (
    <motion.div
      className={`inline-flex items-center justify-center ${className}`}
      whileHover="hover"
      variants={getVariants()}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
