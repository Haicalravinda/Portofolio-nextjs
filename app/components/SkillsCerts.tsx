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
    { title: "Tools & Database", items: profileData.skills.tools, icon: FaDatabase, color: "from-emerald-500 to-teal-500" }
  ];
  return (
    <section id="skills" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white mb-4 shadow-lg shadow-emerald-500/20">
          <FaTools size={20} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Keahlian Teknis</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-2">Bahasa pemrogaman, framework, dan tools yang saya kuasai secara profesional</p>
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
              className="card card-emerald p-6 hover:border-emerald-200 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-emerald-100/60 dark:border-emerald-950/60">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${g.color} flex items-center justify-center text-white shadow-sm`}>
                  <Icon size={14} />
                </div>
                <h3 className="font-bold text-slate-800 dark:text-slate-100 text-lg tracking-tight">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((s, j) => (
                  <span
                    key={j}
                    className="px-3.5 py-2 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 hover:text-emerald-800 dark:hover:text-emerald-250 border border-emerald-100 dark:border-emerald-900/50 hover:border-emerald-200 dark:hover:border-emerald-800 text-xs font-semibold transition-all cursor-default skill-tag"
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
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 text-white mb-4 shadow-lg shadow-amber-500/20">
          <FaCertificate size={20} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Sertifikat & Pelatihan</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-2">Dokumen resmi pembuktian keahlian dan komitmen belajar mandiri</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {profileData.certifications.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.04 }}
            className="card card-amber p-5 flex flex-col justify-between cursor-pointer cert-card hover:border-amber-200 transition-all duration-300"
            onClick={() => setSel(c)}
          >
            <div>
              <div className="relative w-full h-36 bg-gradient-to-br from-amber-50/50 to-orange-50/30 dark:from-slate-900/50 dark:to-slate-900/30 rounded-xl border border-amber-100/60 dark:border-amber-950/50 overflow-hidden mb-4 flex items-center justify-center">
                <Image src={c.image_url} alt={c.name} fill sizes="(max-width:768px) 50vw, 25vw" style={{ objectFit: 'contain' }} className="p-1.5" />
                <div className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/5 flex items-center justify-center transition-all opacity-0 hover:opacity-100">
                  <span className="text-xs font-bold bg-blue-600 text-white px-3 py-1.5 rounded-lg shadow-md">
                    Buka Dokumen
                  </span>
                </div>
              </div>
              <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm md:text-base leading-snug line-clamp-2 mb-1.5 tracking-tight group-hover:text-blue-600">
                {c.name}
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold mb-2">{c.provider}</p>
            </div>
            <div className="pt-3 mt-4 border-t border-amber-100/60 dark:border-amber-950/50 flex justify-between items-center text-xs">
              <span className="text-amber-600 dark:text-amber-400 font-bold">{c.date}</span>
              <span className="text-slate-400 dark:text-slate-500 flex items-center gap-1 font-bold">
                Detail <FaChevronRight size={8} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other certs list */}
      <div className="mt-16">
        <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 text-center mb-8 flex items-center justify-center gap-2">
          <FaStar className="text-blue-500 animate-pulse-soft" />
          Sertifikasi & Pelatihan Lainnya
        </h3>
        <div className="card card-blue p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {otherCertsText.map((t, i) => (
              <div key={i} className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/40 border border-transparent hover:border-slate-100 dark:hover:border-slate-800 transition-all duration-200">
                <div className="w-6 h-6 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 flex items-center justify-center text-blue-500 dark:text-blue-400 text-xs font-bold flex-shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="text-slate-600 dark:text-slate-350 text-sm font-semibold leading-relaxed">{t}</span>
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
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl p-6 flex flex-col gap-5 border border-slate-100 dark:border-slate-800"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSel(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-slate-700 dark:hover:text-slate-350 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                <FaTimes size={16} />
              </button>
              <div className="relative w-full aspect-[4/3] max-h-[55vh] bg-slate-50 dark:bg-slate-950 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
                <Image src={sel.image_url} alt={sel.name} fill style={{ objectFit: 'contain' }} priority className="p-3" />
              </div>
              <div className="text-left px-2">
                <span className="text-xs px-2.5 py-1 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 rounded-lg font-bold">
                  {sel.date}
                </span>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 mt-3 tracking-tight leading-snug">
                  {sel.name}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-1">
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
