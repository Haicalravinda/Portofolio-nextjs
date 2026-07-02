'use client';
import Image from 'next/image';
import { FaEnvelope, FaLaptopCode, FaLinkedin, FaGithub, FaCode, FaDatabase, FaReact, FaAward } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { profileData } from '../data';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-20 px-4 md:px-8 overflow-hidden">
      {/* Decorative blobs - CSS only, no JS */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[110px] animate-blob pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-200/20 rounded-full blur-[110px] animate-blob-delay pointer-events-none" />
      <div className="absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-cyan-100/10 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Column */}
        <div className="lg:col-span-7 space-y-6">


          <div className="space-y-2">
            <p className="text-slate-400 font-bold text-lg md:text-xl tracking-tight">Halo, Saya</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-900 leading-tight">
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

          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl">
            {profileData.summary}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3">
            {[
              { l: "IPK Kelulusan", v: "3.77 / 4.00" },
              { l: "Keahlian Teknis", v: "30+ Tools" },
              { l: "Pengalaman Kerja", v: "6 Peran" },
              { l: "Sertifikasi Resmi", v: "28 Total" }
            ].map((s, i) => (
              <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-lg font-extrabold text-slate-800 tracking-tight">{s.v}</div>
                <div className="text-[11px] text-slate-400 font-semibold mt-1">{s.l}</div>
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
              className="px-8 py-3.5 rounded-xl bg-white text-slate-700 border border-slate-200 font-bold shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2.5"
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
              className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={profileData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:text-slate-800 hover:border-slate-300 transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* Right Column (Profile Visual) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-6 rounded-[50px] bg-gradient-to-tr from-blue-400/10 via-violet-400/10 to-cyan-400/10 blur-2xl pointer-events-none" />

            {/* Interactive floating badges */}
            <div className="absolute -top-5 -left-5 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center text-blue-500 animate-float z-20">
              <FaReact size={22} />
            </div>
            <div className="absolute top-[40%] -right-6 w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center text-violet-500 animate-float-delay-1 z-20">
              <FaDatabase size={20} />
            </div>
            <div className="absolute -bottom-3 left-[25%] w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-md flex items-center justify-center text-cyan-500 animate-float-delay-2 z-20">
              <FaCode size={20} />
            </div>

            <div className="w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] rounded-[40px] overflow-hidden border-4 border-white shadow-2xl relative group">
              <Image
                src="/images/cikal.jpg"
                alt={profileData.name}
                fill
                sizes="(max-width: 768px) 280px, 330px"
                style={{ objectFit: 'cover' }}
                priority
                className="group-hover:scale-105 transition-transform duration-500"
              />
            </div>


          </div>
        </div>

      </div>
    </section>
  );
}
