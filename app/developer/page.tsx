'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'SkripIn',
    subtitle: 'AI Script Generator SaaS',
    type: 'Web Application',
    year: '2024',
    status: 'Production',
    description: 'Production-ready AI script generator built from scratch. Features a 4-Agent AI workflow (Strategist → Director → Writer → Reviewer), Brand Voice system, OpenAI TTS, Teleprompter mode, and Midtrans payment integration. Engineered with 84 automated tests and 90%+ coverage.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Google Gemini', 'OpenAI TTS', 'Jest', 'PostgreSQL', 'Firebase', 'Midtrans'],
    links: [
      { label: 'Live App', href: 'https://skripin.vercel.app' },
    ],
    highlights: ['84 automated tests', '90%+ test coverage', '4-Agent AI workflow', 'TTS + Teleprompter'],
  },
  {
    title: 'MBTI Compatibility Test',
    subtitle: 'AI-Powered Relationship Analyzer',
    type: 'Web Application',
    year: '2024',
    status: 'Live',
    description: 'Multi-dimensional MBTI compatibility analyzer with AI-generated relationship insights. Features freemium model with Midtrans payment, WhatsApp result delivery via n8n automation, and dual-person test flow. Sophisticated scoring algorithm across communication styles, conflict resolution, and love languages.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Zustand', 'Redis', 'Midtrans', 'n8n'],
    links: [
      { label: 'Live Site', href: 'https://tes-kecocokan.vercel.app/' },
    ],
    highlights: ['16 MBTI types', 'Freemium monetization', 'WhatsApp delivery', 'AI-generated insights'],
  },
  {
    title: 'WhatsApp AI Chatbot',
    subtitle: 'Intelligent Customer Service Bot',
    type: 'Automation',
    year: '2024',
    status: 'Live',
    description: 'Production-ready WhatsApp AI chatbot with advanced speech-to-text for voice notes, Google Gemini AI agent with custom personality, and per-user chat memory. Includes rate limiting, user tracking via Google Sheets, and multi-format message handling via n8n workflow automation.',
    tags: ['n8n', 'Google Gemini', 'WhatsApp Business API', 'Google STT', 'Google TTS', 'LangChain', 'Google Sheets API'],
    links: [
      { label: 'Try Demo', href: 'https://wa.me/6281392290571' },
    ],
    highlights: ['20+ n8n nodes', 'Voice note STT', 'Per-user memory', 'Rate limiting'],
  },
  {
    title: 'HPP Calculator',
    subtitle: 'Cost Price Calculation — Mobile App',
    type: 'Mobile App',
    year: '2023',
    status: 'Shipped',
    description: 'Native mobile app for F&B entrepreneurs to calculate Harga Pokok Produksi (HPP). Users manage ingredient inventory, build recipes, and get automatic cost calculations with selling price recommendations, markup, and profit margin analysis. Offline-first with Firebase sync.',
    tags: ['React Native', 'Firebase Auth', 'Firestore', 'Firebase Storage'],
    links: [
      { label: 'Download APK', href: 'https://drive.google.com/file/d/1evGGLMhyrsEbcBGFRzgjBmrKxW4Ce4tR/view?usp=sharing' },
    ],
    highlights: ['Offline-first', 'Auto HPP calculation', 'Margin analysis', 'F&B industry'],
  },
];

const techStack = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'],
  'Backend': ['Node.js', 'PostgreSQL', 'Firebase', 'Prisma ORM', 'Redis'],
  'AI & Automation': ['Google Gemini', 'OpenAI', 'n8n', 'LangChain', 'Jest'],
};

const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  Production: { bg: 'rgba(16,185,129,0.07)', text: '#34d399', border: 'rgba(16,185,129,0.2)' },
  Live: { bg: 'rgba(16,185,129,0.07)', text: '#34d399', border: 'rgba(16,185,129,0.2)' },
  Shipped: { bg: 'rgba(148,163,184,0.07)', text: '#94a3b8', border: 'rgba(148,163,184,0.15)' },
};

