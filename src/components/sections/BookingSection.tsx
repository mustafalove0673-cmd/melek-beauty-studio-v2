'use client';

import { useRef, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { MessageCircle, Phone, Calendar } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';

export default function BookingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { language } = useLanguageStore();
  const t = translations[language];
  const [hoveredBtn, setHoveredBtn] = useState<string | null>(null);

  // Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section
      ref={sectionRef}
      id="booking"
      className="relative section-padding overflow-hidden"
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-deep via-rose to-dark" />
        {/* Mesh pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,165,116,0.1),transparent_50%)]" />
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 border border-white/10 rounded-full animate-rotate-slow" />
        <div className="absolute bottom-[15%] right-[10%] w-24 h-24 border border-white/5 rounded-full animate-rotate-reverse-slow" />
        <div className="absolute top-[30%] right-[20%] w-2 h-2 bg-white/20 rounded-full animate-float" />
        <div className="absolute bottom-[30%] left-[15%] w-1.5 h-1.5 bg-gold/30 rounded-full animate-float-reverse" />
        <div className="absolute top-[60%] left-[50%] w-3 h-3 bg-white/10 rotate-45 animate-float-slow" />
      </div>

      {/* Noise texture */}
      <div className="absolute inset-0 z-[2] noise-overlay pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          className="mb-6 inline-flex"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.1, duration: 0.5, type: 'spring' }}
        >
          <div className="w-16 h-16 rounded-2xl glass-strong flex items-center justify-center">
            <Calendar size={28} className="text-cream/80" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-cream mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {t.booking.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-cream/60 font-body text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {t.booking.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/905551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            onMouseEnter={() => setHoveredBtn('whatsapp')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <div className="relative px-8 py-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-cream font-body text-sm tracking-wider uppercase flex items-center gap-3 transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_10px_40px_rgba(0,0,0,0.2)]">
              <MessageCircle size={18} className="text-green-400" />
              <span>{t.booking.cta}</span>
            </div>
            {hoveredBtn === 'whatsapp' && (
              <motion.div
                className="absolute -inset-1 rounded-full bg-green-400/10 blur-xl -z-10"
                layoutId="btn-glow"
              />
            )}
          </a>

          {/* Phone Button */}
          <a
            href="tel:+905551234567"
            className="group relative"
            onMouseEnter={() => setHoveredBtn('phone')}
            onMouseLeave={() => setHoveredBtn(null)}
          >
            <div className="relative px-8 py-4 bg-gold/15 backdrop-blur-md rounded-full border border-gold/30 text-cream font-body text-sm tracking-wider uppercase flex items-center gap-3 transition-all duration-300 hover:bg-gold/25 hover:border-gold/40 hover:shadow-[0_10px_40px_rgba(212,165,116,0.2)]">
              <Phone size={18} className="text-gold" />
              <span>{t.booking.phone}</span>
            </div>
            {hoveredBtn === 'phone' && (
              <motion.div
                className="absolute -inset-1 rounded-full bg-gold/10 blur-xl -z-10"
                layoutId="btn-glow"
              />
            )}
          </a>
        </motion.div>

        {/* Decorative bottom line */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="w-12 h-px bg-white/10" />
          <div className="w-2 h-2 rounded-full border border-white/20" />
          <div className="w-12 h-px bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}
