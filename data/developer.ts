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
};

export const projects: DevProject[] = [
  {
    title: 'SkripIn',
    subtitle: { en: 'AI Script Generator SaaS', id: 'SaaS Generator Skrip AI' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    year: '2024',
    status: 'Production',
    description: {
      en: 'Production-ready AI script generator built from scratch. Features a 4-Agent AI workflow (Strategist → Director → Writer → Reviewer), Brand Voice system, OpenAI TTS, Teleprompter mode, and Midtrans payment integration. Engineered with 84 automated tests and 90%+ coverage.',
      id: 'Generator skrip AI siap produksi yang dibangun dari nol. Fitur alur kerja AI 4-Agen (Strategist → Director → Writer → Reviewer), sistem Brand Voice, OpenAI TTS, mode Teleprompter, dan integrasi pembayaran Midtrans. Dirancang dengan 84 pengujian otomatis dan cakupan 90%+.'
    },
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Google Gemini', 'OpenAI TTS', 'Jest', 'PostgreSQL', 'Firebase', 'Midtrans'],
    links: [{ label: 'Live App', href: 'https://skripin.vercel.app' }],
    highlights: [
      { en: '84 automated tests', id: '84 pengujian otomatis' },
      { en: '90%+ test coverage', id: '90%+ cakupan pengujian' },
      { en: '4-Agent AI workflow', id: 'Alur kerja AI 4-Agen' },
      { en: 'TTS + Teleprompter', id: 'TTS + Teleprompter' }
    ],
  },
  {
    title: 'MBTI Compatibility Test',
    subtitle: { en: 'AI-Powered Relationship Analyzer', id: 'Penganalisis Hubungan Berbasis AI' },
    type: { en: 'Web Application', id: 'Aplikasi Web' },
    year: '2024',
    status: 'Live',
    description: {
      en: 'Multi-dimensional MBTI compatibility analyzer with AI-generated relationship insights. Features freemium model with Midtrans payment, WhatsApp result delivery via n8n automation, and dual-person test flow. Sophisticated scoring algorithm across communication styles, conflict resolution, and love languages.',
      id: 'Penganalisis kecocokan MBTI multi-dimensi dengan wawasan hubungan yang dihasilkan AI. Fitur model freemium dengan pembayaran Midtrans, pengiriman hasil WhatsApp via otomasi n8n, dan alur tes dua orang. Algoritma penilaian canggih di seluruh gaya komunikasi, penyelesaian konflik, dan bahasa cinta.'
    },
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Zustand', 'Redis', 'Midtrans', 'n8n'],
    links: [{ label: 'Live Site', href: 'https://tes-kecocokan.vercel.app/' }],
    highlights: [
      { en: '16 MBTI types', id: '16 tipe MBTI' },
      { en: 'Freemium monetization', id: 'Monetisasi freemium' },
      { en: 'WhatsApp delivery', id: 'Pengiriman WhatsApp' },
      { en: 'AI-generated insights', id: 'Wawasan yang dihasilkan AI' }
    ],
  },
  {
    title: 'WhatsApp AI Chatbot',
    subtitle: { en: 'Intelligent Customer Service Bot', id: 'Bot Layanan Pelanggan Pintar' },
    type: { en: 'Automation', id: 'Otomasi' },
    year: '2024',
    status: 'Live',
    description: {
      en: 'Production-ready WhatsApp AI chatbot with advanced speech-to-text for voice notes, Google Gemini AI agent with custom personality, and per-user chat memory. Includes rate limiting, user tracking via Google Sheets, and multi-format message handling via n8n workflow automation.',
      id: 'Chatbot AI WhatsApp siap produksi dengan speech-to-text canggih untuk pesan suara, agen AI Google Gemini dengan kepribadian kustom, dan memori obrolan per pengguna. Termasuk pembatasan laju, pelacakan pengguna via Google Sheets, dan penanganan pesan multi-format via otomasi alur kerja n8n.'
    },
    tags: ['n8n', 'Google Gemini', 'WhatsApp Business API', 'Google STT', 'Google TTS', 'LangChain', 'Google Sheets API'],
    links: [{ label: 'Try Demo', href: 'https://wa.me/6281392290571' }],
    highlights: [
      { en: '20+ n8n nodes', id: '20+ node n8n' },
      { en: 'Voice note STT', id: 'STT pesan suara' },
      { en: 'Per-user memory', id: 'Memori per pengguna' },
      { en: 'Rate limiting', id: 'Pembatasan laju' }
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
      id: 'Aplikasi mobile native untuk pengusaha F&B untuk menghitung Harga Pokok Produksi (HPP). Pengguna mengelola inventaris bahan, membangun resep, dan mendapatkan perhitungan biaya otomatis dengan rekomendasi harga jual, markup, dan analisis margin keuntungan. Offline-first dengan sinkronisasi Firebase.'
    },
    tags: ['React Native', 'Firebase Auth', 'Firestore', 'Firebase Storage'],
    links: [
      {
        label: 'Download APK',
        href: 'https://drive.google.com/file/d/1evGGLMhyrsEbcBGFRzgjBmrKxW4Ce4tR/view?usp=sharing',
      },
    ],
    highlights: [
      { en: 'Offline-first', id: 'Offline-first' },
      { en: 'Auto HPP calculation', id: 'Perhitungan HPP otomatis' },
      { en: 'Margin analysis', id: 'Analisis margin' },
      { en: 'F&B industry', id: 'Industri F&B' }
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
    title: { en: 'Self-Taught Foundation', id: 'Fondasi Belajar Mandiri' },
    body: {
      en: 'Started coding from zero — HTML, CSS, JavaScript, then React. Spent months on freeCodeCamp, The Odin Project, and building small projects. Realized quickly that building real things teaches faster than any course.',
      id: 'Mulai coding dari nol — HTML, CSS, JavaScript, lalu React. Menghabiskan waktu berbulan-bulan di freeCodeCamp, The Odin Project, dan membangun proyek kecil. Segera menyadari bahwa membangun hal nyata melatih lebih cepat daripada kursus apa pun.'
}
  },
  {
    year: '2023',
    phase: { en: 'Production', id: 'Produksi' },
    title: { en: 'First Shipped Apps', id: 'Aplikasi Pertama yang Dirilis' },
    body: {
      en: 'Shipped HPP Calculator (React Native + Firebase) for real F&B entrepreneurs — the first app used by actual paying users. Validated that I could take an idea from concept to App Store without a team.',
      id: 'Merilis Kalkulator HPP (React Native + Firebase) untuk pengusaha F&B nyata — aplikasi pertama yang digunakan oleh pengguna berbayar. Memvalidasi bahwa saya bisa membawa ide dari konsep ke App Store tanpa tim.'
    }
  },
  {
    year: '2024 Q1',
    phase: 'SaaS',
    title: { en: 'Full-Stack SaaS Architecture', id: 'Arsitektur SaaS Full-Stack' },
    body: {
      en: 'Built MBTI Compatibility Test as a freemium SaaS — Prisma ORM, PostgreSQL, Redis, Midtrans payments, n8n WhatsApp delivery. First experience designing a complete monetization and data architecture.',
      id: 'Membangun Tes Kecocokan MBTI sebagai SaaS freemium — Prisma ORM, PostgreSQL, Redis, pembayaran Midtrans, pengiriman WhatsApp n8n. Pengalaman pertama merancang monetisasi lengkap dan arsitektur data.'
    }
  },
  {
    year: '2024 Q2',
    phase: 'AI',
    title: { en: 'AI Engineering & Automation', id: 'Teknik AI & Otomasi' },
    body: {
      en: 'Integrated Google Gemini and OpenAI into production apps. Built a WhatsApp AI chatbot with voice note STT, per-user memory, and rate limiting. Started treating AI as an engineering primitive, not a gimmick.',
      id: 'Mengintegrasikan Google Gemini dan OpenAI ke dalam aplikasi produksi. Membangun chatbot AI WhatsApp dengan STT pesan suara, memori per pengguna, dan pembatasan laju. Mulai memperlakukan AI sebagai primitif teknik, bukan sekadar gimik.'
    }
  },
  {
    year: '2024 Q3–Now',
    phase: { en: 'Quality', id: 'Kualitas' },
    title: { en: 'Test-Driven, Production-Grade', id: 'Berbasis Tes, Kelas Produksi' },
    body: {
      en: "SkripIn: 84 automated tests, 90%+ coverage, 4-Agent AI workflow, OpenAI TTS, teleprompter. Shifted from \"it works\" to \"it's engineered\". Production-quality code with CI/CD, error boundaries, and systematic review.",
      id: "SkripIn: 84 pengujian otomatis, cakupan 90%+, alur kerja AI 4-Agen, OpenAI TTS, teleprompter. Bergeser dari \"asal jalan\" ke \"benar-benar dirancang\". Kode kualitas produksi dengan CI/CD, batas kesalahan, dan tinjauan sistematis."
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
  { n: '4+', l: { en: 'Apps Shipped', id: 'Aplikasi Dirilis' }, key: 'apps' },
  { n: '3+', l: { en: 'AI Integrations', id: 'Integrasi AI' }, key: 'ai' },
];