'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Alexander Müller',
    role: 'Villa Owner, Bodrum',
    text: 'NOVA exceeded every expectation. Our cliffside villa is an absolute masterpiece — the attention to detail, the materials, the craftsmanship. It\'s more than a home; it\'s a work of art.',
    rating: 5,
    project: 'Sapphire Estate',
  },
  {
    name: 'Sophia Chen',
    role: 'Investor, Istanbul',
    text: 'The team at NOVA delivered our Bebek villa ahead of schedule and under budget. Their transparent communication and dedication to quality made the entire process seamless.',
    rating: 5,
    project: 'The Azure Residence',
  },
  {
    name: 'James Worthington',
    role: 'Property Developer',
    text: 'We\'ve partnered with NOVA on multiple projects. Their ability to blend modern architecture with timeless elegance is unmatched. Truly the best in the business.',
    rating: 5,
    project: 'Golden Horizon Villa',
  },
  {
    name: 'Elif Yılmaz',
    role: 'Villa Owner, Antalya',
    text: 'From the first consultation to the final walkthrough, NOVA made our dream home a reality. The smart home integration and interior design are absolutely stunning.',
    rating: 5,
    project: 'Emerald Oasis',
  },
  {
    name: 'Marco Rossi',
    role: 'Interior Designer',
    text: 'Working with NOVA\'s construction team was a dream. They understood my design vision perfectly and executed it flawlessly. The quality of finishes is exceptional.',
    rating: 4,
    project: 'Platinum Manor',
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-steel-blue/3 blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-gold/3 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-body text-gold tracking-[0.3em] uppercase mb-4">
            Client Testimonials
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide text-text-primary mb-4">
            What Our <span className="text-gradient-gold">Clients Say</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-steel-blue to-gold mx-auto mt-4" />
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 glow-border card-3d group hover:bg-white/[0.03] transition-all duration-500"
            >
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-4 h-4 ${si < t.rating ? 'text-gold fill-gold' : 'text-text-secondary/30'}`}
                  />
                ))}
              </div>
              <div className="border-t border-white/5 pt-4">
                <div className="font-display font-semibold text-text-primary text-base">{t.name}</div>
                <div className="font-body text-xs text-text-secondary mt-0.5">{t.role}</div>
                <div className="text-xs text-gold/70 mt-1">{t.project}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="glass rounded-2xl p-6 glow-border"
              >
                <Quote className="w-8 h-8 text-gold/30 mb-4" />
                <p className="font-body text-sm text-text-secondary leading-relaxed mb-6">
                  &ldquo;{testimonials[current].text}&rdquo;
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      className={`w-4 h-4 ${si < testimonials[current].rating ? 'text-gold fill-gold' : 'text-text-secondary/30'}`}
                    />
                  ))}
                </div>
                <div className="border-t border-white/5 pt-4">
                  <div className="font-display font-semibold text-text-primary text-base">{testimonials[current].name}</div>
                  <div className="font-body text-xs text-text-secondary mt-0.5">{testimonials[current].role}</div>
                  <div className="text-xs text-gold/70 mt-1">{testimonials[current].project}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-gold w-6' : 'bg-white/20'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-text-secondary hover:text-gold transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
