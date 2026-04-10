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
    subtitle: { en: 'Menu Creation & Flavor Profiling', id: 'Pengembangan Menu & Profil Rasa' },
    type: { en: 'Menu Development', id: 'Pengembangan Menu' },
    description: {
      en: 'Crafting refreshing, balanced mocktails goes beyond mixing syrups — it requires understanding chemical interactions between acidity, sweetness, and aromatics. Developed a seasonal beverage menu that increased customer satisfaction and streamlined ordering during peak shifts.',
      id: 'Meracik mocktail yang segar dan seimbang bukan sekadar mencampur sirup. Butuh pemahaman mendalam tentang interaksi kimia antara asam, manis, dan aromatik. Menu minuman musiman yang saya kembangkan ini berhasil meningkatkan kepuasan pelanggan sekaligus mempercepat proses pemesanan di jam-jam sibuk.'
    },
    tags: ['Menu Engineering', 'Ingredient Sourcing', 'Standard Recipes', 'Garnish Design'],
    insight: {
      en: 'The same precision required to debug a React application is utilized when adjusting the micro-measurements of a beverage recipe.',
      id: 'Presisi yang sama ketika men-debug aplikasi React juga saya terapkan saat menyetel ukuran mikro dalam sebuah resep minuman.'
    },
  },
  {
    title: { en: 'Butterfly Pea Lemonade Series', id: 'Seri Butterfly Pea Lemonade' },
    subtitle: { en: 'Signature Color-Changing Mocktail', id: 'Mocktail Perubah Warna — Menu Signature' },
    type: { en: 'Recipe Development', id: 'Pengembangan Resep' },
    description: {
      en: 'A visually dramatic mocktail series built around pH-reactive butterfly pea flower extract. The drink shifts naturally from deep indigo to vibrant violet when citrus is added — a chemistry-forward creation that became a customer favorite. Developed three flavor variations for different daypart menus.',
      id: 'Seri mocktail yang dramatis secara visual, dibangun di sekitar ekstrak bunga telang yang sensitif terhadap pH. Minuman ini berubah secara alami dari biru nila tua menjadi ungu cerah saat jeruk ditambahkan — kreasi berbasis kimia yang langsung menjadi favorit pelanggan. Dikembangkan dalam tiga variasi rasa untuk menu waktu yang berbeda.'
    },
    tags: ['Color-Changing Chemistry', 'Butterfly Pea Flower', 'Seasonal Variation', 'Visual Presentation'],
    insight: {
      en: 'Using natural pH indicators is the beverage equivalent of writing code that responds dynamically to input.',
      id: 'Menggunakan indikator pH alami itu seperti menulis kode yang merespons input secara dinamis — bedanya, inputnya adalah tetesan jeruk nipis.'
    },
  },
  {
    title: { en: 'Lemongrass & Basil Cold Brew', id: 'Cold Brew Serai & Kemangi' },
    subtitle: { en: 'Cold Infusion Technique', id: 'Teknik Infusi Dingin' },
    type: { en: 'Craft Technique', id: 'Teknik Kerajinan' },
    description: {
      en: 'Developed a 24-hour cold infusion protocol using fresh Indonesian lemongrass and Thai basil to create a layered herbal concentrate. The concentrate became the base for four distinct menu items, improving ingredient utilization by 40% and reducing prep waste during high-volume service.',
      id: 'Mengembangkan protokol infusi dingin 24 jam menggunakan serai segar dan kemangi untuk menghasilkan konsentrat herbal berlapis. Konsentrat ini menjadi fondasi empat item menu berbeda, meningkatkan efisiensi bahan baku hingga 40%, dan menekan pemborosan selama jam layanan padat.'
    },
    tags: ['Cold Infusion', 'Herb Sourcing', 'Batch Preparation', 'Zero Waste Approach'],
    insight: {
      en: 'Cold brew infusion is like asynchronous programming — it runs quietly in the background and delivers a richer output.',
      id: 'Infusi cold brew itu seperti pemrograman asinkron — berjalan diam-diam di latar belakang, lalu menghasilkan sesuatu yang jauh lebih kaya.'
    },
  },
  {
    title: { en: 'Beverage Training SOP', id: 'SOP Pelatihan Minuman' },
    subtitle: { en: 'Standard Operating Procedures & Team Training', id: 'SOP & Pelatihan Tim' },
    type: { en: 'Operations & Leadership', id: 'Operasional & Kepemimpinan' },
    description: {
      en: "Developed documented SOPs for consistent drink preparation, inventory tracking, and speed-of-service during high-volume shifts. Led hands-on training sessions for new bar staff, reducing onboarding time from 2 weeks to 4 days. Combines 5+ years of F&B expertise with a developer's systematic approach to documentation.",
      id: 'Membuat SOP terdokumentasi untuk konsistensi penyajian minuman, pengelolaan stok, dan kecepatan layanan di jam sibuk. Memimpin pelatihan langsung untuk staf bar baru, memangkas waktu orientasi dari 2 minggu menjadi 4 hari. Perpaduan 5+ tahun pengalaman F&B dengan pendekatan sistematis ala developer.'
    },
    tags: ['Quality Control', 'Inventory Management', 'Staff Training', 'Documentation', 'Leadership'],
    insight: {
      en: 'Treating a bar workflow like a software system — every step documented, every variable controlled, every output reproducible.',
      id: 'Mengelola alur kerja bar seperti sistem software — setiap langkah tercatat, setiap variabel terkendali, setiap hasil bisa direplikasi.'
    },
  },
];

