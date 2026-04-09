import type { JourneyItem, SkillBar, SkillCategory, PhilosophyItem, BilingualString } from '@/lib/types';

export interface BeverageCreation {
  title: BilingualString;
  subtitle: BilingualString;
  type: BilingualString;
  description: BilingualString;
  tags: string[];
  insight: BilingualString;
}

export interface SensoryNote {
  note: BilingualString;
  icon: string;
}

export interface SignatureRecipe {
  name: BilingualString;
  subtitle: BilingualString;
  profile: Record<string, number>;
  ingredients: { amount: string; item: BilingualString }[];
  method: BilingualString;
  aroma: BilingualString;
  taste: BilingualString;
}

export const creations: BeverageCreation[] = [
  {
    title: { en: 'Signature Mocktail Menu', id: 'Menu Mocktail Signature' },
    subtitle: { en: 'Menu Creation & Flavor Profiling', id: 'Pembuatan Menu & Pembuatan Profil Rasa' },
    type: { en: 'Menu Development', id: 'Pengembangan Menu' },
    description: {
      en: 'Crafting refreshing, balanced mocktails goes beyond mixing syrups — it requires understanding chemical interactions between acidity, sweetness, and aromatics. Developed a seasonal beverage menu that increased customer satisfaction and streamlined ordering during peak shifts.',
      id: 'Meracik mocktail yang segar dan seimbang lebih dari sekadar mencampur sirup — ini membutuhkan pemahaman tentang interaksi kimia antara asam, manis, dan aromatik. Mengembangkan menu minuman musiman yang meningkatkan kepuasan pelanggan dan mempercepat pemesanan selama jam sibuk.'
    },
    tags: ['Menu Engineering', 'Ingredient Sourcing', 'Standard Recipes', 'Garnish Design'],
    insight: {
      en: 'The same precision required to debug a React application is utilized when adjusting the micro-measurements of a beverage recipe.',
      id: 'Presisi yang sama yang dibutuhkan untuk mendebug aplikasi React digunakan saat menyesuaikan pengukuran mikro dari resep minuman.'
    },
  },
  {
    title: { en: 'Butterfly Pea Lemonade Series', id: 'Seri Butterfly Pea Lemonade' },
    subtitle: { en: 'Signature Color-Changing Mocktail', id: 'Mocktail Berubah Warna Signature' },
    type: { en: 'Recipe Development', id: 'Pengembangan Resep' },
    description: {
      en: 'A visually dramatic mocktail series built around pH-reactive butterfly pea flower extract. The drink shifts naturally from deep indigo to vibrant violet when citrus is added — a chemistry-forward creation that became a customer favorite. Developed three flavor variations for different daypart menus.',
      id: 'Seri mocktail yang dramatis secara visual yang dibangun di sekitar ekstrak bunga telang yang reaktif terhadap pH. Minuman berubah secara alami dari nila tua menjadi ungu cerah saat jeruk ditambahkan — kreasi berbasis kimia yang menjadi favorit pelanggan. Mengembangkan tiga variasi rasa untuk menu waktu yang berbeda.'
    },
    tags: ['Color-Changing Chemistry', 'Butterfly Pea Flower', 'Seasonal Variation', 'Visual Presentation'],
    insight: {
      en: 'Using natural pH indicators is the beverage equivalent of writing code that responds dynamically to input.',
      id: 'Menggunakan indikator pH alami adalah setara dengan menulis kode yang merespons input secara dinamis dalam dunia minuman.'
    },
  },
  {
    title: { en: 'Lemongrass & Basil Cold Brew', id: 'Cold Brew Serai & Kemangi' },
    subtitle: { en: 'Cold Infusion Technique', id: 'Teknik Infusi Dingin' },
    type: { en: 'Craft Technique', id: 'Teknik Kerajinan' },
    description: {
      en: 'Developed a 24-hour cold infusion protocol using fresh Indonesian lemongrass and Thai basil to create a layered herbal concentrate. The concentrate became the base for four distinct menu items, improving ingredient utilization by 40% and reducing prep waste during high-volume service.',
      id: 'Mengembangkan protokol infusi dingin 24 jam menggunakan serai Indonesia segar dan kemangi Thailand untuk membuat konsentrat herbal berlapis. Konsentrat ini menjadi dasar untuk empat item menu yang berbeda, meningkatkan pemanfaatan bahan sebesar 40% dan mengurangi limbah persiapan selama layanan volume tinggi.'
    },
    tags: ['Cold Infusion', 'Herb Sourcing', 'Batch Preparation', 'Zero Waste Approach'],
    insight: {
      en: 'Cold brew infusion is like asynchronous programming — it runs quietly in the background and delivers a richer output.',
      id: 'Infusi cold brew ibarat pemrograman asinkron — berjalan diam-diam di latar belakang dan memberikan hasil yang lebih kaya.'
    },
  },
  {
    title: { en: 'Beverage Training SOP', id: 'SOP Pelatihan Minuman' },
    subtitle: { en: 'Standard Operating Procedures & Team Training', id: 'SOP & Pelatihan Tim' },
    type: { en: 'Operations & Leadership', id: 'Operasional & Kepemimpinan' },
    description: {
      en: "Developed documented SOPs for consistent drink preparation, inventory tracking, and speed-of-service during high-volume shifts. Led hands-on training sessions for new bar staff, reducing onboarding time from 2 weeks to 4 days. Combines 5+ years of F&B expertise with a developer's systematic approach to documentation.",
      id: 'Mengembangkan SOP terdokumentasi untuk persiapan minuman yang konsisten, pelacakan inventaris, dan kecepatan layanan selama shift volume tinggi. Memimpin sesi pelatihan praktis untuk staf bar baru, mengurangi waktu orientasi dari 2 minggu menjadi 4 hari. Menggabungkan 5+ tahun keahlian F&B dengan pendekatan sistematis pengembang terhadap dokumentasi.'
    },
    tags: ['Quality Control', 'Inventory Management', 'Staff Training', 'Documentation', 'Leadership'],
    insight: {
      en: 'Treating a bar workflow like a software system — every step documented, every variable controlled, every output reproducible.',
      id: 'Mengelola workflow bar layaknya sistem software—setiap langkah terdokumentasi, variabel terkontrol, dan output-nya konsisten (reproducible).'
    },
  },
];

