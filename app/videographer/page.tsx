'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    title: 'Cinematography & Editing Reel',
    type: 'Showreel',
    year: '2024',
    description: 'A curated selection of my best work across corporate, documentary, and cinematic genres. Each piece demonstrates intentional framing, purposeful editing rhythm, and story-driven color grading.',
    tags: ['Color Grading', 'Motion Graphics', 'Sound Design'],
    videoId: null,
    link: 'https://www.youtube.com/@agungcahyo',
    linkLabel: 'Watch Full Reel',
    stats: [
      { value: '15+', label: 'Projects' },
      { value: '4K', label: 'Resolution' },
      { value: '3', label: 'Genres' },
    ],
  },
  {
    title: 'Brand Film – [Client Name]',
    type: 'Corporate Video',
    year: '2024',
    description: 'Company profile and product showcase. Describe the creative challenge, the story told, and the techniques used. What was the client\'s goal? How did you approach it visually and narratively?',
    tags: ['Cinematography', 'Color Grading', 'Sound Design'],
    videoId: null,
    link: '#',
    linkLabel: 'Watch Project',
    stats: null,
  },
];

const capabilities = [
  'Cinematography & camera operation',
  'Color grading (DaVinci Resolve)',
  'Motion graphics & titles (After Effects)',
  'Sound design & audio mixing',
  'Multi-cam production editing',
  'Drone / aerial footage',
  'Brand narrative & corporate video',
  'Documentary-style storytelling',
];

export default function VideographerPage() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 font-['Cormorant_Garamond',serif]">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center border-b border-stone-800/50 bg-stone-950/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-4 h-4 text-stone-500 group-hover:text-stone-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          <span className="text-xs tracking-[0.3em] text-stone-500 group-hover:text-stone-200 transition-colors font-['DM_Sans',sans-serif] uppercase">Portfolio</span>
        </Link>
        <div className="flex items-center gap-6">
          <span className="text-xs tracking-[0.3em] text-stone-300 font-['DM_Sans',sans-serif] uppercase">Videographer</span>
          <Link href="/developer" className="text-xs tracking-[0.2em] text-stone-600 hover:text-stone-300 transition-colors font-['DM_Sans',sans-serif] uppercase">Developer</Link>
          <Link href="/beverage" className="text-xs tracking-[0.2em] text-stone-600 hover:text-stone-300 transition-colors font-['DM_Sans',sans-serif] uppercase">Beverage</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-zinc-950" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber-900/10 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-xs tracking-[0.4em] text-stone-500 font-['DM_Sans',sans-serif] uppercase mb-6">
              01 / Visual Storytelling
            </p>
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-bold leading-[0.9] text-e8e0d4 tracking-tighter mb-8" style={{ color: '#e8e0d4' }}>
              Video&shy;grapher<br />
              <span className="text-stone-600">& Editor</span>
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 mt-12 max-w-2xl">
              <p className="text-lg text-stone-400 leading-relaxed font-['DM_Sans',sans-serif]">
                From concept to final cut — I craft cinematic narratives that move audiences. Corporate, documentary, and brand storytelling with technical precision.
              </p>
            </div>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-12 mt-16 pt-12 border-t border-stone-800"
          >
            {[
              { n: '2024–Now', l: 'Active Since' },
              { n: '15+', l: 'Projects Delivered' },
              { n: '4K', l: 'Max Resolution' },
              { n: '100%', l: 'Client Satisfaction' },
            ].map(s => (
              <div key={s.l}>
                <div className="text-3xl font-bold" style={{ color: '#e8e0d4' }}>{s.n}</div>
                <div className="text-xs tracking-[0.2em] text-stone-600 font-['DM_Sans',sans-serif] uppercase mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-8 lg:px-16 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-stone-600 font-['DM_Sans',sans-serif] uppercase mb-8">Capabilities</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {capabilities.map((c) => (
              <div key={c} className="py-4 px-5 border border-stone-800 rounded-lg hover:border-stone-600 transition-colors">
                <span className="text-sm text-stone-300 font-['DM_Sans',sans-serif]">{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-8 lg:px-16 py-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] text-stone-600 font-['DM_Sans',sans-serif] uppercase mb-12">Selected Work</p>

          <div className="space-y-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border border-stone-800 rounded-2xl overflow-hidden hover:border-stone-600 transition-all"
              >
                {/* Video placeholder */}
                <div className="relative w-full aspect-video bg-stone-900 flex items-center justify-center group">
                  {p.videoId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${p.videoId}`}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                    />
                  ) : (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full border border-stone-700 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-stone-600" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-xs text-stone-600 font-['DM_Sans',sans-serif]">Add YouTube embed ID</p>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-8 lg:p-10">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs tracking-[0.3em] text-stone-500 font-['DM_Sans',sans-serif] uppercase">{p.type}</span>
                        <span className="text-xs text-stone-700 font-['DM_Sans',sans-serif]">{p.year}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#e8e0d4' }}>{p.title}</h3>
                    </div>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 border border-stone-700 text-stone-300 text-sm font-['DM_Sans',sans-serif] rounded-full hover:border-stone-400 hover:text-white transition-all flex items-center gap-2"
                    >
                      {p.linkLabel}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-stone-400 font-['DM_Sans',sans-serif] leading-relaxed mb-6 max-w-3xl">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map(t => (
                      <span key={t} className="px-3 py-1 text-xs border border-stone-800 text-stone-400 rounded-full font-['DM_Sans',sans-serif]">{t}</span>
                    ))}
                  </div>

                  {p.stats && (
                    <div className="flex gap-8 pt-6 border-t border-stone-800">
                      {p.stats.map(s => (
                        <div key={s.label}>
                          <div className="text-xl font-bold" style={{ color: '#e8e0d4' }}>{s.value}</div>
                          <div className="text-xs text-stone-600 font-['DM_Sans',sans-serif]">{s.label}</div>
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

      {/* Tools */}
      <section className="px-8 lg:px-16 py-16 border-t border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3">
          {['DaVinci Resolve', 'Adobe Premiere Pro', 'After Effects', 'Adobe Audition', 'Blender', '4K Production'].map(t => (
            <span key={t} className="px-4 py-2 text-xs text-stone-400 border border-stone-800 rounded-full font-['DM_Sans',sans-serif] hover:border-stone-600 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-16 py-24 border-t border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#e8e0d4' }}>Ready to collaborate?</h2>
            <p className="text-stone-500 font-['DM_Sans',sans-serif]">Let's create something cinematic together.</p>
          </div>
          <a
            href="mailto:cahyoprasetyo507@gmail.com"
            className="px-8 py-4 bg-stone-100 text-stone-950 font-semibold rounded-full hover:bg-white transition-all font-['DM_Sans',sans-serif] text-sm tracking-wide whitespace-nowrap"
          >
            Hire Me as Videographer
          </a>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <div className="px-8 py-6 border-t border-stone-900 flex justify-between">
        <span className="text-xs text-stone-700 font-['DM_Sans',sans-serif]">01 / Videographer</span>
        <Link href="/developer" className="text-xs text-stone-600 hover:text-stone-300 transition-colors font-['DM_Sans',sans-serif] flex items-center gap-2">
          Next: Developer
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
