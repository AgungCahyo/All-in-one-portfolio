import type { JourneyItem, SkillBar, PhilosophyItem, BilingualString } from '@/lib/types';

export interface VideoProject {
  title: string | BilingualString;
  type: string | BilingualString;
  year: string;
  description: string | BilingualString;
  tags: string[];
  videoId: string | null;
  link: string;
  linkLabel: string | BilingualString;
  stats: { value: string; label: string | BilingualString }[] | null;
}

export const projects: VideoProject[] = [
  {
    title: { en: 'Cinematography & Editing Reel', id: 'Reel Sinematografi & Editing' },
    type: { en: 'Showreel', id: 'Showreel' },
    year: '2024',
    description: {
      en: 'A curated selection of my best work across corporate, documentary, and cinematic genres. Each piece demonstrates intentional framing, purposeful editing rhythm, and story-driven color grading.',
      id: 'Pilihan karya terbaik saya di genre korporat, dokumenter, dan sinematik. Setiap bagian menunjukkan pembingkaian yang disengaja, ritme editing yang bertujuan, dan color grading yang didorong oleh cerita.'
    },
    tags: ['Color Grading', 'Motion Graphics', 'Sound Design'],
    videoId: null,
    link: 'https://www.youtube.com/@agungcahyo',
    linkLabel: { en: 'Watch Full Reel', id: 'Tonton Reel Lengkap' },
    stats: [
      { value: '15+', label: { en: 'Projects', id: 'Proyek' } },
      { value: '4K', label: { en: 'Resolution', id: 'Resolusi' } },
      { value: '3', label: { en: 'Genres', id: 'Genre' } },
    ],
  },
  {
    title: { en: 'Brand Narrative Series', id: 'Seri Narasi Brand' },
    type: { en: 'Commercial', id: 'Komersial' },
    year: '2024',
    description: {
      en: 'A 3-part micro-documentary series focused on local artisans. Directed, shot, and edited the entire sequence. Utilized DaVinci Resolve for a film-emulation color pipeline to evoke a timeless, organic feel.',
      id: 'Seri mikro-dokumenter 3 bagian yang berfokus pada pengrajin lokal. Disutradarai, diambil gambarnya, dan diedit seluruh rangkaiannya. Menggunakan DaVinci Resolve untuk pipeline warna emulasi film demi kesan klasik dan organik.'
    },
    tags: ['Directing', 'Cinematography', 'Film Emulation'],
    videoId: null,
    link: '#',
    linkLabel: { en: 'Coming Soon', id: 'Segera Hadir' },
    stats: null,
  },
  {
    title: { en: 'Event Aftermovie', id: 'Aftermovie Acara' },
    type: { en: 'Event Coverage', id: 'Liputan Acara' },
    year: '2023',
    description: {
      en: 'High-energy coverage of a 3-day tech conference. Required run-and-gun shooting in changing lighting conditions, followed by rapid-turnaround editing using dynamic speed ramps and specialized sound design.',
      id: 'Liputan berenergi tinggi dari konferensi teknologi 3 hari. Memerlukan pengambilan gambar run-and-gun dalam kondisi pencahayaan yang berubah-ubah, diikuti oleh pengeditan cepat menggunakan speed ramp dinamis dan desain suara khusus.'
    },
    tags: ['Run-and-gun', 'Speed Ramping', 'Rapid Delivery'],
    videoId: null,
    link: '#',
    linkLabel: { en: 'Coming Soon', id: 'Segera Hadir' },
    stats: null,
  },
  {
    title: { en: 'Product Launch Teaser', id: 'Teaser Peluncuran Produk' },
    type: { en: 'Short Form', id: 'Konten Pendek' },
    year: '2023',
    description: {
      en: 'A 30-second high-impact teaser designed for social media. Focused on macro details, stylized lighting, and heavily manipulated sound design to build tension leading to the drop.',
      id: 'Teaser berdampak tinggi 30 detik yang dirancang untuk media sosial. Berfokus pada detail makro, pencahayaan bergaya, dan desain suara yang dimanipulasi dengan kuat untuk membangun ketegangan.'
    },
    tags: ['Macro Lighting', 'Sound Design', 'Social Optimization'],
    videoId: null,
    link: '#',
    linkLabel: { en: 'Coming Soon', id: 'Segera Hadir' },
    stats: null,
  },
];

