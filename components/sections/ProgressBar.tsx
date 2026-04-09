'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
  active: boolean;
  duration: number;
}

export function ProgressBar({ active, duration }: ProgressBarProps) {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[2px] z-30 overflow-hidden bg-white/5">
      {active && (
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: duration / 1000, ease: 'linear' }}
          className="h-full bg-white/30"
        />
      )}
    </div>
  );
}