'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

type FlavorAtom = {
  id: string;
  label: string;
  color: string;
  intensity: number;
  description: string;
};

const DEFAULT_FLAVOR_PROFILE: FlavorAtom[] = [
  { id: 'sweetness', label: 'Sweetness', color: '#c48b2f', intensity: 65, description: 'Smooth honey and light caramel. The backbone of the blend.' },
  { id: 'acidity', label: 'Acidity', color: '#b5420a', intensity: 45, description: 'Bright citrus and herbal tartness - cuts through the richness.' },
  { id: 'bitterness', label: 'Bitterness', color: '#8a6030', intensity: 35, description: 'Subtle roasted grain and dark chocolate complexity.' },
  { id: 'aromatic', label: 'Aromatic', color: '#d4a060', intensity: 72, description: 'Fragrant wood smoke, clove, and dried orange peel.' },
  { id: 'body', label: 'Body', color: '#9a7048', intensity: 58, description: 'Full, oily mouthfeel - coats the palate like aged oak.' },
  { id: 'finish', label: 'Finish', color: '#e0c090', intensity: 52, description: 'Long, warming finish with faint toasted almond.' },
];

const clamp = (value: number) => Math.max(0, Math.min(100, value));
const PALETTE = {
  ink: '#1a1208',
  rust: '#b5420a',
  brass: '#c48b2f',
  cream: '#f0e8d5',
  steam: '#d4c9b4',
  iron: '#3a3028',
  soot: '#241c14',
  espresso: '#160f08',
};

