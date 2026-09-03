'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Magnetic } from '@/components/ui/Magnetic';
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

export default function VideographerPage() {
  const { lang, t } = useLanguage();
  const { setActivePanel } = useActivePanel();

  useEffect(() => {
    setActivePanel('videographer');
  }, [setActivePanel]);

  return (
    <main className="min-h-screen text-stone-100 font-['DM_Sans',sans-serif]" style={{ background: '#0c0b0a' }}>

      <LayoutHeader activeRole="videographer" theme="cinema" />


      {/* Hero — Cinematic Full-Bleed */}
      <section className="relative overflow-hidden" style={{ minHeight: '95vh' }}>
        <div className="absolute inset-0">
          <Image src="/hero.png" alt="Agung Cahyo Prasetyo" fill className="object-cover object-center"
            style={{ filter: 'grayscale(40%) brightness(0.38)', transform: 'scaleX(-1)' }} priority />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(12,11,10,0.98) 0%, rgba(12,11,10,0.80) 45%, rgba(12,11,10,0.20) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0c0b0a 0%, transparent 50%)' }} />
          {/* Static grain overlay removed - now global */}
          <div className="absolute top-0 left-0 right-0" style={{ height: '58px', background: '#000' }} />
          <div className="absolute bottom-0 left-0 right-0" style={{ height: '58px', background: '#000' }} />
        </div>

        {/* Timecode */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute top-0 right-8 z-20 flex items-center gap-3 font-mono"
          style={{ color: 'rgba(206,200,192,0.25)', fontSize: '10px', letterSpacing: '0.15em', lineHeight: '58px' }}>
          <span>01</span><span style={{ color: 'rgba(206,200,192,0.1)' }}>|</span>
          <span>24:00:00:00</span><span style={{ color: 'rgba(206,200,192,0.1)' }}>|</span><span>4K UHD</span>
        </motion.div>

        {/* Corner brackets */}
        {[['top-[58px] left-8','border-t border-l'],['top-[58px] right-8','border-t border-r'],
          ['bottom-[58px] left-8','border-b border-l'],['bottom-[58px] right-8','border-b border-r']].map(([pos, cls], i) => (
          <motion.div key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
            className={`absolute w-6 h-6 ${pos} ${cls}`}
            style={{ borderColor: 'rgba(206,200,192,0.15)', borderWidth: '1px' }} />
        ))}

        {/* Main content */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 flex flex-col justify-end" style={{ minHeight: '95vh', paddingBottom: '100px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: '#5a5450' }}>01 / {t('Visual Storytelling', 'Penceritaan Visual')}</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.06), transparent)', maxWidth: '160px' }} />
              <span className="font-mono text-[10px]" style={{ color: 'rgba(206,200,192,0.15)' }}>REC ●</span>
            </div>
            <h1 className="font-['Cormorant_Garamond',serif] font-bold leading-[0.85] tracking-tight mb-8"
              style={{ fontSize: 'clamp(4.5rem, 11vw, 10rem)', color: '#cec8c0', letterSpacing: '-0.03em' }}>
              Video<br />grapher<br /><span style={{ color: 'rgba(206,200,192,0.18)' }}>&amp; {t('Editor', 'Editor')}</span>
            </h1>
            <p className="text-[15px] leading-relaxed max-w-sm" style={{ color: '#6a6460' }}>
              {t('Editing videos in my free time, turning everyday moments into something worth watching.', 'Edit video di waktu luang, ngubah momen sehari-hari jadi sesuatu yang enak ditonton.')}
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-stretch mt-14 overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', maxWidth: '520px' }}>
            {heroStats.map((s, i) => (
              <div key={i} className="flex-1 px-5 py-4" style={{
                borderRight: i < heroStats.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent'
              }}>
              <div className="font-['Cormorant_Garamond',serif] text-xl font-bold" style={{ color: '#cec8c0' }}>{s.n}</div>
              <div className="text-[9px] tracking-[0.2em] uppercase mt-1" style={{ color: '#3a3530' }}>
                {typeof s.l === 'string' ? s.l : s.l[lang]}
              </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <SectionLabel color="#5a5450">{t('Approach', 'Pendekatan')}</SectionLabel>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-bold leading-tight" style={{ color: '#cec8c0' }}>
              "{t('The gear serves the story.', 'Alat melayani cerita.')}<br/>{t('Never the other way around.', 'Bukan sebaliknya.')}"
            </h2>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {philosophy.map((item, i) => (
              <div key={i} className="p-6 rounded-xl" style={{ background: '#0f0e0d', border: '1px solid rgba(255,255,255,0.03)' }}>
                <h4 className="font-['Cormorant_Garamond',serif] text-xl font-bold mb-2" style={{ color: '#cec8c0' }}>
                  {typeof item.title === 'string' ? item.title : item.title[lang]}
                </h4>
                <p className="text-[13px] leading-relaxed" style={{ color: '#6a6460' }}>
                  {typeof item.body === 'string' ? item.body : item.body[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(206,200,192,0.05)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <SectionLabel color="#5a5450" className="mb-0">{t('Creative Journey', 'Perjalanan Kreatif')}</SectionLabel>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full blur-[1px]" style={{ background: '#ff3b30' }}></span>
              <p className="font-mono text-[10px]" style={{ color: '#5a5450' }}>REC 2021 — {t('PRESENT', 'SEKARANG')}</p>
            </div>
          </div>
          <JourneyTimeline
            items={videoJourney}
            lineColor="linear-gradient(to bottom, transparent, rgba(206,200,192,0.1) 10%, rgba(206,200,192,0.1) 90%, transparent)"
            dotColor="rgba(206,200,192,0.8)"
            dotGlowColor="rgba(206,200,192,0.1)"
            yearColor="rgba(206,200,192,0.6)"
            phaseColor="#5a5450"
            titleColor="#cec8c0"
            bodyColor="#6a6460"
            dividerColor="rgba(206,200,192,0.05)"
            yearWidth="70px"
          />
        </div>
      </section>

      {/* Skill Proficiency */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(206,200,192,0.05)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#5a5450">{t('Technical Arsenal', 'Persenjataan Teknis')}</SectionLabel>
          <SkillBars
            skills={videoTech}
            barColor="linear-gradient(to right, rgba(206,200,192,0.2), rgba(206,200,192,0.7))"
            barBg="rgba(206,200,192,0.05)"
            nameColor="#cec8c0"
            descColor="#5a5450"
            percentColor="rgba(206,200,192,0.4)"
            showCat
          />
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 lg:px-16 py-14">
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#3a3530">{t('Selected Work', 'Karya Terpilih')}</SectionLabel>
          <div className="space-y-5">
            {projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.05)', background: '#0f0e0d' }}>
                <div className="relative w-full aspect-video flex items-center justify-center" style={{ background: '#0a0908' }}>
                  {p.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${p.videoId}`}
                      title={typeof p.title === 'string' ? p.title : p.title[lang]}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#3a3530' }}>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-[11px]" style={{ color: '#3a3530' }}>Add YouTube embed ID</p>
                    </div>
                  )}
                </div>
                <div className="p-7 lg:p-9">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: '#3a3530' }}>
                          {typeof p.type === 'string' ? p.type : p.type[lang]}
                        </span>
                        <span className="text-[11px]" style={{ color: '#2a2520' }}>{p.year}</span>
                      </div>
                      <h3 className="font-['Cormorant_Garamond',serif] text-2xl lg:text-3xl font-bold" style={{ color: '#cec8c0' }}>
                        {typeof p.title === 'string' ? p.title : p.title[lang]}
                      </h3>
                    </div>
                    {p.link && p.link !== '#' && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-[12px] font-medium rounded-full transition-colors"
                        style={{ border: '1px solid rgba(206,200,192,0.2)', color: '#cec8c0', background: 'rgba(255,255,255,0.03)' }}
                      >
                        <span>{typeof p.linkLabel === 'string' ? p.linkLabel : p.linkLabel[lang]}</span>
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                  <p className="text-[14px] leading-relaxed mb-5 max-w-2xl" style={{ color: '#5a5450' }}>
                    {typeof p.description === 'string' ? p.description : p.description[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map((t) => (
                      <span key={t} className="px-3 py-1 text-[11px] rounded-full" style={{ border: '1px solid rgba(255,255,255,0.05)', color: '#5a5450' }}>{t}</span>
                    ))}
                  </div>
                  {p.stats && (
                    <div className="flex gap-8 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                      {p.stats.map((s, si) => (
                        <div key={si}>
                          <div className="font-['Cormorant_Garamond',serif] text-xl font-bold" style={{ color: '#cec8c0' }}>{s.value}</div>
                          <div className="text-[11px] mt-0.5" style={{ color: '#3a3530' }}>
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
      <section className="px-8 lg:px-16 py-20" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#cec8c0' }}>{t('Ready to collaborate?', 'Siap collab?')}</h2>
            <p className="text-[14px]" style={{ color: '#3a3530' }}>{t("Let's create something cinematic together.", "Yuk bikin sesuatu yang cinematic bareng.")}</p>
          </div>
          <Magnetic strength={0.2}>
            <a href="mailto:cahyoprasetyo507@gmail.com"
              className="px-7 py-3.5 font-medium rounded-full text-[13px] tracking-wide whitespace-nowrap transition-all hover:opacity-90"
              style={{ background: '#cec8c0', color: '#0c0b0a' }}>
              {t('Hire Me as Videographer', 'Hire Me as Videographer')}
            </a>
          </Magnetic>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <div className="px-8 py-5 flex justify-between items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <Link href="/developer" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#3a3530' }}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {t('Prev', 'Sebelumnya')}: {t('Developer', 'Developer')}
        </Link>
        <span className="text-[11px] font-medium" style={{ color: '#2a2520' }}>02 / {t('Videographer', 'Videografer')}</span>
        <Link href="/beverage" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#3a3530' }}>
          {t('Next', 'Selanjutnya')}: {t('Beverage', 'Beverage')}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}