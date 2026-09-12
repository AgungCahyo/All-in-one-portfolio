'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

// ─────────────────────────────────────────────────────────────
// Data
// ─────────────────────────────────────────────────────────────

const SKILLS = [
  { id: 'ts', label: 'TypeScript', short: 'TS', category: 'LANG', color: '#3178C6', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', detail: 'Type-safe architecture for scalable frontend/backend modules.' },
  { id: 'react', label: 'React', short: 'R', category: 'UI', color: '#61DAFB', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', detail: 'Component systems with reusable UI patterns and clean state flow.' },
  { id: 'node', label: 'Node.js', short: 'N', category: 'RUNTIME', color: '#68A063', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', detail: 'API and automation services built for production workloads.' },
  { id: 'next', label: 'Next.js', short: 'NX', category: 'FRAMEWORK', color: '#111111', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', detail: 'SSR/SSG, route architecture, and performance-focused delivery.' },
  { id: 'tailwind', label: 'Tailwind CSS', short: 'TW', category: 'STYLE', color: '#06B6D4', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', detail: 'Utility-first styling system for fast, consistent UI iteration.' },
  { id: 'react-native', label: 'React Native', short: 'RN', category: 'MOBILE', color: '#61DAFB', logoUrl: 'https://cdn.simpleicons.org/react/61DAFB', detail: 'Cross-platform mobile app development with shared React patterns.' },
  { id: 'postgres', label: 'PostgreSQL', short: 'PG', category: 'DB', color: '#336791', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', detail: 'Relational data design with strong querying and indexing strategy.' },
  { id: 'prisma', label: 'Prisma', short: 'PR', category: 'ORM', color: '#0C344B', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', detail: 'Schema-driven data access with maintainable type-safe queries.' },
  { id: 'n8n', label: 'n8n', short: 'n8n', category: 'AUTOMATION', color: '#EA4B71', logoUrl: 'https://cdn.simpleicons.org/n8n/EA4B71', detail: 'Workflow automation integrating WhatsApp, AI, and operational tools.' },
  { id: 'gemini', label: 'Gemini', short: 'GM', category: 'AI', color: '#4285F4', logoUrl: 'https://cdn.simpleicons.org/googlegemini/8AB4F8', detail: 'AI integration for analysis, generation, and conversational flows.' },
  { id: 'openai', label: 'OpenAI', short: 'AI', category: 'AI', color: '#10A37F', logoUrl: 'https://cdn.simpleicons.org/openai/10A37F', detail: 'LLM + TTS orchestration for content and assistant experiences.' },
  { id: 'langchain', label: 'LangChain', short: 'LC', category: 'AI', color: '#00A67E', logoUrl: 'https://cdn.simpleicons.org/langchain/00A67E', detail: 'Composable LLM workflow orchestration and tool-chaining patterns.' },
  { id: 'redis', label: 'Redis', short: 'RD', category: 'CACHE', color: '#DC382D', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', detail: 'Caching and rate-control for fast, resilient user interactions.' },
  { id: 'jest', label: 'Jest', short: 'J', category: 'TEST', color: '#99425B', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', detail: 'Targeted automated tests for high-risk logic and regression safety.' },
  { id: 'firebase', label: 'Firebase', short: 'FB', category: 'BAAS', color: '#FFCA28', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', detail: 'Auth, storage, and realtime integrations for rapid product delivery.' },
];

// ─────────────────────────────────────────────────────────────
// Blueprint palette
// ─────────────────────────────────────────────────────────────

const PAPER = '#f5f7fa';
const SURFACE = '#ffffff';
const INK = '#1c2333';
const INK_SOFT = '#5a6478';
const INK_FAINT = '#8a95ab';
const INDIGO = '#3454a4';
const INDIGO_SOFT = 'rgba(52,84,164,0.18)';
const MINT = '#3fae74';
const BORDER = '#dbe2ec';

// ─────────────────────────────────────────────────────────────
// Sprites
// ─────────────────────────────────────────────────────────────

function drawBlueprintNode(ctx, size, skill, opts = {}) {
  const { hasLogo = false, logoImage = null } = opts;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.36;
  const innerR = size * 0.28;

  ctx.clearRect(0, 0, size, size);

  // Outer faint blueprint circle (guideline)
  ctx.strokeStyle = 'rgba(52,84,164,0.35)';
  ctx.lineWidth = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.arc(cx, cy, outerR + size * 0.05, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Paper disk (technical white)
  ctx.fillStyle = SURFACE;
  ctx.strokeStyle = '#c9d3e2';
  ctx.lineWidth = 2.4;
  ctx.beginPath();
  ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  // Inner color disk with subtle border
  ctx.fillStyle = skill.color;
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
  ctx.fill();

  // Inner highlight (top gradient)
  const grad = ctx.createRadialGradient(cx, cy - innerR * 0.5, innerR * 0.1, cx, cy, innerR);
  grad.addColorStop(0, 'rgba(255,255,255,0.35)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2);
  ctx.fill();

  // Logo or initial
  if (hasLogo && logoImage) {
    const logoSize = innerR * 1.15;
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, innerR - 4, 0, Math.PI * 2);
    ctx.clip();
    try {
      ctx.drawImage(logoImage, cx - logoSize / 2, cy - logoSize / 2, logoSize, logoSize);
    } catch (_) {}
    ctx.restore();
  } else {
    ctx.fillStyle = '#ffffff';
    ctx.font = `700 ${size * 0.19}px 'DM Sans', 'Inter', Arial, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(skill.short, cx, cy + 2);
  }

  // Registration ticks (technical drawing corners)
  ctx.strokeStyle = 'rgba(52,84,164,0.55)';
  ctx.lineWidth = 1.4;
  const tickLen = size * 0.045;
  const tickR = outerR + size * 0.055;
  const angles = [Math.PI * 0.25, Math.PI * 0.75, Math.PI * 1.25, Math.PI * 1.75];
  angles.forEach((a) => {
    const x1 = cx + Math.cos(a) * tickR;
    const y1 = cy + Math.sin(a) * tickR;
    const x2 = cx + Math.cos(a) * (tickR + tickLen);
    const y2 = cy + Math.sin(a) * (tickR + tickLen);
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  });

  // Bottom label plate
  const plateW = size * 0.42;
  const plateH = size * 0.11;
  const plateY = cy + outerR + size * 0.03;
  ctx.fillStyle = SURFACE;
  ctx.strokeStyle = '#c9d3e2';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.rect(cx - plateW / 2, plateY, plateW, plateH);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = INDIGO;
  ctx.font = `600 ${size * 0.055}px 'JetBrains Mono', 'Courier New', monospace`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(skill.category, cx, plateY + plateH / 2 + 1);
}

function buildSpriteFromCanvas(size) {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  return canvas;
}

function makeInitialSprite(skill) {
  const size = 256;
  const canvas = buildSpriteFromCanvas(size);
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.Sprite();
  drawBlueprintNode(ctx, size, skill, { hasLogo: false });

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  texture.needsUpdate = true;

  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthWrite: false,
  });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.82, 0.82, 1);
  return sprite;
}

function makeLogoSprite(skill) {
  return new Promise((resolve) => {
    const size = 256;
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = buildSpriteFromCanvas(size);
      const ctx = canvas.getContext('2d');
      if (!ctx) return resolve(makeInitialSprite(skill));
      drawBlueprintNode(ctx, size, skill, { hasLogo: true, logoImage: img });

      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 4;
      texture.needsUpdate = true;

      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(material);
      sprite.scale.set(0.82, 0.82, 1);
      resolve(sprite);
    };
    img.onerror = () => resolve(makeInitialSprite(skill));
    img.src = skill.logoUrl;
  });
}

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────

export function SkillsUniverse() {
  const hostRef = useRef(null);
  const overlayRef = useRef(null);

  const [dragging, setDragging] = useState(false);
  const [selected, setSelected] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [pointerCoord, setPointerCoord] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, host.clientWidth / host.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.touchAction = 'none';
    renderer.domElement.style.cursor = 'grab';
    host.appendChild(renderer.domElement);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 1));
    const key = new THREE.PointLight(0x8aa4d6, 0.9, 20);
    key.position.set(3, 3, 5);
    scene.add(key);

    // Universe group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Main wireframe globe
    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 36, 26),
      new THREE.MeshBasicMaterial({
        color: 0x3454a4,
        wireframe: true,
        transparent: true,
        opacity: 0.18,
      })
    );
    globeGroup.add(wire);

    // Secondary faint globe
    const secondaryWire = new THREE.Mesh(
      new THREE.SphereGeometry(2.44, 18, 14),
      new THREE.MeshBasicMaterial({
        color: 0x8a95ab,
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      })
    );
    globeGroup.add(secondaryWire);

    // Equator ring (thicker indigo)
    const equatorGeo = new THREE.RingGeometry(2.42, 2.44, 128);
    const equatorMat = new THREE.MeshBasicMaterial({
      color: 0x3454a4,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.4,
    });
    const equator = new THREE.Mesh(equatorGeo, equatorMat);
    equator.rotation.x = Math.PI / 2;
    globeGroup.add(equator);

    // Tilted ring (mint)
    const tiltedRing = new THREE.Mesh(
      new THREE.RingGeometry(2.55, 2.565, 128),
      new THREE.MeshBasicMaterial({
        color: 0x3fae74,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.35,
      })
    );
    tiltedRing.rotation.x = Math.PI / 2.3;
    tiltedRing.rotation.y = 0.2;
    globeGroup.add(tiltedRing);

    // Poles (tick marks)
    const poleMat = new THREE.MeshBasicMaterial({ color: 0x3454a4, transparent: true, opacity: 0.5 });
    const northPole = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), poleMat);
    northPole.position.set(0, 2.4, 0);
    const southPole = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 8), poleMat);
    southPole.position.set(0, -2.4, 0);
    globeGroup.add(northPole);
    globeGroup.add(southPole);

    // Node positions (Fibonacci sphere)
    const sprites = [];
    const positions = [];

    SKILLS.forEach((skill, i) => {
      const phi = Math.acos(1 - (2 * (i + 1)) / (SKILLS.length + 1));
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 1);
      const r = 2.6;
      const pos = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
      positions.push(pos);

      makeLogoSprite(skill).then((sprite) => {
        sprite.position.copy(pos);
        sprite.userData.skill = skill;
        sprite.userData.baseScale = 0.82;
        sprite.userData.targetScale = 0.82;
        globeGroup.add(sprite);
        sprites.push(sprite);
      });
    });

    // Network edges
    const linePoints = [];
    const addEdge = (a, b) => {
      linePoints.push(
        positions[a].x, positions[a].y, positions[a].z,
        positions[b].x, positions[b].y, positions[b].z
      );
    };
    for (let i = 0; i < positions.length; i++) {
      addEdge(i, (i + 1) % positions.length);
      if (i % 2 === 0) addEdge(i, (i + 3) % positions.length);
      if (i % 3 === 0) addEdge(i, (i + 5) % positions.length);
    }
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x3454a4,
      transparent: true,
      opacity: 0.18,
    });
    const network = new THREE.LineSegments(linesGeo, linesMat);
    globeGroup.add(network);

    // Interaction state
    let isDragging = false;
    let lastX = 0, lastY = 0;
    let downX = 0, downY = 0;
    let velocityX = 0.0045;
    let velocityY = 0;
    let hoveredSprite = null;

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onDown = (e) => {
      isDragging = true;
      setDragging(true);
      renderer.domElement.style.cursor = 'grabbing';
      lastX = e.clientX; lastY = e.clientY;
      downX = e.clientX; downY = e.clientY;
      renderer.domElement.setPointerCapture?.(e.pointerId);
    };

    const onMove = (e) => {
      const rect = renderer.domElement.getBoundingClientRect();
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      setPointerCoord({ x: px, y: py });

      if (isDragging) {
        const dx = e.clientX - lastX;
        const dy = e.clientY - lastY;
        lastX = e.clientX; lastY = e.clientY;
        velocityX = dx * 0.001;
        velocityY = dy * 0.00075;
      } else {
        // Hover raycast
        pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(sprites, false)[0];
        if (hit) {
          const skill = hit.object.userData.skill;
          if (hoveredSprite !== hit.object) {
            if (hoveredSprite) hoveredSprite.userData.targetScale = 0.82;
            hoveredSprite = hit.object;
            hoveredSprite.userData.targetScale = 1.05;
            renderer.domElement.style.cursor = 'pointer';
          }
          setHovered({ skill, x: e.clientX - rect.left, y: e.clientY - rect.top });
        } else {
          if (hoveredSprite) {
            hoveredSprite.userData.targetScale = 0.82;
            hoveredSprite = null;
          }
          renderer.domElement.style.cursor = 'grab';
          setHovered(null);
        }
      }
    };

    const onUp = (e) => {
      if (isDragging && Math.hypot(lastX - downX, lastY - downY) < 6) {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((lastX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((lastY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(sprites, false)[0];
        if (hit) setSelected(hit.object.userData.skill);
      }
      isDragging = false;
      setDragging(false);
      renderer.domElement.style.cursor = 'grab';
      renderer.domElement.releasePointerCapture?.(e.pointerId);
    };

    const onLeave = () => {
      if (hoveredSprite) {
        hoveredSprite.userData.targetScale = 0.82;
        hoveredSprite = null;
      }
      setHovered(null);
    };

    const onWheel = (e) => {
      e.preventDefault();
      const delta = e.deltaY * 0.002;
      camera.position.z = Math.min(10, Math.max(5, camera.position.z + delta));
    };

    renderer.domElement.addEventListener('pointerdown', onDown);
    renderer.domElement.addEventListener('pointermove', onMove);
    renderer.domElement.addEventListener('pointerup', onUp);
    renderer.domElement.addEventListener('pointercancel', onUp);
    renderer.domElement.addEventListener('pointerleave', onLeave);
    renderer.domElement.addEventListener('wheel', onWheel, { passive: false });

    // Resize
    const onResize = () => {
      if (!hostRef.current) return;
      camera.aspect = hostRef.current.clientWidth / hostRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(hostRef.current.clientWidth, hostRef.current.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // Loop
    let frameId = 0;
    const tick = () => {
      globeGroup.rotation.y += velocityX;
      globeGroup.rotation.x += velocityY;
      velocityX *= 0.985;
      velocityY *= 0.985;
      if (!isDragging && Math.abs(velocityX) < 0.0025) velocityX += 0.000045;
      globeGroup.rotation.x = Math.max(-0.55, Math.min(0.55, globeGroup.rotation.x));

      // Depth-based opacity for network
      const rotY = globeGroup.rotation.y;
      const rotX = globeGroup.rotation.x;
      setRotation({ x: (rotX * 180) / Math.PI, y: (rotY * 180) / Math.PI });

      // Smooth sprite scale animation
      for (let i = 0; i < sprites.length; i++) {
        const s = sprites[i];
        const target = s.userData.targetScale || 0.82;
        const current = s.scale.x;
        const next = current + (target - current) * 0.15;
        s.scale.set(next, next, 1);
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      renderer.domElement.removeEventListener('pointerdown', onDown);
      renderer.domElement.removeEventListener('pointermove', onMove);
      renderer.domElement.removeEventListener('pointerup', onUp);
      renderer.domElement.removeEventListener('pointercancel', onUp);
      renderer.domElement.removeEventListener('pointerleave', onLeave);
      renderer.domElement.removeEventListener('wheel', onWheel);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Sprite && obj.material instanceof THREE.SpriteMaterial) {
          obj.material.map?.dispose();
          obj.material.dispose();
        }
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
        if (obj instanceof THREE.LineSegments) {
          obj.geometry.dispose();
          obj.material.dispose();
        }
      });
      if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement);
    };
  }, []);

  // Ruler ticks
  const rulerTicks = Array.from({ length: 21 });

  return (
    <div
      className="relative w-full h-[540px] overflow-hidden rounded-xl"
      style={{
        border: `1px solid ${BORDER}`,
        background: SURFACE,
        boxShadow: '0 1px 0 rgba(28,35,51,0.02), 0 20px 40px -20px rgba(28,35,51,0.1)',
      }}
    >
      {/* Primary blueprint grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52,84,164,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52,84,164,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Secondary drafting grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(52,84,164,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(52,84,164,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '8px 8px',
        }}
      />

      {/* Radial paper vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(255,255,255,0) 40%, rgba(245,247,250,0.6) 100%)',
        }}
      />

      {/* Mint drafting accent */}
      <div
        className="absolute -left-24 -bottom-24 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(63,174,116,0.10) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -right-24 -top-24 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(52,84,164,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Corner brackets — technical drawing */}
      {[
        { top: 10, left: 10, rotate: 0 },
        { top: 10, right: 10, rotate: 90 },
        { bottom: 10, right: 10, rotate: 180 },
        { bottom: 10, left: 10, rotate: 270 },
      ].map((c, i) => (
        <div
          key={i}
          className="absolute w-4 h-4 pointer-events-none"
          style={{
            top: c.top, left: c.left, right: c.right, bottom: c.bottom,
            transform: `rotate(${c.rotate}deg)`,
          }}
        >
          <div className="absolute top-0 left-0 w-3 h-px" style={{ background: INDIGO_SOFT }} />
          <div className="absolute top-0 left-0 w-px h-3" style={{ background: INDIGO_SOFT }} />
        </div>
      ))}

      {/* Top ruler */}
      <div className="absolute top-0 left-0 right-0 h-6 pointer-events-none flex items-end px-6">
        {rulerTicks.map((_, i) => (
          <div key={i} className="flex-1 flex justify-center">
            <div style={{
              width: 1,
              height: i % 5 === 0 ? 8 : 4,
              background: i % 5 === 0 ? INDIGO_SOFT : 'rgba(52,84,164,0.10)',
            }} />
          </div>
        ))}
      </div>

      {/* Left ruler */}
      <div className="absolute left-0 top-0 bottom-0 w-6 pointer-events-none flex flex-col items-end py-6">
        {rulerTicks.map((_, i) => (
          <div key={i} className="flex-1 flex items-center">
            <div style={{
              height: 1,
              width: i % 5 === 0 ? 8 : 4,
              background: i % 5 === 0 ? INDIGO_SOFT : 'rgba(52,84,164,0.10)',
            }} />
          </div>
        ))}
      </div>

      {/* Title cartouche — top-left */}
      <div
        className="absolute top-4 left-10 px-3 py-2 rounded-md"
        style={{
          border: `1px solid ${BORDER}`,
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: MINT }} />
          <span className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: INK }}>
            System · Skill Stack
          </span>
        </div>
        <div className="font-mono text-[8px] tracking-[0.14em] mt-1" style={{ color: INK_FAINT }}>
          DWG · SU-001 / REV 2.4 / 2025
        </div>
      </div>

      {/* Node counter — top-right */}
      <div
        className="absolute top-4 right-10 px-3 py-2 rounded-md text-right"
        style={{
          border: `1px solid ${BORDER}`,
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <div className="font-mono text-[9px] tracking-[0.18em] uppercase" style={{ color: INK_FAINT }}>
          Nodes / Edges
        </div>
        <div className="font-mono text-[11px] font-semibold mt-0.5" style={{ color: INK }}>
          {SKILLS.length.toString().padStart(2, '0')} · {(SKILLS.length + Math.floor(SKILLS.length / 2) + Math.floor(SKILLS.length / 3)).toString().padStart(2, '0')}
        </div>
      </div>

      {/* Canvas host */}
      <div ref={hostRef} className="absolute inset-0" />

      {/* Overlay guides */}
      <div ref={overlayRef} className="absolute inset-0 pointer-events-none">
        {/* Cross-hair guides tied to pointer */}
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{ left: `${pointerCoord.x}%`, background: 'rgba(52,84,164,0.08)' }}
        />
        <div
          className="absolute left-0 right-0 h-px"
          style={{ top: `${pointerCoord.y}%`, background: 'rgba(52,84,164,0.08)' }}
        />
      </div>

      {/* Hover tooltip */}
      {hovered && !dragging && (
        <div
          className="absolute pointer-events-none px-2.5 py-1.5 rounded-md font-mono text-[10px] whitespace-nowrap"
          style={{
            left: hovered.x + 14,
            top: hovered.y + 14,
            border: `1px solid ${BORDER}`,
            background: 'rgba(255,255,255,0.96)',
            color: INK,
            boxShadow: '0 4px 14px rgba(28,35,51,0.08)',
          }}
        >
          <span style={{ color: hovered.skill.color }}>■</span>{' '}
          <span className="font-semibold">{hovered.skill.label}</span>{' '}
          <span style={{ color: INK_FAINT }}>· {hovered.skill.category}</span>
        </div>
      )}

      {/* Compass — bottom-left of sphere */}
      <div className="absolute bottom-16 left-10 w-16 h-16 pointer-events-none">
        <div
          className="absolute inset-0 rounded-full"
          style={{
            border: `1px dashed ${INDIGO_SOFT}`,
            transform: `rotate(${rotation.y}deg)`,
            transition: 'none',
          }}
        >
          <div
            className="absolute top-1 left-1/2 -translate-x-1/2 font-mono text-[8px]"
            style={{ color: INDIGO }}
          >N</div>
          <div
            className="absolute bottom-1 left-1/2 -translate-x-1/2 font-mono text-[8px]"
            style={{ color: INK_FAINT }}
          >S</div>
          <div
            className="absolute left-1 top-1/2 -translate-y-1/2 font-mono text-[8px]"
            style={{ color: INK_FAINT }}
          >W</div>
          <div
            className="absolute right-1 top-1/2 -translate-y-1/2 font-mono text-[8px]"
            style={{ color: INK_FAINT }}
          >E</div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full" style={{ background: MINT }} />
        </div>
      </div>

      {/* Interaction hint */}
      <div
        className="absolute bottom-4 left-10 px-3 py-2 rounded-md font-mono text-[9px] tracking-[0.1em] flex items-center gap-3"
        style={{
          border: `1px solid ${BORDER}`,
          background: 'rgba(255,255,255,0.9)',
          color: INK_FAINT,
          backdropFilter: 'blur(6px)',
        }}
      >
        <span className="flex items-center gap-1.5">
          <span style={{ color: dragging ? MINT : INK_FAINT }}>{dragging ? '●' : '○'}</span>
          <span>{dragging ? 'ROTATING' : 'DRAG'}</span>
        </span>
        <span style={{ color: 'rgba(52,84,164,0.25)' }}>│</span>
        <span className="flex items-center gap-1.5">
          <span>⌖ CLICK</span>
        </span>
        <span style={{ color: 'rgba(52,84,164,0.25)' }}>│</span>
        <span className="flex items-center gap-1.5">
          <span>⇅ ZOOM</span>
        </span>
      </div>

      {/* Selected node detail card */}
      {selected && (
        <div
          className="absolute right-10 top-16 w-[280px] rounded-lg overflow-hidden"
          style={{
            border: `1px solid ${BORDER}`,
            background: 'rgba(255,255,255,0.96)',
            color: INK,
            boxShadow: '0 20px 40px -12px rgba(28,35,51,0.15)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Card header — blueprint title strip */}
          <div
            className="px-4 py-2.5 flex items-center justify-between"
            style={{
              borderBottom: `1px solid ${BORDER}`,
              background: 'linear-gradient(180deg, rgba(52,84,164,0.05) 0%, rgba(52,84,164,0.02) 100%)',
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="w-2 h-2 rounded-sm"
                style={{ background: selected.color, boxShadow: `0 0 0 2px ${selected.color}22` }}
              />
              <p className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: INDIGO }}>
                Node · Selected
              </p>
            </div>
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="w-5 h-5 flex items-center justify-center rounded hover:bg-black/5 transition"
              style={{ color: INK_FAINT }}
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 1L9 9M9 1L1 9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Card body */}
          <div className="px-4 py-4">
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <h4 className="text-[17px] font-semibold leading-tight" style={{ color: INK }}>
                  {selected.label}
                </h4>
                <div className="flex items-center gap-1.5 mt-1">
                  <span
                    className="font-mono text-[8px] tracking-[0.12em] px-1.5 py-0.5 rounded"
                    style={{ background: `${selected.color}15`, color: selected.color }}
                  >
                    {selected.category}
                  </span>
                  <span className="font-mono text-[8px]" style={{ color: INK_FAINT }}>
                    · {selected.short}
                  </span>
                </div>
              </div>
              <div
                className="w-11 h-11 rounded-md flex items-center justify-center shrink-0"
                style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-[10px]"
                  style={{ background: selected.color }}
                >
                  {selected.short}
                </div>
              </div>
            </div>

            {/* Dimension line */}
            <div className="flex items-center gap-1 mb-3">
              <div className="w-px h-1.5" style={{ background: INDIGO_SOFT }} />
              <div className="flex-1 h-px" style={{ background: INDIGO_SOFT }} />
              <span className="font-mono text-[8px] tracking-[0.14em]" style={{ color: INK_FAINT }}>
                DESCRIPTION
              </span>
              <div className="flex-1 h-px" style={{ background: INDIGO_SOFT }} />
              <div className="w-px h-1.5" style={{ background: INDIGO_SOFT }} />
            </div>

            <p className="text-[12.5px] leading-relaxed" style={{ color: INK_SOFT }}>
              {selected.detail}
            </p>

            {/* Meta grid */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div
                className="px-2.5 py-2 rounded"
                style={{ border: `1px solid ${BORDER}`, background: PAPER }}
              >
                <div className="font-mono text-[8px] tracking-[0.14em]" style={{ color: INK_FAINT }}>
                  ID
                </div>
                <div className="font-mono text-[11px] font-semibold mt-0.5" style={{ color: INK }}>
                  {selected.id.toUpperCase()}
                </div>
              </div>
              <div
                className="px-2.5 py-2 rounded"
                style={{ border: `1px solid ${BORDER}`, background: PAPER }}
              >
                <div className="font-mono text-[8px] tracking-[0.14em]" style={{ color: INK_FAINT }}>
                  HEX
                </div>
                <div className="font-mono text-[11px] font-semibold mt-0.5" style={{ color: INK }}>
                  {selected.color}
                </div>
              </div>
            </div>
          </div>

          {/* Card footer */}
          <div
            className="px-4 py-2 flex items-center justify-between"
            style={{ borderTop: `1px solid ${BORDER}`, background: PAPER }}
          >
            <span className="font-mono text-[8px] tracking-[0.16em]" style={{ color: INK_FAINT }}>
              SCALE 1 : 1
            </span>
            <span className="font-mono text-[8px] tracking-[0.16em]" style={{ color: MINT }}>
              ● ACTIVE
            </span>
          </div>
        </div>
      )}

      {/* Rotation + coordinates bottom-right */}
      <div
        className="absolute bottom-4 right-10 px-3 py-2 rounded-md flex items-center gap-3"
        style={{
          border: `1px solid ${BORDER}`,
          background: 'rgba(255,255,255,0.9)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <div>
          <div className="font-mono text-[8px] tracking-[0.14em]" style={{ color: INK_FAINT }}>
            ROT
          </div>
          <div className="font-mono text-[10px]" style={{ color: INK }}>
            X {rotation.x.toFixed(0).padStart(3, '0')}° · Y {(((rotation.y % 360) + 360) % 360).toFixed(0).padStart(3, '0')}°
          </div>
        </div>
        <div className="w-px h-6" style={{ background: BORDER }} />
        <div>
          <div className="font-mono text-[8px] tracking-[0.14em]" style={{ color: INK_FAINT }}>
            CURSOR
          </div>
          <div className="font-mono text-[10px]" style={{ color: INK }}>
            {pointerCoord.x.toFixed(0).padStart(3, '0')} · {pointerCoord.y.toFixed(0).padStart(3, '0')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsUniverse;