export const journey: JourneyItem[] = [
  {
    year: '2019',
    phase: { en: 'Foundation', id: 'Fondasi' },
    title: { en: 'Vocational School Graduate — Culinary Arts', id: 'Lulus SMK Tata Boga' },
    body: {
      en: 'Formal culinary & beverage education. First exposure to recipe formulation, hygiene standards, and the science behind flavor balance. Graduated with distinction in food & beverage service.',
      id: 'Pendidikan formal kuliner dan minuman. Di sinilah saya pertama kali mengenal formulasi resep, standar higienitas, dan ilmu di balik keseimbangan rasa. Lulus dengan predikat memuaskan di bidang Food & Beverage Service.'
    },
  },
  {
    year: '2020',
    phase: { en: 'Entry', id: 'Awal Karir' },
    title: { en: 'First F&B Role', id: 'Langkah Pertama di Industri F&B' },
    body: {
      en: 'Entered the industry during a uniquely challenging year. Learned high-pressure service, speed-of-service optimization, and the fundamentals of consistent quality under volume. Developed resilience and real-world adaptability.',
      id: 'Terjun ke industri di tahun yang penuh tantangan. Belajar menghadapi tekanan tinggi, mengoptimalkan kecepatan layanan, dan menjaga kualitas tetap konsisten di tengah lonjakan pesanan. Dari sini saya belajar apa artinya adaptasi yang sesungguhnya.'
    },
  },
  {
    year: '2021',
    phase: { en: 'Specialization', id: 'Spesialisasi' },
    title: { en: 'Mocktail Focus & Recipe Development', id: 'Mendalami Mocktail & Pengembangan Resep' },
    body: {
      en: 'Started developing original mocktail recipes, experimenting with cold infusions, house syrups, and local Indonesian ingredients. Created the first version of the Butterfly Pea Lemonade Series that would become a signature item.',
      id: 'Mulai meracik resep mocktail orisinal, bereksperimen dengan cold infusion, house-made syrup, dan bahan-bahan lokal. Di sini lahir versi pertama Butterfly Pea Lemonade Series yang kemudian jadi menu andalan.'
    },
  },
  {
    year: '2022–2023',
    phase: { en: 'Mastery', id: 'Penguasaan' },
    title: { en: 'Menu Engineering & Operations', id: 'Rekayasa Menu & Manajemen Operasional' },
    body: {
      en: 'Took ownership of the beverage menu — sourcing, costing, seasonal updates, and design. Developed training SOPs that reduced new-hire onboarding from 2 weeks to 4 days. Started connecting beverage craft with software thinking.',
      id: 'Memegang penuh tanggung jawab menu minuman — mulai dari pengadaan bahan, kalkulasi biaya, hingga pembaruan musiman. Membuat SOP pelatihan yang memangkas waktu orientasi staf baru dari 2 minggu menjadi 4 hari. Di fase ini saya mulai melihat paralel antara dunia minuman dan software engineering.'
    },
  },
  {
    year: '2024–Now',
    phase: { en: 'Multi-Discipline', id: 'Multi-Disiplin' },
    title: { en: 'Craft + Code + Cinema', id: 'Karya + Kode + Sinema' },
    body: {
      en: 'Recognized that precision, creativity, and systems thinking carry across all three disciplines. Now operate simultaneously as a Beverage Crafter, Full-Stack Developer, and Videographer — each craft sharpening the others.',
      id: 'Saya menyadari bahwa presisi, kreativitas, dan cara berpikir sistematis adalah benang merah yang menghubungkan ketiga bidang ini. Kini saya bergerak sekaligus sebagai Peracik Minuman, Full-Stack Developer, dan Videografer — satu bidang mengasah yang lain.'
    },
  },
];

