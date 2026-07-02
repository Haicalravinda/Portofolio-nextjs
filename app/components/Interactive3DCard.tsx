'use client';
import { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import { FaReact, FaDatabase, FaCode } from 'react-icons/fa';
import ThreeDCanvas from './ThreeDCanvas';

export default function Interactive3DCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to the card's center (range: -0.5 to 0.5)
    const mouseX = (e.clientX - rect.left - width / 2) / width;
    const mouseY = (e.clientY - rect.top - height / 2) / height;

    // Set rotation angles (limit maximum tilt to ~15 degrees)
    setRotateX(-mouseY * 15);
    setRotateY(mouseX * 15);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className="relative flex items-center justify-center p-8 select-none"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Background Glow (Soft light that matches card position) */}
      <div 
        className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-blue-500/10 via-violet-500/10 to-cyan-500/10 blur-3xl transition-transform duration-500 ease-out pointer-events-none"
        style={{
          transform: `translate3d(${rotateY * 2}px, ${-rotateX * 2}px, -50px)`,
        }}
      />

      {/* Floating React, DB, and Code badges in 3D Space */}
      <div
        className="absolute -top-4 -left-4 w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100/80 dark:border-slate-700/80 shadow-md flex items-center justify-center text-blue-500 dark:text-blue-400 z-30 transition-transform duration-500 ease-out animate-float"
        style={{
          transform: `translate3d(${rotateY * 4}px, ${-rotateX * 4}px, 40px) ${isHovered ? 'scale(1.1)' : ''}`,
        }}
      >
        <FaReact size={22} />
      </div>
      <div
        className="absolute top-[40%] -right-4 w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100/80 dark:border-slate-700/80 shadow-md flex items-center justify-center text-violet-500 dark:text-violet-400 z-30 transition-transform duration-500 ease-out animate-float-delay-1"
        style={{
          transform: `translate3d(${rotateY * 3.5}px, ${-rotateX * 3.5}px, 30px) ${isHovered ? 'scale(1.1)' : ''}`,
        }}
      >
        <FaDatabase size={20} />
      </div>
      <div
        className="absolute -bottom-2 left-[25%] w-12 h-12 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100/80 dark:border-slate-700/80 shadow-md flex items-center justify-center text-cyan-500 dark:text-cyan-400 z-30 transition-transform duration-500 ease-out animate-float-delay-2"
        style={{
          transform: `translate3d(${rotateY * 4.5}px, ${-rotateX * 4.5}px, 35px) ${isHovered ? 'scale(1.1)' : ''}`,
        }}
      >
        <FaCode size={20} />
      </div>

      {/* Main Interactive Tilting Card Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative w-[280px] h-[340px] sm:w-[320px] sm:h-[390px] rounded-[36px] bg-white/75 dark:bg-slate-900/75 backdrop-blur-md border border-slate-100 dark:border-slate-800 shadow-2xl transition-all duration-300 ease-out cursor-pointer overflow-visible flex flex-col items-center justify-center p-6 group"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? '1.02' : '1'}, ${isHovered ? '1.02' : '1'}, 1)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Futuristic Card Corner Brackets */}
        <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-blue-500/40 rounded-tl-lg pointer-events-none" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-blue-500/40 rounded-tr-lg pointer-events-none" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-blue-500/40 rounded-bl-lg pointer-events-none" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-blue-500/40 rounded-br-lg pointer-events-none" />

        {/* Profile Image Wrapper (Base Layer: translateZ(20px)) */}
        <div
          className="relative w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] rounded-[32px] overflow-hidden border-[3px] border-white dark:border-slate-800 shadow-xl bg-slate-50 dark:bg-slate-950 transition-all duration-500"
          style={{
            transform: 'translateZ(20px)',
            transformStyle: 'preserve-3d',
          }}
        >
          <Image
            src="/images/cikal.jpg"
            alt="Haical Ravinda"
            fill
            sizes="(max-width: 768px) 180px, 210px"
            style={{ objectFit: 'cover' }}
            priority
            className="group-hover:scale-105 transition-transform duration-500"
          />

          {/* Cyber Hologram Scan Line Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-cyan-400/25 to-blue-500/0 w-full h-[30%] pointer-events-none animate-scanline" />
        </div>

        {/* Floating Holographic 3D Particle Sphere (Top Layer: translateZ(60px)) */}
        <div
          className="absolute -top-16 -left-12 sm:-top-20 sm:-left-16 w-[340px] h-[340px] sm:w-[380px] sm:h-[380px] pointer-events-none z-20 transition-transform duration-500 ease-out"
          style={{
            transform: 'translateZ(60px)',
          }}
        >
          <ThreeDCanvas />
        </div>

        {/* Card Text & Status Badge (translateZ(35px)) */}
        <div
          className="mt-6 text-center space-y-1.5 transition-transform duration-500"
          style={{
            transform: 'translateZ(35px)',
          }}
        >
          <p className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest bg-blue-50 dark:bg-blue-950/40 px-2.5 py-0.5 rounded-full inline-block border border-blue-100/50 dark:border-blue-900/40">
            Hologram Mode Active
          </p>
          <h4 className="text-slate-800 dark:text-slate-100 font-extrabold text-sm sm:text-base tracking-tight">
            Developer Core
          </h4>
        </div>
      </div>
    </div>
  );
}
