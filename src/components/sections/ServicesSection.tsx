'use client'

import { useEffect, useRef, useState } from 'react'
import { Building2, Home, Warehouse, Ruler, Hammer, Paintbrush, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Karma Yapılar',
    desc: 'AVM, ofis binası ve ticari yapılar için modern çözümler sunuyoruz.',
    tag: 'Popüler',
  },
  {
    icon: Home,
    title: 'Konut Projeleri',
    desc: 'Villa, apartman ve rezidans projelerinde hayalinizdeki evi inşa ediyoruz.',
    tag: null,
  },
  {
    icon: Warehouse,
    title: 'Endüstriyel Yapılar',
    desc: 'Fabrika, depo ve lojistik merkezleri için sağlam yapılar.',
    tag: null,
  },
  {
    icon: Ruler,
    title: 'Mimarlık Tasarım',
    desc: 'İşlevsel ve estetik mimari tasarım hizmeti veriyoruz.',
    tag: null,
  },
  {
    icon: Hammer,
    title: 'Yapı Restorasyon',
    desc: 'Tarihi ve eski yapıları modern standartlara uygun yeniliyor.',
    tag: null,
  },
  {
    icon: Paintbrush,
    title: 'İç Tasarım',
    desc: 'Mekanları yaşama ve çalışma alanına dönüştürüyoruz.',
    tag: 'Yeni',
  },
]

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Hizmetlerimiz
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Kapsamlı İnşaat{' '}
            <span className="text-gradient">Çözümleri</span>
          </h2>
          <p
            className={`mt-4 text-muted-foreground text-base lg:text-lg leading-relaxed transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Projeyi hayalden gerçeğe dönüştürecek her adımda yanınızdayız.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`card-tilt group relative p-8 rounded-xl bg-white border border-border/50 hover:border-accent/20 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              {/* Tag */}
              {s.tag && (
                <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-accent/10 text-accent">
                  {s.tag}
                </span>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-surface rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent group-hover:shadow-accent transition-all duration-300">
                <s.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>

              {/* Link */}
              <div className="flex items-center gap-1.5 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span>Detaylar</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
