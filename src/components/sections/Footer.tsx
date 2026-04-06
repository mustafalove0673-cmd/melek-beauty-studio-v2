'use client'

import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const footerLinks = {
  'Hizmetler': ['Karma Yapılar', 'Konut Projeleri', 'Endüstriyel', 'Mimarlık', 'Restorasyon', 'İç Tasarım'],
  'Şirket': ['Hakkımızda', 'Projeler', 'Kariyer', 'Blog', 'Basın'],
  'Destek': ['SSS', 'İletişim', 'Teklif Alın', 'Gizlilik Politikası', 'Kullanım Koşulları'],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark text-white overflow-hidden">
      {/* CTA band */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold">Projenize Başlamaya Hazır Mısınız?</h3>
              <p className="text-white/40 text-sm mt-2">Ücretsiz danışmanlık için hemen arayın.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+902125550000"
                className="inline-flex items-center gap-2 bg-accent text-white px-8 py-3.5 rounded-lg text-sm font-semibold shadow-accent hover:bg-accent-dark transition-colors"
              >
                <Phone className="w-4 h-4" />
                Hemen Arayın
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-3.5 rounded-lg text-sm font-semibold hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4" />
                Mesaj Gönderin
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#hero" className="flex items-center gap-2.5">
              <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-white">
                  <path d="M3 21H21M3 21V8L12 2L21 8V21M9 21V13H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight">STRUCTURA</span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              1999&apos;dan bu yana Türkiye genelinde kaliteli inşaat ve mimarlık hizmetleri sunuyoruz.
            </p>
            <div className="flex items-center gap-3 text-white/40 text-xs">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5" /> +90 212 555 00 00
              </span>
            </div>
            <div className="flex items-center gap-3 text-white/40 text-xs">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5" /> info@structura.com.tr
              </span>
            </div>
            <div className="flex items-center gap-3 text-white/40 text-xs">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Levent, İstanbul
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white/60 mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/35 hover:text-accent transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Structura İnşaat. Tüm hakları saklıdır.
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Yukarı çık"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
