import type { JourneyItem, SkillBar, BilingualString } from '@/lib/types';

export interface DevProject {
  title: string;
  subtitle: string | BilingualString;
  type: string | BilingualString;
  year: string;
  status: string;
  description: string | BilingualString;
  tags: string[];
  links: { label: string; href: string }[];
  highlights: string[] | BilingualString[];
}

export interface DevInsightItem {
  title: BilingualString;
  body: BilingualString;
}

export const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  Production: { bg: 'rgba(16,185,129,0.07)', text: '#34d399', border: 'rgba(16,185,129,0.2)' },
  Live: { bg: 'rgba(16,185,129,0.07)', text: '#34d399', border: 'rgba(16,185,129,0.2)' },
  Shipped: { bg: 'rgba(148,163,184,0.07)', text: '#94a3b8', border: 'rgba(148,163,184,0.15)' },
  'Algo Trading': {
    bg: 'rgba(100,130,200,0.08)', text: '#6a8ab8', border: 'rgba(100,130,200,0.18)'
  },
};

export const projects: DevProject[] = [
  {
    title: 'Crypto Radar Trading Bot',
    subtitle: {
      en: 'Autonomous Pump.fun Signal & Trading Bot',
      id: 'Bot Trading & Sinyal Pump.fun Otonom'
    },
    type: { en: 'Automation', id: 'Otomasi' },
    year: '2026',
    status: 'Algo Trading',   // ← badge khusus amber
    description: {
      en: 'Built to solve one core problem: high-volatility memecoin entries were too slow and emotional. This bot automates signal detection and execution in real time, then protects downside with layered trailing stops and adaptive risk controls.',
      id: 'Dibangun untuk menyelesaikan satu masalah utama: entry memecoin yang super volatil sering telat dan emosional. Bot ini mengotomatiskan deteksi sinyal dan eksekusi real-time, lalu melindungi risiko lewat trailing stop bertingkat dan risk control adaptif.'
    },
    tags: [
      'Node.js', 'Solana Web3.js', '@pump-fun/pump-sdk',
      'Telegraf', 'WebSocket', 'Jupiter API', 'PumpSwap AMM', 'Risk Management'
    ],
    links: [
      { label: 'Contact for Demo', href: 'https://wa.me/6281392290571?text=Hi%2C%20I%27m%20interested%20in%20the%20Crypto%20Radar%20Trading%20Bot%20demo' }
    ],
    highlights: [
      { en: 'Cuts response time from manual monitoring to instant event-based execution', id: 'Memangkas waktu respons dari pantau manual jadi eksekusi berbasis event secara instan' },
      { en: 'Reduces emotional entries with score-based signal validation', id: 'Mengurangi entry emosional dengan validasi sinyal berbasis skor' },
      { en: 'Protects capital using adaptive stop logic in fast-changing markets', id: 'Melindungi modal lewat stop logic adaptif di market yang berubah cepat' },
      { en: 'Runs unattended through Telegram command and monitoring flow', id: 'Bisa jalan semi-autonomous lewat command dan monitoring flow di Telegram' }
    ],
  },
  {
    title: 'SkripIn',
    subtitle: { en: 'AI Script Generator SaaS', id: 'SaaS Generator Skrip Berbasis AI' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    year: '2025',
    status: 'Production',
    description: {
      en: 'Designed for creators who were stuck between inconsistent script quality and slow turnaround. SkripIn turns rough ideas into ready-to-shoot scripts fast, while preserving each brand voice through a structured multi-agent workflow.',
      id: 'Dirancang untuk creator yang terjebak antara kualitas skrip yang nggak konsisten dan proses yang lambat. SkripIn mengubah ide mentah jadi skrip siap produksi lebih cepat, sambil tetap menjaga brand voice lewat workflow multi-agent yang terstruktur.'
    },
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Google Gemini', 'OpenAI TTS', 'Jest', 'PostgreSQL', 'Firebase', 'Midtrans'],
    links: [{ label: 'Live App', href: 'https://skripin.my.id' }],
    highlights: [
      { en: 'Improves script consistency with a role-based AI pipeline', id: 'Meningkatkan konsistensi skrip lewat pipeline AI berbasis peran' },
      { en: 'Shortens production prep using TTS and teleprompter-ready output', id: 'Mempercepat persiapan produksi lewat output TTS dan teleprompter-ready' },
      { en: 'Keeps monetization simple with integrated payment flow', id: 'Membuat monetisasi tetap sederhana lewat payment flow terintegrasi' },
      { en: 'Maintains reliability through targeted automated testing', id: 'Menjaga reliability lewat automated testing yang terarah' }
    ],
  },
  {
    title: 'MBTI Compatibility Test',
    subtitle: { en: 'AI-Powered Relationship Analyzer', id: 'Analisis Hubungan Berbasis AI' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    year: '2025',
    status: 'Live',
    description: {
      en: 'Built to solve drop-off in relationship quiz products: users wanted deeper insight, not generic scores. This app delivers richer, personalized analysis and converts better with an automated WhatsApp delivery and freemium upsell flow.',
      id: 'Dibangun untuk mengatasi drop-off pada produk kuis hubungan: user butuh insight yang lebih dalam, bukan skor generik. Aplikasi ini memberi analisis personal yang lebih kaya dan membantu konversi lewat pengiriman otomatis via WhatsApp serta freemium upsell flow.'
    },
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Zustand', 'Redis', 'Midtrans', 'n8n'],
    links: [{ label: 'Live Site', href: 'https://tes-kecocokan.my.id/' }],
    highlights: [
      { en: 'Increases perceived value with multi-dimensional compatibility output', id: 'Meningkatkan perceived value lewat output kompatibilitas multi-dimensi' },
      { en: 'Improves conversion with freemium + seamless payment journey', id: 'Meningkatkan konversi lewat freemium + payment journey yang mulus' },
      { en: 'Boosts completion with instant result delivery via WhatsApp', id: 'Meningkatkan completion lewat pengiriman hasil instan via WhatsApp' },
      { en: 'Creates stickier experience through AI-personalized insight', id: 'Membuat experience lebih sticky lewat insight personal dari AI' }
    ],
  },
  {
    title: 'WhatsApp AI Chatbot',
    subtitle: { en: 'Intelligent Customer Service Bot', id: 'Bot Layanan Pelanggan Cerdas' },
    type: { en: 'Automation', id: 'Otomasi' },
    year: '2024',
    status: 'Live',
    description: {
      en: 'Created to reduce repetitive customer support workload on WhatsApp. The bot handles common questions, voice notes, and follow-up context automatically so response time stays fast even with high incoming volume.',
      id: 'Dibuat untuk mengurangi beban support yang repetitif di WhatsApp. Bot ini menangani pertanyaan umum, voice note, dan konteks lanjutan secara otomatis supaya response time tetap cepat saat volume chat tinggi.'
    },
    tags: ['n8n', 'Google Gemini', 'WhatsApp Business API', 'Google STT', 'Google TTS', 'LangChain', 'Google Sheets API'],
    links: [{ label: 'Coba Demo', href: 'https://wa.me/6281392290571' }],
    highlights: [
      { en: 'Cuts repetitive support replies through automated triage', id: 'Mengurangi balasan support yang repetitif lewat triage otomatis' },
      { en: 'Supports voice-heavy users with built-in STT pipeline', id: 'Mendukung user yang dominan voice note lewat pipeline STT bawaan' },
      { en: 'Improves conversation continuity with per-user memory', id: 'Meningkatkan kesinambungan percakapan dengan memori per-user' },
      { en: 'Keeps system stable with abuse and rate-limit controls', id: 'Menjaga sistem stabil dengan kontrol abuse dan rate limit' }
    ],
  },
  {
    title: 'HPP Calculator',
    subtitle: { en: 'Cost Price Calculation — Mobile App', id: 'Kalkulator HPP — Aplikasi Mobile' },
    type: { en: 'Mobile App', id: 'Aplikasi Mobile' },
    year: '2023',
    status: 'Shipped',
    description: {
      en: 'Built for F&B owners who priced products by guesswork and lost margin. The app standardizes HPP calculation, gives recommended selling prices, and keeps costing available even when internet is unstable.',
      id: 'Dibangun untuk owner F&B yang sering menentukan harga pakai perkiraan dan akhirnya kehilangan margin. Aplikasi ini menstandarkan kalkulasi HPP, memberi rekomendasi harga jual, dan tetap bisa dipakai meski internet tidak stabil.'
    },
    tags: ['React Native', 'Firebase Auth', 'Firestore', 'Firebase Storage'],
    links: [
      {
        label: 'Download APK',
        href: 'https://drive.google.com/file/d/1evGGLMhyrsEbcBGFRzgjBmrKxW4Ce4tR/view?usp=sharing',
      },
    ],
    highlights: [
      { en: 'Reduces pricing guesswork with recipe-level cost visibility', id: 'Mengurangi pricing guesswork dengan visibilitas biaya per resep' },
      { en: 'Improves margin control through automatic HPP and markup analysis', id: 'Meningkatkan kontrol margin lewat analisis HPP dan markup otomatis' },
      { en: 'Works reliably during service with offline-first architecture', id: 'Tetap andal saat jam operasional lewat arsitektur offline-first' },
      { en: 'Designed specifically for real-world F&B workflow', id: 'Dirancang spesifik untuk workflow F&B di lapangan' }
    ],
  },
];

export const techStack: Record<string, string[]> = {
  Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Native'],
  Backend: ['Node.js', 'PostgreSQL', 'Firebase', 'Prisma ORM', 'Redis'],
  'AI & Automation': ['Google Gemini', 'OpenAI', 'n8n', 'LangChain', 'Jest'],
};

export const devJourney: JourneyItem[] = [
  {
    year: '2022',
    phase: { en: 'Start', id: 'Awal' },
    title: { en: 'Self-Taught Foundation', id: 'Belajar dari Nol' },
    body: {
      en: 'Started coding from zero — HTML, CSS, JavaScript, then React. Spent months on freeCodeCamp, The Odin Project, and building small projects. Realized quickly that building real things teaches faster than any course.',
      id: 'Mulai coding dari nol — HTML, CSS, JavaScript, lalu React. Berbulan-bulan bergulat dengan freeCodeCamp, The Odin Project, dan proyek-proyek kecil. Satu hal yang cepat saya sadari: membangun sesuatu yang nyata jauh lebih efektif dari kursus mana pun.'
    }
  },
  {
    year: '2023',
    phase: { en: 'Production', id: 'Produksi' },
    title: { en: 'First Shipped Apps', id: 'Aplikasi Pertama yang Diluncurkan' },
    body: {
      en: 'Shipped HPP Calculator (React Native + Firebase) for real F&B entrepreneurs — the first app used by actual paying users. Validated that I could take an idea from concept to App Store without a team.',
      id: 'Meluncurkan Kalkulator HPP (React Native + Firebase) untuk pelaku usaha F&B nyata — aplikasi pertama yang benar-benar digunakan pengguna berbayar. Ini membuktikan bahwa saya bisa membawa ide dari konsep hingga ke App Store, sendirian.'
    }
  },
  {
    year: '2024 Q1',
    phase: 'SaaS',
    title: { en: 'Full-Stack SaaS Architecture', id: 'Arsitektur SaaS Full-Stack' },
    body: {
      en: 'Built MBTI Compatibility Test as a freemium SaaS — Prisma ORM, PostgreSQL, Redis, Midtrans payments, n8n WhatsApp delivery. First experience designing a complete monetization and data architecture.',
      id: 'Membangun Tes Kecocokan MBTI sebagai SaaS freemium — Prisma ORM, PostgreSQL, Redis, pembayaran Midtrans, pengiriman hasil via WhatsApp dengan n8n. Pertama kalinya saya merancang arsitektur monetisasi dan data secara menyeluruh.'
    }
  },
  {
    year: '2024 Q2',
    phase: 'AI',
    title: { en: 'AI Engineering & Automation', id: 'Rekayasa AI & Otomasi' },
    body: {
      en: 'Integrated Google Gemini and OpenAI into production apps. Built a WhatsApp AI chatbot with voice note STT, per-user memory, and rate limiting. Started treating AI as an engineering primitive, not a gimmick.',
      id: 'Mengintegrasikan Google Gemini dan OpenAI ke dalam aplikasi produksi. Membangun chatbot AI WhatsApp dengan STT pesan suara, memori per pengguna, dan rate limiting. Di sini saya mulai memperlakukan AI sebagai komponen teknik yang serius, bukan sekadar fitur pemanis.'
    }
  },
  {
    year: '2024 Q3–Now',
    phase: { en: 'Quality', id: 'Kualitas' },
    title: { en: 'Test-Driven, Production-Grade', id: 'Berbasis Tes, Standar Produksi' },
    body: {
      en: "SkripIn: 84 automated tests, 90%+ coverage, 4-Agent AI workflow, OpenAI TTS, teleprompter. Shifted from \"it works\" to \"it's engineered\". Production-quality code with CI/CD, error boundaries, and systematic review.",
      id: 'SkripIn: 84 automated test, cakupan 90%+, alur 4 Agen AI, OpenAI TTS, teleprompter. Pergeseran dari "asal jalan" ke "benar-benar dirancang". Kode berkualitas produksi dengan CI/CD, error boundary, dan review sistematis.'
    }
  },
];

export const devSkills: SkillBar[] = [
  { name: 'React / Next.js', level: 92, cat: 'Frontend' },
  { name: 'TypeScript', level: 88, cat: 'Frontend' },
  { name: 'Node.js / API Design', level: 85, cat: 'Backend' },
  { name: 'PostgreSQL / Prisma', level: 82, cat: 'Backend' },
  { name: 'AI Integration', level: 87, cat: 'AI' },
  { name: 'n8n Automation', level: 90, cat: 'AI' },
  { name: 'Testing (Jest)', level: 85, cat: 'Quality' },
  { name: 'React Native', level: 78, cat: 'Mobile' },
];

export const heroStats = [
  { n: '2022–Now', l: { en: 'Active', id: 'Aktif' }, key: 'since' },
  { n: '84', l: { en: 'Tests', id: 'Tes' }, key: 'tests' },
  { n: '90%+', l: { en: 'Coverage', id: 'Cakupan' }, key: 'cov' },
  { n: '4+', l: { en: 'Apps Shipped', id: 'Aplikasi Rilis' }, key: 'apps' },
  { n: '3+', l: { en: 'AI Integrations', id: 'Integrasi AI' }, key: 'ai' },
];

export const quickOverview = [
  { label: { en: 'Core Strength', id: 'Kekuatan Utama' }, value: { en: 'Shipping useful products fast', id: 'Nge-ship produk yang kepake cepat' } },
  { label: { en: 'Main Focus', id: 'Fokus Utama' }, value: { en: 'Problem → Build → Validate', id: 'Problem → Build → Validate' } },
  { label: { en: 'Work Style', id: 'Cara Kerja' }, value: { en: 'Pragmatic quality, not vanity engineering', id: 'Quality pragmatis, bukan engineering vanity' } },
  { label: { en: 'Best Fit', id: 'Paling Cocok' }, value: { en: '0→1 products, automation-heavy workflows', id: 'Produk 0→1, workflow dengan otomasi tinggi' } },
];

export const teamCollaboration: DevInsightItem[] = [
  {
    title: { en: 'Async-First Communication', id: 'Komunikasi Async-First' },
    body: {
      en: 'I break features into clear scopes, share progress in short written updates, and keep decisions documented so designers, PMs, and engineers stay aligned.',
      id: 'Saya membagi fitur jadi scope yang jelas, update progres secara ringkas, dan dokumentasikan keputusan supaya desainer, PM, dan engineer tetap sinkron.'
    }
  },
  {
    title: { en: 'Review-Ready Delivery', id: 'Delivery Siap Review' },
    body: {
      en: 'I aim for small, reviewable increments with explicit trade-offs and risk notes, making code review faster and team collaboration less friction-heavy.',
      id: 'Saya mengutamakan increment kecil yang gampang direview, lengkap dengan trade-off dan catatan risiko, supaya code review lebih cepat dan kolaborasi tim lebih minim friksi.'
    }
  },
];

export const engineeringJudgement: DevInsightItem[] = [
  {
    title: { en: 'When To Go Deep', id: 'Kapan Harus Dalam' },
    body: {
      en: 'I invest heavier testing on payment flow, auth, and automation logic where regression is expensive.',
      id: 'Saya investasi testing lebih dalam untuk payment flow, auth, dan logika otomasi yang biaya regresinya mahal.'
    }
  },
  {
    title: { en: 'When To Move Fast', id: 'Kapan Harus Cepat' },
    body: {
      en: 'For low-risk UI and exploratory features, I optimize for learning speed first, then harden after usage signals are clear.',
      id: 'Untuk UI berisiko rendah dan fitur eksploratif, saya prioritaskan kecepatan belajar dulu, lalu hardening setelah sinyal penggunaan sudah jelas.'
    }
  },
];