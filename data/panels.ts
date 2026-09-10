import type { Panel } from "@/lib/types";

export const ROTATE_INTERVAL = 5000;

export const grainUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export const paperUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.04'/%3E%3C/svg%3E")`;

export const panels: Panel[] = [
    {
        id: 'developer',
        href: '/developer',
        num: '01',
        title: { en: 'Full-stack\nDeveloper', id: 'Full-stack\nDeveloper' },
        titleShort: 'Dev',
        subtitle: { en: '3+ years shipping production apps — SaaS, AI & mobile', id: '3+ tahun shipping production apps - SaaS, AI, dan mobile' },
        tag: { en: 'TypeScript · n8n · AI · React · Node.js', id: 'TypeScript · n8n · AI · React · Node.js' },
        cta: { en: 'View Engineering Work', id: 'Lihat Engineering Work' },
        // Indigo + mint on light "blueprint" base — matches the redesigned
        // /developer page. Panel rests light like its sibling panels.
        accent: '#3454a4',
        dim: '#5a6478',
        bg: '#f5f7fa',
        photo: '/profile.png',
        photoFlip: true,
        PhotoFilter: 'grayscale(10%) sepia(28%) hue-rotate(178deg) saturate(1.4) brightness(1.0)',
        theme: 'terminal'
    },
    {
        id: 'leadership',
        href: '/leadership',
        num: '02',
        title: { en: 'Team\nCoordinator', id: 'Koordinator\nTim' },
        titleShort: 'Lead',
        subtitle: { en: 'Coordinating teams, training new staff, and keeping beverage operations moving.', id: 'Mengkoordinasikan tim, melatih staf baru, dan menjaga operasional minuman tetap berjalan.' },
        tag: { en: 'Leadership · Staff Training · Operations', id: 'Leadership · Pelatihan Tim · Operasional' },
        cta: { en: 'View Leadership Work', id: 'Lihat Kerja Leadership' },
        // Evergreen + amber + warm paper — matches the /leadership page.
        accent: '#1f6e52',
        dim: '#6b6357',
        bg: '#faf6ee',
        photo: '/profile.png',
        photoFlip: false,
        PhotoFilter: 'grayscale(8%) sepia(35%) hue-rotate(-6deg) saturate(1.15) brightness(0.95)',
        theme: 'leadership'
    },
    {
        id: 'videographer',
        href: '/videographer',
        num: '03',
        title: { en: 'Videographer\n& Editor', id: 'Videographer\n& Editor' },
        titleShort: 'Video',
        subtitle: { en: 'Cinematic storytelling — corporate, documentary & brand film', id: 'Cinematic storytelling - corporate, documentary, dan brand film' },
        tag: { en: '4K · Premiere Pro · DaVinci Resolve · CapCut', id: '4K · Premiere Pro · DaVinci Resolve · CapCut' },
        cta: { en: 'View Visual Work', id: 'Lihat Visual Work' },
        // Terracotta + teal (a desaturated colorist grade) on warm-cool
        // paper — matches the redesigned /videographer page.
        accent: '#c1613f',
        dim: '#6b5f56',
        bg: '#f7f3ee',
        photo: '/hero.png',
        photoFlip: true,
        PhotoFilter: 'sepia(30%) saturate(1.3) hue-rotate(-10deg) brightness(1.0)',
        theme: 'cinema'
    },
];