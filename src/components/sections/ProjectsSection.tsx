'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Merkez Tower',
    category: 'Karma Yapı',
    location: 'İstanbul, Levent',
    year: '2024',
    color: 'from-amber-900/90 to-stone-900/90',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white/80">
        <rect x="4" y="2" width="16" height="20" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 22V18H15V22" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 6H15M9 10H15M9 14H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Vista Residence',
    category: 'Konut',
    location: 'Bodrum, Yalıkavak',
    year: '2024',
    color: 'from-stone-800/90 to-zinc-900/90',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white/80">
        <path d="M3 21H21M5 21V8L12 3L19 8V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 21V14H15V21" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    title: 'Park Plaza AVM',
    category: 'Ticari',
    location: 'Ankara, Çankaya',
    year: '2023',
    color: 'from-zinc-800/90 to-neutral-900/90',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white/80">
        <path d="M3 21H21M3 10H21M5 10V21M9 10V21M13 10V21M17 10V21M6 4H18V10H6V4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Lojistik Merkez',
    category: 'Endüstriyel',
    location: 'Kocaeli, Gebze',
    year: '2023',
    color: 'from-slate-800/90 to-gray-900/90',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-white/80">
        <path d="M2 20H22M4 20V10L10 6H14L20 10V20M8 20V16H16V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

export default function ProjectsSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={ref} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <span
              className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              Projeler
            </span>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <span className="line-divider">Referans</span> Projelerimiz
            </h2>
          </div>
          <a
            href="#contact"
            className={`inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent-dark transition-colors group transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Tüm Projeler
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Project cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              onMouseEnter={() => setActiveIndex(i)}
              className={`card-tilt group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 150}ms` }}
            >
              {/* Card bg */}
              <div className={`aspect-[16/10] bg-gradient-to-br ${p.color} relative`}>
                <div className="absolute inset-0 dot-pattern opacity-20" />

                {/* Icon */}
                <div className="absolute top-6 left-6 float-slow" style={{ animationDelay: `${i * 1}s` }}>
                  {p.icon}
                </div>

                {/* Bottom info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/50 px-2 py-0.5 rounded-full border border-white/10">
                          {p.category}
                        </span>
                        <span className="text-[10px] text-white/40">{p.year}</span>
                      </div>
                      <h3 className="text-xl lg:text-2xl font-bold text-white">{p.title}</h3>
                      <p className="text-sm text-white/50 mt-1">{p.location}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
