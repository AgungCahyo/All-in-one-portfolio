'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { SkillBars } from '@/components/ui/SkillBars';
import { JourneyTimeline } from '@/components/ui/JourneyTimeline';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { LayoutHeader } from '@/components/ui/LayoutHeader';
import { useLanguage } from '@/lib/languageContext';
import { useActivePanel } from '@/lib/activePanelContext';
import { useEffect } from 'react';
import {
  creations,
  journey,
  techniques,
  skills,
  philosophy,
  leadershipPractices,
} from '@/data/beverage';


export default function BeveragePage() {
  const { lang, t } = useLanguage();
  const { setActivePanel } = useActivePanel();

  useEffect(() => {
    setActivePanel('beverage');
  }, [setActivePanel]);

  return (
    <main className="min-h-screen text-amber-50 font-['DM_Sans',sans-serif] leadership-page" style={{ 
      background: '#0a0e12',
      backgroundImage: `
        radial-gradient(circle at 20% 30%, rgba(212,175,55,0.03) 0%, transparent 20%),
        radial-gradient(circle at 80% 70%, rgba(212,175,55,0.02) 0%, transparent 20%),
        repeating-linear-gradient(45deg, transparent 0%, transparent 2px, rgba(212,175,55,0.01) 2px, rgba(212,175,55,0.01) 4px)
      `
    }}>

      <LayoutHeader activeRole="beverage" theme="leadership" />

      {/* Hero - Thesis + Context + Portrait */}
      <section className="relative overflow-hidden leadership-section-bg" style={{ borderBottom: '1px solid rgba(150,170,190,0.14)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(150,170,190,0.06) 0%, transparent 60%)' }} />
        <div className="relative max-w-6xl mx-auto px-8 lg:px-16" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-stretch">
            {/* Left: Text panel */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
              className="flex-1 flex flex-col justify-center order-2 lg:order-1 lg:pr-16">
              {/* Thesis statement */}
              <motion.blockquote
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="m-0 font-['Cormorant_Garamond',serif] font-bold leadership-thesis"
                style={{
                  color: '#e6d3a8',
                  fontSize: 'clamp(2.8rem, 5.5vw, 4.5rem)',
                  lineHeight: 1.2,
                  letterSpacing: '-0.02em',
                  maxWidth: '28ch',
                  textWrap: 'pretty',
                  background: 'rgba(230,211,168,0.05)',
                  borderLeft: '3px solid rgba(230,211,168,0.4)',
                  paddingLeft: '16px',
                  borderRadius: '0 4px 4px 0',
                  position: 'relative'
                }}
              >
                {t(
                  'Leadership is making the next person able to run the station without you standing over them.',
                  'Leadership adalah membuat orang berikutnya bisa menjalankan station tanpa harus diawasi terus.',
                )}
                {/* Connection nodes */}
                <div className="absolute left-[-12px] top-[50%] -translate-y-[50%] w-2 h-2 bg-d4af37/50 rounded-full border border-d4af37/50" />
              </motion.blockquote>
              {/* Context paragraph */}
              <p className="text-[15px] leading-relaxed max-w-sm mt-6" style={{ color: '#6d7a88' }}>
                {t(
                  'Coordinating beverage teams, training new staff, and keeping operations moving when volume spikes. Craft is the context — leadership is the work.',
                  'Mengkoordinasikan tim minuman, melatih staf baru, dan menjaga operasional tetap jalan saat volume naik. Craft adalah konteksnya — leadership adalah kerjanya.'
                )}
              </p>
            </motion.div>

            {/* Right: Portrait */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="relative shrink-0 w-full lg:w-[340px] h-[360px] lg:h-auto order-1 lg:order-2 lg:pl-16" style={{ minHeight: '400px' }}>
              <div className="relative w-full h-full" style={{ minHeight: '400px' }}>
                <div className="absolute top-0 left-0 w-6 h-6 z-10" style={{ borderTop: '1px solid rgba(150,170,190,0.3)', borderLeft: '1px solid rgba(150,170,190,0.3)' }} />
                <div className="absolute top-0 right-0 w-6 h-6 z-10" style={{ borderTop: '1px solid rgba(150,170,190,0.3)', borderRight: '1px solid rgba(150,170,190,0.3)' }} />
                <div className="absolute bottom-0 left-0 w-6 h-6 z-10" style={{ borderBottom: '1px solid rgba(150,170,190,0.3)', borderLeft: '1px solid rgba(150,170,190,0.3)' }} />
                <div className="absolute bottom-0 right-0 w-6 h-6 z-10" style={{ borderBottom: '1px solid rgba(150,170,190,0.3)', borderRight: '1px solid rgba(150,170,190,0.3)' }} />
                <div className="absolute inset-2 overflow-hidden">
                  <Image src="/profile.png" alt="Agung Cahyo Prasetyo" fill className="object-cover object-[50%_20%]"
                    style={{ filter: 'grayscale(15%) sepia(40%) hue-rotate(-5deg) brightness(0.78) contrast(1.05)' }} priority />
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(12,9,6,0.6) 100%)' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 55%, #0b1016 100%)' }} />
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                  <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: 'rgba(197,208,218,0.2)' }}>Agung Cahyo Prasetyo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE SYSTEM - PEOPLE → SYSTEMS → EXECUTION → OUTCOME */}
      <section className="px-8 lg:px-16 py-14 leadership-divider" style={{ 
        borderTop: '1px solid rgba(212,175,55,0.3)',
        position: 'relative'
      }}>
  {/* Enhanced divider with leadership markers */}
  <div className="absolute left-[-8px] top-[-8px] h-[calc(100%+16px)] w-[1px]"
    style={{ 
      background: 'repeating-linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(212,175,55,0.2) 40%, rgba(212,175,55,0.2) 60%, transparent 60%, transparent 100%)',
      backgroundSize: '6px 12px'
    }}
  />
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#b8904c">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-d4af37/20 rounded-full" />
          {t('The System', 'Sistem')}
        </span>
      </SectionLabel>
          <div className="relative mt-6">
            {/* Enhanced connector line with guidance nodes */}
            <div className="absolute inset-y-0 left-[8px] w-[1px]" style={{ background: 'repeating-linear-gradient(to bottom, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.2) 2px, transparent 2px, transparent 8px)' }} />
            <div className="absolute inset-y-0 left-[6px] w-[4px]" style={{ background: 'radial-gradient(circle at center, rgba(212,175,55,0.3) 0%, transparent 70%)', borderRadius: '50%' }} />
            <div className="flex flex-col space-y-12 ps-8">
              {philosophy.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="relative z-10 flex-shrink-0">
                    {/* Guidance line */}
                    <div className="absolute left-[-4px] top-[50%] -translate-y-[50%] w-8 h-[1px] bg-d4af37/30" />
                    <div className="flex h-10 w-10 items-center justify-center"
                      style={{ color: '#e6d3a8', background: 'rgba(10,14,18,0.8)', border: '2px solid rgba(212,175,55,0.3)', borderRadius: '50%', position: 'relative' }}>
                      {/* Rank indicator (epaulette-style) */}
                      <div className="absolute -top-1 left-[50%] -translate-x-[50%] w-3 h-3 bg-d4af37/80 rounded-full" />
                      {stage.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-1 text-[18px] font-['Cormorant_Garamond',serif] font-bold"
                      style={{ color: '#e6d3a8' }}>
                      {(stage.title as any)[lang]}
                    </h3>
                    <p className="text-[14px] leading-relaxed"
                      style={{ color: '#b8904c', maxWidth: '28ch' }}>
                      {(stage.body as any)[lang]}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW I LEAD */}
      <section className="px-8 lg:px-16 py-16 leadership-divider" style={{ 
        borderTop: '1px solid rgba(212,175,55,0.3)',
        position: 'relative'
      }}>
  {/* Enhanced divider with leadership markers */}
  <div className="absolute left-[-8px] top-[-8px] h-[calc(100%+16px)] w-[1px]"
    style={{ 
      background: 'repeating-linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(212,175,55,0.2) 40%, rgba(212,175,55,0.2) 60%, transparent 60%, transparent 100%)',
      backgroundSize: '6px 12px'
    }}
  />
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#b8904c">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-d4af37/20 rounded-full" />
          {t('How I Lead', 'Cara Saya Memimpin')}
        </span>
      </SectionLabel>
          <div className="grid md:grid-cols-3 gap-5">
            {leadershipPractices.map((practice, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 16, scale: 0.95 }} 
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.08, type: 'spring', stiffness: 300, damping: 20 }}
                className="relative overflow-hidden group"
                style={{
                  border: '1px solid rgba(212,175,55,0.15)', 
                  borderRadius: '4px', 
                  background: '#0a0e12',
                  transition: 'all 0.3s ease'
                }}
                _hover={{
                  borderColor: 'rgba(212,175,55,0.3)',
                  background: 'rgba(212,175,55,0.05)',
                  transform: 'translateY(-2px)'
                }}
              >
                {/* Animated connection path */}
                <div className="absolute left-[-6px] top-[50%] -translate-y-[50%] w-2 h-[100%]"
                   style={{ 
                     background: 'repeating-linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(212,175,55,0.15) 40%, rgba(212,175,55,0.15) 60%, transparent 60%, transparent 100%)',
                     backgroundSize: '6px 12px'
                   }}
                />
                <p className="text-[10px] tracking-[0.3em] uppercase mb-4" style={{ color: '#b8904c' }}>0{idx + 1}</p>
                <h3 className="font-['Cormorant_Garamond',serif] text-2xl font-bold mb-3 group-hover:text-e6d3a8 transition-colors"
                  style={{ color: '#e6d3a8' }}>
                  {practice.title[lang]}
                </h3>
                <p className="text-[13px] leading-relaxed group-hover:text-b8904c transition-colors" style={{ color: '#b8904c' }}>{practice.body[lang]}</p>
                {/* Pulsing insight indicator */}
                <motion.span
                  whileHover={{ scale: [1, 1.1, 1] }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute bottom-2 right-2 w-4 h-4 bg-d4af37/50 rounded-full"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROOF - Selected Work (first creation as evidence) */}
      <section className="px-8 lg:px-16 py-14 leadership-divider" style={{ 
        borderTop: '1px solid rgba(212,175,55,0.3)',
        position: 'relative'
      }}>
  {/* Enhanced divider with leadership markers */}
  <div className="absolute left-[-8px] top-[-8px] h-[calc(100%+16px)] w-[1px]"
    style={{ 
      background: 'repeating-linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(212,175,55,0.2) 40%, rgba(212,175,55,0.2) 60%, transparent 60%, transparent 100%)',
      backgroundSize: '6px 12px'
    }}
  />
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#b8904c">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-d4af37/20 rounded-full" />
          {t('Proof', 'Bukti')}
        </span>
      </SectionLabel>
          <div className="space-y-6">
            {/* First creation as primary evidence */}
            <motion.div key={0} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0 }}
              className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)', background: '#0b1016' }}>
              <div className="p-7">
                <h3 className="mb-3 text-[20px] font-['Cormorant_Garamond',serif] font-bold"
                  style={{ color: '#c5d0da' }}>
                  {creations[0].title[lang]}
                </h3>
                <p className="mb-2 text-[14px]" style={{ color: '#6d7a88' }}>
                  {creations[0].subtitle[lang]}
                </p>
                <p className="text-[14px] leading-relaxed" style={{ color: '#6d7a88' }}>
                  {creations[0].description[lang]}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {creations[0].tags.map((tag, ti) => (
                    <span key={ti} className="px-3 py-1 text-[11px] rounded-full"
                      style={{ border: '1px solid rgba(255,255,255,0.05)', color: '#6d7a88' }}>{tag}</span>
                  ))}
                </div>
                <div className="mt-4 p-3 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.04)', background: '#0b1016' }}>
                  <p className="text-[13px] leading-relaxed italic" style={{ color: '#6d7a88' }}>
                    <span className="font-medium not-italic" style={{ color: '#c5d0da' }}>{t('Insight: ', 'Insight: ')}</span>
                    {creations[0].insight[lang]}
                  </p>
                </div>
              </div>
            </motion.div>
            {/* Other creations (2-4) as supporting evidence */}
            <div className="grid md:grid-cols-2 gap-5">
              {creations.slice(1).map((c, i) => (
                <motion.div key={i + 1} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: (i + 1) * 0.08 }}
                  className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)', background: '#0b1016' }}>
                  <div className="p-5">
                    <h3 className="mb-2 text-[18px] font-['Cormorant_Garamond',serif] font-bold"
                      style={{ color: '#c5d0da' }}>
                      {c.title[lang]}
                    </h3>
                    <p className="mb-1 text-[14px]" style={{ color: '#6d7a88' }}>
                      {c.subtitle[lang]}
                    </p>
                    <p className="text-[13px] leading-relaxed" style={{ color: '#6d7a88' }}>
                      {c.description[lang]}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {c.tags.map((tag, ti) => (
                        <span key={ti} className="px-3 py-1 text-[11px] rounded-full"
                          style={{ border: '1px solid rgba(255,255,255,0.05)', color: '#6d7a88' }}>{tag}</span>
                      ))}
                    </div>
                    <div className="mt-3 p-2 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.04)', background: '#0b1016' }}>
                      <p className="text-[13px] leading-relaxed italic" style={{ color: '#6d7a88' }}>
                        <span className="font-medium not-italic" style={{ color: '#c5d0da' }}>{t('Insight: ', 'Insight: ')}</span>
                        {c.insight[lang]}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(212,175,55,0.08)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <SectionLabel color="#8a7a5a" className="mb-0">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-d4af37/20 rounded-full" />
          {t('From Floor to Coordinator', 'Dari Lantai ke Koordinator')}
        </span>
      </SectionLabel>
            <p className="text-[10px] tracking-[0.2em] uppercase font-[Cormorant_Garamond]" style={{ 
              color: '#c5d0da',
              position: 'relative',
              paddingLeft: '24px'
            }}>
              <span className="absolute left-0 top-[50%] -translate-y-[50%] w-4 h-4 bg-d4af37/20 rounded-full flex items-center justify-center"
                style={{ fontSize: '10px', fontWeight: 'bold', color: '#d4af37' }}>03</span>
              2019 — {t('Present', 'Sekarang')}
            </p>
          </div>
          <JourneyTimeline
            items={journey}
            lineColor="linear-gradient(to bottom, transparent, rgba(212,175,55,0.15) 10%, rgba(212,175,55,0.15) 90%, transparent)"
            dotColor="rgba(212,175,55,0.35)"
            dotGlowColor="rgba(212,175,55,0.08)"
            yearColor="rgba(212,175,55,0.4)"
            phaseColor="#8a7a5a"
            titleColor="#e6d3a8"
            bodyColor="#b8904c"
            dividerColor="rgba(212,175,55,0.06)"
            yearWidth="72px"
          />
        </div>
      </section>

      {/* CAPABILITY - Skills & Technique Mastery (compact) */}
      <section className="px-8 lg:px-16 py-14" style={{ 
  borderTop: '1px solid rgba(212,175,55,0.04)',
  position: 'relative'
}}>
  {/* Enhanced divider with leadership markers */}
  <div className="absolute left-[-8px] top-[-8px] h-[calc(100%+16px)] w-[1px]"
    style={{ 
      background: 'repeating-linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(212,175,55,0.1) 40%, rgba(212,175,55,0.1) 60%, transparent 60%, transparent 100%)',
      backgroundSize: '6px 12px'
    }}
  />
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Skills */}
          <div>
            <SectionLabel color="#8a7a5a">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-d4af37/20 rounded-full" />
          {t('Core Expertise', 'Keahlian Utama')}
        </span>
      </SectionLabel>
            <div className="grid md:grid-cols-3 gap-4">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <p className="text-[9px] uppercase tracking-widest mb-2 font-medium"
                    style={{ color: '#8a7a5a' }}>
                    {typeof skillGroup.category === 'string' ? skillGroup.category : skillGroup.category[lang]}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {skillGroup.items.map((item, i) => (
                      <span key={i} className="px-2 py-0.5 rounded text-[11px]"
                        style={{ border: '1px solid rgba(212,175,55,0.1)', color: '#b8904c', background: 'rgba(212,175,55,0.03)' }}>
                        {typeof item === 'string' ? item : item[lang]}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Technique Mastery */}
          <div>
            <SectionLabel color="#8a7a5a">
        <span className="inline-flex items-center gap-2">
          <span className="w-2 h-2 bg-d4af37/20 rounded-full" />
          {t('Leadership Range', 'Rentang Leadership')}
        </span>
      </SectionLabel>
            <SkillBars
              skills={techniques}
              barColor="linear-gradient(to right, rgba(212,175,55,0.3), rgba(230,211,168,0.55))"
              barBg="rgba(212,175,55,0.07)"
              nameColor="#e6d3a8"
              descColor="#b8904c"
              percentColor="rgba(212,175,55,0.35)"
              showDesc
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-16 py-20" style={{ 
  borderTop: '1px solid rgba(212,175,55,0.04)',
  position: 'relative'
}}>
  {/* Enhanced divider with leadership markers */}
  <div className="absolute left-[-8px] top-[-8px] h-[calc(100%+16px)] w-[1px]"
    style={{ 
      background: 'repeating-linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(212,175,55,0.1) 40%, rgba(212,175,55,0.1) 60%, transparent 60%, transparent 100%)',
      backgroundSize: '6px 12px'
    }}
  />
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold mb-2" style={{ 
              color: '#e6d3a8',
              position: 'relative'
            }}>
              <span className="absolute left-[-24px] top-[50%] -translate-y-[50%] w-6 h-6 bg-d4af37/20 rounded-full flex items-center justify-center"
                style={{ fontSize: '14px', fontWeight: 'bold', color: '#d4af37' }}>03</span>
              {t("Let's build a team that runs itself.", "Yuk bangun tim yang bisa jalan sendiri.")}
            </h2>
            <p className="text-[14px] leading-relaxed max-w-md" style={{ color: '#b8904c' }}>
              {t("Training systems, operations, or a product that needs the same ownership.", "Sistem pelatihan, operasional, atau produk yang butuh ownership yang sama.")}
            </p>
          </div>
          <a href="mailto:cahyoprasetyo507@gmail.com"
            className="px-7 py-3.5 font-medium rounded-full text-[13px] tracking-wide whitespace-nowrap transition-all hover:opacity-90 relative overflow-hidden group"
            style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.2) 100%)',
              color: '#e6d3a8',
              border: '1px solid rgba(212,175,55,0.3)',
              backdropFilter: 'blur(4px)'
            }}
            _hover={{
              background: 'linear-gradient(135deg, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.3) 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 4px 12px rgba(212,175,55,0.2)'
            }}
          >
            <span className="absolute left-0 top-0 w-full h-full bg-d4af37/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            {t('Get in Touch', 'Get in Touch')}
          </a>
        </div>
      </section>

      <div className="px-8 py-5 flex justify-between items-center" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <Link href="/videographer" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#c5d0da' }}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {t('Prev: Videographer', 'Sebelumnya: Videografer')}
        </Link>
        <span className="text-[11px] font-medium" style={{ color: '#c5d0da' }}>03 / {t('Leadership', 'Leadership')}</span>
        <Link href="/" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#c5d0da' }}>
          {t('Back to Home', 'Kembali ke Beranda')}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}