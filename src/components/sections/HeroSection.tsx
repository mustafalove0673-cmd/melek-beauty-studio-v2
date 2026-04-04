'use client';

import { useRef, useCallback, useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';
import Image from 'next/image';
import { AuroraOverlay, FloatingBokeh, LightStreaks, RisingParticles } from '@/components/AnimatedBackground';

/* ============================================================
   3D MONARCH BUTTERFLY
   ============================================================ */
interface Butterfly3DProps {
  size?: number;
  position?: string;
  delay?: number;
  opacity?: number;
  className?: string;
  wingSpeed?: number;
}

function MonarchButterfly({
  size = 80,
  delay = 0,
  opacity = 1,
  wingSpeed = 0.8,
}: Butterfly3DProps) {
  const wingStyle = (side: 'left' | 'right') => ({
    animation: `${side === 'left' ? 'butterfly-wing-flutter-left' : 'butterfly-wing-flutter-right'} ${wingSpeed}s ease-in-out infinite`,
    animationDelay: `${delay * 0.1}s`,
    transformOrigin: side === 'left' ? 'right center' : 'left center',
    transformStyle: 'preserve-3d' as const,
    backfaceVisibility: 'hidden' as const,
  });

  const bodyColor = '#1A1A2E';
  const wingOrange = '#FF6B00';
  const wingDark = '#1A1A2E';
  const wingWhite = '#FFFFFF';
  const accentGold = '#C9A96E';

  return (
    <div
      className="preserve-3d animate-butterfly-3d"
      style={{
        width: size,
        height: size * 0.75,
        animationDelay: `${delay}s`,
        opacity,
        filter: `drop-shadow(0 0 ${size * 0.15}px rgba(201,169,110,0.6))`,
      }}
    >
      {/* LEFT WINGS */}
      <div
        className="absolute top-0 left-0 preserve-3d"
        style={{
          width: size * 0.48,
          height: size * 0.75,
          ...wingStyle('left'),
        }}
      >
        {/* Upper Left Wing */}
        <svg
          viewBox="0 0 100 120"
          className="absolute top-0 left-0 w-full h-[65%]"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <radialGradient id={`mwing-ul-${delay}`} cx="70%" cy="40%" r="80%">
              <stop offset="0%" stopColor="#FF8C33" />
              <stop offset="40%" stopColor={wingOrange} />
              <stop offset="70%" stopColor="#CC5500" />
              <stop offset="100%" stopColor={wingDark} />
            </radialGradient>
            <clipPath id={`clip-ul-${delay}`}>
              <path d="M95 60 C90 20, 60 0, 30 5 C10 10, 0 30, 5 55 C8 70, 20 80, 40 75 C55 72, 75 65, 95 60Z" />
            </clipPath>
          </defs>
          <path
            d="M95 60 C90 20, 60 0, 30 5 C10 10, 0 30, 5 55 C8 70, 20 80, 40 75 C55 72, 75 65, 95 60Z"
            fill={`url(#mwing-ul-${delay})`}
            stroke={wingDark}
            strokeWidth="2"
          />
          {/* Black veins */}
          <g clipPath={`url(#clip-ul-${delay})`} stroke={wingDark} strokeWidth="1.5" fill="none" opacity="0.7">
            <path d="M95 60 C70 55, 50 45, 30 35" />
            <path d="M85 50 C65 45, 45 35, 25 25" />
            <path d="M75 40 C55 38, 35 25, 15 15" />
            <path d="M40 70 C35 50, 30 30, 25 10" />
          </g>
          {/* White spots */}
          <g clipPath={`url(#clip-ul-${delay})`} fill={wingWhite} opacity="0.8">
            <circle cx="25" cy="15" r="4" />
            <circle cx="35" cy="10" r="3" />
            <circle cx="15" cy="25" r="3.5" />
            <circle cx="30" cy="22" r="2.5" />
          </g>
          {/* Edge dots */}
          <g clipPath={`url(#clip-ul-${delay})`} fill={wingWhite} opacity="0.5">
            <circle cx="10" cy="40" r="2" />
            <circle cx="8" cy="50" r="2" />
            <circle cx="15" cy="60" r="1.5" />
          </g>
        </svg>

        {/* Lower Left Wing */}
        <svg
          viewBox="0 0 100 120"
          className="absolute bottom-0 left-0 w-[85%] h-[45%]"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <radialGradient id={`mwing-ll-${delay}`} cx="60%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#FF8C33" />
              <stop offset="50%" stopColor={wingOrange} />
              <stop offset="100%" stopColor={wingDark} />
            </radialGradient>
          </defs>
          <path
            d="M95 15 C80 10, 50 5, 30 15 C10 25, 5 50, 15 70 C25 90, 45 100, 60 95 C80 88, 95 60, 95 15Z"
            fill={`url(#mwing-ll-${delay})`}
            stroke={wingDark}
            strokeWidth="2"
          />
          {/* Veins */}
          <g stroke={wingDark} strokeWidth="1.2" fill="none" opacity="0.6">
            <path d="M95 15 C70 25, 50 40, 35 60" />
            <path d="M80 20 C60 35, 40 55, 30 75" />
          </g>
          {/* White spots */}
          <g fill={wingWhite} opacity="0.7">
            <circle cx="25" cy="50" r="3" />
            <circle cx="35" cy="65" r="2.5" />
            <circle cx="20" cy="70" r="2" />
          </g>
        </svg>
      </div>

      {/* RIGHT WINGS */}
      <div
        className="absolute top-0 right-0 preserve-3d"
        style={{
          width: size * 0.48,
          height: size * 0.75,
          ...wingStyle('right'),
        }}
      >
        {/* Upper Right Wing */}
        <svg
          viewBox="0 0 100 120"
          className="absolute top-0 right-0 w-full h-[65%]"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <radialGradient id={`mwing-ur-${delay}`} cx="30%" cy="40%" r="80%">
              <stop offset="0%" stopColor="#FF8C33" />
              <stop offset="40%" stopColor={wingOrange} />
              <stop offset="70%" stopColor="#CC5500" />
              <stop offset="100%" stopColor={wingDark} />
            </radialGradient>
            <clipPath id={`clip-ur-${delay}`}>
              <path d="M5 60 C10 20, 40 0, 70 5 C90 10, 100 30, 95 55 C92 70, 80 80, 60 75 C45 72, 25 65, 5 60Z" />
            </clipPath>
          </defs>
          <path
            d="M5 60 C10 20, 40 0, 70 5 C90 10, 100 30, 95 55 C92 70, 80 80, 60 75 C45 72, 25 65, 5 60Z"
            fill={`url(#mwing-ur-${delay})`}
            stroke={wingDark}
            strokeWidth="2"
          />
          {/* Black veins */}
          <g clipPath={`url(#clip-ur-${delay})`} stroke={wingDark} strokeWidth="1.5" fill="none" opacity="0.7">
            <path d="M5 60 C30 55, 50 45, 70 35" />
            <path d="M15 50 C35 45, 55 35, 75 25" />
            <path d="M25 40 C45 38, 65 25, 85 15" />
            <path d="M60 70 C65 50, 70 30, 75 10" />
          </g>
          {/* White spots */}
          <g clipPath={`url(#clip-ur-${delay})`} fill={wingWhite} opacity="0.8">
            <circle cx="75" cy="15" r="4" />
            <circle cx="65" cy="10" r="3" />
            <circle cx="85" cy="25" r="3.5" />
            <circle cx="70" cy="22" r="2.5" />
          </g>
          <g clipPath={`url(#clip-ur-${delay})`} fill={wingWhite} opacity="0.5">
            <circle cx="90" cy="40" r="2" />
            <circle cx="92" cy="50" r="2" />
            <circle cx="85" cy="60" r="1.5" />
          </g>
        </svg>

        {/* Lower Right Wing */}
        <svg
          viewBox="0 0 100 120"
          className="absolute bottom-0 right-0 w-[85%] h-[45%]"
          style={{ overflow: 'visible' }}
        >
          <defs>
            <radialGradient id={`mwing-lr-${delay}`} cx="40%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#FF8C33" />
              <stop offset="50%" stopColor={wingOrange} />
              <stop offset="100%" stopColor={wingDark} />
            </radialGradient>
          </defs>
          <path
            d="M5 15 C20 10, 50 5, 70 15 C90 25, 95 50, 85 70 C75 90, 55 100, 40 95 C20 88, 5 60, 5 15Z"
            fill={`url(#mwing-lr-${delay})`}
            stroke={wingDark}
            strokeWidth="2"
          />
          <g stroke={wingDark} strokeWidth="1.2" fill="none" opacity="0.6">
            <path d="M5 15 C30 25, 50 40, 65 60" />
            <path d="M20 20 C40 35, 60 55, 70 75" />
          </g>
          <g fill={wingWhite} opacity="0.7">
            <circle cx="75" cy="50" r="3" />
            <circle cx="65" cy="65" r="2.5" />
            <circle cx="80" cy="70" r="2" />
          </g>
        </svg>
      </div>

      {/* BODY */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        style={{
          width: size * 0.06,
          height: size * 0.6,
          background: `linear-gradient(180deg, ${bodyColor}, #2A2A4E, ${bodyColor})`,
          borderRadius: '50%',
          boxShadow: `0 0 ${size * 0.08}px rgba(0,0,0,0.3)`,
        }}
      />

      {/* HEAD */}
      <div
        className="absolute top-[8%] left-1/2 -translate-x-1/2 z-10"
        style={{
          width: size * 0.07,
          height: size * 0.07,
          background: bodyColor,
          borderRadius: '50%',
        }}
      />

      {/* ANTENNAE */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
        viewBox="0 0 40 30"
        style={{
          width: size * 0.4,
          height: size * 0.25,
          overflow: 'visible',
        }}
      >
        <path
          d="M20 28 C18 18, 8 8, 2 2"
          stroke={bodyColor}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="2" cy="2" r="2" fill={accentGold} />
        <path
          d="M20 28 C22 18, 32 8, 38 2"
          stroke={bodyColor}
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="38" cy="2" r="2" fill={accentGold} />
      </svg>
    </div>
  );
}

/* ============================================================
   3D GEOMETRIC SHAPES
   ============================================================ */
function Floating3DShape({
  type,
  size,
  position,
  delay,
  color,
  opacity,
}: {
  type: 'diamond' | 'ring' | 'triangle';
  size: number;
  position: string;
  delay: number;
  color: string;
  opacity: number;
}) {
  if (type === 'diamond') {
    return (
      <div
        className="absolute animate-diamond-3d preserve-3d"
        style={{
          width: size,
          height: size,
          ...parsePosition(position),
          animationDelay: `${delay}s`,
          opacity,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            border: `1.5px solid ${color}`,
            transform: 'rotateZ(45deg)',
            background: `linear-gradient(135deg, ${color}22, transparent)`,
          }}
        />
      </div>
    );
  }

  if (type === 'ring') {
    return (
      <div
        className="absolute animate-ring-3d preserve-3d"
        style={{
          width: size,
          height: size,
          ...parsePosition(position),
          animationDelay: `${delay}s`,
          opacity,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            border: `1.5px solid ${color}`,
            borderRadius: '50%',
          }}
        />
      </div>
    );
  }

  // triangle
  return (
    <div
      className="absolute animate-shape-3d preserve-3d"
      style={{
        width: size,
        height: size,
        ...parsePosition(position),
        animationDelay: `${delay}s`,
        opacity,
      }}
    >
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        <polygon
          points="50,5 95,95 5,95"
          fill="none"
          stroke={color}
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}

function parsePosition(position: string): React.CSSProperties {
  const styles: React.CSSProperties = {};
  const parts = position.split(' ');
  parts.forEach((part) => {
    if (part.startsWith('top-')) styles.top = part.replace('top-', '') + '%';
    if (part.startsWith('bottom-')) styles.bottom = part.replace('bottom-', '') + '%';
    if (part.startsWith('left-')) styles.left = part.replace('left-', '') + '%';
    if (part.startsWith('right-')) styles.right = part.replace('right-', '') + '%';
  });
  return styles;
}

/* ============================================================
   3D GLASS PANELS
   ============================================================ */
function Glass3DPanel({
  size,
  position,
  delay,
  rotateX = 0,
  rotateY = 0,
}: {
  size: { w: number; h: number };
  position: string;
  delay: number;
  rotateX?: number;
  rotateY?: number;
}) {
  return (
    <div
      className="absolute animate-glass-3d preserve-3d pointer-events-none"
      style={{
        width: size.w,
        height: size.h,
        ...parsePosition(position),
        animationDelay: `${delay}s`,
        transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    >
      <div
        className="w-full h-full rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      />
    </div>
  );
}

/* ============================================================
   GOLDEN PARTICLE TRAILS
   ============================================================ */
function GoldenTrail({ position, delay }: { position: string; delay: number }) {
  return (
    <div
      className="absolute animate-golden-trail pointer-events-none"
      style={{
        ...parsePosition(position),
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="w-1.5 h-1.5 rounded-full"
        style={{
          background: 'radial-gradient(circle, #C9A96E, #FFD700, transparent)',
          boxShadow: '0 0 6px rgba(201,169,110,0.8), 0 0 12px rgba(201,169,110,0.4)',
        }}
      />
    </div>
  );
}

/* ============================================================
   3D ORB
   ============================================================ */
function Orb3D({
  size,
  position,
  delay,
  color,
}: {
  size: number;
  position: string;
  delay: number;
  color: string;
}) {
  return (
    <div
      className="absolute animate-orb-3d preserve-3d pointer-events-none"
      style={{
        width: size,
        height: size,
        ...parsePosition(position),
        animationDelay: `${delay}s`,
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${color}44, ${color}22, transparent)`,
          boxShadow: `0 0 ${size * 0.4}px ${color}33, inset 0 0 ${size * 0.3}px ${color}22`,
          border: `1px solid ${color}22`,
        }}
      />
    </div>
  );
}

/* ============================================================
   3D LIGHT RAY
   ============================================================ */
function LightRay3D({ delay, width }: { delay: number; width: number }) {
  return (
    <div
      className="absolute top-0 right-0 animate-light-ray pointer-events-none"
      style={{
        width: `${width}%`,
        height: '120%',
        background: 'linear-gradient(180deg, rgba(201,169,110,0.15), transparent 60%)',
        transformOrigin: 'top right',
        animationDelay: `${delay}s`,
      }}
    />
  );
}

/* ============================================================
   HEXAGONAL GRID
   ============================================================ */
function HexGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none animate-hex-grid z-[1]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="hexGrid" width="60" height="52" patternUnits="userSpaceOnUse" patternTransform="rotate(15)">
            <polygon
              points="30,2 55,15 55,37 30,50 5,37 5,15"
              fill="none"
              stroke="rgba(201,169,110,0.3)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexGrid)" />
      </svg>
    </div>
  );
}

/* ============================================================
   3D ORBIT RING AROUND CTA
   ============================================================ */
function OrbitRing() {
  return (
    <div className="absolute pointer-events-none" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <div
        className="animate-orbit preserve-3d"
        style={{
          width: '320px',
          height: '320px',
          margin: '-160px 0 0 -160px',
          border: '1px solid rgba(201,169,110,0.12)',
          borderRadius: '50%',
        }}
      >
        {/* Orbiting dot */}
        <div
          className="absolute"
          style={{
            top: '-4px',
            left: '50%',
            width: '8px',
            height: '8px',
            marginLeft: '-4px',
            background: '#C9A96E',
            borderRadius: '50%',
            boxShadow: '0 0 10px rgba(201,169,110,0.8)',
          }}
        />
      </div>
    </div>
  );
}

/* ============================================================
   ANIMATED TITLE LETTERS
   ============================================================ */
function AnimatedTitle({ text, baseDelay }: { text: string; baseDelay: number }) {
  const letters = text.split('');
  return (
    <h1 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-2 inline-flex flex-wrap justify-center">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, z: -100, rotateX: 30 }}
          animate={{ opacity: 1, y: 0, z: 0, rotateX: 0 }}
          transition={{
            delay: baseDelay + i * 0.04,
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="inline-block preserve-3d"
          style={{
            textShadow: `
              0 1px 0 rgba(201,169,110,0.3),
              0 2px 0 rgba(0,0,0,0.2),
              0 4px 10px rgba(0,0,0,0.3),
              0 8px 30px rgba(0,0,0,0.2),
              0 0 40px rgba(201,169,110,0.1)
            `,
            willChange: 'transform, opacity',
          }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </h1>
  );
}

/* ============================================================
   GOLD SHIMMER TEXT
   ============================================================ */
function GoldShimmerText({ text, delay }: { text: string; delay: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className="text-lg sm:text-xl md:text-2xl tracking-[0.25em] uppercase mb-4 animate-shimmer"
      style={{
        background: 'linear-gradient(90deg, #C9A96E 0%, #FFD700 25%, #C9A96E 50%, #E8C87A 75%, #C9A96E 100%)',
        backgroundSize: '200% auto',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}
    >
      {text}
    </motion.p>
  );
}

/* ============================================================
   HERO SECTION
   ============================================================ */
export default function HeroSection() {
  const { language } = useLanguageStore();
  const t = translations[language].hero;
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / rect.width;
    const deltaY = (e.clientY - centerY) / rect.height;
    setMousePos({ x: deltaX, y: deltaY });
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const rotateX = mousePos.y * -5;
  const rotateY = mousePos.x * 5;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const shapes = useMemo(() => [
    { type: 'diamond' as const, size: isMobile ? 30 : 50, position: 'top-15 left-10', delay: 0, color: 'rgba(201,169,110,0.25)', opacity: 0.5 },
    { type: 'ring' as const, size: isMobile ? 40 : 70, position: 'top-20 right-15', delay: 2, color: 'rgba(201,169,110,0.15)', opacity: 0.4 },
    { type: 'triangle' as const, size: isMobile ? 25 : 45, position: 'bottom-25 left-12', delay: 4, color: 'rgba(139,34,82,0.2)', opacity: 0.35 },
    { type: 'diamond' as const, size: isMobile ? 20 : 35, position: 'top-60 right-20', delay: 1.5, color: 'rgba(201,169,110,0.2)', opacity: 0.3 },
    { type: 'ring' as const, size: isMobile ? 25 : 55, position: 'bottom-35 right-8', delay: 3, color: 'rgba(139,34,82,0.15)', opacity: 0.3 },
    ...(isMobile ? [] : [
      { type: 'triangle' as const, size: 55, position: 'top-40 left-5', delay: 5, color: 'rgba(201,169,110,0.15)', opacity: 0.25 },
      { type: 'diamond' as const, size: 25, position: 'bottom-15 left-25', delay: 6, color: 'rgba(212,135,143,0.2)', opacity: 0.3 },
    ]),
  ], [isMobile]);

  const glassPanels = useMemo(() => [
    { size: { w: isMobile ? 80 : 160, h: isMobile ? 80 : 160 }, position: 'top-10 right-8', delay: 0, rotateX: 15, rotateY: -10 },
    { size: { w: isMobile ? 60 : 120, h: isMobile ? 100 : 180 }, position: 'bottom-20 left-5', delay: 2.5, rotateX: -10, rotateY: 15 },
    ...(isMobile ? [] : [
      { size: { w: 100, h: 100 }, position: 'top-45 left-18', delay: 5, rotateX: 8, rotateY: -5 },
      { size: { w: 140, h: 80 }, position: 'bottom-10 right-20', delay: 3.5, rotateX: -5, rotateY: 12 },
    ]),
  ], [isMobile]);

  const butterflies = useMemo(() => [
    { size: isMobile ? 50 : 90, position: 'top-12 right-8', delay: 0, opacity: 0.9, wingSpeed: 0.8 },
    { size: isMobile ? 35 : 65, position: 'bottom-22 left-6', delay: 3, opacity: 0.6, wingSpeed: 1.0 },
    ...(isMobile ? [] : [
      { size: 45, position: 'top-50 left-12', delay: 5.5, opacity: 0.5, wingSpeed: 0.9 },
      { size: 55, position: 'bottom-10 right-15', delay: 7, opacity: 0.7, wingSpeed: 0.85 },
    ]),
  ], [isMobile]);

  const goldenTrails = useMemo(() => [
    { position: 'top-30 left-20', delay: 0 },
    { position: 'top-50 left-60', delay: 1.5 },
    { position: 'top-70 left-30', delay: 3 },
    ...(isMobile ? [] : [
      { position: 'top-20 left-80', delay: 2 },
      { position: 'top-60 left-45', delay: 4 },
      { position: 'top-40 left-15', delay: 5.5 },
    ]),
  ], [isMobile]);

  const orbs = useMemo(() => [
    { size: isMobile ? 60 : 120, position: 'top-15 left-30', delay: 0, color: '#C9A96E' },
    { size: isMobile ? 40 : 90, position: 'bottom-20 right-25', delay: 3, color: '#8B2252' },
    ...(isMobile ? [] : [
      { size: 70, position: 'top-55 left-60', delay: 6, color: '#C9A96E' },
    ]),
  ], [isMobile]);

  const parallaxX = mousePos.x;
  const parallaxY = mousePos.y;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ========== LAYER 1: Background Image with Ken Burns ========== */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/hero-bg.png"
            alt="Melek Yüksel Hair Beauty Salon"
            fill
            className="object-cover"
            priority
            quality={90}
            style={{
              transform: `scale(1.08) translate(${parallaxX * -8}px, ${parallaxY * -8}px)`,
              animation: 'gradient-shift 20s ease infinite',
              willChange: 'transform',
              transition: 'transform 0.6s ease-out',
            }}
          />
        </div>
      </div>

      {/* ========== LAYER 2: Aurora Overlay ========== */}
      <div
        style={{
          transform: `translate(${parallaxX * -5}px, ${parallaxY * -5}px)`,
          transition: 'transform 0.8s ease-out',
        }}
      >
        <AuroraOverlay variant="mixed" />
      </div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(135deg, rgba(26,26,46,0.78) 0%, rgba(139,34,82,0.45) 40%, rgba(26,26,46,0.68) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(139,34,82,0.2) 0%, transparent 60%)',
        }}
      />

      {/* ========== LAYER 3: Hexagonal Grid (subtle) ========== */}
      <HexGrid />

      {/* ========== LAYER 4: Floating Bokeh ========== */}
      <div
        style={{
          transform: `translate(${parallaxX * -3}px, ${parallaxY * -3}px)`,
          transition: 'transform 0.9s ease-out',
        }}
      >
        <FloatingBokeh count={isMobile ? 6 : 10} variant="dark" />
      </div>

      {/* ========== LAYER 5: 3D Geometric Shapes ========== */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-[3]"
        style={{
          transform: `translate(${parallaxX * -12}px, ${parallaxY * -12}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        {shapes.map((shape, i) => (
          <Floating3DShape key={i} {...shape} />
        ))}
      </div>

      {/* ========== LAYER 6: 3D Glassmorphic Panels ========== */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-[3]"
        style={{
          transform: `translate(${parallaxX * -10}px, ${parallaxY * -10}px)`,
          transition: 'transform 0.6s ease-out',
        }}
      >
        {glassPanels.map((panel, i) => (
          <Glass3DPanel key={i} {...panel} />
        ))}
      </div>

      {/* ========== LAYER 7: Golden Particle Trails ========== */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[4]">
        {goldenTrails.map((trail, i) => (
          <GoldenTrail key={i} {...trail} />
        ))}
      </div>

      {/* ========== LAYER 8: 3D Orbs ========== */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-[4]"
        style={{
          transform: `translate(${parallaxX * -6}px, ${parallaxY * -6}px)`,
          transition: 'transform 0.7s ease-out',
        }}
      >
        {orbs.map((orb, i) => (
          <Orb3D key={i} {...orb} />
        ))}
      </div>

      {/* ========== LAYER 9: Rising Particles ========== */}
      <RisingParticles count={isMobile ? 3 : 5} />

      {/* ========== LAYER 10: Light Streaks ========== */}
      <LightStreaks count={isMobile ? 2 : 3} />

      {/* ========== LAYER 11: 3D Light Rays ========== */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-[3]">
          <LightRay3D delay={0} width={30} />
          <LightRay3D delay={2} width={20} />
        </div>
      )}

      {/* ========== LAYER 12: 3D Monarch Butterflies ========== */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none z-[5]"
        style={{
          transform: `translate(${parallaxX * -15}px, ${parallaxY * -15}px)`,
          transition: 'transform 0.4s ease-out',
        }}
      >
        {butterflies.map((b, i) => (
          <div
            key={i}
            className="absolute scene-3d"
            style={{
              ...parsePosition(b.position),
              perspective: '500px',
            }}
          >
            <MonarchButterfly
              size={b.size}
              delay={b.delay}
              opacity={b.opacity}
              wingSpeed={b.wingSpeed}
            />
          </div>
        ))}
      </div>

      {/* ========== MAIN CONTENT ========== */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="scene-3d"
          style={{
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: 'transform 0.4s ease-out',
            willChange: 'transform',
          }}
        >
          <div className="preserve-3d">
            {/* Orbit Ring around CTA area */}
            {!isMobile && <OrbitRing />}

            {/* Sparkle icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex justify-center mb-6"
            >
              <Sparkles
                className="w-8 h-8"
                style={{ color: 'var(--salon-gold)' }}
              />
            </motion.div>

            {/* Title with 3D letter animation */}
            <AnimatedTitle text={t.title} baseDelay={0.3} />

            {/* Subtitle with gold shimmer */}
            <GoldShimmerText text={t.subtitle} delay={0.8} />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20, z: -50 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
              transition={{ delay: 1.0, duration: 0.8 }}
              className="text-base sm:text-lg text-white/70 mb-10 max-w-xl mx-auto preserve-3d"
            >
              {t.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20, z: -30 }}
              animate={{ opacity: 1, y: 0, z: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 preserve-3d"
            >
              {/* Primary CTA */}
              <motion.button
                whileHover={{
                  y: -6,
                  z: 30,
                  boxShadow: '0 16px 50px rgba(139, 34, 82, 0.6), 0 0 30px rgba(201,169,110,0.2)',
                }}
                whileTap={{ y: 2, z: 0, boxShadow: '0 4px 15px rgba(139, 34, 82, 0.3)' }}
                onClick={() => scrollToSection('booking')}
                className="px-8 py-3.5 rounded-full text-white font-semibold text-base tracking-wide cursor-pointer transition-all duration-300 preserve-3d"
                style={{
                  background: 'linear-gradient(135deg, var(--salon-pink), var(--salon-red))',
                  boxShadow: '0 6px 25px rgba(139, 34, 82, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {t.cta1}
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                whileHover={{
                  y: -6,
                  z: 30,
                  backgroundColor: 'rgba(255,255,255,0.15)',
                  borderColor: 'rgba(201,169,110,0.5)',
                }}
                whileTap={{ y: 2, z: 0, scale: 0.97 }}
                onClick={() => scrollToSection('services')}
                className="px-8 py-3.5 rounded-full font-semibold text-base tracking-wide text-white border-2 cursor-pointer transition-all duration-300 preserve-3d"
                style={{
                  borderColor: 'rgba(255,255,255,0.3)',
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {t.cta2}
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ========== SCROLL INDICATOR ========== */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToSection('services')}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          aria-label="Scroll down"
        >
          <span className="text-white/50 text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-white/50 animate-scroll-down" />
        </button>
      </motion.div>
    </section>
  );
}
