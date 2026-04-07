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
    title: 'Brand Narrative Series',
    type: 'Commercial',
    year: '2024',
    description: 'A 3-part micro-documentary series focused on local artisans. Directed, shot, and edited the entire sequence. Utilized DaVinci Resolve for a film-emulation color pipeline to evoke a timeless, organic feel.',
    tags: ['Directing', 'Cinematography', 'Film Emulation'],
    videoId: null,
    link: '#',
    linkLabel: 'Coming Soon',
    stats: null,
  },
  {
    title: 'Event Aftermovie',
    type: 'Event Coverage',
    year: '2023',
    description: 'High-energy coverage of a 3-day tech conference. Required run-and-gun shooting in changing lighting conditions, followed by rapid-turnaround editing using dynamic speed ramps and specialized sound design.',
    tags: ['Run-and-gun', 'Speed Ramping', 'Rapid Delivery'],
    videoId: null,
    link: '#',
    linkLabel: 'Coming Soon',
    stats: null,
  },
  {
    title: 'Product Launch Teaser',
    type: 'Short Form',
    year: '2023',
    description: 'A 30-second high-impact teaser designed for social media. Focused on macro details, stylized lighting, and heavily manipulated sound design to build tension leading to the drop.',
    tags: ['Macro Lighting', 'Sound Design', 'Social Optimization'],
    videoId: null,
    link: '#',
    linkLabel: 'Coming Soon',
    stats: null,
  },
];

const videoJourney = [
  {
    year: '2021',
    phase: 'Foundation',
    title: 'The Art of the Cut',
    body: 'Started editing small projects and learning the fundamental psychology of pacing, rhythm, and continuity. Realized that editing is where the story is actually rewritten.',
  },
  {
    year: '2022',
    phase: 'Technical',
    title: 'Mastering the Aesthetic',
    body: 'Transitioned heavily into DaVinci Resolve. Deep-dived into color theory, node-based grading, and film emulation techniques. Began treating color as an emotional tool, not just a technical correction.',
  },
  {
    year: '2023',
    phase: 'Execution',
    title: 'Run-and-Gun to Studio',
    body: 'Expanded into full production — shooting live events, corporate profiles, and short-form content. Learned how to manage dynamic lighting environments and multi-cam workflows under pressure.',
  },
  {
    year: '2024–Now',
    phase: 'Directing',
    title: 'Cinematic Storytelling',
    body: 'Currently focusing on high-end, narrative-driven work. Bringing a developer\'s systematic workflow (organized timelines, proxies, rendering pipelines) into the creative process of filmmaking.',
  },
];

const videoTech = [
  { name: 'Video Editing (Premiere/Resolve)', level: 90, cat: 'Post-Production' },
  { name: 'Color Grading (DaVinci)', level: 88, cat: 'Post-Production' },
  { name: 'Cinematography', level: 85, cat: 'Production' },
  { name: 'Sound Design & Audio Mixing', level: 80, cat: 'Audio' },
  { name: 'Motion Graphics (After Effects)', level: 75, cat: 'Post-Production' },
  { name: 'Lighting & Framing', level: 82, cat: 'Production' },
];

const philosophy = [
  { title: 'Story Above All', body: 'A 4K resolution means nothing if the narrative doesn\'t move the audience. The gear serves the story, never the other way around.' },
  { title: 'Invisible Editing', body: 'The best cuts are the ones the viewer never notices. Pacing and rhythm should feel biological, matching a heartbeat or a breath.' },
  { title: 'Color is Emotion', body: 'Grading is more than fixing white balance. It\'s painting the emotional temperature of the scene.' },
];