export const journey: JourneyItem[] = [
  {
    year: '2019',
    phase: { en: 'Foundation', id: 'Fondasi' },
    title: { en: 'Graduate of Vocational High School, majoring in Culinary Arts.', id: 'Lulus SMK Tata Boga.' },
    body: {
      en: 'Formal culinary & beverage education. First exposure to recipe formulation, hygiene standards, and the science behind flavor balance. Graduated with distinction in food & beverage service.',
      id: 'Pendidikan formal kuliner dan minuman. Mengenal formulasi resep, standar higienitas, dan ilmu di balik balance rasa. Lulus dengan predikat memuaskan di bidang F&B Service.'
    },
  },
  {
    year: '2020',
    phase: { en: 'Entry', id: 'Awal Karir' },
    title: { en: 'First F&B Role', id: 'Peran F&B Pertama' },
    body: {
      en: 'Entered the industry during a uniquely challenging year. Learned high-pressure service, speed-of-service optimization, and the fundamentals of consistent quality under volume. Developed resilience and real-world adaptability.',
      id: 'Terjun ke industri di tahun yang penuh tantangan. Belajar menghadapi high-pressure service, optimasi speed-of-service, dan menjaga kualitas tetap konsisten di tengah volume pesanan yang tinggi.'
    },
  },
  {
    year: '2021',
    phase: { en: 'Specialization', id: 'Spesialisasi' },
    title: { en: 'Mocktail Focus & Recipe Development', id: 'Fokus Mocktail & Pengembangan Resep' },
    body: {
      en: 'Started developing original mocktail recipes, experimenting with cold infusions, house syrups, and local Indonesian ingredients. Created the first version of the Butterfly Pea Lemonade Series that would become a signature item.',
      id: 'Mulai meracik resep mocktail orisinal, bereksperimen dengan cold infusions, house-made syrup, dan bahan lokal. Menciptakan versi awal Butterfly Pea Lemonade Series yang kemudian menjadi menu signature.'
    },
  },
  {
    year: '2022–2023',
    phase: { en: 'Mastery', id: 'Penguasaan' },
    title: { en: 'Menu Engineering & Operations', id: 'Rekayasa Menu & Operasional' },
    body: {
      en: 'Took ownership of the beverage menu — sourcing, costing, seasonal updates, and design. Developed training SOPs that reduced new-hire onboarding from 2 weeks to 4 days. Started connecting beverage craft with software thinking.',
      id: 'Memegang penuh kendali menu minuman—mulai dari sourcing, costing, hingga update musiman. Mengembangkan SOP training yang mengefisiensi waktu orientasi staf baru. Di sini saya mulai menghubungkan beverage craft dengan pola pikir software engineering.'
    },
  },
  {
    year: '2024–Now',
    phase: { en: 'Multi-Discipline', id: 'Multi-Disiplin' },
    title: { en: 'Craft + Code + Cinema', id: 'Karya + Kode + Sinema' },
    body: {
      en: 'Recognized that precision, creativity, and systems thinking carry across all three disciplines. Now operate simultaneously as a Beverage Crafter, Full-Stack Developer, and Videographer — each craft sharpening the others.',
      id: 'Menyadari bahwa presisi, kreativitas, dan systems thinking adalah benang merah di ketiga disiplin ilmu ini. Kini saya bergerak sebagai Beverage Crafter, Full-Stack Developer, dan Videographer—di mana setiap bidang saling memperkuat satu sama lain.'
    },
  },
];

