'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ProgressBar } from './ProgressBar';
import { Magnetic } from '@/components/ui/Magnetic';
import { grainUrl, paperUrl, ROTATE_INTERVAL } from '@/data/panels';
import type { Panel as PanelType } from '@/lib/types';
import { useLanguage } from '@/lib/languageContext';

interface PanelProps {
  panel: PanelType;
  isActive: boolean;
  onActivate: () => void;
}

export function Panel({ panel, isActive, onActivate }: PanelProps) {
  const { lang, t } = useLanguage();
  const isCinema = panel.theme === 'cinema';
  const isTerminal = panel.theme === 'terminal';
  const isArtisan = panel.theme === 'artisan';

  const gradientOverlay = isCinema
    ? 'linear-gradient(100deg, rgba(13,12,11,0.97) 0%, rgba(13,12,11,0.7) 50%, rgba(13,12,11,0.2) 100%)'
    : isTerminal
    ? 'linear-gradient(100deg, rgba(10,13,18,0.97) 0%, rgba(10,13,18,0.7) 50%, rgba(10,13,18,0.2) 100%)'
    : 'linear-gradient(100deg, rgba(16,12,8,0.97) 0%, rgba(16,12,8,0.7) 50%, rgba(16,12,8,0.2) 100%)';

  const bottomGradient = isCinema
    ? 'linear-gradient(to top, #0d0c0b 0%, transparent 50%)'
    : isTerminal
    ? 'linear-gradient(to top, #0a0d12 0%, transparent 50%)'
    : 'linear-gradient(to top, #100c08 0%, transparent 50%)';

  return (
    <div
      className="relative overflow-hidden cursor-pointer"
      style={{ flex: isActive ? '5' : '1', transition: 'flex 700ms cubic-bezier(0.4, 0, 0.2, 1)' }}
      onMouseEnter={onActivate}
    >
      {/* Base bg */}
      <div className="absolute inset-0" style={{ background: panel.bg }} />

      {/* Photo background */}
      <div className="absolute inset-0">
        <Image
          src={panel.photo}
          alt="Agung Cahyo Prasetyo"
          fill
          className="object-cover object-[50%_20%]"
          style={{
            filter: `${panel.PhotoFilter} brightness(${isActive ? 0.38 : 0.15})`,
            transform: panel.photoFlip ? 'scaleX(-1)' : 'none',
            transition: 'filter 700ms ease, transform 700ms ease',
            objectPosition: '50% 20%',
          }}
          priority
        />
        <div className="absolute inset-0" style={{ background: gradientOverlay }} />
        <div className="absolute inset-0" style={{ background: bottomGradient }} />
      </div>

      {/* Texture overlays removed - now handled by global TextureOverlays in layout */}

      {/* Cinema letterbox bars */}
      {isCinema && (
        <>
          <div className="absolute top-0 left-0 right-0 z-10" style={{ height: '36px', background: 'rgba(0,0,0,0.85)' }} />
          <div className="absolute bottom-0 left-0 right-0 z-10" style={{ height: '36px', background: 'rgba(0,0,0,0.85)' }} />
          <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-3 font-mono"
            style={{ height: '36px', color: 'rgba(206,200,192,0.2)', fontSize: '8px', letterSpacing: '0.15em' }}>
            <span>01 / CINEMA</span>
            <span style={{ color: isActive ? 'rgba(206,200,192,0.4)' : 'rgba(206,200,192,0.1)', transition: 'color 700ms' }}>REC ●</span>
          </div>
        </>
      )}

      {/* Divider right edge */}
      <div className="absolute right-0 top-0 bottom-0 w-px hidden lg:block z-20"
        style={{ background: 'rgba(255,255,255,0.04)' }} />

      {/* Progress bar */}
      <ProgressBar active={isActive} duration={ROTATE_INTERVAL} />

      {/* Clickable content area */}
      <Link href={panel.href} onClick={(e) => { if (!isActive) e.preventDefault(); }} className="block h-full">
        <div
          className="relative z-10 h-full flex flex-col justify-between"
          style={{
            paddingTop: isCinema && isActive ? '52px' : '48px',
            paddingBottom: isCinema && isActive ? '52px' : '48px',
            paddingLeft: isActive ? 'clamp(28px, 3.5vw, 52px)' : '20px',
            paddingRight: isActive ? 'clamp(28px, 3.5vw, 52px)' : '20px',
            transition: 'padding-left 700ms cubic-bezier(0.4,0,0.2,1), padding-right 700ms cubic-bezier(0.4,0,0.2,1)',
            minHeight: 'calc(100vh - 60px)',
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

          {/* Middle: title */}
          <div className="flex-1 flex items-center overflow-hidden">
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.div key="active" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
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
                  {isArtisan && (
                    <div>
                      <div className="mb-2" style={{ color: 'rgba(180,130,80,0.25)', fontSize: '28px', lineHeight: 1 }}>⚗</div>
                      <h2 className="font-['Cormorant_Garamond',serif] font-bold leading-[0.88] whitespace-pre-line"
                        style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.8rem)', color: panel.accent, letterSpacing: '-0.02em' }}>
                        {t('Beverage', 'Peracik')}{'\n'}
                        <em style={{ fontStyle: 'italic', color: 'rgba(208,192,176,0.2)' }}>{t('Crafter', 'Minuman')}</em>
                      </h2>
                    </div>
                  )}
                </motion.div>
              ) : (
                <motion.h2
                  key="collapsed"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}
                  className={`${isTerminal ? 'font-mono' : "font-['Cormorant_Garamond',serif]"} font-bold`}
                  style={{
                    fontSize: '0.85rem',
                    color: isArtisan ? 'rgba(208,192,176,0.18)' : isTerminal ? 'rgba(184,200,224,0.18)' : 'rgba(206,200,192,0.18)',
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
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-3"
              >
                <p className="text-[12px] leading-relaxed" style={{ color: panel.dim, maxWidth: '200px' }}>
                  {typeof panel.subtitle === 'string' ? panel.subtitle : panel.subtitle[lang]}
                </p>
                <p className={`${isTerminal ? 'font-mono' : ''} text-[9px] tracking-[0.15em] uppercase`}
                  style={{ color: panel.dim, opacity: 0.4 }}>
                  {typeof panel.tag === 'string' ? panel.tag : panel.tag[lang]}
                </p>
                <Magnetic strength={0.2}>
                  <div className="flex items-center gap-2 text-[11px] cursor-pointer" style={{ color: panel.accent }}>
                    <span>{typeof panel.cta === 'string' ? panel.cta : panel.cta[lang]}</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Magnetic>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </div>
  );
}