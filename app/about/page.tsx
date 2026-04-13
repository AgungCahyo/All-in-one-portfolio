'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';
import { Magnetic } from '@/components/ui/Magnetic';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { LayoutHeader } from '@/components/ui/LayoutHeader';
import { useLanguage } from '@/lib/languageContext';
import { useActivePanel } from '@/lib/activePanelContext';
import { timeline, values, offwork, availability } from '@/data/about';


export default function AboutPage() {
  const { lang, t } = useLanguage();
  const { setActivePanel } = useActivePanel();
  const heroRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeLens, setActiveLens] = useState<'craft' | 'code' | 'cinema'>('code');
  const [activeBridge, setActiveBridge] = useState<'craft-code' | 'code-cinema' | 'craft-cinema'>('code-cinema');

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end center'],
  });

  // Keep transforms simple and typed correctly for current framer-motion signatures.
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);
  const imgOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.65, 0.4]);

  // 📌 Additional smooth animations
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.8], [0.97, 1]);
  const panelGlow = useTransform(scrollYProgress, [0, 1], [0.18, 0.32]);

  const lensProfiles = {
    craft: {
      label: { en: 'Craft Mode', id: 'Mode Craft' },
      accent: '#d5b08a',
      title: {
        en: 'Sensory precision from beverage craft.',
        id: 'Presisi sensorik yang kebawa dari beverage craft.',
      },
      body: {
        en: 'From balancing acidity and sweetness to balancing velocity and quality. This is where the obsession with details starts.',
        id: 'Dari ngebalance acidity-sweetness sampai ngebalance velocity-quality. Obsesi ke detail start dari sini.',
      },
      bars: [92, 76, 71],
    },
    code: {
      label: { en: 'Code Mode', id: 'Mode Code' },
      accent: '#9db7e6',
      title: {
        en: 'System thinking from engineering.',
        id: 'System thinking yang kebentuk dari engineering.',
      },
      body: {
        en: 'Reusable structure, measurable quality, and shipping mindset. Everything gets modeled, tested, and improved.',
        id: 'Struktur reusable, quality yang bisa diukur, dan mindset shipping. Semua dimodelkan, dites, lalu di-improve.',
      },
      bars: [74, 95, 78],
    },
    cinema: {
      label: { en: 'Cinema Mode', id: 'Mode Cinema' },
      accent: '#c8c2ba',
      title: {
        en: 'Narrative instinct from filmmaking.',
        id: 'Naluri naratif yang kebentuk dari filmmaking.',
      },
      body: {
        en: 'Rhythm, pacing, and emotional framing. The same storytelling logic now shapes product and brand experiences.',
        id: 'Rhythm, pacing, dan emotional framing. Logika storytelling yang sama sekarang kebawa ke product dan brand experience.',
      },
      bars: [69, 80, 94],
    },
  } as const;

  const activeProfile = lensProfiles[activeLens];
  const bridgeMap = {
    'craft-code': {
      title: { en: 'Craft x Code', id: 'Craft x Code' },
      subtitle: { en: 'Precision Workflow', id: 'Precision Workflow' },
      body: {
        en: 'Recipe logic and engineering logic meet: measurable inputs, repeatable outputs, documented system.',
        id: 'Logika resep dan logika engineering ketemu: input terukur, output konsisten, sistem terdokumentasi.',
      },
      chips: ['SOP Design', 'Quality Control', 'Automation Thinking'],
      accent: '#d5b08a',
    },
    'code-cinema': {
      title: { en: 'Code x Cinema', id: 'Code x Cinema' },
      subtitle: { en: 'Narrative Product Building', id: 'Narrative Product Building' },
      body: {
        en: 'Story structure sharpens product flow. Better pacing, cleaner UX sequence, and more emotional brand touchpoints.',
        id: 'Struktur storytelling ngasah product flow: pacing lebih rapi, urutan UX lebih clean, dan touchpoint brand lebih ngena.',
      },
      chips: ['UX Pacing', 'Creative Direction', 'Story-Led Interface'],
      accent: '#9db7e6',
    },
    'craft-cinema': {
      title: { en: 'Craft x Cinema', id: 'Craft x Cinema' },
      subtitle: { en: 'Sensory Storytelling', id: 'Sensory Storytelling' },
      body: {
        en: 'Hospitality intuition and cinematic framing create stronger mood, texture, and audience immersion.',
        id: 'Intuisi hospitality dan framing sinematik bikin mood, texture, dan immersion audiens jadi lebih kuat.',
      },
      chips: ['Mood Building', 'Visual Taste', 'Experience Design'],
      accent: '#c8c2ba',
    },
  } as const;
  const activeBridgeData = bridgeMap[activeBridge];

  useEffect(() => { setActivePanel('about'); }, [setActivePanel]);

  return (
    <main
      className="min-h-screen font-['DM_Sans',sans-serif] relative overflow-hidden"
      style={{ background: '#080808', color: '#e8e4e0' }}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          opacity: panelGlow,
          background:
            'radial-gradient(circle at 12% 18%, rgba(157,183,230,0.10) 0%, transparent 36%), radial-gradient(circle at 84% 12%, rgba(213,176,138,0.07) 0%, transparent 34%), radial-gradient(circle at 55% 82%, rgba(200,194,186,0.07) 0%, transparent 36%)',
        }}
      />

      <LayoutHeader activeRole="about" theme="brutalist" />


      {/* ══════════════════════════════════════════════ HERO — smooth parallax + fade ══════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: '100vh' }}>

        {/* Photo — smooth scale + opacity parallax */}
        <motion.div 
          className="absolute inset-0" 
          style={{ scale: imgScale, opacity: imgOpacity }}
        >
          <Image
            src="/profile.png"
            alt="Agung Cahyo Prasetyo"
            fill
            className="object-cover object-[50%_18%]"
            style={{ filter: 'grayscale(100%) brightness(0.45) contrast(1.1)' }}
            priority
          />
        </motion.div>

        {/* Hard-edge gradient — smooth opacity transition */}
        <motion.div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, rgba(8,8,8,0.97) 0%, rgba(8,8,8,0.88) 38%, rgba(8,8,8,0.3) 65%, rgba(8,8,8,0.55) 100%)',
            opacity: gradientOpacity
          }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, #080808 0%, transparent 45%)',
        }} />

        {/* Top rule */}
        <div className="absolute top-[57px] left-0 right-0 h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />

        {/* Index stamp — smooth fade-in dengan slight delay */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className="absolute top-[78px] left-10 z-20"
        >
          <p className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(255,255,255,0.18)' }}>
            04 / {t('About', 'Tentang')}
          </p>
        </motion.div>

        {/* Vertical rule — column divider */}
        <div
          className="absolute top-0 bottom-0 hidden lg:block"
          style={{ left: '52%', width: '1px', background: 'rgba(255,255,255,0.05)' }}
        />

        {/* Main content */}
        <motion.div
          ref={containerRef}
          style={{ 
            minHeight: '100vh', 
            paddingBottom: '90px', 
            paddingTop: '120px' 
          }}
          className="relative z-10 max-w-7xl mx-auto px-8 lg:px-14 flex flex-col justify-end"
        >
            {/* Giant name — brutalist stacked */}
            <div className="mb-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.23, 1, 0.32, 1] // smooth cubic-bezier
                }}
              >
                {/* Overline */}
                <motion.div 
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.7, 
                    delay: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <div style={{ width: '32px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
                  <span className="font-mono text-[10px] tracking-[0.4em] uppercase"
                    style={{ color: 'rgba(255,255,255,0.22)' }}>
                    {t('Kudus, Indonesia', 'Kudus, Indonesia')}
                  </span>
                </motion.div>

                {/* Name — huge serif, dengan staggered animation */}
                <div className="overflow-hidden">
                  <motion.h1
                    className="font-['Cormorant_Garamond',serif] font-bold leading-[0.82] tracking-tight"
                    style={{
                      fontSize: 'clamp(5rem, 13vw, 12rem)',
                      color: '#e8e4e0',
                      letterSpacing: '-0.03em',
                    }}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 1.1,
                      delay: 0.2,
                      ease: [0.23, 1, 0.32, 1]
                    }}
                  >
                    Agung<br />
                    <span style={{ color: 'rgba(232,228,224,0.15)' }}>Cahyo</span><br />
                    Prasetyo
                  </motion.h1>
                </div>

                {/* Discipline strip — smooth line draw + fade content */}
                <motion.div 
                  className="mt-8 pt-6" 
                  style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                >
                  <div className="grid grid-cols-3 gap-0" style={{ maxWidth: '560px' }}>
                    {[
                      { en: 'Beverage\nCrafter', id: 'Peracik\nMinuman',  num: '01' },
                      { en: 'Full-Stack\nDeveloper', id: 'Developer\nFull-Stack', num: '02' },
                      { en: 'Videographer\n& Editor', id: 'Videografer\n& Editor', num: '03' },
                    ].map((d, i) => (
                      <motion.div 
                        key={i}
                        className="py-4 pr-6"
                        style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.08)' : 'none', paddingLeft: i > 0 ? '20px' : 0 }}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.6,
                          delay: 0.55 + (i * 0.1),
                          ease: [0.25, 0.46, 0.45, 0.94]
                        }}
                      >
                        <span className="font-mono text-[8px] tracking-[0.3em]"
                          style={{ color: 'rgba(255,255,255,0.2)' }}>{d.num}</span>
                        <p
                          className="font-['Cormorant_Garamond',serif] text-base font-semibold mt-1 whitespace-pre-line leading-tight"
                          style={{ color: 'rgba(232,228,224,0.7)' }}
                        >
                          {t(d.en, d.id)}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Bio — bottom right, offset col dengan smooth stagger */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ 
                delay: 0.7, 
                duration: 0.9,
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className="lg:ml-auto lg:max-w-sm"
            >
              <p className="text-[14px] leading-relaxed mb-6" style={{ color: 'rgba(232,228,224,0.82)', textShadow: '0 1px 2px rgba(0,0,0,0.55)' }}>
                {t(
                  'What we learn in one job will always carry over to others.',
                  'Apa yang kita pelajari di satu pekerjaan pasti akan terbawa ke pekerjaan lainnya.',
                )}
              </p>

              {/* Availability pill — smooth pulse animation */}
              <div className="flex items-center gap-3">
                <motion.div
                  animate={{ 
                    opacity: [0.4, 1, 0.4],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2.8, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#e8e4e0', flexShrink: 0 }}
                />
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase"
                  style={{ color: 'rgba(232,228,224,0.35)' }}>
                  {t('Open for collaboration', 'Terbuka untuk kolaborasi')}
                </span>
              </div>
            </motion.div>
        </motion.div>
      </section>

      {/* Identity Mixer */}
      <section className="px-8 lg:px-14 py-16 relative z-10" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase mb-3" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {t('Identity Mixer', 'Identity Mixer')}
            </p>
            <h3 className="font-['Cormorant_Garamond',serif] text-4xl leading-[0.9] font-bold" style={{ color: '#e8e4e0' }}>
              {t('One mindset,', 'Satu mindset,')}<br />
              <span style={{ color: 'rgba(232,228,224,0.45)' }}>{t('three outputs.', 'tiga output.')}</span>
            </h3>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.02)' }}>
              <div className="flex flex-wrap gap-2 mb-4">
                {(['craft', 'code', 'cinema'] as const).map((lens) => (
                  <button
                    key={lens}
                    onClick={() => setActiveLens(lens)}
                    className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.16em] uppercase transition-all"
                    style={{
                      border: `1px solid ${activeLens === lens ? lensProfiles[lens].accent : 'rgba(255,255,255,0.08)'}`,
                      color: activeLens === lens ? lensProfiles[lens].accent : 'rgba(255,255,255,0.45)',
                      background: activeLens === lens ? 'rgba(255,255,255,0.05)' : 'transparent',
                    }}
                  >
                    {lensProfiles[lens].label[lang]}
                  </button>
                ))}
              </div>
              <p className="text-[11px] tracking-[0.2em] uppercase mb-2" style={{ color: activeProfile.accent }}>
                {activeProfile.label[lang]}
              </p>
              <h4 className="font-['Cormorant_Garamond',serif] text-2xl leading-tight mb-2" style={{ color: '#e8e4e0' }}>
                {activeProfile.title[lang]}
              </h4>
              <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(232,228,224,0.62)' }}>
                {activeProfile.body[lang]}
              </p>
            </div>

            <div className="p-5 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.015)' }}>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-5" style={{ color: 'rgba(255,255,255,0.35)' }}>
                {t('Signal Strength', 'Signal Strength')}
              </p>
              {[
                { en: 'Craft Precision', id: 'Craft Precision' },
                { en: 'System Thinking', id: 'System Thinking' },
                { en: 'Storytelling', id: 'Storytelling' },
              ].map((item, i) => (
                <div key={item.en} className="mb-4 last:mb-0">
                  <div className="flex justify-between text-[11px] mb-1">
                    <span style={{ color: 'rgba(232,228,224,0.62)' }}>{item[lang]}</span>
                    <span className="font-mono" style={{ color: activeProfile.accent }}>{activeProfile.bars[i]}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <motion.div
                      key={`${activeLens}-${i}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${activeProfile.bars[i]}%` }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background: `linear-gradient(90deg, ${activeProfile.accent}, rgba(255,255,255,0.75))` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="md:col-span-2 p-5 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.08)', background: 'rgba(255,255,255,0.015)' }}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  {t('Cross-Discipline Matrix', 'Cross-Discipline Matrix')}
                </p>
              </div>
              <div className="grid lg:grid-cols-2 gap-6 items-start">
                <div className="space-y-4">
                  {([
                    ['craft-code', 'Craft x Code'],
                    ['code-cinema', 'Code x Cinema'],
                    ['craft-cinema', 'Craft x Cinema'],
                  ] as const).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setActiveBridge(key)}
                      className="w-full text-left p-4 rounded-lg transition-all"
                      style={{
                        border: `1px solid ${activeBridge === key ? bridgeMap[key].accent : 'rgba(255,255,255,0.08)'}`,
                        background: activeBridge === key ? 'rgba(255,255,255,0.045)' : 'rgba(255,255,255,0.01)',
                      }}
                    >
                      <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: bridgeMap[key].accent }}>{label}</p>
                      <p className="text-[13px]" style={{ color: 'rgba(232,228,224,0.64)' }}>{bridgeMap[key].subtitle[lang]}</p>
                    </button>
                  ))}
                </div>

                <div className="p-4 rounded-lg" style={{ border: `1px solid ${activeBridgeData.accent}` }}>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: activeBridgeData.accent }}>
                    {activeBridgeData.title[lang]}
                  </p>
                  <h4 className="font-['Cormorant_Garamond',serif] text-3xl leading-[0.95] mb-3" style={{ color: '#e8e4e0' }}>
                    {activeBridgeData.subtitle[lang]}
                  </h4>
                  <p className="text-[14px] leading-relaxed mb-4" style={{ color: 'rgba(232,228,224,0.64)' }}>
                    {activeBridgeData.body[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {activeBridgeData.chips.map((chip) => (
                      <span key={chip} className="px-2.5 py-1 text-[11px] rounded-full" style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(232,228,224,0.72)' }}>
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════ SECTION A — Full-width rule + index ══════════════════════════════ */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }} className="px-8 lg:px-14 py-3 flex justify-between items-center">
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(255,255,255,0.42)' }}>A — {t('Values', 'Nilai')}</span>
        <span className="font-mono text-[9px] tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.24)' }}>04.1</span>
      </div>

      {/* ══════════════════════════════ VALUES — brutalist numbered grid ══════════════════════════════ */}
      <section className="px-8 lg:px-14 py-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="grid grid-cols-12 gap-0 py-8"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              {/* Number — col 1–2 */}
              <div className="col-span-2 lg:col-span-1 flex items-start pt-1">
                <span
                  className="font-['Cormorant_Garamond',serif] font-bold"
                  style={{ fontSize: '2.8rem', color: 'rgba(255,255,255,0.07)', lineHeight: 1, letterSpacing: '-0.03em' }}
                >
                  {v.num}
                </span>
              </div>

              {/* Title — col 3–6 */}
              <div className="col-span-5 lg:col-span-4 pr-8 flex items-start">
                <h3
                  className="font-['Cormorant_Garamond',serif] font-bold leading-tight"
                  style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)', color: '#e8e4e0', letterSpacing: '-0.02em' }}
                >
                  {typeof v.title === 'string' ? v.title : v.title[lang]}
                </h3>
              </div>

              {/* Body — col 7–12 */}
              <div className="col-span-5 lg:col-span-7 flex items-start">
                <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(232,228,224,0.50)', maxWidth: '480px' }}>
                  {typeof v.body === 'string' ? v.body : v.body[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════ SECTION B — Timeline header ══════════════════════════════ */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        className="px-8 lg:px-14 py-3 flex justify-between items-center mt-16">
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(255,255,255,0.42)' }}>B — {t('Journey', 'Perjalanan')}</span>
        <span className="font-mono text-[9px] tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.24)' }}>04.2</span>
      </div>

      {/* ══════════════════════════════ TIMELINE — newspaper column style ══════════════════════════════ */}
      <section
        className="px-8 lg:px-14 py-0"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto">
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="grid grid-cols-12 gap-0 py-7"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
            >
              {/* Year + code — col 1–2 */}
              <div className="col-span-3 lg:col-span-2 pr-6">
                <p
                  className="font-['Cormorant_Garamond',serif] font-bold"
                  style={{ fontSize: '1.6rem', color: 'rgba(255,255,255,0.18)', letterSpacing: '-0.02em', lineHeight: 1 }}
                >
                  {item.year}
                </p>
                <p className="font-mono text-[8px] tracking-[0.2em] mt-1" style={{ color: 'rgba(255,255,255,0.22)' }}>
                  {item.code}
                </p>
              </div>

              {/* Tag — col 3 */}
              <div className="col-span-2 lg:col-span-1 pr-4 pt-1">
                <span
                  className="font-mono text-[8px] tracking-[0.25em] uppercase px-2 py-1 inline-block"
                  style={{ border: '1px solid rgba(255,255,255,0.10)', color: 'rgba(255,255,255,0.52)' }}
                >
                  {typeof item.tag === 'string' ? item.tag : item.tag[lang]}
                </span>
              </div>

              {/* Title + body — col 5–12 */}
              <div className="col-span-7 lg:col-span-9">
                <h4
                  className="font-['Cormorant_Garamond',serif] font-bold mb-2"
                  style={{ fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)', color: '#c8c4c0', letterSpacing: '-0.01em', lineHeight: 1.2 }}
                >
                  {typeof item.title === 'string' ? item.title : item.title[lang]}
                </h4>
                <p className="text-[13px] leading-relaxed" style={{ color: 'rgba(232,228,224,0.50)', maxWidth: '560px' }}>
                  {typeof item.body === 'string' ? item.body : item.body[lang]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════ SECTION C — Off-work header ══════════════════════════════ */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        className="px-8 lg:px-14 py-3 flex justify-between items-center mt-16">
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(255,255,255,0.42)' }}>C — {t('Beyond Work', 'Di Luar Kerja')}</span>
        <span className="font-mono text-[9px] tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.24)' }}>04.3</span>
      </div>

      {/* ══════════════════════════════ OFF-WORK — dense horizontal list ══════════════════════════════ */}
      <section
        className="px-8 lg:px-14"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto">
          {offwork.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="flex items-baseline gap-6 py-5"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
            >
              <span className="font-mono text-[9px] flex-shrink-0" style={{ color: 'rgba(255,255,255,0.24)', width: '24px' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-[14px]" style={{ color: 'rgba(232,228,224,0.55)' }}>
                {typeof item.label === 'string' ? item.label : item.label[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════ SECTION D — Contact header ══════════════════════════════ */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        className="px-8 lg:px-14 py-3 flex justify-between items-center mt-16">
        <span className="font-mono text-[9px] tracking-[0.35em] uppercase" style={{ color: 'rgba(255,255,255,0.42)' }}>D — {t('Contact', 'Kontak')}</span>
        <span className="font-mono text-[9px] tracking-[0.2em]" style={{ color: 'rgba(255,255,255,0.24)' }}>04.4</span>
      </div>

      {/* ══════════════════════════════ CONTACT — full width, asymmetric ══════════════════════════════ */}
      <section
        className="px-8 lg:px-14 py-20"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-end">

          {/* Left — big statement */}
          <div>
            <h2
              className="font-['Cormorant_Garamond',serif] font-bold leading-[0.9] mb-10"
              style={{
                fontSize: 'clamp(3rem, 6vw, 5.5rem)',
                color: '#e8e4e0',
                letterSpacing: '-0.03em',
              }}
            >
              {t(
                'Open for the right project.',
                'Terbuka untuk proyek yang tepat.',
              )}
            </h2>

            {/* Availability table */}
            <div>
              {availability.map((a, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <span className="text-[13px]" style={{ color: 'rgba(232,228,224,0.56)' }}>
                    {typeof a.role === 'string' ? a.role : a.role[lang]}
                  </span>
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: a.open ? '#e8e4e0' : '#2a2a2a' }}
                    />
                    <span
                      className="font-mono text-[9px] tracking-[0.25em] uppercase"
                      style={{ color: a.open ? 'rgba(232,228,224,0.5)' : '#252525' }}
                    >
                      {typeof a.status === 'string' ? a.status : a.status[lang]}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — contact links */}
          <div className="space-y-0">
            {[
              { platform: 'Email',   handle: 'cahyoprasetyo507@gmail.com', href: 'mailto:cahyoprasetyo507@gmail.com' },
              { platform: 'GitHub',  handle: 'github.com/agungcahyo',      href: 'https://github.com/agungcahyo' },
              { platform: 'YouTube', handle: 'youtube.com/@agungcahyo',    href: 'https://www.youtube.com/@agungcahyo' },
              { platform: 'Medium',  handle: 'medium.com/@agungc',          href: 'https://medium.com/@agungc' },
            ].map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="flex items-baseline justify-between py-5 group block"
                style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none' }}
              >
                <span className="font-mono text-[9px] tracking-[0.3em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.30)' }}>{c.platform}</span>
                <div className="flex items-center gap-3">
                  <span className="text-[13px] transition-colors"
                    style={{ color: 'rgba(232,228,224,0.62)' }}>
                    {c.handle}
                  </span>
                  <svg className="w-3 h-3 transition-transform group-hover:translate-x-1"
                    style={{ color: 'rgba(255,255,255,0.30)' }}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </motion.a>
            ))}

            <div className="pt-8">
              <a
                href="https://medium.com/@agungc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[11px] mb-4 tracking-[0.14em] uppercase"
                style={{ color: 'rgba(255,255,255,0.42)' }}
              >
                {t('Read my writing', 'Baca tulisan saya')}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <Magnetic strength={0.15}>
                <a
                  href="mailto:cahyoprasetyo507@gmail.com"
                  className="inline-flex items-center gap-3 px-8 py-4 font-medium text-[12px] tracking-[0.15em] uppercase transition-opacity hover:opacity-80"
                  style={{ background: '#e8e4e0', color: '#080808' }}
                >
                  {t('Send a Message', 'Kirim Pesan')}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer breadcrumb ── */}
      <div
        className="px-8 lg:px-14 py-5 flex justify-between"
        style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}
      >
        <Link href="/" className="text-[11px] flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {t('Back to Home', 'Kembali ke Beranda')}
        </Link>
        <span className="font-mono text-[10px] font-medium" style={{ color: 'rgba(255,255,255,0.28)' }}>
          04 / {t('About', 'Tentang')}
        </span>
        <Link href="/videographer" className="text-[11px] flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
          {t('View Work', 'Lihat Karya')}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}