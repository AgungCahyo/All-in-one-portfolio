import type { JourneyItem, SkillBar, SkillCategory, PhilosophyItem, BilingualString } from '@/lib/types';

export interface BeverageCreation {
  title: BilingualString;
  subtitle: BilingualString;
  type: BilingualString;
  description: BilingualString;
  tags: string[];
  insight: BilingualString;
}

export interface LeadershipTrait {
  note: BilingualString;
  icon: string;
}

export interface LeadershipPractice {
  title: BilingualString;
  body: BilingualString;
}

export const creations: BeverageCreation[] = [
  {
    title: { en: 'Beverage Training SOP', id: 'SOP Pelatihan Minuman' },
    subtitle: { en: 'Onboarding, coaching, and documented standards', id: 'Onboarding, coaching, dan standar terdokumentasi' },
    type: { en: 'Leadership', id: 'Kepemimpinan' },
    description: {
      en: 'Built a repeatable training system so new bar staff could reach service-ready quality faster. Led hands-on sessions, wrote SOPs for prep and peak-hour flow, and cut onboarding from 2 weeks to 4 days without dropping consistency.',
      id: 'Membangun sistem pelatihan yang bisa diulang supaya staf bar baru siap layanan lebih cepat. Memimpin sesi langsung, menyusun SOP prep dan alur jam sibuk, dan memangkas onboarding dari 2 minggu menjadi 4 hari tanpa menurunkan konsistensi.'
    },
    tags: ['Staff Training', 'SOP', 'Coaching', 'Quality Control', 'Documentation'],
    insight: {
      en: 'Leadership here is not a title — it is making the next person able to run the station without you standing over them.',
      id: 'Leadership di sini bukan gelar — tapi membuat orang berikutnya bisa menjalankan station tanpa harus diawasi terus.'
    },
  },
  {
    title: { en: 'Peak-Hour Team Coordination', id: 'Koordinasi Tim Jam Sibuk' },
    subtitle: { en: 'Shift ownership when volume spikes', id: 'Ownership shift saat volume naik' },
    type: { en: 'Operations', id: 'Operasional' },
    description: {
      en: 'Coordinated beverage teams through high-volume shifts and seasonal menu changes. Assigned roles, kept communication short, and protected speed-of-service without sacrificing the standard guests already expected.',
      id: 'Mengkoordinasikan tim minuman di shift volume tinggi dan saat menu musiman berganti. Membagi peran, menjaga komunikasi singkat, dan melindungi kecepatan layanan tanpa mengorbankan standar yang sudah diharapkan tamu.'
    },
    tags: ['Shift Coordination', 'High-Volume Service', 'Communication', 'Prioritization'],
    insight: {
      en: 'A calm station during rush is a leadership output — not luck, and not individual talent alone.',
      id: 'Station yang tenang di jam sibuk itu hasil leadership — bukan keberuntungan, dan bukan bakat individu semata.'
    },
  },
  {
    title: { en: 'Menu Ownership & Cost Control', id: 'Ownership Menu & Kontrol Biaya' },
    subtitle: { en: 'Sourcing, costing, and seasonal updates', id: 'Pengadaan, costing, dan pembaruan musiman' },
    type: { en: 'Operations', id: 'Operasional' },
    description: {
      en: 'Took ownership of beverage menu decisions — sourcing, costing, and seasonal rotation — so the team had a clear offering they could execute at scale. Used the same systems mindset later applied in software: document the standard, then coach people to hit it.',
      id: 'Memegang keputusan menu minuman — pengadaan, costing, dan rotasi musiman — supaya tim punya offering yang jelas dan bisa dieksekusi dalam skala. Pola pikirnya sama dengan software: dokumentasikan standar, lalu latih orang untuk mencapainya.'
    },
    tags: ['Menu Engineering', 'Cost Control', 'Inventory', 'Seasonal Planning'],
    insight: {
      en: 'Owning a menu is owning a system: ingredients, people, timing, and the guest experience all have to stay in sync.',
      id: 'Memegang menu berarti memegang sistem: bahan, orang, timing, dan pengalaman tamu harus tetap selaras.'
    },
  },
  {
    title: { en: 'Quality Standard Across Stations', id: 'Standar Kualitas Antar Station' },
    subtitle: { en: 'Consistency the whole team can reproduce', id: 'Konsistensi yang bisa direproduksi seluruh tim' },
    type: { en: 'Quality Systems', id: 'Sistem Kualitas' },
    description: {
      en: 'Turned recipe knowledge into team-wide standards: batch prep, garnish, and pour consistency that did not depend on one person being on shift. Craft became a teaching tool — the point was a station anyone trained could run.',
      id: 'Mengubah pengetahuan resep menjadi standar tim: prep massal, garnish, dan konsistensi pour yang tidak bergantung pada satu orang saja yang masuk shift. Craft jadi alat mengajar — tujuannya station yang bisa dijalankan siapa pun yang sudah dilatih.'
    },
    tags: ['Quality Control', 'Batch Preparation', 'Knowledge Transfer', 'Reproducibility'],
    insight: {
      en: 'If only one person can make it right, the operation is fragile. Leadership is making quality transferable.',
      id: 'Kalau cuma satu orang yang bisa bikin dengan benar, operasionalnya rapuh. Leadership adalah membuat kualitas bisa ditransfer.'
    },
  },
];

