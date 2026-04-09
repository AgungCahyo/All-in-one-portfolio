'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useActivePanel } from '@/lib/activePanelContext';
import { grainUrl } from '@/data/panels';

type Theme = 'cinema' | 'terminal' | 'artisan';

function getThemeFromPath(path: string): Theme {
  if (path.startsWith('/developer')) return 'terminal';
  if (path.startsWith('/beverage')) return 'artisan';
  return 'cinema';
}

function getThemeFromPanel(panel: string): Theme {
  if (panel === 'developer') return 'terminal';
  if (panel === 'beverage') return 'artisan';
  return 'cinema';
}

export function TextureOverlays() {
  const pathname = usePathname();
  const { activePanel } = useActivePanel();
  const [isMounted, setIsMounted] = useState(false);
  
  const theme = pathname === '/' ? getThemeFromPanel(activePanel) : getThemeFromPath(pathname ?? '/');

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
                animation: 'noise 0.2s steps(2) infinite',
                mixBlendMode: 'soft-light'
              }} 
            />
            
            {/* Camera HUD Decoration - ONLY ON HOME */}
            {pathname === '/' && (
              <div className="absolute inset-8 md:inset-12 pointer-events-none opacity-[0.3]" style={{ mixBlendMode: 'screen' }}>
                <div className="absolute top-4 left-6 flex items-center gap-2 font-mono text-[10px] tracking-widest text-white/70">
                  <motion.div 
                    animate={{ opacity: [1, 0, 1] }} 
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} 
                    className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_rgba(220,38,38,0.8)]" 
                  />
                  REC 4K
                </div>
                <div className="absolute top-4 right-6 font-mono text-[10px] tracking-widest text-white/50">
                  ISO: 800 | 1/50
                </div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-widest text-white/40">
                  00:24:08:12
                </div>
                
                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-white/40" />
                <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-white/40" />
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-white/40" />
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-white/40" />
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
                style={{ color: '#b8c8e0' }}
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

        {/* Artisan: Organic Floating Dust + Sensory labels */}
        {theme === 'artisan' && (
          <motion.div 
            key="artisan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
          >
            {/* Sensory Labels - ONLY ON HOME */}
            {pathname === '/' && (
              <div className="absolute inset-0 overflow-hidden hidden lg:block">
                {['Earthy', 'Botanical', 'Intensity', 'Chemistry'].map((text, i) => (
                  <motion.div
                    key={text}
                    className="absolute font-['Cormorant_Garamond',serif] italic text-[14px] text-amber-100/10"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${40 + (i % 2) * 20}%`,
                    }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    {text}
                  </motion.div>
                ))}
                
                {/* Minimalist Formula Icon (Caffeine-ish) */}
                <motion.div 
                  className="absolute right-20 bottom-20 opacity-[0.05]"
                  style={{ mixBlendMode: 'screen' }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                >
                  <svg width="120" height="120" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M50 20 L80 40 L80 70 L50 90 L20 70 L20 40 Z" />
                    <circle cx="50" cy="20" r="3" />
                    <circle cx="80" cy="40" r="3" />
                    <circle cx="20" cy="70" r="3" />
                    <path d="M50 20 L50 5" />
                    <path d="M80 70 L95 78" />
                  </svg>
                </motion.div>
              </div>
            )}

            <div className="absolute inset-0 opacity-[0.45]">
              {isMounted && [...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2.5 h-2.5 bg-amber-200/50 rounded-full blur-[2px] shadow-[0_0_8px_rgba(252,211,77,0.3)]"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 120 - 60, 0],
                    y: [0, Math.random() * 120 - 60, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 6,
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