export const techniques: SkillBar[] = [
  { name: { en: 'Cold Infusion', id: 'Cold Infusion' }, level: 90, desc: { en: 'Herb & botanical extracts', id: 'Ekstrak herbal & botanikal' } },
  { name: { en: 'House Syrup Production', id: 'Produksi Sirup Sendiri' }, level: 85, desc: { en: 'Custom flavor bases', id: 'Basis rasa kustom' } },
  { name: { en: 'Flavor Profiling', id: 'Profil Rasa' }, level: 88, desc: { en: 'Acidity, sweetness, bitterness balance', id: 'Keseimbangan asam, manis, pahit' } },
  { name: { en: 'Garnish Design', id: 'Desain Garnish' }, level: 80, desc: { en: 'Dehydrated, fresh & sculptural', id: 'Teknik kering, segar & ukiran' } },
  { name: { en: 'Menu Engineering', id: 'Rekayasa Menu' }, level: 82, desc: { en: 'Costing, layout & psychology', id: 'Kalkulasi biaya, tata letak & psikologi' } },
  { name: { en: 'Batch Preparation', id: 'Persiapan Massal' }, level: 88, desc: { en: 'High-volume consistency', id: 'Konsistensi volume tinggi' } },
  { name: { en: 'Ingredient Sourcing', id: 'Pengadaan Bahan' }, level: 78, desc: { en: 'Local & seasonal focus', id: 'Bahan lokal & musiman' } },
  { name: { en: 'Staff Training', id: 'Pelatihan Tim' }, level: 85, desc: { en: 'SOP development & coaching', id: 'Penyusunan SOP & pembinaan' } },
];

export const skills: SkillCategory[] = [
  {
    category: { en: 'Craft', id: 'Keahlian' },
    items: [
      { en: 'Mocktail Mixology', id: 'Mocktail Mixology' },
      { en: 'Recipe Formulation', id: 'Formulasi Resep' },
      { en: 'Flavor Profiling', id: 'Profil Rasa' },
      { en: 'Garnish Design', id: 'Desain Garnish' },
      { en: 'Cold Infusion', id: 'Cold Infusion' },
      { en: 'House Syrups', id: 'Sirup Buatan Sendiri' }
    ],
  },
  {
    category: { en: 'Operations', id: 'Operasional' },
    items: [
      { en: 'Inventory Management', id: 'Manajemen Stok' },
      { en: 'Menu Development', id: 'Pengembangan Menu' },
      { en: 'Speed of Service', id: 'Kecepatan Layanan' },
      { en: 'Quality Control', id: 'Kontrol Kualitas' },
      { en: 'Staff Training', id: 'Pelatihan Tim' },
      { en: 'Cost Control', id: 'Efisiensi Biaya' }
    ],
  },
  {
    category: { en: 'Background', id: 'Latar Belakang' },
    items: [
      { en: 'Vocational High School', id: 'SMK Tata Boga' },
      { en: 'Culinary Arts', id: 'Seni Kuliner' },
      { en: 'F&B Industry 5+ Years', id: '5+ Tahun di F&B' },
      { en: 'Customer Experience', id: 'Pengalaman Pelanggan' },
      { en: 'High-Volume Service', id: 'Layanan Volume Tinggi' }
    ],
  },
];

