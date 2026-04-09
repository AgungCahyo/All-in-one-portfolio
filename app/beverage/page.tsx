'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Magnetic } from '@/components/ui/Magnetic';
import { SkillBars } from '@/components/ui/SkillBars';
import { JourneyTimeline } from '@/components/ui/JourneyTimeline';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/lib/languageContext';
import {
  creations,
  journey,
  techniques,
  skills,
  philosophy,
  sensoryNotes,
  signatureRecipe,
  heroStats,
} from '@/data/beverage';

export default function BeveragePage() {
  const { lang, t } = useLanguage();

  return (
    <main className="min-h-screen text-amber-50 font-['DM_Sans',sans-serif]" style={{ background: '#0c0906' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center"
        style={{ background: 'rgba(12,9,6,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <Magnetic strength={0.3}>
          <Link href="/" className="flex items-center gap-3 group">
            <svg className="w-3.5 h-3.5" style={{ color: '#3a2a1a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: '#3a2a1a' }}>Portfolio</span>
          </Link>
        </Magnetic>
        <div className="flex items-center gap-7">
          <Magnetic strength={0.2}><Link href="/videographer" className="text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: '#3a2a1a' }}>{t('Videographer', 'Videografer')}</Link></Magnetic>
          <Magnetic strength={0.2}><Link href="/developer" className="text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: '#3a2a1a' }}>{t('Developer', 'Pengembang')}</Link></Magnetic>
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: '#b89878' }}>{t('Beverage', 'Minuman')}</span>
          <div className="ml-2">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ borderBottom: '1px solid rgba(180,130,80,0.08)' }}>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(160,100,40,0.06) 0%, transparent 60%)' }} />

        <div className="relative max-w-6xl mx-auto px-8 lg:px-16" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-stretch">

            {/* Left: Text panel */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}
              className="flex-1 flex flex-col justify-center order-2 lg:order-1 lg:pr-16">
              <div className="flex items-center gap-3 mb-10">
                <div style={{ width: '28px', height: '1px', background: 'rgba(180,130,80,0.3)' }} />
                <span className="text-[10px] tracking-[0.45em] uppercase" style={{ color: '#5a4030' }}>03 / {t('Beverage Craft', 'Seni Minuman')}</span>
                <div style={{ width: '28px', height: '1px', background: 'rgba(180,130,80,0.3)' }} />
              </div>
              <div className="mb-6" style={{ color: 'rgba(180,130,80,0.15)', fontSize: '48px', lineHeight: 1 }}>⚗</div>
              <h1 className="font-['Cormorant_Garamond',serif] font-bold leading-[0.88] tracking-tight mb-6"
                style={{ fontSize: 'clamp(4rem, 9vw, 8rem)', color: '#d0c0b0', letterSpacing: '-0.02em' }}>
                {t('Beverage', 'Peracik')}<br /><em style={{ color: 'rgba(208,192,176,0.2)', fontStyle: 'italic' }}>{t('Crafter', 'Minuman')}</em>
              </h1>
              <div className="flex items-center gap-4 mb-6">
                <div style={{ height: '1px', flex: 1, maxWidth: '60px', background: 'rgba(180,130,80,0.2)' }} />
                <span style={{ color: 'rgba(180,130,80,0.25)', fontSize: '16px' }}>✦</span>
                <div style={{ height: '1px', flex: 1, maxWidth: '60px', background: 'rgba(180,130,80,0.2)' }} />
              </div>
              <p className="text-[15px] leading-relaxed max-w-xs" style={{ color: '#6a5a48' }}>
                {t(
                  'Where precision meets creativity. The same obsession with craft that defines my work in code and cinema began here.',
                  'Di mana presisi bertemu kreativitas. Obsesi yang sama terhadap karya yang mendefinisikan pekerjaan saya di bidang kode dan sinema dimulai di sini.'
                )}
              </p>

              {/* Sensory notes */}
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-wrap gap-2 mt-6">
                {sensoryNotes.map((s, idx) => (
                  <span key={idx} className="flex items-center gap-1.5 px-3 py-1.5 text-[11px]"
                    style={{ border: '1px solid rgba(180,130,80,0.15)', color: '#7a6448', borderRadius: '20px', background: 'rgba(180,130,80,0.04)' }}>
                    <span>{s.icon}</span>{s.note[lang]}
                  </span>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-12 grid grid-cols-2 gap-3" style={{ maxWidth: '320px' }}>
                {heroStats.map((s, idx) => (
                  <div key={idx} className="px-4 py-3" style={{ border: '1px solid rgba(180,130,80,0.12)', background: 'rgba(180,130,80,0.03)', borderRadius: '2px' }}>
                    <div className="font-['Cormorant_Garamond',serif] text-base font-bold" style={{ color: '#d0c0b0' }}>{s.n[lang]}</div>
                    <div className="text-[9px] tracking-[0.2em] uppercase mt-0.5" style={{ color: '#3a2a1a' }}>{s.l[lang]}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Divider line */}
            <div className="hidden lg:block flex-shrink-0" style={{ width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(180,130,80,0.15) 30%, rgba(180,130,80,0.15) 70%, transparent)' }} />

            {/* Right: Photo panel */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.2 }}
              className="relative flex-shrink-0 w-full lg:w-[340px] h-[360px] lg:h-auto order-1 lg:order-2 lg:pl-16" style={{ minHeight: '400px' }}>
              <div className="relative w-full h-full" style={{ minHeight: '400px' }}>
                <div className="absolute top-0 left-0 w-6 h-6 z-10" style={{ borderTop: '1px solid rgba(180,130,80,0.3)', borderLeft: '1px solid rgba(180,130,80,0.3)' }} />
                <div className="absolute top-0 right-0 w-6 h-6 z-10" style={{ borderTop: '1px solid rgba(180,130,80,0.3)', borderRight: '1px solid rgba(180,130,80,0.3)' }} />
                <div className="absolute bottom-0 left-0 w-6 h-6 z-10" style={{ borderBottom: '1px solid rgba(180,130,80,0.3)', borderLeft: '1px solid rgba(180,130,80,0.3)' }} />
                <div className="absolute bottom-0 right-0 w-6 h-6 z-10" style={{ borderBottom: '1px solid rgba(180,130,80,0.3)', borderRight: '1px solid rgba(180,130,80,0.3)' }} />
                <div className="absolute inset-2 overflow-hidden">
                  <Image src="/profile.png" alt="Agung Cahyo Prasetyo" fill className="object-cover object-[50%_20%]"
                    style={{ filter: 'grayscale(15%) sepia(40%) hue-rotate(-5deg) brightness(0.78) contrast(1.05)' }} priority />
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(12,9,6,0.6) 100%)' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 55%, #0c0906 100%)' }} />
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                  <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: 'rgba(208,192,176,0.2)' }}>Agung Cahyo Prasetyo</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionLabel color="#3a2a1a">{t('Philosophy', 'Filosofi')}</SectionLabel>
            <blockquote className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold leading-[1.15] mb-5" style={{ color: '#d0c0b0' }}>
              "{t('Intentionality in every detail.', 'Setiap detail memiliki tujuan.')}"
            </blockquote>
            <p className="text-[14px] leading-relaxed" style={{ color: '#5a4a38' }}>
              {t(
                'My journey started here — in the fast-paced environment of the beverage and hospitality industry. Creating the perfect drink requires exact measurements, timing, and an obsession with customer experience. This same mindset carried into software engineering and filmmaking.',
                'Perjalanan saya dimulai di sini — di lingkungan industri minuman dan perhotelan yang serba cepat. Membuat minuman yang sempurna membutuhkan pengukuran, waktu, dan obsesi terhadap pengalaman pelanggan yang tepat. Pola pikir yang sama ini terbawa ke pengembangan perangkat lunak dan pembuatan film.'
              )}
            </p>
          </div>
          <div className="space-y-3">
            {philosophy.map((item, idx) => (
              <div key={idx} className="p-5 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.05)', background: '#100b06' }}>
                <div className="text-[16px] mb-2 font-mono" style={{ color: '#6a4a30' }}>{item.icon}</div>
                <h4 className="font-medium mb-1 text-[14px]" style={{ color: '#d0c0b0' }}>
                  {typeof item.title === 'string' ? item.title : item.title[lang]}
                </h4>
                <p className="text-[13px] leading-relaxed" style={{ color: '#5a4a38' }}>
                  {typeof item.body === 'string' ? item.body : item.body[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Recipe Card */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(180,130,80,0.08)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#3a2a1a">{t('Signature Recipe', 'Resep Signature')}</SectionLabel>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8">
            {/* Recipe card */}
            <div className="p-8 lg:p-10" style={{ border: '1px solid rgba(180,130,80,0.15)', borderRadius: '4px', background: '#0e0a06' }}>
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: '#3a2a1a' }}>{t('House Specialty', 'Spesialis Rumah')}</div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-bold" style={{ color: '#d0c0b0' }}>{signatureRecipe.name[lang]}</h3>
                  <p className="text-[12px] mt-1" style={{ color: '#5a4030' }}>{signatureRecipe.subtitle[lang]}</p>
                </div>
                <span style={{ color: 'rgba(180,130,80,0.2)', fontSize: '32px', lineHeight: 1 }}>⚗</span>
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div style={{ flex: 1, height: '1px', background: 'rgba(180,130,80,0.12)' }} />
                <span style={{ color: 'rgba(180,130,80,0.2)', fontSize: '10px' }}>✦</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(180,130,80,0.12)' }} />
              </div>
              <div className="space-y-2.5 mb-8">
                {signatureRecipe.ingredients.map((ing, idx) => (
                  <div key={idx} className="flex items-baseline justify-between">
                    <span className="text-[13px]" style={{ color: '#6a5a48' }}>{ing.item[lang]}</span>
                    <span className="text-[11px] font-mono" style={{ color: '#3a2a1a' }}>{ing.amount}</span>
                  </div>
                ))}
              </div>
              <div className="pt-5" style={{ borderTop: '1px solid rgba(180,130,80,0.08)' }}>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: '#3a2a1a' }}>{t('Method', 'Metode')}</p>
                <p className="text-[12px] italic leading-relaxed" style={{ color: '#4a3a28' }}>{signatureRecipe.method[lang]}</p>
              </div>
            </div>

            {/* Flavor profile */}
            <div className="flex flex-col gap-6">
              <div className="p-7" style={{ border: '1px solid rgba(180,130,80,0.1)', borderRadius: '4px', background: '#0e0a06' }}>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: '#3a2a1a' }}>{t('Tasting Notes', 'Catatan Rasa')}</p>
                <div className="space-y-3">
                  {[{ label: t('Aroma', 'Aroma'), value: signatureRecipe.aroma[lang] }, { label: t('Palate', 'Rasa'), value: signatureRecipe.taste[lang] }].map((note) => (
                    <div key={note.label}>
                      <div className="flex items-center gap-2 mb-1">
                        <span style={{ color: 'rgba(180,130,80,0.4)', fontSize: '12px' }}>◈</span>
                        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#3a2a1a' }}>{note.label}</span>
                      </div>
                      <p className="text-[13px] leading-relaxed pl-5" style={{ color: '#6a5a48' }}>{note.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-7" style={{ border: '1px solid rgba(180,130,80,0.1)', borderRadius: '4px', background: '#0e0a06' }}>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: '#3a2a1a' }}>{t('Flavor Profile', 'Profil Rasa')}</p>
                <div className="space-y-3">
                  {Object.entries(signatureRecipe.profile).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: '#4a3a28' }}>
                          {t(key.charAt(0).toUpperCase() + key.slice(1), 
                            key === 'sweetness' ? 'Manis' : 
                            key === 'acidity' ? 'Asam' : 
                            key === 'bitterness' ? 'Pahit' : 'Body'
                          )}
                        </span>
                        <span className="text-[10px] font-mono" style={{ color: '#3a2a1a' }}>{value}%</span>
                      </div>
                      <div className="h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(180,130,80,0.08)' }}>
                        <motion.div initial={{ width: 0 }} whileInView={{ width: `${value}%` }} viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }} className="h-full rounded-full"
                          style={{ background: 'linear-gradient(to right, rgba(180,130,80,0.4), rgba(200,160,100,0.6))' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(180,130,80,0.08)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <SectionLabel color="#3a2a1a" className="mb-0">{t('5+ Years of Craft', '5+ Tahun Berkarya')}</SectionLabel>
            <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#2a1a0a' }}>2019 — {t('Present', 'Sekarang')}</p>
          </div>
          <JourneyTimeline
            items={journey}
            lineColor="linear-gradient(to bottom, transparent, rgba(180,130,80,0.15) 10%, rgba(180,130,80,0.15) 90%, transparent)"
            dotColor="rgba(180,130,80,0.35)"
            dotGlowColor="rgba(180,130,80,0.08)"
            yearColor="rgba(180,130,80,0.4)"
            phaseColor="#3a2a1a"
            titleColor="#d0c0b0"
            bodyColor="#5a4a38"
            dividerColor="rgba(180,130,80,0.06)"
            yearWidth="72px"
          />
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#3a2a1a">{t('Core Expertise', 'Keahlian Utama')}</SectionLabel>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx}>
                <p className="text-[10px] uppercase tracking-widest mb-4 font-medium" style={{ color: '#3a2a1a' }}>
                  {typeof skillGroup.category === 'string' ? skillGroup.category : skillGroup.category[lang]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item, i) => (
                    <span key={i} className="px-3 py-1.5 rounded-lg text-[12px]"
                      style={{ border: '1px solid rgba(180,130,80,0.1)', color: '#6a5a48', background: 'rgba(180,130,80,0.03)' }}>
                      {typeof item === 'string' ? item : item[lang]}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technique Mastery */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(180,130,80,0.06)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#3a2a1a">{t('Technique Mastery', 'Penguasaan Teknik')}</SectionLabel>
          <SkillBars
            skills={techniques}
            barColor="linear-gradient(to right, rgba(180,130,80,0.3), rgba(210,170,110,0.55))"
            barBg="rgba(180,130,80,0.07)"
            nameColor="#b0a090"
            descColor="#3a2a1a"
            percentColor="rgba(180,130,80,0.35)"
            showDesc
          />
        </div>
      </section>

      {/* Selected Work */}
      <section className="px-8 lg:px-16 py-14">
        <div className="max-w-6xl mx-auto">
          <SectionLabel color="#3a2a1a">{t('Selected Work', 'Karya Terpilih')}</SectionLabel>
          <div className="space-y-5">
            {creations.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.05)', background: '#100b06' }}>
                <div className="w-full" style={{ background: '#0a0704', aspectRatio: '16/7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="text-center">
                    <div style={{ color: 'rgba(180,130,80,0.1)', fontSize: '36px', marginBottom: '8px' }}>
                      {c.type.en === 'Menu Development' ? '📋' : c.type.en === 'Recipe Development' ? '🧪' : c.type.en === 'Craft Technique' ? '⚗' : '📂'}
                    </div>
                    <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#2a1a0a' }}>
                      {typeof c.type === 'string' ? c.type : c.type[lang]}
                    </p>
                  </div>
                </div>
                <div className="p-7 lg:p-9">
                  <div className="mb-4">
                    <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: '#3a2a1a' }}>
                      {typeof c.type === 'string' ? c.type : c.type[lang]}
                    </span>
                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl lg:text-3xl font-bold mt-2" style={{ color: '#d0c0b0' }}>
                      {typeof c.title === 'string' ? c.title : c.title[lang]}
                    </h3>
                    <p className="text-[13px] mt-1" style={{ color: '#4a3a28' }}>
                      {typeof c.subtitle === 'string' ? c.subtitle : c.subtitle[lang]}
                    </p>
                  </div>
                  <p className="text-[14px] leading-relaxed mb-5 max-w-2xl" style={{ color: '#4a3a28' }}>
                    {typeof c.description === 'string' ? c.description : c.description[lang]}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {c.tags.map((t, ti) => (
                      <span key={ti} className="px-3 py-1 text-[11px] rounded-full" style={{ border: '1px solid rgba(255,255,255,0.05)', color: '#4a3a28' }}>{t}</span>
                    ))}
                  </div>
                  <div className="p-4 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.04)', background: '#0a0704' }}>
                    <p className="text-[13px] leading-relaxed italic" style={{ color: '#4a3a28' }}>
                      <span className="font-medium not-italic" style={{ color: '#d0c0b0' }}>{t('Insight: ', 'Insight: ')}</span>
                      {typeof c.insight === 'string' ? c.insight : c.insight[lang]}
                    </p>
                  </div>
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
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#d0c0b0' }}>{t("Let's craft something together.", "Mari berkarya bersama.")}</h2>
            <p className="text-[14px]" style={{ color: '#3a2a1a' }}>{t("Whether it's a drink menu or a digital product.", "Seni minuman atau produk digital.")}</p>
          </div>
          <Magnetic strength={0.2}>
            <a href="mailto:cahyoprasetyo507@gmail.com"
              className="px-7 py-3.5 font-medium rounded-full text-[13px] tracking-wide whitespace-nowrap transition-all hover:opacity-90"
              style={{ background: '#d0c0b0', color: '#0c0906' }}>
              {t('Get in Touch', 'Hubungi Saya')}
            </a>
          </Magnetic>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <div className="px-8 py-5 flex justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <Link href="/developer" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#2a1a0a' }}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {t('Prev: Developer', 'Sebelumnya: Developer')}
        </Link>
        <span className="text-[11px] font-medium" style={{ color: '#2a1a0a' }}>03 / {t('Beverage', 'Minuman')}</span>
        <Link href="/" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#2a1a0a' }}>
          {t('Back to Home', 'Kembali ke Beranda')}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}