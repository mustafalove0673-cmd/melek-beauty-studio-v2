'use client'

import { useEffect, useRef, useState } from 'react'
import { CheckCircle2 } from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Danışmanlık & Planlama',
    desc: 'İhtiyaçlarınızı dinler, projenizi en ince detayına kadar planlarız.',
  },
  {
    step: '02',
    title: 'Tasarım & Mimari',
    desc: 'Modern ve işlevsel tasarımlar oluşturur, onayınıza sunarız.',
  },
  {
    step: '03',
    title: 'İnşaat & İmalat',
    desc: 'Deneyimli ekibimizle kaliteli malzeme ve modern tekniklerle inşa ederiz.',
  },
  {
    step: '04',
    title: 'Teslim & Garanti',
    desc: 'Zamanında teslim ederiz ve 10 yıl yapı garantisi sunuyoruz.',
  },
]

export default function ProcessSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.15 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Sürecimiz
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            4 Adımda{' '}
            <span className="text-gradient">Hayal Gerçek</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`relative p-6 rounded-xl border border-border/50 hover:border-accent/20 bg-surface transition-all duration-700 group ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Step number */}
              <div className="text-4xl font-bold text-accent/10 mb-4 group-hover:text-accent/20 transition-colors">
                {s.step}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

              {/* Connector line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-accent/20 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
