'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { TrendingUp, Users, Star, GitBranch } from 'lucide-react'

const statsData = [
  { icon: TrendingUp, label: 'Toplam Beğeni', value: 4080, suffix: '+', color: 'text-accent' },
  { icon: Users, label: 'Takipçi', value: 14, suffix: 'K', color: 'text-emerald-400' },
  { icon: Star, label: 'En Yüksek Beğeni', value: 1212, suffix: '', color: 'text-rose-400' },
  { icon: GitBranch, label: 'GitHub Repo', value: 7, suffix: '', color: 'text-sky-400' },
]

function useCountUp(end: number, duration: number, inView: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const increment = end / (duration / 16)
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [end, duration, inView])
  return count
}

function StatCard({ stat, index }: { stat: typeof statsData[0]; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const count = useCountUp(stat.value, 2000, inView)
  const Icon = stat.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, borderColor: 'rgba(228, 161, 27, 0.3)' }}
      className="relative bg-card border border-border rounded-2xl p-6 md:p-8 transition-all duration-300 group overflow-hidden"
    >
      {/* BG Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-accent/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className={`w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center mb-4 ${stat.color}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="text-3xl md:text-4xl font-bold tracking-tight mb-1">
          {count.toLocaleString('tr-TR')}{stat.suffix}
        </div>
        <div className="text-sm text-muted-foreground">{stat.label}</div>
      </div>

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
        className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent origin-left"
      />
    </motion.div>
  )
}

export default function StatsSection() {
  return (
    <section id="stats" className="py-16 md:py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight mb-3">
          İstatistikler
        </h2>
        <p className="text-muted-foreground text-sm md:text-base max-w-lg">
          İçeriklerin toplam etkileşim verileri.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {statsData.map((stat, i) => (
          <StatCard key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </section>
  )
}
