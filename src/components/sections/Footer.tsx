'use client'

import { Phone, Mail, MapPin, ArrowUp } from 'lucide-react'

const footerLinks = [
  {
    title: 'Hizmetler',
    links: ['Konut Yapımı', 'Ticari Yapılar', 'Dekorasyon', 'Mimari Tasarım', 'Yenileme'],
  },
  {
    title: 'Şirket',
    links: ['Hakkımızda', 'Projeler', 'Kariyer', 'Blog', 'İletişim'],
  },
  {
    title: 'Destek',
    links: ['SSS', 'Gizlilik Politikası', 'Kullanım Şartları', 'KVKK'],
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-border/30 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <span className="font-heading font-bold text-primary-foreground text-lg">N</span>
              </div>
              <div>
                <span className="font-heading font-bold text-base text-foreground">NOVA</span>
                <span className="text-muted-foreground text-xs ml-1.5">YAPI</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              2004&apos;ten bu yana premium inşaat ve mimari çözümlerle
              hayallere hayat veriyoruz.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +90 312 000 00 00
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@novayapi.com.tr
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                Ankara, Türkiye
              </div>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="font-heading font-semibold text-sm mb-4">{group.title}</h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NOVA Yapı. Tüm hakları saklıdır.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
          >
            <ArrowUp className="w-4 h-4 text-primary" />
          </button>
        </div>
      </div>
    </footer>
  )
}
