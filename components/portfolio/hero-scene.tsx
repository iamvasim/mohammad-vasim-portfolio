'use client'

import React, { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

function MainOrb() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
  })

  return (
    <Float speed={1.8} rotationIntensity={0.8} floatIntensity={1.2}>
      <mesh ref={meshRef} position={[0, 0.2, 0]}>
        <icosahedronGeometry args={[1.2, 4]} />
        <meshStandardMaterial
          color="#6366f1"
          roughness={0.1}
          metalness={0.8}
          emissive="#312e81"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  )
}

function WireframeShell() {
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!ref.current) return
    ref.current.rotation.y = -state.clock.elapsedTime * 0.15
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.25) * 0.2
  })

  return (
    <mesh ref={ref} position={[0, 0.2, 0]}>
      <icosahedronGeometry args={[1.85, 1]} />
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.25} />
    </mesh>
  )
}

function OrbitingNodes() {
  const group = useRef<THREE.Group>(null)
  const nodes = useMemo(
    () =>
      Array.from({ length: 10 }, (_, i) => {
        const angle = (i / 10) * Math.PI * 2
        return {
          angle,
          radius: 2.5 + (i % 3) * 0.3,
          y: Math.sin(angle * 3) * 0.6,
          size: 0.07 + (i % 3) * 0.03,
          color: i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#6366f1' : '#a855f7',
        }
      }),
    [],
  )

  useFrame((state) => {
    if (!group.current) return
    group.current.rotation.y = state.clock.elapsedTime * 0.22
  })

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <mesh
          key={i}
          position={[Math.cos(n.angle) * n.radius, n.y, Math.sin(n.angle) * n.radius]}
        >
          <sphereGeometry args={[n.size, 16, 16]} />
          <meshStandardMaterial color={n.color} emissive={n.color} emissiveIntensity={3} />
        </mesh>
      ))}
    </group>
  )
}

function FloatingShapes() {
  return (
    <>
      <Float speed={2.2} rotationIntensity={1.4} floatIntensity={1.8}>
        <mesh position={[-2.5, 1.3, -0.5]} rotation={[0.4, 0.6, 0.2]}>
          <boxGeometry args={[0.55, 0.55, 0.55]} />
          <meshStandardMaterial
            color="#8b5cf6"
            roughness={0.2}
            metalness={0.6}
            emissive="#4c1d95"
            emissiveIntensity={0.5}
          />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1.5}>
        <mesh position={[2.6, -1.0, 0.4]} rotation={[0.2, 0.8, 0.4]}>
          <torusGeometry args={[0.38, 0.14, 24, 48]} />
          <meshStandardMaterial color="#06b6d4" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>

      <Float speed={2.6} rotationIntensity={1.6} floatIntensity={2}>
        <mesh position={[2.1, 1.7, -1]}>
          <octahedronGeometry args={[0.32, 0]} />
          <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={1} roughness={0.2} />
        </mesh>
      </Float>
    </>
  )
}

function MouseParallax() {
  useFrame((state) => {
    const x = state.pointer.x * 0.5
    const y = state.pointer.y * 0.3
    state.camera.position.x += (x - state.camera.position.x) * 0.05
    state.camera.position.y += (y + 0.2 - state.camera.position.y) * 0.05
    state.camera.lookAt(0, 0.2, 0)
  })
  return null
}

function DarkCssFallback() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div className="relative h-64 w-64 rounded-full bg-gradient-to-tr from-primary/40 via-accent/30 to-highlight/40 p-1 blur-sm animate-pulse">
        <div className="h-full w-full rounded-full bg-surface/80 backdrop-blur-xl" />
      </div>
      <div className="absolute h-48 w-48 rounded-full border border-highlight/30 bg-primary/20 glow-primary" />
    </div>
  )
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown) {
    console.warn('HeroScene WebGL rendering fallback:', error)
  }

  render() {
    if (this.state.hasError) {
      return <DarkCssFallback />
    }
    return this.props.children
  }
}

export default function HeroScene() {
  return (
    <ErrorBoundary>
      <div className="h-full w-full">
        <Suspense fallback={<DarkCssFallback />}>
          <Canvas
            camera={{ position: [0, 0.2, 6], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
            aria-hidden="true"
          >
            <ambientLight intensity={0.8} />
            <directionalLight position={[5, 5, 5]} intensity={2.5} color="#ffffff" />
            <pointLight position={[6, 6, 6]} intensity={40} color="#6366f1" />
            <pointLight position={[-6, -4, 4]} intensity={30} color="#06b6d4" />
            <pointLight position={[0, -5, -2]} intensity={20} color="#a855f7" />

            <MainOrb />
            <WireframeShell />
            <OrbitingNodes />
            <FloatingShapes />
            <MouseParallax />
          </Canvas>
        </Suspense>
      </div>
    </ErrorBoundary>
  )
}
