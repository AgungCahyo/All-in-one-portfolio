'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { Panel } from '@/components/sections/Panel';
import { panels, ROTATE_INTERVAL } from '@/data/panels';
import { useActivePanel } from '@/lib/activePanelContext';
import { useLanguage } from '@/lib/languageContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import Link from 'next/link';
import { Magnetic } from '@/components/ui/Magnetic';

export default function Home() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const [bootProgress, setBootProgress] = useState(0);
  const { setActivePanel } = useActivePanel();
  const { lang, t } = useLanguage();
  const bootScript = [
    '$ init portfolio.home --mode developer-first',
    '> loading engineering showcase...',
    '> syncing code / cinema / craft...',
    '> applying cinematic transitions...',
    '> boot complete. rendering homepage',
  ].join('\n');

  useLayoutEffect(() => {
    const alreadyRevealed = sessionStorage.getItem('home-revealed') === 'true';
    if (!alreadyRevealed) return;
    setIsRevealed(true);
  }, []);

  useEffect(() => {
    if (!isRevealed) return;
    setTypedChars(bootScript.length);
    setBootProgress(100);
  }, [isRevealed, bootScript.length]);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % panels.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, ROTATE_INTERVAL);
    return () => clearInterval(id);
  }, [paused, next, active]);

  useEffect(() => {
    setActivePanel(panels[active].id as 'beverage' | 'developer' | 'videographer');
  }, [active, setActivePanel]);

  useEffect(() => {
    const total = bootScript.length;
    const typeTimer = window.setInterval(() => {
      setTypedChars((prev) => {
        const next = Math.min(prev + Math.ceil(Math.random() * 3), total);
        setBootProgress(Math.round((next / total) * 100));
        return next;
      });
    }, 22);
    return () => window.clearInterval(typeTimer);
  }, [bootScript]);

  useEffect(() => {
    if (typedChars < bootScript.length) return;
    const revealTimer = window.setTimeout(() => {
      setIsRevealed(true);
      sessionStorage.setItem('home-revealed', 'true');
    }, 260);
    return () => window.clearTimeout(revealTimer);
  }, [typedChars, bootScript.length]);

  useEffect(() => {
    document.documentElement.setAttribute('data-home-revealed', isRevealed ? 'true' : 'false');
    window.dispatchEvent(new CustomEvent('home-reveal-state', { detail: { revealed: isRevealed } }));
  }, [isRevealed]);

  function handleActivate(i: number) {
    setActive(i);
    setPaused(true);
    setMenuOpen(false);
  }

  function handleMouseLeave() {
    setPaused(false);
  }

  return (
    <main className="min-h-screen bg-black text-white font-['DM_Sans',sans-serif] overflow-hidden">
      <h1 className="sr-only">Agung Cahyo Prasetyo - Full-Stack Developer portfolio based in Kudus</h1>
      {/* <AnimatePresence>
        {!isRevealed && (
          <motion.section
            key="home-plain-entry"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-120 flex items-center justify-center bg-black"
          >
            {!isBooting ? (
              <div className="text-center px-6">
                <p className="text-sm mb-3 tracking-[0.18em] uppercase text-white/65">
                  Agung Cahyo Prasetyo
                </p>
                <p className="text-[11px] mb-6 tracking-[0.14em] uppercase text-white/45">
                  {t('Developer services first', 'Fokus utama: jasa developer')}
                </p>
                <button
                  onClick={() => setIsBooting(true)}
                  className="px-8 py-3 border border-white/40 text-sm tracking-[0.22em] uppercase text-white hover:bg-white hover:text-black transition-all duration-500"
                >
                  {t('Enter Portfolio', 'Masuk Portfolio')}
                </button>
              </div>
            ) : (
              <div className="w-full max-w-2xl mx-6 border border-white/15 bg-black/80 backdrop-blur-sm p-5">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/45 mb-3">
                  {t('Booting Home Experience', 'Booting Home Experience')}
                </p>
                <pre className="font-mono text-[12px] leading-relaxed text-white/78 whitespace-pre-wrap min-h-[132px]">
                  {bootScript.slice(0, typedChars)}
                  <span className="animate-pulse">|</span>
                </pre>
                <div className="mt-4">
                  <div className="h-1.5 w-full bg-white/10 overflow-hidden">
                    <motion.div className="h-full bg-white/80" animate={{ width: `${bootProgress}%` }} transition={{ ease: 'easeOut', duration: 0.2 }} />
                  </div>
                  <p className="font-mono text-[10px] mt-2 text-white/45">{bootProgress}%</p>
                </div>
              </div>
            )}
          </motion.section>
        )}
      </AnimatePresence> */}

      <motion.div
        initial={false}
        animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: isRevealed ? 'auto' : 'none' }}
      >

      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-5 flex justify-between items-center"
        style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        <div className="flex items-center gap-3">
          <svg className="w-3.5 h-3.5" style={{ color: 'rgba(255,255,255,0.28)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          <span className="text-[10px] tracking-[0.25em] uppercase leading-none"
            style={{ color: 'rgba(255,255,255,0.28)' }}>
            {t('Portfolio', 'Portofolio')}
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-7">
          {panels.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleActivate(i)}
              className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-300 leading-none"
              style={{ color: active === i ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)' }}
            >
              {p.id === 'beverage' ? t('Beverage', 'Peracik') : 
               p.id === 'developer' ? t('Developer', 'Developer') : 
               t('Videographer', 'Videografer')}
            </button>
          ))}
          <div className="w-px h-3 bg-white/10 ml-2" />
          <Magnetic strength={0.2}>
          <Link href="/developer/work-with-me" className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: 'rgba(255,255,255,0.45)' }}>
              {t('Start Project', 'Mulai Project')}
            </Link>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Link href="/about" className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: 'rgba(255,255,255,0.2)' }}>
              {t('About', 'Tentang')}
            </Link>
          </Magnetic>
          <LanguageSwitcher />
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="p-2 rounded-md border border-white/10"
            aria-label="Toggle menu"
          >
            <svg className="w-4 h-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </motion.header>
      {menuOpen && (
        <div className="fixed top-[58px] left-0 right-0 z-40 md:hidden px-4 py-3 border-b border-white/10 bg-black/90 backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {panels.map((p, i) => (
              <button
                key={p.id}
                onClick={() => handleActivate(i)}
                className="text-left px-3 py-2 rounded-md text-[11px] tracking-[0.16em] uppercase"
                style={{ color: active === i ? 'rgba(255,255,255,0.8)' : 'rgba(255,255,255,0.45)', background: active === i ? 'rgba(255,255,255,0.08)' : 'transparent' }}
              >
                {p.id === 'beverage' ? t('Beverage', 'Beverage') :
                 p.id === 'developer' ? t('Developer', 'Developer') :
                 t('Videographer', 'Videografer')}
              </button>
            ))}
            <Link href="/about" className="text-left px-3 py-2 rounded-md text-[11px] tracking-[0.16em] uppercase"
              style={{ color: 'rgba(255,255,255,0.45)' }}>
              {t('About', 'Tentang')}
            </Link>
            <Link href="/developer/work-with-me" className="text-left px-3 py-2 rounded-md text-[11px] tracking-[0.16em] uppercase"
              style={{ color: 'rgba(255,255,255,0.75)', background: 'rgba(255,255,255,0.08)' }}>
              {t('Start Project', 'Mulai Project')}
            </Link>
          </div>
        </div>
      )}

      {/* Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.018 }}
          transition={{ delay: 1, duration: 2 }}
          className="font-['Cormorant_Garamond',serif] font-bold whitespace-nowrap tracking-[-0.04em]"
          style={{ fontSize: '10vw', color: 'white' }}
        >
          {t('CODE · CINEMA · CRAFT', 'KODE · SINEMA · RACIK')}
        </motion.p>
      </div>

      {/* Rotating triptych */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row"
        style={{ marginTop: menuOpen ? '172px' : '60px', height: menuOpen ? 'calc(100vh - 172px)' : 'calc(100vh - 60px)' }}
        onMouseLeave={handleMouseLeave}
      >
        {panels.map((panel, i) => (
          <Panel
            key={panel.id}
            panel={panel}
            isActive={active === i}
            onActivate={() => handleActivate(i)}
          />
        ))}
      </motion.div>

      {/* Dot indicators */}
      <div className="fixed bottom-6 left-1/2 z-50 flex gap-2.5" style={{ transform: 'translateX(-50%)' }}>
        {panels.map((_, i) => (
          <button
            key={i}
            onClick={() => handleActivate(i)}
            style={{
              width: active === i ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              background: active === i ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)',
              transition: 'width 400ms ease, background 400ms ease',
            }}
          />
        ))}
      </div>

      {/* Bottom strip */}
      <div
        className="fixed bottom-0 left-0 right-0 px-8 py-4 flex justify-between items-center z-40"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}
      >
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.15)' }}>
          Kudus, Indonesia
        </span>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.15)' }}>
            {t('Open for developer projects', 'Open untuk project developer')}
          </span>
          <Link href="/developer/work-with-me" className="font-mono text-[9px] tracking-[0.2em] uppercase"
            style={{ color: 'rgba(255,255,255,0.45)' }}>
            {t('Start Project', 'Mulai Project')}
          </Link>
        </div>
      </div>
      </motion.div>

    </main>
  );
}