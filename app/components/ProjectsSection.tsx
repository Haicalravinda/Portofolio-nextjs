'use client';
import { useState } from 'react';
import { FaLaptopCode, FaSearch, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '../data';

export default function ProjectsSection() {
  const [filter, setFilter] = useState('all');
  const [q, setQ] = useState('');

  const filtered = profileData.projects.filter(p => {
    const mf = filter === 'all' || p.cat === filter;
    const ms = p.name.toLowerCase().includes(q.toLowerCase()) || p.tech.toLowerCase().includes(q.toLowerCase());
    return mf && ms;
  });

  return (
    <section id="projects" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-4 shadow-lg shadow-cyan-500/20">
          <FaLaptopCode size={20} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Proyek Pilihan</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-2">Aplikasi web dan mobile yang berhasil dirancang secara komprehensif</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 pb-4 border-b border-slate-100 dark:border-slate-800">
        <div className="flex gap-2">
          {[
            { id: 'all', l: 'Semua Proyek' },
            { id: 'web', l: 'Web Apps' },
            { id: 'mobile', l: 'Mobile Apps' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setFilter(t.id)}
              className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold border transition-all duration-300 ${
                filter === t.id
                  ? 'bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-950/40 dark:to-blue-950/40 border-cyan-200 dark:border-cyan-800 text-cyan-700 dark:text-cyan-400 shadow-sm shadow-cyan-500/10'
                  : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-slate-800 text-slate-400 dark:text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50/50 dark:hover:bg-cyan-950/20 hover:border-cyan-100 dark:hover:border-cyan-900/50'
              }`}
            >
              {t.l}
            </button>
          ))}
        </div>
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            placeholder="Cari proyek..."
            value={q}
            onChange={e => setQ(e.target.value)}
            className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-10 py-2.5 text-xs md:text-sm text-slate-700 dark:text-slate-200 placeholder-slate-300 dark:placeholder-slate-500 focus:outline-none focus:border-blue-400 dark:focus:border-blue-500 transition-colors"
          />
          <FaSearch size={12} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300 dark:text-slate-600" />
          {q && (
            <button onClick={() => setQ('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
              <FaTimes size={12} />
            </button>
          )}
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map(p => {
            const Icon = p.icon;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={p.name}
                className="card card-cyan p-6 flex flex-col justify-between h-full group hover:border-cyan-200 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-md`}>
                      <Icon size={20} />
                    </div>
                    {p.featured && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/50 text-amber-600 dark:text-amber-400 rounded-md">
                        Unggulan
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-2 tracking-tight">
                    {p.name}
                  </h3>
                  
                  <span className="inline-block text-xs font-semibold text-blue-500 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/50 px-2.5 py-1 rounded-lg mb-4">
                    {p.tech}
                  </span>

                  <p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800 mt-auto">
                  {p.tags.map((t, j) => (
                    <span key={j} className="text-[10px] px-2.5 py-1 rounded-lg bg-cyan-50/60 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-900/50 font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-slate-400 text-sm font-medium">
          Tidak ada proyek yang sesuai dengan kata kunci.
        </div>
      )}
    </section>
  );
}
