'use client'

import { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'

const contactInfo = [
  { icon: MapPin, label: 'Adres', value: 'Levent Mah. İnşaat Cad. No:42, İstanbul' },
  { icon: Phone, label: 'Telefon', value: '+90 212 555 00 00' },
  { icon: Mail, label: 'E-posta', value: 'info@structura.com.tr' },
  { icon: Clock, label: 'Çalışma Saatleri', value: 'Pzt - Cmt: 08:00 - 18:00' },
]

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            İletişim
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Projenizi{' '}
            <span className="text-gradient">Konuşalım</span>
          </h2>
          <p
            className={`mt-4 text-muted-foreground text-base lg:text-lg transition-all duration-700 delay-200 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            Ücretsiz danışmanlık için bize ulaşın.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((info, i) => (
              <div
                key={info.label}
                className={`flex items-start gap-4 p-4 rounded-xl hover:bg-surface transition-all duration-500 ${
                  visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${300 + i * 100}ms` }}
              >
                <div className="w-11 h-11 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">{info.label}</p>
                  <p className="text-sm font-medium text-foreground">{info.value}</p>
                </div>
              </div>
            ))}

            {/* Map placeholder */}
            <div
              className={`mt-8 aspect-video rounded-xl bg-surface border border-border/50 flex items-center justify-center overflow-hidden transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '700ms' }}
            >
              <div className="text-center space-y-2">
                <MapPin className="w-8 h-8 text-accent/30 mx-auto" />
                <p className="text-xs text-muted-foreground">İstanbul, Türkiye</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            className={`lg:col-span-3 transition-all duration-700 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="border-gradient rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Ad Soyad</label>
                    <input
                      type="text"
                      placeholder="Adınız Soyadınız"
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Telefon</label>
                    <input
                      type="tel"
                      placeholder="+90 5XX XXX XX XX"
                      className="w-full px-4 py-3 rounded-lg bg-surface border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">E-posta</label>
                  <input
                    type="email"
                    placeholder="ornek@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Proje Tipi</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-surface border border-border/50 text-foreground text-sm focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all appearance-none">
                    <option value="">Seçiniz...</option>
                    <option value="residential">Konut Projesi</option>
                    <option value="commercial">Ticari Yapı</option>
                    <option value="industrial">Endüstriyel Yapı</option>
                    <option value="renovation">Restorasyon</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Mesaj</label>
                  <textarea
                    rows={4}
                    placeholder="Projeniz hakkında kısaca bilgi verin..."
                    className="w-full px-4 py-3 rounded-lg bg-surface border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-accent/40 focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className={`btn-shine magnetic w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                    submitted
                      ? 'bg-green-600 text-white'
                      : 'bg-accent text-white shadow-accent hover:bg-accent-dark'
                  }`}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
