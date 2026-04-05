'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';
import Image from 'next/image';

const galleryImages = [
  { src: '/images/gallery-1.png', alt: 'Styled Hair', span: 'md:col-span-2 md:row-span-2' },
  { src: '/images/gallery-2.png', alt: 'Salon Interior', span: '' },
  { src: '/images/gallery-3.png', alt: 'Ombre Result', span: '' },
  { src: '/images/gallery-4.png', alt: 'Skincare', span: 'md:col-span-2' },
  { src: '/images/gallery-5.png', alt: 'Blowout', span: '' },
  { src: '/images/service-haircut.png', alt: 'Haircut', span: '' },
  { src: '/images/service-ombre.png', alt: 'Color Work', span: '' },
  { src: '/images/service-beauty.png', alt: 'Beauty Treatment', span: 'md:col-span-2' },
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });
  const { language } = useLanguageStore();

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [lightboxOpen]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (dir: number) => {
    setLightboxIndex((prev) => {
      let next = prev + dir;
      if (next < 0) next = galleryImages.length - 1;
      if (next >= galleryImages.length) next = 0;
      return next;
    });
  };

  return (
    <section
      ref={sectionRef}
      id="gallery"
      className="relative section-padding overflow-hidden bg-dark"
    >
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-[600px] h-[600px] bg-rose/3 rounded-full blur-[200px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
          >
            {translations[language].gallery.title}
          </motion.span>
          <motion.h2
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {language === 'tr' ? 'İşlerimizden' : 'Our'}{' '}
            <span className="text-gradient-rose italic font-light">{language === 'tr' ? 'Örnekler' : 'Portfolio'}</span>
          </motion.h2>
          <motion.div
            className="w-16 h-[1px] bg-gradient-to-r from-rose/40 to-gold/40 mx-auto mt-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          />
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px]">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              className={`relative rounded-xl overflow-hidden cursor-pointer group ${img.span}`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              onClick={() => openLightbox(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/40 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full glass-strong flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cream">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-xl border border-transparent group-hover:border-rose/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-xl flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-cream/70 hover:text-cream transition-colors"
            >
              <X size={20} />
            </button>

            {/* Navigation */}
            <button
              onClick={() => navigateLightbox(-1)}
              className="absolute left-4 md:left-8 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-cream/70 hover:text-cream transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => navigateLightbox(1)}
              className="absolute right-4 md:right-8 z-50 w-12 h-12 rounded-full glass flex items-center justify-center text-cream/70 hover:text-cream transition-colors"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              className="relative w-[90vw] h-[70vh] max-w-5xl rounded-xl overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-cream/40 font-body">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
