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
      en: 'Production-grade Solana trading bot with real-time Pump.fun WebSocket radar, 4-tier trailing stop system, and adaptive risk management. Features a multi-factor signal scorer across velocity, buy pressure, and wallet concentration — with copy trading, DCA & grid strategies, and a full Telegram command interface.',
      id: 'Bot trading Solana siap produksi dengan radar WebSocket Pump.fun real-time, sistem trailing stop 4 tahap, dan manajemen risiko adaptif. Dilengkapi signal scorer multi-faktor (velocity, buy pressure, konsentrasi wallet), copy trading, strategi DCA & grid, dan antarmuka perintah lengkap via Telegram.'
    },
    tags: [
      'Node.js', 'Solana Web3.js', '@pump-fun/pump-sdk',
      'Telegraf', 'WebSocket', 'Jupiter API', 'PumpSwap AMM', 'Risk Management'
    ],
    links: [
      { label: 'Telegram Demo', href: 'https://t.me/your_bot' }
    ],
    highlights: [
      { en: 'Real-time Pump.fun WebSocket radar', id: 'Radar WebSocket Pump.fun real-time' },
      { en: 'Multi-factor signal scorer (score/100)', id: 'Signal scorer multi-faktor (skor/100)' },
      { en: '4-tier trailing stop + adaptive SL', id: 'Trailing stop 4 tahap + SL adaptif' },
      { en: 'DCA, grid & copy trading strategies', id: 'Strategi DCA, grid & copy trading' }
    ],
  },
  {
    title: 'SkripIn',
    subtitle: { en: 'AI Script Generator SaaS', id: 'SaaS Generator Skrip Berbasis AI' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    year: '2025',
    status: 'Production',
    description: {
      en: 'Production-ready AI script generator built from scratch. Features a 4-Agent AI workflow (Strategist → Director → Writer → Reviewer), Brand Voice system, OpenAI TTS, Teleprompter mode, and Midtrans payment integration. Engineered with 84 automated tests and 90%+ coverage.',
      id: 'Generator skrip AI siap produksi yang dibangun dari nol. Dilengkapi alur kerja 4 Agen AI (Strategist → Director → Writer → Reviewer), sistem Brand Voice, OpenAI TTS, mode Teleprompter, dan integrasi pembayaran Midtrans. Dibangun dengan 84 automated test dan cakupan 90%+.'
    },
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Google Gemini', 'OpenAI TTS', 'Jest', 'PostgreSQL', 'Firebase', 'Midtrans'],
    links: [{ label: 'Live App', href: 'https://skripin.vercel.app' }],
    highlights: [
      { en: '84 automated tests', id: '84 automated test' },
      { en: '90%+ test coverage', id: 'Cakupan tes 90%+' },
      { en: '4-Agent AI workflow', id: 'Alur 4 Agen AI' },
      { en: 'TTS + Teleprompter', id: 'TTS + Teleprompter' }
    ],
  },
  {
    title: 'MBTI Compatibility Test',
    subtitle: { en: 'AI-Powered Relationship Analyzer', id: 'Analisis Hubungan Berbasis AI' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    year: '2025',
    status: 'Live',
    description: {
      en: 'Multi-dimensional MBTI compatibility analyzer with AI-generated relationship insights. Features freemium model with Midtrans payment, WhatsApp result delivery via n8n automation, and dual-person test flow. Sophisticated scoring algorithm across communication styles, conflict resolution, and love languages.',
      id: 'Penganalisis kecocokan MBTI multi-dimensi dengan insight hubungan yang dihasilkan AI. Mengusung model freemium dengan pembayaran Midtrans, pengiriman hasil via WhatsApp lewat otomasi n8n, dan alur tes untuk dua orang. Algoritma penilaian yang mencakup gaya komunikasi, penyelesaian konflik, dan bahasa cinta.'
    },
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Zustand', 'Redis', 'Midtrans', 'n8n'],
    links: [{ label: 'Live Site', href: 'https://tes-kecocokan.vercel.app/' }],
    highlights: [
      { en: '16 MBTI types', id: '16 tipe MBTI' },
      { en: 'Freemium monetization', id: 'Model freemium' },
      { en: 'WhatsApp delivery', id: 'Kirim hasil via WhatsApp' },
      { en: 'AI-generated insights', id: 'Insight dari AI' }
    ],
  },
  {
    title: 'WhatsApp AI Chatbot',
    subtitle: { en: 'Intelligent Customer Service Bot', id: 'Bot Layanan Pelanggan Cerdas' },
    type: { en: 'Automation', id: 'Otomasi' },
    year: '2024',
    status: 'Live',
    description: {
      en: 'Production-ready WhatsApp AI chatbot with advanced speech-to-text for voice notes, Google Gemini AI agent with custom personality, and per-user chat memory. Includes rate limiting, user tracking via Google Sheets, and multi-format message handling via n8n workflow automation.',
      id: 'Chatbot AI WhatsApp siap produksi dengan kemampuan speech-to-text untuk pesan suara, agen AI Google Gemini berkepribadian kustom, dan memori percakapan per pengguna. Dilengkapi rate limiting, pelacakan pengguna via Google Sheets, dan penanganan berbagai format pesan lewat otomasi n8n.'
    },
    tags: ['n8n', 'Google Gemini', 'WhatsApp Business API', 'Google STT', 'Google TTS', 'LangChain', 'Google Sheets API'],
    links: [{ label: 'Coba Demo', href: 'https://wa.me/6281392290571' }],
    highlights: [
      { en: '20+ n8n nodes', id: '20+ node n8n' },
      { en: 'Voice note STT', id: 'STT untuk pesan suara' },
      { en: 'Per-user memory', id: 'Memori per pengguna' },
      { en: 'Rate limiting', id: 'Rate limiting' }
    ],
  },
  {
    title: 'HPP Calculator',
    subtitle: { en: 'Cost Price Calculation — Mobile App', id: 'Kalkulator HPP — Aplikasi Mobile' },
    type: { en: 'Mobile App', id: 'Aplikasi Mobile' },
    year: '2023',
    status: 'Shipped',
    description: {
      en: 'Native mobile app for F&B entrepreneurs to calculate Harga Pokok Produksi (HPP). Users manage ingredient inventory, build recipes, and get automatic cost calculations with selling price recommendations, markup, and profit margin analysis. Offline-first with Firebase sync.',
      id: 'Aplikasi mobile native untuk pelaku usaha F&B dalam menghitung Harga Pokok Produksi (HPP). Pengguna bisa mengelola inventaris bahan, menyusun resep, dan mendapat kalkulasi biaya otomatis lengkap dengan rekomendasi harga jual, markup, dan analisis margin keuntungan. Bisa dipakai offline dengan sinkronisasi Firebase.'
    },
    tags: ['React Native', 'Firebase Auth', 'Firestore', 'Firebase Storage'],
    links: [
      {
        label: 'Download APK',
        href: 'https://drive.google.com/file/d/1evGGLMhyrsEbcBGFRzgjBmrKxW4Ce4tR/view?usp=sharing',
      },
    ],
    highlights: [
      { en: 'Offline-first', id: 'Bisa dipakai offline' },
      { en: 'Auto HPP calculation', id: 'Kalkulasi HPP otomatis' },
      { en: 'Margin analysis', id: 'Analisis margin' },
      { en: 'F&B industry', id: 'Khusus industri F&B' }
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