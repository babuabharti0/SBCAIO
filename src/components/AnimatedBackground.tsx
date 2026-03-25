import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    
    // Check if mobile to optimize performance
    const isMobile = window.innerWidth < 768;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      z: number; // Depth for parallax and sizing
      vx: number;
      vy: number;
      baseRadius: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.z = Math.random() * 2 + 0.5; // Depth between 0.5 and 2.5
        
        // Slower, smoother movement for premium feel
        const speed = isMobile ? 0.1 : 0.15;
        this.vx = ((Math.random() - 0.5) * speed) / this.z;
        this.vy = ((Math.random() - 0.5) * speed) / this.z;
        
        // Size depends on depth
        this.baseRadius = (Math.random() * 1.5 + 0.5) / this.z;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around smoothly
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
      }

      draw(parallaxX: number, parallaxY: number) {
        if (!ctx) return;
        
        // Apply parallax based on Z depth
        const px = this.x + parallaxX * (1 / this.z) * 40;
        const py = this.y + parallaxY * (1 / this.z) * 40;

        ctx.beginPath();
        ctx.arc(px, py, this.baseRadius, 0, Math.PI * 2);
        // Subtle green tint
        ctx.fillStyle = `rgba(0, 255, 0, ${0.3 / this.z})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      // Reduce particle count on mobile for performance
      const density = isMobile ? 25000 : 12000; 
      const numParticles = Math.min(Math.floor((canvas.width * canvas.height) / density), isMobile ? 40 : 120);
      
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return;
      // Normalize mouse coordinates from -1 to 1 based on screen center
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      targetMouseY = (e.clientY / window.innerHeight) * 2 - 1;
    };

    const animate = () => {
      // Smoothly interpolate mouse position for parallax
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Premium dark background
      ctx.fillStyle = '#050505';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw lines first so they are behind particles
      ctx.lineWidth = 0.5;
      const maxDistance = isMobile ? 120 : 180;
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        const px1 = p1.x + mouseX * (1 / p1.z) * 40;
        const py1 = p1.y + mouseY * (1 / p1.z) * 40;
        
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          
          const px2 = p2.x + mouseX * (1 / p2.z) * 40;
          const py2 = p2.y + mouseY * (1 / p2.z) * 40;

          const dx = px1 - px2;
          const dy = py1 - py2;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.moveTo(px1, py1);
            ctx.lineTo(px2, py2);
            
            const avgZ = (p1.z + p2.z) / 2;
            const opacity = (1 - distance / maxDistance) * (0.25 / avgZ);
            
            // Subtle neon green lines
            ctx.strokeStyle = `rgba(0, 255, 0, ${opacity})`;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        p.update();
        p.draw(mouseX, mouseY);
      });

      // Add a subtle radial gradient overlay to make text pop and edges fade
      const radialGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height) / 1.5
      );
      radialGradient.addColorStop(0, 'rgba(5, 5, 5, 0)');
      radialGradient.addColorStop(1, 'rgba(5, 5, 5, 0.9)');
      ctx.fillStyle = radialGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    
    // Initial setup
    resize();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
