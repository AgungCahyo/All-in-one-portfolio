'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const disciplines = [
  {
    id: 'videographer',
    href: '/videographer',
    label: '01',
    title: 'Videographer\n& Editor',
    subtitle: 'Cinematic storytelling through motion and light',
    cta: 'View Visual Work',
    accent: '#e8e0d4',
    bg: 'from-stone-950 via-stone-900 to-zinc-950',
    border: 'border-stone-700',
    tag: 'Corporate · Documentary · Cinematic',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1"/>
        <path d="M15 13l14 7-14 7V13z" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: 'developer',
    href: '/developer',
    label: '02',
    title: 'Full-Stack\nDeveloper',
    subtitle: 'Building robust applications and AI-powered tools',
    cta: 'View Engineering Work',
    accent: '#c8d4e8',
    bg: 'from-slate-950 via-blue-950 to-slate-950',
    border: 'border-blue-900',
    tag: 'React · Next.js · TypeScript · AI',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <rect x="4" y="8" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="1"/>
        <path d="M13 17l-5 3 5 3M27 17l5 3-5 3M22 14l-4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'beverage',
    href: '/beverage',
    label: '03',
    title: 'Beverage\nCrafter',
    subtitle: 'Precision mixology and menu engineering',
    cta: 'View Craft Work',
    accent: '#e8d4c8',
    bg: 'from-amber-950 via-stone-950 to-amber-950',
    border: 'border-amber-900',
    tag: 'Mocktails · Menu Design · Flavor Profiling',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
        <path d="M12 8h16l-4 16H16L12 8z" stroke="currentColor" strokeWidth="1"/>
        <path d="M16 24c0 4 2 8 4 8s4-4 4-8" stroke="currentColor" strokeWidth="1"/>
        <path d="M10 8h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-['Cormorant_Garamond',serif] overflow-hidden">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 px-8 py-6 flex justify-between items-center"
      >
        <span className="text-sm tracking-[0.3em] text-neutral-400 font-['DM_Sans',sans-serif] uppercase">
          Agung Cahyo Prasetyo
        </span>
        <nav className="flex gap-8">
          {disciplines.map(d => (
            <Link
              key={d.id}
              href={d.href}
              className="text-xs tracking-[0.2em] text-neutral-500 hover:text-white transition-colors font-['DM_Sans',sans-serif] uppercase"
            >
              {d.id}
            </Link>
          ))}
        </nav>
      </motion.header>

      {/* Hero Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center pointer-events-none">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.08 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="text-[12vw] font-bold tracking-tighter text-white whitespace-nowrap select-none"
        >
          CODE · CINEMA · CRAFT
        </motion.p>
      </div>

      {/* Three Panels */}
      <div className="flex flex-col lg:flex-row h-screen pt-20">
        {disciplines.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: i * 0.15 }}
            className="relative flex-1 group cursor-pointer overflow-hidden"
          >
            <Link href={d.href} className="block h-full">
              {/* Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${d.bg} transition-all duration-700 group-hover:scale-105`} />

              {/* Grain overlay */}
              <div className="absolute inset-0 opacity-30 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  backgroundSize: '150px',
                }}
              />

              {/* Divider line */}
              {i < 2 && (
                <div className={`absolute right-0 top-[15%] bottom-[15%] w-px bg-gradient-to-b from-transparent via-white/20 to-transparent hidden lg:block`} />
              )}

              {/* Content */}
              <div className="relative h-full flex flex-col justify-between p-8 lg:p-12">
                {/* Top: number + icon */}
                <div className="flex justify-between items-start">
                  <span
                    className="text-xs tracking-[0.3em] font-['DM_Sans',sans-serif]"
                    style={{ color: d.accent, opacity: 0.6 }}
                  >
                    {d.label}
                  </span>
                  <span style={{ color: d.accent, opacity: 0.4 }}>
                    {d.icon}
                  </span>
                </div>

                {/* Middle: Main title */}
                <div className="flex-1 flex items-center">
                  <h2
                    className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] whitespace-pre-line transition-transform duration-500 group-hover:translate-y-[-4px]"
                    style={{ color: d.accent }}
                  >
                    {d.title}
                  </h2>
                </div>

                {/* Bottom: subtitle + tag + cta */}
                <div className="space-y-4">
                  <p
                    className="text-sm font-['DM_Sans',sans-serif] leading-relaxed max-w-xs"
                    style={{ color: d.accent, opacity: 0.6 }}
                  >
                    {d.subtitle}
                  </p>
                  <p
                    className="text-xs tracking-[0.2em] font-['DM_Sans',sans-serif] uppercase"
                    style={{ color: d.accent, opacity: 0.35 }}
                  >
                    {d.tag}
                  </p>

                  {/* CTA */}
                  <div
                    className="inline-flex items-center gap-3 text-sm font-['DM_Sans',sans-serif] tracking-wide opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0"
                    style={{ color: d.accent }}
                  >
                    <span>{d.cta}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Bottom strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="fixed bottom-0 left-0 right-0 px-8 py-4 flex justify-between items-center border-t border-white/5"
      >
        <span className="text-xs text-neutral-600 font-['DM_Sans',sans-serif] tracking-widest uppercase">
          Jakarta, Indonesia
        </span>
        <span className="text-xs text-neutral-600 font-['DM_Sans',sans-serif] tracking-widest uppercase">
          Open for collaboration
        </span>
      </motion.div>
    </main>
  );
}
