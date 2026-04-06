'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Play, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-2 to-dark" />
        <div className="absolute inset-0 dot-pattern opacity-30" />
        {/* Decorative gradient orb */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-0 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 transition-all duration-700 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-xs font-medium text-white/70 uppercase tracking-wider">
                25+ Yıl Deneyim
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1
                className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight transition-all duration-700 delay-100 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Hayallerinizi{' '}
                <span className="relative">
                  <span className="text-gradient">İnşa</span>
                  <span className="text-accent"> Ediyoruz</span>
                </span>
              </h1>
              <p
                className={`text-base sm:text-lg text-white/50 max-w-lg leading-relaxed transition-all duration-700 delay-200 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Profesyonel ekibimiz ve modern teknolojilerimizle, hayalinizdeki yapının her detayını
                mükemmelleştiriyoruz. Kaliteden ödün vermeden, zamanında teslim.
              </p>
            </div>

            {/* Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              <a
                href="#contact"
                className="btn-shine magnetic inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-lg text-sm font-semibold shadow-accent hover:bg-accent-dark transition-colors duration-300"
              >
                Ücretsiz Danışmanlık
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-lg text-sm font-semibold hover:bg-white/10 transition-all duration-300"
              >
                <Play className="w-4 h-4" />
                Projelerimiz
              </a>
            </div>

            {/* Mini stats */}
            <div
              className={`flex gap-8 sm:gap-12 pt-4 transition-all duration-700 delay-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            >
              {[
                { value: '500+', label: 'Tamamlanan Proje' },
                { value: '98%', label: 'Müşteri Memnuniyeti' },
                { value: '25+', label: 'Yıllık Deneyim' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/40 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div
            className={`hidden lg:block relative transition-all duration-1000 delay-300 ${
              visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              {/* Main card */}
              <div className="border-gradient rounded-2xl overflow-hidden shadow-2xl">
                <div className="bg-white p-1">
                  <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-surface to-muted relative overflow-hidden">
                    {/* Construction illustration */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-4">
                        <div className="w-24 h-24 mx-auto bg-accent/10 rounded-2xl flex items-center justify-center float-slow">
                          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-accent">
                            <path d="M2 20H22M5 20V8L12 3L19 8V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M9 20V14H15V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M3 12H6M18 12H21M12 3V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <p className="text-sm font-medium text-muted-foreground">Premium Yapılar</p>
                      </div>
                    </div>
                    {/* Grid pattern overlay */}
                    <div className="absolute inset-0 grid-pattern opacity-50" />
                  </div>
                </div>
              </div>

              {/* Floating badge 1 */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-premium p-4 float-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-green-600">
                      <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Tamamlandı</p>
                    <p className="text-[10px] text-muted-foreground">Bu Ay: 3 Proje</p>
                  </div>
                </div>
              </div>

              {/* Floating badge 2 */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-premium p-4 float-slow" style={{ animationDelay: '2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-light rounded-lg flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">4.9/5.0</p>
                    <p className="text-[10px] text-muted-foreground">Müşteri Puanı</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/30 hover:text-white/60 transition-colors animate-bounce"
        aria-label="Aşağı kaydır"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  )
}
