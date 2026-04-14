'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Magnetic } from '@/components/ui/Magnetic';
import { useLanguage } from '@/lib/languageContext';
import { useActivePanel } from '@/lib/activePanelContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

const glitchLines = [
  '> ERROR 404: route_not_found',
  '> checking index... [ FAILED ]',
  '> fallback handler... [ TRIGGERED ]',
  '> status: page does not exist',
  '> $ _',
];

const navLinks = [
  { href: '/',             labelEn: '← Home',           labelId: '← Beranda'          },
  { href: '/developer',   labelEn: 'Developer',         labelId: 'Developer'           },
  { href: '/videographer', labelEn: 'Videographer',     labelId: 'Videografer'         },
  { href: '/beverage',    labelEn: 'Beverage',          labelId: 'Peracik'             },
  { href: '/about',       labelEn: 'About',             labelId: 'Tentang'             },
];

export default function NotFound() {
  const { lang, t } = useLanguage();
  const { setActivePanel } = useActivePanel();
  const [termLines, setTermLines] = useState<string[]>([]);
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    setActivePanel('developer');
  }, [setActivePanel]);

  // Sequential terminal reveal
  useEffect(() => {
    let idx = 0;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function next() {
      const id = setTimeout(() => {
        setTermLines((prev) => [...prev, glitchLines[idx]]);
        idx++;
        if (idx < glitchLines.length) next();
      }, idx === 0 ? 400 : 340);
      timers.push(id);
    }
    next();
    return () => timers.forEach(clearTimeout);
  }, []);

  // Occasional glitch effect on 404 number
  useEffect(() => {
    const id = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 160);
    }, 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <main
      className="min-h-screen font-['DM_Sans',sans-serif] relative overflow-hidden flex flex-col"
      style={{ background: '#090c10', color: '#b8c8e0' }}
    >
      {/* Grid bg */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(100,130,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,130,200,0.03) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />

      {/* Glow blobs */}
      <div className="fixed pointer-events-none z-0" style={{ top: '-80px', left: '-80px', width: '480px', height: '480px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(100,130,200,0.07) 0%, transparent 70%)' }} />
      <div className="fixed pointer-events-none z-0" style={{ bottom: '-60px', right: '-60px', width: '360px', height: '360px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(52,211,153,0.04) 0%, transparent 70%)' }} />

      {/* Minimal header */}
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex justify-between items-center px-8 py-5"
        style={{ borderBottom: '1px solid rgba(100,130,200,0.06)' }}
      >
        <Magnetic strength={0.25}>
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
          >
            <svg className="w-3.5 h-3.5" style={{ color: 'rgba(184,200,224,0.3)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: 'rgba(184,200,224,0.3)' }}>
              {t('Portfolio', 'Portofolio')}
            </span>
          </Link>
        </Magnetic>
        <LanguageSwitcher />
      </motion.header>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 py-16">

        {/* Terminal breadcrumb */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex items-center gap-2 mb-10 font-mono"
          style={{ fontSize: '11px', color: '#3a4860' }}
        >
          <span style={{ color: '#34d399' }}>▶</span>
          <span style={{ color: '#5a7a50' }}>~/portfolio</span>
          <span>/</span>
          <span style={{ color: '#6a8ab0' }}>404</span>
        </motion.div>

        {/* Giant 404 */}
        <div className="relative mb-4 select-none" style={{ lineHeight: 1 }}>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-['Cormorant_Garamond',serif] font-bold text-center"
            style={{
              fontSize: 'clamp(7rem, 22vw, 18rem)',
              letterSpacing: '-0.04em',
              color: glitchActive ? 'rgba(100,130,200,0.45)' : 'rgba(184,200,224,0.08)',
              textShadow: glitchActive
                ? '4px 0 rgba(52,211,153,0.4), -4px 0 rgba(100,130,200,0.4)'
                : 'none',
              transition: 'color 0.05s, text-shadow 0.05s',
              userSelect: 'none',
            }}
          >
            404
          </motion.h1>

          {/* Scanline overlay on number */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.08) 3px, rgba(0,0,0,0.08) 4px)',
              mixBlendMode: 'multiply',
            }}
          />
        </div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-[10px] tracking-[0.35em] uppercase mb-3" style={{ color: '#2a3848' }}>
            {t('Page Not Found', 'Halaman Tidak Ditemukan')}
          </p>
          <p className="text-[14px] leading-relaxed max-w-sm text-center" style={{ color: '#3a4860' }}>
            {t(
              "This route doesn't exist in the codebase. Maybe it was moved, renamed, or never deployed.",
              "Route ini tidak ada di codebase. Mungkin sudah dipindah, diganti nama, atau belum di-deploy.",
            )}
          </p>
        </motion.div>

        {/* Terminal widget */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="w-full max-w-md mb-12 rounded-lg overflow-hidden"
          style={{ border: '1px solid rgba(100,130,200,0.14)', background: '#080c10' }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-1.5 px-4 py-2.5" style={{ borderBottom: '1px solid rgba(100,130,200,0.1)', background: '#0a0e14' }}>
            <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-2 h-2 rounded-full" style={{ background: '#28c840' }} />
            <span className="ml-auto font-mono text-[9px]" style={{ color: '#2a3848' }}>error.log</span>
          </div>
          {/* Lines */}
          <div className="p-5 font-mono text-[11px] leading-relaxed space-y-1.5">
            {termLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                style={{
                  color: i === 0 ? '#ef4444' :
                         i === termLines.length - 1 ? '#34d399' :
                         i % 2 === 0 ? '#4a5870' : '#3a4860',
                }}
              >
                {line}
              </motion.div>
            ))}
            {termLines.length === glitchLines.length && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="animate-pulse"
                style={{ color: '#34d399' }}
              >
                █
              </motion.span>
            )}
          </div>
        </motion.div>

        {/* Nav links */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {navLinks.map((link, i) => (
            <Magnetic key={link.href} strength={0.2}>
              <Link
                href={link.href}
                className="px-4 py-2 rounded-full font-mono text-[11px] tracking-[0.16em] uppercase transition-all hover:opacity-100"
                style={{
                  border: '1px solid rgba(100,130,200,0.12)',
                  color: i === 0 ? '#b8c8e0' : '#4a5870',
                  background: i === 0 ? 'rgba(100,130,200,0.06)' : 'transparent',
                }}
              >
                {lang === 'en' ? link.labelEn : link.labelId}
              </Link>
            </Magnetic>
          ))}
        </motion.div>
      </div>

      {/* Footer strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="relative z-10 px-8 py-4 flex justify-between items-center"
        style={{ borderTop: '1px solid rgba(100,130,200,0.05)' }}
      >
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: 'rgba(184,200,224,0.1)' }}>
          Kudus, Indonesia
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: 'rgba(184,200,224,0.1)' }}>
          {t('Page not found', 'Halaman tidak ditemukan')} — 404
        </span>
      </motion.div>
    </main>
  );
}
