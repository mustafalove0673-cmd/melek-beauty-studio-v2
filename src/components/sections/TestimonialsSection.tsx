'use client'

import { useEffect, useRef, useState } from 'react'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmet Yılmaz',
    role: 'Yatırımcı, Yılmaz Holding',
    text: 'Structura ile 3 büyük projede çalıştık. Her seferinde kaliteden ve zamanında teslimattan ödün vermediler. Profesyonel yaklaşımları için teşekkürler.',
    rating: 5,
    initials: 'AY',
  },
  {
    name: 'Elif Kaya',
    role: 'Villa Sahibi, Bodrum',
    text: 'Hayalimizdeki villayı birlikte tasarladık. Mimarlık ekibinin yaratıcılığı ve inşaat ekibinin hassasiyeti mükemmeldi. Kesinlikle tavsiye ediyorum.',
    rating: 5,
    initials: 'EK',
  },
  {
    name: 'Mehmet Demir',
    role: 'Genel Müdür, Demir Lojistik',
    text: '30.000m² lojistik merkezimizi 8 ayda teslim ettiler. Bütçe ve zaman açısından en iyi deneyimimizdi. Structura gerçekten güvenilir.',
    rating: 5,
    initials: 'MD',
  },
]

export default function TestimonialsSection() {
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
    <section ref={ref} className="relative py-24 lg:py-32 bg-surface overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Müşteri Yorumları
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Müşterilerimiz{' '}
            <span className="text-gradient">Ne Diyor?</span>
          </h2>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`card-tilt relative p-8 rounded-xl bg-white border border-border/50 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-accent/15 mb-4" />

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.text}</p>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-xs font-bold text-accent">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
