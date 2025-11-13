'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCode, FaCertificate, FaTools, FaLaptopCode, FaStar, FaGraduationCap, FaBriefcase, FaDownload, FaExternalLinkAlt, FaAward, FaRocket, FaHeart } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

// --- DEFINISI DATA LENGKAP HAICAL ---
const profileData = {
  name: "Haical Ravinda Rassya",
  title: "Full-Stack & Software Engineer",
  summary: "Fresh graduate Sistem Informasi dari Universitas Gunadarma (IPK: 3.77/4.00) dengan keahlian dalam pengembangan full-stack dan aplikasi mobile. Berpengalaman membangun aplikasi web yang scalable menggunakan teknologi modern dan berkolaborasi dalam tim lintas fungsi. Mampu memberikan solusi berkualitas tinggi tepat waktu dengan standar kode yang excellent.",
  contact: {
    email: "haikalrafindaraysa@gmail.com",
    phone: "+6289602471192",
    linkedin: "https://linkedin.com/in/haicalravinda",
    github: "https://github.com/haicalravinda",
    portfolio: "https://haicalravinda.zya.me/",
    location: "Bekasi Selatan"
  },
  education: {
    degree: "Sarjana Sistem Informasi",
    university: "Universitas Gunadarma",
    period: "2021 - 2025",
    gpa: "3.77/4.00"
  },
  experience: [
    {
      title: "Mobile Developer (Proyek FishGenius)",
      company: "Bangkit Academy oleh Google, GoTo, Traveloka",
      duration: "Februari 2024 – Juni 2024",
      description: "Bekerja sebagai Mobile Developer dalam pengembangan FishGenius, aplikasi untuk meningkatkan edukasi dalam bidang akuakultur. Merancang dan mengembangkan antarmuka mobile yang intuitif dan user-friendly, berkolaborasi dengan tim ML dan Cloud.",
      icon: "🚀",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Freelance Web Developer (Pawon Ijo)",
      company: "Freelance",
      duration: "April 2025",
      description: "Mengembangkan website e-commerce menggunakan PHP Laravel, CSS, dan JavaScript. Fitur mencakup integrasi pembayaran online, struk cetak, dan laporan keuangan lengkap untuk pemilik melalui dashboard admin.",
      icon: "💼",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Freelance Web Developer (Akinini)",
      company: "Freelance",
      duration: "Januari 2025",
      description: "Mengembangkan website e-commerce fungsional dan responsif menggunakan PHP Laravel, CSS, dan JavaScript dan React untuk membantu klien mengelola dan menjual produk makanan katering secara online.",
      icon: "🍽️",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Bootcamp Software Engineering",
      company: "RevoU",
      duration: "Agustus 2023 – September 2023",
      description: "Mengikuti bootcamp online selama dua minggu dan mengembangkan website sekolah (SMA Tulus Bhakti) sebagai proyek akhir menggunakan HTML dan CSS.",
      icon: "🎓",
      color: "from-green-500 to-teal-500"
    }
  ],
  projects: [
    {
      name: "E-commerce Toko Jamu Cikal Jaya",
      tech: "PHP, Bootstrap, JavaScript",
      description: "Mengembangkan website e-commerce UMKM dengan dashboard terpisah untuk user/admin dan pemrosesan pembayaran. Karya terdaftar hak cipta.",
      icon: "🛒",
      gradient: "from-emerald-400 to-teal-500"
    },
    {
      name: "Sistem Repositori Berbasis Web",
      tech: "PHP, Bootstrap",
      description: "Mengembangkan sistem repositori untuk karya tulis ilmiah dan skripsi dengan tiga dashboard pengguna (mahasiswa, admin, dosen) untuk pencarian referensi dan manajemen dokumen.",
      icon: "📚",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      name: "Sistem Informasi Bengkel Motor",
      tech: "PHP, Bootstrap",
      description: "Mengembangkan sistem manajemen inventori internal dan laporan penjualan (kasir) dengan tiga peran pengguna: admin, karyawan, dan manajer, termasuk grafik pendapatan dan laporan profit.",
      icon: "🔧",
      gradient: "from-orange-400 to-red-500"
    }
  ],
  skills: {
    languages: ["Java", "JavaScript", "TypeScript", "PHP", "HTML", "CSS", "SQL", "NoSQL", "Python", "Kotlin", "Golang", "Haskell"],
    frameworks: ["Laravel", "Vue.js", "React.js", "Bootstrap", "CodeIgniter"],
    tools: ["Git/GitHub", "MySQL", "Android Studio", "VS Code", "Postman", "XAMPP", "MongoDB", "Firebase", "Canva", "Figma", "Draw.io"]
  },
  certifications: [
    {"name": "Mobile Development Specialization", "provider": "Bangkit Academy", "image_url": "/certs/bangkit.jpg"},
    {"name": "Intermediate Android Development", "provider": "Dicoding Indonesia", "image_url": "/certs/android_intermedite.png"},
    {"name": "Python Programming", "provider": "Dicoding Indonesia", "image_url": "/certs/python_dicoding.png"},
    {"name": "English For Business Communication", "provider": "The British Institute", "image_url": "/certs/bangkit_tbi.jpg"},
    {"name": "Cyber Security", "provider": "University of Maryland (Coursera)", "image_url": "/certs/cousera.jpg"},
    {"name": "Software Engineering", "provider": "RevoU", "image_url": "/certs/revou.jpg"}
  ]
};

