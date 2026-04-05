'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Instagram } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';

const contactInfo = [
  { icon: MapPin, key: 'address' as const, href: '#' },
  { icon: Phone, key: 'phone' as const, href: 'tel:+905551234567' },
  { icon: Clock, key: 'hours' as const, href: '#' },
  { icon: Mail, key: 'email' as const, href: 'mailto:info@melekyuksel.com' },
];

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { language } = useLanguageStore();
  const t = translations[language];

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 30 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { delay, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative section-padding overflow-hidden bg-gradient-dark"
    >
      {/* Background orbs */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body mb-4 block"
            {...fadeIn(0.1)}
          >
            {language === 'tr' ? 'Bize Ulaşın' : 'Get in Touch'}
          </motion.span>
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream"
            {...fadeIn(0.2)}
          >
            {t.contact.title}
          </motion.h2>
          <motion.div
            className="w-16 h-[1px] bg-gradient-to-r from-rose/40 to-gold/40 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Cards */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              const labelKey = `${item.key}Label` as keyof typeof t.contact;
              return (
                <motion.a
                  key={i}
                  href={item.href}
                  {...fadeIn(0.3 + i * 0.1)}
                  className="group flex items-center gap-5 p-5 glass rounded-xl hover:bg-white/[0.06] transition-all duration-300"
                  whileHover={{ x: 8, scale: 1.01 }}
                >
                  <div className="w-12 h-12 rounded-xl glass-rose flex items-center justify-center flex-shrink-0 group-hover:bg-rose/20 transition-colors duration-300">
                    <Icon size={20} className="text-rose-light/70 group-hover:text-rose-light transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-cream/30 font-body mb-1">
                      {t.contact[labelKey]}
                    </div>
                    <div className="text-cream/80 font-body text-sm md:text-base">
                      {t.contact[item.key]}
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Social Links */}
            <motion.div
              {...fadeIn(0.7)}
              className="flex gap-3 pt-4"
            >
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-cream/50 hover:text-rose hover:bg-rose/10 hover:border-rose/20 transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/905551234567"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl glass flex items-center justify-center text-cream/50 hover:text-green-400 hover:bg-green-400/10 hover:border-green-400/20 transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.94 9.94 0 01-5.39-1.587l-.332-.213-2.791.936.936-2.791-.213-.332A9.94 9.94 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Map Placeholder */}
          <motion.div
            className="relative aspect-[4/3] rounded-2xl overflow-hidden glass"
            {...fadeIn(0.4)}
          >
            <div className="absolute inset-0 bg-dark-elevated flex flex-col items-center justify-center">
              {/* Decorative map-like pattern */}
              <div className="relative w-full h-full">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] border border-cream/20 rounded-lg" />
                  <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] border border-gold/20 rounded-lg rotate-12" />
                  <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] border border-rose/20 rounded-lg -rotate-6" />
                </div>
                {/* Grid dots */}
                <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-8 p-8 opacity-10">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-cream rounded-full" />
                  ))}
                </div>
                {/* Center pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <motion.div
                    className="animate-bounce"
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin size={32} className="text-rose" />
                  </motion.div>
                  <div className="mt-2 px-3 py-1 glass-strong rounded-full">
                    <span className="text-xs text-cream/60 font-body">Pursaklar, Ankara</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