export const videoJourney: JourneyItem[] = [
  {
    year: '2021',
    phase: { en: 'Foundation', id: 'Fondasi' },
    title: { en: 'The Art of the Cut', id: 'Seni Memotong' },
    body: {
      en: 'Started editing small projects and learning the fundamental psychology of pacing, rhythm, and continuity. Realized that editing is where the story is actually rewritten.',
      id: 'Mulai mengedit proyek kecil dan mempelajari psikologi dasar tentang tempo, ritme, dan kontinuitas. Menyadari bahwa editing adalah tempat di mana cerita sebenarnya ditulis ulang.'
    }
  },
  {
    year: '2022',
    phase: { en: 'Technical', id: 'Teknis' },
    title: { en: 'Mastering the Aesthetic', id: 'Menguasai Estetika' },
    body: {
      en: 'Transitioned heavily into DaVinci Resolve. Deep-dived into color theory, node-based grading, and film emulation techniques. Began treating color as an emotional tool, not just a technical correction.',
      id: 'Beralih sepenuhnya ke DaVinci Resolve. Mendalami teori warna, grading berbasis node, dan teknik emulasi film. Mulai memperlakukan warna sebagai alat emosional, bukan sekadar koreksi teknis.'
    }
  },
  {
    year: '2023',
    phase: { en: 'Execution', id: 'Eksekusi' },
    title: { en: 'Run-and-Gun to Studio', id: 'Dari Jalanan ke Studio' },
    body: {
      en: 'Expanded into full production — shooting live events, corporate profiles, and short-form content. Learned how to manage dynamic lighting environments and multi-cam workflows under pressure.',
      id: 'Berkembang ke produksi penuh — mengambil gambar acara langsung, profil korporat, dan konten pendek. Belajar cara mengelola lingkungan pencahayaan dinamis dan alur kerja multi-kamera di bawah tekanan.'
    }
  },
  {
    year: '2024–Now',
    phase: { en: 'Directing', id: 'Penyutradaraan' },
    title: { en: 'Cinematic Storytelling', id: 'Penceritaan Sinematik' },
    body: {
      en: "Currently focusing on high-end, narrative-driven work. Bringing a developer's systematic workflow (organized timelines, proxies, rendering pipelines) into the creative process of filmmaking.",
      id: "Saat ini fokus pada karya naratif kelas atas. Membawa alur kerja sistematis seorang developer (timeline teratur, proksi, pipeline rendering) ke dalam proses kreatif pembuatan film."
    }
  },
];

export const videoTech: SkillBar[] = [
  { name: 'Video Editing (Premiere/Resolve)', level: 90, cat: 'Post-Production' },
  { name: 'Color Grading (DaVinci)', level: 88, cat: 'Post-Production' },
  { name: 'Cinematography', level: 85, cat: 'Production' },
  { name: 'Sound Design & Audio Mixing', level: 80, cat: 'Audio' },
  { name: 'Motion Graphics (After Effects)', level: 75, cat: 'Post-Production' },
  { name: 'Lighting & Framing', level: 82, cat: 'Production' },
];

export const philosophy: PhilosophyItem[] = [
  {
    title: { en: 'Story Above All', id: 'Cerita di Atas Segalanya' },
    body: {
      en: "A 4K resolution means nothing if the narrative doesn't move the audience. The gear serves the story, never the other way around.",
      id: "Resolusi 4K tidak berarti apa-apa jika narasinya tidak menggerakkan audiens. Alat melayani cerita, bukan sebaliknya."
    }
  },
  {
    title: { en: 'Invisible Editing', id: 'Editing yang Tak Terlihat' },
    body: {
      en: "The best cuts are the ones the viewer never notices. Pacing and rhythm should feel biological, matching a heartbeat or a breath.",
      id: "Potongan terbaik adalah yang tidak pernah disadari penonton. Tempo dan ritme harus terasa biologis, selaras dengan detak jantung atau napas."
    }
  },
  {
    title: { en: 'Color is Emotion', id: 'Warna Adalah Emosi' },
    body: {
      en: "Grading is more than fixing white balance. It's painting the emotional temperature of the scene.",
      id: "Grading lebih dari sekadar memperbaiki white balance. Ini adalah melukis suhu emosional dari sebuah adegan."
    }
  },
];

export const heroStats = [
  { n: '2024', l: { en: 'Since', id: 'Sejak' } },
  { n: '15+', l: { en: 'Projects', id: 'Proyek' } },
  { n: '4K', l: { en: 'Resolution', id: 'Resolusi' } },
  { n: '100%', l: { en: 'Satisfaction', id: 'Kepuasan' } },
];