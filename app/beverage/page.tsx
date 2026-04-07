'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const creations = [
  {
    title: 'Signature Mocktail Menu',
    subtitle: 'Menu Creation & Flavor Profiling',
    type: 'Menu Development',
    description: 'Crafting refreshing, balanced mocktails goes beyond mixing syrups — it requires understanding chemical interactions between acidity, sweetness, and aromatics. Developed a seasonal beverage menu that increased customer satisfaction and streamlined ordering during peak shifts.',
    tags: ['Menu Engineering', 'Ingredient Sourcing', 'Standard Recipes', 'Garnish Design'],
    insight: 'The same precision required to debug a React application is utilized when adjusting the micro-measurements of a beverage recipe.',
  },
  {
    title: 'Butterfly Pea Lemonade Series',
    subtitle: 'Signature Color-Changing Mocktail',
    type: 'Recipe Development',
    description: 'A visually dramatic mocktail series built around pH-reactive butterfly pea flower extract. The drink shifts naturally from deep indigo to vibrant violet when citrus is added — a chemistry-forward creation that became a customer favorite. Developed three flavor variations for different daypart menus.',
    tags: ['Color-Changing Chemistry', 'Butterfly Pea Flower', 'Seasonal Variation', 'Visual Presentation'],
    insight: 'Using natural pH indicators is the beverage equivalent of writing code that responds dynamically to input.',
  },
  {
    title: 'Lemongrass & Basil Cold Brew',
    subtitle: 'Cold Infusion Technique',
    type: 'Craft Technique',
    description: 'Developed a 24-hour cold infusion protocol using fresh Indonesian lemongrass and Thai basil to create a layered herbal concentrate. The concentrate became the base for four distinct menu items, improving ingredient utilization by 40% and reducing prep waste during high-volume service.',
    tags: ['Cold Infusion', 'Herb Sourcing', 'Batch Preparation', 'Zero Waste Approach'],
    insight: 'Cold brew infusion is like asynchronous programming — it runs quietly in the background and delivers a richer output.',
  },
  {
    title: 'Beverage Training SOP',
    subtitle: 'Standard Operating Procedures & Team Training',
    type: 'Operations & Leadership',
    description: 'Developed documented SOPs for consistent drink preparation, inventory tracking, and speed-of-service during high-volume shifts. Led hands-on training sessions for new bar staff, reducing onboarding time from 2 weeks to 4 days. Combines 5+ years of F&B expertise with a developer\'s systematic approach to documentation.',
    tags: ['Quality Control', 'Inventory Management', 'Staff Training', 'Documentation', 'Leadership'],
    insight: 'Treating a bar workflow like a software system — every step documented, every variable controlled, every output reproducible.',
  },
];

const journey = [
  {
    year: '2019',
    phase: 'Foundation',
    title: 'Graduate of Vocational High School, majoring in Culinary Arts.',
    body: 'Formal culinary & beverage education. First exposure to recipe formulation, hygiene standards, and the science behind flavor balance. Graduated with distinction in food & beverage service.',
  },
  {
    year: '2020',
    phase: 'Entry',
    title: 'First F&B Role',
    body: 'Entered the industry during a uniquely challenging year. Learned high-pressure service, speed-of-service optimization, and the fundamentals of consistent quality under volume. Developed resilience and real-world adaptability.',
  },
  {
    year: '2021',
    phase: 'Specialization',
    title: 'Mocktail Focus & Recipe Development',
    body: 'Started developing original mocktail recipes, experimenting with cold infusions, house syrups, and local Indonesian ingredients. Created the first version of the Butterfly Pea Lemonade Series that would become a signature item.',
  },
  {
    year: '2022–2023',
    phase: 'Mastery',
    title: 'Menu Engineering & Operations',
    body: 'Took ownership of the beverage menu — sourcing, costing, seasonal updates, and design. Developed training SOPs that reduced new-hire onboarding from 2 weeks to 4 days. Started connecting beverage craft with software thinking.',
  },
  {
    year: '2024–Now',
    phase: 'Multi-Discipline',
    title: 'Craft + Code + Cinema',
    body: 'Recognized that precision, creativity, and systems thinking carry across all three disciplines. Now operate simultaneously as a Beverage Crafter, Full-Stack Developer, and Videographer — each craft sharpening the others.',
  },
];

