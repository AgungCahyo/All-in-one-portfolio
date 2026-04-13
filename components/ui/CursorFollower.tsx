'use client';

import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { useActivePanel } from '@/lib/activePanelContext';

type Role = 'cinema' | 'dev' | 'artisan' | 'about';

interface TailPoint { x: number; y: number; }

function getRoleFromPath(path: string): Role {
  if (path.startsWith('/developer')) return 'dev';
  if (path.startsWith('/beverage')) return 'artisan';
  if (path.startsWith('/about')) return 'about';
  return 'cinema';
}

function getRoleFromPanel(panel: string): Role {
  if (panel === 'developer') return 'dev';
  if (panel === 'beverage') return 'artisan';
  return 'cinema';
}

const TAIL_LEN = 40;

/* ─── Cinema cursor — viewfinder crosshair + film ribbon tail ─── */
function CinemaCursor({ x, y, tail, frame }: { x: number; y: number; tail: TailPoint[]; frame: number }) {
  const blink = Math.floor(frame / 12) % 2 === 0;
  const breathe = 1 + Math.sin(frame * 0.04) * 0.04;
  const R = 28 * breathe;
  const scanAngle = (frame * 0.04) % (Math.PI * 2);
  const count = String(Math.floor(frame * 0.4) % 9999).padStart(4, '0');

  const ticks = Array.from({ length: 12 }, (_, i) => {
    const a = (i / 12) * Math.PI * 2;
    const inner = i % 3 === 0 ? R - 6 : R - 3;
    return { a, inner };
  });

  return (
    <svg className="pointer-events-none fixed inset-0 w-full h-full overflow-visible" style={{ zIndex: 9999 }}>
      {tail.map((p, i) => {
        if (i === 0 || i >= tail.length - 1) return null;
        const prev = tail[i - 1];
        const progress = i / tail.length;
        const alpha = (1 - progress) * 0.35;
        const dx = p.x - prev.x, dy = p.y - prev.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len;
        const w = (1 - progress) * 5;
        const pts = `${prev.x + nx * w},${prev.y + ny * w} ${p.x + nx * w},${p.y + ny * w} ${p.x - nx * w},${p.y - ny * w} ${prev.x - nx * w},${prev.y - ny * w}`;
        return (
          <g key={i}>
            <polygon points={pts} fill={`rgba(206,200,192,${alpha * 0.6})`} />
            {i % 4 === 0 && progress < 0.7 && (
              <>
                <rect x={(p.x + prev.x) / 2 + nx * (w - 2) - 1} y={(p.y + prev.y) / 2 + ny * (w - 2) - 2} width={2} height={4} fill={`rgba(206,200,192,${alpha * 0.9})`} />
                <rect x={(p.x + prev.x) / 2 - nx * (w - 2) - 1} y={(p.y + prev.y) / 2 - ny * (w - 2) - 2} width={2} height={4} fill={`rgba(206,200,192,${alpha * 0.9})`} />
              </>
            )}
          </g>
        );
      })}
      <circle cx={x} cy={y} r={R + 10} stroke="rgba(206,200,192,0.12)" strokeWidth={0.5} strokeDasharray="3 6" fill="none" />
      <circle cx={x} cy={y} r={R} stroke="rgba(206,200,192,0.5)" strokeWidth={1} fill="none" />
      {ticks.map(({ a, inner }, i) => (
        <line key={i}
          x1={x + Math.cos(a) * inner} y1={y + Math.sin(a) * inner}
          x2={x + Math.cos(a) * R} y2={y + Math.sin(a) * R}
          stroke="rgba(206,200,192,0.4)" strokeWidth={i % 3 === 0 ? 0.8 : 0.5}
        />
      ))}
      <path
        d={`M ${x} ${y} L ${x + Math.cos(scanAngle) * (R - 2)} ${y + Math.sin(scanAngle) * (R - 2)} A ${R - 2} ${R - 2} 0 0 1 ${x + Math.cos(scanAngle + 0.8) * (R - 2)} ${y + Math.sin(scanAngle + 0.8) * (R - 2)} Z`}
        fill="rgba(206,200,192,0.07)"
      />
      <line x1={x - R - 18} y1={y} x2={x + R + 18} y2={y} stroke="rgba(206,200,192,0.2)" strokeWidth={0.5} />
      <line x1={x} y1={y - R - 18} x2={x} y2={y + R + 18} stroke="rgba(206,200,192,0.2)" strokeWidth={0.5} />
      <circle cx={x} cy={y} r={2.5} fill="rgba(206,200,192,0.9)" />
      <text x={x + 34} y={y + 4} fontSize={9} fontFamily="monospace" letterSpacing="0.18em" fill={blink ? 'rgba(206,200,192,0.55)' : 'rgba(206,200,192,0.15)'}>REC</text>
      <circle cx={x + 57} cy={y + 1} r={2} fill={blink ? 'rgba(220,60,60,0.7)' : 'rgba(220,60,60,0.2)'} />
      <text x={x + 34} y={y + 16} fontSize={9} fontFamily="monospace" fill="rgba(206,200,192,0.25)">{count}</text>
    </svg>
  );
}

