import { BilingualString } from '@/lib/types';

// ─── Services ────────────────────────────────────────────────────────────────
export interface Service {
  icon: string;
  key: string;
  title: BilingualString;
  body: BilingualString;
  tags: string[];
  color: string;
}

export const services: Service[] = [
  {
    icon: '⬡',
    key: 'webapp',
    title: { en: 'Web App Development', id: 'Pengembangan Web App' },
    body: {
      en: 'For SaaS, internal tools, dashboards, and custom business flows that need a solid product foundation.',
      id: 'Untuk SaaS, internal tools, dashboard, dan alur bisnis custom yang butuh fondasi produk yang solid.',
    },
    tags: ['Next.js', 'React', 'TypeScript', 'PostgreSQL'],
    color: '#7aa0de',
  },
  {
    icon: '⬡',
    key: 'ai',
    title: { en: 'AI Integration', id: 'Integrasi AI' },
    body: {
      en: 'For AI features that are useful in production: generation, classification, assistants, and workflow automation.',
      id: 'Untuk fitur AI yang benar-benar berguna di produksi: generation, classification, assistant, dan workflow automation.',
    },
    tags: ['Gemini', 'OpenAI', 'LangChain', 'n8n'],
    color: '#34d399',
  },
  {
    icon: '⬡',
    key: 'automation',
    title: { en: 'Automation Systems', id: 'Sistem Otomasi' },
    body: {
      en: 'For repetitive operational work that should be handled by APIs, webhooks, and orchestration tools.',
      id: 'Untuk pekerjaan operasional repetitif yang seharusnya ditangani API, webhook, dan tools orchestration.',
    },
    tags: ['n8n', 'WhatsApp API', 'Webhooks', 'Redis'],
    color: '#f59e0b',
  },
];

// ─── Process Steps ────────────────────────────────────────────────────────────
export interface ProcessStep {
  num: string;
  cmd: string;
  title: BilingualString;
  body: BilingualString;
}

export const processSteps: ProcessStep[] = [
  {
    num: '01',
    cmd: 'send_brief()',
    title: { en: 'Brief', id: 'Brief' },
    body: {
      en: 'You send the business context, problem, timeline, and budget range.',
      id: 'Kamu kirim konteks bisnis, masalah utama, timeline, dan range budget.',
    },
  },
  {
    num: '02',
    cmd: 'scope_review()',
    title: { en: 'Scope Review', id: 'Review Scope' },
    body: {
      en: 'I review feasibility, clarify missing details, and identify the fastest version worth building first.',
      id: 'Aku review kelayakan, klarifikasi detail yang kurang, dan cari versi tercepat yang layak dibangun lebih dulu.',
    },
  },
  {
    num: '03',
    cmd: 'get_proposal()',
    title: { en: 'Proposal', id: 'Proposal' },
    body: {
      en: 'You get a practical recommendation: scope, stack, milestones, and next action.',
      id: 'Kamu dapat rekomendasi yang praktis: scope, stack, milestone, dan next action.',
    },
  },
  {
    num: '04',
    cmd: 'build_ship()',
    title: { en: 'Build & Ship', id: 'Build & Ship' },
    body: {
      en: 'Iterative delivery with clear checkpoints. You see progress before the final handoff.',
      id: 'Delivery iteratif dengan checkpoint yang jelas. Kamu lihat progress sebelum serah terima akhir.',
    },
  },
];

// ─── FAQs ─────────────────────────────────────────────────────────────────────
export interface Faq {
  q: BilingualString;
  a: BilingualString;
}

export const faqs: Faq[] = [
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
  {
    q: { en: "What's your typical timeline?", id: 'Berapa lama biasanya timeline proyeknya?' },
    a: {
      en: 'MVP in 2–4 weeks, full SaaS in 6–12 weeks depending on scope. We define checkpoints up front.',
      id: 'MVP biasanya 2–4 minggu, SaaS penuh 6–12 minggu tergantung scope. Checkpoint kita tentukan di awal.',
    },
  },
];

// ─── Budget Tiers ──────────────────────────────────────────────────────────────
export interface BudgetTier {
  label: string;
  price: string;
  desc: BilingualString;
  items: { en: string[]; id: string[] };
  highlight?: boolean;
}

export const budgetTiers: BudgetTier[] = [
  {
    label: 'MVP',
    price: 'Rp1.5jt – Rp5jt',
    desc: { en: 'Landing page, mini app, validation build', id: 'Landing page, mini app, validation build' },
    items: { en: ['Basic auth', 'Core feature set', 'Deployed MVP'], id: ['Auth dasar', 'Fitur inti', 'MVP deployed'] },
  },
  {
    label: 'Growth',
    price: 'Rp5jt – Rp15jt',
    desc: { en: 'SaaS MVP, dashboard, AI feature set', id: 'SaaS MVP, dashboard, AI feature set' },
    items: {
      en: ['Full auth + payments', 'AI integration', 'Admin panel', 'Analytics'],
      id: ['Auth + pembayaran', 'Integrasi AI', 'Panel admin', 'Analytics'],
    },
    highlight: true,
  },
  {
    label: 'Automation',
    price: 'Mulai Rp1.5jt',
    desc: { en: 'Webhook, CRM flow, WhatsApp bot, ops automation', id: 'Webhook, CRM flow, WhatsApp bot, otomasi operasional' },
    items: {
      en: ['n8n workflows', 'WhatsApp integration', 'Multi-system sync'],
      id: ['Workflow n8n', 'Integrasi WhatsApp', 'Sinkronisasi multi-sistem'],
    },
  },
];

// ─── Stats ────────────────────────────────────────────────────────────────────
export interface Stat {
  n: string;
  l: BilingualString;
}

export const stats: Stat[] = [
  { n: '4+', l: { en: 'Apps Shipped', id: 'App Dirilis' } },
  { n: '84', l: { en: 'Automated Tests', id: 'Test Otomatis' } },
  { n: '3+', l: { en: 'AI Integrations', id: 'Integrasi AI' } },
  { n: '90%+', l: { en: 'Coverage', id: 'Cakupan' } },
];

// ─── Terminal Lines ────────────────────────────────────────────────────────────
export interface TerminalLine {
  type: 'cmd' | 'out' | 'blink';
  text: string;
}

export const terminalLines: TerminalLine[] = [
  { type: 'cmd', text: '$ whoami' },
  { type: 'out', text: 'agung_cahyo_prasetyo — full-stack developer' },
  { type: 'cmd', text: '$ cat availability.json' },
  { type: 'out', text: '{ "status": "open", "focus": "developer projects" }' },
  { type: 'cmd', text: '$ ls services/' },
  { type: 'out', text: 'web-apps/  ai-integration/  automation/' },
  { type: 'cmd', text: '$ echo $STACK' },
  { type: 'out', text: 'Next.js TypeScript PostgreSQL Gemini n8n' },
  { type: 'blink', text: '$ _' },
];