const otherCertsText = [
  "Machine Learning for Android - Dicoding Indonesia",
  "Fundamental Android Development – Dicoding Indonesia",
  "Creating Android Apps for Beginners – Dicoding Indonesia",
  "Junior Web Programmer – BNSP",
  "Golang for Beginner & Intermediate – LEPKom UG",
  "Java Programming (J2SE) for Beginner & Intermediate – LEPKom UG",
  "Kotlin Programming – Dicoding Indonesia",
  "Git & GitHub – Dicoding Indonesia",
  "Basic & Fundamental Web Development – LEPKom UG",
  "Web Programming – Camp404",
  "Cloud Computing - BISA AI Academy",
  "Data Science – Dicoding Indonesia",
  "SOLID Principles in Programming – Dicoding Indonesia",
  "SQL: Structured Query Language – Dicoding Indonesia",
  "UI/UX Design Bootcamp – Fikti Learning",
  "Programming Logic 101 – Dicoding Indonesia",
  "Intro to Haskell Programming – Dicoding Indonesia",
  "Business Analysis & Process Management – Coursera",
  "TechnoFair 10.0 – Gunadarma University (Workshop)",
  "Building Website Using HTML5 – Gunadarma University (Workshop)"
];

// Animated Background Component
const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-pink-400/30 to-orange-400/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

// Enhanced Card Component
const Card = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.1 }}
    transition={{ duration: 0.6, delay }}
    className={`glass rounded-3xl p-6 sm:p-8 border border-white/50 hover-lift card-shine ${className}`}
  >
    {children}
  </motion.div>
);

// Floating Particles Component
const FloatingParticles = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate consistent particles on client side only
  const particles = mounted ? [...Array(20)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    xMove: Math.random() * 20 - 10,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 2,
  })) : [];

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, particle.xMove, 0],
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
          }}
        />
      ))}
    </div>
  );
};

