'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  active: boolean;
  duration: number;
  isLeadership?: boolean;
}

export function ProgressBar({ active, duration, isLeadership = false }: ProgressBarProps) {
  return (
    <div className={`absolute bottom-0 left-0 right-0 h-[2px] z-30 overflow-hidden
      ${isLeadership && active ? 'bg-[rgba(197,208,218,0.3)]' : 'bg-white/5'}
      ${isLeadership && active ? 'animate-pulse-slow' : ''}`}>
      {active && (
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: duration / 1000, ease: 'linear' }}
          className={`h-full
            ${isLeadership ? 'bg-[rgba(197,208,218,0.6)]' : 'bg-white/30'}
            ${isLeadership ? 'animate-pulse-slow' : ''}`}
        />
      )}
    </div>
  );
}