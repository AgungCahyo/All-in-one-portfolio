'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'SkripIn',
    subtitle: 'AI Script Generator SaaS',
    type: 'Web Application',
    year: '2023',
    status: 'Production',
    description: 'A production-ready AI script generator built from scratch. Integrates Google Gemini for language processing and OpenAI for text-to-speech. Engineered with 84 automated tests and 90%+ coverage for a robust, maintainable codebase.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Google Gemini', 'OpenAI TTS', 'Jest', 'PostgreSQL'],
    links: [
      { label: 'Live App', href: '#' },
      { label: 'Source Code', href: '#' },
    ],
    highlights: ['84 automated tests', '90%+ test coverage', 'AI-powered generation', 'TTS integration'],
  },
  {
    title: 'HPP Calculator',
    subtitle: 'Cost Price Calculation Tool',
    type: 'Web App',
    year: '2023',
    status: 'Shipped',
    description: 'A practical web application for calculating Harga Pokok Produksi (HPP) — production cost prices. Built to solve a real problem in the F&B industry with a clean, fast interface.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    links: [{ label: 'View Project', href: '#' }],
    highlights: ['Real-world utility', 'Clean UX', 'F&B industry focus'],
  },
  {
    title: 'MBTI Compatibility Test',
    subtitle: 'Personality Matching App',
    type: 'Web App',
    year: '2022',
    status: 'Shipped',
    description: 'An interactive MBTI personality compatibility test app. Users answer a series of questions to discover their type and compatibility with others. Focused on engaging UI/UX and accurate type logic.',
    tags: ['React', 'Node.js', 'Firebase'],
    links: [{ label: 'View Project', href: '#' }],
    highlights: ['Interactive quiz flow', 'Real-time results', 'Firebase backend'],
  },
];

const techStack = {
  'Frontend': ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  'Backend': ['Node.js', 'PostgreSQL', 'Firebase', 'REST APIs'],
  'AI & Tooling': ['Google Gemini', 'OpenAI', 'Jest', 'Git'],
};

export default function DeveloperPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-['Cormorant_Garamond',serif]">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-4 h-4 text-slate-500 group-hover:text-slate-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          <span className="text-xs tracking-[0.3em] text-slate-500 group-hover:text-slate-200 transition-colors font-['DM_Sans',sans-serif] uppercase">Portfolio</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/videographer" className="text-xs tracking-[0.2em] text-slate-600 hover:text-slate-300 transition-colors font-['DM_Sans',sans-serif] uppercase">Videographer</Link>
          <span className="text-xs tracking-[0.3em] text-slate-300 font-['DM_Sans',sans-serif] uppercase">Developer</span>
          <Link href="/beverage" className="text-xs tracking-[0.2em] text-slate-600 hover:text-slate-300 transition-colors font-['DM_Sans',sans-serif] uppercase">Beverage</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950" />
        <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-900/15 blur-[140px]" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-xs tracking-[0.4em] text-slate-500 font-['DM_Sans',sans-serif] uppercase mb-6">
              02 / Engineering
            </p>
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tighter mb-8" style={{ color: '#c8d4e8' }}>
              Full-Stack<br />
              <span className="text-slate-700">Developer</span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed max-w-xl font-['DM_Sans',sans-serif] mt-12">
              Building robust, tested, and AI-integrated web applications. I write production-quality code with an eye for design — because good software is both functional and beautiful.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-12 mt-16 pt-12 border-t border-slate-800"
          >
            {[
              { n: '2022–2024', l: 'Active Period' },
              { n: '84', l: 'Tests Written' },
              { n: '90%+', l: 'Coverage' },
              { n: '3+', l: 'Apps Shipped' },
            ].map(s => (
              <div key={s.l}>
                <div className="text-3xl font-bold" style={{ color: '#c8d4e8' }}>{s.n}</div>
                <div className="text-xs tracking-[0.2em] text-slate-600 font-['DM_Sans',sans-serif] uppercase mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="px-8 lg:px-16 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-slate-600 font-['DM_Sans',sans-serif] uppercase mb-8">Tech Stack</p>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category}>
                <p className="text-xs text-slate-500 font-['DM_Sans',sans-serif] uppercase tracking-widest mb-4">{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="px-3 py-1.5 border border-slate-800 rounded-lg text-sm text-slate-300 font-['DM_Sans',sans-serif] hover:border-slate-600 transition-colors">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-slate-600 font-['DM_Sans',sans-serif] uppercase mb-12">Projects</p>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border border-slate-800 rounded-2xl p-8 lg:p-10 hover:border-slate-600 transition-all group"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs tracking-[0.3em] text-slate-500 font-['DM_Sans',sans-serif] uppercase">{p.type}</span>
                      <span className="text-xs text-slate-700 font-['DM_Sans',sans-serif]">{p.year}</span>
                      <span className="text-xs px-2 py-0.5 border border-blue-900 text-blue-400 rounded-full font-['DM_Sans',sans-serif]">{p.status}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#c8d4e8' }}>{p.title}</h3>
                    <p className="text-slate-500 font-['DM_Sans',sans-serif] mt-1">{p.subtitle}</p>
                  </div>
                  <div className="flex gap-3">
                    {p.links.map(l => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="px-4 py-2 border border-slate-700 text-slate-300 text-xs font-['DM_Sans',sans-serif] rounded-full hover:border-slate-400 hover:text-white transition-all"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-slate-400 font-['DM_Sans',sans-serif] leading-relaxed mb-6 max-w-3xl">{p.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-4 mb-6">
                  {p.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                      <span className="text-xs text-slate-400 font-['DM_Sans',sans-serif]">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-900">
                  {p.tags.map(t => (
                    <span key={t} className="px-3 py-1 text-xs border border-slate-800 text-slate-500 rounded-full font-['DM_Sans',sans-serif]">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-16 py-24 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#c8d4e8' }}>Need a developer?</h2>
            <p className="text-slate-500 font-['DM_Sans',sans-serif]">Let's build something robust and elegant.</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/agungcahyo" target="_blank" rel="noopener noreferrer"
              className="px-6 py-3 border border-slate-700 text-slate-300 rounded-full text-sm font-['DM_Sans',sans-serif] hover:border-slate-400 transition-all">
              GitHub
            </a>
            <a href="mailto:cahyoprasetyo507@gmail.com"
              className="px-8 py-3 bg-slate-100 text-slate-950 font-semibold rounded-full hover:bg-white transition-all font-['DM_Sans',sans-serif] text-sm tracking-wide">
              Hire Me as Developer
            </a>
          </div>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <div className="px-8 py-6 border-t border-slate-900 flex justify-between">
        <Link href="/videographer" className="text-xs text-slate-600 hover:text-slate-300 transition-colors font-['DM_Sans',sans-serif] flex items-center gap-2">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Prev: Videographer
        </Link>
        <span className="text-xs text-slate-700 font-['DM_Sans',sans-serif]">02 / Developer</span>
        <Link href="/beverage" className="text-xs text-slate-600 hover:text-slate-300 transition-colors font-['DM_Sans',sans-serif] flex items-center gap-2">
          Next: Beverage
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
