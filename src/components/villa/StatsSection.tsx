'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Building2, Clock, Heart } from 'lucide-react';

const stats = [
  { icon: Clock, value: 25, suffix: '+', label: 'Years Experience', color: 'gold' },
  { icon: Building2, value: 150, suffix: '+', label: 'Projects Completed', color: 'steel-blue' },
  { icon: Award, value: 50, suffix: '+', label: 'Industry Awards', color: 'gold' },
  { icon: Heart, value: 98, suffix: '%', label: 'Client Satisfaction', color: 'steel-blue' },
];

function AnimatedCounter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const stepTime = Math.max(Math.floor(duration / value), 20);
    const step = Math.ceil(value / (duration / stepTime));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span className="font-display font-bold text-4xl sm:text-5xl md:text-6xl">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="stats" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-dark" />
      <div className="absolute inset-0 bg-blueprint animate-blueprint-grid" />

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 border border-gold/10 rounded-full animate-rotate-slow" />
      <div className="absolute bottom-10 right-10 w-32 h-32 border border-steel-blue/10 rounded-full animate-rotate-reverse-slow" />
      <div className="absolute top-1/2 left-1/4 w-1 h-16 bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
      <div className="absolute top-1/3 right-1/4 w-1 h-24 bg-gradient-to-b from-transparent via-steel-blue/20 to-transparent" />

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
            Why Choose NOVA
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide text-text-primary mb-4">
            Built on <span className="text-gradient-gold">Trust & Excellence</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-gold to-steel-blue mx-auto mt-4" />
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass rounded-2xl p-6 sm:p-8 text-center group hover:bg-white/[0.03] transition-all duration-500 glow-border"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl mx-auto mb-5 flex items-center justify-center transition-all duration-300 ${
                stat.color === 'gold'
                  ? 'bg-gold/10 text-gold group-hover:bg-gold/20'
                  : 'bg-steel-blue/10 text-steel-blue group-hover:bg-steel-blue/20'
              }`}>
                <stat.icon className="w-6 h-6" />
              </div>

              {/* Counter */}
              <div className={stat.color === 'gold' ? 'text-gradient-gold' : 'text-gradient-blue'}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>

              {/* Label */}
              <p className="font-body text-sm text-text-secondary mt-3">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
