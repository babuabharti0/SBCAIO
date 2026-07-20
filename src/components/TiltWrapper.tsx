import React, { useRef, useState, MouseEvent } from 'react';

interface TiltWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function TiltWrapper({ children, className = '' }: TiltWrapperProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate percentage from center (-1 to 1)
    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;
    
    // Multiply by max rotation degrees (e.g., 20)
    const rotateX = yPct * -20; // Invert Y for natural tilt
    const rotateY = xPct * 20;
    
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `perspective(800px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(${rotate.x === 0 && rotate.y === 0 ? '1, 1, 1' : '1.02, 1.02, 1.02'})`,
        transformStyle: "preserve-3d",
        transition: rotate.x === 0 && rotate.y === 0 ? "transform 0.5s ease-out" : "transform 0.1s ease-out",
      }}
    >
      {children}
    </div>
  );
}
