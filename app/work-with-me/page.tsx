'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { LayoutHeader } from '@/components/ui/LayoutHeader';
import { Magnetic } from '@/components/ui/Magnetic';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { useLanguage } from '@/lib/languageContext';
import { useActivePanel } from '@/lib/activePanelContext';

const services = [
  {
    title: { en: 'Web App Development', id: 'Pengembangan Web App' },
    body: {
      en: 'For SaaS, internal tools, dashboards, and custom business flows that need a solid product foundation.',
      id: 'Untuk SaaS, internal tools, dashboard, dan alur bisnis custom yang butuh fondasi produk yang solid.',
    },
  },
  {
    title: { en: 'AI Integration', id: 'Integrasi AI' },
    body: {
      en: 'For AI features that are useful in production: generation, classification, assistants, and workflow automation.',
      id: 'Untuk fitur AI yang benar-benar berguna di produksi: generation, classification, assistant, dan workflow automation.',
    },
  },
  {
    title: { en: 'Automation Systems', id: 'Sistem Otomasi' },
    body: {
      en: 'For repetitive operational work that should be handled by APIs, webhooks, and orchestration tools like n8n.',
      id: 'Untuk pekerjaan operasional repetitif yang seharusnya ditangani API, webhook, dan orchestration tools seperti n8n.',
    },
  },
];

const processSteps = [
  {
    num: '01',
    title: { en: 'Brief', id: 'Brief' },
    body: {
      en: 'You send the business context, problem, timeline, and budget range.',
      id: 'Kamu kirim konteks bisnis, masalah utama, timeline, dan range budget.',
    },
  },
  {
    num: '02',
    title: { en: 'Scope Review', id: 'Review Scope' },
    body: {
      en: 'I review feasibility, clarify missing details, and identify the fastest version worth building first.',
      id: 'Aku review kelayakan, klarifikasi detail yang kurang, dan cari versi tercepat yang layak dibangun lebih dulu.',
    },
  },
  {
    num: '03',
    title: { en: 'Proposal', id: 'Proposal' },
    body: {
      en: 'You get a practical recommendation: scope, stack, milestones, and next action.',
      id: 'Kamu dapat rekomendasi yang praktis: scope, stack, milestone, dan next action.',
    },
  },
];

const faqs = [
  {
    q: { en: 'What kind of project is the best fit?', id: 'Project seperti apa yang paling cocok?' },
    a: {
      en: 'Best fit: web apps, SaaS MVPs, internal tools, AI-assisted products, and automation-heavy business workflows.',
      id: 'Yang paling cocok: web app, SaaS MVP, internal tools, produk dengan AI assist, dan workflow bisnis yang otomasinya tinggi.',
    },
  },
  {
    q: { en: 'Do you handle design too?', id: 'Apakah desain juga ditangani?' },
    a: {
      en: 'Yes for product-level UI direction and pragmatic execution. For deep brand systems, a dedicated designer may still be better.',
      id: 'Iya untuk arah UI level produk dan eksekusi pragmatis. Untuk brand system yang sangat dalam, designer khusus tetap bisa lebih ideal.',
    },
  },
  {
    q: { en: 'Can we start small first?', id: 'Bisa mulai dari scope kecil dulu?' },
    a: {
      en: 'Yes. In many cases, starting from an MVP or one automation flow is the safest and fastest option.',
      id: 'Bisa. Dalam banyak kasus, mulai dari MVP atau satu automation flow justru opsi paling aman dan cepat.',
    },
  },
];