const devJourney = [
  {
    year: '2022',
    phase: 'Start',
    title: 'Self-Taught Foundation',
    body: 'Started coding from zero — HTML, CSS, JavaScript, then React. Spent months on freeCodeCamp, The Odin Project, and building small projects. Realized quickly that building real things teaches faster than any course.',
  },
  {
    year: '2023',
    phase: 'Production',
    title: 'First Shipped Apps',
    body: 'Shipped HPP Calculator (React Native + Firebase) for real F&B entrepreneurs — the first app used by actual paying users. Validated that I could take an idea from concept to App Store without a team.',
  },
  {
    year: '2024 Q1',
    phase: 'SaaS',
    title: 'Full-Stack SaaS Architecture',
    body: 'Built MBTI Compatibility Test as a freemium SaaS — Prisma ORM, PostgreSQL, Redis, Midtrans payments, n8n WhatsApp delivery. First experience designing a complete monetization and data architecture.',
  },
  {
    year: '2024 Q2',
    phase: 'AI',
    title: 'AI Engineering & Automation',
    body: 'Integrated Google Gemini and OpenAI into production apps. Built a WhatsApp AI chatbot with voice note STT, per-user memory, and rate limiting. Started treating AI as an engineering primitive, not a gimmick.',
  },
  {
    year: '2024 Q3–Now',
    phase: 'Quality',
    title: 'Test-Driven, Production-Grade',
    body: 'SkripIn: 84 automated tests, 90%+ coverage, 4-Agent AI workflow, OpenAI TTS, teleprompter. Shifted from \"it works\" to \"it\'s engineered\". Production-quality code with CI/CD, error boundaries, and systematic review.',
  },
];

const devSkills = [
  { name: 'React / Next.js', level: 92, cat: 'Frontend' },
  { name: 'TypeScript', level: 88, cat: 'Frontend' },
  { name: 'Node.js / API Design', level: 85, cat: 'Backend' },
  { name: 'PostgreSQL / Prisma', level: 82, cat: 'Backend' },
  { name: 'AI Integration', level: 87, cat: 'AI' },
  { name: 'n8n Automation', level: 90, cat: 'AI' },
  { name: 'Testing (Jest)', level: 85, cat: 'Quality' },
  { name: 'React Native', level: 78, cat: 'Mobile' },
];

