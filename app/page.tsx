'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { Panel } from '@/components/sections/Panel';
import { panels, ROTATE_INTERVAL } from '@/data/panels';
import { useActivePanel } from '@/lib/activePanelContext';
import { useLanguage } from '@/lib/languageContext';
import { LayoutHeader } from '@/components/ui/LayoutHeader';
import Link from 'next/link';

export default function Home() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isBooting, setIsBooting] = useState(false);
  const [typedChars, setTypedChars] = useState(0);
  const [bootProgress, setBootProgress] = useState(0);
  const { setActivePanel } = useActivePanel();
  const { t } = useLanguage();
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
    setActivePanel(panels[active].id as 'leadership' | 'developer' | 'videographer');
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
  }

  function handleActivateRole(id: 'developer' | 'videographer' | 'leadership') {
    const i = panels.findIndex((p) => p.id === id);
    if (i >= 0) handleActivate(i);
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

      <LayoutHeader
        homePanels={{
          activeId: panels[active].id as 'developer' | 'videographer' | 'leadership',
          onActivate: handleActivateRole,
        }}
      />

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
        style={{ marginTop: '60px', height: 'calc(100vh - 60px)' }}
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