// Section Header Component
const SectionHeader = ({ icon: Icon, title, subtitle, gradient }: { icon: any, title: string, subtitle?: string, gradient: string }) => (
  <motion.div 
    className="text-center mb-12 sm:mb-16"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <motion.div 
      className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${gradient} rounded-3xl shadow-2xl mb-6`}
      whileHover={{ rotate: 360, scale: 1.1 }}
      transition={{ duration: 0.6 }}
    >
      <Icon className="text-white text-3xl sm:text-4xl" />
    </motion.div>
    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
        {subtitle}
      </p>
    )}
  </motion.div>
);

// Stats Component
const StatsSection = () => {
  const stats = [
    { icon: FaGraduationCap, label: "IPK", value: "3.77/4.00", color: "from-blue-500 to-cyan-500" },
    { icon: FaBriefcase, label: "Pengalaman", value: "4+", color: "from-purple-500 to-pink-500" },
    { icon: FaLaptopCode, label: "Proyek", value: "10+", color: "from-orange-500 to-red-500" },
    { icon: FaCertificate, label: "Sertifikat", value: "25+", color: "from-green-500 to-teal-500" },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className={`glass rounded-2xl p-6 text-center hover-glow`}
        >
          <motion.div 
            className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 shadow-lg`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <stat.icon className="text-white text-2xl" />
          </motion.div>
          <div className={`text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
            {stat.value}
          </div>
          <div className="text-sm sm:text-base text-gray-600 font-medium">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

// Main Component
export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />

      {/* Hero Section - Enhanced */}
      <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden">
        <FloatingParticles />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            style={{ opacity, scale }}
            className="text-center"
          >
            {/* Profile Image with Floating Animation */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative inline-block mb-8"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-36 h-36 sm:w-48 sm:h-48 lg:w-56 lg:h-56"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse-glow" />
                <div className="absolute inset-2 bg-white rounded-full" />
                <div className="absolute inset-3 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/images/cikal.jpg"
                    alt={profileData.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    priority
                  />
                </div>
                <motion.div 
                  className="absolute -bottom-2 -right-2 bg-gradient-to-br from-green-400 to-emerald-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white flex items-center justify-center shadow-lg"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-white font-bold text-xl sm:text-2xl">✓</span>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Name and Title */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                {profileData.name}
              </h1>
              <motion.div
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6 shadow-lg"
                whileHover={{ scale: 1.05 }}
              >
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-white flex items-center gap-2">
                  <FaRocket className="animate-bounce-soft" />
                  {profileData.title}
                </p>
              </motion.div>
            </motion.div>

            {/* Summary */}
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed px-4"
            >
              {profileData.summary}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <motion.a
                href={`mailto:${profileData.contact.email}`}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-bold text-base sm:text-lg shadow-2xl flex items-center gap-3 btn-gradient"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope />
                Hubungi Saya
              </motion.a>
              <motion.a
                href="#projects"
                className="px-6 sm:px-8 py-3 sm:py-4 glass text-gray-700 rounded-full font-bold text-base sm:text-lg shadow-xl flex items-center gap-3 hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLaptopCode />
                Lihat Proyek
              </motion.a>
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                { icon: FaEnvelope, text: profileData.contact.email, href: `mailto:${profileData.contact.email}`, gradient: "from-blue-500 to-cyan-500" },
                { icon: FaPhone, text: profileData.contact.phone, href: `tel:${profileData.contact.phone}`, gradient: "from-purple-500 to-pink-500" },
                { icon: FaMapMarkerAlt, text: profileData.contact.location, gradient: "from-orange-500 to-red-500" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="glass px-4 sm:px-6 py-3 rounded-full flex items-center gap-3 hover-glow text-sm sm:text-base"
                  whileHover={{ scale: 1.05, y: -2 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                >
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center`}>
                    <item.icon className="text-white text-sm sm:text-base" />
                  </div>
                  <span className="font-semibold text-gray-700 hidden sm:inline">{item.text}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex justify-center gap-4 mt-8"
            >
              {[
                { icon: FaLinkedin, href: profileData.contact.linkedin, gradient: "from-blue-600 to-blue-500" },
                { icon: FaGithub, href: profileData.contact.github, gradient: "from-gray-700 to-gray-600" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${social.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg hover-glow`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <div className="max-w-6xl mx-auto px-4 -mt-8">
        <StatsSection />
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 py-12">

        {/* Education Section */}
        <motion.section
          id="education"
          className="mb-20 sm:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader 
            icon={FaGraduationCap}
            title="Pendidikan"
            subtitle="Perjalanan akademik dan pencapaian"
            gradient="from-blue-500 to-cyan-500"
          />

          <Card delay={0.2}>
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <motion.div 
                className="flex-shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-2xl"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              >
                <FaGraduationCap className="text-white text-4xl sm:text-5xl" />
              </motion.div>
              <div className="flex-1">
                <motion.h3 
                  className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2"
                  whileHover={{ x: 5 }}
                >
                  {profileData.education.degree}
                </motion.h3>
                <p className="text-lg sm:text-xl text-purple-600 font-semibold mb-2">{profileData.education.university}</p>
                <div className="flex flex-wrap gap-4 text-sm sm:text-base text-gray-600 mb-4">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    {profileData.education.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    IPK: <strong className="text-gray-800">{profileData.education.gpa}</strong>
                  </span>
                </div>
                <motion.div 
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full font-bold shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <FaAward />
                  Cum Laude
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          id="experience"
          className="mb-20 sm:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader 
            icon={FaBriefcase}
            title="Pengalaman"
            subtitle="Kontribusi dan pencapaian profesional"
            gradient="from-purple-500 to-pink-500"
          />

          <div className="space-y-6">
            {profileData.experience.map((exp, index) => (
              <Card key={index} delay={index * 0.1}>
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <motion.div 
                    className={`flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${exp.color} rounded-3xl flex items-center justify-center text-4xl shadow-2xl`}
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {exp.icon}
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3 
                      className="text-xl sm:text-2xl font-bold text-gray-800 mb-2"
                      whileHover={{ x: 5 }}
                    >
                      {exp.title}
                    </motion.h3>
                    <p className="text-base sm:text-lg text-purple-600 font-semibold mb-2">{exp.company}</p>
                    <p className="text-sm sm:text-base text-gray-500 mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></span>
                      {exp.duration}
                    </p>
                    <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="mb-20 sm:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader 
            icon={FaLaptopCode}
            title="Proyek Unggulan"
            subtitle="Inovasi dan solusi yang telah dikembangkan"
            gradient="from-orange-500 to-red-500"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profileData.projects.map((proj, index) => (
              <Card key={index} delay={index * 0.1} className="group">
                <motion.div 
                  className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${proj.gradient} rounded-3xl flex items-center justify-center text-4xl sm:text-5xl mb-6 shadow-2xl mx-auto`}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {proj.icon}
                </motion.div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all">
                  {proj.name}
                </h3>
                <motion.div 
                  className="inline-block bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-xs sm:text-sm font-bold px-4 py-2 rounded-full mb-4 border-2 border-purple-200 shadow-sm mx-auto"
                  whileHover={{ scale: 1.05 }}
                >
                  {proj.tech}
                </motion.div>
                <p className="text-gray-600 leading-relaxed text-center">{proj.description}</p>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="mb-20 sm:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader 
            icon={FaTools}
            title="Keahlian Teknis"
            subtitle="Teknologi dan tools yang dikuasai"
            gradient="from-green-500 to-teal-500"
          />

          <div className="grid lg:grid-cols-3 gap-6">
            {Object.entries(profileData.skills).map(([category, skillsList], idx) => (
              <Card key={category} delay={idx * 0.1} className="group">
                <div className="text-center mb-6">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-teal-500 rounded-3xl text-4xl mb-4 shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {category === 'languages' ? '💻' : category === 'frameworks' ? '⚛️' : '🛠️'}
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                    {category === 'languages' ? 'Bahasa Pemrograman' :
                     category === 'frameworks' ? 'Framework & Library' : 'Tools & Teknologi'}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillsList.map((skill, index) => (
                    <motion.span
                      key={index}
                      className="px-3 sm:px-4 py-2 bg-gradient-to-r from-green-50 to-teal-50 text-gray-700 rounded-xl text-sm font-semibold hover:from-green-100 hover:to-teal-100 transition-all duration-200 border-2 border-green-200 shadow-sm hover-lift"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.02 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        {/* Certifications Section */}
        <motion.section
          id="certs"
          className="mb-20 sm:mb-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeader 
            icon={FaCertificate}
            title="Sertifikat & Pelatihan"
            subtitle="Komitmen terhadap pembelajaran berkelanjutan"
            gradient="from-yellow-500 to-orange-500"
          />

          {/* Featured Certifications */}
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <FaStar className="text-yellow-500 animate-bounce-soft" />
            Sertifikat Utama
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {profileData.certifications.map((cert, index) => (
              <Card key={index} delay={index * 0.1} className="group">
                <motion.div 
                  className="relative w-full h-44 sm:h-52 mb-6 bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-2xl border-2 border-yellow-200 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={cert.image_url}
                    alt={cert.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="rounded-xl transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
                <motion.h3 
                  className="font-bold text-gray-800 text-lg sm:text-xl mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-yellow-600 group-hover:to-orange-600 group-hover:bg-clip-text transition-all"
                  whileHover={{ x: 5 }}
                >
                  {cert.name}
                </motion.h3>
                <p className="text-sm sm:text-base text-purple-600 font-bold flex items-center gap-2">
                  <FaAward className="text-yellow-500" />
                  {cert.provider}
                </p>
              </Card>
            ))}
          </div>

          {/* Other Certifications */}
          <motion.h3 
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8 flex items-center justify-center gap-3 mt-16"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <FaStar className="text-blue-500 animate-bounce-soft" />
            Sertifikat Lainnya & Pelatihan Lanjutan
          </motion.h3>
          <Card>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherCertsText.map((certText, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 group"
                >
                  <motion.div 
                    className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5 shadow-md group-hover:scale-110 transition-transform"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.4 }}
                  >
                    ✓
                  </motion.div>
                  <span className="text-gray-700 text-sm sm:text-base leading-relaxed font-medium">{certText}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.section>

      </div>

      {/* Footer - Enhanced */}
      <footer className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-16 px-4 overflow-hidden">
        <FloatingParticles />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-lg rounded-3xl mb-6 shadow-2xl"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FaRocket className="text-5xl" />
            </motion.div>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">Mari Berkolaborasi!</h3>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Saya terbuka untuk peluang dan proyek baru yang menarik. Mari ciptakan sesuatu yang luar biasa bersama!
            </p>
            
            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-10">
              {[
                { icon: FaLinkedin, href: profileData.contact.linkedin, label: "LinkedIn" },
                { icon: FaGithub, href: profileData.contact.github, label: "GitHub" },
                { icon: FaEnvelope, href: `mailto:${profileData.contact.email}`, label: "Email" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group relative w-16 h-16 sm:w-20 sm:h-20"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-lg rounded-2xl shadow-2xl group-hover:bg-white/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <social.icon size={28} />
                  </div>
                </motion.a>
              ))}
            </div>
            
            {/* Contact Button */}
            <motion.a
              href={`mailto:${profileData.contact.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaEnvelope />
              Kirim Pesan
              <FaExternalLinkAlt className="text-sm" />
            </motion.a>
            
            {/* Copyright */}
            <motion.div
              className="mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-sm sm:text-base text-blue-100 flex items-center justify-center gap-2 flex-wrap">
                <span>© {new Date().getFullYear()} {profileData.name}.</span>
                <span className="flex items-center gap-2">
                  Dibuat dengan <FaHeart className="text-red-400 animate-pulse" /> menggunakan Next.js & Tailwind CSS
                </span>
              </p>
              <motion.p 
                className="text-xs text-blue-200 mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                Designed with passion, built with precision ✨
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </footer>
    </div>
  );
}