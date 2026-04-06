'use client'

import { useEffect, useRef, useState } from 'react'

const brands = [
  'Siemens', 'Dyson', 'Rönesans', 'Enka', 'Limak', 'GAP İnşaat',
  'Turkcell', 'Arçelik', 'Vestel', 'Kales', 'Yapı Kredi', 'Halkbank',
]

export default function BrandsSection() {
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
    <section ref={ref} className="relative py-16 lg:py-20 bg-surface overflow-hidden border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p
          className={`text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-10 transition-all duration-700 ${
            visible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Güvendikleri markalar bize güveniyor
        </p>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          <div className={`flex transition-opacity duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="flex shrink-0 items-center gap-12 marquee">
              {[...brands, ...brands].map((brand, i) => (
                <span
                  key={`${brand}-${i}`}
                  className="text-lg sm:text-xl font-bold text-muted-foreground/40 whitespace-nowrap select-none hover:text-accent/60 transition-colors duration-300"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
          {/* Fade edges */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-surface to-transparent pointer-events-none z-10" />
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-surface to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  )
}