/* ─── Dev cursor — terminal box + binary stream tail ─── */
function DevCursor({ x, y, tail, frame }: { x: number; y: number; tail: TailPoint[]; frame: number }) {
  const chars = ['0', '1', '▓', '░', '1', '0', '█', '▒'];
  const pulse = 1 + Math.sin(frame * 0.09) * 0.03;
  const bw = 40 * pulse, bh = 40 * pulse;
  const scanY = y + Math.sin(frame * 0.06) * 30;
  const counterStr = String(frame % 999).padStart(3, '0');

  return (
    <svg className="pointer-events-none fixed inset-0 w-full h-full overflow-visible" style={{ zIndex: 9999 }}>
      {tail.map((p, i) => {
        if (i === 0 || i >= tail.length - 1) return null;
        const prev = tail[i - 1];
        const progress = i / tail.length;
        const alpha = (1 - progress) * 0.6;
        const size = (1 - progress) * 10 + 4;
        return (
          <g key={i}>
            <line x1={prev.x} y1={prev.y} x2={p.x} y2={p.y}
              stroke={`rgba(100,140,220,${alpha * 0.25})`}
              strokeWidth={(1 - progress) * 1.5}
            />
            {i % 2 === 0 && (
              <text x={p.x - size / 4} y={p.y + size / 3}
                fontSize={size} fontFamily="monospace"
                fill={`rgba(52,212,153,${alpha * 0.7})`}
              >{chars[i % chars.length]}</text>
            )}
          </g>
        );
      })}
      <line x1={x} y1={y - 80} x2={x} y2={y + 80} stroke="rgba(100,140,220,0.2)" strokeWidth={1} />
      <line x1={x - 60} y1={scanY} x2={x + 60} y2={scanY} stroke="rgba(100,140,220,0.15)" strokeWidth={0.5} />
      <rect x={x - bw / 2} y={y - bh / 2} width={bw} height={bh}
        stroke="rgba(100,140,220,0.55)" strokeWidth={1} fill="rgba(100,140,220,0.03)" rx={2}
      />
      {([[-1, -1], [1, -1], [1, 1], [-1, 1]] as const).map(([cx, cy], idx) => {
        const ox = x + cx * bw / 2, oy = y + cy * bh / 2;
        return (
          <path key={idx}
            d={`M ${ox} ${oy + cy * 8} L ${ox} ${oy} L ${ox + cx * 8} ${oy}`}
            stroke="rgba(100,140,220,0.9)" strokeWidth={1.5} fill="none"
          />
        );
      })}
      <circle cx={x} cy={y} r={8 + Math.sin(frame * 0.12) * 2} stroke="rgba(52,212,153,0.15)" strokeWidth={2} fill="none" />
      <circle cx={x} cy={y} r={2.5} fill="rgba(52,212,153,0.9)" />
      <text x={x + 24} y={y + 28} fontSize={9} fontFamily="monospace" fill="rgba(52,212,153,0.6)">
        x:{Math.round(x)} y:{Math.round(y)}
      </text>
      <text x={x + 24} y={y + 40} fontSize={9} fontFamily="monospace" fill="rgba(100,140,220,0.4)">
        [{counterStr}]
      </text>
    </svg>
  );
}

