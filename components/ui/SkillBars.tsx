'use client';

import { motion } from 'framer-motion';
import type { SkillBar, BilingualString } from '@/lib/types';
import { useLanguage } from '@/lib/languageContext';

interface SkillBarsProps {
  skills: SkillBar[];
  barColor?: string;
  barBg?: string;
  nameColor?: string;
  descColor?: string;
  percentColor?: string;
  isMono?: boolean;
  showDesc?: boolean;
  showCat?: boolean;
}

export function SkillBars({
  skills,
  barColor = 'linear-gradient(to right, rgba(206,200,192,0.2), rgba(206,200,192,0.7))',
  barBg = 'rgba(206,200,192,0.05)',
  nameColor = '#cec8c0',
  descColor = '#5a5450',
  percentColor = 'rgba(206,200,192,0.4)',
  isMono = false,
  showDesc = false,
  showCat = false,
}: SkillBarsProps) {
  const { lang } = useLanguage();

  const resolve = (val?: string | BilingualString) => {
    if (!val) return '';
    return typeof val === 'string' ? val : val[lang] || '';
  };

  return (
    <div className="grid md:grid-cols-2 gap-x-16 gap-y-5">
      {skills.map((s, i) => (
        <motion.div
          key={resolve(s.name)}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.07 }}
        >
          <div className="flex justify-between items-baseline mb-1.5">
            <div>
              <span
                className={`${isMono ? 'font-mono text-[12px]' : 'text-[13px]'} font-medium`}
                style={{ color: nameColor }}
              >
                {resolve(s.name)}
              </span>
              {showDesc && s.desc && (
                <span className="text-[10px] ml-2" style={{ color: descColor }}>
                  {resolve(s.desc)}
                </span>
              )}
              {showCat && s.cat && (
                <span className={`${isMono ? 'font-mono text-[9px]' : 'text-[10px]'} ml-2`} style={{ color: descColor }}>
                  {isMono ? `// ${resolve(s.cat)}` : resolve(s.cat)}
                </span>
              )}
            </div>
            <span className={`${isMono ? 'font-mono ' : ''}text-[10px]`} style={{ color: percentColor }}>
              {s.level}%
            </span>
          </div>
          <div className="h-[2px] rounded-full overflow-hidden" style={{ background: barBg }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${s.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.07, ease: 'easeOut' }}
              className="h-full rounded-full"
              style={{ background: barColor }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}