export const philosophy: PhilosophyItem[] = [
  {
    icon: '⚗',
    title: { en: 'Precision', id: 'Presisi' },
    body: {
      en: 'Micro-measurements matter as much in a cocktail as in a codebase. Every gram, every milliliter, every pixel — intentionality scales.',
      id: 'Ukuran mikro sama pentingnya dalam sebuah cocktail maupun dalam basis kode. Setiap gram, mililiter, hingga piksel — semua punya tujuan yang disengaja.'
    },
  },
  {
    icon: '◎',
    title: { en: 'Customer Focus', id: 'Pelanggan di Atas Segalanya' },
    body: {
      en: 'Five years in hospitality taught me empathy first. The best beverage is the one that makes someone pause and say nothing — just smile.',
      id: 'Lima tahun di dunia hospitality mengajarkan satu hal: empati dulu, baru segalanya. Minuman terbaik adalah yang membuat seseorang terdiam sejenak, lalu tersenyum tanpa berkata-kata.'
    },
  },
  {
    icon: '⧳',
    title: { en: 'Systems Thinking', id: 'Berpikir Sistematis' },
    body: {
      en: 'A well-run bar is software in physical form. Every step documented, every variable controlled, every output reproducible at scale.',
      id: 'Bar yang dikelola dengan baik itu seperti software dalam wujud fisik. Setiap langkah tercatat, setiap variabel terkendali, dan setiap hasil bisa direplikasi dalam skala besar.'
    },
  },
  {
    icon: '❧',
    title: { en: 'Continuous Refinement', id: 'Penyempurnaan Tanpa Henti' },
    body: {
      en: "Every recipe is version 1.0. After 5+ years, I've learned that the best creations come from obsessive iteration — tasting, adjusting, tasting again.",
      id: 'Setiap resep itu versi 1.0. Setelah 5+ tahun, saya belajar bahwa karya terbaik lahir dari iterasi yang tanpa henti — cicip, sesuaikan, cicip lagi.'
    },
  },
];

export const sensoryNotes: SensoryNote[] = [
  { note: { en: 'Bright Citrus', id: 'Citrus Segar' }, icon: '🍋' },
  { note: { en: 'Herbal Depth', id: 'Nuansa Herbal' }, icon: '🌿' },
  { note: { en: 'Floral Top Note', id: 'Aroma Bunga' }, icon: '🏵️' },
  { note: { en: 'Balanced Acidity', id: 'Keasaman Seimbang' }, icon: '⚖️' },
  { note: { en: 'Clean Finish', id: 'Akhiran Bersih' }, icon: '✨' },
];

export const signatureRecipe: SignatureRecipe = {
  name: { en: 'Signature Mocktail', id: 'Signature Mocktail' },
  subtitle: { en: 'House Specialty — Non-Alcoholic', id: 'Andalan Rumah — Non-Alkohol' },
  profile: { sweetness: 65, acidity: 80, bitterness: 20, body: 70 },
  ingredients: [
    { amount: '60ml', item: { en: 'Fresh Lime Juice', id: 'Air Jeruk Nipis Segar' } },
    { amount: '30ml', item: { en: 'Lemongrass Syrup', id: 'Sirup Serai' } },
    { amount: '15ml', item: { en: 'Butterfly Pea Flower Extract', id: 'Ekstrak Bunga Telang' } },
    { amount: '120ml', item: { en: 'Sparkling Mineral Water', id: 'Air Mineral Berkarbonasi' } },
    { amount: '2 dash', item: { en: 'Aromatic Bitters', id: 'Bitter Aromatik' } },
  ],
  method: { en: 'Build in glass · Ice cubes · Garnish with lime wheel & mint sprig', id: 'Tuang langsung ke gelas · Tambahkan es batu · Hiasi dengan irisan jeruk nipis & daun mint' },
  aroma: { en: 'Citrus-forward, with herbal undertones and a floral fade', id: 'Citrus yang menonjol, dengan nuansa herbal di balik aroma bunga yang lembut' },
  taste: { en: 'Bright acidity, balanced sweetness, clean effervescent finish', id: 'Keasaman yang cerah, manis yang terukur, diakhiri dengan kesegaran karbonasi yang bersih' },
};

export const heroStats = [
  { n: { en: 'Culinary School', id: 'Sekolah Kuliner' }, l: { en: 'Foundation', id: 'Fondasi' } },
  { n: { en: 'Mocktails', id: 'Mocktail' }, l: { en: 'Specialty', id: 'Spesialisasi' } },
  { n: { en: 'Flavor Profiling', id: 'Profil Rasa' }, l: { en: 'Core Skill', id: 'Keahlian Utama' } },
  { n: { en: 'Precision', id: 'Presisi' }, l: { en: 'Philosophy', id: 'Filosofi' } },
];