import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, PerformanceMonitor } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = React.memo(() => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate a spherical distribution of particles
  const sphere = useMemo(() => {
    const buffer = new Float32Array(2500 * 3); // Reduced particle count slightly for perf
    const radius = 2.0;
    for (let i = 0; i < buffer.length; i += 3) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = Math.cbrt(Math.random()) * radius;
      const sinPhi = Math.sin(phi);
      buffer[i] = r * sinPhi * Math.cos(theta);
      buffer[i + 1] = r * sinPhi * Math.sin(theta);
      buffer[i + 2] = r * Math.cos(phi);
    }
    return buffer;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Limit massive delta jumps (e.g. switching tabs back)
      const safeDelta = Math.min(delta, 0.1);
      // Create a very slow, drifting rotation
      ref.current.rotation.x -= safeDelta / 35;
      ref.current.rotation.y -= safeDelta / 45;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00ff00" // SB CAIO primary green
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
});

const Hero3DScene = React.memo(() => {
  const [dpr, setDpr] = useState(1.5);
  // Instantly render fallback null on mobile to save power, avoiding Canvas boot completely
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [disable3D, setDisable3D] = useState(isMobile);

  const timer = useMemo(() => new THREE.Timer(), []); // Register timer compliance mechanism natively

  if (disable3D) return null;

  return (
    <Canvas 
      camera={{ position: [0, 0, 1.5] }}
      dpr={dpr}
      gl={{ antialias: false, powerPreference: "high-performance" }} // Optimized GL config
    >
      <PerformanceMonitor 
        onDecline={() => {
           if (dpr > 1) {
             setDpr(1); // Step down quality first
           } else {
             setDisable3D(true); // Remove effects immediately if FPS still drops
           }
        }}
      />
      <ParticleField />
    </Canvas>
  );
});

export default Hero3DScene;