const techniques = [
  { name: 'Cold Infusion', level: 90, desc: 'Herb & botanical extracts' },
  { name: 'House Syrup Production', level: 85, desc: 'Custom flavor bases' },
  { name: 'Flavor Profiling', level: 88, desc: 'Acidity, sweetness, bitterness balance' },
  { name: 'Garnish Design', level: 80, desc: 'Dehydrated, fresh & sculptural' },
  { name: 'Menu Engineering', level: 82, desc: 'Costing, layout & psychology' },
  { name: 'Batch Preparation', level: 88, desc: 'High-volume consistency' },
  { name: 'Ingredient Sourcing', level: 78, desc: 'Local & seasonal focus' },
  { name: 'Staff Training', level: 85, desc: 'SOP development & coaching' },
];

const skills = [
  { category: 'Craft', items: ['Mocktail Mixology', 'Recipe Formulation', 'Flavor Profiling', 'Garnish Design', 'Cold Infusion', 'House Syrups'] },
  { category: 'Operations', items: ['Inventory Management', 'Menu Development', 'Speed of Service', 'Quality Control', 'Staff Training', 'Cost Control'] },
  { category: 'Background', items: ['Vocational High School', 'Culinary Arts', 'F&B Industry 5+ Years', 'Customer Experience', 'High-Volume Service'] },
];

const philosophy = [
  { icon: '⚗', title: 'Precision', body: 'Micro-measurements matter as much in a cocktail as in a codebase. Every gram, every milliliter, every pixel — intentionality scales.' },
  { icon: '◎', title: 'Customer Focus', body: 'Five years in hospitality taught me empathy first. The best beverage is the one that makes someone pause and say nothing — just smile.' },
  { icon: '⧳', title: 'Systems Thinking', body: 'A well-run bar is software in physical form. Every step documented, every variable controlled, every output reproducible at scale.' },
  { icon: '❧', title: 'Continuous Refinement', body: 'Every recipe is version 1.0. After 5+ years, I\'ve learned that the best creations come from obsessive iteration — tasting, adjusting, tasting again.' },
];

const sensoryNotes = [
  { note: 'Bright Citrus', icon: '🍋' },
  { note: 'Herbal Depth', icon: '🌿' },
  { note: 'Floral Top Note', icon: '🏵️' },
  { note: 'Balanced Acidity', icon: '⚖️' },
  { note: 'Clean Finish', icon: '✨' },
];

const signatureRecipe = {
  name: 'Signature Mocktail',
  subtitle: 'House Specialty — Non-Alcoholic',
  profile: { sweetness: 65, acidity: 80, bitterness: 20, body: 70 },
  ingredients: [
    { amount: '60ml', item: 'Fresh Lime Juice' },
    { amount: '30ml', item: 'Lemongrass Syrup' },
    { amount: '15ml', item: 'Butterfly Pea Flower Extract' },
    { amount: '120ml', item: 'Sparkling Mineral Water' },
    { amount: '2 dash', item: 'Aromatic Bitters' },
  ],
  method: 'Build in glass · Ice cubes · Garnish with lime wheel & mint sprig',
  aroma: 'Citrus-forward, with herbal undertones and a floral fade',
  taste: 'Bright acidity, balanced sweetness, clean effervescent finish',
};

