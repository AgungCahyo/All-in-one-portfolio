'use client';

import { motion } from 'framer-motion';
import type { JourneyItem, BilingualString } from '@/lib/types';
import { useLanguage } from '@/lib/languageContext';

interface JourneyTimelineProps {
  items: JourneyItem[];
  lineColor?: string;
  dotColor?: string;
  yearColor?: string;
  phaseColor?: string;
  titleColor?: string;
  bodyColor?: string;
  dividerColor?: string;
  isMono?: boolean;
  yearWidth?: string;
}

export function JourneyTimeline({
  items,
  lineColor = 'linear-gradient(to bottom, transparent, rgba(206,200,192,0.1) 10%, rgba(206,200,192,0.1) 90%, transparent)',
  dotColor = 'rgba(206,200,192,0.8)',
  dotGlowColor,
  yearColor = 'rgba(206,200,192,0.6)',
  phaseColor = '#5a5450',
  titleColor = '#cec8c0',
  bodyColor = '#6a6460',
  dividerColor = 'rgba(206,200,192,0.05)',
  isMono = false,
  yearWidth = '70px',
}: JourneyTimelineProps & { dotGlowColor?: string }) {
  const { lang } = useLanguage();

  const resolve = (val?: string | BilingualString) => {
    if (!val) return '';
    return typeof val === 'string' ? val : val[lang] || '';
  };

  return (
    <div className="relative">
      <div
        className="absolute top-0 bottom-0 w-px hidden md:block"
        style={{ left: yearWidth, background: lineColor }}
      />

      <div className="space-y-10">
        {items.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="flex gap-8 md:gap-16 items-start"
          >
            {/* Year node */}
            <div className="flex-shrink-0 text-right" style={{ width: yearWidth }}>
              <div
                className={isMono ? 'font-mono text-[10px]' : "font-['Cormorant_Garamond',serif] text-xl font-bold"}
                style={{ color: yearColor }}
              >
                {item.year}
              </div>
              <div
                className={`${isMono ? 'font-mono ' : ''}text-[8px] tracking-[0.2em] uppercase mt-0.5`}
                style={{ color: phaseColor }}
              >
                {resolve(item.phase)}
              </div>
            </div>

            {/* Dot */}
            <div
              className="relative hidden md:flex flex-shrink-0"
              style={{ width: '0', alignSelf: 'flex-start', marginTop: isMono ? '5px' : '10px' }}
            >
              <div
                className="w-2 h-2 rounded-full translate-x-[-4px]"
                style={{
                  background: dotColor,
                  boxShadow: `0 0 0 3px ${dotGlowColor ?? 'rgba(206,200,192,0.1)'}`,
                }}
              />
            </div>

            {/* Content */}
            <div
              className="flex-1 pb-8"
              style={{ borderBottom: i < items.length - 1 ? `1px solid ${dividerColor}` : 'none' }}
            >
              <h4
                className={`${isMono ? 'font-mono text-[14px]' : "font-['Cormorant_Garamond',serif] text-2xl"} font-bold mb-2`}
                style={{ color: titleColor }}
              >
                {resolve(item.title)}
              </h4>
              <p className="text-[13px] leading-relaxed" style={{ color: bodyColor }}>
                {resolve(item.body)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}