'use client';

import Link from 'next/link';

interface BreadcrumbLink {
  href: string;
  label: string;
  direction: 'prev' | 'next' | 'home';
}

interface FooterBreadcrumbProps {
  links: BreadcrumbLink[];
  current: string;
  color?: string;
}

const ArrowLeft = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
  </svg>
);

const ArrowRight = () => (
  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

export function FooterBreadcrumb({ links, current, color = '#2a2520' }: FooterBreadcrumbProps) {
  return (
    <div className="px-8 py-5 flex justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.03)' }}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-[11px] flex items-center gap-2 transition-colors"
          style={{ color }}
        >
          {link.direction === 'prev' && <ArrowLeft />}
          {link.label}
          {(link.direction === 'next' || link.direction === 'home') && <ArrowRight />}
        </Link>
      ))}

      <span className="text-[11px] font-medium" style={{ color }}>
        {current}
      </span>
    </div>
  );
}