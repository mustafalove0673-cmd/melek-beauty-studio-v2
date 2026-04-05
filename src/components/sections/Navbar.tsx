'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';

const navLinks = [
  { href: '#hero', tr: 'Ana Sayfa', en: 'Home' },
  { href: '#about', tr: 'Hakkımızda', en: 'About' },
  { href: '#services', tr: 'Hizmetler', en: 'Services' },
  { href: '#gallery', tr: 'Galeri', en: 'Gallery' },
  { href: '#booking', tr: 'Randevu', en: 'Booking' },
  { href: '#contact', tr: 'İletişim', en: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { language, setLanguage } = useLanguageStore();
  const t = translations[language];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(l => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-strong py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}
            className="flex flex-col items-start group"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <span className="font-display text-xl md:text-2xl font-bold tracking-wide text-cream">
              Melek Yüksel
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.35em] uppercase text-gradient-gold font-body">
              Hair Beauty
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                className={`relative px-4 py-2 text-sm font-body tracking-wide transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-cream'
                    : 'text-cream/50 hover:text-cream/80'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                {language === 'tr' ? link.tr : link.en}
                {activeSection === link.href.slice(1) && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}

            {/* Language Toggle */}
            <motion.button
              onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
              className="ml-4 px-3 py-1.5 text-xs tracking-wider uppercase glass rounded-full text-cream/70 hover:text-cream hover:border-gold/30 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {language === 'tr' ? 'EN' : 'TR'}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
              className="px-3 py-1.5 text-xs tracking-wider uppercase glass rounded-full text-cream/70"
            >
              {language === 'tr' ? 'EN' : 'TR'}
            </button>
            <motion.button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative w-10 h-10 flex items-center justify-center text-cream"
              whileTap={{ scale: 0.9 }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl flex items-center justify-center lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-3xl font-display text-cream/80 hover:text-cream transition-colors"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  {language === 'tr' ? link.tr : link.en}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
