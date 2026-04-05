'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, ExternalLink, Trophy, Medal, Award } from 'lucide-react'
import type { Video } from '@/lib/video-data'
import { videos } from '@/lib/video-data'

const topVideos = [...videos].sort((a, b) => b.likes - a.likes).slice(0, 3)
const rankIcons = [Trophy, Medal, Award]
const rankColors = ['text-accent', 'text-slate-300', 'text-amber-700']

export default function PopularSection() {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-3">
          <Trophy className="w-6 h-6 text-accent" />
          <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight">
            En Popüler
          </h2>
        </div>
        <p className="text-muted-foreground text-sm md:text-base max-w-lg">
          En çok beğeni alan video içerikleri.
        </p>
      </motion.div>

      <div className="space-y-4">
        {topVideos.map((video, i) => {
          const RankIcon = rankIcons[i]
          return (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ x: 8, borderColor: 'rgba(228, 161, 27, 0.3)' }}
              className="group flex items-center gap-4 md:gap-6 p-4 md:p-6 bg-card border border-border rounded-2xl transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-accent/5"
              onClick={() => window.open(video.url, '_blank')}
            >
              {/* Rank */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 + 0.3, type: 'spring', stiffness: 300 }}
                className="flex-shrink-0"
              >
                <RankIcon className={`w-8 h-8 ${rankColors[i]}`} />
              </motion.div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-md bg-muted/50 text-[10px] text-muted-foreground">
                    {video.category}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-base md:text-lg truncate group-hover:text-accent transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground truncate hidden sm:block mt-1">
                  {video.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex-shrink-0 flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-rose-400">
                  <Heart className="w-4 h-4 fill-rose-400" />
                  <span className="font-semibold">{video.likes.toLocaleString('tr-TR')}</span>
                </span>
                <span className="hidden md:flex items-center gap-1 text-muted-foreground">
                  <MessageCircle className="w-4 h-4" />
                  {video.comments}
                </span>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