export const techniques: SkillBar[] = [
  { name: { en: 'Cold Infusion', id: 'Infusi Dingin' }, level: 90, desc: { en: 'Herb & botanical extracts', id: 'Ekstrak herbal & botani' } },
  { name: { en: 'House Syrup Production', id: 'Produksi Sirup Mandiri' }, level: 85, desc: { en: 'Custom flavor bases', id: 'Pembuatan basis rasa custom' } },
  { name: { en: 'Flavor Profiling', id: 'Profil Rasa' }, level: 88, desc: { en: 'Acidity, sweetness, bitterness balance', id: 'Keseimbangan rasa (acid, sweet, bitter)' } },
  { name: { en: 'Garnish Design', id: 'Desain Garnish' }, level: 80, desc: { en: 'Dehydrated, fresh & sculptural', id: 'Teknik dehidrasi & garnish segar' } },
  { name: { en: 'Menu Engineering', id: 'Rekayasa Menu' }, level: 82, desc: { en: 'Costing, layout & psychology', id: 'Costing, layout & psikologi menu' } },
  { name: { en: 'Batch Preparation', id: 'Persiapan Batch' }, level: 88, desc: { en: 'High-volume consistency', id: 'Konsistensi untuk volume tinggi' } },
  { name: { en: 'Ingredient Sourcing', id: 'Pengadaan Bahan' }, level: 78, desc: { en: 'Local & seasonal focus', id: 'Fokus bahan lokal & musiman' } },
  { name: { en: 'Staff Training', id: 'Pelatihan Staf' }, level: 85, desc: { en: 'SOP development & coaching', id: 'Pengembangan SOP & coaching' } },
];

export const skills: SkillCategory[] = [
  {
    category: { en: 'Craft', id: 'Keahlian' },
    items: [
      { en: 'Mocktail Mixology', id: 'Mocktail Mixology' },
      { en: 'Recipe Formulation', id: 'Recipe Formulation' },
      { en: 'Flavor Profiling', id: 'Flavor Profiling' },
      { en: 'Garnish Design', id: 'Garnish Design' },
      { en: 'Cold Infusion', id: 'Cold Infusion' },
      { en: 'House Syrups', id: 'House Syrups' }
    ],
  },
  {
    category: { en: 'Operations', id: 'Operasional' },
    items: [
      { en: 'Inventory Management', id: 'Inventory Management' },
      { en: 'Menu Development', id: 'Menu Development' },
      { en: 'Speed of Service', id: 'Speed of Service' },
      { en: 'Quality Control', id: 'Quality Control' },
      { en: 'Staff Training', id: 'Staff Training' },
      { en: 'Cost Control', id: 'Cost Control' }
    ],
  },
  {
    category: { en: 'Background', id: 'Latar Belakang' },
    items: [
      { en: 'Vocational High School', id: 'SMK Tata Boga' },
      { en: 'Culinary Arts', id: 'Culinary Arts' },
      { en: 'F&B Industry 5+ Years', id: '5+ Tahun di Industri F&B' },
      { en: 'Customer Experience', id: 'Customer Experience' },
      { en: 'High-Volume Service', id: 'High-Volume Service' }
    ],
  },
];

