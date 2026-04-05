'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Send, Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react'

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
    <span ref={ref} className="font-heading text-3xl sm:text-4xl font-bold text-primary">
      {count}{suffix}
    </span>
  )
}

const stats = [
  { number: 15, suffix: 'K+', label: 'm² İnşaat Alanı' },
  { number: 8, suffix: '+', label: 'Şehir' },
  { number: 100, suffix: '%', label: 'Zamanında Teslim' },
  { number: 24, suffix: '/7', label: 'Destek' },
]

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-3 block">İletişim</span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Projenizi <span className="gradient-text">Konuşalım</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Hayalinizdeki projeyi birlikte planlayalım. Ücretsiz keşif ve teklif için bize ulaşın.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-4 bg-card border border-border/40 rounded-xl">
              <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              <p className="text-xs text-muted-foreground mt-1.5">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-5">
              {[
                { icon: MapPin, label: 'Adres', value: 'Atatürk Cad. No:123, Çankaya, Ankara' },
                { icon: Phone, label: 'Telefon', value: '+90 312 000 00 00' },
                { icon: Mail, label: 'Email', value: 'info@novayapi.com.tr' },
                { icon: Clock, label: 'Çalışma Saatleri', value: 'Pazartesi - Cumartesi: 09:00 - 18:00' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-0.5">{item.label}</p>
                    <p className="text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="p-6 md:p-8 bg-card border border-border/40 rounded-2xl space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Ad Soyad</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-muted/50 border border-border/40 rounded-xl text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1.5 block">Telefon</label>
                  <input
                    type="tel"
                    placeholder="+90 555 000 00 00"
                    className="w-full px-4 py-3 bg-muted/50 border border-border/40 rounded-xl text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  placeholder="info@example.com"
                  className="w-full px-4 py-3 bg-muted/50 border border-border/40 rounded-xl text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground mb-1.5 block">Mesaj</label>
                <textarea
                  rows={4}
                  placeholder="Projeniz hakkında kısaca bilgi verin..."
                  className="w-full px-4 py-3 bg-muted/50 border border-border/40 rounded-xl text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-primary-foreground rounded-xl font-heading font-semibold text-sm hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Gönderildi!
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
