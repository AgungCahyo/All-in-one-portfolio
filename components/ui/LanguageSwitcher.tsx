'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';
import { usePathname } from 'next/navigation';
import { useActivePanel } from '@/lib/activePanelContext';

/**
 * Resolves theme colors based on current route or active panel on landing
 */
function getThemeColors(pathname: string, activePanel: string) {
  const isTerminal = pathname.startsWith('/developer') || (pathname === '/' && activePanel === 'developer');
  const isArtisan = pathname.startsWith('/leadership') || (pathname === '/' && activePanel === 'leadership');
  const isBrutalist = pathname.startsWith('/about') || (pathname === '/' && activePanel === 'about');
  const isWorkWithMe = pathname.startsWith('/work-with-me') || (pathname === '/' && activePanel === 'work-with-me');

  if (isTerminal || isWorkWithMe) {
    // Developer / "Blueprint" — indigo, light bg (was light-blue-on-dark)
    return {
      border: 'rgba(52,84,164,0.18)',
      bg: 'rgba(52,84,164,0.05)',
      active: '#3454a4',
      inactive: 'rgba(28,35,51,0.35)',
      dot: '#3fae74',
      dotGlow: 'rgba(63,174,116,0.35)',
    };
  }

  if (isArtisan) {
    // Leadership — evergreen + amber, light bg
    return {
      border: 'rgba(31,110,82,0.18)',
      bg: 'rgba(31,110,82,0.05)',
      active: '#1f6e52',
      inactive: 'rgba(36,33,27,0.35)',
      dot: '#e8a23d',
      dotGlow: 'rgba(232,162,61,0.35)',
    };
  }

  if (isBrutalist) {
    // About — neutral ink, light bg (was white-on-near-black)
    return {
      border: 'rgba(36,31,26,0.12)',
      bg: 'rgba(36,31,26,0.04)',
      active: '#241f1a',
      inactive: 'rgba(36,31,26,0.35)',
      dot: '#241f1a',
      dotGlow: 'rgba(36,31,26,0.3)',
    };
  }

  // videographer / default — terracotta + teal, light bg
  return {
    border: 'rgba(193,97,63,0.18)',
    bg: 'rgba(193,97,63,0.05)',
    active: '#c1613f',
    inactive: 'rgba(36,29,24,0.35)',
    dot: '#2c5f66',
    dotGlow: 'rgba(44,95,102,0.35)',
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