export default function WorkWithMePage() {
  const { lang, t } = useLanguage();
  const { setActivePanel } = useActivePanel();

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
    const subject = encodeURIComponent(`Project Brief - ${form.projectType || 'Developer Inquiry'}`);
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

  function updateField<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <main className="min-h-screen text-slate-100 font-['DM_Sans',sans-serif]" style={{ background: '#090c10' }}>
      <LayoutHeader activeRole="developer" theme="terminal" />

      <section className="relative overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div
          className="absolute inset-0"
          style={{
            background: '#090c10',
            backgroundImage:
              'linear-gradient(rgba(100,130,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,130,200,0.03) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 10% 20%, rgba(100,130,200,0.08) 0%, transparent 35%), radial-gradient(circle at 82% 18%, rgba(100,130,200,0.05) 0%, transparent 28%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-8 lg:px-16" style={{ paddingTop: '120px', paddingBottom: '72px' }}>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="font-mono text-[10px] tracking-[0.28em] uppercase mb-5" style={{ color: '#3a4860' }}>
              01 / {t('Work With Me', 'Work With Me')}
            </p>
            <h1
              className="font-bold leading-[0.9] tracking-tight mb-5"
              style={{ fontFamily: "'Courier New', monospace", fontSize: 'clamp(3rem, 7vw, 6rem)', color: '#b8c8e0' }}
            >
              {t('Start a', 'Mulai')}{' '}
              <span style={{ color: '#1e2c40' }}>{t('developer project', 'project developer')}</span>
            </h1>
            <p className="text-[15px] leading-relaxed max-w-2xl" style={{ color: '#5f7391' }}>
              {t(
                'This page is the developer-first entry point. Share the business problem, project type, and constraints first, then we can turn it into a realistic build plan.',
                'Halaman ini adalah entry point developer-first. Kirim dulu masalah bisnis, tipe project, dan constraint-nya, lalu kita ubah jadi build plan yang realistis.'
              )}
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <span className="px-3 py-1.5 rounded-full text-[11px]" style={{ border: '1px solid rgba(100,130,200,0.1)', color: '#6f84a4' }}>
                {t('Web Apps', 'Web Apps')}
              </span>
              <span className="px-3 py-1.5 rounded-full text-[11px]" style={{ border: '1px solid rgba(100,130,200,0.1)', color: '#6f84a4' }}>
                AI Integration
              </span>
              <span className="px-3 py-1.5 rounded-full text-[11px]" style={{ border: '1px solid rgba(100,130,200,0.1)', color: '#6f84a4' }}>
                Automation
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(100,130,200,0.06)' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title.en}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-xl p-6"
              style={{ border: '1px solid rgba(100,130,200,0.1)', background: 'rgba(100,130,200,0.03)' }}
            >
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-3" style={{ color: '#304056' }}>
                {t('Service', 'Layanan')}
              </p>
              <h2 className="text-xl font-semibold mb-3" style={{ color: '#b8c8e0' }}>
                {service.title[lang]}
              </h2>
              <p className="text-[14px] leading-relaxed" style={{ color: '#6a7a90' }}>
                {service.body[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(100,130,200,0.06)' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          <div>
            <SectionLabel color="#2a3040" isMono>{t('Process', 'Proses')}</SectionLabel>
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-bold leading-[0.95]" style={{ color: '#b8c8e0' }}>
              {t('Simple intake,', 'Brief yang simpel,')}<br />
              <span style={{ color: '#36475f' }}>{t('clear next step.', 'next step yang jelas.')}</span>
            </h2>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {processSteps.map((step) => (
              <div key={step.num} className="p-5 rounded-xl" style={{ border: '1px solid rgba(100,130,200,0.1)', background: 'rgba(255,255,255,0.01)' }}>
                <div className="flex gap-5 items-start">
                  <span className="font-mono text-[10px] tracking-[0.22em] uppercase mt-1" style={{ color: '#2d3b52' }}>
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-lg font-medium mb-2" style={{ color: '#b8c8e0' }}>{step.title[lang]}</h3>
                    <p className="text-[14px] leading-relaxed" style={{ color: '#6a7a90' }}>{step.body[lang]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(100,130,200,0.06)' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          <div>
            <SectionLabel color="#2a3040" isMono>{t('Budget Guide', 'Panduan Budget')}</SectionLabel>
            <p className="text-[14px] leading-relaxed max-w-sm" style={{ color: '#6a7a90' }}>
              {t(
                'These ranges are only a starting point for discussion, not a hard quote.',
                'Range ini hanya titik awal diskusi, bukan harga final.'
              )}
            </p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-3 gap-4">
            {[
              ['MVP', 'Rp5jt - Rp15jt', t('Landing page, mini app, validation build', 'Landing page, mini app, validation build')],
              ['Growth', 'Rp15jt - Rp35jt', t('SaaS MVP, dashboard, AI feature set', 'SaaS MVP, dashboard, AI feature set')],
              ['Automation', 'Custom', t('Webhook, CRM flow, WhatsApp bot, ops automation', 'Webhook, CRM flow, WhatsApp bot, otomasi operasional')],
            ].map(([label, price, desc]) => (
              <div key={label} className="p-5 rounded-xl" style={{ border: '1px solid rgba(100,130,200,0.1)', background: 'rgba(100,130,200,0.025)' }}>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2" style={{ color: '#304056' }}>{label}</p>
                <p className="text-2xl font-semibold mb-3" style={{ color: '#b8c8e0' }}>{price}</p>
                <p className="text-[13px] leading-relaxed" style={{ color: '#6a7a90' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(100,130,200,0.06)' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4">
            <SectionLabel color="#2a3040" isMono>{t('Project Brief', 'Project Brief')}</SectionLabel>
            <h2 className="font-['Cormorant_Garamond',serif] text-4xl font-bold leading-[0.95] mb-4" style={{ color: '#b8c8e0' }}>
              {t('Send the scope,', 'Kirim scope-nya,')}<br />
              <span style={{ color: '#36475f' }}>{t('not just the idea.', 'bukan cuma idenya.')}</span>
            </h2>
            <p className="text-[14px] leading-relaxed" style={{ color: '#6a7a90' }}>
              {t(
                'Fill this once, then send it by email or WhatsApp. This keeps early discussion structured before we move into proposal mode.',
                'Isi sekali, lalu kirim lewat email atau WhatsApp. Ini bikin diskusi awal tetap terstruktur sebelum masuk ke tahap proposal.'
              )}
            </p>
          </div>

          <div className="lg:col-span-8 rounded-2xl p-6 lg:p-7" style={{ border: '1px solid rgba(100,130,200,0.12)', background: '#0d1018' }}>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                ['name', t('Your name', 'Nama kamu'), 'text'],
                ['email', 'Email', 'email'],
                ['business', t('Business / Brand', 'Bisnis / Brand'), 'text'],
                ['projectType', t('Project type', 'Tipe project'), 'text'],
              ].map(([key, label, type]) => (
                <label key={key} className="block">
                  <span className="block text-[11px] tracking-[0.14em] uppercase mb-2" style={{ color: '#40526a' }}>{label}</span>
                  <input
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => updateField(key as keyof typeof form, e.target.value)}
                    className="w-full px-4 py-3 rounded-lg outline-none"
                    style={{ background: '#090c10', border: '1px solid rgba(100,130,200,0.12)', color: '#b8c8e0' }}
                  />
                </label>
              ))}
            </div>

            <div className="grid gap-4 mt-4">
              {[
                ['problem', t('Main problem to solve', 'Masalah utama yang ingin diselesaikan')],
                ['goal', t('What does success look like?', 'Seperti apa hasil yang dianggap sukses?')],
              ].map(([key, label]) => (
                <label key={key} className="block">
                  <span className="block text-[11px] tracking-[0.14em] uppercase mb-2" style={{ color: '#40526a' }}>{label}</span>
                  <textarea
                    rows={4}
                    value={form[key as keyof typeof form]}
                    onChange={(e) => updateField(key as keyof typeof form, e.target.value)}
                    className="w-full px-4 py-3 rounded-lg outline-none resize-y"
                    style={{ background: '#090c10', border: '1px solid rgba(100,130,200,0.12)', color: '#b8c8e0' }}
                  />
                </label>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {[
                ['budget', t('Budget range', 'Range budget')],
                ['timeline', t('Expected timeline', 'Timeline yang diharapkan')],
              ].map(([key, label]) => (
                <label key={key} className="block">
                  <span className="block text-[11px] tracking-[0.14em] uppercase mb-2" style={{ color: '#40526a' }}>{label}</span>
                  <input
                    type="text"
                    value={form[key as keyof typeof form]}
                    onChange={(e) => updateField(key as keyof typeof form, e.target.value)}
                    className="w-full px-4 py-3 rounded-lg outline-none"
                    style={{ background: '#090c10', border: '1px solid rgba(100,130,200,0.12)', color: '#b8c8e0' }}
                  />
                </label>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              <Magnetic strength={0.2}>
                <a
                  href={emailHref}
                  className="px-6 py-3 rounded-full text-[13px] font-medium transition-opacity hover:opacity-90"
                  style={{ background: '#b8c8e0', color: '#090c10' }}
                >
                  {t('Send by Email', 'Kirim lewat Email')}
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full text-[13px]"
                  style={{ border: '1px solid rgba(100,130,200,0.12)', color: '#7f93b2' }}
                >
                  {t('Send by WhatsApp', 'Kirim lewat WhatsApp')}
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(100,130,200,0.06)' }}>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
          <div>
            <SectionLabel color="#2a3040" isMono>FAQ</SectionLabel>
          </div>
          <div className="lg:col-span-2 space-y-4">
            {faqs.map((item) => (
              <div key={item.q.en} className="p-5 rounded-xl" style={{ border: '1px solid rgba(100,130,200,0.1)', background: 'rgba(255,255,255,0.01)' }}>
                <h3 className="text-[16px] font-medium mb-2" style={{ color: '#b8c8e0' }}>{item.q[lang]}</h3>
                <p className="text-[14px] leading-relaxed" style={{ color: '#6a7a90' }}>{item.a[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-8 py-5 flex justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <Link href="/developer" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#314157' }}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          {t('Back to Developer', 'Kembali ke Developer')}
        </Link>
        <span className="text-[11px] font-medium" style={{ color: '#314157' }}>
          {t('Developer Funnel', 'Developer Funnel')}
        </span>
        <Link href="/about" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#314157' }}>
          {t('About', 'Tentang')}
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
