'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Target, Award } from 'lucide-react'

const stats = [
  { number: 250, suffix: '+', label: 'Tamamlanan Proje' },
  { number: 20, suffix: '+', label: 'Yıllık Deneyim' },
  { number: 98, suffix: '%', label: 'Müşteri Memnuniyeti' },
  { number: 50, suffix: '+', label: 'Uzman Kadro' },
]

const features = [
  {
    icon: Shield,
    title: 'Güvenilir Yapı',
    desc: 'En yüksek standartlarda malzeme ve işçilik ile güvenilir yapılar inşa ediyoruz.',
  },
  {
    icon: Target,
    title: 'Zamanında Teslim',
    desc: 'Projelerimizi söz verilen zamanda ve bütçede eksiksiz teslim ediyoruz.',
  },
  {
    icon: Award,
    title: 'Premium Kalite',
    desc: 'Her detayda mükemmellik odaklı çalışarak premium yaşam alanları yaratıyoruz.',
  },
]

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const stepTime = 20
    const steps = duration / stepTime
    const increment = end / steps

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [isInView, end])

  return (
    <span ref={ref} className="font-heading text-4xl md:text-5xl font-bold text-primary">
      {count}{suffix}
    </span>
  )
}

import { useState, useEffect } from 'react'

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-3 block">Hakkımızda</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Neden <span className="gradient-text">NOVA Yapı</span>?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            2004 yılından bu yana Türkiye genelinde premium yaşam ve çalışma alanları
            inşa ediyoruz. Kalite, güven ve estetiği bir arada sunuyoruz.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="group p-6 md:p-8 bg-card border border-border/40 rounded-2xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-8 bg-card border border-border/40 rounded-2xl"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
