'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { SkillBars } from '@/components/ui/SkillBars';
import { JourneyTimeline } from '@/components/ui/JourneyTimeline';
import { SectionLabel } from '@/components/ui/SectionLabel';
import dynamic from 'next/dynamic';
const SkillsUniverse = dynamic(
  () => import('@/components/ui/SkillsUniverse').then((mod) => mod.SkillsUniverse),
  { 
    ssr: false,
    loading: () => (
      <div className="w-full aspect-square flex items-center justify-center font-mono text-[10px]" style={{ color: '#8a95ab', border: '1px solid rgba(52,84,164,0.14)', borderRadius: '50%' }}>
        [INITIALIZING_UNIVERSE...]
      </div>
    )
  }
);
import { projects, techStack, devJourney, devSkills, heroStats, statusColors, quickOverview, teamCollaboration, engineeringJudgement } from '@/data/developer';
import { useLanguage } from '@/lib/languageContext';
import { useActivePanel } from '@/lib/activePanelContext';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { LayoutHeader } from '@/components/ui/LayoutHeader';
import { useEffect } from 'react';

// ── Blueprint / Workbench palette ──
// Precise and systematic, but light and approachable instead of the old
// near-black terminal theme. Distinct from leadership's warm-paper identity.
const PAPER = '#f5f7fa';
const SURFACE = '#ffffff';
const INK = '#1c2333';
const INK_SOFT = '#5a6478';
const INK_FAINT = '#8a95ab';
const INDIGO = '#3454a4';
const INDIGO_SOFT = 'rgba(52,84,164,0.08)';
const MINT = '#3fae74';
const BORDER = '#dbe2ec';

