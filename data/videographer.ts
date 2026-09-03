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
    link: 'https://youtu.be/IGgQigrSOGE',
    linkLabel: { en: 'Watch Video', id: 'Tonton Video' },
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
    link: 'https://youtu.be/sNEY6BpiXko',
    linkLabel: { en: 'Watch Video', id: 'Tonton Video' },
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
    link: 'https://youtu.be/CJWyWw1W8CU',
    linkLabel: { en: 'Watch Video', id: 'Tonton Video' },
    stats: null,
  },
];

export const videoJourney: JourneyItem[] = [
  {
    year: '2021',
    phase: { en: 'Foundation', id: 'Fondasi' },
    title: { en: 'Starting Simple', id: 'Mulai dari yang Sederhana' },
    body: {
      en: 'Started editing casual clips just for fun, learning the basics of cutting and timing with free mobile apps.',
      id: 'Mulai mengedit klip-klip kasual untuk hobi, belajar dasar-dasar cutting dan timing pakai aplikasi gratis di HP.'
    }
  },
  {
    year: '2022',
    phase: { en: 'Discovery', id: 'Penemuan' },
    title: { en: 'Found My Tool: CapCut', id: 'Menemukan CapCut' },
    body: {
      en: 'Switched to CapCut and started exploring transitions, captions, and simple music syncing — making editing more fun and a lot easier.',
      id: 'Beralih ke CapCut dan mulai eksplorasi transisi, caption, dan sinkronisasi musik sederhana — bikin editing jadi lebih seru dan jauh lebih mudah.'
    }
  },
  {
    year: '2023',
    phase: { en: 'Practice', id: 'Latihan' },
    title: { en: 'Capturing Real Moments', id: 'Menangkap Momen Nyata' },
    body: {
      en: 'Started editing aftermovies for real moments around me — a family gathering, a village carnival, a school graduation — turning raw clips into something worth rewatching.',
      id: 'Mulai mengedit aftermovie dari momen-momen nyata di sekitar — kumpul keluarga, karnaval desa, hingga acara kelulusan sekolah — mengubah klip mentah jadi sesuatu yang enak ditonton ulang.'
    }
  },
  {
    year: '2024–Now',
    phase: { en: 'Present', id: 'Sekarang' },
    title: { en: 'Still Just for Fun', id: 'Masih Sekadar Hobi' },
    body: {
      en: "Still treat this purely as a hobby, experimenting with pacing, captions, and music choices whenever there's free time between coding projects.",
      id: 'Masih murni jadi hobi, eksperimen dengan tempo, caption, dan pilihan musik kalau ada waktu kosong di antara proyek coding.'
    }
  },
];

export const videoTech: SkillBar[] = [
  { name: 'Video Cutting & Trimming (CapCut)', level: 85, cat: 'Editing' },
  { name: 'Transitions & Effects', level: 70, cat: 'Editing' },
  { name: 'Captions & Subtitles', level: 75, cat: 'Editing' },
  { name: 'Basic Color Adjustment', level: 60, cat: 'Editing' },
  { name: 'Background Music & Audio Sync', level: 65, cat: 'Audio' },
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