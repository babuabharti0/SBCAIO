import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import Lenis from 'lenis';
import App from './App.tsx';
import './index.css';

// Initialize Lenis for smooth, inertia-based scrolling
const lenis = new Lenis({
  lerp: 0.1, // Controls the inertia/smoothness (lower = smoother/longer inertia)
  wheelMultiplier: 1, // Scroll sensitivity
});

// Sync Lenis with the browser's requestAnimationFrame loop for fluid movement
function raf(time: number) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
