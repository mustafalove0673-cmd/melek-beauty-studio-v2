'use client';

import { useRef, useCallback, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';
import Image from 'next/image';
import { AuroraOverlay } from '@/components/AnimatedBackground';

/* ─── Simple SVG Butterfly ─── */
function ButterflySVG({
  className,
  style,
  color = 'white',
}: {
  className?: string;
  style?: React.CSSProperties;
  color?: string;
}) {
  const strokeColor =
    color === 'pink' ? 'rgba(212,135,143,0.6)' : 'rgba(255,255,255,0.5)';
  const fillColor =
    color === 'pink' ? 'rgba(212,135,143,0.08)' : 'rgba(255,255,255,0.06)';
  return (
    <svg
      viewBox="0 0 60 48"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      {/* Upper left wing */}
      <path
        d="M30 24C30 24 18 8 8 12C2 15 5 24 10 27C15 30 26 25 30 24Z"
        stroke={strokeColor}
        strokeWidth="1.2"
      />
      {/* Upper right wing */}
      <path
        d="M30 24C30 24 42 8 52 12C58 15 55 24 50 27C45 30 34 25 30 24Z"
        stroke={strokeColor}
        strokeWidth="1.2"
      />
      {/* Lower left wing */}
      <path
        d="M30 24C30 24 20 30 16 38C13 43 17 46 22 43C27 40 29 26 30 24Z"
        stroke={strokeColor}
        strokeWidth="1"
        opacity="0.7"
      />
      {/* Lower right wing */}
      <path
        d="M30 24C30 24 40 30 44 38C47 43 43 46 38 43C33 40 31 26 30 24Z"
        stroke={strokeColor}
        strokeWidth="1"
        opacity="0.7"
      />
      {/* Body */}
      <line
        x1="30"
        y1="10"
        x2="30"
        y2="42"
        stroke={strokeColor}
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  );
}

/* ─── Butterfly configs ─── */
const butterflies = [
  {
    top: '12%',
    left: '8%',
    size: 'w-10 h-8',
    delay: '0s',
    duration: '12s',
    color: 'white' as const,
  },
  {
    top: '20%',
    left: '78%',
    size: 'w-8 h-6',
    delay: '3s',
    duration: '14s',
    color: 'pink' as const,
  },
  {
    top: '60%',
    left: '85%',
    size: 'w-6 h-5',
    delay: '6s',
    duration: '11s',
    color: 'white' as const,
  },
  {
    top: '70%',
    left: '12%',
    size: 'w-7 h-6',
    delay: '2s',
    duration: '13s',
    color: 'pink' as const,
  },
  {
    top: '35%',
    left: '65%',
    size: 'w-5 h-4',
    delay: '8s',
    duration: '15s',
    color: 'white' as const,
  },
  {
    top: '80%',
    left: '50%',
    size: 'w-6 h-5',
    delay: '5s',
    duration: '10s',
    color: 'pink' as const,
  },
];

/* ─── Framer Motion variants ─── */
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function HeroSection() {
  const { language } = useLanguageStore();
  const t = translations[language].hero;
  const sectionRef = useRef<HTMLDivElement>(null);

  /* ─── Mouse parallax with spring physics ─── */
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);
  const smoothX = useSpring(rawMouseX, { stiffness: 40, damping: 30 });
  const smoothY = useSpring(rawMouseY, { stiffness: 40, damping: 30 });

  /* Parallax transforms at different depths */
  const bgX = useTransform(smoothX, (v) => v * -8);
  const bgY = useTransform(smoothY, (v) => v * -8);
  const auroraX = useTransform(smoothX, (v) => v * -5);
  const auroraY = useTransform(smoothY, (v) => v * -5);
  const circleX = useTransform(smoothX, (v) => v * -12);
  const circleY = useTransform(smoothY, (v) => v * -12);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      rawMouseX.set((e.clientX - cx) / rect.width);
      rawMouseY.set((e.clientY - cy) / rect.height);
    },
    [rawMouseX, rawMouseY]
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* ═══ Layer 0: Background Image (parallax – slowest) ═══ */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ x: bgX, y: bgY }}
      >
        <div className="absolute inset-[-5%]">
          <Image
            src="/images/hero-bg.png"
            alt="Melek Yüksel Hair Beauty Salon"
            fill
            className="object-cover"
            priority
            quality={85}
            style={{
              filter: 'blur(2px) brightness(0.45)',
              transform: 'scale(1.1)',
            }}
          />
        </div>
      </motion.div>

      {/* ═══ Layer 1: Dark gradient overlays ═══ */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(160deg, rgba(26,26,46,0.85) 0%, rgba(139,34,82,0.45) 45%, rgba(26,26,46,0.9) 100%)',
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at 25% 50%, rgba(139,34,82,0.2) 0%, transparent 55%)',
        }}
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            'radial-gradient(ellipse at 80% 30%, rgba(201,169,110,0.06) 0%, transparent 40%)',
        }}
      />

      {/* ═══ Layer 2: Aurora (parallax – medium) ═══ */}
      <motion.div
        className="absolute inset-0 z-[2]"
        style={{ x: auroraX, y: auroraY }}
      >
        <AuroraOverlay variant="mixed" />
      </motion.div>

      {/* ═══ Layer 3: Glassmorphic Circle / Ring (left side) ═══ */}
      <motion.div
        className="absolute z-[3] pointer-events-none hidden sm:block"
        style={{
          top: '10%',
          left: '-8%',
          width: 'clamp(280px, 45vw, 550px)',
          height: 'clamp(280px, 45vw, 550px)',
          x: circleX,
          y: circleY,
        }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
      >
        <div
          className="w-full h-full rounded-full animate-glass-ring"
          style={{
            border: '1.5px solid rgba(255,255,255,0.08)',
            background:
              'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 50%, transparent 70%)',
            backdropFilter: 'blur(1px)',
            WebkitBackdropFilter: 'blur(1px)',
            boxShadow:
              'inset 0 0 60px rgba(255,255,255,0.02), 0 0 80px rgba(139,34,82,0.08), 0 0 120px rgba(201,169,110,0.04)',
          }}
        />
        {/* Inner ring */}
        <div
          className="absolute inset-[15%] rounded-full animate-glass-ring-reverse"
          style={{
            border: '1px solid rgba(201,169,110,0.1)',
            background:
              'radial-gradient(circle at 60% 40%, rgba(201,169,110,0.04) 0%, transparent 60%)',
          }}
        />
      </motion.div>

      {/* ═══ Layer 4: Small glass panel decorations ═══ */}
      <motion.div
        className="absolute top-[15%] right-[12%] w-20 h-20 sm:w-28 sm:h-28 rounded-2xl z-[3] pointer-events-none animate-float-slow"
        style={{
          background: 'rgba(255,255,255,0.03)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      />
      <motion.div
        className="absolute bottom-[20%] left-[5%] w-16 h-16 sm:w-24 sm:h-24 rounded-full z-[3] pointer-events-none animate-float-reverse"
        style={{
          background: 'rgba(201,169,110,0.03)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          border: '1px solid rgba(201,169,110,0.06)',
          animationDelay: '3s',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      />

      {/* ═══ Layer 5: Floating Butterflies ═══ */}
      <div className="absolute inset-0 z-[4] pointer-events-none overflow-hidden">
        {butterflies.map((b, i) => (
          <ButterflySVG
            key={i}
            className={`absolute ${b.size} animate-butterfly-float`}
            style={{
              top: b.top,
              left: b.left,
              animationDelay: b.delay,
              animationDuration: b.duration,
              opacity: i < 2 ? 0.5 : 0.35,
            }}
            color={b.color}
          />
        ))}
      </div>

      {/* ═══ Layer 6: Main Content ═══ */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
        style={{ transformStyle: 'preserve-3d' }}
        initial="hidden"
        animate="visible"
      >
        {/* Sparkle icon */}
        <motion.div
          custom={0.2}
          variants={fadeInUp}
          className="flex justify-center mb-4 sm:mb-6"
        >
          <Sparkles
            className="w-6 h-6 sm:w-8 sm:h-8"
            style={{ color: 'var(--salon-gold)', opacity: 0.8 }}
          />
        </motion.div>

        {/* Title: "Melek Yüksel" – large serif with 3D text shadow */}
        <motion.h1
          custom={0.4}
          variants={fadeInUp}
          className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-1 sm:mb-2"
          style={{
            textShadow:
              '0 2px 4px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2), 0 8px 24px rgba(139,34,82,0.15)',
          }}
        >
          {t.title}
        </motion.h1>

        {/* Subtitle: "Hair Beauty" – italic serif, gold */}
        <motion.p
          custom={0.6}
          variants={fadeInUp}
          className="text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 font-playfair italic"
          style={{
            color: 'var(--salon-gold)',
            textShadow: '0 2px 8px rgba(201,169,110,0.25)',
          }}
        >
          {t.subtitle}
        </motion.p>

        {/* Description text */}
        <motion.p
          custom={0.8}
          variants={fadeInUp}
          className="text-sm sm:text-base md:text-lg text-white/60 mb-8 sm:mb-10 max-w-lg mx-auto leading-relaxed"
        >
          {t.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={1.0}
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          {/* Primary CTA – "Randevu Al" */}
          <motion.button
            whileHover={{
              y: -3,
              boxShadow: '0 12px 35px rgba(139, 34, 82, 0.45)',
            }}
            whileTap={{
              y: 1,
              boxShadow: '0 4px 15px rgba(139, 34, 82, 0.3)',
            }}
            onClick={() => scrollToSection('booking')}
            className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full text-white font-semibold text-sm sm:text-base tracking-wide cursor-pointer transition-all duration-300"
            style={{
              background:
                'linear-gradient(135deg, var(--salon-pink), var(--salon-red))',
              boxShadow: '0 6px 25px rgba(139, 34, 82, 0.35)',
            }}
          >
            {t.cta1}
          </motion.button>

          {/* Secondary CTA – "Hizmetleri İncele" (outlined/ghost) */}
          <motion.button
            whileHover={{
              y: -3,
              backgroundColor: 'rgba(255,255,255,0.12)',
              borderColor: 'rgba(255,255,255,0.45)',
              boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
            }}
            whileTap={{ y: 1, scale: 0.98 }}
            onClick={() => scrollToSection('services')}
            className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base tracking-wide text-white/90 border-2 cursor-pointer transition-all duration-300"
            style={{
              borderColor: 'rgba(255,255,255,0.25)',
              backgroundColor: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            {t.cta2}
          </motion.button>
        </motion.div>
      </motion.div>

      {/* ═══ Scroll Down Indicator ═══ */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToSection('services')}
          className="flex flex-col items-center gap-1.5 cursor-pointer group"
          aria-label="Scroll down"
        >
          <span className="text-white/40 text-[10px] sm:text-xs tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 animate-scroll-down" />
        </button>
      </motion.div>
    </section>
  );
}
