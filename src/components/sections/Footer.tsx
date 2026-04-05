'use client'

import { motion } from 'framer-motion'
import { Play, Github, ExternalLink, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-accent flex items-center justify-center">
                <Play className="w-4 h-4 text-background fill-background" />
              </div>
              <span className="font-bold text-lg tracking-tight">
                VİDEO<span className="text-accent">.</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Teknoloji, yazılım ve yapay zeka videolarını tek bir yerde keşfedin.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-semibold text-sm mb-4 text-foreground">Hızlı Bağlantılar</h4>
            <div className="space-y-2.5">
              {['Videolar', 'Kategoriler', 'İstatistikler', 'Popüler'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}`}
                  className="block text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="font-semibold text-sm mb-4 text-foreground">Kaynaklar</h4>
            <div className="space-y-2.5">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href="https://instagram.com/selahattin.unlu/"
                target="_blank"
                rel="noopener"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Instagram
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2026 VİDEO. Tüm hakları saklıdır.
          </p>
          <p className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Sevildiyle yapıldı</span>
            <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
          </p>
        </div>
      </div>
    </footer>
  )
}
