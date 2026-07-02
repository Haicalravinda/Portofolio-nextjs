'use client';
import { useEffect, useRef, useState } from 'react';

export default function MouseGlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const container = containerRef.current;
    if (!container) return;

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updateGlow = () => {
      // Smooth interpolation (lerp) to avoid lag and create a fluid delay
      x += (targetX - x) * 0.1;
      y += (targetY - y) * 0.1;

      if (container) {
        container.style.setProperty('--mouse-x', `${x}px`);
        container.style.setProperty('--mouse-y', `${y}px`);
      }
      requestAnimationFrame(updateGlow);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    const animId = requestAnimationFrame(updateGlow);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none -z-10 transition-opacity duration-300 opacity-60"
      style={{
        background: `radial-gradient(450px circle at var(--mouse-x, -999px) var(--mouse-y, -999px), rgba(59, 130, 246, 0.08) 0%, rgba(124, 58, 237, 0.04) 40%, rgba(6, 182, 212, 0.01) 70%, transparent 100%)`
      }}
    />
  );
}
