'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowDown, Building2 } from 'lucide-react'

const HeroScene = dynamic(
  () => import('@/components/three/HeroScene'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 z-[5] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      </div>
    ),
  }
)

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <HeroScene />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-[2]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent z-[2]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Building2 className="w-4 h-4 text-primary" />
            <span className="text-xs font-medium text-primary">20+ Yıllık Deneyim</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.05] mb-6"
          >
            <span className="text-foreground">Hayallerinizi</span>
            <br />
            <span className="gradient-text">Gerçeğe</span>
            <br />
            <span className="text-foreground">Dönüştürüyoruz</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
          >
            Modern mimari tasarım ve premium inşaat çözümleriyle
            hayatınıza değer katıyoruz. Kalite, güven ve estetik bir arada.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-heading font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-pulse-glow"
            >
              Projelerimiz
            </a>
            <a
              href="#about"
              className="px-8 py-4 border border-primary/30 text-primary rounded-xl font-heading font-semibold text-sm hover:bg-primary/5 transition-all duration-300"
            >
              Daha Fazla
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground">Keşfet</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-5 h-5 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  )
}
