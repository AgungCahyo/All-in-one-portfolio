'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const creations = [
  {
    title: 'Signature Mocktail Menu',
    subtitle: 'Menu Creation & Flavor Profiling',
    type: 'Menu Development',
    description: 'Crafting refreshing, balanced mocktails goes beyond mixing syrups — it requires understanding chemical interactions between acidity, sweetness, and aromatics. Developed a seasonal beverage menu that increased customer satisfaction and streamlined ordering during peak shifts.',
    tags: ['Menu Engineering', 'Ingredient Sourcing', 'Standard Recipes', 'Garnish Design'],
    insight: 'The same precision required to debug a React application is utilized when adjusting the micro-measurements of a beverage recipe.',
    imagePlaceholder: 'Photo Racikan Minuman / Menu',
  },
  {
    title: 'Beverage Training SOP',
    subtitle: 'Standard Operating Procedures',
    type: 'Operations',
    description: 'Developed documented procedures for consistent drink preparation, inventory tracking, and speed-of-service optimization during high-volume shifts. Combines F&B expertise with a developer\'s systematic thinking.',
    tags: ['Quality Control', 'Inventory Management', 'Speed of Service', 'Documentation'],
    insight: 'Treating a bar workflow like a software system — every step documented, every variable controlled.',
    imagePlaceholder: 'Foto SOP / Training Materials',
  },
];

const skills = [
  { category: 'Craft', items: ['Mocktail Mixology', 'Recipe Formulation', 'Flavor Profiling', 'Garnish Design'] },
  { category: 'Operations', items: ['Inventory Management', 'Menu Development', 'Speed of Service', 'Quality Control'] },
  { category: 'Background', items: ['SMK Tata Boga', 'Culinary Arts', 'F&B Industry', 'Customer Experience'] },
];

