'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Magnetic } from '@/components/ui/Magnetic';
import { SkillBars } from '@/components/ui/SkillBars';
import { JourneyTimeline } from '@/components/ui/JourneyTimeline';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { projects, techStack, devJourney, devSkills, heroStats, statusColors } from '@/data/developer';
import { useLanguage } from '@/lib/languageContext';
import { useActivePanel } from '@/lib/activePanelContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useEffect } from 'react';

export default function DeveloperPage() {
  const { lang, t } = useLanguage();
  const { setActivePanel } = useActivePanel();

  useEffect(() => {
    setActivePanel('developer');
  }, [setActivePanel]);

  return (
    <main className="min-h-screen text-slate-100 font-['DM_Sans',sans-serif]" style={{ background: '#090c10' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center"
        style={{ background: 'rgba(9,12,16,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <Magnetic strength={0.3}>
          <Link href="/" className="flex items-center gap-3 group">
            <svg className="w-3.5 h-3.5" style={{ color: '#2a3040' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: '#2a3040' }}>{t('Portfolio', 'Portofolio')}</span>
          </Link>
        </Magnetic>
        <div className="flex items-center gap-7">
          <Magnetic strength={0.2}><Link href="/videographer" className="text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: '#2a3040' }}>{t('Videographer', 'Videografer')}</Link></Magnetic>
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: '#8a9ab8' }}>{t('Developer', 'Developer')}</span>
          <Magnetic strength={0.2}><Link href="/beverage" className="text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: '#2a3040' }}>{t('Beverage', 'Peracik')}</Link></Magnetic>
          <div className="w-px h-3 bg-slate-900/10 ml-2" />
          <LanguageSwitcher />
        </div>
      </nav>

      {/* Hero — Terminal / Code Aesthetic */}
      <section className="relative overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="absolute inset-0" style={{
          background: '#090c10',
          backgroundImage: 'linear-gradient(rgba(100,130,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,130,200,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute" style={{ top: '-80px', left: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(100,130,200,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
          opacity: 0.4
        }} />

        <div className="relative max-w-6xl mx-auto px-8 lg:px-16" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-end">

            {/* Text side */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
              className="flex-1 order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-8 font-mono" style={{ fontSize: '12px', color: '#3a4860' }}>
                <span style={{ color: '#34d399' }}>▶</span>
                <span style={{ color: '#5a7a50' }}>~/portfolio</span>
                <span style={{ color: '#3a4860' }}>$</span>
                <span style={{ color: '#6a8ab0' }}>whoami</span>
              </div>
              <h1 className="font-bold leading-[0.90] tracking-tight mb-4"
                style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: '#b8c8e0', letterSpacing: '-0.02em' }}>
                Full-Stack<span style={{ color: '#2a3a54' }}>();</span><br />
                <span style={{ color: '#1e2c40' }}>Developer</span>
              </h1>
              <div className="flex items-center gap-2 mb-8 font-mono" style={{ fontSize: '13px', color: '#3a5070' }}>
                <span style={{ color: '#6a9ab8' }}>{t('Building robust, AI-integrated web apps', 'Membangun aplikasi web kuat berbasis AI')}</span>
                <span style={{ display: 'inline-block', width: '8px', height: '14px', background: '#4a7a9b', verticalAlign: 'middle', marginLeft: '2px', animation: 'blink 1.2s step-end infinite' }} />
              </div>
              <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
              <p className="text-[14px] leading-relaxed max-w-sm" style={{ color: '#3a5070', fontFamily: "'DM Sans', sans-serif" }}>
                {t('Production-quality code with an eye for design — because good software is both functional and beautiful.', 'Kode kualitas produksi dengan sentuhan desain — karena perangkat lunak yang baik harus fungsional sekaligus indah.')}
              </p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-wrap gap-4 mt-10">
                {heroStats.map((s) => (
                  <div key={s.key} className="px-4 py-2.5" style={{
                    border: '1px solid rgba(100,130,200,0.1)', background: 'rgba(100,130,200,0.04)',
                    borderRadius: '4px', fontFamily: "'Courier New', monospace"
                  }}>
                    <div className="text-lg font-bold" style={{ color: '#b8c8e0' }}>{s.n}</div>
                    <div className="text-[9px] tracking-[0.2em] uppercase mt-0.5" style={{ color: '#2a3848' }}>
                      {typeof s.l === 'string' ? s.l : s.l[lang]}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo side */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="relative flex-shrink-0 w-full lg:w-[280px] h-[300px] lg:h-[380px] order-1 lg:order-2">
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3"
                style={{ height: '28px', background: 'rgba(16,24,36,0.95)', borderRadius: '4px 4px 0 0', border: '1px solid rgba(100,130,200,0.12)', borderBottom: 'none' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                <span className="ml-auto font-mono text-[9px]" style={{ color: '#2a3848' }}>profile.png</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ top: '28px', border: '1px solid rgba(100,130,200,0.12)', borderRadius: '0 0 4px 4px', borderTop: 'none' }}>
                <Image src="/profile.png" alt="Agung Cahyo Prasetyo" fill className="object-cover object-[50%_25%]"
                  style={{ filter: 'grayscale(20%) brightness(0.8)' }} priority />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, #090c10 100%)' }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#2a3040" isMono>Tech Stack</SectionLabel>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category}>
                <p className="text-[10px] uppercase tracking-widest mb-4 font-medium" style={{ color: '#2a3040' }}>{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-lg text-[12px] transition-colors"
                      style={{ border: '1px solid rgba(255,255,255,0.05)', color: '#6a7a90', background: 'rgba(255,255,255,0.01)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engineering Journey Timeline */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(100,130,200,0.07)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <SectionLabel color="#2a3040" isMono className="mb-0">{t('Engineering Journey', 'Perjalanan Engineering')}</SectionLabel>
            <p className="font-mono text-[10px]" style={{ color: '#1a2535' }}>// 2022 — {t('present', 'sekarang')}</p>
          </div>
          <JourneyTimeline
            items={devJourney}
            lineColor="linear-gradient(to bottom, transparent, rgba(100,130,200,0.12) 10%, rgba(100,130,200,0.12) 90%, transparent)"
            dotColor="rgba(100,130,200,0.3)"
            dotGlowColor="rgba(100,130,200,0.06)"
            yearColor="rgba(100,130,200,0.4)"
            phaseColor="#1a2535"
            titleColor="#b8c8e0"
            bodyColor="#3a4860"
            dividerColor="rgba(100,130,200,0.05)"
            isMono
            yearWidth="80px"
          />
        </div>
      </section>

      {/* Skill Proficiency */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(100,130,200,0.06)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#2a3040" isMono>{t('Proficiency', 'Kemahiran')}</SectionLabel>
          <SkillBars
            skills={devSkills}
            barColor="linear-gradient(to right, rgba(100,130,200,0.3), rgba(140,180,240,0.55))"
            barBg="rgba(100,130,200,0.07)"
            nameColor="#7a9ab8"
            descColor="#1a2535"
            percentColor="rgba(100,130,200,0.3)"
            isMono
            showCat
          />
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 lg:px-16 py-14">
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#2a3040">{t('Projects', 'Proyek')}</SectionLabel>
          <div className="space-y-5">
            {projects.map((p, i) => {
              const sc = statusColors[p.status] || statusColors['Shipped'];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="rounded-xl p-7 lg:p-9 transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.05)', background: '#0d1018' }}>
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: '#2a3040' }}>
                          {typeof p.type === 'string' ? p.type : p.type[lang]}
                        </span>
                        <span className="text-[11px]" style={{ color: '#1a2030' }}>{p.year}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                          style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
                          {p.status}
                        </span>
                      </div>
                      <h3 className="font-['Cormorant_Garamond',serif] text-2xl lg:text-3xl font-bold" style={{ color: '#b8c8e0' }}>{p.title}</h3>
                      <p className="text-[13px] mt-1" style={{ color: '#3a4860' }}>
                        {typeof p.subtitle === 'string' ? p.subtitle : p.subtitle[lang]}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {p.links.map((l, li) => (
                        <a key={li} href={l.href} target="_blank" rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full text-[12px] transition-all"
                          style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#6a7a90' }}>
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="text-[14px] leading-relaxed mb-5 max-w-3xl" style={{ color: '#3a4860' }}>
                    {typeof p.description === 'string' ? p.description : p.description[lang]}
                  </p>
                  <div className="flex flex-wrap gap-5 mb-5">
                    {p.highlights.map((h, hi) => (
                      <div key={hi} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full" style={{ background: '#3a5080' }} />
                        <span className="text-[12px]" style={{ color: '#4a5870' }}>
                          {typeof h === 'string' ? h : h[lang]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    {p.tags.map((t) => (
                      <span key={t} className="px-2.5 py-0.5 text-[11px] rounded-full"
                        style={{ border: '1px solid rgba(255,255,255,0.04)', color: '#2a3848' }}>{t}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-16 py-20" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#b8c8e0' }}>{t('Need a developer?', 'Butuh developer?')}</h2>
            <p className="text-[14px]" style={{ color: '#2a3040' }}>{t("Let's build something robust and elegant.", "Mari bangun sesuatu yang kuat dan elegan.")}</p>
          </div>
          <div className="flex gap-3">
            <Magnetic strength={0.2}>
              <a href="https://github.com/agungcahyo" target="_blank" rel="noopener noreferrer"
                className="px-5 py-3 rounded-full text-[13px] transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#4a5870' }}>GitHub</a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a href="mailto:cahyoprasetyo507@gmail.com"
                className="px-7 py-3 font-medium rounded-full text-[13px] tracking-wide transition-all hover:opacity-90"
                style={{ background: '#b8c8e0', color: '#090c10' }}>{t('Hire Me as Developer', 'Rekrut Saya sebagai Developer')}</a>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <div className="px-8 py-5 flex justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <Link href="/videographer" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#1e2535' }}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {t('Prev', 'Seb')}: {t('Videographer', 'Videografer')}
        </Link>
        <span className="text-[11px] font-medium" style={{ color: '#1e2535' }}>02 / {t('Developer', 'Developer')}</span>
        <Link href="/beverage" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#1e2535' }}>
          {t('Next', 'Sel')}: {t('Beverage', 'Peracik')}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}