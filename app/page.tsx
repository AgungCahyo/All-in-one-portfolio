'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { Panel } from '@/components/sections/Panel';
import { panels, ROTATE_INTERVAL } from '@/data/panels';
import { useActivePanel } from '@/lib/activePanelContext';
import { useLanguage } from '@/lib/languageContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';

export default function Home() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const { setActivePanel } = useActivePanel();
  const { lang, t } = useLanguage();

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

  function handleActivate(i: number) {
    setActive(i);
    setPaused(true);
  }

  function handleMouseLeave() {
    setPaused(false);
  }

  return (
    <main className="min-h-screen bg-black text-white font-['DM_Sans',sans-serif] overflow-hidden">

      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center"
        style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}
      >
        <span className="text-[11px] tracking-[0.3em] uppercase font-['Cormorant_Garamond',serif] font-bold italic"
          style={{ color: 'rgba(255,255,255,0.3)' }}>
          Agung Cahyo Prasetyo
        </span>
        <nav className="flex items-center gap-8">
          {panels.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleActivate(i)}
              className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: active === i ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)' }}
            >
              {p.id === 'beverage' ? t('Beverage', 'Peracik') : 
               p.id === 'developer' ? t('Developer', 'Developer') : 
               t('Videographer', 'Videografer')}
            </button>
          ))}
          <div className="w-px h-3 bg-white/10 ml-2" />
          <LanguageSwitcher />
        </nav>
      </motion.header>

      {/* Watermark */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 select-none overflow-hidden">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.018 }}
          transition={{ delay: 1, duration: 2 }}
          className="font-['Cormorant_Garamond',serif] font-bold whitespace-nowrap tracking-[-0.04em]"
          style={{ fontSize: '10vw', color: 'white' }}
        >
          {t('CODE · CINEMA · CRAFT', 'KODE · SINEMA · KARYA')}
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
          Jakarta, Indonesia
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.15)' }}>
          {t('Open for collaboration', 'Terbuka untuk kolaborasi')}
        </span>
      </div>

    </main>
  );
}