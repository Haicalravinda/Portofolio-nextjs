import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Haical Ravinda Rassya - Full-Stack & Software Engineer Portfolio',
  description: 'Portfolio pribadi Haical Ravinda Rassya, Fresh Graduate Sistem Informasi dari Universitas Gunadarma dengan IPK 3.77. Berpengalaman dalam Full-Stack Development dan Mobile Application Development.',
  keywords: 'Haical Ravinda, Full-Stack Developer, Software Engineer, Mobile Developer, Web Developer, Portfolio, Bangkit Academy, Gunadarma University, React, Next.js, Laravel, PHP, JavaScript, TypeScript',
  authors: [{ name: 'Haical Ravinda Rassya' }],
  creator: 'Haical Ravinda Rassya',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://haicalravinda.zya.me/',
    title: 'Haical Ravinda Rassya - Full-Stack & Software Engineer',
    description: 'Portfolio pribadi Haical Ravinda Rassya, Fresh Graduate dengan keahlian Full-Stack dan Mobile Development.',
    siteName: 'Haical Ravinda Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haical Ravinda Rassya - Full-Stack & Software Engineer',
    description: 'Portfolio pribadi Haical Ravinda Rassya',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#667eea" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}