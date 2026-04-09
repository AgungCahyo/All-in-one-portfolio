'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'id' : 'en');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full transition-colors relative group"
      style={{ 
        border: '1px solid rgba(180,130,80,0.15)', 
        background: 'rgba(180,130,80,0.03)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <div className="flex items-center gap-1.5">
        <span 
          className="text-[10px] tracking-widest uppercase font-medium transition-colors"
          style={{ color: lang === 'en' ? '#b89878' : 'rgba(180,130,80,0.4)' }}
        >
          EN
        </span>
        <div className="w-[1px] h-2.5" style={{ background: 'rgba(180,130,80,0.15)' }} />
        <span 
          className="text-[10px] tracking-widest uppercase font-medium transition-colors"
          style={{ color: lang === 'id' ? '#b89878' : 'rgba(180,130,80,0.4)' }}
        >
          ID
        </span>
      </div>
      
      {/* Decorative dot indicator */}
      <motion.div 
        animate={{ 
          x: lang === 'en' ? -18 : 18 
        }}
        className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full" 
        style={{ background: '#b89878', boxShadow: '0 0 8px rgba(184,152,120,0.4)' }}
      />
    </motion.button>
  );
}
