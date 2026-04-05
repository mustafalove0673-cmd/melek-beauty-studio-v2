'use client';

import { motion } from 'framer-motion';
import { Home, Droplets, Paintbrush, TreePine, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: Home,
    title: 'Smart Home Integration',
    description: 'Cutting-edge home automation systems including lighting, climate control, security, and entertainment — all connected.',
    accent: 'steel-blue',
  },
  {
    icon: Droplets,
    title: 'Pool & Spa Design',
    description: 'Infinity pools, heated spas, and water features custom-designed to complement your villa\'s architecture.',
    accent: 'gold',
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description: 'World-class interior designers create bespoke living spaces that reflect your personal style and taste.',
    accent: 'steel-blue',
  },
  {
    icon: TreePine,
    title: 'Landscape Architecture',
    description: 'Expertly crafted outdoor environments with lush gardens, terraces, and outdoor entertainment areas.',
    accent: 'gold',
  },
  {
    icon: Shield,
    title: 'Security Systems',
    description: 'Comprehensive security solutions including surveillance, access control, and smart alarm systems.',
    accent: 'steel-blue',
  },
  {
    icon: Zap,
    title: 'Energy Efficiency',
    description: 'Sustainable building practices with solar panels, green insulation, and energy-efficient climate systems.',
    accent: 'gold',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Blueprint grid bg */}
      <div className="absolute inset-0 bg-blueprint animate-blueprint-grid" />

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
            What We Offer
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-wide text-text-primary mb-4">
            Premium <span className="text-gradient-gold">Villa Features</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-steel-blue to-gold mx-auto mt-4" />
          <p className="font-body text-text-secondary mt-6 max-w-2xl mx-auto text-base sm:text-lg">
            Every NOVA villa is equipped with world-class amenities and smart systems
            designed for the modern homeowner.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group glass rounded-2xl p-6 sm:p-8 cursor-pointer card-3d glow-border transition-all duration-500 hover:${
                feature.accent === 'gold' ? 'shadow-[0_0_40px_rgba(197,165,90,0.15)]' : 'shadow-[0_0_40px_rgba(74,144,217,0.15)]'
              }`}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 ${
                  feature.accent === 'gold'
                    ? 'bg-gold/10 text-gold group-hover:bg-gold/20 group-hover:shadow-[0_0_20px_rgba(197,165,90,0.3)]'
                    : 'bg-steel-blue/10 text-steel-blue group-hover:bg-steel-blue/20 group-hover:shadow-[0_0_20px_rgba(74,144,217,0.3)]'
                }`}
              >
                <feature.icon className="w-7 h-7" />
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-xl text-text-primary mb-3 group-hover:text-gradient-gold transition-all">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>

              {/* Bottom accent line */}
              <div className={`mt-6 h-[1px] w-0 group-hover:w-full transition-all duration-500 ${
                feature.accent === 'gold' ? 'bg-gradient-to-r from-gold to-transparent' : 'bg-gradient-to-r from-steel-blue to-transparent'
              }`} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
