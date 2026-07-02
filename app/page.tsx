'use client';
import { FaEnvelope, FaLinkedin, FaGithub, FaRocket } from 'react-icons/fa';
import { profileData } from './data';
import HeroSection from './components/HeroSection';
import { EducationSection, ExperienceSection } from './components/Sections';
import ProjectsSection from './components/ProjectsSection';
import { SkillsSection, CertsSection } from './components/SkillsCerts';
import ScrollProgress from './components/ScrollProgress';
import MouseGlow from './components/MouseGlow';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8faff] relative overflow-hidden selection:bg-blue-100 selection:text-blue-900">
      {/* Scroll indicator & Ambient follow light */}
      <ScrollProgress />
      <MouseGlow />

      <HeroSection />
      
      <div className="section-divider" />
      
      <EducationSection />
      
      <div className="section-divider" />
      
      <ExperienceSection />
      
      <div className="section-divider" />
      
      <ProjectsSection />
      
      <div className="section-divider" />
      
      <SkillsSection />
      
      <div className="section-divider" />
      
      <CertsSection />

      {/* Footer */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950 text-white py-16 px-4 overflow-hidden mt-12">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-[15%] left-[10%] w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-[100px] animate-pulse-soft" />
          <div className="absolute bottom-[15%] right-[10%] w-[350px] h-[350px] bg-violet-400/20 rounded-full blur-[100px] animate-pulse-soft" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mx-auto mb-6 shadow-xl animate-float">
            <FaRocket size={22} className="text-blue-300" />
          </div>

          <h3 className="text-3xl sm:text-4xl font-extrabold mb-3 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">Mari Bekerja Sama!</h3>
          <p className="text-blue-200/80 text-sm sm:text-base mb-8 max-w-lg mx-auto leading-relaxed">
            Terbuka untuk posisi full-stack, backend, support engineering, atau proyek freelance. Mari diskusikan ide-ide hebat Anda!
          </p>

          <div className="flex gap-4 justify-center mb-10">
            {[
              { icon: FaEnvelope, href: `mailto:${profileData.contact.email}`, bg: "hover:bg-blue-600/20 hover:border-blue-400/35" },
              { icon: FaLinkedin, href: profileData.contact.linkedin, bg: "hover:bg-indigo-600/20 hover:border-indigo-400/35" },
              { icon: FaGithub, href: profileData.contact.github, bg: "hover:bg-slate-700/20 hover:border-slate-500/35" }
            ].map((m, i) => (
              <a key={i} href={m.href} target={m.href.startsWith('http') ? '_blank' : undefined} rel={m.href.startsWith('http') ? 'noopener noreferrer' : undefined} className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 ${m.bg}`}>
                <m.icon size={18} />
              </a>
            ))}
          </div>

          <a href={`mailto:${profileData.contact.email}`} className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 hover:-translate-y-0.5">
            <FaEnvelope /> Kirim Pesan Sekarang
          </a>

          <div className="mt-14 pt-8 border-t border-white/5">
            <p className="text-xs text-blue-200/60">© {new Date().getFullYear()} {profileData.name}. All Rights Reserved.</p>
            <p className="text-[10px] text-blue-300/30 mt-1.5 font-mono uppercase tracking-widest">Next.js • Tailwind CSS • Framer Motion</p>
          </div>
        </div>
      </footer>
    </div>
  );
}