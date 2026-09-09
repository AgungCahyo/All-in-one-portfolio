'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { SkillBars } from '@/components/ui/SkillBars';
import { JourneyTimeline } from '@/components/ui/JourneyTimeline';
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
  heroStats,
} from '@/data/beverage';

const EVERGREEN = '#1f6e52';
const EVERGREEN_SOFT = '#e4efe9';
const AMBER = '#e8a23d';
const AMBER_INK = '#9c5f12';
const AMBER_SOFT = '#fbebd2';
const INK = '#24211b';
const INK_SOFT = '#6b6357';
const BORDER = 'rgba(36,33,27,0.12)';

type Tone = 'evergreen' | 'amber';

function toneColors(tone: Tone) {
  return tone === 'evergreen'
    ? { fg: EVERGREEN, soft: EVERGREEN_SOFT }
    : { fg: AMBER_INK, soft: AMBER_SOFT };
}

/** Sentence-case pill label — replaces the tracked-out ALL-CAPS eyebrow
 * pattern with a small colored chip that still reads as a section marker. */
function SectionTag({ children, tone = 'evergreen' }: { children: React.ReactNode; tone?: Tone }) {
  const c = toneColors(tone);
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium mb-6"
      style={{ background: c.soft, color: c.fg }}
    >
      {children}
    </span>
  );
}

