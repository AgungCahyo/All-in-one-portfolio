'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

type SkillDef = {
  id: string;
  label: string;
  short: string;
  color: string;
  logoUrl: string;
  detail: string;
};

const SKILLS: SkillDef[] = [
  { id: 'ts', label: 'TypeScript', short: 'TS', color: '#3178C6', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', detail: 'Type-safe architecture for scalable frontend/backend modules.' },
  { id: 'react', label: 'React', short: 'R', color: '#61DAFB', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', detail: 'Component systems with reusable UI patterns and clean state flow.' },
  { id: 'node', label: 'Node.js', short: 'N', color: '#68A063', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', detail: 'API and automation services built for production workloads.' },
  { id: 'next', label: 'Next.js', short: 'NX', color: '#111111', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', detail: 'SSR/SSG, route architecture, and performance-focused delivery.' },
  { id: 'tailwind', label: 'Tailwind CSS', short: 'TW', color: '#06B6D4', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', detail: 'Utility-first styling system for fast, consistent UI iteration.' },
  { id: 'react-native', label: 'React Native', short: 'RN', color: '#61DAFB', logoUrl: 'https://cdn.simpleicons.org/react/61DAFB', detail: 'Cross-platform mobile app development with shared React patterns.' },
  { id: 'postgres', label: 'PostgreSQL', short: 'PG', color: '#336791', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', detail: 'Relational data design with strong querying and indexing strategy.' },
  { id: 'prisma', label: 'Prisma', short: 'PR', color: '#0C344B', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg', detail: 'Schema-driven data access with maintainable type-safe queries.' },
  { id: 'n8n', label: 'n8n', short: 'n8n', color: '#EF6C00', logoUrl: 'https://cdn.simpleicons.org/n8n/EA4B71', detail: 'Workflow automation integrating WhatsApp, AI, and operational tools.' },
  { id: 'gemini', label: 'Gemini', short: 'GM', color: '#4285F4', logoUrl: 'https://cdn.simpleicons.org/googlegemini/8AB4F8', detail: 'AI integration for analysis, generation, and conversational flows.' },
  { id: 'openai', label: 'OpenAI', short: 'AI', color: '#10A37F', logoUrl: '/openAI.svg', detail: 'LLM + TTS orchestration for content and assistant experiences.' },
  { id: 'langchain', label: 'LangChain', short: 'LC', color: '#00A67E', logoUrl: 'https://cdn.simpleicons.org/langchain/00A67E', detail: 'Composable LLM workflow orchestration and tool-chaining patterns.' },
  { id: 'redis', label: 'Redis', short: 'RD', color: '#DC382D', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', detail: 'Caching and rate-control for fast, resilient user interactions.' },
  { id: 'jest', label: 'Jest', short: 'J', color: '#99425B', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', detail: 'Targeted automated tests for high-risk logic and regression safety.' },
  { id: 'firebase', label: 'Firebase', short: 'FB', color: '#FFCA28', logoUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', detail: 'Auth, storage, and realtime integrations for rapid product delivery.' },
];

function makeIconSprite(skill: SkillDef) {
  const canvas = document.createElement('canvas');
  canvas.width = 220;
  canvas.height = 220;
  const ctx = canvas.getContext('2d');
  if (!ctx) return new THREE.Sprite();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = 78;
  ctx.fillStyle = 'rgba(8,12,18,0.92)';
  ctx.strokeStyle = 'rgba(150,180,225,0.28)';
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = skill.color;
  ctx.beginPath();
  ctx.arc(cx, cy, radius - 14, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = '#ffffff';
  ctx.font = '700 58px DM Sans, Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(skill.short, cx, cy + 2);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  const material = new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false });
  const sprite = new THREE.Sprite(material);
  sprite.scale.set(0.86, 0.86, 1);
  return sprite;
}

function makeLogoSprite(skill: SkillDef, loader: THREE.TextureLoader): Promise<THREE.Sprite> {
  return new Promise((resolve) => {
    loader.load(
      skill.logoUrl,
      (texture) => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.needsUpdate = true;
        const material = new THREE.SpriteMaterial({
          map: texture,
          transparent: true,
          depthWrite: false,
        });
        const sprite = new THREE.Sprite(material);
        sprite.scale.set(0.72, 0.72, 1);
        resolve(sprite);
      },
      undefined,
      () => resolve(makeIconSprite(skill)),
    );
  });
}

export function SkillsUniverse() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const [selected, setSelected] = useState<SkillDef | null>(null);

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
    renderer.domElement.style.touchAction = 'auto';
    renderer.domElement.setAttribute('data-engine', 'three.js r182');
    host.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(0xffffff, 0.8));
    const key = new THREE.PointLight(0x7aa0de, 1.2, 20);
    key.position.set(3, 3, 5);
    scene.add(key);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const wire = new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 40, 40),
      new THREE.MeshBasicMaterial({ color: 0x5d7fbf, wireframe: true, transparent: true, opacity: 0.16 }),
    );
    globeGroup.add(wire);

    const ring = new THREE.Mesh(
      new THREE.SphereGeometry(2.43, 36, 36),
      new THREE.MeshBasicMaterial({ color: 0x87a3cf, wireframe: true, transparent: true, opacity: 0.07 }),
    );
    globeGroup.add(ring);

    const sprites: THREE.Sprite[] = [];
    const positions: THREE.Vector3[] = [];

    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin('anonymous');

    SKILLS.forEach((skill, i) => {
      const phi = Math.acos(1 - (2 * (i + 1)) / (SKILLS.length + 1));
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 1);
      const r = 2.6;
      const pos = new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta),
      );
      makeLogoSprite(skill, loader).then((sprite) => {
        sprite.position.copy(pos);
        sprite.userData.skill = skill;
        globeGroup.add(sprite);
        sprites.push(sprite);
      });
      positions.push(pos);
    });

    const linePoints: number[] = [];
    const addEdge = (a: number, b: number) => {
      linePoints.push(
        positions[a].x, positions[a].y, positions[a].z,
        positions[b].x, positions[b].y, positions[b].z,
      );
    };
    for (let i = 0; i < positions.length; i++) {
      addEdge(i, (i + 1) % positions.length);
      if (i % 2 === 0) addEdge(i, (i + 3) % positions.length);
    }
    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePoints, 3));
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x6a8ab8,
      transparent: true,
      opacity: 0.26,
    });
    const network = new THREE.LineSegments(linesGeo, linesMat);
    globeGroup.add(network);

    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let downX = 0;
    let downY = 0;
    let velocityX = 0.0075;
    let velocityY = 0;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const onDown = (e: PointerEvent) => {
      isDragging = true;
      setDragging(true);
      lastX = e.clientX;
      lastY = e.clientY;
      downX = e.clientX;
      downY = e.clientY;
    };

    const onMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      lastX = e.clientX;
      lastY = e.clientY;
      velocityX = dx * 0.0011;
      velocityY = dy * 0.00085;
    };

    const onUp = () => {
      if (isDragging && Math.hypot(lastX - downX, lastY - downY) < 6) {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((lastX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((lastY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(sprites, false)[0];
        if (hit) setSelected(hit.object.userData.skill as SkillDef);
      }
      isDragging = false;
      setDragging(false);
    };

    renderer.domElement.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);

    const onResize = () => {
      if (!hostRef.current) return;
      camera.aspect = hostRef.current.clientWidth / hostRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(hostRef.current.clientWidth, hostRef.current.clientHeight);
    };
    window.addEventListener('resize', onResize);

    let frameId = 0;
    const tick = () => {
      globeGroup.rotation.y += velocityX;
      globeGroup.rotation.x += velocityY;
      velocityX *= 0.982;
      velocityY *= 0.982;
      if (!isDragging && Math.abs(velocityX) < 0.0038) velocityX += 0.00008;
      globeGroup.rotation.x = Math.max(-0.6, Math.min(0.6, globeGroup.rotation.x));
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      renderer.domElement.removeEventListener('pointerdown', onDown);
      renderer.dispose();
      scene.traverse((obj: THREE.Object3D) => {
        if (obj instanceof THREE.Sprite && obj.material instanceof THREE.SpriteMaterial) {
          obj.material.map?.dispose();
          obj.material.dispose();
        }
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach((m: THREE.Material) => m.dispose());
          else obj.material.dispose();
        }
      });
      if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className="relative w-full h-[460px] overflow-hidden rounded-xl"
      style={{ border: '1px solid rgba(100,130,200,0.14)', background: 'radial-gradient(circle at center, rgba(20,30,44,0.9) 0%, rgba(8,12,18,0.98) 70%)' }}
    >
      <div ref={hostRef} className="absolute inset-0" />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full"
        style={{ border: '1px solid rgba(255,255,255,0.08)', color: 'rgba(184,200,224,0.7)', background: 'rgba(9,12,16,0.75)' }}>
        <span className="font-mono text-[10px]">{dragging ? 'Rotating...' : 'Drag to explore skills universe'}</span>
      </div>
      {selected && (
        <div className="absolute right-4 top-4 max-w-[280px] p-4 rounded-lg"
          style={{ border: '1px solid rgba(100,130,200,0.18)', background: 'rgba(8,12,18,0.88)', color: 'rgba(184,200,224,0.9)' }}>
          <p className="font-mono text-[10px] tracking-[0.18em] uppercase mb-1" style={{ color: 'rgba(157,183,230,0.9)' }}>
            Skill Focus
          </p>
          <h4 className="text-[15px] font-semibold mb-2">{selected.label}</h4>
          <p className="text-[12px] leading-relaxed" style={{ color: 'rgba(184,200,224,0.72)' }}>{selected.detail}</p>
          <button
            onClick={() => setSelected(null)}
            className="mt-3 text-[11px] underline"
            style={{ color: 'rgba(184,200,224,0.7)' }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
