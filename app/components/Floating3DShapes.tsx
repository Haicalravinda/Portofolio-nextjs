'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/* ─────────────────────────────────────────────
   Pure CSS 3D Shape Sub-Components
   Each shape is built entirely with CSS 3D transforms
   and gradient fills, no images or SVGs needed.
   ───────────────────────────────────────────── */

/** Rotating Crystal Diamond – a double-pyramid shape using CSS triangles */
function CrystalDiamond({ size = 40, colors }: { size?: number; colors: [string, string] }) {
  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size * 1.4,
        transformStyle: 'preserve-3d',
        animation: 'spin-y 8s linear infinite',
      }}
    >
      {/* Top pyramid */}
      <div
        className="absolute left-0 right-0 top-0"
        style={{
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size * 0.7}px solid ${colors[0]}`,
          filter: 'drop-shadow(0 0 8px ' + colors[0] + '40)',
        }}
      />
      {/* Bottom pyramid (inverted) */}
      <div
        className="absolute left-0 right-0"
        style={{
          top: size * 0.7,
          width: 0,
          height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderTop: `${size * 0.7}px solid ${colors[1]}`,
          filter: 'drop-shadow(0 0 8px ' + colors[1] + '40)',
        }}
      />
      {/* Inner glow */}
      <div
        className="absolute rounded-full"
        style={{
          top: '35%',
          left: '25%',
          width: size * 0.5,
          height: size * 0.3,
          background: `radial-gradient(ellipse, ${colors[0]}60 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}

/** Rotating 3D Cube – six-faced with glassmorphism sides */
function GlassCube({ size = 36 }: { size?: number }) {
  const half = size / 2;
  const faceStyle = (bg: string, transform: string): React.CSSProperties => ({
    position: 'absolute',
    width: size,
    height: size,
    background: bg,
    border: '1px solid rgba(255,255,255,0.25)',
    borderRadius: 4,
    backdropFilter: 'blur(4px)',
    transform,
  });

  return (
    <div
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
        animation: 'spin-cube 12s linear infinite',
        position: 'relative',
      }}
    >
      <div style={faceStyle('rgba(59,130,246,0.25)', `translateZ(${half}px)`)} />
      <div style={faceStyle('rgba(124,58,237,0.25)', `rotateY(180deg) translateZ(${half}px)`)} />
      <div style={faceStyle('rgba(6,182,212,0.2)', `rotateY(90deg) translateZ(${half}px)`)} />
      <div style={faceStyle('rgba(16,185,129,0.2)', `rotateY(-90deg) translateZ(${half}px)`)} />
      <div style={faceStyle('rgba(59,130,246,0.15)', `rotateX(90deg) translateZ(${half}px)`)} />
      <div style={faceStyle('rgba(124,58,237,0.15)', `rotateX(-90deg) translateZ(${half}px)`)} />
    </div>
  );
}

