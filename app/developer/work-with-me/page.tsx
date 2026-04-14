'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutHeader } from '@/components/ui/LayoutHeader';
import { Magnetic } from '@/components/ui/Magnetic';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { TerminalWidget } from '@/components/ui/TerminalWidget';
import { useLanguage } from '@/lib/languageContext';
import { useActivePanel } from '@/lib/activePanelContext';
import { services, processSteps, faqs, budgetTiers, stats } from '@/data/work-with-me';


export default function WorkWithMePage() {
  const { lang, t } = useLanguage();
  const { setActivePanel } = useActivePanel();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: '',
    email: '',
    business: '',
    projectType: '',
    problem: '',
    goal: '',
    budget: '',
    timeline: '',
  });

  useEffect(() => {
    setActivePanel('developer');
  }, [setActivePanel]);

  const emailHref = useMemo(() => {
    const subject = encodeURIComponent(`Project Brief — ${form.projectType || 'Developer Inquiry'}`);
    const body = encodeURIComponent(
      [
        'Developer Project Brief',
        '',
        `Name: ${form.name || '-'}`,
        `Email: ${form.email || '-'}`,
        `Business / Brand: ${form.business || '-'}`,
        `Project Type: ${form.projectType || '-'}`,
        `Main Problem: ${form.problem || '-'}`,
        `Success Goal: ${form.goal || '-'}`,
        `Budget Range: ${form.budget || '-'}`,
        `Timeline: ${form.timeline || '-'}`,
      ].join('\n')
    );
    return `mailto:cahyoprasetyo507@gmail.com?subject=${subject}&body=${body}`;
  }, [form]);

  const whatsappHref = useMemo(() => {
    const message = encodeURIComponent(
      [
        'Halo, saya mau diskusi project developer.',
        '',
        `Nama: ${form.name || '-'}`,
        `Bisnis: ${form.business || '-'}`,
        `Tipe project: ${form.projectType || '-'}`,
        `Problem utama: ${form.problem || '-'}`,
        `Goal: ${form.goal || '-'}`,
        `Budget: ${form.budget || '-'}`,
        `Timeline: ${form.timeline || '-'}`,
      ].join('\n')
    );
    return `https://wa.me/6281392290571?text=${message}`;
  }, [form]);

  function updateField<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <main
      className="min-h-screen font-['DM_Sans',sans-serif]"
      style={{ background: '#090c10', color: '#b8c8e0' }}
    >
      {/* Grid bg */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(100,130,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,130,200,0.03) 1px, transparent 1px)',
          backgroundSize: '44px 44px',
        }}
      />
      {/* Glow blobs */}
      <div
        className="fixed pointer-events-none z-0"
        style={{
          top: '-120px',
          left: '-120px',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(100,130,200,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="fixed pointer-events-none z-0"
        style={{
          bottom: '-80px',
          right: '-80px',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(52,211,153,0.04) 0%, transparent 70%)',
        }}
      />

      <LayoutHeader theme="terminal" />

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section
        className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16"
        style={{ paddingTop: '130px', paddingBottom: '80px', borderBottom: '1px solid rgba(100,130,200,0.08)' }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8 font-mono" style={{ fontSize: '11px', color: '#3a4860' }}>
              <span style={{ color: '#34d399' }}>▶</span>
              <span style={{ color: '#5a7a50' }}>~/portfolio</span>
              <span>/</span>
              <span style={{ color: '#6a8ab0' }}>work-with-me</span>
            </div>

            <p className="font-mono text-[10px] tracking-[0.28em] uppercase mb-5" style={{ color: '#3a4860' }}>
              — {t('Developer Intake', 'Developer Intake')}
            </p>

            <h1
              className="font-bold leading-[0.90] tracking-tight mb-4"
              style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: '#b8c8e0', letterSpacing: '-0.02em' }}
            >
              {t('Start a', 'Mulai')}{' '}
              <span style={{ color: '#1e2c40' }}>
                {t('developer', 'project')}
              </span>
              <br />
              <span style={{ color: '#1e2c40' }}>
                {t('project', 'developer')}
              </span>
              <span style={{ color: '#34d399' }}>.</span>
            </h1>

            <p className="text-[14px] leading-relaxed mb-8 max-w-md" style={{ color: '#5f7391' }}>
              {t(
                'Share the business problem and constraints first. Then we turn it into a realistic build plan together.',
                'Kirim dulu masalah bisnis dan constraint-nya. Lalu kita ubah bareng jadi build plan yang realistis.'
              )}
            </p>

            {/* Stat strip */}
            <div
              className="grid grid-cols-4 gap-0 overflow-hidden"
              style={{ border: '1px solid rgba(100,130,200,0.12)', borderRadius: '4px' }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="px-4 py-3 text-center"
                  style={{
                    borderRight: i < stats.length - 1 ? '1px solid rgba(100,130,200,0.1)' : 'none',
                    background: i % 2 === 0 ? 'rgba(100,130,200,0.03)' : 'transparent',
                  }}
                >
                  <div className="font-mono text-lg font-bold" style={{ color: '#b8c8e0' }}>{s.n}</div>
                  <div className="text-[9px] tracking-[0.15em] uppercase mt-0.5" style={{ color: '#2a3848' }}>
                    {s.l[lang]}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TerminalWidget />

            {/* Quick badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {['Web Apps', 'SaaS MVP', 'AI Integration', 'Automation', 'React Native'].map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full font-mono text-[10px]"
                  style={{ border: '1px solid rgba(100,130,200,0.12)', color: '#4a5870' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-16" style={{ borderBottom: '1px solid rgba(100,130,200,0.06)' }}>
        <SectionLabel color="#2a3040" isMono>
          {t('// What I Build', '// Apa yang Saya Bangun')}
        </SectionLabel>
        <div className="grid md:grid-cols-3 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="group p-6 rounded-lg relative overflow-hidden"
              style={{
                border: '1px solid rgba(100,130,200,0.1)',
                background: 'rgba(255,255,255,0.01)',
              }}
            >
              {/* Accent line top */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px] transition-all duration-500 group-hover:opacity-100"
                style={{ background: `linear-gradient(to right, transparent, ${service.color}, transparent)`, opacity: 0.3 }}
              />

              <div className="font-mono text-[10px] tracking-[0.2em] uppercase mb-4 flex items-center gap-2" style={{ color: service.color }}>
                <span style={{ opacity: 0.5 }}>01</span>
                <span>{service.key}</span>
              </div>

              <h2 className="text-lg font-semibold mb-3" style={{ color: '#b8c8e0' }}>
                {service.title[lang]}
              </h2>
              <p className="text-[13px] leading-relaxed mb-5" style={{ color: '#5a6a80' }}>
                {service.body[lang]}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded font-mono text-[10px]"
                    style={{ background: 'rgba(100,130,200,0.06)', color: '#4a5a70', border: '1px solid rgba(100,130,200,0.08)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-16" style={{ borderBottom: '1px solid rgba(100,130,200,0.06)' }}>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionLabel color="#2a3040" isMono>{t('// Process', '// Proses')}</SectionLabel>
            <h2
              className="font-['Cormorant_Garamond',serif] text-4xl font-bold leading-[0.95] mb-4"
              style={{ color: '#b8c8e0' }}
            >
              {t('Simple intake,', 'Brief yang simpel,')}<br />
              <span style={{ color: '#36475f' }}>{t('clear next step.', 'next step jelas.')}</span>
            </h2>
            <p className="text-[13px] leading-relaxed" style={{ color: '#4a5a70' }}>
              {t(
                "No long onboarding forms or calls before knowing if we're a good fit.",
                "Tidak ada form panjang atau call dulu sebelum tahu apakah kita cocok."
              )}
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                  className="flex gap-6 py-5"
                  style={{ borderBottom: i < processSteps.length - 1 ? '1px solid rgba(100,130,200,0.06)' : 'none' }}
                >
                  {/* Number */}
                  <div className="flex-shrink-0 pt-0.5">
                    <span className="font-mono text-[10px]" style={{ color: '#2a3848' }}>{step.num}</span>
                  </div>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <h3 className="font-medium text-[15px]" style={{ color: '#b8c8e0' }}>{step.title[lang]}</h3>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded" style={{ background: 'rgba(52,211,153,0.06)', color: '#34d399', border: '1px solid rgba(52,211,153,0.12)' }}>
                        {step.cmd}
                      </span>
                    </div>
                    <p className="text-[13px] leading-relaxed" style={{ color: '#4a5a70' }}>{step.body[lang]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BUDGET ───────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-16" style={{ borderBottom: '1px solid rgba(100,130,200,0.06)' }}>
        <SectionLabel color="#2a3040" isMono>{t('// Budget Guide', '// Panduan Budget')}</SectionLabel>
        <div className="grid md:grid-cols-3 gap-4">
          {budgetTiers.map((tier, i) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="p-6 rounded-lg relative"
              style={{
                border: tier.highlight
                  ? '1px solid rgba(100,130,200,0.3)'
                  : '1px solid rgba(100,130,200,0.1)',
                background: tier.highlight
                  ? 'rgba(100,130,200,0.06)'
                  : 'rgba(255,255,255,0.01)',
              }}
            >
              {tier.highlight && (
                <div
                  className="absolute -top-px left-4 right-4 h-px"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(100,130,200,0.5), transparent)' }}
                />
              )}
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full font-mono text-[9px] tracking-widest"
                  style={{ background: '#090c10', border: '1px solid rgba(100,130,200,0.3)', color: '#7aa0de' }}>
                  POPULAR
                </div>
              )}
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: '#304056' }}>{tier.label}</p>
              <p className="font-['Cormorant_Garamond',serif] text-3xl font-bold mb-2" style={{ color: '#b8c8e0' }}>{tier.price}</p>
              <p className="text-[12px] mb-5" style={{ color: '#4a5a70' }}>{tier.desc[lang]}</p>
              <div className="space-y-2">
                {tier.items[lang].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[12px]" style={{ color: '#5a6a80' }}>
                    <span style={{ color: '#34d399', fontSize: '10px' }}>✓</span>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-[12px] mt-4 text-center font-mono" style={{ color: '#2a3040' }}>
          {t(
            '* These ranges are starting points for discussion, not hard quotes.',
            '* Range ini titik awal diskusi, bukan harga final.'
          )}
        </p>
      </section>

      {/* ── BRIEF FORM ───────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-16" style={{ borderBottom: '1px solid rgba(100,130,200,0.06)' }}>
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left label */}
          <div className="lg:col-span-4">
            <SectionLabel color="#2a3040" isMono>{t('// Project Brief', '// Project Brief')}</SectionLabel>
            <h2
              className="font-['Cormorant_Garamond',serif] text-4xl font-bold leading-[0.95] mb-4"
              style={{ color: '#b8c8e0' }}
            >
              {t('Send the scope,', 'Kirim scope-nya,')}<br />
              <span style={{ color: '#36475f' }}>{t('not just the idea.', 'bukan cuma idenya.')}</span>
            </h2>
            <p className="text-[13px] leading-relaxed mb-8" style={{ color: '#4a5a70' }}>
              {t(
                'Fill this once, then send it by email or WhatsApp. This keeps early discussion structured before we move into proposal mode.',
                'Isi sekali, lalu kirim lewat email atau WhatsApp. Ini bikin diskusi awal tetap terstruktur sebelum masuk ke tahap proposal.'
              )}
            </p>

            {/* Decorative code block */}
            <div
              className="p-4 rounded-lg font-mono text-[11px] leading-relaxed hidden lg:block"
              style={{ background: '#080c10', border: '1px solid rgba(100,130,200,0.12)', color: '#4a5a70' }}
            >
              <div style={{ color: '#2a3848' }}>{'// Response within'}</div>
              <div><span style={{ color: '#34d399' }}>const</span> sla = <span style={{ color: '#7aa0de' }}>"24h"</span>;</div>
              <div style={{ marginTop: '8px', color: '#2a3848' }}>{'// Preferred channels'}</div>
              <div><span style={{ color: '#34d399' }}>const</span> channels = [</div>
              <div className="pl-4"><span style={{ color: '#7aa0de' }}>"email"</span>,</div>
              <div className="pl-4"><span style={{ color: '#7aa0de' }}>"whatsapp"</span></div>
              <div>];</div>
            </div>
          </div>

          {/* Form */}
          <div
            className="lg:col-span-8 rounded-xl p-6 lg:p-8"
            style={{ border: '1px solid rgba(100,130,200,0.14)', background: '#0a0e14' }}
          >
            {/* Form title bar */}
            <div
              className="flex items-center gap-1.5 -mx-6 lg:-mx-8 -mt-6 lg:-mt-8 px-6 lg:px-8 py-3 mb-7"
              style={{ borderBottom: '1px solid rgba(100,130,200,0.1)', background: '#080c10', borderRadius: '12px 12px 0 0' }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: '#ff5f57' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#febc2e' }} />
              <div className="w-2 h-2 rounded-full" style={{ background: '#28c840' }} />
              <span className="ml-auto font-mono text-[9px]" style={{ color: '#2a3848' }}>project-brief.json</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['name', t('Your name', 'Nama kamu'), 'text', t('Agung Cahyo', 'Agung Cahyo')],
                ['email', 'Email', 'email', 'you@example.com'],
                ['business', t('Business / Brand', 'Bisnis / Brand'), 'text', t('Startup, UMKM, etc.', 'Startup, UMKM, dll.')],
                ['projectType', t('Project type', 'Tipe project'), 'text', t('SaaS, Bot, Landing Page...', 'SaaS, Bot, Landing Page...')],
              ].map(([key, label, type, placeholder]) => (
                <label key={key} className="block">
                  <span className="block font-mono text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: '#304056' }}>
                    {label}
                  </span>
                  <input
                    type={type}
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => updateField(key as keyof typeof form, e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md outline-none font-mono text-[13px] transition-colors placeholder:opacity-30"
                    style={{
                      background: '#080c10',
                      border: '1px solid rgba(100,130,200,0.12)',
                      color: '#b8c8e0',
                    }}
                  />
                </label>
              ))}
            </div>

            <div className="grid gap-4 mt-4">
              {[
                ['problem', t('Main problem to solve', 'Masalah utama yang ingin diselesaikan'), t("What's broken or missing right now?", 'Apa yang rusak atau belum ada sekarang?')],
                ['goal', t('What does success look like?', 'Seperti apa hasil yang dianggap sukses?'), t('Describe the outcome, not the feature.', 'Deskripsikan outcome-nya, bukan fitur.')],
              ].map(([key, label, placeholder]) => (
                <label key={key} className="block">
                  <span className="block font-mono text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: '#304056' }}>{label}</span>
                  <textarea
                    rows={3}
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => updateField(key as keyof typeof form, e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md outline-none resize-y font-mono text-[13px] transition-colors placeholder:opacity-30"
                    style={{
                      background: '#080c10',
                      border: '1px solid rgba(100,130,200,0.12)',
                      color: '#b8c8e0',
                    }}
                  />
                </label>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                ['budget', t('Budget range', 'Range budget'), 'Rp10jt – Rp20jt'],
                ['timeline', t('Expected timeline', 'Timeline yang diharapkan'), t('4 weeks, Q2 2025...', '4 minggu, Q2 2025...')],
              ].map(([key, label, placeholder]) => (
                <label key={key} className="block">
                  <span className="block font-mono text-[9px] tracking-[0.2em] uppercase mb-2" style={{ color: '#304056' }}>{label}</span>
                  <input
                    type="text"
                    placeholder={placeholder}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => updateField(key as keyof typeof form, e.target.value)}
                    className="w-full px-4 py-2.5 rounded-md outline-none font-mono text-[13px] placeholder:opacity-30"
                    style={{
                      background: '#080c10',
                      border: '1px solid rgba(100,130,200,0.12)',
                      color: '#b8c8e0',
                    }}
                  />
                </label>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-7 pt-6" style={{ borderTop: '1px solid rgba(100,130,200,0.08)' }}>
              <Magnetic strength={0.2}>
                <a
                  href={emailHref}
                  className="flex items-center gap-2 px-6 py-3 rounded-full font-medium text-[13px] transition-opacity hover:opacity-90"
                  style={{ background: '#b8c8e0', color: '#090c10' }}
                >
                  {t('Send by Email', 'Kirim via Email')}
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full text-[13px] transition-colors"
                  style={{ border: '1px solid rgba(100,130,200,0.18)', color: '#7f93b2' }}
                >
                  {t('Send by WhatsApp', 'Kirim via WhatsApp')}
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-16" style={{ borderBottom: '1px solid rgba(100,130,200,0.06)' }}>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionLabel color="#2a3040" isMono>FAQ</SectionLabel>
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-bold leading-[0.95]" style={{ color: '#b8c8e0' }}>
              {t('Common', 'Pertanyaan')}<br />
              <span style={{ color: '#36475f' }}>{t('questions.', 'umum.')}</span>
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-2">
            {faqs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-lg overflow-hidden"
                style={{ border: '1px solid rgba(100,130,200,0.1)' }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between"
                  style={{ background: openFaq === i ? 'rgba(100,130,200,0.05)' : 'rgba(255,255,255,0.01)' }}
                >
                  <span className="text-[14px] font-medium pr-4" style={{ color: '#b8c8e0' }}>{item.q[lang]}</span>
                  <span
                    className="flex-shrink-0 w-5 h-5 flex items-center justify-center font-mono text-[12px] transition-transform"
                    style={{
                      color: '#4a5a70',
                      transform: openFaq === i ? 'rotate(45deg)' : 'rotate(0deg)',
                      transition: 'transform 0.2s ease',
                    }}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ borderTop: '1px solid rgba(100,130,200,0.08)', background: 'rgba(255,255,255,0.01)' }}
                    >
                      <p className="px-5 py-4 text-[13px] leading-relaxed" style={{ color: '#5a6a80' }}>
                        {item.a[lang]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ────────────────────────────────────────────── */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 py-16">
        <div
          className="rounded-xl p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8"
          style={{ border: '1px solid rgba(100,130,200,0.15)', background: 'rgba(100,130,200,0.03)' }}
        >
          <div>
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase mb-3" style={{ color: '#2a3848' }}>
              {t('// Ready to start?', '// Siap mulai?')}
            </p>
            <h2
              className="font-['Cormorant_Garamond',serif] text-4xl lg:text-5xl font-bold mb-2"
              style={{ color: '#b8c8e0', letterSpacing: '-0.02em' }}
            >
              {t("Let's build something.", 'Yuk bangun sesuatu.')}
            </h2>
            <p className="text-[14px]" style={{ color: '#3a4860' }}>
              {t('Drop a message — no commitment, just a conversation.', 'Kirim pesan dulu — santai, nggak ada ikatan.')}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Magnetic strength={0.2}>
              <a
                href="https://github.com/agungcahyo"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full text-[13px] transition-all"
                style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#4a5870' }}
              >
                GitHub
              </a>
            </Magnetic>
            <Magnetic strength={0.2}>
              <a
                href="mailto:cahyoprasetyo507@gmail.com"
                className="px-7 py-3 rounded-full font-medium text-[13px] transition-opacity hover:opacity-90"
                style={{ background: '#b8c8e0', color: '#090c10' }}
              >
                {t('Email Me', 'Email Saya')}
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      {/* ── FOOTER NAV ───────────────────────────────────────────── */}
      <div
        className="relative z-10 px-8 lg:px-16 py-5 max-w-6xl mx-auto flex justify-between items-center"
        style={{ borderTop: '1px solid rgba(100,130,200,0.06)' }}
      >
        <Link
          href="/developer"
          className="text-[11px] flex items-center gap-2 transition-colors"
          style={{ color: '#314157' }}
        >
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {t('Back to Developer', 'Kembali ke Developer')}
        </Link>
        <span className="font-mono text-[10px]" style={{ color: '#1e2a38' }}>
          work-with-me/
        </span>
        <Link
          href="/about"
          className="text-[11px] flex items-center gap-2 transition-colors"
          style={{ color: '#314157' }}
        >
          {t('About', 'Tentang')}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}