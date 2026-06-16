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
    title: { en: 'Picnic 2024', id: 'Piknik 2024' },
    type: { en: 'Personal Project', id: 'Proyek Pribadi' },
    year: '2024',
    description: {
      en: 'A video capturing a picnic outing in 2024, made just for fun.',
      id: 'Video yang menangkap momen piknik di tahun 2024, dibuat untuk hobi.'
    },
    tags: ['Color Grading', 'Sound Design'],
    videoId: 'ChtPLCgy_vo',
    link: 'https://youtu.be/ChtPLCgy_vo',
    linkLabel: { en: 'Watch Video', id: 'Tonton Video' },
    stats: null,
  },
  {
    title: { en: 'Family Time', id: 'Waktu Bersama Keluarga' },
    type: { en: 'Personal Project', id: 'Proyek Pribadi' },
    year: '2024',
    description: {
      en: 'A short video made for fun, capturing simple, warm moments of quality time with family.',
      id: 'Video singkat yang dibuat untuk hobi, menangkap momen-momen hangat dan sederhana saat menghabiskan waktu bersama keluarga.'
    },
    tags: ['Directing', 'Color Grading', 'Family'],
    videoId: 'IGgQigrSOGE',
    link: '#',
    linkLabel: { en: 'Coming Soon', id: 'Segera Hadir' },
    stats: null,
  },
  {
    title: { en: 'Independence Day Carnival – Bandungrejo', id: 'Karnaval 17 Agustus – Bandungrejo' },
    type: { en: 'Personal Project', id: 'Proyek Pribadi' },
    year: '2023',
    description: {
      en: 'Footage from an Independence Day carnival parade in Bandungrejo village, shot just for fun to capture the lively atmosphere of the celebration.',
      id: 'Rekaman dari pawai karnaval 17 Agustusan di Desa Bandungrejo, diambil untuk hobi guna menangkap suasana ramai perayaan tersebut.'
    },
    tags: ['Event Coverage', 'Run-and-gun', 'Sound Design'],
    videoId: 'sNEY6BpiXko',
    link: '#',
    linkLabel: { en: 'Coming Soon', id: 'Segera Hadir' },
    stats: null,
  },
  {
    title: { en: 'Graduation Day – SDN 2 Gajah', id: 'Hari Kelulusan – SDN 2 Gajah' },
    type: { en: 'Personal Project', id: 'Proyek Pribadi' },
    year: '2023',
    description: {
      en: 'An aftermovie made for fun, documenting the graduation ceremony at SDN 2 Gajah elementary school and the key moments of the day.',
      id: 'Aftermovie yang dibuat untuk hobi, mendokumentasikan acara kelulusan di SDN 2 Gajah beserta momen-momen penting di hari itu.'
    },
    tags: ['Documentary', 'Color Grading', 'School Event'],
    videoId: 'CJWyWw1W8CU',
    link: '#',
    linkLabel: { en: 'Coming Soon', id: 'Segera Hadir' },
    stats: null,
  },
];

export const videoJourney: JourneyItem[] = [
  {
    year: '2021',
    phase: { en: 'Foundation', id: 'Fondasi' },
    title: { en: 'The Art of the Cut', id: 'Seni Memotong Gambar' },
    body: {
      en: 'Started editing small projects and learning the fundamental psychology of pacing, rhythm, and continuity. Realized that editing is where the story is actually rewritten.',
      id: 'Mulai mengedit proyek-proyek kecil dan mempelajari psikologi di balik tempo, ritme, dan kontinuitas. Satu kesadaran penting: editing adalah tempat di mana cerita sesungguhnya ditulis ulang.'
    }
  },
  {
    year: '2022',
    phase: { en: 'Technical', id: 'Teknis' },
    title: { en: 'Mastering the Aesthetic', id: 'Menguasai Estetika' },
    body: {
      en: 'Transitioned heavily into DaVinci Resolve. Deep-dived into color theory, node-based grading, and film emulation techniques. Began treating color as an emotional tool, not just a technical correction.',
      id: 'Beralih sepenuhnya ke DaVinci Resolve. Menyelami teori warna, grading berbasis node, dan teknik emulasi film secara mendalam. Dari sinilah saya mulai memandang warna bukan sekadar koreksi teknis, melainkan alat emosional yang kuat.'
    }
  },
  {
    year: '2023',
    phase: { en: 'Execution', id: 'Eksekusi' },
    title: { en: 'Run-and-Gun to Studio', id: 'Dari Jalanan ke Studio' },
    body: {
      en: 'Expanded into full production — shooting live events, corporate profiles, and short-form content. Learned how to manage dynamic lighting environments and multi-cam workflows under pressure.',
      id: 'Berkembang ke produksi penuh — meliput acara langsung, profil korporat, dan konten pendek. Belajar mengelola pencahayaan yang terus berubah dan alur kerja multi-kamera di bawah tekanan waktu.'
    }
  },
  {
    year: '2024–Now',
    phase: { en: 'Directing', id: 'Penyutradaraan' },
    title: { en: 'Cinematic Storytelling', id: 'Bercerita Lewat Sinema' },
    body: {
      en: "Currently focusing on high-end, narrative-driven work. Bringing a developer's systematic workflow (organized timelines, proxies, rendering pipelines) into the creative process of filmmaking.",
      id: 'Saat ini fokus pada karya naratif kelas atas. Saya membawa kebiasaan sistematis ala developer — timeline terstruktur, proxy workflow, pipeline rendering — ke dalam proses kreatif pembuatan film.'
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
      id: 'Resolusi 4K tidak berarti apa-apa jika narasinya tidak menggerakkan penonton. Alat ada untuk melayani cerita, bukan sebaliknya.'
    }
  },
  {
    title: { en: 'Invisible Editing', id: 'Editing yang Tak Terasa' },
    body: {
      en: "The best cuts are the ones the viewer never notices. Pacing and rhythm should feel biological, matching a heartbeat or a breath.",
      id: 'Potongan terbaik adalah yang tidak pernah disadari penonton. Tempo dan ritme harus terasa alami — selaras dengan detak jantung atau tarikan napas.'
    }
  },
  {
    title: { en: 'Color is Emotion', id: 'Warna adalah Emosi' },
    body: {
      en: "Grading is more than fixing white balance. It's painting the emotional temperature of the scene.",
      id: 'Color grading bukan sekadar memperbaiki white balance. Ini tentang melukis suhu emosional dari sebuah adegan.'
    }
  },
];

export const heroStats = [
  { n: '2021', l: { en: 'Since', id: 'Sejak' } },
  { n: '15+', l: { en: 'Projects', id: 'Proyek' } },
  { n: '4K', l: { en: 'Resolution', id: 'Resolusi' } },
  { n: '100%', l: { en: 'Self-Funded', id: 'Swadaya' } },
];