export function FlavorMolecule({
  atoms = DEFAULT_FLAVOR_PROFILE,
  title = 'Black Iron Brew Co.',
  subtitle = 'Molecular Tasting Profile',
}: {
  atoms?: FlavorAtom[];
  title?: string;
  subtitle?: string;
}) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<FlavorAtom | null>(atoms[0] ?? null);
  const [hudText, setHudText] = useState('Drag to rotate ? Hover / click a pillar');

  const safeAtoms = useMemo(
    () => atoms.map((atom) => ({ ...atom, intensity: clamp(atom.intensity) })),
    [atoms]
  );

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, host.clientWidth / host.clientHeight, 0.1, 100);
    camera.position.set(0, 1.2, 7.8);
    camera.lookAt(0, 0.2, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(host.clientWidth, host.clientHeight);
    host.appendChild(renderer.domElement);

    scene.add(new THREE.AmbientLight(PALETTE.iron, 0.9));

    const keyL = new THREE.PointLight(PALETTE.brass, 2.0, 22);
    keyL.position.set(5, 8, 5);
    scene.add(keyL);

    const rimL = new THREE.PointLight(PALETTE.rust, 0.9, 18);
    rimL.position.set(-5, 2, -4);
    scene.add(rimL);

    const underL = new THREE.PointLight(PALETTE.rust, 0.5, 14);
    underL.position.set(0, -3, 0);
    scene.add(underL);

    const platform = new THREE.Mesh(
      new THREE.CylinderGeometry(4, 4.2, 0.35, 8),
      new THREE.MeshStandardMaterial({ color: PALETTE.ink, metalness: 0.6, roughness: 0.7 })
    );
    platform.position.y = -1.3;
    scene.add(platform);

    for (let i = 1; i <= 3; i++) {
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(i * 1.2, 0.03, 8, 60),
        new THREE.MeshStandardMaterial({ color: '#2a1e10', metalness: 0.4, roughness: 0.8 })
      );
      ring.rotation.x = Math.PI / 2;
      ring.position.y = -1.1;
      scene.add(ring);
    }

    const core = new THREE.Mesh(
      new THREE.CylinderGeometry(0.6, 0.9, 1.8, 8),
      new THREE.MeshStandardMaterial({
        color: '#3a2810',
        metalness: 0.65,
        roughness: 0.35,
        emissive: '#7a4010',
        emissiveIntensity: 0.18,
      })
    );
    core.position.y = 0.15;
    scene.add(core);

    const glowRing = new THREE.Mesh(
      new THREE.TorusGeometry(0.72, 0.06, 10, 40),
      new THREE.MeshStandardMaterial({ color: PALETTE.brass, emissive: PALETTE.brass, emissiveIntensity: 0.8, roughness: 0.2, metalness: 0.6 })
    );
    glowRing.rotation.x = Math.PI / 2;
    glowRing.position.y = 1.06;
    scene.add(glowRing);

    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const rivet = new THREE.Mesh(
        new THREE.SphereGeometry(0.06, 6, 6),
        new THREE.MeshStandardMaterial({ color: '#8a6030', metalness: 0.8, roughness: 0.3 })
      );
      rivet.position.set(Math.cos(angle) * 0.68, 0.6, Math.sin(angle) * 0.68);
      scene.add(rivet);
    }

    const rig = new THREE.Group();
    scene.add(rig);

    const beamMat = new THREE.LineBasicMaterial({ color: '#4a3018', transparent: true, opacity: 0.6 });
    const interactiveMeshes: THREE.Mesh[] = [];

    safeAtoms.forEach((atom, i) => {
      const angle = (i / safeAtoms.length) * Math.PI * 2;
      const radius = 2.4;
      const height = 0.9 + (atom.intensity / 100) * 2.2;

      const bar = new THREE.Mesh(
        new THREE.CylinderGeometry(0.16, 0.22, height, 6),
        new THREE.MeshStandardMaterial({
          color: atom.color,
          emissive: atom.color,
          emissiveIntensity: 0.12,
          metalness: 0.55,
          roughness: 0.42,
          transparent: true,
          opacity: 0.88,
        })
      );
      bar.position.set(Math.cos(angle) * radius, -1.3 + height / 2, Math.sin(angle) * radius);
      bar.userData.atom = atom;
      bar.userData.isSphere = false;
      rig.add(bar);
      interactiveMeshes.push(bar);

      const beamGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0.15, 0),
        new THREE.Vector3(bar.position.x, -1.3 + 0.15, bar.position.z),
      ]);
      rig.add(new THREE.Line(beamGeo, beamMat));

      const wireGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(bar.position.x, -1.3, bar.position.z),
        new THREE.Vector3(bar.position.x, bar.position.y - height / 2, bar.position.z),
      ]);
      rig.add(new THREE.Line(wireGeo, beamMat));

      const cap = new THREE.Mesh(
        new THREE.SphereGeometry(0.175, 10, 10),
        new THREE.MeshStandardMaterial({
          color: atom.color,
          emissive: atom.color,
          emissiveIntensity: 0.55,
          roughness: 0.15,
          metalness: 0.3,
        })
      );
      cap.position.set(bar.position.x, bar.position.y + height / 2 + 0.06, bar.position.z);
      cap.userData.atom = atom;
      cap.userData.isSphere = true;
      rig.add(cap);
      interactiveMeshes.push(cap);

      const collar = new THREE.Mesh(
        new THREE.TorusGeometry(0.22, 0.04, 6, 20),
        new THREE.MeshStandardMaterial({ color: '#4a3018', metalness: 0.7, roughness: 0.4 })
      );
      collar.rotation.x = Math.PI / 2;
      collar.position.set(bar.position.x, bar.position.y - height / 2 + 0.08, bar.position.z);
      rig.add(collar);
    });

    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    let isDragging = false;
    let downX = 0;
    let downY = 0;
    let lastX = 0;
    let velY = 0.005;

    const resetVisual = () => {
      interactiveMeshes.forEach((mesh) => {
        mesh.scale.set(1, 1, 1);
        const mat = mesh.material as THREE.MeshStandardMaterial;
        mat.emissiveIntensity = mesh.userData.isSphere ? 0.55 : 0.12;
        mat.opacity = 0.88;
      });
    };

    const onDown = (e: PointerEvent) => {
      isDragging = true;
      downX = e.clientX;
      downY = e.clientY;
      lastX = e.clientX;
      setHudText('Rotating...');
    };

    const onMove = (e: PointerEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      if (isDragging) {
        velY = (e.clientX - lastX) * 0.0013;
        lastX = e.clientX;
        return;
      }

      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(interactiveMeshes, false)[0];
      resetVisual();

      if (hit) {
        const mesh = hit.object as THREE.Mesh;
        const atom = mesh.userData.atom as FlavorAtom;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        mesh.scale.set(1.14, 1.08, 1.14);
        mat.emissiveIntensity = 0.75;
        mat.opacity = 1;
        setHudText(`${atom.label.toUpperCase()} - ${atom.intensity}%`);
        renderer.domElement.style.cursor = 'pointer';
      } else {
        setHudText('Drag to rotate ? Hover / click a pillar');
        renderer.domElement.style.cursor = 'default';
      }
    };

    const onUp = (e: PointerEvent) => {
      if (!isDragging) return;
      const moved = Math.hypot(e.clientX - downX, e.clientY - downY);
      if (moved < 6) {
        const rect = renderer.domElement.getBoundingClientRect();
        pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        pointer.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(pointer, camera);
        const hit = raycaster.intersectObjects(interactiveMeshes, false)[0];
        if (hit) setSelected(hit.object.userData.atom as FlavorAtom);
      }
      isDragging = false;
      setHudText('Drag to rotate ? Hover / click a pillar');
    };

    renderer.domElement.addEventListener('pointerdown', onDown);
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);

    const onResize = () => {
      if (!hostRef.current) return;
      const w = hostRef.current.clientWidth;
      const h = hostRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    let t = 0;
    let frameId = 0;
    const tick = () => {
      t += 0.01;
      rig.rotation.y += velY;
      velY *= 0.97;
      if (!isDragging && Math.abs(velY) < 0.003) velY += 0.00005;
      const glowMat = glowRing.material as THREE.MeshStandardMaterial;
      glowMat.emissiveIntensity = 0.5 + Math.sin(t * 1.2) * 0.18;
      keyL.intensity = 1.85 + Math.sin(t * 0.7) * 0.2;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.domElement.removeEventListener('pointerdown', onDown);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      scene.traverse((obj: THREE.Object3D) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
        if (obj instanceof THREE.Line) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
      if (host.contains(renderer.domElement)) host.removeChild(renderer.domElement);
    };
  }, [safeAtoms]);

  return (
    <div className="w-full overflow-hidden rounded-[4px]" style={{ background: PALETTE.espresso }}>
      <div
        className="relative h-[500px] w-full overflow-hidden"
        style={{ background: 'radial-gradient(ellipse at 40% 20%, #2a1c0e 0%, #100a05 60%, #090603 100%)' }}
      >
        <div ref={hostRef} className="absolute inset-0 z-1" />
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='1' height='1' x='0' y='0' fill='%23ffffff08'/%3E%3Crect width='1' height='1' x='2' y='2' fill='%23ffffff05'/%3E%3C/svg%3E\")",
          }}
        />

        <div className="absolute left-[6px] top-[6px] z-20 h-2 w-2 rounded-full border" style={{ background: 'radial-gradient(circle at 35% 35%, #7a5f3a, #2a1e10)', borderColor: '#4a3820' }} />
        <div className="absolute right-[6px] top-[6px] z-20 h-2 w-2 rounded-full border" style={{ background: 'radial-gradient(circle at 35% 35%, #7a5f3a, #2a1e10)', borderColor: '#4a3820' }} />
        <div className="absolute bottom-[6px] left-[6px] z-20 h-2 w-2 rounded-full border" style={{ background: 'radial-gradient(circle at 35% 35%, #7a5f3a, #2a1e10)', borderColor: '#4a3820' }} />
        <div className="absolute bottom-[6px] right-[6px] z-20 h-2 w-2 rounded-full border" style={{ background: 'radial-gradient(circle at 35% 35%, #7a5f3a, #2a1e10)', borderColor: '#4a3820' }} />

        <div className="absolute left-4 top-4 z-20 border px-4 py-3" style={{ borderColor: '#5a3d1f', background: 'rgba(10,6,2,0.72)', boxShadow: 'inset 0 0 0 1px rgba(196,139,47,0.08)' }}>
          <p className="m-0 text-[9px] uppercase tracking-[0.35em]" style={{ color: '#5a3d1f' }}>Flavor Lab</p>
          <h3 className="m-0 mt-1 font-['Cormorant_Garamond',serif] text-[28px] leading-none" style={{ color: '#d4b07a' }}>{title}</h3>
          <p className="m-0 mt-1 text-[10px]" style={{ color: '#4a3420' }}>{subtitle}</p>
        </div>

        <div className="absolute bottom-14 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap border px-4 py-1.5 text-[10px] tracking-[0.12em]" style={{ background: 'rgba(8,4,1,0.88)', borderColor: 'rgba(196,139,47,0.2)', color: '#8a6a3a' }}>
          {hudText}
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-15 flex h-[18px] items-end border-t px-[2px]" style={{ background: '#0e0904', borderColor: '#3a2810' }}>
          {['0', '20', '40', '60', '80', '100', '%', ''].map((tick, index) => (
            <div key={`tick-${index}`} className="w-1/8 border-l pb-[2px] text-center text-[7px]" style={{ color: '#3a2810', borderColor: '#3a2810' }}>
              {tick}
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div className="relative border-t px-5 py-4" style={{ background: '#241c14', borderColor: '#2a1e10' }}>
          <p className="mb-1 text-[9px] uppercase tracking-[0.3em]" style={{ color: '#4a3420' }}>Selected note</p>
          <p className="absolute right-5 top-4 border px-2 py-[3px] text-[11px] tracking-[0.2em]" style={{ color: selected.color, borderColor: '#3a2810' }}>{selected.intensity}%</p>
          <h4 className="mb-2 text-3xl leading-none font-['Cormorant_Garamond',serif]" style={{ color: selected.color }}>{selected.label}</h4>
          <div className="mb-[10px] h-[6px] border" style={{ background: '#1e1408', borderColor: '#3a2810' }}>
            <div className="h-full transition-all duration-500" style={{ width: `${selected.intensity}%`, background: selected.color }} />
          </div>
          <p className="m-0 text-[12px] leading-relaxed" style={{ color: '#6a5238' }}>{selected.description}</p>
        </div>
      )}

      <div className="flex flex-wrap gap-px border-t" style={{ background: '#0e0904', borderColor: '#2a1e10' }}>
        {safeAtoms.map((atom) => (
          <button
            key={atom.id}
            onClick={() => setSelected(atom)}
            className="min-w-[60px] flex-1 cursor-pointer border-r px-2 py-2 text-center transition-colors hover:bg-[#1a1208]"
            style={{ borderColor: '#1e1408' }}
          >
            <div className="mx-auto mb-1 h-2 w-2 rounded-full" style={{ background: atom.color }} />
            <div className="text-[9px] uppercase tracking-widest" style={{ color: '#5a4030' }}>{atom.label}</div>
            <div className="text-[10px]" style={{ color: '#8a6a3a' }}>{atom.intensity}%</div>
          </button>
        ))}
      </div>
    </div>
  );
}
