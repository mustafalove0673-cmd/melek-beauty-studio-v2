'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, suffix: '+', label: 'Tamamlanan Proje', desc: 'Konut ve ticari yapılar' },
  { value: 25, suffix: '+', label: 'Yıllık Deneyim', desc: 'Sektörde köklü geçmiş' },
  { value: 98, suffix: '%', label: 'Müşteri Memnuniyeti', desc: 'Referanslarımızla kanıtlanmış' },
  { value: 200, suffix: '+', label: 'Profesyonel Ekip', desc: 'Mühendis ve mimar kadrosu' },
]

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime: number
    let animFrame: number
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) animFrame = requestAnimationFrame(step)
    }
    animFrame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animFrame)
  }, [target, duration, start])
  return count
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-20 lg:py-28 bg-dark overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/8 rounded-full blur-[150px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, i) => {
            const count = useCountUp(stat.value, 2200, visible)
            return (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
                  {count}
                  <span className="text-accent">{stat.suffix}</span>
                </div>
                <div className="text-sm font-semibold text-white/80 mb-1">{stat.label}</div>
                <div className="text-xs text-white/40">{stat.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