export const journey: JourneyItem[] = [
  {
    year: '2019',
    phase: { en: 'Foundation', id: 'Fondasi' },
    title: { en: 'Vocational School Graduate — Culinary Arts', id: 'Lulus SMK Tata Boga' },
    body: {
      en: 'Formal culinary & beverage education. Learned hygiene, service standards, and how precision in a kitchen becomes trust on the floor.',
      id: 'Pendidikan formal kuliner dan minuman. Belajar higienitas, standar layanan, dan bagaimana presisi di dapur menjadi kepercayaan di lantai operasional.'
    },
  },
  {
    year: '2020',
    phase: { en: 'Entry', id: 'Awal Karir' },
    title: { en: 'First F&B Role', id: 'Langkah Pertama di Industri F&B' },
    body: {
      en: 'Entered hospitality under pressure. Learned high-volume service, staying consistent when the floor is loud, and taking responsibility for what leaves the station.',
      id: 'Masuk hospitality di bawah tekanan. Belajar layanan volume tinggi, tetap konsisten saat lantai ramai, dan bertanggung jawab atas apa yang keluar dari station.'
    },
  },
  {
    year: '2021',
    phase: { en: 'Growth', id: 'Pertumbuhan' },
    title: { en: 'From Execution to Coaching', id: 'Dari Eksekusi ke Coaching' },
    body: {
      en: 'Started helping newer staff hit the same standard. Realized the work is not only making the drink — it is making sure the next person can make it the same way.',
      id: 'Mulai membantu staf baru mencapai standar yang sama. Sadar kerjanya bukan hanya meracik — tapi memastikan orang berikutnya bisa mengerjakannya dengan cara yang sama.'
    },
  },
  {
    year: '2022–2023',
    phase: { en: 'Leadership', id: 'Kepemimpinan' },
    title: { en: 'Beverage Team Coordinator', id: 'Koordinator Tim Minuman' },
    body: {
      en: 'Coordinated the beverage team: training, seasonal menu changes, and peak-hour ownership. Cut onboarding from 2 weeks to 4 days. Started treating operations like a system — documented, coachable, repeatable.',
      id: 'Mengkoordinasikan tim minuman: pelatihan, perubahan menu musiman, dan ownership jam sibuk. Memangkas onboarding dari 2 minggu menjadi 4 hari. Mulai memperlakukan operasional seperti sistem — terdokumentasi, bisa dilatih, bisa diulang.'
    },
  },
  {
    year: '2024–Now',
    phase: { en: 'Multi-Discipline', id: 'Multi-Disiplin' },
    title: { en: 'Lead · Code · Cinema', id: 'Pimpin · Kode · Sinema' },
    body: {
      en: 'The same coordination, documentation, and coaching now sit beside software and film. Leadership is the through-line: make the system clear, then help people run it.',
      id: 'Koordinasi, dokumentasi, dan coaching yang sama sekarang berjalan bersama software dan film. Leadership adalah benang merahnya: buat sistemnya jelas, lalu bantu orang menjalankannya.'
    },
  },
];

