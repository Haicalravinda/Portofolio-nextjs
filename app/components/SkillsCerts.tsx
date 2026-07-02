'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaTools, FaCode, FaReact, FaDatabase, FaCertificate, FaStar, FaChevronRight, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData, otherCertsText } from '../data';

export function SkillsSection() {
  const groups = [
    { title: "Bahasa Pemrograman", items: profileData.skills.languages, icon: FaCode, color: "from-blue-500 to-cyan-500" },
    { title: "Framework & Library", items: profileData.skills.frameworks, icon: FaReact, color: "from-violet-500 to-purple-500" },
    { title: "Perkakas & Database", items: profileData.skills.tools, icon: FaDatabase, color: "from-emerald-500 to-teal-500" }
  ];
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-600 mb-3">
          <FaTools size={18} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Keahlian Teknis</h2>
        <p className="text-slate-500 text-sm md:text-base mt-2">Bahasa pemrogaman, framework, dan tools yang saya kuasai secara profesional</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {groups.map((g, i) => {
          const Icon = g.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 }}
              className="card p-6 hover:border-slate-200 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center text-white shadow-sm`}>
                  <Icon size={14} />
                </div>
                <h3 className="font-bold text-slate-800 text-lg tracking-tight">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s, j) => (
                  <span
                    key={j}
                    className="px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-100 hover:border-blue-200 text-xs font-semibold transition-all cursor-default skill-tag"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export function CertsSection() {
  const [sel, setSel] = useState<typeof profileData.certifications[0] | null>(null);
  return (
    <section id="certs" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 border border-amber-100 text-amber-600 mb-3">
          <FaCertificate size={18} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Sertifikat & Pelatihan</h2>
        <p className="text-slate-500 text-sm md:text-base mt-2">Dokumen resmi pembuktian keahlian dan komitmen belajar mandiri</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {profileData.certifications.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="card p-5 flex flex-col justify-between cursor-pointer cert-card hover:border-slate-200 transition-all duration-300"
            onClick={() => setSel(c)}
          >
            <div>
              <div className="relative w-full h-36 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden mb-4 flex items-center justify-center">
                <Image src={c.image_url} alt={c.name} fill sizes="(max-width:768px) 50vw, 25vw" style={{ objectFit: 'contain' }} className="p-1.5" />
                <div className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/5 flex items-center justify-center transition-all opacity-0 hover:opacity-100">
                  <span className="text-xs font-bold bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-md">
                    Buka Dokumen
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-slate-800 text-sm md:text-base leading-snug line-clamp-2 mb-1.5 tracking-tight group-hover:text-blue-600">
                {c.name}
              </h3>
              <p className="text-xs text-slate-400 font-semibold mb-2">{c.provider}</p>
            </div>
            <div className="pt-3 mt-4 border-t border-slate-100 flex justify-between items-center text-xs">
              <span className="text-blue-600 font-bold">{c.date}</span>
              <span className="text-slate-400 flex items-center gap-1 font-bold">
                Detail <FaChevronRight size={8} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other certs list */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-slate-900 text-center mb-8 flex items-center justify-center gap-2">
          <FaStar className="text-blue-500 animate-pulse-soft" />
          Sertifikasi & Pelatihan Lainnya
        </h3>
        <div className="card p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherCertsText.map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all duration-200">
                <div className="w-6 h-6 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-500 text-xs font-bold flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="text-slate-600 text-sm font-semibold leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for certificate viewing */}
      <AnimatePresence>
        {sel && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSel(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl p-6 flex flex-col gap-5 border border-slate-100"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSel(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-all"
              >
                <FaTimes size={16} />
              </button>
              <div className="relative w-full aspect-[4/3] max-h-[55vh] bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
                <Image src={sel.image_url} alt={sel.name} fill style={{ objectFit: 'contain' }} priority className="p-3" />
              </div>
              <div className="text-left px-2">
                <span className="text-xs px-2.5 py-1 bg-blue-50 border border-blue-100 text-blue-600 rounded-lg font-bold">
                  {sel.date}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 mt-3 tracking-tight leading-snug">
                  {sel.name}
                </h3>
                <p className="text-blue-600 font-semibold text-sm mt-1">
                  Penerbit: {sel.provider}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