export default function BeveragePage() {
  return (
    <main className="min-h-screen bg-amber-950/20 bg-[#0f0a05] text-amber-50 font-['Cormorant_Garamond',serif]">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center border-b border-amber-900/30 bg-[#0f0a05]/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-4 h-4 text-amber-800 group-hover:text-amber-200 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          <span className="text-xs tracking-[0.3em] text-amber-800 group-hover:text-amber-200 transition-colors font-['DM_Sans',sans-serif] uppercase">Portfolio</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/videographer" className="text-xs tracking-[0.2em] text-amber-900 hover:text-amber-300 transition-colors font-['DM_Sans',sans-serif] uppercase">Videographer</Link>
          <Link href="/developer" className="text-xs tracking-[0.2em] text-amber-900 hover:text-amber-300 transition-colors font-['DM_Sans',sans-serif] uppercase">Developer</Link>
          <span className="text-xs tracking-[0.3em] text-amber-300 font-['DM_Sans',sans-serif] uppercase">Beverage</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-8 lg:px-16 overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #1a0f05 0%, #0f0a05 50%, #150d06 100%)' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-800/10 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-orange-900/10 blur-[140px]" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <p className="text-xs tracking-[0.4em] text-amber-800 font-['DM_Sans',sans-serif] uppercase mb-6">
              03 / Beverage Craft
            </p>
            <h1 className="text-6xl sm:text-8xl lg:text-[10rem] font-bold leading-[0.9] tracking-tighter mb-8" style={{ color: '#e8d4c8' }}>
              Beverage<br />
              <span style={{ color: '#7a5c4a' }}>Crafter</span>
            </h1>
            <p className="text-lg leading-relaxed max-w-xl font-['DM_Sans',sans-serif] mt-12" style={{ color: '#9a7a6a' }}>
              Where precision meets creativity. The same obsession with craft that defines my work in code and cinema began here — in the art of the perfect drink.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-wrap gap-12 mt-16 pt-12 border-t border-amber-900/30"
          >
            {[
              { n: 'SMK Tata Boga', l: 'Foundation' },
              { n: 'Mocktails', l: 'Specialty' },
              { n: 'Flavor Profiling', l: 'Core Skill' },
              { n: 'Precision', l: 'Philosophy' },
            ].map(s => (
              <div key={s.l}>
                <div className="text-2xl font-bold" style={{ color: '#e8d4c8' }}>{s.n}</div>
                <div className="text-xs tracking-[0.2em] font-['DM_Sans',sans-serif] uppercase mt-1" style={{ color: '#5a3a2a' }}>{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-8 lg:px-16 py-16 border-t border-amber-900/20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs tracking-[0.4em] font-['DM_Sans',sans-serif] uppercase mb-6" style={{ color: '#5a3a2a' }}>Philosophy</p>
            <blockquote className="text-3xl lg:text-4xl font-bold leading-[1.2] mb-6" style={{ color: '#e8d4c8' }}>
              "Intentionality in every detail."
            </blockquote>
            <p className="text-base font-['DM_Sans',sans-serif] leading-relaxed" style={{ color: '#7a5c4a' }}>
              My journey started here — in the fast-paced environment of the beverage and hospitality industry. Creating the perfect drink requires exact measurements, timing, and an obsession with customer experience. This same mindset carried into software engineering and filmmaking.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { icon: '⚗️', title: 'Precision', body: 'Micro-measurements matter as much in a cocktail as in a codebase. Every gram, every milliliter, every pixel.' },
              { icon: '🎯', title: 'Customer Focus', body: 'Hospitality taught me empathy first. The best product is the one that makes people feel something.' },
              { icon: '🔄', title: 'Systems Thinking', body: 'Bar workflow, like software, works best when every step is documented and every variable is controlled.' },
            ].map(item => (
              <div key={item.title} className="p-5 rounded-xl border" style={{ borderColor: '#2a1a0a', background: '#150d06' }}>
                <div className="text-xl mb-2">{item.icon}</div>
                <h4 className="font-bold mb-1" style={{ color: '#e8d4c8' }}>{item.title}</h4>
                <p className="text-sm font-['DM_Sans',sans-serif] leading-relaxed" style={{ color: '#7a5c4a' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 lg:px-16 py-16 border-t border-amber-900/20">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] font-['DM_Sans',sans-serif] uppercase mb-8" style={{ color: '#5a3a2a' }}>Expertise</p>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <p className="text-xs font-['DM_Sans',sans-serif] uppercase tracking-widest mb-4" style={{ color: '#5a3a2a' }}>{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="px-3 py-1.5 border rounded-lg text-sm font-['DM_Sans',sans-serif]" style={{ borderColor: '#2a1a0a', color: '#9a7a6a' }}>
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
          <p className="text-xs tracking-[0.4em] font-['DM_Sans',sans-serif] uppercase mb-12" style={{ color: '#5a3a2a' }}>Selected Work</p>

          <div className="space-y-6">
            {creations.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border"
                style={{ borderColor: '#2a1a0a' }}
              >
                {/* Image placeholder */}
                <div className="w-full aspect-video flex items-center justify-center" style={{ background: '#150d06' }}>
                  <div className="text-center">
                    <svg className="w-10 h-10 mx-auto mb-2 opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: '#e8d4c8' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-xs font-['DM_Sans',sans-serif]" style={{ color: '#5a3a2a' }}>{c.imagePlaceholder}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8 lg:p-10" style={{ background: '#0f0a05' }}>
                  <div className="mb-4">
                    <span className="text-xs tracking-[0.3em] font-['DM_Sans',sans-serif] uppercase" style={{ color: '#5a3a2a' }}>{c.type}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold mt-2" style={{ color: '#e8d4c8' }}>{c.title}</h3>
                    <p className="font-['DM_Sans',sans-serif] mt-1" style={{ color: '#7a5c4a' }}>{c.subtitle}</p>
                  </div>

                  <p className="font-['DM_Sans',sans-serif] leading-relaxed mb-6" style={{ color: '#7a5c4a' }}>{c.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.tags.map(t => (
                      <span key={t} className="px-3 py-1 text-xs border rounded-full font-['DM_Sans',sans-serif]" style={{ borderColor: '#2a1a0a', color: '#7a5c4a' }}>{t}</span>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl border" style={{ borderColor: '#2a1a0a', background: '#150d06' }}>
                    <p className="text-sm font-['DM_Sans',sans-serif] italic" style={{ color: '#7a5c4a' }}>
                      <span className="font-semibold not-italic" style={{ color: '#e8d4c8' }}>Insight: </span>
                      {c.insight}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-16 py-24 border-t border-amber-900/20">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div>
            <h2 className="text-4xl font-bold mb-2" style={{ color: '#e8d4c8' }}>Let's craft something together.</h2>
            <p className="font-['DM_Sans',sans-serif]" style={{ color: '#5a3a2a' }}>Whether it's a drink menu or a digital product.</p>
          </div>
          <a
            href="mailto:cahyoprasetyo507@gmail.com"
            className="px-8 py-4 font-semibold rounded-full hover:opacity-90 transition-all font-['DM_Sans',sans-serif] text-sm tracking-wide whitespace-nowrap"
            style={{ background: '#e8d4c8', color: '#0f0a05' }}
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <div className="px-8 py-6 flex justify-between border-t" style={{ borderColor: '#1a0f05' }}>
        <Link href="/developer" className="text-xs font-['DM_Sans',sans-serif] flex items-center gap-2 transition-colors" style={{ color: '#5a3a2a' }}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Prev: Developer
        </Link>
        <span className="text-xs font-['DM_Sans',sans-serif]" style={{ color: '#3a2a1a' }}>03 / Beverage</span>
        <Link href="/" className="text-xs font-['DM_Sans',sans-serif] flex items-center gap-2 transition-colors" style={{ color: '#5a3a2a' }}>
          Back to Home
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
