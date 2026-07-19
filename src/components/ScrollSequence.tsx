import React, { useEffect, useRef } from 'react';

export default function ScrollSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const totalFrames = 126;
    let animationFrameId: number;

    const drawFrame = (index: number) => {
      const img = imagesRef.current[index];
      if (!img || !img.complete || img.naturalWidth === 0) return;

      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      
      const ratio = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const newWidth = imgWidth * ratio;
      const newHeight = imgHeight * ratio;
      const x = (canvasWidth - newWidth) / 2;
      const y = (canvasHeight - newHeight) / 2;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, x, y, newWidth, newHeight);
    };

    // Preload Images
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const index = i - 1;
      img.src = `/frames/frames${String(i).padStart(8, '0')}.webp`;
      img.onload = () => {
        if (index === currentFrameRef.current) {
          drawFrame(index);
        }
      };
      imagesRef.current.push(img);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawFrame(currentFrameRef.current);
    };

    const handleScroll = () => {
      const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const scrollFraction = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      
      let frameIndex = Math.floor(scrollFraction * totalFrames);
      if (frameIndex > 125) frameIndex = 125;
      if (frameIndex < 0) frameIndex = 0;
      
      if (frameIndex !== currentFrameRef.current) {
        currentFrameRef.current = frameIndex;
        animationFrameId = requestAnimationFrame(() => {
          drawFrame(currentFrameRef.current);
        });
      }
    };

    // Initial setup
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full object-cover -z-30 opacity-100 pointer-events-none" />
    </>
  );
}
