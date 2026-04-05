'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sparkles, Environment } from '@react-three/drei'
import * as THREE from 'three'

function WireframeBuilding() {
  const meshRef = useRef<THREE.Mesh>(null)
  const edgesRef = useRef<THREE.LineSegments>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.y = state.clock.elapsedTime * 0.15
      edgesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05
    }
  })

  const edges = useMemo(() => {
    const geo = new THREE.BoxGeometry(2, 3, 1.5)
    return new THREE.EdgesGeometry(geo)
  }, [])

  return (
    <group position={[0, -0.5, 0]}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 3, 1.5]} />
        <meshStandardMaterial color="#0C0C0C" transparent opacity={0.03} />
        <lineSegments ref={edgesRef} geometry={edges}>
          <lineBasicMaterial color="#D4841C" transparent opacity={0.6} />
        </lineSegments>
      </mesh>
    </group>
  )
}

function FloorGrid() {
  const gridRef = useRef<THREE.GridHelper>(null)

  return (
    <gridHelper
      ref={gridRef}
      args={[20, 20, '#D4841C', '#1A1714']}
      position={[0, -2.2, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

function FloatingParticles() {
  const count = 40
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 8
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6
    }
    return pos
  }, [])

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#D4841C" size={0.04} transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function SecondaryCube() {
  const ref = useRef<THREE.Mesh>(null)
  const edges2 = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(0.8, 1.2, 0.8)), [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = -state.clock.elapsedTime * 0.2
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15 + 0.5
    }
  })

  return (
    <group position={[-2.5, -1, -1]}>
      <mesh ref={ref}>
        <boxGeometry args={[0.8, 1.2, 0.8]} />
        <meshStandardMaterial color="#0C0C0C" transparent opacity={0.02} />
        <lineSegments geometry={edges2}>
          <lineBasicMaterial color="#8B2500" transparent opacity={0.4} />
        </lineSegments>
      </mesh>
    </group>
  )
}

function ThirdStructure() {
  const ref = useRef<THREE.Mesh>(null)
  const edges3 = useMemo(() => new THREE.EdgesGeometry(new THREE.CylinderGeometry(0.4, 0.4, 2.5, 8)), [])

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.1
      ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.3 + 1) * 0.1 - 0.5
    }
  })

  return (
    <group position={[2.8, -1, -0.5]}>
      <mesh ref={ref}>
        <cylinderGeometry args={[0.4, 0.4, 2.5, 8]} />
        <meshStandardMaterial color="#0C0C0C" transparent opacity={0.02} />
        <lineSegments geometry={edges3}>
          <lineBasicMaterial color="#E8D5B5" transparent opacity={0.3} />
        </lineSegments>
      </mesh>
    </group>
  )
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [4, 2, 5], fov: 45 }}
      dpr={[1, 1.5]}
      style={{ position: 'absolute', inset: 0, zIndex: 1 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.15} />
      <directionalLight position={[5, 8, 3]} intensity={0.4} color="#D4841C" />
      <pointLight position={[-3, 2, 2]} intensity={0.3} color="#8B2500" />
      <pointLight position={[3, 1, -2]} intensity={0.2} color="#E8D5B5" />

      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.3}>
        <WireframeBuilding />
      </Float>

      <SecondaryCube />
      <ThirdStructure />
      <FloorGrid />
      <FloatingParticles />

      <Sparkles
        count={30}
        scale={8}
        size={1.5}
        speed={0.3}
        color="#D4841C"
        opacity={0.3}
      />

      <fog attach="fog" args={['#0C0C0C', 6, 16]} />
    </Canvas>
  )
}
