'use client';

import { useState, useEffect, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useActivePanel } from '@/lib/activePanelContext';
import { grainUrl } from '@/data/panels';

type Theme = 'cinema' | 'terminal' | 'leadership';

function getThemeFromPath(path: string): Theme | null {
  if (path.startsWith('/developer')) return 'terminal';
  if (path.startsWith('/leadership'))  return 'leadership';
  if (path.startsWith('/videographer')) return 'cinema';
  if (path === '/about') return null;
  return null;
}

function getThemeFromPanel(panel: string): Theme {
  if (panel === 'developer') return 'terminal';
  if (panel === 'leadership') return 'leadership';
  return 'cinema';
}

export function TextureOverlays() {
  const pathname = usePathname();
  const { activePanel } = useActivePanel();
  const [isMounted, setIsMounted] = useState(false);
  
  const theme = pathname === '/' ? getThemeFromPanel(activePanel) : getThemeFromPath(pathname ?? '/');

  // Pre-generate stable particle positions to avoid hydration mismatch
  const particles = useMemo(() =>
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: ((i * 73 + 17) % 100),
      top: ((i * 47 + 31) % 100),
      animX: ((i * 61 + 13) % 120) - 60,
      animY: ((i * 83 + 29) % 120) - 60,
      duration: 4 + (i * 37 % 60) / 10,
    })),
  []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[80] overflow-hidden">
      <AnimatePresence mode="wait">
        {/* Cinema: Animated Grain + Camera HUD */}
        {theme === 'cinema' && (
          <motion.div 
            key="cinema"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            <div 
              className="absolute inset-[-200%] opacity-[0.12]"
              style={{ 
                backgroundImage: grainUrl, 
                backgroundSize: '250px 250px',
                animation: '0.2s steps(2) infinite',
                mixBlendMode: 'soft-light'
              }} 
            />
            
            {/* Camera HUD Decoration - ONLY ON HOME. Recolored to dark ink
                — this used to assume a near-black cinema panel, but the
                panel now rests in its light "Contact Sheet" palette. */}
            {pathname === '/' && (
              <div className="absolute inset-8 md:inset-12 pointer-events-none opacity-[0.3]">
                <div className="absolute top-4 left-6 flex items-center gap-2 font-mono text-[10px] tracking-widest text-[#241d18]/70">
                  <motion.div 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} 
                    className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]" 
                  />
                  REC 4K
                </div>
                <div className="absolute top-4 right-6 font-mono text-[10px] tracking-widest text-[#241d18]/50">
                  ISO: 800 | 1/50
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-[#241d18]/40">
                  00:24:08:12
                </div>
                
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-[#241d18]/30" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-[#241d18]/30" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-[#241d18]/30" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-[#241d18]/30" />
              </div>
            )}
          </motion.div>
        )}

        {/* Terminal: Scanlines & Grid pulse */}
        {theme === 'terminal' && (
          <motion.div 
            key="terminal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {/* Pulsing Grid */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'linear-gradient(rgba(100,130,200,1) 1px, transparent 1px), linear-gradient(90deg, rgba(100,130,200,1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
              animation: 'grid-pulse 4s ease-in-out infinite'
            }} />
            
            {/* Scanlines */}
            <div className="absolute inset-0 opacity-[0.08]" style={{
              backgroundImage: 'linear-gradient(transparent 50%, rgba(0,0,0,0.5) 50%)',
              backgroundSize: '100% 4px',
              animation: 'scanline 10s linear infinite'
            }} />

            {/* Floating Code Snippet - ONLY ON HOME */}
            {pathname === '/' && (
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 0.15, x: 0 }}
                className="absolute right-[10%] top-[30%] font-mono text-[11px] leading-relaxed hidden lg:block"
                style={{ color: '#3454a4' }}
              >
                <div className="flex items-center gap-1.5 mb-3 opacity-40">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-400/50" />
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
                </div>
                <div className="space-y-1">
                  <p><span className="text-blue-400">async function</span> <span className="text-emerald-400">deploy</span>() {'{'}</p>
                  <p className="pl-4"><span className="text-blue-400">const</span> stats = <span className="text-blue-400">await</span> analyze();</p>
                  <p className="pl-4"><span className="text-amber-400">if</span> (stats.ready) {'{'}</p>
                  <p className="pl-8 text-slate-500">// optimize & push</p>
                  <p className="pl-8"><span className="text-blue-400">return await</span> production.push();</p>
                  <p className="pl-4">{'}'}</p>
                  <p>{'}'}</p>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* Leadership: soft floating dots, warm evergreen/amber */}
        {theme === 'leadership' && (
          <motion.div 
            key="leadership-texture"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {/* Sensory word labels used to sit here too, but they were only
                readable-safe when this panel was near-black — now that it's
                light, they land directly on top of the real hero quote and
                stage list instead of staying decorative. Dropped rather
                than chasing a position that dodges content that can move. */}

            <div className="absolute inset-0 opacity-[0.35]">
              {isMounted && particles.map((p) => (
                <motion.div
                  key={p.id}
                  className={`absolute rounded-full blur-[2px] ${p.id % 3 === 0 ? 'w-2 h-2 bg-[rgba(31,110,82,0.16)] shadow-[0_0_8px_rgba(31,110,82,0.2)]' : 'w-2.5 h-2.5 bg-[rgba(232,162,61,0.18)] shadow-[0_0_8px_rgba(232,162,61,0.22)]'}`}
                  style={{
                    left: `${p.left}%`,
                    top: `${p.top}%`,
                  }}
                  animate={{
                    x: [0, p.animX, 0],
                    y: [0, p.animY, 0],
                    opacity: [0.2, 0.7, 0.2],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: p.duration,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}