/** Glowing Orb – layered radial gradients with pulsing glow */
function GlowOrb({ size = 32, color1 = '#3b82f6', color2 = '#7c3aed' }: { size?: number; color1?: string; color2?: string }) {
  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Outer pulse glow */}
      <div
        className="absolute inset-0 rounded-full animate-pulse-soft"
        style={{
          background: `radial-gradient(circle, ${color1}30 0%, transparent 70%)`,
          transform: 'scale(2.2)',
        }}
      />
      {/* Main sphere */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 35% 35%, ${color1}ee, ${color2}bb 60%, ${color2}60 100%)`,
          boxShadow: `0 0 20px ${color1}50, inset 0 -4px 8px ${color2}40`,
        }}
      />
      {/* Specular highlight */}
      <div
        className="absolute rounded-full"
        style={{
          top: '18%',
          left: '22%',
          width: '30%',
          height: '20%',
          background: 'rgba(255,255,255,0.6)',
          borderRadius: '50%',
          filter: 'blur(2px)',
        }}
      />
    </div>
  );
}

/** CSS Torus Ring – concentric circles with 3D rotation */
function TorusRing({ size = 44, color = '#06b6d4' }: { size?: number; color?: string }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        transformStyle: 'preserve-3d',
        animation: 'spin-torus 10s linear infinite',
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: size,
          height: size,
          border: `3px solid ${color}80`,
          boxShadow: `0 0 12px ${color}40, inset 0 0 12px ${color}20`,
          position: 'relative',
        }}
      >
        {/* Inner ring for depth illusion */}
        <div
          className="absolute rounded-full"
          style={{
            top: '15%',
            left: '15%',
            width: '70%',
            height: '70%',
            border: `2px solid ${color}40`,
          }}
        />
      </div>
    </div>
  );
}

/** Hexagon Star – layered hexagonal shape with gradient */
function HexStar({ size = 36, color1 = '#f59e0b', color2 = '#f43f5e' }: { size?: number; color1?: string; color2?: string }) {
  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
        animation: 'spin-y 15s linear infinite',
      }}
    >
      {/* Two overlapping triangles to form a star */}
      <div
        className="absolute"
        style={{
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: `${size * 0.45}px solid transparent`,
          borderRight: `${size * 0.45}px solid transparent`,
          borderBottom: `${size * 0.78}px solid ${color1}`,
          filter: `drop-shadow(0 0 6px ${color1}50)`,
          opacity: 0.85,
        }}
      />
      <div
        className="absolute"
        style={{
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 0,
          height: 0,
          borderLeft: `${size * 0.45}px solid transparent`,
          borderRight: `${size * 0.45}px solid transparent`,
          borderTop: `${size * 0.78}px solid ${color2}`,
          filter: `drop-shadow(0 0 6px ${color2}50)`,
          opacity: 0.85,
        }}
      />
    </div>
  );
}

/** Floating Ring Dots – orbital ring of small dots */
function OrbitalDots({ size = 50, color = '#10b981' }: { size?: number; color?: string }) {
  const dotCount = 8;
  return (
    <div
      className="relative"
      style={{
        width: size,
        height: size,
        animation: 'spin-y 7s linear infinite',
      }}
    >
      {Array.from({ length: dotCount }).map((_, i) => {
        const angle = (i / dotCount) * Math.PI * 2;
        const x = Math.cos(angle) * (size / 2 - 4) + size / 2 - 3;
        const y = Math.sin(angle) * (size / 2 - 4) + size / 2 - 3;
        return (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 6,
              height: 6,
              left: x,
              top: y,
              background: color,
              boxShadow: `0 0 8px ${color}60`,
              opacity: 0.5 + (i / dotCount) * 0.5,
            }}
          />
        );
      })}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Shape placement configuration:
   Each entry defines a shape, its position,
   and its animation delay.
   ───────────────────────────────────────────── */

interface FloatingShapeConfig {
  id: string;
  shape: React.ReactNode;
  position: string;   // Tailwind position classes
  floatClass: string;  // Which float animation to use
  delay: number;       // framer-motion pop-in delay (seconds)
}

const shapeConfigs: FloatingShapeConfig[] = [
  // ── Near Education Section ──
  {
    id: 'diamond-edu',
    shape: <CrystalDiamond size={32} colors={['#3b82f6', '#7c3aed']} />,
    position: 'top-[22%] left-[3%] md:left-[6%]',
    floatClass: 'animate-float',
    delay: 0,
  },
  {
    id: 'cube-edu',
    shape: <GlassCube size={28} />,
    position: 'top-[26%] right-[4%] md:right-[8%]',
    floatClass: 'animate-float-delay-1',
    delay: 0.15,
  },
  // ── Near Experience Section ──
  {
    id: 'orb-exp',
    shape: <GlowOrb size={28} color1="#7c3aed" color2="#3b82f6" />,
    position: 'top-[38%] left-[2%] md:left-[5%]',
    floatClass: 'animate-float-delay-2',
    delay: 0,
  },
  {
    id: 'torus-exp',
    shape: <TorusRing size={36} color="#7c3aed" />,
    position: 'top-[42%] right-[3%] md:right-[7%]',
    floatClass: 'animate-float',
    delay: 0.2,
  },
  // ── Near Projects Section ──
  {
    id: 'star-proj',
    shape: <HexStar size={30} color1="#06b6d4" color2="#3b82f6" />,
    position: 'top-[55%] left-[3%] md:left-[4%]',
    floatClass: 'animate-float-delay-1',
    delay: 0.1,
  },
  {
    id: 'dots-proj',
    shape: <OrbitalDots size={40} color="#06b6d4" />,
    position: 'top-[58%] right-[2%] md:right-[6%]',
    floatClass: 'animate-float-delay-2',
    delay: 0.05,
  },
  // ── Near Skills Section ──
  {
    id: 'diamond-skill',
    shape: <CrystalDiamond size={26} colors={['#10b981', '#06b6d4']} />,
    position: 'top-[72%] left-[4%] md:left-[7%]',
    floatClass: 'animate-float',
    delay: 0.1,
  },
  {
    id: 'cube-skill',
    shape: <GlassCube size={24} />,
    position: 'top-[70%] right-[3%] md:right-[5%]',
    floatClass: 'animate-float-delay-1',
    delay: 0.2,
  },
  // ── Near Certs Section ──
  {
    id: 'orb-cert',
    shape: <GlowOrb size={24} color1="#f59e0b" color2="#f43f5e" />,
    position: 'top-[85%] left-[2%] md:left-[6%]',
    floatClass: 'animate-float-delay-2',
    delay: 0,
  },
  {
    id: 'torus-cert',
    shape: <TorusRing size={30} color="#f59e0b" />,
    position: 'top-[88%] right-[4%] md:right-[8%]',
    floatClass: 'animate-float',
    delay: 0.15,
  },
];

/* ─────────────────────────────────────────────
   Individual Shape Wrapper with InView pop-in
   ───────────────────────────────────────────── */
function PopInShape({ config }: { config: FloatingShapeConfig }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '80px 0px',
  });

  return (
    <div
      ref={ref}
      className={`absolute ${config.position} pointer-events-none z-[5] hidden md:block`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -45 }}
        animate={
          inView
            ? { opacity: 1, scale: 1, rotate: 0 }
            : { opacity: 0, scale: 0, rotate: -45 }
        }
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: config.delay,
        }}
        className={config.floatClass}
      >
        {config.shape}
      </motion.div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Export: renders all floating 3D shapes
   as absolute-positioned decorative elements
   ───────────────────────────────────────────── */
export default function Floating3DShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {shapeConfigs.map((config) => (
        <PopInShape key={config.id} config={config} />
      ))}
    </div>
  );
}