export const techniques: SkillBar[] = [
  { name: { en: 'Staff Training', id: 'Pelatihan Tim' }, level: 90, desc: { en: 'Hands-on coaching & onboarding', id: 'Coaching langsung & onboarding' } },
  { name: { en: 'SOP Development', id: 'Penyusunan SOP' }, level: 88, desc: { en: 'Documented, repeatable workflows', id: 'Alur kerja terdokumentasi & bisa diulang' } },
  { name: { en: 'Shift Coordination', id: 'Koordinasi Shift' }, level: 86, desc: { en: 'Roles, timing, peak-hour calm', id: 'Peran, timing, ketenangan jam sibuk' } },
  { name: { en: 'Quality Control', id: 'Kontrol Kualitas' }, level: 88, desc: { en: 'Standards the whole team can hit', id: 'Standar yang bisa dicapai seluruh tim' } },
  { name: { en: 'Inventory & Costing', id: 'Stok & Costing' }, level: 80, desc: { en: 'Sourcing, waste, menu economics', id: 'Pengadaan, waste, ekonomi menu' } },
  { name: { en: 'High-Volume Service', id: 'Layanan Volume Tinggi' }, level: 85, desc: { en: 'Speed without dropping the standard', id: 'Cepat tanpa menurunkan standar' } },
  { name: { en: 'Knowledge Transfer', id: 'Transfer Pengetahuan' }, level: 84, desc: { en: 'Make quality independent of one person', id: 'Kualitas tidak bergantung pada satu orang' } },
  { name: { en: 'Menu Operations', id: 'Operasional Menu' }, level: 82, desc: { en: 'Seasonal updates the team can execute', id: 'Pembaruan musiman yang bisa dieksekusi tim' } },
];

export const skills: SkillCategory[] = [
  {
    category: { en: 'Leadership', id: 'Kepemimpinan' },
    items: [
      { en: 'Staff Training', id: 'Pelatihan Tim' },
      { en: 'Hands-on Coaching', id: 'Coaching Langsung' },
      { en: 'Shift Coordination', id: 'Koordinasi Shift' },
      { en: 'Knowledge Transfer', id: 'Transfer Pengetahuan' },
      { en: 'Calm Under Pressure', id: 'Tenang di Bawah Tekanan' },
      { en: 'Accountability', id: 'Akuntabilitas' }
    ],
  },
  {
    category: { en: 'Operations', id: 'Operasional' },
    items: [
      { en: 'SOP Development', id: 'Penyusunan SOP' },
      { en: 'Inventory Management', id: 'Manajemen Stok' },
      { en: 'Quality Control', id: 'Kontrol Kualitas' },
      { en: 'Cost Control', id: 'Kontrol Biaya' },
      { en: 'Speed of Service', id: 'Kecepatan Layanan' },
      { en: 'Seasonal Planning', id: 'Perencanaan Musiman' }
    ],
  },
  {
    category: { en: 'Hospitality', id: 'Hospitality' },
    items: [
      { en: 'F&B Industry 5+ Years', id: '5+ Tahun di F&B' },
      { en: 'High-Volume Service', id: 'Layanan Volume Tinggi' },
      { en: 'Customer Experience', id: 'Pengalaman Pelanggan' },
      { en: 'Culinary Vocational School', id: 'SMK Tata Boga' },
      { en: 'Floor Communication', id: 'Komunikasi Lantai' }
    ],
  },
];

export const leadershipSystem = [
  {
    key: 'people',
    icon: '◆',
    label: { en: 'People', id: 'Orang' },
    body: {
      en: 'Investing in people so they can operate independently.',
      id: 'Investasi pada orang supaya mereka bisa beroperasi mandiri.',
    },
  },
  {
    key: 'systems',
    icon: '◎',
    label: { en: 'Systems', id: 'Sistem' },
    body: {
      en: 'Creating repeatable, documented standards that survive turnover.',
      id: 'Standar terdokumentasi yang bertahan saat orang berganti.',
    },
  },
  {
    key: 'execution',
    icon: '☰',
    label: { en: 'Execution', id: 'Eksekusi' },
    body: {
      en: 'Consistent, calm performance under pressure because the system guides action.',
      id: 'Performa tenang di bawah tekanan karena sistem yang memandu.',
    },
  },
  {
    key: 'outcome',
    icon: '⚖',
    label: { en: 'Outcome', id: 'Hasil' },
    body: {
      en: 'Quality becomes transferable; the operation does not depend on any single individual.',
      id: 'Kualitas bisa dititipkan; operasional tidak bergantung pada satu orang.',
    },
  },
] as const;

