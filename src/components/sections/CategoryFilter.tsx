'use client'

import { motion } from 'framer-motion'
import { categories } from '@/lib/video-data'

interface Props {
  active: string
  onChange: (cat: string) => void
}

export default function CategoryFilter({ active, onChange }: Props) {
  return (
    <section id="categories" className="py-16 md:py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-3">
          Kategoriler
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-lg">
          İlgi alanına göre videoları filtrele ve keşfet.
        </p>
      </motion.div>

      <div className="flex flex-wrap gap-3">
        {categories.map((cat, i) => {
          const isActive = active === cat.name
          return (
            <motion.button
              key={cat.name}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onChange(cat.name)}
              className={`relative flex items-center gap-2.5 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${
                isActive
                  ? 'bg-accent text-background shadow-lg shadow-accent/20'
                  : 'bg-muted/50 text-muted-foreground border border-border hover:text-foreground hover:border-accent/30'
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span>{cat.name}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                isActive ? 'bg-background/20 text-background' : 'bg-background/50 text-muted-foreground'
              }`}>
                {cat.count}
              </span>
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-xl bg-accent -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          )
        })}
      </div>
    </section>
  )
}