/* ─── Artisan cursor — botanical compass rose + vine tail ─── */
function ArtisanCursor({ x, y, tail, rotation }: { x: number; y: number; tail: TailPoint[]; rotation: number }) {
  const petals = Array.from({ length: 8 }, (_, i) => i);
  const fronds = Array.from({ length: 4 }, (_, i) => i);

  return (
    <svg className="pointer-events-none fixed inset-0 w-full h-full overflow-visible" style={{ zIndex: 9999 }}>
      {tail.map((p, i) => {
        if (i === 0 || i >= tail.length - 1) return null;
        const prev = tail[i - 1];
        const progress = i / tail.length;
        const alpha = (1 - progress) * 0.5;
        const dx = p.x - prev.x, dy = p.y - prev.y;
        const len = Math.hypot(dx, dy) || 1;
        const nx = -dy / len, ny = dx / len;
        const angle = Math.atan2(dy, dx);
        return (
          <g key={i}>
            <line x1={prev.x} y1={prev.y} x2={p.x} y2={p.y}
              stroke={`rgba(180,130,80,${alpha * 0.6})`} strokeWidth={(1 - progress) * 2} />
            {i % 6 === 0 && progress < 0.75 && (
              <>
                <ellipse cx={(p.x + prev.x) / 2 + nx * 5} cy={(p.y + prev.y) / 2 + ny * 5}
                  rx={4} ry={2} transform={`rotate(${(angle * 180) / Math.PI}, ${(p.x + prev.x) / 2 + nx * 5}, ${(p.y + prev.y) / 2 + ny * 5})`}
                  fill={`rgba(180,130,80,${alpha * 0.4})`} stroke={`rgba(180,130,80,${alpha})`} strokeWidth={0.5} />
                {i % 12 === 0 && (
                  <ellipse cx={(p.x + prev.x) / 2 - nx * 5} cy={(p.y + prev.y) / 2 - ny * 5}
                    rx={3} ry={1.5} transform={`rotate(${(angle * 180) / Math.PI}, ${(p.x + prev.x) / 2 - nx * 5}, ${(p.y + prev.y) / 2 - ny * 5})`}
                    fill={`rgba(210,170,110,${alpha * 0.35})`} stroke="none" />
                )}
              </>
            )}
            {i > tail.length - 6 && (
              <circle cx={p.x} cy={p.y} r={2} fill={`rgba(210,170,110,${(1 - progress) * 0.5})`} />
            )}
          </g>
        );
      })}
      <circle cx={x} cy={y} r={30} stroke="rgba(180,130,80,0.25)" strokeWidth={0.5} fill="none" />
      {petals.map(i => {
        const angle = (i / 8) * Math.PI * 2 + rotation;
        const isPrimary = i % 2 === 0;
        const length = isPrimary ? 26 : 18;
        const tx = x + Math.cos(angle) * length;
        const ty = y + Math.sin(angle) * length;
        const diamondAngle = (angle + Math.PI / 4) * (180 / Math.PI);
        return (
          <g key={i}>
            <line x1={x} y1={y} x2={tx} y2={ty}
              stroke={`rgba(180,130,80,${isPrimary ? 0.35 : 0.18})`} strokeWidth={isPrimary ? 0.8 : 0.5} />
            {isPrimary && (
              <rect x={tx - 2} y={ty - 2} width={4} height={4} fill="rgba(210,170,110,0.55)"
                transform={`rotate(${diamondAngle}, ${tx}, ${ty})`} />
            )}
          </g>
        );
      })}
      {fronds.map(i => {
        const angle = (i / 4) * Math.PI * 2 - rotation * 0.5;
        const r1 = 14, r2 = 22;
        const cpAngle = angle + 0.3;
        const sx2 = x + Math.cos(angle) * r1, sy2 = y + Math.sin(angle) * r1;
        const ex = x + Math.cos(angle + 0.5) * r2, ey = y + Math.sin(angle + 0.5) * r2;
        const cpx = x + Math.cos(cpAngle) * (r1 + r2) / 2 * 1.4;
        const cpy = y + Math.sin(cpAngle) * (r1 + r2) / 2 * 1.4;
        return (
          <path key={i} d={`M ${sx2} ${sy2} Q ${cpx} ${cpy} ${ex} ${ey}`}
            stroke="rgba(210,170,110,0.2)" strokeWidth={0.8} fill="none" />
        );
      })}
      <circle cx={x} cy={y} r={10} stroke="rgba(210,170,110,0.6)" strokeWidth={1} fill="rgba(180,130,80,0.08)" />
      <circle cx={x} cy={y} r={2.5} fill="rgba(210,170,110,0.9)" />
      <text x={x + 36} y={y + 4} fontSize={10} fontFamily="Georgia, serif" fontStyle="italic" fill="rgba(180,130,80,0.4)">☽</text>
      <text x={x + 14} y={y + 34} fontSize={9} fontFamily="Georgia, serif" fontStyle="italic" fill="rgba(210,170,110,0.3)">⚗ distillate</text>
    </svg>
  );
}

