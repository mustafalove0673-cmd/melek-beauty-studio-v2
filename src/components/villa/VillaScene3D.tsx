'use client';

import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sparkles, Stars } from '@react-three/drei';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

/* ========== Blueprint Grid Floor ========== */
function BlueprintGrid() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.y = -2 + Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={gridRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
      <gridHelper args={[40, 40, '#4A90D9', '#4A90D9']} />
      {/* Secondary finer grid */}
      <gridHelper args={[40, 80, '#4A90D933', '#4A90D922']} />
    </group>
  );
}

/* ========== Wireframe Villa Building ========== */
function VillaWireframe() {
  const groupRef = useRef<THREE.Group>(null);
  const timeRef = useRef(0);

  useFrame((state, delta) => {
    if (groupRef.current) {
      timeRef.current += delta;
      groupRef.current.rotation.y = timeRef.current * 0.08;
    }
  });

  const steelBlue = '#4A90D9';
  const gold = '#C5A55A';

  return (
    <group ref={groupRef} position={[0, -0.5, 0]}>
      {/* Main building body */}
      <mesh position={[0, 1.2, 0]}>
        <boxGeometry args={[4, 2.4, 3]} />
        <meshStandardMaterial color={steelBlue} wireframe transparent opacity={0.3} />
      </mesh>

      {/* Second floor */}
      <mesh position={[0, 3, 0]}>
        <boxGeometry args={[3.5, 1.6, 2.5]} />
        <meshStandardMaterial color={steelBlue} wireframe transparent opacity={0.25} />
      </mesh>

      {/* Roof */}
      <mesh position={[0, 4.3, 0]} rotation={[0, Math.PI / 4, 0]}>
        <coneGeometry args={[3, 1.2, 4]} />
        <meshStandardMaterial color={gold} wireframe transparent opacity={0.35} />
      </mesh>

      {/* Front porch */}
      <mesh position={[0, 0.3, 2]}>
        <boxGeometry args={[2, 0.6, 1]} />
        <meshStandardMaterial color={steelBlue} wireframe transparent opacity={0.2} />
      </mesh>

      {/* Porch pillars */}
      {[[-0.8, 0.6, 2.5], [0.8, 0.6, 2.5]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <cylinderGeometry args={[0.06, 0.06, 1.2, 8]} />
          <meshStandardMaterial color={gold} wireframe transparent opacity={0.4} />
        </mesh>
      ))}

      {/* Windows (emissive accent) */}
      {[[-1.2, 1.5, 1.52], [1.2, 1.5, 1.52], [0, 3.2, 1.27]].map((pos, i) => (
        <mesh key={`win-${i}`} position={pos as [number, number, number]}>
          <boxGeometry args={[0.6, 0.5, 0.02]} />
          <meshStandardMaterial color={gold} transparent opacity={0.15} emissive={gold} emissiveIntensity={0.5} />
        </mesh>
      ))}

      {/* Side windows */}
      {[[-2.02, 1.5, 0], [2.02, 1.5, 0], [-1.77, 3.2, 0], [1.77, 3.2, 0]].map((pos, i) => (
        <mesh key={`swin-${i}`} position={pos as [number, number, number]} rotation={[0, Math.PI / 2, 0]}>
          <boxGeometry args={[0.6, 0.5, 0.02]} />
          <meshStandardMaterial color={steelBlue} transparent opacity={0.1} emissive={steelBlue} emissiveIntensity={0.3} />
        </mesh>
      ))}

      {/* Garage section */}
      <mesh position={[2.8, 0.9, 0]}>
        <boxGeometry args={[1.6, 1.8, 2.5]} />
        <meshStandardMaterial color={steelBlue} wireframe transparent opacity={0.15} />
      </mesh>

      {/* Pool */}
      <mesh position={[-3, -1.7, 1]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[2, 1.2, 0.1]} />
        <meshStandardMaterial color={steelBlue} transparent opacity={0.2} />
      </mesh>
      <mesh position={[-3, -1.65, 1]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[1.8, 1, 0.1]} />
        <meshStandardMaterial color="#4A90D9" transparent opacity={0.08} emissive={steelBlue} emissiveIntensity={0.2} />
      </mesh>

      {/* Garden hedges */}
      {[[-4, -1.2, 3], [-4, -1.2, -3], [4, -1.2, 3], [4, -1.2, -3]].map((pos, i) => (
        <mesh key={`hedge-${i}`} position={pos as [number, number, number]}>
          <boxGeometry args={[0.4, 0.8, 0.8]} />
          <meshStandardMaterial color="#2A5A2A" wireframe transparent opacity={0.2} />
        </mesh>
      ))}
    </group>
  );
}

