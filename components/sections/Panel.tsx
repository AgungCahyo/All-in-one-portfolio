'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ProgressBar } from './ProgressBar';
import { LeadPanelContent } from './LeadPanelContent';
import { ROTATE_INTERVAL } from '@/data/panels';
import type { Panel as PanelType } from '@/lib/types';
import { useLanguage } from '@/lib/languageContext';
import { useReducedMotion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface PanelProps {
  panel: PanelType;
  isActive: boolean;
  onActivate: () => void;
}

export function Panel({ panel, isActive, onActivate }: PanelProps) {
  const { lang, t } = useLanguage();
  const reduced = useReducedMotion();
  const isCinema = panel.theme === 'cinema';
  const isTerminal = panel.theme === 'terminal';
  const isLeadership = panel.theme === 'leadership';

  const bottomGradient = isCinema
    ? 'linear-gradient(to top, #0d0c0b 0%, transparent 50%)'
    : isTerminal
    ? 'linear-gradient(to top, #0a0d12 0%, transparent 50%)'
    : 'linear-gradient(to top, #0b1016 0%, transparent 50%)';

  // Leadership-specific enhancements
  const isLeadershipPanel = panel.id === 'leadership';
  const leadershipPulse = isLeadershipPanel && isActive ?
    `animate-pulse-slow` : '';

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{ flex: isActive ? '5' : '1', transition: 'flex 700ms cubic-bezier(0.4, 0, 0.2, 1)' }}
      onMouseEnter={onActivate}
    >
      {/* Base bg */}
      <div className="absolute inset-0" style={{ background: panel.bg }} />
      {/* Leadership badge */}
      {isLeadershipPanel && (
        <div className={`absolute top-2 right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full
          ${isActive ? 'bg-[rgba(223,224,195,0.25)]' : 'bg-[rgba(223,224,195,0.12)]'}
          ${leadershipPulse}
          backdrop-blur-sm
          border border-[rgba(223,224,195,0.35)]
          transition-all duration-300`}>
          <span className="text-[8px] font-bold text-[rgba(223,224,195,0.9)]">L</span>
        </div>
      )}

      {/* Photo background */}
      <div className="absolute inset-0">
        <Image
          src={panel.photo}
          alt="Agung Cahyo Prasetyo"
          fill
          className="object-cover object-[50%_20%]"
          style={{
            filter: `${panel.PhotoFilter} brightness(${isLeadership ? (isActive ? 0.18 : 0.1) : isActive ? 0.38 : 0.15})`,
            transform: panel.photoFlip ? 'scaleX(-1)' : 'none',
            transition: 'filter 700ms ease, transform 700ms ease',
            objectPosition: '50% 20%',
          }}
          priority
        />
        {isLeadership && (
          <div
            className="absolute inset-0"
            style={{ background: isActive ? 'rgba(10,18,16,0.55)' : 'rgba(10,18,16,0.7)' }}
          />
        )}
        <div className="absolute inset-0" style={{ background: bottomGradient }} />
        {/* Leadership border glow */}
        {isLeadershipPanel && isActive && (
          <div className="absolute inset-0 -z-10"
            style={{
              border: '2px solid rgba(223,224,195,0.45)',
              borderRadius: 'inherit',
              pointerEvents: 'none',
              animation: 'leadershipGlow 3s ease-in-out infinite alternate'
            }}
          />
        )}
      </div>

      {/* Cinema letterbox bars */}
      {isCinema && (
        <>
          <div className="absolute top-0 left-0 right-0 z-10" style={{ height: '36px', background: 'rgba(0,0,0,0.85)' }} />
          <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: '36px', background: 'rgba(0,0,0,0.85)' }} />
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 font-mono"
            style={{ height: '36px', color: 'rgba(206,200,192,0.2)', fontSize: '8px', letterSpacing: '0.15em' }}>
            <span>{panel.num} / CINEMA</span>
            <span style={{ color: isActive ? 'rgba(206,200,192,0.4)' : 'rgba(206,200,192,0.1)', transition: 'color 700ms' }}>REC ●</span>
          </div>
        </>
      )}

      {/* Divider right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-px hidden lg:block z-20"
        style={{ background: 'rgba(255,255,255,0.04)' }} />

      {/* Progress bar */}
      <ProgressBar active={isActive} duration={ROTATE_INTERVAL} isLeadership={isLeadershipPanel} />

      {/* Clickable content area */}
      <Link
        href={panel.href}
        aria-current={isActive ? 'true' : undefined}
        onFocus={onActivate}
        onClick={(e) => { if (!isActive) e.preventDefault(); }}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !isActive) {
            e.preventDefault();
            onActivate();
          }
        }}
        className="block h-full outline-none focus-visible:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.7)]"
      >
        <div
          className="relative z-10 h-full flex flex-col justify-between"
          style={{
            paddingTop: isCinema && isActive ? '52px' : '48px',
            paddingBottom: isCinema && isActive ? '52px' : '48px',
            paddingLeft: isActive ? 'clamp(28px, 3.5vw, 52px)' : '20px',
            paddingRight: isActive ? 'clamp(28px, 3.5vw, 52px)' : '20px',
            transition: 'padding-left 700ms cubic-bezier(0.4,0,0.2,1), padding-right 700ms cubic-bezier(0.4,0,0.2,1)',
            minHeight: isLeadership && isActive ? '100%' : 'calc(100vh - 60px)',
          }}
        >
          {/* Top: number */}
          <div className="flex justify-between items-start">
            <span
              className={`${isTerminal ? 'font-mono' : ''} text-[9px] tracking-[0.25em] uppercase`}
              style={{ color: isActive ? panel.dim : 'rgba(120,120,120,0.3)', transition: 'color 500ms' }}
            >
              {panel.num}
            </span>
          </div>

          {/* Role line */}
          <div className="mb-2">
            <span
              className="text-[10px] tracking-[0.2em] uppercase"
              style={{ color: isActive ? panel.dim : 'rgba(120,120,120,0.3)', transition: 'color 500ms' }}
            >
              {panel.id === 'developer' ? (lang === 'en' ? 'BUILD' : 'BANGUN') :
               panel.id === 'videographer' ? (lang === 'en' ? 'CREATE' : 'CIPTA') :
               panel.id === 'leadership' ? (lang === 'en' ? 'LEAD' : 'MEMPIMPIN') : ''}
            </span>
          </div>

          {/* Middle: title */}
          <div className={`flex-1 flex overflow-hidden ${isLeadership && isActive ? 'min-h-0 items-stretch' : 'items-center'}`}>
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.div key="active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }} className={isLeadership ? 'h-full min-h-0 w-full' : undefined}>
                  {isCinema && (
                    <h2 className="font-['Cormorant_Garamond',serif] font-bold leading-[0.88] whitespace-pre-line"
                      style={{ fontSize: 'clamp(2.2rem, 3.8vw, 4.2rem)', color: panel.accent, letterSpacing: '-0.02em' }}>
                      {typeof panel.title === 'string' ? panel.title : panel.title[lang]}
                    </h2>
                  )}
                  {isTerminal && (
                    <div>
                      <div className="font-mono text-[9px] flex items-center gap-2 mb-3" style={{ color: '#2a4060' }}>
                        <span style={{ color: '#34d399' }}>▶</span>
                        <span>~/portfolio</span>
                        <span style={{ color: '#1a2535' }}>$</span>
                      </div>
                      <h2 className="font-bold leading-[0.90] whitespace-pre-line"
                        style={{ fontFamily: "'Courier New', monospace", fontSize: 'clamp(2.2rem, 3.5vw, 3.8rem)', color: panel.accent, letterSpacing: '-0.01em' }}>
                        Full-Stack<span style={{ color: '#2a3a54' }}>{'();'}</span>{'\n'}
                        <span style={{ color: '#1a2535' }}>{t('Developer', 'Developer')}</span>
                      </h2>
                    </div>
                  )}
                  {isLeadership && <LeadPanelContent panel={panel} reduced={reduced} />}
                </motion.div>
              ) : (
                <motion.h2
                  key="collapsed"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  className={`${isTerminal ? 'font-mono' : "font-['Cormorant_Garamond',serif]"} font-bold`}
                  style={{
                    fontSize: '0.85rem',
                    color: isLeadership ? 'rgba(197,208,218,0.18)' : isTerminal ? 'rgba(184,200,224,0.18)' : 'rgba(206,200,192,0.18)',
                    writingMode: 'vertical-rl',
                    letterSpacing: '0.1em',
                  }}
                >
                  {panel.titleShort}
                </motion.h2>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom: meta — only when active */}
          <AnimatePresence>
            {isActive && !isLeadership && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-3"
              >
                <p className="text-[12px] leading-relaxed" style={{ color: panel.dim, maxWidth: '220px' }}>
                  {typeof panel.subtitle === 'string' ? panel.subtitle : panel.subtitle[lang]}
                </p>
                <p className={`${isTerminal ? 'font-mono' : ''} text-[9px] tracking-[0.15em] uppercase`}
                  style={{ color: panel.dim, opacity: 0.4 }}>
                  {typeof panel.tag === 'string' ? panel.tag : panel.tag[lang]}
                </p>
                <div className="flex items-center gap-2 text-[11px] cursor-pointer" style={{ color: panel.accent }}>
                  <span>{typeof panel.cta === 'string' ? panel.cta : panel.cta[lang]}</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </div>
  );
}