/* ─── About cursor — triad prism + adaptive lens tag ─── */
function AboutCursor({ x, y, tail, frame }: { x: number; y: number; tail: TailPoint[]; frame: number }) {
  const labels = ['craft', 'code', 'cinema'] as const;
  const active = labels[Math.floor(frame / 90) % labels.length];
  const accent =
    active === 'craft' ? 'rgba(213,176,138,0.75)' :
    active === 'code' ? 'rgba(157,183,230,0.75)' :
    'rgba(200,194,186,0.75)';
  const spin = frame * 0.02;
  const size = 24 + Math.sin(frame * 0.05) * 2;

  const a = { x: x + Math.cos(spin - Math.PI / 2) * size, y: y + Math.sin(spin - Math.PI / 2) * size };
  const b = { x: x + Math.cos(spin + Math.PI / 6) * size, y: y + Math.sin(spin + Math.PI / 6) * size };
  const c = { x: x + Math.cos(spin + (5 * Math.PI) / 6) * size, y: y + Math.sin(spin + (5 * Math.PI) / 6) * size };

  return (
    <svg className="pointer-events-none fixed inset-0 w-full h-full overflow-visible" style={{ zIndex: 9999 }}>
      {tail.map((p, i) => {
        if (i === 0 || i >= tail.length - 1) return null;
        const prev = tail[i - 1];
        const progress = i / tail.length;
        const alpha = (1 - progress) * 0.45;
        const col =
          i % 3 === 0 ? 'rgba(213,176,138,' :
          i % 3 === 1 ? 'rgba(157,183,230,' :
          'rgba(200,194,186,';
        return (
          <g key={i}>
            <line
              x1={prev.x} y1={prev.y}
              x2={p.x} y2={p.y}
              stroke={`${col}${(alpha * 0.55).toFixed(2)})`}
              strokeWidth={(1 - progress) * 1.8}
            />
            {i % 5 === 0 && <circle cx={p.x} cy={p.y} r={(1 - progress) * 2.4} fill={`${col}${alpha.toFixed(2)})`} />}
          </g>
        );
      })}
      <circle cx={x} cy={y} r={34} fill="none" stroke="rgba(255,255,255,0.1)" strokeDasharray="4 8" />
      <polygon points={`${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y}`} fill="rgba(255,255,255,0.05)" stroke={accent} strokeWidth={1.2} />
      <line x1={a.x} y1={a.y} x2={x} y2={y} stroke={accent} strokeWidth={0.8} opacity={0.75} />
      <line x1={b.x} y1={b.y} x2={x} y2={y} stroke={accent} strokeWidth={0.8} opacity={0.75} />
      <line x1={c.x} y1={c.y} x2={x} y2={y} stroke={accent} strokeWidth={0.8} opacity={0.75} />
      <circle cx={a.x} cy={a.y} r={2.4} fill="rgba(213,176,138,0.95)" />
      <circle cx={b.x} cy={b.y} r={2.4} fill="rgba(157,183,230,0.95)" />
      <circle cx={c.x} cy={c.y} r={2.4} fill="rgba(200,194,186,0.95)" />
      <circle cx={x} cy={y} r={3.2} fill="rgba(255,255,255,0.9)" />
      <text x={x + 38} y={y + 4} fontSize={10} fontFamily="monospace" letterSpacing="0.16em" fill={accent}>
        {active.toUpperCase()}
      </text>
    </svg>
  );
}

