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
        accent: '#b8c8e0',
        dim: '#5a6880',
        bg: '#0a0d12',
        photo: '/profile.png',
        photoFlip: true,
        PhotoFilter: 'grayscale(20%) sepia(60%) hue-rotate(180deg) brightness(0.8)',
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
        // On hover, this panel now warms up into the same palette instead
        // of staying dark like the two sibling panels.
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
        accent: '#cec8c0',
        dim: '#6b6560',
        bg: '#0d0c0b',
        photo: '/hero.png',
        photoFlip: true,
        PhotoFilter: 'grayscale(40%)',
        theme: 'cinema'
    },
];