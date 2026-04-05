'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import VillaScene3D from './VillaScene3D';

const headingVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const letterVariants = {
  hidden: { y: 100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const headingText = 'NOVA CONSTRUCTION';
  const headingLetters = headingText.split('');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <VillaScene3D />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/40 to-dark z-[1]" />
      <div className="absolute inset-0 bg-gradient-mesh z-[1]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass-gold rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          <span className="text-sm font-body text-gold tracking-wide">PREMIUM VILLA CONSTRUCTION</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl tracking-wider mb-6"
        >
          {headingLetters.map((letter, i) => (
            <motion.span
              key={i}
              variants={letterVariants}
              className={letter === ' ' ? 'inline-block w-[0.3em]' : 'inline-block'}
            >
              {letter === ' '
                ? '\u00A0'
                : i < 4
                  ? 'text-gold'
                  : i < 12
                    ? 'text-gradient-blue'
                    : 'text-gold'}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-body text-lg sm:text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-4 leading-relaxed"
        >
          Building Exceptional Villas with <span className="text-gold font-semibold">Unmatched Craftsmanship</span>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="font-body text-sm sm:text-base text-text-secondary/70 max-w-2xl mx-auto mb-10"
        >
          From architectural design to interior finishing — we transform your vision into
          a masterpiece that stands the test of time.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={() => handleScroll('#showcase')}
            size="lg"
            className="bg-gradient-to-r from-steel-blue to-steel-blue/80 text-white font-display font-semibold tracking-wide px-8 py-6 text-base btn-construction group"
          >
            VIEW PROJECTS
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            onClick={() => handleScroll('#contact')}
            variant="outline"
            size="lg"
            className="btn-glass font-display font-semibold tracking-wide px-8 py-6 text-base text-gold border-gold/30 hover:bg-gold/10 hover:border-gold/50"
          >
            GET A FREE QUOTE
          </Button>
        </motion.div>

        {/* Stats mini bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {[
            { value: '25+', label: 'Years Experience' },
            { value: '150+', label: 'Projects Completed' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-bold text-2xl sm:text-3xl text-gradient-gold">{stat.value}</div>
              <div className="text-xs sm:text-sm text-text-secondary mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-text-secondary/50 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-gold/60" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent z-[2]" />
    </section>
  );
}