/* ─── Main component ─── */
export function CursorFollower() {
  const pathname = usePathname();
  const { activePanel } = useActivePanel();
  const [homeRevealed, setHomeRevealed] = useState(false);
  const isHomeRoute = !pathname || pathname === '/';
  const role = pathname === '/'
    ? getRoleFromPanel(activePanel)
    : getRoleFromPath(pathname ?? '/');

  const [smoothPos, setSmoothPos] = useState({ x: -999, y: -999 });
  const [tail, setTail] = useState<TailPoint[]>([]);
  const [rotation, setRotation] = useState(0);
  const [visible, setVisible] = useState(false);
  const [frame, setFrame] = useState(0);

  const rawPos = useRef({ x: -999, y: -999 });
  const smoothRef = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number>(0);
  const frameRef = useRef(0);

  useEffect(() => {
    if (!isHomeRoute) {
      setHomeRevealed(true);
      return;
    }

    // Always start locked on home cover until explicit reveal event arrives.
    setHomeRevealed(false);
    const onHomeRevealState = (event: Event) => {
      const detail = (event as CustomEvent<{ revealed?: boolean }>).detail;
      setHomeRevealed(Boolean(detail?.revealed));
    };

    window.addEventListener('home-reveal-state', onHomeRevealState as EventListener);
    return () => window.removeEventListener('home-reveal-state', onHomeRevealState as EventListener);
  }, [isHomeRoute]);

  useEffect(() => {
    const shouldUseNative =
      (isHomeRoute && !homeRevealed) || !visible || smoothPos.x < 0;
    document.documentElement.style.cursor = shouldUseNative ? 'auto' : 'none';
    document.body.style.cursor = shouldUseNative ? 'auto' : 'none';
    return () => {
      document.documentElement.style.cursor = 'auto';
      document.body.style.cursor = 'auto';
    };
  }, [isHomeRoute, homeRevealed, visible, smoothPos.x]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (isHomeRoute && !homeRevealed) {
        setVisible(false);
        return;
      }
      rawPos.current = { x: e.clientX, y: e.clientY };
      setVisible(true);
    };
    const onLeave = () => setVisible(false);
    window.addEventListener('mousemove', onMove);
    document.documentElement.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, [isHomeRoute, homeRevealed]);

  useEffect(() => {
    function lerp(a: number, b: number, t: number) { return a + (b - a) * t; }
    const speed = role === 'artisan' ? 0.17 : role === 'cinema' ? 0.11 : role === 'about' ? 0.13 : 0.17;

    function loop() {
      frameRef.current++;
      if (rawPos.current.x > 0) {
        smoothRef.current.x = lerp(
          smoothRef.current.x === -999 ? rawPos.current.x : smoothRef.current.x,
          rawPos.current.x, speed
        );
        smoothRef.current.y = lerp(
          smoothRef.current.y === -999 ? rawPos.current.y : smoothRef.current.y,
          rawPos.current.y, speed
        );
        setSmoothPos({ ...smoothRef.current });
        setTail(prev => {
          const next = [{ x: smoothRef.current.x, y: smoothRef.current.y }, ...prev];
          return next.slice(0, TAIL_LEN);
        });
      }
      if (role === 'artisan') setRotation(r => r + 0.4 * (Math.PI / 180));
      setFrame(frameRef.current);
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [role]);

  useEffect(() => { setTail([]); setRotation(0); }, [role]);

  if ((isHomeRoute && !homeRevealed) || !visible || smoothPos.x < 0) return null;
  const { x, y } = smoothPos;

  return (
    <>
      {role === 'cinema'        && <CinemaCursor       x={x} y={y} tail={tail} frame={frame} />}
      {role === 'dev'           && <DevCursor          x={x} y={y} tail={tail} frame={frame} />}
      {role === 'artisan'       && <ArtisanCursor      x={x} y={y} tail={tail} rotation={rotation} />}
      {role === 'about'         && <AboutCursor x={x} y={y} tail={tail} frame={frame} />}
    </>
  );
}