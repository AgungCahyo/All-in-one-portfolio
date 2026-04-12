import type { Panel } from "@/lib/types";

export const ROTATE_INTERVAL = 5000;

export const grainUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

export const paperUrl = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='p'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23p)' opacity='0.04'/%3E%3C/svg%3E")`;

export const panels: Panel[] = [
    {
        id: 'beverage',
        href: '/beverage',
        num: '01',
        title: { en: 'Beverage\nCrafter', id: 'Beverage\nCrafter' },
        titleShort: 'Bev',
        subtitle: { en: '5+ years crafting drinks — taste, aroma & precision in every pour', id: '5+ tahun ngeracik minuman - rasa, aroma, dan presisi di tiap pour' },
        tag: { en: 'Mocktails · Cold Infusion · Menu Engineering', id: 'Mocktail · Cold Infusion · Rekayasa Menu' },
        cta: { en: 'View Craft Work', id: 'Lihat Craft Work' },
        accent: '#d0c0b0',
        dim: '#7a6458',
        bg: '#100c08',
        photo: '/profile.png',
        photoFlip: false,
        PhotoFilter: 'grayscale(30%) sepia(60%) hue-rotate(180deg)',
        theme: 'artisan'
    },
    {
        id: 'developer',
        href: '/developer',
        num: '02',
        title: { en: 'Full-stack\nDeveloper', id: 'Full-stack\nDeveloper' },
        titleShort: 'Dev',
        subtitle: { en: '3+ years shipping production apps — SaaS, AI & mobile', id: '3+ tahun shipping production apps - SaaS, AI, dan mobile' },
        tag: { en: 'TypeScript · n8n · AI · React · Node.js', id: 'TypeScript · n8n · AI · React · Node.js' },
        cta: { en: 'View Engineering Work', id: 'Lihat Engineering Work' },
        accent: '#b8c8e0',
        dim: '#5a6880',
        bg: '#0a0d12',
        photo: '/profile.png',
        photoFlip: false,
        PhotoFilter: 'grayscale(20%) sepia(60%) hue-rotate(330deg) brightness(0.8)',
        theme: 'terminal'
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