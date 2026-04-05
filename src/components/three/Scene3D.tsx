'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  Float,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  Sparkles,
  Environment,
  Stars,
  Trail,
  MeshTransmissionMaterial,
  PointMaterial,
  Points,
} from '@react-three/drei';
import * as THREE from 'three';

// ============================================================
// ANA 3D OBJE - Distort Sphere (Sektör rengine göre değişir)
// ============================================================
function HeroSphere({ color = '#C8506F' }: { color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        state.clock.elapsedTime * 0.1 + mouse.y * 0.3;
      meshRef.current.rotation.y =
        state.clock.elapsedTime * 0.15 + mouse.x * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.2}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          speed={3}
          distort={0.3}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

// ============================================================
// GOLD RING - Orbiting decorative ring
// ============================================================
function GoldRing({
  radius = 3,
  speed = 0.5,
  color = '#D4A574',
  thickness = 0.02,
}: {
  radius?: number;
  speed?: number;
  color?: string;
  thickness?: number;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * speed) * 0.5 + 0.8;
      ringRef.current.rotation.z = state.clock.elapsedTime * speed * 0.3;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, thickness, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.3}
        metalness={0.9}
        roughness={0.1}
      />
    </mesh>
  );
}

// ============================================================
// FLOATING PARTICLES - Soft ambient particles
// ============================================================
function FloatingParticles({
  count = 80,
  color = '#D4A574',
}: {
  count?: number;
  color?: string;
}) {
  const pointsRef = useRef<THREE.Points>(null);

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      pointsRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

// ============================================================
// GLASS CUBE - Wobble glass cube decoration
// ============================================================
function GlassCube({ position = [4, 0, -2] }: { position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={0.8}>
        <boxGeometry args={[1, 1, 1]} />
        <MeshWobbleMaterial
          color="#1A1A2E"
          transparent
          opacity={0.3}
          metalness={0.9}
          roughness={0.1}
          factor={0.2}
          speed={1}
        />
      </mesh>
    </Float>
  );
}

// ============================================================
// CRYSTAL - Transmission material gem
// ============================================================
function Crystal({ position = [-3.5, 1.5, -1] }: { position?: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3;
    }
  });

  return (
    <Float speed={3} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={0.6}>
        <octahedronGeometry args={[1, 0]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          thickness={0.5}
          chromaticAberration={0.3}
          anisotropy={0.3}
          distortion={0.2}
          distortionScale={0.3}
          temporalDistortion={0.1}
          color="#C8506F"
          transmission={0.95}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

// ============================================================
// ORBITING DOT - Trail effect small sphere
// ============================================================
function OrbitingDot({ radius = 5, speed = 0.8, color = '#E8C87A' }: {
  radius?: number;
  speed?: number;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime * speed;
      ref.current.position.x = Math.cos(t) * radius;
      ref.current.position.y = Math.sin(t) * radius * 0.3;
      ref.current.position.z = Math.sin(t) * radius;
    }
  });

  return (
    <Trail
      width={1.5}
      length={6}
      color={color}
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} />
      </mesh>
    </Trail>
  );
}

// ============================================================
// MAIN SCENE EXPORT
// ============================================================
export default function Scene3D() {
  const [isMobile] = useState(false);

  // This component is only rendered on desktop (controlled by parent)
  if (isMobile) return null;

  return (
    <div className="absolute inset-0 z-[5]">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        {/* Işıklandırma */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#F5E6D3" />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#C8506F" />
        <pointLight position={[5, -5, -5]} intensity={0.3} color="#D4A574" />
        <pointLight position={[0, 5, 0]} intensity={0.2} color="#E8C87A" />

        {/* Ana 3D Objeler */}
        <HeroSphere color="#C8506F" />

        {/* Dekoratif Ring'ler */}
        <GoldRing radius={3.5} speed={0.3} color="#D4A574" />
        <GoldRing radius={4.5} speed={-0.2} color="#D4A574" thickness={0.015} />
        <GoldRing radius={2.8} speed={0.15} color="#E8A0B0" thickness={0.01} />

        {/* Dekoratif Objeler */}
        <GlassCube position={[4, 0, -2]} />
        <Crystal position={[-3.5, 1.5, -1]} />

        {/* Parçacık Sistemleri */}
        <FloatingParticles count={80} color="#D4A574" />
        <FloatingParticles count={40} color="#C8506F" />

        {/* Trail Efekt */}
        <OrbitingDot radius={5} speed={0.8} color="#E8C87A" />
        <OrbitingDot radius={4} speed={-0.5} color="#E8A0B0" />

        {/* Sparkles & Stars */}
        <Sparkles
          count={40}
          scale={15}
          size={2}
          speed={0.3}
          color="#D4A574"
        />
        <Sparkles
          count={20}
          scale={10}
          size={3}
          speed={0.5}
          color="#C8506F"
        />
        <Stars
          radius={50}
          depth={50}
          count={1000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Environment */}
        <Environment preset="night" />
      </Canvas>
    </div>
  );
}
