'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/languageContext';
import { philosophy } from '@/data/beverage';
import type { Panel, BilingualString } from '@/lib/types';

interface LeadPanelContentProps {
  panel: Panel;
  reduced: boolean | null;
}

export function LeadPanelContent({ panel, reduced }: LeadPanelContentProps) {
  const { lang, t } = useLanguage();
  const instant = Boolean(reduced);
  const fade = (delay: number) => ({
    initial: { opacity: 0, y: instant ? 0 : 8 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: instant ? 0.15 : 0.4,
      delay: instant ? 0 : delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  });

  return (
    <div className="flex h-full min-h-0 w-full flex-col">
      <div className="grid min-h-0 flex-1 grid-cols-1 content-start items-start gap-4 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] md:content-center md:items-center md:gap-8 lg:gap-10">
        <motion.blockquote
          {...fade(0)}
          className="m-0 font-['Fraunces',serif] font-semibold italic"
          style={{
            color: panel.accent,
            fontSize: 'clamp(1.28rem, 1.1vw + 1.05rem, 2.15rem)',
            lineHeight: 1.22,
            letterSpacing: '-0.02em',
            maxWidth: '19ch',
            textWrap: 'pretty',
          }}
        >
          {t(
            'Leadership is making the next person able to run the station without you standing over them.',
            'Leadership adalah membuat orang berikutnya bisa menjalankan station tanpa harus diawasi terus.',
          )}
        </motion.blockquote>

        <ol className="relative m-0 list-none p-0">
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 w-px"
            style={{ left: '7px', background: 'rgba(245,195,107,0.25)' }}
          />
          {philosophy.map((stage, index) => (
            <motion.li
              key={index}
              {...fade(0.14 + index * 0.09)}
              className="relative flex gap-3 pb-2.5 last:pb-0 md:gap-3.5 md:pb-3.5"
            >
              <span
                className="relative z-10 mt-0.5 flex h-3.5 w-3.5 shrink-0 items-center justify-center text-[10px] leading-none"
                style={{ color: panel.accent, background: panel.bg }}
                aria-hidden="true"
              >
                {stage.icon}
              </span>
              <div className="min-w-0">
                <p
                  className="mb-0.5 text-[9px] uppercase tracking-[0.22em]"
                  style={{ color: panel.accent }}
                >
                  {(stage.title as BilingualString)[lang]}
                </p>
                <p className="text-[11px] leading-snug" style={{ color: panel.dim }}>
                  {(stage.body as BilingualString)[lang]}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>

      <motion.div
        {...fade(0.52)}
        className="mt-4 flex items-center gap-2 text-[11px]"
        style={{ color: panel.accent }}
      >
        <span>{typeof panel.cta === 'string' ? panel.cta : panel.cta[lang]}</span>
        <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </motion.div>
    </div>
  );
}