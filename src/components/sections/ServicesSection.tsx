'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Home, Building, PaintBucket, Ruler, HardHat, Wrench } from 'lucide-react'

const services = [
  {
    icon: Building,
    title: 'Konut Yapımı',
    desc: 'Lüks villadan site projelerine, modern yaşam alanları tasarlıyor ve inşa ediyoruz.',
  },
  {
    icon: Home,
    title: 'Ticari Yapılar',
    desc: 'Ofis, AVM ve iş merkezi projelerinde fonksiyonel ve estetik çözümler sunuyoruz.',
  },
  {
    icon: PaintBucket,
    title: 'Dekorasyon',
    desc: 'İç mekan tasarımı ve dekorasyon hizmetleriyle mekanlarınızı dönüştürüyoruz.',
  },
  {
    icon: Ruler,
    title: 'Mimari Tasarım',
    desc: 'Ödüllü mimari tasarımla projelerinizi hayata geçiriyoruz.',
  },
  {
    icon: HardHat,
    title: 'Anahtar Teslim',
    desc: 'Tasarımdan teslimata kadar tüm süreçleri tek elden yönetiyoruz.',
  },
  {
    icon: Wrench,
    title: 'Yenileme',
    desc: 'Mevcut yapıların modernizasyonu ve güçlendirme hizmetleri veriyoruz.',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-24 md:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-3 block">Hizmetlerimiz</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Kaliteli <span className="gradient-text">Çözümler</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Her projede en yüksek standartları uygulayarak müşterilerimizin beklentilerini aşıyoruz.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="group relative p-6 bg-card border border-border/40 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
