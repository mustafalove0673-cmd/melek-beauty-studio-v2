'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { MapPin, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Vista Residence',
    category: 'Konut',
    location: 'İstanbul, Beykoz',
    desc: 'Panoramik boğaz manzaralı 24 villa luxurious site projesi.',
    image: '/images/project-1.png',
  },
  {
    title: 'Nova Tower',
    category: 'Ticari',
    location: 'Ankara, Çankaya',
    desc: '32 katlı modern ofis binası, LEED sertifikalı yeşil bina.',
    image: '/images/project-2.png',
  },
  {
    title: 'Zephyr Villas',
    category: 'Villa',
    location: 'Bodrum, Yalıkavak',
    desc: 'Ege mimarisinden ilham alan özel tasarım havuzlu villa kompleksi.',
    image: '/images/project-3.png',
  },
  {
    title: 'Meridian Mall',
    category: 'Ticari',
    location: 'İzmir, Karşıyaka',
    desc: '185 mağazalı, açık hava konseptli modern alışveriş merkezi.',
    image: '/images/project-4.png',
  },
  {
    title: 'Cedar Park Evleri',
    category: 'Site',
    location: 'Antalya, Konyaaltı',
    desc: 'Doğa ile iç içe, akıllı ev teknolojili 120 konutluk site.',
    image: '/images/project-5.png',
  },
  {
    title: 'Atlas Plaza',
    category: 'Ofis',
    location: 'İstanbul, Maslak',
    desc: 'A级 ofis standardında, teknoloji altyapılı iş merkezi.',
    image: '/images/project-6.png',
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-3 block">Portföy</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Öne Çıkan <span className="gradient-text">Projeler</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Her biri özenle tasarlanmış ve kusursuzca inşa edilmiş projelerimizi keşfedin.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="group relative bg-card border border-border/40 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 cursor-pointer"
            >
              {/* Image Area */}
              <div className="relative h-52 sm:h-56 overflow-hidden bg-muted">
                <div
                  className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${
                    hovered === i ? 'scale-110' : 'scale-100'
                  }`}
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-medium bg-primary/90 text-primary-foreground px-3 py-1.5 rounded-lg">
                    {project.category}
                  </span>
                </div>
                {/* Arrow */}
                <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
                  hovered === i ? 'bg-primary/90 rotate-45' : 'opacity-0'
                }`}>
                  <ArrowUpRight className="w-5 h-5 text-primary-foreground" />
                </div>
                {/* Location */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/80">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-xs">{project.location}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
