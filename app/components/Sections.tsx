'use client';
import { FaGraduationCap, FaStar, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { profileData } from '../data';

export function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white mb-4 shadow-lg shadow-blue-500/20">
          <FaGraduationCap size={22} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Riwayat Pendidikan</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-2">Landasan akademik utama yang mendasari keahlian profesional saya</p>
      </div>

      <div className="card card-blue p-6 md:p-8 hover:border-blue-200 transition-all duration-300">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white shadow-md flex-shrink-0">
              <FaGraduationCap size={24} />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">{profileData.education.degree}</h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold mt-1">{profileData.education.university}</p>
              <div className="flex items-center gap-2 mt-2 text-sm text-slate-500 dark:text-slate-400">
                <span>Sistem Informasi</span>
                <span>•</span>
                <span>{profileData.education.period}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col gap-3 items-center md:items-end w-full md:w-auto border-t border-blue-50 dark:border-blue-950 md:border-none pt-4 md:pt-0">
            <div className="px-4 py-2 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-100 dark:border-blue-900/50 text-left md:text-right min-w-[120px]">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400 dark:text-slate-500">IPK Lulus</div>
              <div className="text-xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">{profileData.education.gpa}</div>
            </div>
            <div className="px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1.5">
              <FaStar size={12} />
              {profileData.education.status}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 max-w-5xl mx-auto">
      <div className="text-center mb-14">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white mb-4 shadow-lg shadow-violet-500/20">
          <FaBriefcase size={20} />
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">Pengalaman Kerja</h2>
        <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base mt-2">Perjalanan profesional dalam rekayasa perangkat lunak dan dukungan sistem IT</p>
      </div>

      <div className="timeline-line space-y-8">
        {profileData.experience.map((exp, i) => {
          const Icon = exp.icon;
          return (
            <div key={i} className="relative pl-14 sm:pl-16 group">
               {/* Timeline dot */}
              <div className="absolute left-0 top-1 w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-full bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 flex items-center justify-center shadow-sm z-10 group-hover:border-blue-400 transition-colors duration-300">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center text-white`}>
                  <Icon size={13} />
                </div>
              </div>

              {/* Card wrapper */}
              <div className="card card-violet p-6 hover:border-violet-200 transition-all duration-300">
                <div className="flex flex-col md:flex-row justify-between gap-3 mb-4">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{exp.title}</h3>
                      <span className="text-[10px] px-2.5 py-0.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-800 font-bold">{exp.type}</span>
                    </div>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-1">{exp.company}</p>
                  </div>
                  <div className="text-left md:text-right">
                    <div className="text-sm font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 md:justify-end">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      {exp.duration}
                    </div>
                    <div className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1 md:justify-end mt-1 font-medium">
                      <FaMapMarkerAlt size={10} className="text-slate-300 dark:text-slate-600" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-350 text-sm md:text-base leading-relaxed mb-5 font-normal">{exp.description}</p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {exp.skills.map((s, j) => (
                    <span key={j} className="text-[11px] px-2.5 py-1 rounded-lg bg-violet-50/60 dark:bg-violet-950/40 text-violet-600 dark:text-violet-300 border border-violet-100 dark:border-violet-900/50 font-semibold hover:bg-violet-100 dark:hover:bg-violet-900/60 hover:border-violet-200 dark:hover:border-violet-800 transition-all duration-200 cursor-default">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
