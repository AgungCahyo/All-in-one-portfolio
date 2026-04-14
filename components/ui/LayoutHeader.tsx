'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Magnetic } from './Magnetic';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useLanguage } from '@/lib/languageContext';
import { RoleType, ThemeVariant } from '@/lib/types';

interface HeaderProps {
  activeRole?: RoleType;
  theme?: ThemeVariant;
}

const themeStyles: Record<ThemeVariant, any> = {
  cinema: {
    bg: 'rgba(12,11,10,0.85)',
    border: 'rgba(255,255,255,0.04)',
    textPrimary: '#cec8c0',
    textSecondary: '#4a4540',
    textMuted: '#3a3530',
    active: '#a09890',
    accent: '#cec8c0',
    mobileBg: '#0c0b0a',
  },
  terminal: {
    bg: 'rgba(9,12,16,0.85)',
    border: 'rgba(255,255,255,0.04)',
    textPrimary: '#b8c8e0',
    textSecondary: '#2a3040',
    textMuted: '#3a4860',
    active: '#8a9ab8',
    accent: '#b8c8e0',
    mobileBg: '#090c10',
  },
  artisan: {
    bg: 'rgba(12,9,6,0.85)',
    border: 'rgba(255,255,255,0.04)',
    textPrimary: '#d0c0b0',
    textSecondary: '#3a2a1a',
    textMuted: '#5a4a38',
    active: '#b89878',
    accent: '#d0c0b0',
    mobileBg: '#0c0906',
  },
  brutalist: {
    bg: 'rgba(15, 15, 15, 0.85)',
    border: 'rgba(255,255,255,0.06)',
    textPrimary: '#e8e4e0',
    textSecondary: '#666666',
    textMuted: '#444444',
    active: '#ffffff',
    accent: '#ffffff',
    mobileBg: '#080808',
  }
};

export function LayoutHeader({ activeRole, theme = 'cinema' }: HeaderProps) {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const styles = themeStyles[theme];

  const navLinks = [
    { id: 'videographer', href: '/videographer', labelEn: 'Videographer', labelId: 'Videografer' },
    { id: 'developer', href: '/developer', labelEn: 'Developer', labelId: 'Developer' },
    { id: 'beverage', href: '/beverage', labelEn: 'Beverage', labelId: 'Peracik' },
    { id: 'about', href: '/about', labelEn: 'About', labelId: 'Tentang' },
  ];

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 sm:py-5 flex justify-between items-center transition-colors duration-500"
        style={{ 
          background: styles.bg, 
          backdropFilter: 'blur(16px)', 
          borderBottom: `1px solid ${styles.border}` 
        }}
      >
        <Magnetic strength={0.3}>
          <Link href="/" className="flex items-center gap-3 group">
            <svg className="w-3.5 h-3.5 transition-colors" style={{ color: styles.textSecondary }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 12H5M5 12l7-7M5 12l7 7" />
            </svg>
            <span className="text-[10px] tracking-[0.25em] uppercase transition-colors" style={{ color: styles.textSecondary }}>
              {t('Portfolio', 'Portofolio')}
            </span>
          </Link>
        </Magnetic>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <Magnetic key={link.id} strength={0.2}>
              {activeRole === link.id ? (
                <span 
                  className="text-[10px] tracking-[0.2em] uppercase font-medium" 
                  style={{ color: styles.active }}
                >
                  {t(link.labelEn, link.labelId)}
                </span>
              ) : (
                <Link 
                  href={link.href} 
                  className="text-[10px] tracking-[0.2em] uppercase transition-colors" 
                  style={{ color: styles.textSecondary }}
                >
                  {t(link.labelEn, link.labelId)}
                </Link>
              )}
            </Magnetic>
          ))}
          <div className="w-px h-3 ml-2" style={{ background: styles.border }} />
          <Magnetic strength={0.2}>
            <Link
              href="/developer/work-with-me"
              className="px-3.5 py-2 rounded-full text-[10px] tracking-[0.18em] uppercase transition-colors"
              style={{ border: `1px solid ${styles.border}`, color: styles.accent }}
            >
              {t('Start Project', 'Mulai Project')}
            </Link>
          </Magnetic>
          <LanguageSwitcher />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button 
            onClick={() => setMenuOpen((v) => !v)} 
            className="p-2 rounded-md border transition-colors" 
            style={{ borderColor: styles.border }}
            aria-label="Toggle menu"
          >
            <svg className="w-4 h-4" style={{ color: styles.textPrimary + 'B3' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[58px] left-0 right-0 z-40 md:hidden px-4 py-3 border-b backdrop-blur-xl"
            style={{ 
              background: `${styles.mobileBg}F2`, 
              borderColor: styles.border 
            }}
          >
            <div className="flex flex-col gap-2 text-[11px] tracking-[0.16em] uppercase">
              {navLinks.map((link) => (
                <Link 
                  key={link.id}
                  href={link.href} 
                  className={`px-3 py-2 rounded-md transition-colors ${activeRole === link.id ? 'font-bold' : ''}`}
                  style={{ 
                    background: activeRole === link.id ? 'rgba(255,255,255,0.06)' : 'transparent',
                    color: activeRole === link.id ? styles.textPrimary : styles.textSecondary
                  }}
                  onClick={() => setMenuOpen(false)}
                >
                  {t(link.labelEn, link.labelId)}
                </Link>
              ))}
              <Link
                href="/developer/work-with-me"
                className="px-3 py-2 rounded-md transition-colors font-bold"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  color: styles.textPrimary,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {t('Start Project', 'Mulai Project')}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