export default function BeveragePage() {
  return (
    <main className="min-h-screen text-amber-50 font-['DM_Sans',sans-serif]" style={{ background: '#0c0906' }}>

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center"
        style={{ background: 'rgba(12,9,6,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <Link href="/" className="flex items-center gap-3 group">
          <svg className="w-3.5 h-3.5" style={{ color: '#3a2a1a' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
          </svg>
          <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: '#3a2a1a' }}>Portfolio</span>
        </Link>
        <div className="flex items-center gap-7">
          <Link href="/videographer" className="text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: '#3a2a1a' }}>Videographer</Link>
          <Link href="/developer" className="text-[10px] tracking-[0.2em] uppercase transition-colors" style={{ color: '#3a2a1a' }}>Developer</Link>
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium" style={{ color: '#b89878' }}>Beverage</span>
        </div>
      </nav>

      {/* Hero — Warm Artisan Split Layout */}
      <section className="relative overflow-hidden" style={{ borderBottom: '1px solid rgba(180,130,80,0.08)' }}>
        {/* Warm ambient glow */}
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(160,100,40,0.06) 0%, transparent 60%)' }} />
        {/* Paper texture */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'%3E%3Cfilter id=\'p\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3CfeColorMatrix type=\'saturate\' values=\'0\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23p)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
          backgroundSize: '300px 300px',
          opacity: 0.5
        }} />

        <div className="relative max-w-6xl mx-auto px-8 lg:px-16" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 items-stretch">

            {/* Left: Text panel */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex-1 flex flex-col justify-center order-2 lg:order-1 lg:pr-16"
            >
              {/* Decorative label with ornament */}
              <div className="flex items-center gap-3 mb-10">
                <div style={{ width: '28px', height: '1px', background: 'rgba(180,130,80,0.3)' }} />
                <span className="text-[10px] tracking-[0.45em] uppercase" style={{ color: '#5a4030', fontFamily: "'DM Sans', sans-serif" }}>03 / Beverage Craft</span>
                <div style={{ width: '28px', height: '1px', background: 'rgba(180,130,80,0.3)' }} />
              </div>

              {/* Decorative botanical icon */}
              <div className="mb-6" style={{ color: 'rgba(180,130,80,0.15)', fontSize: '48px', lineHeight: 1 }}>⚗</div>

              {/* Title — large editorial serif */}
              <h1 className="font-['Cormorant_Garamond',serif] font-bold leading-[0.88] tracking-tight mb-6"
                style={{ fontSize: 'clamp(4rem, 9vw, 8rem)', color: '#d0c0b0', letterSpacing: '-0.02em' }}>
                Beverage<br />
                <em style={{ color: 'rgba(208,192,176,0.2)', fontStyle: 'italic' }}>Crafter</em>
              </h1>

              {/* Decorative rule */}
              <div className="flex items-center gap-4 mb-6">
                <div style={{ height: '1px', flex: 1, maxWidth: '60px', background: 'rgba(180,130,80,0.2)' }} />
                <span style={{ color: 'rgba(180,130,80,0.25)', fontSize: '16px' }}>✦</span>
                <div style={{ height: '1px', flex: 1, maxWidth: '60px', background: 'rgba(180,130,80,0.2)' }} />
              </div>

              <p className="text-[15px] leading-relaxed max-w-xs" style={{ color: '#6a5a48', fontFamily: "'DM Sans', sans-serif" }}>
                Where precision meets creativity. The same obsession with craft that defines my work in code and cinema began here.
              </p>

              {/* Sensory aroma strip */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-wrap gap-2 mt-6"
              >
                {sensoryNotes.map((s) => (
                  <span key={s.note} className="flex items-center gap-1.5 px-3 py-1.5 text-[11px]"
                    style={{ border: '1px solid rgba(180,130,80,0.15)', color: '#7a6448', borderRadius: '20px', background: 'rgba(180,130,80,0.04)' }}>
                    <span>{s.icon}</span>
                    {s.note}
                  </span>
                ))}
              </motion.div>

              {/* Stats — ingredient label style */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="mt-12 grid grid-cols-2 gap-3"
                style={{ maxWidth: '320px' }}
              >
                {[
                  { n: 'Culinary School', l: 'Foundation' },
                  { n: 'Mocktails', l: 'Specialty' },
                  { n: 'Flavor Profiling', l: 'Core Skill' },
                  { n: 'Precision', l: 'Philosophy' },
                ].map(s => (
                  <div key={s.l} className="px-4 py-3" style={{
                    border: '1px solid rgba(180,130,80,0.12)',
                    background: 'rgba(180,130,80,0.03)',
                    borderRadius: '2px'
                  }}>
                    <div className="font-['Cormorant_Garamond',serif] text-base font-bold" style={{ color: '#d0c0b0' }}>{s.n}</div>
                    <div className="text-[9px] tracking-[0.2em] uppercase mt-0.5" style={{ color: '#3a2a1a' }}>{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Divider line — desktop only */}
            <div className="hidden lg:block flex-shrink-0" style={{ width: '1px', background: 'linear-gradient(to bottom, transparent, rgba(180,130,80,0.15) 30%, rgba(180,130,80,0.15) 70%, transparent)', margin: '0' }} />

            {/* Right: Photo panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative flex-shrink-0 w-full lg:w-[340px] h-[360px] lg:h-auto order-1 lg:order-2 lg:pl-16"
              style={{ minHeight: '400px' }}
            >
              <div className="relative w-full h-full" style={{ minHeight: '400px' }}>
                {/* Decorative corner ornaments */}
                <div className="absolute top-0 left-0 w-6 h-6 z-10" style={{ borderTop: '1px solid rgba(180,130,80,0.3)', borderLeft: '1px solid rgba(180,130,80,0.3)' }} />
                <div className="absolute top-0 right-0 w-6 h-6 z-10" style={{ borderTop: '1px solid rgba(180,130,80,0.3)', borderRight: '1px solid rgba(180,130,80,0.3)' }} />
                <div className="absolute bottom-0 left-0 w-6 h-6 z-10" style={{ borderBottom: '1px solid rgba(180,130,80,0.3)', borderLeft: '1px solid rgba(180,130,80,0.3)' }} />
                <div className="absolute bottom-0 right-0 w-6 h-6 z-10" style={{ borderBottom: '1px solid rgba(180,130,80,0.3)', borderRight: '1px solid rgba(180,130,80,0.3)' }} />

                <div className="absolute inset-2 overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Agung Cahyo Prasetyo"
                    fill
                    className="object-cover object-[50%_20%]"
                    style={{ filter: 'grayscale(15%) sepia(40%) hue-rotate(-5deg) brightness(0.78) contrast(1.05)' }}
                    priority
                  />
                  {/* Warm vignette */}
                  <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(12,9,6,0.6) 100%)' }} />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 55%, #0c0906 100%)' }} />
                </div>

                {/* Caption at bottom */}
                <div className="absolute bottom-4 left-0 right-0 text-center z-10">
                  <p className="text-[9px] tracking-[0.4em] uppercase" style={{ color: 'rgba(208,192,176,0.2)', fontFamily: "'DM Sans', sans-serif" }}>Agung Cahyo Prasetyo</p>
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
            <p className="text-[10px] tracking-[0.4em] uppercase mb-6 font-medium" style={{ color: '#3a2a1a' }}>Philosophy</p>
            <blockquote className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold leading-[1.15] mb-5" style={{ color: '#d0c0b0' }}>
              "Intentionality in every detail."
            </blockquote>
            <p className="text-[14px] leading-relaxed" style={{ color: '#5a4a38' }}>
              My journey started here — in the fast-paced environment of the beverage and hospitality industry. Creating the perfect drink requires exact measurements, timing, and an obsession with customer experience. This same mindset carried into software engineering and filmmaking.
            </p>
          </div>
          <div className="space-y-3">
            {philosophy.map(item => (
              <div key={item.title} className="p-5 rounded-xl"
                style={{ border: '1px solid rgba(255,255,255,0.05)', background: '#100b06' }}>
                <div className="text-[16px] mb-2 font-mono" style={{ color: '#6a4a30' }}>{item.icon}</div>
                <h4 className="font-medium mb-1 text-[14px]" style={{ color: '#d0c0b0' }}>{item.title}</h4>
                <p className="text-[13px] leading-relaxed" style={{ color: '#5a4a38' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Recipe Card */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(180,130,80,0.08)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-8 font-medium" style={{ color: '#3a2a1a' }}>Signature Recipe</p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {/* Left: Recipe card */}
            <div className="p-8 lg:p-10" style={{ border: '1px solid rgba(180,130,80,0.15)', borderRadius: '4px', background: '#0e0a06' }}>
              {/* Header */}
              <div className="flex items-start justify-between mb-8">
                <div>
                  <div className="text-[9px] tracking-[0.4em] uppercase mb-2" style={{ color: '#3a2a1a' }}>House Specialty</div>
                  <h3 className="font-['Cormorant_Garamond',serif] text-3xl font-bold" style={{ color: '#d0c0b0' }}>{signatureRecipe.name}</h3>
                  <p className="text-[12px] mt-1" style={{ color: '#5a4030' }}>{signatureRecipe.subtitle}</p>
                </div>
                <span style={{ color: 'rgba(180,130,80,0.2)', fontSize: '32px', lineHeight: 1 }}>⚗</span>
              </div>

              {/* Decorative rule */}
              <div className="flex items-center gap-3 mb-6">
                <div style={{ flex: 1, height: '1px', background: 'rgba(180,130,80,0.12)' }} />
                <span style={{ color: 'rgba(180,130,80,0.2)', fontSize: '10px' }}>✦</span>
                <div style={{ flex: 1, height: '1px', background: 'rgba(180,130,80,0.12)' }} />
              </div>

              {/* Ingredients */}
              <div className="space-y-2.5 mb-8">
                {signatureRecipe.ingredients.map((ing) => (
                  <div key={ing.item} className="flex items-baseline justify-between">
                    <span className="text-[13px]" style={{ color: '#6a5a48' }}>{ing.item}</span>
                    <span className="text-[11px] font-mono" style={{ color: '#3a2a1a' }}>{ing.amount}</span>
                  </div>
                ))}
              </div>

              {/* Method */}
              <div className="pt-5" style={{ borderTop: '1px solid rgba(180,130,80,0.08)' }}>
                <p className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: '#3a2a1a' }}>Method</p>
                <p className="text-[12px] italic leading-relaxed" style={{ color: '#4a3a28' }}>{signatureRecipe.method}</p>
              </div>
            </div>

            {/* Right: Flavor profile + tasting notes */}
            <div className="flex flex-col gap-6">
              {/* Tasting notes */}
              <div className="p-7" style={{ border: '1px solid rgba(180,130,80,0.1)', borderRadius: '4px', background: '#0e0a06' }}>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: '#3a2a1a' }}>Tasting Notes</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span style={{ color: 'rgba(180,130,80,0.4)', fontSize: '12px' }}>◈</span>
                      <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#3a2a1a' }}>Aroma</span>
                    </div>
                    <p className="text-[13px] leading-relaxed pl-5" style={{ color: '#6a5a48' }}>{signatureRecipe.aroma}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span style={{ color: 'rgba(180,130,80,0.4)', fontSize: '12px' }}>◈</span>
                      <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#3a2a1a' }}>Palate</span>
                    </div>
                    <p className="text-[13px] leading-relaxed pl-5" style={{ color: '#6a5a48' }}>{signatureRecipe.taste}</p>
                  </div>
                </div>
              </div>

              {/* Flavor profile bars */}
              <div className="p-7" style={{ border: '1px solid rgba(180,130,80,0.1)', borderRadius: '4px', background: '#0e0a06' }}>
                <p className="text-[10px] tracking-[0.3em] uppercase mb-5" style={{ color: '#3a2a1a' }}>Flavor Profile</p>
                <div className="space-y-3">
                  {Object.entries(signatureRecipe.profile).map(([key, value]) => (
                    <div key={key}>
                      <div className="flex justify-between mb-1">
                        <span className="text-[10px] tracking-[0.15em] uppercase" style={{ color: '#4a3a28' }}>{key}</span>
                        <span className="text-[10px] font-mono" style={{ color: '#3a2a1a' }}>{value}%</span>
                      </div>
                      <div className="h-[3px] rounded-full overflow-hidden" style={{ background: 'rgba(180,130,80,0.08)' }}>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1, ease: 'easeOut' }}
                          className="h-full rounded-full"
                          style={{ background: 'linear-gradient(to right, rgba(180,130,80,0.4), rgba(200,160,100,0.6))' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline — 5+ years */}
      <section className="px-8 lg:px-16 py-16" style={{ borderTop: '1px solid rgba(180,130,80,0.08)' }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <p className="text-[10px] tracking-[0.4em] uppercase font-medium" style={{ color: '#3a2a1a' }}>5+ Years of Craft</p>
            <p className="text-[10px] tracking-[0.2em] uppercase" style={{ color: '#2a1a0a' }}>2019 — Present</p>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, rgba(180,130,80,0.15) 10%, rgba(180,130,80,0.15) 90%, transparent)' }} />

            <div className="space-y-10">
              {journey.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-8 md:gap-16 items-start"
                >
                  {/* Year node */}
                  <div className="flex-shrink-0 text-right" style={{ width: '72px' }}>
                    <div className="text-[11px] font-mono" style={{ color: 'rgba(180,130,80,0.4)' }}>{item.year}</div>
                    <div className="text-[8px] tracking-[0.25em] uppercase mt-0.5" style={{ color: '#3a2a1a' }}>{item.phase}</div>
                  </div>

                  {/* Dot — hidden on mobile */}
                  <div className="relative hidden md:flex flex-shrink-0" style={{ width: '0', alignSelf: 'flex-start', marginTop: '4px' }}>
                    <div className="w-2 h-2 rounded-full translate-x-[-4px]" style={{ background: 'rgba(180,130,80,0.35)', boxShadow: '0 0 0 3px rgba(180,130,80,0.08)' }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8" style={{ borderBottom: i < journey.length - 1 ? '1px solid rgba(180,130,80,0.06)' : 'none' }}>
                    <h4 className="font-['Cormorant_Garamond',serif] text-xl font-bold mb-2" style={{ color: '#d0c0b0' }}>{item.title}</h4>
                    <p className="text-[13px] leading-relaxed" style={{ color: '#5a4a38' }}>{item.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-8 font-medium" style={{ color: '#3a2a1a' }}>Core Expertise</p>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map(({ category, items }) => (
              <div key={category}>
                <p className="text-[10px] uppercase tracking-widest mb-4 font-medium" style={{ color: '#3a2a1a' }}>{category}</p>
                <div className="flex flex-wrap gap-2">
                  {items.map(item => (
                    <span key={item} className="px-3 py-1.5 rounded-lg text-[12px]"
                      style={{ border: '1px solid rgba(180,130,80,0.1)', color: '#6a5a48', background: 'rgba(180,130,80,0.03)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Techniques with proficiency bars */}
      <section className="px-8 lg:px-16 py-14" style={{ borderTop: '1px solid rgba(180,130,80,0.06)' }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase mb-8 font-medium" style={{ color: '#3a2a1a' }}>Technique Mastery</p>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-5">
            {techniques.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="flex justify-between items-baseline mb-1.5">
                  <div>
                    <span className="text-[13px] font-medium" style={{ color: '#b0a090' }}>{t.name}</span>
                    <span className="text-[10px] ml-2" style={{ color: '#3a2a1a' }}>{t.desc}</span>
                  </div>
                  <span className="font-mono text-[10px]" style={{ color: 'rgba(180,130,80,0.35)' }}>{t.level}%</span>
                </div>
                <div className="h-[2px] rounded-full overflow-hidden" style={{ background: 'rgba(180,130,80,0.07)' }}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${t.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.07, ease: 'easeOut' }}
                    className="h-full rounded-full"
                    style={{ background: 'linear-gradient(to right, rgba(180,130,80,0.3), rgba(210,170,110,0.55))' }}
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
          <p className="text-[10px] tracking-[0.4em] uppercase mb-10 font-medium" style={{ color: '#3a2a1a' }}>Selected Work</p>

          <div className="space-y-5">
            {creations.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.05)', background: '#100b06' }}
              >
                {/* Decorative type-based placeholder */}
                <div className="w-full" style={{ background: '#0a0704', aspectRatio: '16/7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div className="text-center">
                    <div style={{ color: 'rgba(180,130,80,0.1)', fontSize: '36px', marginBottom: '8px' }}>
                      {c.type === 'Menu Development' ? '📋' : c.type === 'Recipe Development' ? '🧪' : c.type === 'Craft Technique' ? '⚗' : '📂'}
                    </div>
                    <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: '#2a1a0a' }}>{c.type}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-7 lg:p-9">
                  <div className="mb-4">
                    <span className="text-[10px] tracking-[0.25em] uppercase font-medium" style={{ color: '#3a2a1a' }}>{c.type}</span>
                    <h3 className="font-['Cormorant_Garamond',serif] text-2xl lg:text-3xl font-bold mt-2" style={{ color: '#d0c0b0' }}>{c.title}</h3>
                    <p className="text-[13px] mt-1" style={{ color: '#4a3a28' }}>{c.subtitle}</p>
                  </div>

                  <p className="text-[14px] leading-relaxed mb-5 max-w-2xl" style={{ color: '#4a3a28' }}>{c.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {c.tags.map(t => (
                      <span key={t} className="px-3 py-1 text-[11px] rounded-full"
                        style={{ border: '1px solid rgba(255,255,255,0.05)', color: '#4a3a28' }}>{t}</span>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl" style={{ border: '1px solid rgba(255,255,255,0.04)', background: '#0a0704' }}>
                    <p className="text-[13px] leading-relaxed italic" style={{ color: '#4a3a28' }}>
                      <span className="font-medium not-italic" style={{ color: '#d0c0b0' }}>Insight: </span>
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
      <section className="px-8 lg:px-16 py-20" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8">
          <div>
            <h2 className="font-['Cormorant_Garamond',serif] text-3xl lg:text-4xl font-bold mb-2" style={{ color: '#d0c0b0' }}>Let's craft something together.</h2>
            <p className="text-[14px]" style={{ color: '#3a2a1a' }}>Whether it's a drink menu or a digital product.</p>
          </div>
          <a href="mailto:cahyoprasetyo507@gmail.com"
            className="px-7 py-3.5 font-medium rounded-full text-[13px] tracking-wide whitespace-nowrap transition-all hover:opacity-90"
            style={{ background: '#d0c0b0', color: '#0c0906' }}>
            Get in Touch
          </a>
        </div>
      </section>

      {/* Footer breadcrumb */}
      <div className="px-8 py-5 flex justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
        <Link href="/developer" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#2a1a0a' }}>
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          Prev: Developer
        </Link>
        <span className="text-[11px] font-medium" style={{ color: '#2a1a0a' }}>03 / Beverage</span>
        <Link href="/" className="text-[11px] flex items-center gap-2 transition-colors" style={{ color: '#2a1a0a' }}>
          Back to Home
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </main>
  );
}
