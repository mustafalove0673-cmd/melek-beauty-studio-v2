'use client'

import { useEffect, useRef, useState } from 'react'
import { Award, Users, Target, Shield } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Ödüllü Tasarım',
    desc: 'Uluslararası mimarlık ödülleri ile taçlandırılan projeler üretiyoruz.',
  },
  {
    icon: Users,
    title: 'Deneyimli Ekip',
    desc: 'Her biri alanında uzman, 200+ profesyonelden oluşan kadromuzla hizmetinizdeyiz.',
  },
  {
    icon: Target,
    title: 'Zamanında Teslim',
    desc: 'Projelerimizin %97\'sini belirlenen takvime uygun olarak teslim ediyoruz.',
  },
  {
    icon: Shield,
    title: 'Garanti & Destek',
    desc: 'Tüm projelerimizde 10 yıl yapı garanti ve sürekli teknik destek sunuyoruz.',
  },
]

export default function AboutSection() {
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
    <section id="about" ref={ref} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Hakkımızda
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="line-divider">25 Yılı Aşan</span>
            <br />Mücadele ve Başarı
          </h2>
          <p
            className={`mt-6 text-muted-foreground text-base lg:text-lg leading-relaxed transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            1999 yılından bu yana Türkiye'nin dört bir yanında yaşam alanları ve ticari yapılar
            inşa ediyoruz. Kalite, güvenilirlik ve inovasyon ilkelerimizle sektörde fark yaratıyoruz.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`card-tilt group p-6 rounded-xl bg-surface border border-border/50 hover:border-accent/20 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:shadow-accent transition-all duration-300">
                <f.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
