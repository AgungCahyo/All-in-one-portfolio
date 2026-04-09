'use client';

import Link from "next/link";

interface NavLink {
    href: string;
    label: string;
    active?: boolean;
}

interface NavBarProps {
    links: NavLink[];
    bg?: string;
    backHref?: string;
}

export function NavBar({ links, bg = 'rgba(12,11,10,0.85)', backHref = '/' }: NavBarProps) {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 px-8 py-5 flex justify-between items-center"
            style={{
                background: bg,
                backdropFilter: 'blur(16px)',
                borderBottom: '1px solid rgba(255,255,255,0.04',
            }}
        >
            <Link href={backHref} className="flex items-center gap-3 group:">
                <svg className="w-3.5 h-3.5" style={{ color: links.find((l) => !l.active)?.href ? '#3a2a1a' : '#4a4540' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
                </svg>
                <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: links.find((l) => !l.active)?.href ? '#3a2a1a' : '#4a4540' }}>
                    Portfolio
                </span>
            </Link>
            <div className="flex items-center gap-7">
                {links.map((link) =>
                    link.active ? (
                        <span key={link.label}
                            className="text-[10px] tracking-[0.2em] uppercase font-medium"
                            style={{ color: link.href === '/beverage' ? '#b89878' : link.href === '/developer' ? '#8a9ab8' : '#a09890' }}
                        >
                            {link.label}
                        </span>
                    ) : (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-[10px] tracking-[0.2em] uppercase transition-colors"
                            style={{ color: '#3a3530' }}
                        >
                            {link.label}
                        </Link>
                    )
                )}
            </div>
        </nav>
    )
}