// ─── Shared Types ────────────────────────────────────────────────────────────
export interface BilingualString {
    en: string;
    id: string;
}


export interface JourneyItem {
    year: string;
    phase: string | BilingualString;
    title: string | BilingualString;
    body: string | BilingualString;
}

export interface SkillBar {
    name: string | BilingualString;
    level: number;
    desc?: string | BilingualString;
    cat?: string | BilingualString;
}

export interface SkillCategory {
    category: string | BilingualString;
    items: string[] | BilingualString[];
}

export interface PhilosophyItem {
    icon?: string;
    title: string | BilingualString;
    body: string | BilingualString;
}

export interface Panel {
    id: string;
    href: string;
    num: string;
    title: string | BilingualString;
    titleShort: string;
    subtitle: string | BilingualString;
    tag: string | BilingualString;
    cta: string | BilingualString;
    accent: string;
    dim: string;
    bg: string;
    photo: string;
    photoFlip: boolean;
    PhotoFilter: string;
    theme: 'cinema' | 'terminal' | 'artisan';
}