export default function DeveloperPage() {
  return (
    <main className="min-h-screen text-slate-100 font-['DM_Sans',sans-serif]" style={{ background: '#090c10' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center"
        style={{ background: 'rgba(9,12,16,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-3.5 h-3.5" style={{ color: '#2a3040' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: '#2a3040' }}>Portfolio</span>
        </Link>
        <div className="flex items-center gap-7">
          <Link href="/videographer" className="text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: '#2a3040' }}>Videographer</Link>
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: '#8a9ab8' }}>Developer</span>
          <Link href="/beverage" className="text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: '#2a3040' }}>Beverage</Link>
        </div>
      </nav>

      {/* Hero — Terminal / Code Aesthetic */}
      <section className="relative overflow-hidden" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>

        {/* Background: dark blue-black with subtle grid */}
        <div className="absolute inset-0" style={{
          background: '#090c10',
          backgroundImage: 'linear-gradient(rgba(100,130,200,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(100,130,200,0.03) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
        {/* Glow orb top-left */}
        <div className="absolute" style={{ top: '-80px', left: '-80px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(100,130,200,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Scanline overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px)',
          opacity: 0.4
        }} />

        <div className="relative max-w-6xl mx-auto px-8 lg:px-16" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start lg:items-end">

            {/* Text side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="flex-1 order-2 lg:order-1"
            >
              {/* Terminal prompt line */}
              <div className="flex items-center gap-2 mb-8 font-mono" style={{ fontSize: '12px', color: '#3a4860' }}>
                <span style={{ color: '#34d399' }}>▶</span>
                <span style={{ color: '#5a7a50' }}>~/portfolio</span>
                <span style={{ color: '#3a4860' }}>$</span>
                <span style={{ color: '#6a8ab0' }}>whoami</span>
              </div>

              {/* Main heading — monospace styled */}
              <h1 className="font-bold leading-[0.90] tracking-tight mb-4"
                style={{ fontFamily: "'Courier New', Courier, monospace", fontSize: 'clamp(3rem, 7vw, 6.5rem)', color: '#b8c8e0', letterSpacing: '-0.02em' }}>
                Full-Stack<span style={{ color: '#2a3a54' }}>();</span><br />
                <span style={{ color: '#1e2c40' }}>Developer</span>
              </h1>

              {/* Blinking cursor */}
              <div className="flex items-center gap-2 mb-8 font-mono" style={{ fontSize: '13px', color: '#3a5070' }}>
                <span></span>
                <span style={{ color: '#6a9ab8' }}>Building robust, AI-integrated web apps</span>
                <span style={{
                  display: 'inline-block', width: '8px', height: '14px',
                  background: '#4a7a9b', verticalAlign: 'middle', marginLeft: '2px',
                  animation: 'blink 1.2s step-end infinite'
                }} />
              </div>

              <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>

              <p className="text-[14px] leading-relaxed max-w-sm" style={{ color: '#3a5070', fontFamily: "'DM Sans', sans-serif" }}>
                Production-quality code with an eye for design — because good software is both functional and beautiful.
              </p>

              {/* Stats — inline code style */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-wrap gap-4 mt-10"
              >
                {[
                  { n: '2022–Now', l: 'Active', key: 'since' },
                  { n: '84', l: 'Tests', key: 'tests' },
                  { n: '90%+', l: 'Coverage', key: 'cov' },
                  { n: '4+', l: 'Apps Shipped', key: 'apps' },
                  { n: '3+', l: 'AI Integrations', key: 'ai' },
                ].map(s => (
                  <div key={s.key} className="px-4 py-2.5" style={{
                    border: '1px solid rgba(100,130,200,0.1)',
                    background: 'rgba(100,130,200,0.04)',
                    borderRadius: '4px',
                    fontFamily: "'Courier New', monospace"
                  }}>
                    <div className="text-lg font-bold" style={{ color: '#b8c8e0' }}>{s.n}</div>
                    <div className="text-[9px] tracking-[0.2em] uppercase mt-0.5" style={{ color: '#2a3848' }}>{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Photo side — with terminal-frame border */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex-shrink-0 w-full lg:w-[280px] h-[300px] lg:h-[380px] order-1 lg:order-2"
            >
              {/* Terminal window bar at top */}
              <div className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3"
                style={{ height: '28px', background: 'rgba(16,24,36,0.95)', borderRadius: '4px 4px 0 0', border: '1px solid rgba(100,130,200,0.12)', borderBottom: 'none' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
                <span className="ml-auto font-mono text-[9px]" style={{ color: '#2a3848' }}>profile.png</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{ top: '28px', border: '1px solid rgba(100,130,200,0.12)', borderRadius: '0 0 4px 4px', borderTop: 'none' }}>
                <Image
                  src="/profile.png"
                  alt="Agung Cahyo Prasetyo"
                  fill
                  className="object-cover object-[50%_25%]"
                  style={{ filter: 'grayscale(20%) brightness(0.8)' }}
                  priority
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, #090c10 100%)' }} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-8 font-medium" style={{ color: '#2a3040' }}>Tech Stack</p>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category}>
                <p className="text-[10px] uppercase tracking-widest mb-4 font-medium" style={{ color: '#2a3040' }}>{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
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
            <p className="text-[10px] tracking-[0.4em] uppercase font-medium font-mono" style={{ color: '#2a3040' }}>Engineering Journey</p>
            <p className="font-mono text-[10px]" style={{ color: '#1a2535' }}>// 2022 — present</p>
          </div>

          <div className="relative">
            <div className="absolute left-[80px] top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(100,130,200,0.12) 10%, rgba(100,130,200,0.12) 90%, transparent)' }} />

            <div className="space-y-10">
              {devJourney.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-8 md:gap-16 items-start"
                >
                  <div className="flex-shrink-0 text-right font-mono" style={{ width: '80px' }}>
                    <div className="text-[10px]" style={{ color: 'rgba(100,130,200,0.4)' }}>{item.year}</div>
                    <div className="text-[8px] tracking-[0.2em] uppercase mt-0.5" style={{ color: '#1a2535' }}>{item.phase}</div>
                  </div>

                  <div className="relative hidden md:flex flex-shrink-0" style={{ width: '0', alignSelf: 'flex-start', marginTop: '5px' }}>
                    <div className="w-2 h-2 rounded-full translate-x-[-4px]" style={{ background: 'rgba(100,130,200,0.3)', boxShadow: '0 0 0 3px rgba(100,130,200,0.06)' }} />
                  </div>

                  <div className="flex-1 pb-8" style={{ borderBottom: i < devJourney.length - 1 ? '1px solid rgba(100,130,200,0.05)' : 'none' }}>
                    <h4 className="font-mono text-[14px] font-bold mb-2" style={{ color: '#b8c8e0' }}>{item.title}</h4>
                    <p className="text-[13px] leading-relaxed" style={{ color: '#3a4860' }}>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skill Proficiency */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(100,130,200,0.06)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-8 font-medium font-mono" style={{ color: '#2a3040' }}>Proficiency</p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-5">
            {devSkills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="flex justify-between items-baseline mb-1.5">
                  <div>
                    <span className="font-mono text-[12px] font-medium" style={{ color: '#7a9ab8' }}>{s.name}</span>
                    <span className="font-mono text-[9px] ml-2" style={{ color: '#1a2535' }}>// {s.cat}</span>
                  </div>
                  <span className="font-mono text-[10px]" style={{ color: 'rgba(100,130,200,0.3)' }}>{s.level}%</span>
                </div>
                <div className="h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(100,130,200,0.07)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.07, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(to right, rgba(100,130,200,0.3), rgba(140,180,240,0.55))' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 lg:px-16 py-14">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-10 font-medium" style={{ color: '#2a3040' }}>Projects</p>

          <div className="space-y-5">
            {projects.map((p, i) => {
              const sc = statusColors[p.status] || statusColors['Shipped'];
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="rounded-xl p-7 lg:p-9 transition-all duration-300"
                  style={{ border: '1px solid rgba(255,255,255,0.05)', background: '#0d1018' }}
                >
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-2.5">
                        <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: '#2a3040' }}>{p.type}</span>
                        <span className="text-[11px]" style={{ color: '#1a2030' }}>{p.year}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                          style={{ background: sc.bg, color: sc.text, border: `1px solid ${sc.border}` }}>
                          {p.status}
                        </span>
                      </div>
                      <h3 className="font-['Cormorant_Garamond',serif] text-2xl lg:text-3xl font-bold" style={{ color: '#b8c8e0' }}>{p.title}</h3>
                      <p className="text-[13px] mt-1" style={{ color: '#3a4860' }}>{p.subtitle}</p>
                    </div>
                    <div className="flex gap-2">
                      {p.links.map(l => (
                        <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                          className="px-4 py-2 rounded-full text-[12px] transition-all"
                          style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#6a7a90' }}>
                          {l.label}
                        </a>
                      ))}
                    </div>
                  </div>

                  <p className="text-[14px] leading-relaxed mb-5 max-w-3xl" style={{ color: '#3a4860' }}>{p.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-5 mb-5">
                    {p.highlights.map(h => (
                      <div key={h} className="flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full" style={{ background: '#3a5080' }} />
                        <span className="text-[12px]" style={{ color: '#4a5870' }}>{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    {p.tags.map(t => (
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
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#b8c8e0' }}>Need a developer?</h2>
            <p className="text-[14px]" style={{ color: '#2a3040' }}>Let's build something robust and elegant.</p>
          </div>
          <div className="flex gap-3">
            <a href="https://github.com/agungcahyo" target="_blank" rel="noopener noreferrer"
              className="px-5 py-3 rounded-full text-[13px] transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#4a5870' }}>
              GitHub
            </a>
            <a href="mailto:cahyoprasetyo507@gmail.com"
              className="px-7 py-3 font-medium rounded-full text-[13px] tracking-wide transition-all hover:opacity-90"
              style={{ background: '#b8c8e0', color: '#090c10' }}>
              Hire Me as Developer
            </a>
          </div>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <div className="px-8 py-5 flex justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <Link href="/videographer" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#1e2535' }}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Prev: Videographer
        </Link>
        <span className="text-[11px] font-medium" style={{ color: '#1e2535' }}>02 / Developer</span>
        <Link href="/beverage" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#1e2535' }}>
          Next: Beverage
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
