'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    name: 'The Azure Residence',
    location: 'Bebek, Istanbul',
    description: 'A 650m² waterfront villa with infinity pool and panoramic Bosphorus views.',
    area: '650 m²',
    gradient: 'from-steel-blue/40 to-gold/20',
  },
  {
    name: 'Golden Horizon Villa',
    location: 'Yalova, Turkey',
    description: 'Elegant 480m² retreat featuring a private spa, wine cellar, and landscaped gardens.',
    area: '480 m²',
    gradient: 'from-gold/40 to-steel-blue/20',
  },
  {
    name: 'Sapphire Estate',
    location: 'Bodrum, Turkey',
    description: 'A stunning 900m² cliffside estate with tiered terraces and Aegean sea panorama.',
    area: '900 m²',
    gradient: 'from-steel-blue/50 to-gold/30',
  },
  {
    name: 'Emerald Oasis',
    location: 'Antalya, Turkey',
    description: 'Contemporary 520m² villa blending modern design with Mediterranean charm.',
    area: '520 m²',
    gradient: 'from-gold/30 to-steel-blue/40',
  },
  {
    name: 'Platinum Manor',
    location: 'Şişli, Istanbul',
    description: 'Urban luxury 380m² residence with rooftop terrace and smart home integration.',
    area: '380 m²',
    gradient: 'from-steel-blue/35 to-gold/25',
  },
  {
    name: 'Coral Bay Villa',
    location: 'Çeşme, Turkey',
    description: 'A 720m² beachfront masterpiece with private beach access and outdoor cinema.',
    area: '720 m²',
    gradient: 'from-gold/45 to-steel-blue/15',
  },
];

export default function ShowcaseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <section id="showcase" className="section-padding relative overflow-hidden" ref={containerRef}>
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/3 blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-steel-blue/3 blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-body text-steel-blue tracking-[0.3em] uppercase mb-4">
            Our Portfolio
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide text-text-primary mb-4">
            Featured <span className="text-gradient-blue">Projects</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-gold to-steel-blue mx-auto mt-4" />
          <p className="font-body text-text-secondary mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            Explore our portfolio of meticulously crafted villas, each a testament
            to our commitment to excellence.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scrolling gallery */}
      <motion.div
        style={{ x }}
        className="flex gap-6 px-4 sm:px-6 lg:px-8 pb-4 cursor-grab"
      >
        {/* Spacer */}
        <div className="flex-shrink-0 w-0 lg:w-[calc((100vw-1280px)/2)]" />

        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            className="flex-shrink-0 w-[320px] sm:w-[380px] lg:w-[420px] group"
          >
            <div className="glass rounded-2xl overflow-hidden card-3d glow-border">
              {/* Image placeholder */}
              <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                {/* Blueprint pattern overlay */}
                <div className="absolute inset-0 bg-blueprint opacity-30" />

                {/* Architectural wireframe decoration */}
                <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 420 224" fill="none">
                  <rect x="40" y="30" width="340" height="164" stroke="#C5A55A" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="210" y1="30" x2="210" y2="194" stroke="#4A90D9" strokeWidth="0.5" strokeDasharray="2 2" />
                  <line x1="40" y1="112" x2="380" y2="112" stroke="#4A90D9" strokeWidth="0.5" strokeDasharray="2 2" />
                  <circle cx="210" cy="112" r="30" stroke="#C5A55A" strokeWidth="0.5" />
                </svg>

                {/* Project name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent">
                  <h3 className="font-display font-bold text-xl text-white">{project.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-white/70 mt-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                </div>

                {/* Area badge */}
                <div className="absolute top-4 right-4 glass-gold rounded-lg px-3 py-1.5">
                  <span className="text-xs font-display font-semibold text-gold">{project.area}</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-5">
                  <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5 text-gold" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="p-5">
                <p className="font-body text-sm text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Spacer */}
        <div className="flex-shrink-0 w-8" />
      </motion.div>
    </section>
  );
}