export default function DeveloperPage() {
  const { lang, t } = useLanguage();
  const { setActivePanel } = useActivePanel();

  useEffect(() => {
    setActivePanel('developer');
  }, [setActivePanel]);

  return (
    <main className="min-h-screen font-body" style={{ background: PAPER, color: INK }}>

      <LayoutHeader activeRole="developer" theme="blueprint" />

      {/* Hero — Blueprint / Workbench */}
      <section className="relative overflow-hidden" style={{ borderBottom: `1px solid ${BORDER}` }}>
        <div className="absolute inset-0" style={{
          background: PAPER,
          backgroundImage: 'linear-gradient(rgba(52,84,164,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(52,84,164,0.07) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute" style={{ top: '-80px', left: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(63,174,116,0.14) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="relative max-w-6xl mx-auto px-8 lg:px-16" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-end">

            {/* Text side */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}
              className="flex-1 order-2 lg:order-1">
              <div className="flex items-center gap-2 mb-8 font-mono" style={{ fontSize: '12px', color: INK_FAINT }}>
                <span style={{ color: MINT }}>▶</span>
                <span style={{ color: INK_SOFT }}>~/portfolio</span>
                <span style={{ color: INK_FAINT }}>$</span>
                <span style={{ color: INDIGO }}>whoami</span>
              </div>
              <h1 className="font-tech font-bold leading-[0.90] tracking-tight mb-4"
                style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: INK, letterSpacing: '-0.02em' }}>
                Full-Stack<span style={{ color: INDIGO }}>();</span><br />
                <span style={{ color: INK_FAINT }}>Developer</span>
              </h1>
              <div className="flex items-center gap-2 mb-8 font-mono" style={{ fontSize: '13px', color: INK_SOFT }}>
                <span style={{ color: INDIGO }}>{t('Building robust, AI-integrated web apps', 'Ngebuild web apps yang robust dan AI-ready')}</span>
                <span style={{ display: 'inline-block', width: '8px', height: '14px', background: MINT, verticalAlign: 'middle', marginLeft: '2px', animation: 'blink 1.2s step-end infinite' }} />
              </div>
              <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
              <p className="text-[14px] leading-relaxed max-w-sm font-body" style={{ color: INK_SOFT }}>
                {t('Production-quality code with an eye for design — because good software is both functional and beautiful.', 'Production-grade code with strong design sense - karena software yang bagus itu harus fungsional sekaligus enak dilihat.')}
              </p>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-wrap gap-4 mt-10">
                {heroStats.map((s) => (
                  <div key={s.key} className="px-4 py-2.5 rounded-lg" style={{
                    border: `1px solid ${BORDER}`, background: SURFACE, fontFamily: 'monospace'
                  }}>
                    <div className="text-lg font-bold" style={{ color: INK }}>{s.n}</div>
                    <div className="text-[9px] tracking-[0.2em] uppercase mt-0.5" style={{ color: INK_FAINT }}>
                      {typeof s.l === 'string' ? s.l : s.l[lang]}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo side — still a "code editor window", just in light mode */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="relative shrink-0 w-full lg:w-[280px] h-[300px] lg:h-[380px] order-1 lg:order-2">
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3"
                style={{ height: '28px', background: SURFACE, borderRadius: '10px 10px 0 0', border: `1px solid ${BORDER}`, borderBottom: 'none' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                <span className="ml-auto font-mono text-[9px]" style={{ color: INK_FAINT }}>profile.png</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ top: '28px', border: `1px solid ${BORDER}`, borderRadius: '0 0 10px 10px', borderTop: 'none' }}>
                <Image src="/profile.png" alt="Agung Cahyo Prasetyo" fill className="object-cover object-[50%_25%]"
                  style={{ filter: 'grayscale(8%) sepia(4%) hue-rotate(170deg) saturate(1.05) brightness(1.02)' }} priority />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, transparent 55%, ${PAPER} 100%)`, opacity: 0.5 }} />
              </div>
              {/* rotated blueprint stamp, matches leadership's sticker language in a technical voice */}
              <div
                className="absolute -bottom-3 -right-3 px-3 py-1 rounded-md text-[10px] font-mono font-semibold z-10"
                style={{ background: INK, color: '#eef2f8', transform: 'rotate(-3deg)', boxShadow: '0 8px 16px -8px rgba(28,35,51,0.4)' }}
              >
                rev. {new Date().getFullYear()}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="px-8 lg:px-16 py-12" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel color={INK_FAINT} isMono>{t('Quick Overview (30 sec)', 'Quick Overview (30 detik)')}</SectionLabel>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickOverview.map((item) => (
              <div key={item.label.en} className="dev-card rounded-lg p-4" style={{ border: `1px solid ${BORDER}` }}>
                <p className="relative text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: INDIGO }}>
                  {item.label[lang]}
                </p>
                <p className="relative text-[13px] leading-relaxed" style={{ color: INK_SOFT }}>
                  {item.value[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration & Engineering Judgement */}
      <section className="px-8 lg:px-16 py-12" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          <div>
            <SectionLabel color={INK_FAINT} isMono>{t('Team Collaboration', 'Kolaborasi Tim')}</SectionLabel>
            <div className="space-y-4">
              {teamCollaboration.map((item) => (
                <div key={item.title.en} className="dev-card p-5 rounded-lg" style={{ border: `1px solid ${BORDER}` }}>
                  <h4 className="relative font-medium mb-2" style={{ color: INK }}>{item.title[lang]}</h4>
                  <p className="relative text-[13px] leading-relaxed" style={{ color: INK_SOFT }}>{item.body[lang]}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionLabel color={INK_FAINT} isMono>{t('Engineering Judgement', 'Engineering Judgement')}</SectionLabel>
            <div className="space-y-4">
              {engineeringJudgement.map((item) => (
                <div key={item.title.en} className="dev-card p-5 rounded-lg" style={{ border: `1px solid ${BORDER}` }}>
                  <h4 className="relative font-medium mb-2" style={{ color: INK }}>{item.title[lang]}</h4>
                  <p className="relative text-[13px] leading-relaxed" style={{ color: INK_SOFT }}>{item.body[lang]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel color={INK_FAINT} isMono>{t('Tech Stack Universe', 'Tech Stack Universe')}</SectionLabel>
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <SkillsUniverse />
            </div>
            <div className="lg:col-span-4 space-y-4">
              <div className="dev-card p-4 rounded-lg" style={{ border: `1px solid ${BORDER}` }}>
                <p className="relative font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: INDIGO }}>
                  {t('How to read', 'Cara baca')}
                </p>
                <p className="relative text-[13px] leading-relaxed" style={{ color: INK_SOFT }}>
                  {t(
                    'Drag the globe to inspect stack depth. Click any node to open short experience notes.',
                    'Drag globe untuk lihat kedalaman stack. Klik node untuk buka ringkasan pengalaman singkat.'
                  )}
                </p>
              </div>
              {Object.entries(techStack).map(([category, items]) => (
                <div key={category} className="dev-card p-4 rounded-lg" style={{ border: `1px solid ${BORDER}` }}>
                  <div className="relative flex items-center justify-between mb-3">
                    <p className="text-[10px] uppercase tracking-widest font-medium" style={{ color: INK_FAINT }}>{category}</p>
                    <span className="font-mono text-[10px]" style={{ color: INDIGO }}>{items.length}</span>
                  </div>
                  <div className="relative flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span key={item} className="px-2.5 py-1 rounded-md text-[11px]"
                        style={{ border: `1px solid ${BORDER}`, color: INK_SOFT, background: PAPER }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Journey Timeline */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <SectionLabel color={INK_FAINT} isMono className="mb-0">{t('Engineering Journey', 'Perjalanan Engineering')}</SectionLabel>
            <p className="font-mono text-[10px]" style={{ color: INK_FAINT }}>// 2022 — {t('present', 'sekarang')}</p>
          </div>
          <JourneyTimeline
            items={devJourney}
            lineColor={`linear-gradient(to bottom, transparent, ${BORDER} 10%, ${BORDER} 90%, transparent)`}
            dotColor={INDIGO}
            dotGlowColor="rgba(52,84,164,0.12)"
            yearColor={INDIGO}
            phaseColor={INK_FAINT}
            titleColor={INK}
            bodyColor={INK_SOFT}
            dividerColor={BORDER}
            isMono
            yearWidth="80px"
          />
        </div>
      </section>

      {/* Skill Proficiency */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel color={INK_FAINT} isMono>{t('Proficiency', 'Kemahiran')}</SectionLabel>
          <SkillBars
            skills={devSkills}
            barColor={`linear-gradient(to right, ${INDIGO}, ${MINT})`}
            barBg="rgba(52,84,164,0.08)"
            nameColor={INK}
            descColor={INK_FAINT}
            percentColor={INDIGO}
            isMono
            showCat
          />
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 lg:px-16 py-14">
        <div className="max-w-6xl mx-auto">
          <SectionLabel color={INK_FAINT}>{t('Projects', 'Proyek')}</SectionLabel>
          <div className="space-y-6">
            {projects.map((p, i) => {
              const sc = statusColors[p.status] || statusColors['Shipped'];
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="dev-card rounded-2xl p-7 lg:p-9 mt-3"
                  style={{ border: `1px solid ${BORDER}` }}>
                  <span className="dev-corner-tag" style={{ background: INDIGO, color: '#eef2f8' }}>
                    {typeof p.type === 'string' ? p.type : p.type[lang]}
                  </span>
                  <div className="relative flex flex-wrap justify-between items-start gap-4 mb-5 mt-2">
                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="text-[11px]" style={{ color: INK_FAINT }}>{p.year}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                          style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
                          {p.status}
                        </span>
                      </div>
                      <h3 className="font-tech text-2xl lg:text-3xl font-bold" style={{ color: INK }}>{p.title}</h3>
                      <p className="text-[13px] mt-1" style={{ color: INK_SOFT }}>
                        {typeof p.subtitle === 'string' ? p.subtitle : p.subtitle[lang]}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {p.links.map((l, li) => (
                        <a key={li} href={l.href} target="_blank" rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full text-[12px] transition-all"
                          style={{ border: `1px solid ${BORDER}`, color: INK_SOFT }}>
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>
                  <p className="relative text-[14px] leading-relaxed mb-5 max-w-3xl" style={{ color: INK_SOFT }}>
                    {typeof p.description === 'string' ? p.description : p.description[lang]}
                  </p>
                  <div className="relative flex flex-wrap gap-5 mb-5">
                    {p.highlights.map((h, hi) => (
                      <div key={hi} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full" style={{ background: MINT }} />
                        <span className="text-[12px]" style={{ color: INK_SOFT }}>
                          {typeof h === 'string' ? h : h[lang]}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="relative flex flex-wrap gap-2 pt-5" style={{ borderTop: `1px solid ${BORDER}` }}>
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 text-[11px] rounded-full"
                        style={{ border: `1px solid ${BORDER}`, color: INK_FAINT }}>{tag}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-16 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[16px_32px_16px_32px]"
            style={{ background: 'rgba(63,174,116,0.14)', transform: 'rotate(1deg) translate(6px, 8px)' }}
          />
          <div
            className="relative overflow-hidden rounded-[32px_16px_32px_16px] p-8 lg:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8"
            style={{ background: INK, color: '#eef2f8' }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            />
            <span
              aria-hidden="true"
              className="absolute -right-3 -bottom-6 select-none pointer-events-none font-tech font-bold"
              style={{ fontSize: '7rem', color: MINT, opacity: 0.14, lineHeight: 1 }}
            >
              {'{ }'}
            </span>
            <div className="relative">
              <h2 className="font-tech text-3xl lg:text-4xl font-bold mb-2">{t('Need a developer?', 'Lagi cari developer?')}</h2>
              <p className="text-[14px]" style={{ color: 'rgba(238,242,248,0.7)' }}>{t("Share the scope first. I'll turn it into a practical build plan.", "Kirim dulu scope project-nya. Nanti aku ubah jadi build plan yang praktis.")}</p>
            </div>
            <div className="relative flex gap-3">
              <a href="https://github.com/agungcahyo" target="_blank" rel="noopener noreferrer"
                className="px-5 py-3 rounded-full text-[13px] transition-all"
                style={{ border: '1px solid rgba(238,242,248,0.2)', color: 'rgba(238,242,248,0.85)' }}>GitHub</a>
              <Link href="/developer/work-with-me"
                className="inline-flex items-center gap-2 px-7 py-3 font-medium rounded-full text-[13px] tracking-wide transition-all hover:-translate-y-0.5"
                style={{ background: MINT, color: '#0f2a1c' }}>
                {t('Start a Project', 'Mulai Project')}
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <div className="px-8 py-5 flex justify-between items-center" style={{ borderTop: `1px solid ${BORDER}` }}>
        <Link href="/" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: INK_FAINT }}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {t('Home', 'Beranda')}
        </Link>
        <span className="text-[11px] font-medium" style={{ color: INK_FAINT }}>01 / {t('Developer', 'Developer')}</span>
        <Link href="/videographer" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: INK_FAINT }}>
          {t('Next', 'Selanjutnya')}: {t('Videographer', 'Videografer')}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}