'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';
import { usePathname } from 'next/navigation';
import { useActivePanel } from '@/lib/activePanelContext';
import { Magnetic } from './Magnetic';
import Link from 'next/link';

/**
 * Resolves theme colors based on current route or active panel on landing
 */
function getThemeColors(pathname: string, activePanel: string) {
  const isTerminal = pathname.startsWith('/developer') || (pathname === '/' && activePanel === 'developer');
  const isArtisan = pathname.startsWith('/beverage') || (pathname === '/' && activePanel === 'beverage');
  const isBrutalist = pathname.startsWith('/about') || (pathname === '/' && activePanel === 'about');

  if (isTerminal) {
    return {
      border: 'rgba(100,130,200,0.15)',
      bg: 'rgba(100,130,200,0.03)',
      active: '#8a9ab8',
      inactive: 'rgba(100,130,200,0.3)',
      dot: '#8a9ab8',
      dotGlow: 'rgba(138,154,184,0.3)',
    };
  }

  if (isArtisan) {
    return {
      border: 'rgba(180,130,80,0.15)',
      bg: 'rgba(180,130,80,0.03)',
      active: '#b89878',
      inactive: 'rgba(180,130,80,0.3)',
      dot: '#b89878',
      dotGlow: 'rgba(184,152,120,0.3)',
    };
  }

  if (isBrutalist) {
    return {
      border: 'rgba(255, 255, 255, 0.1)',
      bg: 'rgba(255, 255, 255, 0.03)',
      active: '#e8e4e0',
      inactive: 'rgba(255, 255, 255, 0.3)',
      dot: '#e8e4e0',
      dotGlow: 'rgba(232, 228, 224, 0.3)',
    };
  }

  // cinema / videographer / default
  return {
    border: 'rgba(206,200,192,0.15)',
    bg: 'rgba(206,200,192,0.03)',
    active: '#a09890',
    inactive: 'rgba(206,200,192,0.3)',
    dot: '#a09890',
    dotGlow: 'rgba(160,152,144,0.3)',
  };
}

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const pathname = usePathname() ?? '/';
  const { activePanel } = useActivePanel();
  const colors = getThemeColors(pathname, activePanel);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLang(lang === 'en' ? 'id' : 'en')}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full relative group transition-[border-color,background-color] duration-500"
      style={{
        border: `1px solid ${colors.border}`,
        background: colors.bg,
        backdropFilter: 'blur(8px)',
      }}
    >
      <div className="flex items-center gap-1.5">
        <span
          className="text-[10px] tracking-widest uppercase font-medium transition-colors duration-500"
          style={{ color: lang === 'en' ? colors.active : colors.inactive }}
        >
          EN
        </span>
        <div 
          className="w-[1px] h-2.5 transition-colors duration-500" 
          style={{ background: colors.border }} 
        />
        <span
          className="text-[10px] tracking-widest uppercase font-medium transition-colors duration-500"
          style={{ color: lang === 'id' ? colors.active : colors.inactive }}
        >
          ID
        </span>
      </div>

      <motion.div
        animate={{ x: lang === 'en' ? -18 : 18 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full transition-colors duration-500"
        style={{
          background: colors.dot,
          boxShadow: `0 0 8px ${colors.dotGlow}`,
        }}
      />
    </motion.button>
  );
}