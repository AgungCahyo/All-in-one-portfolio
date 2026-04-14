'use client';

import { useEffect, useRef, useState } from 'react';
import { terminalLines, TerminalLine } from '@/data/work-with-me';

/* ─── Typing animation ─── */
export function TypingText({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayed, setDisplayed] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const id = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) clearInterval(id);
    }, 28);
    return () => clearInterval(id);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="animate-pulse">█</span>
      )}
    </span>
  );
}

/* ─── Terminal widget ─── */
export function TerminalWidget() {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    let idx = 0;
    let alive = true;

    function scheduleNext(delay: number) {
      const id = setTimeout(() => {
        if (!alive) return;
        const entry = terminalLines[idx];
        if (!entry) return;
        setLines((prev) => [...prev, entry]);
        idx++;
        if (idx < terminalLines.length) {
          scheduleNext(idx % 2 === 0 ? 300 : 540);
        }
      }, delay);
      timersRef.current.push(id);
    }

    scheduleNext(600);

    return () => {
      alive = false;
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  return (
    <div
      className="rounded-lg overflow-hidden"
      style={{ border: '1px solid rgba(100,130,200,0.18)', background: '#080c10' }}
    >
      {/* Title bar */}
      <div
        className="flex items-center gap-1.5 px-4 py-2.5"
        style={{ borderBottom: '1px solid rgba(100,130,200,0.12)', background: '#0a0e14' }}
      >
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#febc2e' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28c840' }} />
        <span className="ml-auto font-mono text-[9px]" style={{ color: '#2a3848' }}>
          terminal — zsh
        </span>
      </div>
      {/* Content */}
      <div className="p-5 min-h-[200px] font-mono text-[12px] leading-relaxed space-y-1">
        {lines.map((line, i) => {
          if (!line) return null;
          return (
            <div key={i} className="flex items-start gap-2">
              {line.type === 'cmd' && (
                <span style={{ color: '#34d399' }}>{line.text}</span>
              )}
              {line.type === 'out' && (
                <span style={{ color: '#6a7a90' }}>{line.text}</span>
              )}
              {line.type === 'blink' && (
                <span style={{ color: '#34d399' }}>
                  $ <span className="animate-pulse">█</span>
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
