'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { SkillBars } from '@/components/ui/SkillBars';
import { JourneyTimeline } from '@/components/ui/JourneyTimeline';
import { SectionLabel } from '@/components/ui/SectionLabel';
import {
  projects,
  videoJourney,
  videoTech,
  philosophy,
  heroStats,
} from '@/data/videographer';
import { useLanguage } from '@/lib/languageContext';
import { useActivePanel } from '@/lib/activePanelContext';
import { LayoutHeader } from '@/components/ui/LayoutHeader';
import { useEffect } from 'react';

// ── Contact Sheet / Golden Hour palette ──
// A colorist's teal-and-orange grade, desaturated for print — warm and
// observant instead of the old exclusive-cinema-club near-black theme.
const PAPER = '#f7f3ee';
const SURFACE = '#fffdfa';
const INK = '#241d18';
const INK_SOFT = '#6b5f56';
const INK_FAINT = '#a89b8d';
const TERRACOTTA = '#c1613f';
const TEAL = '#2c5f66';
const BORDER = '#e3d9cd';

export default function VideographerPage() {
  const { lang, t } = useLanguage();
  const { setActivePanel } = useActivePanel();

  useEffect(() => {
    setActivePanel('videographer');
  }, [setActivePanel]);

  return (
    <main className="min-h-screen font-body" style={{ background: PAPER, color: INK }}>

      <LayoutHeader activeRole="videographer" theme="cinema" />

      {/* Hero — still full-bleed, but a print/contact-sheet frame instead
          of a dark theatrical letterbox */}
      <section className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
        <div className="absolute inset-0">
          <Image src="/hero.png" alt="Agung Cahyo Prasetyo" fill className="object-cover object-center"
            style={{ filter: 'sepia(18%) saturate(1.15) hue-rotate(-8deg) brightness(1.05) contrast(1.02)', transform: 'scaleX(-1)' }} priority />
          <div className="absolute inset-0" style={{ background: `linear-gradient(105deg, ${PAPER} 0%, rgba(247,243,238,0.55) 45%, rgba(247,243,238,0.1) 100%)` }} />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${PAPER} 0%, transparent 45%)` }} />
          {/* teal/terracotta split-tone wash, echoes a film color grade */}
          <div className="absolute inset-0" style={{ background: `linear-gradient(200deg, rgba(44,95,102,0.1) 0%, transparent 40%, rgba(193,97,63,0.12) 100%)` }} />
        </div>

        {/* sprocket hairline top/bottom, replacing the solid black letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-[10px]" style={{
          backgroundImage: `radial-gradient(circle, rgba(36,29,24,0.4) 1.5px, transparent 1.5px)`,
          backgroundSize: '14px 100%', backgroundPosition: 'center',
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-[10px]" style={{
          backgroundImage: `radial-gradient(circle, rgba(36,29,24,0.4) 1.5px, transparent 1.5px)`,
          backgroundSize: '14px 100%', backgroundPosition: 'center',
        }} />

        {/* Timecode */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute top-3 right-8 z-20 flex items-center gap-3 font-mono"
          style={{ color: INK_FAINT, fontSize: '10px', letterSpacing: '0.15em' }}>
          <span>01</span><span style={{ opacity: 0.5 }}>|</span>
          <span>24:00:00:00</span><span style={{ opacity: 0.5 }}>|</span><span>4K UHD</span>
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 flex flex-col justify-end" style={{ minHeight: '90vh', paddingBottom: '90px', paddingTop: '40px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: TEAL }}>01 / {t('Visual Storytelling', 'Penceritaan Visual')}</span>
              <div className="flex-1 h-px" style={{ background: `linear-gradient(to right, ${BORDER}, transparent)`, maxWidth: '160px' }} />
              <span className="font-mono text-[10px]" style={{ color: TERRACOTTA }}>REC ●</span>
            </div>
            <h1 className="font-editorial font-bold leading-[0.85] tracking-tight mb-8"
              style={{ fontSize: 'clamp(4rem, 10vw, 8.5rem)', color: INK, letterSpacing: '-0.02em' }}>
              Video<br />grapher<br /><span style={{ color: INK_FAINT, fontStyle: 'italic' }}>&amp; {t('Editor', 'Editor')}</span>
            </h1>
            <p className="text-[15px] leading-relaxed max-w-sm font-body" style={{ color: INK_SOFT }}>
              {t('Editing videos in my free time, turning everyday moments into something worth watching.', 'Edit video di waktu luang, ngubah momen sehari-hari jadi sesuatu yang enak ditonton.')}
            </p>
          </motion.div>

          {/* Stats bar — styled like a contact-sheet strip */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="reel-frame flex items-stretch mt-14 overflow-hidden rounded-sm"
            style={{ border: `1px solid ${BORDER}`, maxWidth: '520px' }}>
            {heroStats.map((s, i) => (
              <div key={i} className="relative flex-1 px-5 py-5" style={{
                borderRight: i < heroStats.length - 1 ? `1px solid ${BORDER}` : 'none',
                background: i % 2 === 0 ? 'rgba(193,97,63,0.03)' : 'transparent'
              }}>
              <div className="font-editorial text-xl font-bold" style={{ color: INK }}>{s.n}</div>
              <div className="text-[9px] tracking-[0.2em] uppercase mt-1" style={{ color: INK_FAINT }}>
                {typeof s.l === 'string' ? s.l : s.l[lang]}
              </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <SectionLabel color={INK_FAINT}>{t('Approach', 'Pendekatan')}</SectionLabel>
            <h2 className="font-editorial text-3xl font-bold leading-tight italic" style={{ color: INK }}>
              "{t('The gear serves the story.', 'Alat melayani cerita.')}<br/>{t('Never the other way around.', 'Bukan sebaliknya.')}"
            </h2>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {philosophy.map((item, i) => (
              <div key={i} className="reel-frame p-6 rounded-lg mt-3" style={{ border: `1px solid ${BORDER}` }}>
                <span className="reel-tape" style={{ background: i % 2 === 0 ? 'rgba(44,95,102,0.14)' : 'rgba(193,97,63,0.14)' }} />
                <h4 className="relative font-editorial text-xl font-bold mb-2" style={{ color: INK }}>
                  {typeof item.title === 'string' ? item.title : item.title[lang]}
                </h4>
                <p className="relative text-[13px] leading-relaxed" style={{ color: INK_SOFT }}>
                  {typeof item.body === 'string' ? item.body : item.body[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <SectionLabel color={INK_FAINT} className="mb-0">{t('Creative Journey', 'Perjalanan Kreatif')}</SectionLabel>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: TERRACOTTA }}></span>
              <p className="font-mono text-[10px]" style={{ color: INK_FAINT }}>REC 2021 — {t('PRESENT', 'SEKARANG')}</p>
            </div>
          </div>
          <JourneyTimeline
            items={videoJourney}
            lineColor={`linear-gradient(to bottom, transparent, ${BORDER} 10%, ${BORDER} 90%, transparent)`}
            dotColor={TEAL}
            dotGlowColor="rgba(44,95,102,0.12)"
            yearColor={TERRACOTTA}
            phaseColor={INK_FAINT}
            titleColor={INK}
            bodyColor={INK_SOFT}
            dividerColor={BORDER}
            yearWidth="70px"
          />
        </div>
      </section>

      {/* Skill Proficiency */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: `1px solid ${BORDER}` }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel color={INK_FAINT}>{t('Technical Arsenal', 'Persenjataan Teknis')}</SectionLabel>
          <SkillBars
            skills={videoTech}
            barColor={`linear-gradient(to right, ${TEAL}, ${TERRACOTTA})`}
            barBg="rgba(36,29,24,0.06)"
            nameColor={INK}
            descColor={INK_FAINT}
            percentColor={TERRACOTTA}
            showCat
          />
        </div>
      </section>

      {/* Projects — laid out like a contact sheet */}
      <section className="px-8 lg:px-16 py-14">
        <div className="max-w-6xl mx-auto">
          <SectionLabel color={INK_FAINT}>{t('Selected Work', 'Karya Terpilih')}</SectionLabel>
          <div className="space-y-6">
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="reel-frame rounded-lg overflow-hidden mt-3"
                style={{ border: `1px solid ${BORDER}` }}>
                <span className="reel-tape z-10" style={{ background: 'rgba(44,95,102,0.16)' }} />
                <div className="relative w-full aspect-video flex items-center justify-center" style={{ background: '#0c0b0a' }}>
                  {p.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${p.videoId}`}
                      title={typeof p.title === 'string' ? p.title : p.title[lang]}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ border: '1px solid rgba(255,255,255,0.14)' }}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: 'rgba(255,255,255,0.4)' }}>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.4)' }}>Add YouTube embed ID</p>
                    </div>
                  )}
                </div>
                <div className="relative p-7 lg:p-9">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: TERRACOTTA }}>
                          {typeof p.type === 'string' ? p.type : p.type[lang]}
                        </span>
                        <span className="text-[11px]" style={{ color: INK_FAINT }}>{p.year}</span>
                      </div>
                      <h3 className="font-editorial text-2xl lg:text-3xl font-bold" style={{ color: INK }}>
                        {typeof p.title === 'string' ? p.title : p.title[lang]}
                      </h3>
                    </div>
                    {p.link && p.link !== '#' && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-medium rounded-full transition-colors"
                        style={{ border: `1px solid ${BORDER}`, color: INK, background: SURFACE }}
                      >
                        <span>{typeof p.linkLabel === 'string' ? p.linkLabel : p.linkLabel[lang]}</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-[14px] leading-relaxed mb-5 max-w-2xl" style={{ color: INK_SOFT }}>
                    {typeof p.description === 'string' ? p.description : p.description[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-[11px] rounded-full" style={{ border: `1px solid ${BORDER}`, color: INK_SOFT }}>{tag}</span>
                    ))}
                  </div>
                  {p.stats && (
                    <div className="flex gap-8 pt-5" style={{ borderTop: `1px solid ${BORDER}` }}>
                      {p.stats.map((s, si) => (
                        <div key={si}>
                          <div className="font-editorial text-xl font-bold" style={{ color: INK }}>{s.value}</div>
                          <div className="text-[11px] mt-0.5" style={{ color: INK_FAINT }}>
                            {typeof s.label === 'string' ? s.label : s.label[lang]}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-16 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto relative">
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[24px_10px_24px_10px]"
            style={{ background: 'rgba(44,95,102,0.14)', transform: 'rotate(-1deg) translate(6px, 8px)' }}
          />
          <div
            className="reel-frame relative overflow-hidden rounded-[10px_24px_10px_24px] p-8 lg:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8"
            style={{ background: INK, color: '#f7f3ee', border: 'none' }}
          >
            <span
              aria-hidden="true"
              className="absolute -right-4 -bottom-10 select-none pointer-events-none font-editorial italic font-bold"
              style={{ fontSize: '8rem', color: TERRACOTTA, opacity: 0.16, lineHeight: 1 }}
            >
              &amp;
            </span>
            <div className="relative">
              <h2 className="font-editorial text-3xl lg:text-4xl font-bold mb-2">{t('Ready to collaborate?', 'Siap collab?')}</h2>
              <p className="text-[14px]" style={{ color: 'rgba(247,243,238,0.68)' }}>{t("Let's create something cinematic together.", "Yuk bikin sesuatu yang cinematic bareng.")}</p>
            </div>
            <a href="mailto:cahyoprasetyo507@gmail.com"
              className="relative px-7 py-3.5 font-medium rounded-full text-[13px] tracking-wide whitespace-nowrap transition-all hover:-translate-y-0.5"
              style={{ background: TERRACOTTA, color: '#fdf6f2' }}>
              {t('Hire Me as Videographer', 'Hire Me as Videographer')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <div className="px-8 py-5 flex justify-between items-center" style={{ borderTop: `1px solid ${BORDER}` }}>
        <Link href="/developer" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: INK_FAINT }}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {t('Prev', 'Sebelumnya')}: {t('Developer', 'Developer')}
        </Link>
        <span className="text-[11px] font-medium" style={{ color: INK_FAINT }}>02 / {t('Videographer', 'Videografer')}</span>
        <Link href="/leadership" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: INK_FAINT }}>
          {t('Next', 'Selanjutnya')}: {t('Leadership', 'Leadership')}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}