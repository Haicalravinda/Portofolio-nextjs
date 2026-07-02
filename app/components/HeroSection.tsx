'use client';
import { FaEnvelope, FaLaptopCode, FaLinkedin, FaGithub } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { profileData } from '../data';
import Interactive3DCard from './Interactive3DCard';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-4 md:px-8 overflow-hidden">
      {/* Decorative blobs - CSS only, no JS */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-gradient-to-br from-blue-200/25 to-violet-200/20 rounded-full blur-[110px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-gradient-to-tr from-violet-200/25 to-indigo-200/20 rounded-full blur-[110px] animate-blob-delay pointer-events-none" />
      <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-gradient-to-br from-cyan-100/15 to-blue-100/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">


          <div className="space-y-2">
            <p className="text-slate-400 font-bold text-lg md:text-xl tracking-tight">Halo, Saya</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-slate-100 leading-tight">
              {profileData.name}
            </h1>
            <div className="text-xl md:text-2xl font-extrabold text-blue-600 min-h-[36px]">
              <TypeAnimation
                sequence={[
                  'Full-Stack Developer', 2000,
                  'Software Engineer', 2000,
                  'Mobile Developer', 2000
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>

          <p className="text-slate-500 dark:text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
            {profileData.summary}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3">
            {[
              { l: "IPK Kelulusan", v: "3.77 / 4.00", gradient: "from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/40", border: "border-blue-100/80 dark:border-blue-900/50" },
              { l: "Keahlian Teknis", v: "30+ Tools", gradient: "from-violet-50 to-purple-50 dark:from-violet-950/40 dark:to-purple-950/40", border: "border-violet-100/80 dark:border-violet-900/50" },
              { l: "Pengalaman Kerja", v: "6 Peran", gradient: "from-cyan-50 to-blue-50 dark:from-cyan-950/40 dark:to-blue-950/40", border: "border-cyan-100/80 dark:border-cyan-900/50" },
              { l: "Sertifikasi Resmi", v: "28 Total", gradient: "from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40", border: "border-emerald-100/80 dark:border-emerald-900/50" }
            ].map((s, i) => (
              <div key={i} className={`p-4 rounded-2xl bg-gradient-to-br ${s.gradient} border ${s.border} shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300`}>
                <div className="text-lg font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">{s.v}</div>
                <div className="text-[11px] text-slate-400 dark:text-slate-400 font-semibold mt-1">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-3">
            <a
              href={`mailto:${profileData.contact.email}`}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5 flex items-center gap-2.5"
            >
              <FaEnvelope /> Hubungi Saya
            </a>
             <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-white to-blue-50/50 dark:from-slate-900 dark:to-slate-900/50 text-slate-700 dark:text-slate-200 border border-blue-200/60 dark:border-blue-900/50 font-bold shadow-sm hover:shadow-md hover:border-blue-300/80 dark:hover:border-blue-800 transition-all hover:-translate-y-0.5 flex items-center gap-2.5"
            >
              <FaLaptopCode /> Lihat Proyek
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3.5 pt-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Koneksi:</span>
            <a
              href={profileData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 dark:hover:bg-blue-950/30 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 dark:hover:text-slate-200 dark:hover:border-slate-700 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* Right Column (Profile Visual with Interactive 3D Parallax & Hologram) */}
        <div className="lg:col-span-5 flex justify-center w-full overflow-visible">
          <Interactive3DCard />
        </div>

      </div>
    </section>
  );
}
