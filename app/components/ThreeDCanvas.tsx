'use client';
import { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  color: string;
  size: number;
  type: 'sphere' | 'ring' | 'dust';
}

export default function ThreeDCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let width = canvas.width = 450;
    let height = canvas.height = 450;

    // Golden ratio for Fibonacci sphere distribution
    const phi = Math.PI * (3 - Math.sqrt(5));
    const points: Point3D[] = [];
    const radius = 110;

    // Generate Fibonacci Sphere
    const sphereCount = 100;
    for (let i = 0; i < sphereCount; i++) {
      const y = 1 - (i / (sphereCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y); // radius of circle at y
      const theta = phi * i; // golden angle increment
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        color: 'rgba(59, 130, 246, ', // Blue base
        size: 1.5,
        type: 'sphere',
      });
    }

    // Generate Orbiting Ring (Saturn-like)
    const ringCount = 35;
    for (let i = 0; i < ringCount; i++) {
      const angle = (i / ringCount) * Math.PI * 2;
      const ringRadius = radius * 1.5;
      const x = Math.cos(angle) * ringRadius;
      const z = Math.sin(angle) * ringRadius;
      // Slight vertical wave
      const y = Math.sin(angle * 3) * 12;

      points.push({
        x,
        y,
        z,
        color: 'rgba(6, 182, 212, ', // Cyan base
        size: 1.8,
        type: 'ring',
      });
    }

    // Generate Floating Dust
    const dustCount = 15;
    for (let i = 0; i < dustCount; i++) {
      const r = radius * (1.2 + Math.random() * 0.5);
      const theta = Math.random() * Math.PI * 2;
      const phiVal = Math.acos(Math.random() * 2 - 1);
      const x = r * Math.sin(phiVal) * Math.cos(theta);
      const y = r * Math.sin(phiVal) * Math.sin(theta);
      const z = r * Math.cos(phiVal);

      points.push({
        x,
        y,
        z,
        color: 'rgba(124, 58, 237, ', // Violet base
        size: 1.2,
        type: 'dust',
      });
    }

    // Handle mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const canvasCenterX = rect.left + rect.width / 2;
      const canvasCenterY = rect.top + rect.height / 2;
      // Mouse distance from canvas center normalized between -1 and 1
      mouseRef.current.targetX = (e.clientX - canvasCenterX) / (rect.width / 2);
      mouseRef.current.targetY = (e.clientY - canvasCenterY) / (rect.height / 2);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Handle resizing to match screen pixel ratio
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };
    
    resize();
    window.addEventListener('resize', resize);

    // Initial angles for rotation
    let angleX = 0.003; // Base X rotation speed
    let angleY = 0.005; // Base Y rotation speed

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const cameraDistance = 350;

      // Smooth interpolation for mouse influence (lerp)
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Adjust rotation speed based on mouse position
      const currentAngleX = angleX + mouse.y * 0.015;
      const currentAngleY = angleY + mouse.x * 0.015;

      const cosX = Math.cos(currentAngleX);
      const sinX = Math.sin(currentAngleX);
      const cosY = Math.cos(currentAngleY);
      const sinY = Math.sin(currentAngleY);

      // Rotate and project all points
      const projectedPoints = points.map((p) => {
        // Rotate around Y-axis (Yaw)
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.x * sinY + p.z * cosY;

        // Rotate around X-axis (Pitch)
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = p.y * sinX + z1 * cosX;

        // Save new 3D coordinates for next iteration (for continuous spin)
        p.x = x1;
        p.y = y2;
        p.z = z2;

        // Perspective calculation
        const perspective = cameraDistance / (cameraDistance + z2);
        const screenX = centerX + x1 * perspective;
        const screenY = centerY + y2 * perspective;

        return {
          screenX,
          screenY,
          z: z2,
          perspective,
          color: p.color,
          size: p.size * perspective,
          type: p.type,
        };
      });

      // Draw central glow core
      const glowGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, radius * 0.85);
      glowGrad.addColorStop(0, 'rgba(59, 130, 246, 0.18)');
      glowGrad.addColorStop(0.5, 'rgba(124, 58, 237, 0.06)');
      glowGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius * 0.95, 0, Math.PI * 2);
      ctx.fillStyle = glowGrad;
      ctx.fill();

      // Sort points back-to-front (Z-sorting) for correct rendering order
      projectedPoints.sort((a, b) => b.z - a.z);

      // Draw Connection Lines (Plexus) in 3D Space
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        
        // Skip plexus lines for dust particles to keep the visual clean
        if (p1.type === 'dust') continue;

        let connections = 0;
        const maxConnections = p1.type === 'ring' ? 2 : 4;

        for (let j = i + 1; j < projectedPoints.length; j++) {
          if (connections >= maxConnections) break;

          const p2 = projectedPoints[j];
          if (p2.type === 'dust') continue;

          // Calculate distance in screen coordinates (or 3D space approximate)
          const dx = p1.screenX - p2.screenX;
          const dy = p1.screenY - p2.screenY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Connect lines between close points
          const maxDistance = p1.type === 'ring' && p2.type === 'ring' ? 45 : 65;

          if (dist < maxDistance) {
            connections++;
            ctx.beginPath();
            ctx.moveTo(p1.screenX, p1.screenY);
            ctx.lineTo(p2.screenX, p2.screenY);

            // Opacity is scaling based on proximity and Z-depth (behind core is dimmer)
            const fade = (1 - dist / maxDistance);
            const zFade = Math.max(0.05, (300 - Math.max(0, p1.z + p2.z)) / 300);
            
            ctx.strokeStyle = `rgba(124, 58, 237, ${0.12 * fade * zFade})`;
            ctx.lineWidth = 0.5 * zFade;
            ctx.stroke();
          }
        }
      }

      // Draw Particles
      projectedPoints.forEach((p) => {
        // Draw particle shadow glow for front particles
        if (p.z < 30) {
          ctx.beginPath();
          ctx.arc(p.screenX, p.screenY, p.size * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = p.color + '0.08)';
          ctx.fill();
        }

        // Draw particle core
        ctx.beginPath();
        ctx.arc(p.screenX, p.screenY, p.size, 0, Math.PI * 2);
        // Alpha based on Z depth
        const alpha = Math.max(0.15, (250 - p.z) / 320);
        ctx.fillStyle = p.color + `${alpha})`;
        ctx.fill();
      });

      // Ambient orbit rings (subtle vector circles)
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.015)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, radius * 1.5, radius * 0.4, Math.PI / 6, 0, Math.PI * 2);
      ctx.stroke();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="w-full h-full min-w-[280px] min-h-[280px] sm:min-w-[350px] sm:min-h-[350px] md:min-w-[400px] md:min-h-[400px] flex items-center justify-center relative">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[450px] max-h-[450px] aspect-square object-contain pointer-events-auto"
      />
    </div>
  );
}