export const philosophy: PhilosophyItem[] = [
  {
    icon: '⚗',
    title: { en: 'Precision', id: 'Presisi' },
    body: {
      en: 'Micro-measurements matter as much in a cocktail as in a codebase. Every gram, every milliliter, every pixel — intentionality scales.',
      id: 'Micro-measurements sangat krusial, baik dalam racikan cocktail maupun baris kode. Setiap gram, mililiter, hingga piksel—semuanya harus presisi dan memiliki tujuan.'
    },
  },
  {
    icon: '◎',
    title: { en: 'Customer Focus', id: 'Fokus Pelanggan' },
    body: {
      en: 'Five years in hospitality taught me empathy first. The best beverage is the one that makes someone pause and say nothing — just smile.',
      id: 'Lima tahun di perhotelan mengajarkan saya empati di atas segalanya. Minuman terbaik adalah yang mampu membuat seseorang terdiam sejenak dan hanya tersenyum menikmati rasanya.'
    },
  },
  {
    icon: '⧳',
    title: { en: 'Systems Thinking', id: 'Pemikiran Sistem' },
    body: {
      en: 'A well-run bar is software in physical form. Every step documented, every variable controlled, every output reproducible at scale.',
      id: 'Bar yang terkelola dengan baik adalah software dalam bentuk fisik. Setiap langkah terdokumentasi, variabel terkendali, dan setiap output bisa direplikasi secara konsisten.'
    },
  },
  {
    icon: '❧',
    title: { en: 'Continuous Refinement', id: 'Penyempurnaan Berkelanjutan' },
    body: {
      en: "Every recipe is version 1.0. After 5+ years, I've learned that the best creations come from obsessive iteration — tasting, adjusting, tasting again.",
      id: 'Setiap resep adalah "versi 1.0". Selama 5+ tahun, saya belajar bahwa kreasi terbaik lahir dari iterasi yang obsesif—mencicipi, menyesuaikan, dan mencicipi kembali hingga sempurna.'
    },
  },
];

export const sensoryNotes: SensoryNote[] = [
  { note: { en: 'Bright Citrus', id: 'Bright Citrus' }, icon: '🍋' },
  { note: { en: 'Herbal Depth', id: 'Herbal Depth' }, icon: '🌿' },
  { note: { en: 'Floral Top Note', id: 'Floral Top Note' }, icon: '🏵️' },
  { note: { en: 'Balanced Acidity', id: 'Balanced Acidity' }, icon: '⚖️' },
  { note: { en: 'Clean Finish', id: 'Clean Finish' }, icon: '✨' },
];

export const signatureRecipe: SignatureRecipe = {
  name: { en: 'Signature Mocktail', id: 'Signature Mocktail' },
  subtitle: { en: 'House Specialty — Non-Alcoholic', id: 'House Specialty — Non-Alcoholic' },
  profile: { sweetness: 65, acidity: 80, bitterness: 20, body: 70 },
  ingredients: [
    { amount: '60ml', item: { en: 'Fresh Lime Juice', id: 'Fresh Lime Juice' } },
    { amount: '30ml', item: { en: 'Lemongrass Syrup', id: 'Lemongrass Syrup' } },
    { amount: '15ml', item: { en: 'Butterfly Pea Flower Extract', id: 'Butterfly Pea Flower Extract' } },
    { amount: '120ml', item: { en: 'Sparkling Mineral Water', id: 'Sparkling Mineral Water' } },
    { amount: '2 dash', item: { en: 'Aromatic Bitters', id: 'Aromatic Bitters' } },
  ],
  method: { en: 'Build in glass · Ice cubes · Garnish with lime wheel & mint sprig', id: 'Build in glass · Tambahkan es batu · Garnish dengan lime wheel & daun mint' },
  aroma: { en: 'Citrus-forward, with herbal undertones and a floral fade', id: 'Citrus-forward, dengan sentuhan herbal dan aroma floral' },
  taste: { en: 'Bright acidity, balanced sweetness, clean effervescent finish', id: 'Acidity yang cerah, sweetness yang balanced, dengan clean effervescent finish' },
};

export const heroStats = [
  { n: { en: 'Culinary School', id: 'Sekolah Kuliner' }, l: { en: 'Foundation', id: 'Fondasi' } },
  { n: { en: 'Mocktails', id: 'Mocktails' }, l: { en: 'Specialty', id: 'Spesialisasi' } },
  { n: { en: 'Flavor Profiling', id: 'Profil Rasa' }, l: { en: 'Core Skill', id: 'Keahlian Utama' } },
  { n: { en: 'Precision', id: 'Presisi' }, l: { en: 'Philosophy', id: 'Filosofi' } },
];