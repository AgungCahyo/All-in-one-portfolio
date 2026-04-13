import type { AboutTimeline, AboutValue, AboutOffwork, AboutAvailability } from "../lib/types";

export const timeline: AboutTimeline[] = [
  {
    year: '2019',
    code: 'BEV-001',
    title: { en: 'Culinary Vocational School', id: 'SMK Tata Boga' },
    body: {
      en: 'Formal education in culinary arts and F&B service. First encounter with precision measurement, flavor science, and high-pressure hospitality.',
      id: 'Awal mula belajar dunia kuliner secara serius. Di sini pertama kali ngerti kenapa ukuran harus presisi, rasa bisa dipelajari, dan kerja di bawah tekanan itu bisa jadi kebiasaan.',
    },
    tag: { en: 'CRAFT', id: 'CRAFT' },
  },
  {
    year: '2020',
    code: 'BEV-002',
    title: { en: 'F&B Industry Entry', id: 'Masuk Industri F&B' },
    body: {
      en: 'First professional role. Learned volume service, consistency under pressure, and what it means to own a craft in a commercial environment.',
      id: 'Pertama kali kerja beneran di industri. Belajar bahwa konsistensi bukan soal mood — dan kalau mau nguasain sesuatu, lingkungan komersial adalah guru yang paling jujur.',
    },
    tag: { en: 'CRAFT', id: 'CRAFT' },
  },
  {
    year: '2021',
    code: 'VID-001',
    title: { en: 'Filmmaking Discovered', id: 'Ketemu Dunia Film' },
    body: {
      en: 'Started editing and shooting. Learned that the cut is where the story is rewritten. Rhythm, pacing, continuity — the psychology of moving images.',
      id: 'Mulai iseng belajar editing, terus nggak bisa berhenti. Nyadar bahwa cerita yang bagus bukan cuma soal apa yang direkam — tapi gimana cara motongnya.',
    },
    tag: { en: 'CINEMA', id: 'SINEMA' },
  },
  {
    year: '2022',
    code: 'DEV-001',
    title: { en: 'First Line of Code', id: 'Baris Kode Pertama' },
    body: {
      en: 'Started from zero. HTML, CSS, JS, React. Self-taught across every resource available. Realized that shipping real things teaches faster than any course.',
      id: 'Nol besar. Nggak ada background IT, nggak ada mentor. Tapi makin ke sini makin sadar — cara paling cepat belajar coding adalah langsung bikin sesuatu yang nyata.',
    },
    tag: { en: 'CODE', id: 'CODE' },
  },
  {
    year: '2023',
    code: 'DEV-002',
    title: { en: 'First Shipped Product', id: 'Produk Pertama Naik' },
    body: {
      en: 'HPP Calculator — a React Native app for F&B entrepreneurs. First product used by real paying users. Code met craft for the first time.',
      id: 'Kalkulator HPP — aplikasi React Native buat pelaku usaha F&B. Pertama kalinya ada orang yang bayar buat pakai sesuatu yang gue bikin. Dua dunia akhirnya ketemu.',
    },
    tag: { en: 'CODE', id: 'CODE' },
  },
  {
    year: '2024',
    code: 'ALL-001',
    title: { en: 'The Convergence', id: 'Titik Temu' },
    body: {
      en: 'Operating simultaneously across all three disciplines. Each craft bleeds into the others. This is not three careers — it is one obsession with different outputs.',
      id: 'Ketiganya jalan bareng. Dan ternyata nggak berantakan — justru saling nguatin. Ini bukan tiga karir, ini satu cara pikir yang punya banyak bentuk.',
    },
    tag: { en: 'ALL', id: 'SEMUA' },
  },
];

export const values: AboutValue[] = [
  {
    num: '01',
    title: { en: 'Precision', id: 'Presisi' },
    body: {
      en: 'Every gram in a recipe. Every pixel in a layout. Every test in a codebase. The details others skip are where quality lives.',
      id: 'Tiap gram dalam resep. Tiap pixel dalam layout. Tiap test dalam codebase. Yang sering dilewat orang lain — biasanya di situ bedanya.',
    },
  },
  {
    num: '02',
    title: { en: 'Intentionality', id: 'Ada Tujuannya' },
    body: {
      en: 'Nothing ships without a reason. If I cannot articulate why something exists, it does not exist.',
      id: 'Kalau nggak bisa jelasin kenapa sesuatu perlu ada, berarti memang nggak perlu dibuat. Sesederhana itu.',
    },
  },
  {
    num: '03',
    title: { en: 'Cross-Pollination', id: 'Lintas Bidang' },
    body: {
      en: 'A beverage technique inspiring a UX pattern. A filmmaking principle shaping an API. The best ideas live at the intersection.',
      id: 'Cara meracik minuman bisa jadi inspirasi UX. Prinsip filmmaking bisa bentuk desain API. Ide terbaik hampir selalu datang dari tempat yang nggak terduga.',
    },
  },
  {
    num: '04',
    title: { en: 'Craft Over Speed', id: 'Kualitas Dulu' },
    body: {
      en: 'Extraordinary late beats mediocre on time. Quality is the one variable I refuse to negotiate.',
      id: 'Lebih pilih terlambat tapi luar biasa daripada tepat waktu tapi biasa-biasa. Kualitas nggak masuk daftar hal yang bisa dikompromiin.',
    },
  },
];

export const offwork: AboutOffwork[] = [
  { label: { en: 'Coffee — single origin, always black', id: 'Kopi — single origin, selalu hitam' } },
  { label: { en: 'Reading — design, psychology, behavioral finance', id: 'Baca — design, psychology, behavioral finance' } },
  { label: { en: 'Music — lo-fi while coding, jazz while editing', id: 'Musik — lo-fi kalau lagi coding, jazz kalau lagi editing' } },
  { label: { en: 'Street photography — candid moments, honest light', id: 'Street photography — momen candid, cahaya yang jujur' } },
  { label: { en: 'Systems thinking — everything connects', id: 'Systems thinking — semuanya saling nyambung' } },
];

export const availability: AboutAvailability[] = [
  { role: { en: 'Full-Stack Developer', id: 'Full-Stack Developer' }, status: { en: 'AVAILABLE', id: 'TERSEDIA' }, open: true },
  { role: { en: 'Videographer / Editor', id: 'Videografer / Editor' }, status: { en: 'AVAILABLE', id: 'TERSEDIA' }, open: true },
  { role: { en: 'Beverage Consultant', id: 'Beverage Consultant' }, status: { en: 'BY REQUEST', id: 'SESUAI REQUEST' }, open: false },
];