/* ========== Floating Gold Rings ========== */
function GoldRing({ position, scale = 1, speed = 1 }: { position: [number, number, number]; scale?: number; speed?: number }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.2 * speed;
      ref.current.rotation.z = state.clock.elapsedTime * 0.15 * speed;
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <torusGeometry args={[0.8, 0.02, 16, 64]} />
      <meshStandardMaterial color="#C5A55A" transparent opacity={0.4} emissive="#C5A55A" emissiveIntensity={0.3} />
    </mesh>
  );
}

/* ========== Construction Particles ========== */
function ConstructionParticles() {
  const count = 80;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [(Math.random() - 0.5) * 20, Math.random() * 12 - 2, (Math.random() - 0.5) * 20] as [number, number, number],
      speed: 0.2 + Math.random() * 0.5,
      offset: Math.random() * Math.PI * 2,
      scale: 0.02 + Math.random() * 0.04,
    }));
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.sin(time * p.speed + p.offset) * 0.5,
        p.position[1] + ((time * p.speed * 0.3 + p.offset) % 14) - 2,
        p.position[2] + Math.cos(time * p.speed + p.offset) * 0.5
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#C5A55A" transparent opacity={0.5} emissive="#C5A55A" emissiveIntensity={0.2} />
    </instancedMesh>
  );
}

/* ========== Steel Blue Particles ========== */
function SteelParticles() {
  const count = 60;
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particles = useMemo(() => {
    return Array.from({ length: count }, () => ({
      position: [(Math.random() - 0.5) * 18, Math.random() * 10 - 2, (Math.random() - 0.5) * 18] as [number, number, number],
      speed: 0.1 + Math.random() * 0.3,
      offset: Math.random() * Math.PI * 2,
      scale: 0.015 + Math.random() * 0.03,
    }));
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.elapsedTime;

    particles.forEach((p, i) => {
      dummy.position.set(
        p.position[0] + Math.cos(time * p.speed * 0.7 + p.offset) * 0.8,
        p.position[1] + ((time * p.speed * 0.2 + p.offset) % 12) - 2,
        p.position[2] + Math.sin(time * p.speed * 0.7 + p.offset) * 0.8
      );
      dummy.scale.setScalar(p.scale);
      dummy.updateMatrix();
      meshRef.current!.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color="#4A90D9" transparent opacity={0.4} emissive="#4A90D9" emissiveIntensity={0.2} />
    </instancedMesh>
  );
}

/* ========== Mouse-Reactive Camera ========== */
function MouseCamera() {
  const { camera } = useThree();
  const mouse = useRef({ x: 0, y: 0 });

  useFrame(() => {
    camera.position.x += (mouse.current.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (mouse.current.y * 1.5 - camera.position.y) * 0.02;
    camera.lookAt(0, 1.5, 0);
  });

  if (typeof window !== 'undefined') {
    window.addEventListener('mousemove', (e) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    });
  }

  return null;
}

/* ========== Scene Content (wrapped in Suspense boundary) ========== */
function SceneContent() {
  return (
    <>
      <fog attach="fog" args={['#1C1C1C', 8, 28]} />
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 8, 5]} intensity={0.6} color="#F5F5F5" />
      <pointLight position={[-3, 5, -3]} intensity={0.4} color="#4A90D9" distance={15} />
      <pointLight position={[3, 3, 3]} intensity={0.3} color="#C5A55A" distance={12} />

      <MouseCamera />

      <BlueprintGrid />
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.2}>
        <VillaWireframe />
      </Float>

      <GoldRing position={[-5, 3, -4]} scale={0.8} speed={0.7} />
      <GoldRing position={[5, 4, -3]} scale={0.6} speed={1.2} />
      <GoldRing position={[3, 1, -6]} scale={1} speed={0.5} />

      <ConstructionParticles />
      <SteelParticles />

      <Sparkles count={40} scale={18} size={1.5} speed={0.3} color="#C5A55A" opacity={0.5} />
      <Sparkles count={20} scale={14} size={1} speed={0.2} color="#4A90D9" opacity={0.3} />

      <Stars radius={50} depth={50} count={800} factor={3} saturation={0} fade speed={0.5} />
    </>
  );
}

/* ========== Main Export ========== */
export default function VillaScene3D() {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 3, 10], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
}
