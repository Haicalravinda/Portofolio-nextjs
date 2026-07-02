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
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-600 mb-3">
          <FaLaptopCode size={18} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">Proyek Pilihan</h2>
        <p className="text-slate-500 text-sm md:text-base mt-2">Aplikasi web dan mobile yang berhasil dirancang secara komprehensif</p>
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-10 pb-4 border-b border-slate-100">
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
                  ? 'bg-blue-50 border-blue-200 text-blue-600'
                  : 'bg-white border-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-50'
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
            className="w-full bg-white border border-slate-200 rounded-xl px-10 py-2.5 text-xs md:text-sm text-slate-700 placeholder-slate-300 focus:outline-none focus:border-blue-400 transition-colors"
          />
          <FaSearch size={12} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-300" />
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
                className="card p-6 flex flex-col justify-between h-full group card-shine hover:border-slate-200 transition-all duration-300"
              >
                <div>
                  <div className="flex justify-between items-start mb-5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white shadow-md`}>
                      <Icon size={20} />
                    </div>
                    {p.featured && (
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-amber-50 border border-amber-200 text-amber-600 rounded-md">
                        Unggulan
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 tracking-tight">
                    {p.name}
                  </h3>
                  
                  <span className="inline-block text-xs font-semibold text-blue-500 bg-blue-50 border border-blue-100 px-2.5 py-1 rounded-lg mb-4">
                    {p.tech}
                  </span>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {p.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 mt-auto">
                  {p.tags.map((t, j) => (
                    <span key={j} className="text-[10px] px-2.5 py-1 rounded-lg bg-slate-50 text-slate-400 border border-slate-100 font-semibold">
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
