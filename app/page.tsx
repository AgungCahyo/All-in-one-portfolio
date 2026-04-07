'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';

/* ─── Panel definitions ─────────────────────────────────────── */
const panels = [
  {
    id: 'videographer',
    href: '/videographer',
    num: '01',
    title: 'Videographer\n& Editor',
    titleShort: 'Video',
    subtitle: 'Cinematic storytelling — corporate, documentary & brand films',
    tag: '4K · Premiere Pro · DaVinci Resolve',
    cta: 'View Visual Work',
    accent: '#cec8c0',
    dim: '#6b6560',
    bg: '#0d0c0b',
    photo: '/hero.png',
    photoFlip: true,
    photoFilter: 'grayscale(40%)',
    theme: 'cinema' as const,
  },
  {
    id: 'developer',
    href: '/developer',
    num: '02',
    title: 'Full-Stack\nDeveloper',
    titleShort: 'Dev',
    subtitle: '3+ years shipping production apps — SaaS, AI & mobile',
    tag: 'Next.js · TypeScript · AI · 84 tests',
    cta: 'View Engineering Work',
    accent: '#b8c8e0',
    dim: '#5a6880',
    bg: '#0a0d12',
    photo: '/profile.png',
    photoFlip: false,
    photoFilter: 'grayscale(30%) sepia(60%) hue-rotate(180deg)',
    theme: 'terminal' as const,
  },
  {
    id: 'beverage',
    href: '/beverage',
    num: '03',
    title: 'Beverage\nCrafter',
    titleShort: 'Bev',
    subtitle: '5+ years crafting drinks — taste, aroma & precision in every pour',
    tag: 'Mocktails · Cold Infusion · Menu Engineering',
    cta: 'View Craft Work',
    accent: '#d0c0b0',
    dim: '#7a6458',
    bg: '#100c08',
    photo: '/profile.png',
    photoFlip: false,
    photoFilter: 'grayscale(20%) sepia(60%) hue-rotate(330deg) brightness(0.8)',
    theme: 'artisan' as const,
  },
];

const ROTATE_INTERVAL = 5000;

const grainUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;
const paperUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.04'/%3E%3C/svg%3E")`;

/* ─── Progress bar ──────────────────────────────────────────── */
function ProgressBar({ active, duration }: { active: boolean; duration: number }) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] z-30" style={{ background: 'rgba(255,255,255,0.05)' }}>
      {active && (
        <motion.div
          key={Date.now()} // re-mount on each activation
          className="h-full"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: duration / 1000, ease: 'linear' }}
          style={{ background: 'rgba(255,255,255,0.25)' }}
        />
      )}
    </div>
  );
}

