'use client';

interface SectionLabelProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  isMono?: boolean;
}

export function SectionLabel({
  children,
  color = '#5a5450',
  className = '',
  isMono = false,
}: SectionLabelProps) {
  return (
    <p
      className={`text-[10px] tracking-[0.4em] uppercase mb-8 font-medium ${isMono ? 'font-mono' : ''} ${className}`}
      style={{ color }}
    >
      {children}
    </p>
  );
}