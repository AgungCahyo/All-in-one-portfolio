'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { Panel } from '@/components/sections/Panel';
import { panels, ROTATE_INTERVAL } from '@/data/panels';
import { useActivePanel } from '@/lib/activePanelContext';
import { useLanguage } from '@/lib/languageContext';
import { LayoutHeader } from '@/components/ui/LayoutHeader';
import type { ThemeVariant } from '@/lib/types';
import Link from 'next/link';

// Maps each panel's id to the LayoutHeader theme that matches its
// redesigned page — distinct from panel.theme in data/panels.ts, which
// drives Panel.tsx's own photo/typography treatment under older names
// ('terminal', 'cinema') that predate this redesign.
const headerThemeByPanel: Record<string, ThemeVariant> = {
  developer: 'blueprint',
  leadership: 'leadership',
  videographer: 'cinema',
};

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
    <main className="min-h-screen font-body overflow-hidden" style={{ background: panels[active].bg, transition: 'background 700ms ease' }}>
      <h1 className="sr-only">Agung Cahyo Prasetyo - Full-Stack Developer portfolio based in Kudus</h1>
      <motion.div
        initial={false}
        animate={isRevealed ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{ pointerEvents: isRevealed ? 'auto' : 'none' }}
      >

      <LayoutHeader
        theme={headerThemeByPanel[panels[active].id]}
        homePanels={{
          activeId: panels[active].id as 'developer' | 'videographer' | 'leadership',
          onActivate: handleActivateRole,
        }}
      />

      {/* Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ delay: 1, duration: 2 }}
          className="font-heading font-bold whitespace-nowrap tracking-[-0.04em]"
          style={{ fontSize: '10vw', color: panels[active].accent, transition: 'color 700ms ease' }}
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
              background: active === i ? panels[active].accent : `${panels[active].dim}55`,
              transition: 'width 400ms ease, background 400ms ease',
            }}
          />
        ))}
      </div>

      {/* Bottom strip */}
      <div
        className="fixed bottom-0 left-0 right-0 px-8 py-4 flex justify-between items-center z-40"
        style={{
          borderTop: `1px solid ${panels[active].dim}22`,
          background: `${panels[active].bg}CC`,
          backdropFilter: 'blur(8px)',
          transition: 'background 700ms ease, border-color 700ms ease',
        }}
      >
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: panels[active].dim }}>
          Kudus, Indonesia
        </span>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: panels[active].dim }}>
            {t('Open for developer projects', 'Open untuk project developer')}
          </span>
          <Link href="/developer/work-with-me" className="font-mono text-[9px] tracking-[0.2em] uppercase"
            style={{ color: panels[active].accent }}>
            {t('Start Project', 'Mulai Project')}
          </Link>
        </div>
      </div>
      </motion.div>

    </main>
  );
}