/* ─── Individual panel ──────────────────────────────────────── */
function Panel({
  panel,
  isActive,
  onActivate,
}: {
  panel: typeof panels[0];
  isActive: boolean;
  onActivate: () => void;
}) {
  const isCinema = panel.theme === 'cinema';
  const isTerminal = panel.theme === 'terminal';
  const isArtisan = panel.theme === 'artisan';

  // Compute gradient overlay per theme
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
      style={{
        flex: isActive ? '5' : '1',
        transition: 'flex 700ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
      onMouseEnter={onActivate}
    >
      {/* ── Base bg ── */}
      <div className="absolute inset-0" style={{ background: panel.bg }} />

      {/* ── Photo background ── */}
      <div className="absolute inset-0">
        <Image
          src={panel.photo}
          alt="Agung Cahyo Prasetyo"
          fill
          className="object-cover object-[50%_20%]"
          style={{
            filter: `${panel.photoFilter} brightness(${isActive ? 0.38 : 0.15})`,
            transform: panel.photoFlip ? 'scaleX(-1)' : 'none',
            transition: 'filter 700ms ease, transform 700ms ease',
            objectPosition: '50% 20%',
          }}
          priority
        />
        {/* directional gradient for text legibility */}
        <div className="absolute inset-0" style={{ background: gradientOverlay }} />
        <div className="absolute inset-0" style={{ background: bottomGradient }} />
      </div>

      {/* ── Texture overlays ── */}
      {isCinema && (
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{ backgroundImage: grainUrl, backgroundSize: '200px 200px' }} />
      )}
      {isTerminal && (
        <>
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'linear-gradient(rgba(100,130,200,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100,130,200,0.04) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            opacity: isActive ? 1 : 0.3,
            transition: 'opacity 700ms',
          }} />
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',
            opacity: 0.4,
          }} />
          {/* Floating code snippet overlay */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute right-6 top-1/2 pointer-events-none select-none"
                style={{ transform: 'translateY(-42%)', fontFamily: "'Courier New', monospace", fontSize: '11px', lineHeight: '1.9', letterSpacing: '0.02em' }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div style={{ color: 'rgba(100,130,200,0.12)' }}>
                    <span style={{ color: 'rgba(80,180,120,0.18)' }}>async</span>{' '}
                    <span style={{ color: 'rgba(180,200,240,0.18)' }}>function</span>{' '}
                    <span style={{ color: 'rgba(255,210,100,0.18)' }}>buildPortfolio</span>
                    <span style={{ color: 'rgba(180,200,240,0.15)' }}>()</span>{' {'}
                  </div>
                  <div style={{ color: 'rgba(100,130,200,0.1)' }}>&nbsp;&nbsp;
                    <span style={{ color: 'rgba(80,180,120,0.15)' }}>const</span>{' '}
                    <span style={{ color: 'rgba(180,220,255,0.15)' }}>skills</span>{' = ['}
                  </div>
                  <div style={{ color: 'rgba(255,180,80,0.12)' }}>&nbsp;&nbsp;&nbsp;&nbsp;'React', 'Next.js',</div>
                  <div style={{ color: 'rgba(255,180,80,0.12)' }}>&nbsp;&nbsp;&nbsp;&nbsp;'TypeScript', 'AI',</div>
                  <div style={{ color: 'rgba(100,130,200,0.1)' }}>&nbsp;&nbsp;];</div>
                  <div style={{ color: 'rgba(100,130,200,0.1)' }}>&nbsp;&nbsp;
                    <span style={{ color: 'rgba(80,180,120,0.15)' }}>return</span>{' '}
                    <span style={{ color: 'rgba(180,220,255,0.12)' }}>await</span>{' deploy(skills);'}
                  </div>
                  <div style={{ color: 'rgba(100,130,200,0.12)' }}>{'}'}</div>
                  <div style={{ color: 'rgba(100,130,200,0.07)', marginTop: '12px' }}>
                    <span style={{ color: 'rgba(120,180,255,0.1)' }}>// 84 tests</span>{' '}
                    <span style={{ color: 'rgba(80,180,120,0.1)' }}>✓ passing</span>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
      {isArtisan && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: paperUrl, backgroundSize: '300px 300px', opacity: isActive ? 0.5 : 0.2, transition: 'opacity 700ms' }} />
      )}

      {/* ── Cinema letterbox bars ── */}
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

      {/* ── Divider right edge ── */}
      <div className="absolute right-0 top-0 bottom-0 w-px hidden lg:block z-20"
        style={{ background: 'rgba(255,255,255,0.04)' }} />

      {/* ── Progress bar ── */}
      <ProgressBar active={isActive} duration={ROTATE_INTERVAL} />

      {/* ── Clickable content area ── */}
      <Link
        href={panel.href}
        onClick={e => { if (!isActive) e.preventDefault(); }}
        className="block h-full"
      >
        <div
          className="relative z-10 h-full flex flex-col justify-between"
          style={{
            paddingTop: isCinema && isActive ? '52px' : isActive ? '48px' : '48px',
            paddingBottom: isCinema && isActive ? '52px' : isActive ? '48px' : '48px',
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
            {/* ACTIVE state */}
            <AnimatePresence mode="wait">
              {isActive ? (
                <motion.div
                  key="active"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {isCinema && (
                    <h2 className="font-['Cormorant_Garamond',serif] font-bold leading-[0.88] whitespace-pre-line"
                      style={{ fontSize: 'clamp(2.2rem, 3.8vw, 4.2rem)', color: panel.accent, letterSpacing: '-0.02em' }}>
                      {panel.title}
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
                        <span style={{ color: '#1a2535' }}>Developer</span>
                      </h2>
                    </div>
                  )}
                  {isArtisan && (
                    <div>
                      <div className="mb-2" style={{ color: 'rgba(180,130,80,0.25)', fontSize: '28px', lineHeight: 1 }}>⚗</div>
                      <h2 className="font-['Cormorant_Garamond',serif] font-bold leading-[0.88] whitespace-pre-line"
                        style={{ fontSize: 'clamp(2.2rem, 3.5vw, 3.8rem)', color: panel.accent, letterSpacing: '-0.02em' }}>
                        Beverage{'\n'}
                        <em style={{ fontStyle: 'italic', color: 'rgba(208,192,176,0.2)' }}>Crafter</em>
                      </h2>
                    </div>
                  )}
                </motion.div>
              ) : (
                /* COLLAPSED state — vertical label */
                <motion.h2
                  key="collapsed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
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
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 4 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="space-y-3"
              >
                <p className="text-[12px] leading-relaxed" style={{ color: panel.dim, maxWidth: '200px' }}>
                  {panel.subtitle}
                </p>
                <p className={`${isTerminal ? 'font-mono' : ''} text-[9px] tracking-[0.15em] uppercase`}
                  style={{ color: panel.dim, opacity: 0.4 }}>
                  {panel.tag}
                </p>
                <div className="flex items-center gap-2 text-[11px]" style={{ color: panel.accent }}>
                  <span>{panel.cta}</span>
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

/* ─── Home page ─────────────────────────────────────────────── */
export default function Home() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive(prev => (prev + 1) % panels.length);
  }, []);

  // Reset timer whenever active changes or pause state changes
  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, ROTATE_INTERVAL);
    return () => clearInterval(id);
  }, [paused, next, active]);

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
        <nav className="flex gap-8">
          {panels.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleActivate(i)}
              className="text-[10px] tracking-[0.2em] uppercase transition-colors duration-300"
              style={{ color: active === i ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)' }}
            >
              {p.id}
            </button>
          ))}
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
          CODE · CINEMA · CRAFT
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
          Open for collaboration
        </span>
      </div>

    </main>
  );
}