export const philosophy: PhilosophyItem[] = [
  {
    icon: '◆',
    title: { en: 'People First', id: 'Orang Dulu' },
    body: {
      en: 'A station is only as strong as the people running it. Training, feedback, and clear ownership come before clever recipes.',
      id: 'Station hanya sekuat orang yang menjalankannya. Pelatihan, umpan balik, dan ownership yang jelas lebih dulu daripada resep yang canggih.'
    },
  },
  {
    icon: '◎',
    title: { en: 'Documented Systems', id: 'Sistem Terdokumentasi' },
    body: {
      en: 'If it is not written down, it cannot be coached. SOP is how quality survives a new hire and a busy Saturday.',
      id: 'Kalau tidak tertulis, tidak bisa dilatih. SOP adalah cara kualitas bertahan saat ada staf baru dan Sabtu yang ramai.'
    },
  },
  {
    icon: '⚖',
    title: { en: 'Calm in Peak Hours', id: 'Tenang di Jam Sibuk' },
    body: {
      en: 'Leadership shows when volume spikes. Short communication, clear roles, and protecting the standard guests already trust.',
      id: 'Leadership terlihat saat volume naik. Komunikasi singkat, peran yang jelas, dan menjaga standar yang sudah dipercaya tamu.'
    },
  },
  {
    icon: '→',
    title: { en: 'Transferable Quality', id: 'Kualitas yang Bisa Dititipkan' },
    body: {
      en: 'If only one person can do it right, the operation is fragile. The job is making the standard reproducible.',
      id: 'Kalau hanya satu orang yang bisa mengerjakannya dengan benar, operasionalnya rapuh. Tugasnya membuat standar itu bisa direproduksi.'
    },
  },
];

export const leadershipTraits: LeadershipTrait[] = [
  { note: { en: 'Team Coordination', id: 'Koordinasi Tim' }, icon: '◎' },
  { note: { en: 'Staff Training', id: 'Pelatihan Tim' }, icon: '◆' },
  { note: { en: 'SOP & Standards', id: 'SOP & Standar' }, icon: '☰' },
  { note: { en: 'Peak-Hour Calm', id: 'Tenang Jam Sibuk' }, icon: '⚖' },
  { note: { en: 'Ownership', id: 'Ownership' }, icon: '→' },
];

export const leadershipPractices: LeadershipPractice[] = [
  {
    title: { en: 'Coach on the floor', id: 'Coach di lantai' },
    body: {
      en: 'Training happens during real service, not only in a briefing. Short corrections, then let people run the station.',
      id: 'Pelatihan terjadi saat layanan nyata, bukan hanya briefing. Koreksi singkat, lalu biarkan orang menjalankan station.'
    },
  },
  {
    title: { en: 'Write the standard once', id: 'Tulis standarnya sekali' },
    body: {
      en: 'Prep, pour, and peak-hour flow live in SOP so quality does not depend on who is on shift.',
      id: 'Prep, pour, dan alur jam sibuk ada di SOP supaya kualitas tidak bergantung siapa yang masuk shift.'
    },
  },
  {
    title: { en: 'Protect the guest during rush', id: 'Lindungi tamu saat ramai' },
    body: {
      en: 'Roles stay clear when volume spikes. Speed is useless if the standard drops.',
      id: 'Peran tetap jelas saat volume naik. Cepat tidak ada artinya kalau standarnya turun.'
    },
  },
];

export const heroStats = [
  { n: { en: 'Team Coordinator', id: 'Koordinator Tim' }, l: { en: 'Role', id: 'Peran' } },
  { n: { en: 'Staff Training', id: 'Pelatihan Tim' }, l: { en: 'Practice', id: 'Praktik' } },
  { n: { en: 'SOP Systems', id: 'Sistem SOP' }, l: { en: 'Method', id: 'Metode' } },
  { n: { en: '5+ Years F&B', id: '5+ Tahun F&B' }, l: { en: 'Context', id: 'Konteks' } },
];