export default function VideographerPage() {
  return (
    <main className="min-h-screen text-stone-100 font-['DM_Sans',sans-serif]" style={{ background: '#0c0b0a' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center"
        style={{ background: 'rgba(12,11,10,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-3.5 h-3.5 transition-colors" style={{ color: '#4a4540' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          <span className="text-[10px] tracking-[0.25em] uppercase transition-colors" style={{ color: '#4a4540' }}>Portfolio</span>
        </Link>
        <div className="flex items-center gap-7">
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: '#a09890' }}>Videographer</span>
          <Link href="/developer" className="text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: '#3a3530' }}>Developer</Link>
          <Link href="/beverage" className="text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: '#3a3530' }}>Beverage</Link>
        </div>
      </nav>



      {/* Hero — Cinematic Full-Bleed */}
      <section className="relative overflow-hidden" style={{ minHeight: '95vh' }}>

        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Agung Cahyo Prasetyo"
            fill
            className="object-cover object-center"
            style={{ filter: 'grayscale(40%) brightness(0.38)', transform: 'scaleX(-1)' }}
            priority
          />
          {/* Cinematic gradient: left-heavy for text contrast */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(105deg, rgba(12,11,10,0.98) 0%, rgba(12,11,10,0.80) 45%, rgba(12,11,10,0.20) 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0c0b0a 0%, transparent 50%)' }} />
          {/* Film grain texture */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px 200px' }} />
          {/* Cinematic letterbox bars */}
          <div className="absolute top-0 left-0 right-0" style={{ height: '58px', background: '#000' }} />
          <div className="absolute bottom-0 left-0 right-0" style={{ height: '58px', background: '#000' }} />
        </div>

        {/* Timecode — top right */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute top-0 right-8 z-20 flex items-center gap-3 font-mono"
          style={{ color: 'rgba(206,200,192,0.25)', fontSize: '10px', letterSpacing: '0.15em', lineHeight: '58px' }}
        >
          <span>01</span>
          <span style={{ color: 'rgba(206,200,192,0.1)' }}>|</span>
          <span>24:00:00:00</span>
          <span style={{ color: 'rgba(206,200,192,0.1)' }}>|</span>
          <span>4K UHD</span>
        </motion.div>

        {/* Corner brackets — cinematic frame */}
        {[['top-[58px] left-8','border-t border-l'],['top-[58px] right-8','border-t border-r'],
          ['bottom-[58px] left-8','border-b border-l'],['bottom-[58px] right-8','border-b border-r']].map(([pos, cls], i) => (
          <motion.div key={i}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
            className={`absolute w-6 h-6 ${pos} ${cls}`}
            style={{ borderColor: 'rgba(206,200,192,0.15)', borderWidth: '1px' }}
          />
        ))}

        {/* Main content — bottom-anchored */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-16 flex flex-col justify-end" style={{ minHeight: '95vh', paddingBottom: '100px' }}>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: 'easeOut' }}>

            {/* Label */}
            <div className="flex items-center gap-4 mb-10">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase" style={{ color: '#5a5450' }}>01 / Visual Storytelling</span>
              <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.06), transparent)', maxWidth: '160px' }} />
              <span className="font-mono text-[10px]" style={{ color: 'rgba(206,200,192,0.15)' }}>REC ●</span>
            </div>

            <h1 className="font-['Cormorant_Garamond',serif] font-bold leading-[0.85] tracking-tight mb-8"
              style={{ fontSize: 'clamp(4.5rem, 11vw, 10rem)', color: '#cec8c0', letterSpacing: '-0.03em' }}>
              Video<br />
              grapher<br />
              <span style={{ color: 'rgba(206,200,192,0.18)' }}>&amp; Editor</span>
            </h1>

            <p className="text-[15px] leading-relaxed max-w-sm" style={{ color: '#6a6460' }}>
              From concept to final cut — crafting cinematic narratives that move audiences through corporate, documentary &amp; brand storytelling.
            </p>
          </motion.div>

          {/* Stats bar — filmstrip style */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-stretch mt-14 overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '4px', maxWidth: '520px' }}
          >
            {[
              { n: '2024', l: 'Since' },
              { n: '15+', l: 'Projects' },
              { n: '4K', l: 'Resolution' },
              { n: '100%', l: 'Satisfaction' },
            ].map((s, i) => (
              <div key={s.l} className="flex-1 px-5 py-4" style={{
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                background: i % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent'
              }}>
                <div className="font-['Cormorant_Garamond',serif] text-xl font-bold" style={{ color: '#cec8c0' }}>{s.n}</div>
                <div className="text-[9px] tracking-[0.2em] uppercase mt-1" style={{ color: '#3a3530' }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6 font-medium" style={{ color: '#5a5450' }}>Approach</p>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl font-bold leading-tight" style={{ color: '#cec8c0' }}>
              "The gear serves the story.<br/>Never the other way around."
            </h2>
          </div>
          <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
            {philosophy.map((item) => (
              <div key={item.title} className="p-6 rounded-xl" style={{ background: '#0f0e0d', border: '1px solid rgba(255,255,255,0.03)' }}>
                <h4 className="font-['Cormorant_Garamond',serif] text-xl font-bold mb-2" style={{ color: '#cec8c0' }}>{item.title}</h4>
                <p className="text-[13px] leading-relaxed" style={{ color: '#6a6460' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cinematic Journey Timeline */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(206,200,192,0.05)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <p className="text-[10px] tracking-[0.4em] uppercase font-medium" style={{ color: '#5a5450' }}>Creative Journey</p>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full blur-[1px]" style={{ background: '#ff3b30' }}></span>
              <p className="font-mono text-[10px]" style={{ color: '#5a5450' }}>REC 2021 — PRESENT</p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[70px] top-0 bottom-0 w-px hidden md:block"
              style={{ background: 'linear-gradient(to bottom, transparent, rgba(206,200,192,0.1) 10%, rgba(206,200,192,0.1) 90%, transparent)' }} />

            <div className="space-y-10">
              {videoJourney.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-8 md:gap-16 items-start"
                >
                  <div className="flex-shrink-0 text-right" style={{ width: '70px' }}>
                    <div className="font-['Cormorant_Garamond',serif] text-xl font-bold" style={{ color: 'rgba(206,200,192,0.6)' }}>{item.year}</div>
                    <div className="font-mono text-[8px] tracking-[0.2em] uppercase mt-1" style={{ color: '#5a5450' }}>{item.phase}</div>
                  </div>

                  <div className="relative hidden md:flex flex-shrink-0" style={{ width: '0', alignSelf: 'flex-start', marginTop: '10px' }}>
                    <div className="w-2 h-2 rounded-full translate-x-[-4px]" style={{ background: 'rgba(206,200,192,0.8)', boxShadow: '0 0 0 3px rgba(206,200,192,0.1)' }} />
                  </div>

                  <div className="flex-1 pb-8" style={{ borderBottom: i < videoJourney.length - 1 ? '1px solid rgba(206,200,192,0.05)' : 'none' }}>
                    <h4 className="font-['Cormorant_Garamond',serif] text-2xl font-bold mb-2" style={{ color: '#cec8c0' }}>{item.title}</h4>
                    <p className="text-[14px] leading-relaxed" style={{ color: '#6a6460' }}>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skill Proficiency Bars */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(206,200,192,0.05)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-10 font-medium" style={{ color: '#5a5450' }}>Technical Arsenal</p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {videoTech.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="flex justify-between items-baseline mb-2">
                  <div>
                    <span className="text-[13px] font-medium tracking-wide" style={{ color: '#cec8c0' }}>{s.name}</span>
                    <span className="font-mono text-[9px] uppercase tracking-widest ml-3" style={{ color: '#5a5450' }}>{s.cat}</span>
                  </div>
                  <span className="font-mono text-[10px]" style={{ color: 'rgba(206,200,192,0.4)' }}>{s.level}%</span>
                </div>
                <div className="h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(206,200,192,0.05)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.07, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(to right, rgba(206,200,192,0.2), rgba(206,200,192,0.7))' }}
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
          <p className="text-[10px] tracking-[0.4em] uppercase mb-10 font-medium" style={{ color: '#3a3530' }}>Selected Work</p>

          <div className="space-y-5">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-xl overflow-hidden transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.05)', background: '#0f0e0d' }}
              >
                {/* Video area */}
                <div className="relative w-full aspect-video flex items-center justify-center" style={{ background: '#0a0908' }}>
                  {p.videoId ? (
                    <iframe src={`https://www.youtube.com/embed/${p.videoId}`} className="absolute inset-0 w-full h-full" allowFullScreen />
                  ) : (
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                        style={{ border: '1px solid rgba(255,255,255,0.07)' }}>
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#3a3530' }}>
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-[11px]" style={{ color: '#3a3530' }}>Add YouTube embed ID</p>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-7 lg:p-9">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: '#3a3530' }}>{p.type}</span>
                        <span className="text-[11px]" style={{ color: '#2a2520' }}>{p.year}</span>
                      </div>
                      <h3 className="font-['Cormorant_Garamond',serif] text-2xl lg:text-3xl font-bold" style={{ color: '#cec8c0' }}>{p.title}</h3>
                    </div>
                    <a href={p.link} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full text-[12px] transition-all flex items-center gap-2"
                      style={{ border: '1px solid rgba(255,255,255,0.08)', color: '#7a7068' }}>
                      {p.linkLabel}
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>

                  <p className="text-[14px] leading-relaxed mb-5 max-w-2xl" style={{ color: '#5a5450' }}>{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tags.map(t => (
                      <span key={t} className="px-3 py-1 text-[11px] rounded-full" style={{ border: '1px solid rgba(255,255,255,0.05)', color: '#5a5450' }}>{t}</span>
                    ))}
                  </div>

                  {p.stats && (
                    <div className="flex gap-8 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                      {p.stats.map(s => (
                        <div key={s.label}>
                          <div className="font-['Cormorant_Garamond',serif] text-xl font-bold" style={{ color: '#cec8c0' }}>{s.value}</div>
                          <div className="text-[11px] mt-0.5" style={{ color: '#3a3530' }}>{s.label}</div>
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
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#cec8c0' }}>Ready to collaborate?</h2>
            <p className="text-[14px]" style={{ color: '#3a3530' }}>Let's create something cinematic together.</p>
          </div>
          <a href="mailto:cahyoprasetyo507@gmail.com"
            className="px-7 py-3.5 font-medium rounded-full text-[13px] tracking-wide whitespace-nowrap transition-all hover:opacity-90"
            style={{ background: '#cec8c0', color: '#0c0b0a' }}>
            Hire Me as Videographer
          </a>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <div className="px-8 py-5 flex justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <span className="text-[11px] font-medium" style={{ color: '#2a2520' }}>01 / Videographer</span>
        <Link href="/developer" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#3a3530' }}>
          Next: Developer
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
