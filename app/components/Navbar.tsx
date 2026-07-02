'use client';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { FaHome, FaBriefcase, FaLaptopCode, FaTools, FaCertificate, FaGraduationCap, FaEnvelope, FaSun, FaMoon } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Beranda', href: '#home', icon: FaHome },
  { name: 'Pendidikan', href: '#education', icon: FaGraduationCap },
  { name: 'Pengalaman', href: '#experience', icon: FaBriefcase },
  { name: 'Proyek', href: '#projects', icon: FaLaptopCode },
  { name: 'Keahlian', href: '#skills', icon: FaTools },
  { name: 'Sertifikat', href: '#certs', icon: FaCertificate },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && system)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
    const sections = navItems.map(item => item.href.slice(1));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-strong shadow-lg py-2'
          : 'bg-white/60 backdrop-blur-sm py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-shadow">
              <span className="text-white font-black text-sm">HR</span>
            </div>
            <span className="hidden sm:block text-lg font-bold text-slate-800 dark:text-slate-100">
              Haical<span className="text-blue-500">.</span>dev
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-blue-50 border border-blue-100 dark:bg-blue-950/40 dark:border-blue-900/50 rounded-lg"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <Icon className="relative z-10" size={13} />
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 transition-all hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon size={15} /> : <FaSun size={15} />}
            </button>
            <a
              href="mailto:haikalrafindaraysa@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-500 to-violet-600 text-white text-sm rounded-xl font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5"
            >
              <FaEnvelope size={12} />
              Hubungi Saya
            </a>
          </div>

          {/* Mobile Theme Toggle & Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FaMoon size={15} /> : <FaSun size={15} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span className={`block h-0.5 w-full bg-slate-600 dark:bg-slate-300 rounded-full transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-[4px]' : ''}`} />
                <span className={`block h-0.5 w-full bg-slate-600 dark:bg-slate-300 rounded-full transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-slate-600 dark:bg-slate-300 rounded-full transition-all duration-200 ${isOpen ? '-rotate-45 -translate-y-[4px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden glass-strong overflow-hidden mt-2 mx-4 rounded-2xl shadow-lg"
          >
            <div className="p-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${
                      isActive
                        ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    <Icon size={16} />
                    {item.name}
                  </Link>
                );
              })}
              <a
                href="mailto:haikalrafindaraysa@gmail.com"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 px-4 py-3 mt-2 bg-gradient-to-r from-blue-500 to-violet-600 text-white rounded-xl font-semibold"
              >
                <FaEnvelope size={14} />
                Hubungi Saya
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}