export default function LeadershipPage() {
  const { lang, t } = useLanguage();
  const { setActivePanel } = useActivePanel();

  useEffect(() => {
    setActivePanel('leadership');
  }, [setActivePanel]);

  return (
    <main
      className="min-h-screen leadership-page font-body"
      style={{ background: 'var(--lp-bg)', color: INK }}
    >
      <LayoutHeader activeRole="leadership" theme="leadership" />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden leadership-section-bg" style={{ borderBottom: `1px solid ${BORDER}` }}>
        {/* soft decorative wash, kept behind everything */}
        <div
          className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(232,162,61,0.16) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-1/3 -left-32 w-[320px] h-[320px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(31,110,82,0.1) 0%, transparent 70%)' }}
        />

        <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-16 pt-[112px] pb-[64px] lg:pt-[152px] lg:pb-[96px]">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-16 items-center">
            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1 order-2 lg:order-1"
            >
              <SectionTag tone="amber">{t('Team Coordinator', 'Koordinator Tim')}</SectionTag>

              <div className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-3 -top-8 select-none pointer-events-none font-display"
                  style={{ fontSize: '5.5rem', color: AMBER, opacity: 0.35, lineHeight: 1 }}
                >
                  &ldquo;
                </span>
                <h1
                  className="font-display font-semibold relative"
                  style={{
                    color: INK,
                    fontSize: 'clamp(2.4rem, 4.6vw, 3.75rem)',
                    lineHeight: 1.14,
                    letterSpacing: '-0.02em',
                    maxWidth: '17ch',
                    textWrap: 'pretty',
                  }}
                >
                  {t(
                    'Leadership is making the next person able to run the station without you standing over them.',
                    'Leadership adalah membuat orang berikutnya bisa menjalankan station tanpa harus diawasi terus.',
                  )}
                </h1>
              </div>

              <p className="text-[16px] leading-relaxed max-w-md mt-6" style={{ color: INK_SOFT }}>
                {t(
                  'Coordinating beverage teams, training new staff, and keeping operations moving when volume spikes. Craft is the context — leadership is the work.',
                  'Mengkoordinasikan tim minuman, melatih staf baru, dan menjaga operasional tetap jalan saat volume naik. Craft adalah konteksnya — leadership adalah kerjanya.'
                )}
              </p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="flex flex-wrap gap-3 mt-9"
              >
                {heroStats.map((s, i) => (
                  <div
                    key={i}
                    className="px-4 py-2.5 rounded-xl"
                    style={{ border: `1px solid ${BORDER}`, background: 'var(--lp-surface)' }}
                  >
                    <div className="text-[13px] font-semibold" style={{ color: INK }}>
                      {typeof s.n === 'string' ? s.n : s.n[lang]}
                    </div>
                    <div className="text-[11px] mt-0.5" style={{ color: INK_SOFT }}>
                      {typeof s.l === 'string' ? s.l : s.l[lang]}
                    </div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right: portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative shrink-0 w-full max-w-[280px] lg:w-[300px] order-1 lg:order-2"
            >
              <div
                className="relative w-full aspect-[4/5] rounded-[28px] overflow-hidden"
                style={{ boxShadow: '0 24px 48px -20px rgba(36,33,27,0.28)', border: '1px solid rgba(36,33,27,0.08)' }}
              >
                <Image
                  src="/profile.png"
                  alt="Agung Cahyo Prasetyo"
                  fill
                  className="object-cover object-[50%_20%]"
                  style={{ filter: 'grayscale(6%) sepia(22%) hue-rotate(-6deg) saturate(1.15) brightness(1.02)' }}
                  priority
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(36,25,12,0.28) 0%, transparent 45%)' }} />
              </div>
              {/* sticker badge — playful, not a military corner bracket */}
              <div
                className="absolute -bottom-4 -left-4 px-4 py-2.5 rounded-2xl"
                style={{
                  background: EVERGREEN,
                  color: '#fdfaf3',
                  transform: 'rotate(-4deg)',
                  boxShadow: '0 12px 24px -10px rgba(31,110,82,0.5)',
                }}
              >
                <p className="text-[11px] font-medium tracking-wide">Agung Cahyo Prasetyo</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── THE SYSTEM (a real sequence — People → Systems → Execution → Outcome) ── */}
      <section className="px-6 sm:px-8 lg:px-16 py-16 lg:py-20 leadership-divider">
        <div className="max-w-6xl mx-auto">
          <SectionTag tone="evergreen">{t('The system', 'Sistem')}</SectionTag>

          <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 mt-4">
            {/* connector line, desktop only — dashed, hand-drawn feel
                instead of a flat corporate ruler line */}
            <svg
              className="hidden lg:block absolute top-[26px] left-[12.5%] right-[12.5%] w-[75%] h-px overflow-visible"
              aria-hidden="true"
            >
              <line x1="0" y1="0.5" x2="100%" y2="0.5" stroke={BORDER} strokeWidth="1.5" strokeDasharray="1.5 6" strokeLinecap="round" />
            </svg>
            {philosophy.map((stage, index) => {
              const tone: Tone = index % 2 === 0 ? 'evergreen' : 'amber';
              const c = toneColors(tone);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="leadership-card rounded-[22px] p-5"
                  style={{ border: `1px solid ${BORDER}`, ['--tilt' as any]: index % 2 === 0 ? '-0.5deg' : '0.5deg' }}
                >
                  {/* blob badge — an irregular squircle instead of the
                      generic "icon in a perfect circle" pattern */}
                  <div
                    className="relative z-10 flex h-10 w-10 items-center justify-center text-[15px] font-semibold mb-4"
                    style={{ color: c.fg, background: c.soft, borderRadius: '38% 62% 58% 42% / 55% 42% 58% 45%' }}
                  >
                    {stage.icon}
                  </div>
                  <p className="text-[11px] font-medium mb-1.5" style={{ color: c.fg }}>
                    {t(`Step ${index + 1}`, `Tahap ${index + 1}`)}
                  </p>
                  <h3 className="mb-1.5 text-[17px] font-display font-semibold" style={{ color: INK }}>
                    {(stage.title as any)[lang]}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: INK_SOFT }}>
                    {(stage.body as any)[lang]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── HOW I LEAD (not a sequence — three distinct practices) ── */}
      <section className="px-6 sm:px-8 lg:px-16 py-16 lg:py-20 leadership-divider" style={{ background: 'var(--lp-tint)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionTag tone="amber">{t('How I lead', 'Cara saya memimpin')}</SectionTag>

          <div className="grid md:grid-cols-3 gap-6 mt-2">
            {leadershipPractices.map((practice, idx) => {
              const tone: Tone = idx === 1 ? 'amber' : 'evergreen';
              const c = toneColors(tone);
              const tilt = idx === 0 ? '-1.4deg' : idx === 1 ? '1deg' : '-0.6deg';
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="leadership-note relative p-6 rounded-2xl"
                  style={{
                    background: 'var(--lp-surface)',
                    border: `1px solid ${BORDER}`,
                    transform: `rotate(${idx === 1 ? '0.6deg' : idx === 0 ? '-0.8deg' : '0.3deg'})`,
                    ['--tilt' as any]: tilt,
                  }}
                >
                  <div
                    className="absolute top-0 left-6 right-6 h-1 rounded-full -translate-y-1/2"
                    style={{ background: c.fg }}
                  />
                  <h3 className="font-display text-[21px] font-semibold mb-2.5" style={{ color: INK }}>
                    {practice.title[lang]}
                  </h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: INK_SOFT }}>
                    {practice.body[lang]}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROOF ── */}
      <section className="px-6 sm:px-8 lg:px-16 py-16 lg:py-20 leadership-divider">
        <div className="max-w-6xl mx-auto">
          <SectionTag tone="evergreen">{t('Proof', 'Bukti')}</SectionTag>

          <div className="space-y-5">
            {/* Primary case study */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="leadership-card rounded-[24px] overflow-visible p-7 lg:p-8 mt-3"
              style={{ border: `1px solid ${BORDER}`, ['--tilt' as any]: '-0.3deg' }}
            >
              <span className="leadership-corner-tag" style={{ background: EVERGREEN, color: '#fdfaf3' }}>
                {t('Primary case', 'Studi utama')}
              </span>
              <h3 className="mb-2 text-[22px] font-display font-semibold" style={{ color: INK }}>
                {creations[0].title[lang]}
              </h3>
              <p className="mb-3 text-[14px] font-medium" style={{ color: EVERGREEN }}>
                {creations[0].subtitle[lang]}
              </p>
              <p className="text-[14px] leading-relaxed max-w-2xl" style={{ color: INK_SOFT }}>
                {creations[0].description[lang]}
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {creations[0].tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="px-3 py-1 text-[12px] rounded-full"
                    style={{ background: EVERGREEN_SOFT, color: EVERGREEN }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 p-4 rounded-xl" style={{ background: AMBER_SOFT }}>
                <p className="text-[13px] leading-relaxed" style={{ color: '#6b4a12' }}>
                  <span className="font-semibold" style={{ color: AMBER_INK }}>{t('Insight: ', 'Insight: ')}</span>
                  {creations[0].insight[lang]}
                </p>
              </div>
            </motion.div>

            {/* Supporting case studies */}
            <div className="grid md:grid-cols-2 gap-6 mt-3">
              {creations.slice(1).map((c, i) => {
                const tone: Tone = i % 2 === 0 ? 'amber' : 'evergreen';
                const tc = toneColors(tone);
                return (
                  <motion.div
                    key={i + 1}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i + 1) * 0.06 }}
                    className="leadership-card rounded-[22px] overflow-visible p-6"
                    style={{ border: `1px solid ${BORDER}`, ['--tilt' as any]: i % 2 === 0 ? '0.4deg' : '-0.4deg' }}
                  >
                    <span className="leadership-corner-tag" style={{ background: tc.fg, color: tone === 'amber' ? '#fdfaf3' : '#fdfaf3' }}>
                      {c.subtitle[lang]}
                    </span>
                    <h3 className="mb-2 mt-2 text-[18px] font-display font-semibold" style={{ color: INK }}>
                      {c.title[lang]}
                    </h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: INK_SOFT }}>
                      {c.description[lang]}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {c.tags.map((tag, ti) => (
                        <span
                          key={ti}
                          className="px-2.5 py-0.5 text-[11px] rounded-full"
                          style={{ background: tc.soft, color: tc.fg }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 p-3 rounded-xl" style={{ background: 'var(--lp-tint)' }}>
                      <p className="text-[12.5px] leading-relaxed" style={{ color: INK_SOFT }}>
                        <span className="font-semibold" style={{ color: INK }}>{t('Insight: ', 'Insight: ')}</span>
                        {c.insight[lang]}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY ── */}
      <section className="px-6 sm:px-8 lg:px-16 py-16 lg:py-20 leadership-divider" style={{ background: 'var(--lp-tint)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
            <SectionTag tone="evergreen">{t('From floor to coordinator', 'Dari Lantai ke Koordinator')}</SectionTag>
            <p className="text-[13px] font-medium" style={{ color: INK_SOFT }}>
              2019 — {t('Present', 'Sekarang')}
            </p>
          </div>
          <JourneyTimeline
            items={journey}
            lineColor="linear-gradient(to bottom, transparent, rgba(31,110,82,0.2) 10%, rgba(31,110,82,0.2) 90%, transparent)"
            dotColor={EVERGREEN}
            dotGlowColor="rgba(31,110,82,0.14)"
            yearColor={EVERGREEN}
            phaseColor={AMBER_INK}
            titleColor={INK}
            bodyColor={INK_SOFT}
            dividerColor={BORDER}
            yearWidth="80px"
          />
        </div>
      </section>

      {/* ── CAPABILITY ── */}
      <section className="px-6 sm:px-8 lg:px-16 py-16 lg:py-20 leadership-divider">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Skills */}
          <div>
            <SectionTag tone="amber">{t('Core expertise', 'Keahlian Utama')}</SectionTag>
            <div className="grid sm:grid-cols-2 gap-5 mt-2">
              {skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <p className="text-[12px] font-semibold mb-2.5" style={{ color: INK }}>
                    {typeof skillGroup.category === 'string' ? skillGroup.category : skillGroup.category[lang]}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {skillGroup.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full text-[12px]"
                        style={{ background: idx % 2 === 0 ? EVERGREEN_SOFT : AMBER_SOFT, color: idx % 2 === 0 ? EVERGREEN : AMBER_INK }}
                      >
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
            <SectionTag tone="evergreen">{t('Leadership range', 'Rentang Leadership')}</SectionTag>
            <div className="mt-2">
              <SkillBars
                skills={techniques}
                barColor={`linear-gradient(to right, ${AMBER}, ${EVERGREEN})`}
                barBg="rgba(36,33,27,0.06)"
                nameColor={INK}
                descColor={INK_SOFT}
                percentColor={INK_SOFT}
                showDesc
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 sm:px-8 lg:px-16 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto relative">
          {/* Offset paper layer peeking out behind — same "stacked paper"
              trick as the tilted sticky notes, so the CTA doesn't read as
              a bolted-on gradient banner. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-[18px_36px_18px_36px]"
            style={{ background: AMBER_SOFT, transform: 'rotate(-1.4deg) translate(6px, 8px)' }}
          />

          <div
            className="relative  rounded-[36px_18px_36px_18px] p-8 lg:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8"
            style={{ background: EVERGREEN, color: '#fdfaf3' }}
          >
            {/* grain, reused from the hero, instead of a diagonal gradient */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                opacity: 0.05,
                mixBlendMode: 'overlay',
              }}
            />
            {/* decorative quote mark, echoing the hero — ties the CTA back
                to the top of the page instead of feeling like a separate
                template block */}
            <span
              aria-hidden="true"
              className="absolute -right-2 -bottom-8 select-none pointer-events-none font-display"
              style={{ fontSize: '9rem', color: AMBER, opacity: 0.14, lineHeight: 1 }}
            >
              &rdquo;
            </span>

            {/* rotated stamp-style chip, same sticker language as the hero
                portrait badge */}
            <div
              className="absolute -top-3 left-8 px-3 py-1 rounded-lg text-[10.5px] font-semibold"
              style={{ background: AMBER, color: '#241a09', transform: 'rotate(-4deg)', boxShadow: '0 8px 16px -8px rgba(0,0,0,0.35)' }}
            >
              {t('Open to work', 'Terbuka untuk kerja sama')}
            </div>

            <div className="relative">
              <h2 className="font-display text-3xl lg:text-4xl font-semibold mb-3" style={{ letterSpacing: '-0.01em' }}>
                {t("Let's build a team that runs itself.", "Yuk bangun tim yang bisa jalan sendiri.")}
              </h2>
              <p className="text-[15px] leading-relaxed max-w-md" style={{ color: 'rgba(253,250,243,0.82)' }}>
                {t("Training systems, operations, or a product that needs the same ownership.", "Sistem pelatihan, operasional, atau produk yang butuh ownership yang sama.")}
              </p>
            </div>
            <a
              href="mailto:cahyoprasetyo507@gmail.com"
              className="relative inline-flex items-center gap-2 px-7 py-3.5 font-semibold rounded-full text-[14px] whitespace-nowrap transition-transform duration-300 hover:-translate-y-0.5 hover:rotate-[-1.5deg]"
              style={{ background: AMBER, color: '#241a09' }}
            >
              {t('Get in touch', 'Get in touch')}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER NAV ── */}
      <div className="px-6 sm:px-8 py-6 flex justify-between items-center" style={{ borderTop: `1px solid ${BORDER}` }}>
        <Link href="/videographer" className="text-[13px] flex items-center gap-2 font-medium transition-colors" style={{ color: INK_SOFT }}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {t('Prev: Videographer', 'Sebelumnya: Videografer')}
        </Link>
        <span className="text-[12px] font-medium" style={{ color: INK_SOFT }}>03 / {t('Leadership', 'Leadership')}</span>
        <Link href="/" className="text-[13px] flex items-center gap-2 font-medium transition-colors" style={{ color: EVERGREEN }}>
          {t('Back to home', 'Kembali ke Beranda')}
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}