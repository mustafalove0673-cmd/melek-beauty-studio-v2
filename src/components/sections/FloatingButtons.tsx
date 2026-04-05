'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <motion.a
        href="https://wa.me/905551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500/90 backdrop-blur-md flex items-center justify-center text-white shadow-lg shadow-green-500/20 hover:bg-green-500 transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>

      {/* Phone */}
      <motion.a
        href="tel:+905551234567"
        className="w-14 h-14 rounded-full glass-strong flex items-center justify-center text-cream/70 hover:text-cream hover:bg-white/10 transition-all duration-300"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Phone"
      >
        <Phone size={22} />
      </motion.a>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-14 h-14 rounded-full glass-strong flex items-center justify-center text-cream/50 hover:text-cream hover:bg-white/10 transition-all duration-300"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
