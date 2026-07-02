import { FaTools, FaLaptopCode, FaRocket, FaBriefcase, FaGraduationCap, FaFileAlt, FaCity, FaBitcoin, FaDatabase, FaServer, FaChartLine } from 'react-icons/fa';

export const profileData = {
  name: "Haical Ravinda Rassya",
  summary: "Fresh graduate Sistem Informasi dari Universitas Gunadarma (IPK 3.77). Berpengalaman membangun sistem informasi kementerian, e-commerce, dan aplikasi mobile menggunakan Laravel, Next.js, React, dan Flutter.",
  contact: {
    email: "haikalrafindaraysa@gmail.com",
    phone: "+6289602471192",
    linkedin: "https://www.linkedin.com/in/haical-ravinda-rassya-059319222",
    github: "https://github.com/haicalravinda",
    location: "Bekasi, Jawa Barat"
  },
  education: { degree: "Sarjana Sistem Informasi", university: "Universitas Gunadarma", period: "2021 - 2025", gpa: "3.77 / 4.00", status: "Cum Laude" },
  experience: [
    { title: "Technical Support Engineer", company: "PLN Icon Plus", type: "Full-time", duration: "Juni 2026 – Saat Ini", location: "South Jakarta • On-site", skills: ["Technical Support", "Databases", "SQL", "System Monitoring"], description: "Menangani dukungan teknis tingkat lanjut untuk infrastruktur IT, memonitor kinerja database real-time, dan memecahkan masalah sistem kritis untuk stabilitas layanan PLN Icon Plus.", icon: FaTools, color: "from-blue-500 to-cyan-500" },
    { title: "Full Stack Developer", company: "Kementerian Kelautan dan Perikanan RI", type: "Contract", duration: "Desember 2025 – Juni 2026", location: "Central Jakarta • On-site", skills: ["Laravel", "PHP", "Git", "MySQL", "JavaScript", "Leaflet.js", "Chart.js"], description: "Mengembangkan Sistem Informasi Pemasaran (DITSAR), platform web kementerian untuk mengelola, menganalisis, dan memvisualisasikan data pemasaran dan komoditas perikanan nasional.", icon: FaLaptopCode, color: "from-emerald-500 to-teal-500" },
    { title: "Mobile Developer (FishGenius)", company: "Bangkit Academy (Google, GoTo, Traveloka)", type: "Studi Independen", duration: "Feb 2024 – Jun 2024", location: "Hybrid", skills: ["Flutter", "Dart", "Android Studio", "REST API", "Git"], description: "Mengembangkan aplikasi mobile edukasi akuakultur FishGenius dalam tim 6 orang, bertanggung jawab atas UI, state management, dan integrasi API ML.", icon: FaRocket, color: "from-indigo-500 to-blue-600" },
    { title: "Freelance Web Developer", company: "Pawon Ijo Catering", type: "Freelance", duration: "April 2025", location: "Remote", skills: ["Laravel", "Bootstrap", "MySQL", "Payment Gateway"], description: "Membangun e-commerce custom dengan dashboard admin, laporan profit otomatis, cetak struk, dan notifikasi pesanan masuk.", icon: FaBriefcase, color: "from-violet-500 to-purple-600" },
    { title: "Freelance Web Developer", company: "Akinini Katering", type: "Freelance", duration: "Januari 2025", location: "Remote", skills: ["React.js", "Laravel", "Tailwind CSS", "RESTful API"], description: "Membangun antarmuka modern responsif menggunakan React untuk platform kuliner online dengan backend Laravel.", icon: FaLaptopCode, color: "from-pink-500 to-rose-600" },
    { title: "Bootcamp Software Engineering", company: "RevoU", type: "Pelatihan", duration: "Agt – Sep 2023", location: "Online", skills: ["HTML5", "CSS3", "JavaScript", "Git"], description: "Pelatihan intensif Software Engineering. Mengembangkan website SMA Tulus Bhakti sebagai proyek akhir.", icon: FaGraduationCap, color: "from-amber-500 to-orange-600" }
  ],
  projects: [
    { name: "Sistem Informasi Pemasaran DITSAR", cat: "web", tech: "Laravel • Leaflet.js • Chart.js", desc: "Platform kementerian untuk memantau ekspor-impor komoditas perikanan dengan visualisasi GIS dan dashboard analitik.", icon: FaChartLine, gradient: "from-emerald-500 to-teal-600", tags: ["GIS", "Analytics", "Kementerian KKP"], featured: true },
    { name: "Portal Warga Bekasi", cat: "web", tech: "Laravel • MySQL • Google Maps", desc: "Sistem pengaduan dan informasi warga terpadu dengan tracking status realtime dan peta lokasi kejadian.", icon: FaCity, gradient: "from-blue-500 to-indigo-600", tags: ["Public Service", "Civic Tech"], featured: true },
    { name: "Surat App", cat: "web", tech: "Laravel • MySQL • Bootstrap", desc: "Aplikasi manajemen surat masuk/keluar dengan klasifikasi arsip, otorisasi digital, dan notifikasi disposisi.", icon: FaFileAlt, gradient: "from-violet-500 to-purple-600", tags: ["Office Automation", "Admin"] },
    { name: "Crypto Community Platform", cat: "web", tech: "Next.js • TypeScript • React", desc: "Situs edukasi crypto modern dengan monitoring harga live API dan optimasi Next.js Image & Font.", icon: FaBitcoin, gradient: "from-amber-500 to-orange-600", tags: ["Crypto", "Live API"], featured: true },
    { name: "E-commerce Toko Jamu Cikal Jaya", cat: "web", tech: "PHP • Bootstrap • JavaScript", desc: "Platform pemesanan jamu tradisional dengan dashboard admin dan cetak resi otomatis. Terdaftar Hak Cipta.", icon: FaDatabase, gradient: "from-cyan-500 to-blue-600", tags: ["UMKM", "Hak Cipta"] },
    { name: "Repositori Ilmiah Mahasiswa", cat: "web", tech: "Laravel • React.js • MySQL", desc: "Perpustakaan karya tulis ilmiah dengan tiga tingkat akses untuk pengarsipan dan pencarian dokumen skripsi.", icon: FaServer, gradient: "from-pink-500 to-rose-600", tags: ["Academic", "Document System"] },
    { name: "Sistem Manajemen Bengkel", cat: "web", tech: "Laravel • Vite • Chart.js", desc: "Sistem internal monitoring servis motor, sparepart, dan visualisasi grafik omset bulanan bengkel.", icon: FaTools, gradient: "from-red-500 to-orange-600", tags: ["Inventory", "Fintech"] },
    { name: "FishGenius Mobile App", cat: "mobile", tech: "Flutter • Dart • ML API", desc: "Aplikasi mobile deteksi penyakit ikan berbasis AI untuk peternak ikan mendapatkan anjuran penanganan cepat.", icon: FaRocket, gradient: "from-indigo-600 to-blue-500", tags: ["Bangkit", "AI", "Mobile"], featured: true }
  ],
  skills: {
    languages: ["Java", "JavaScript", "TypeScript", "PHP", "HTML", "CSS", "SQL", "Python", "Kotlin", "Golang", "Dart", "Haskell"],
    frameworks: ["Laravel", "React.js", "Next.js", "Vue.js", "Flutter", "Tailwind CSS", "Bootstrap", "CodeIgniter"],
    tools: ["Git & GitHub", "MySQL", "PostgreSQL", "MongoDB", "Android Studio", "VS Code", "Postman", "Vercel", "Firebase", "Docker", "Figma"]
  },
  certifications: [
    { name: "Program Pemagangan Asisten Pengelola & Pengembang Website", provider: "Kemnaker RI & Maganghub", image_url: "/certs/maganghub.png", date: "Juni 2026" },
    { name: "Sertifikat Magang Full Stack Developer DITSAR", provider: "Kementerian Kelautan dan Perikanan RI", image_url: "/certs/sertifkkp.png", date: "Juni 2026" },
    { name: "Mobile Development Specialization", provider: "Bangkit Academy (Google, GoTo, Traveloka)", image_url: "/certs/bangkit.jpg", date: "Juni 2024" },
    { name: "Sertifikasi Kompetensi Junior Web Programmer", provider: "BNSP", image_url: "/certs/bnsp.png", date: "Nov 2024" },
    { name: "Python Programming", provider: "Dicoding Indonesia", image_url: "/certs/python_dicoding.png", date: "Mar 2024" },
    { name: "English For Business Communication", provider: "The British Institute", image_url: "/certs/bangkit_tbi.jpg", date: "Mei 2024" },
    { name: "Cyber Security Specialization", provider: "University of Maryland (Coursera)", image_url: "/certs/cousera.jpg", date: "Jan 2024" },
    { name: "Software Engineering Bootcamp", provider: "RevoU", image_url: "/certs/revou.jpg", date: "Sep 2023" }
  ]
};

export const otherCertsText = [
  "Machine Learning for Android - Dicoding", "Fundamental Android Development – Dicoding",
  "Creating Android Apps for Beginners – Dicoding", "Junior Web Programmer – BNSP",
  "Golang Beginner & Intermediate – LEPKom UG", "Java Programming (J2SE) – LEPKom UG",
  "Kotlin Programming – Dicoding", "Git & GitHub – Dicoding",
  "Web Development – LEPKom UG", "Web Programming – Camp404",
  "Cloud Computing - BISA AI Academy", "Data Science – Dicoding",
  "SOLID Principles – Dicoding", "SQL – Dicoding",
  "UI/UX Design Bootcamp – Fikti Learning", "Programming Logic 101 – Dicoding",
  "Intro to Haskell – Dicoding", "Business Analysis – Coursera",
  "TechnoFair 10.0 – UG Workshop", "Building Website HTML5 – UG Workshop"
];
