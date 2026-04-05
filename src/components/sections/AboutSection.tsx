'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Sparkles, Award, Users, Clock } from 'lucide-react';
import { useLanguageStore, translations } from '@/lib/language-store';

const stats = [
  { tr: { value: '10+', label: 'Yıllık Deneyim' }, en: { value: '10+', label: 'Years Experience' }, icon: Award },
  { tr: { value: '5000+', label: 'Mutlu Müşteri' }, en: { value: '5000+', label: 'Happy Clients' }, icon: Users },
  { tr: { value: '15+', label: 'Hizmet Çeşidi' }, en: { value: '15+', label: 'Services' }, icon: Sparkles },
  { tr: { value: '6', label: 'Gün Hizmet' }, en: { value: '6', label: 'Days a Week' }, icon: Clock },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { language } = useLanguageStore();
  const [imgLoaded, setImgLoaded] = useState(false);

  // Parallax image on scroll
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.15, 1]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative section-padding overflow-hidden bg-dark"
    >
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-rose/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <motion.div
              ref={imageRef}
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              style={{ y: imageY, scale: imageScale }}
            >
              {/* Image */}
              <div
                className="absolute inset-0 transition-opacity duration-700"
                style={{
                  backgroundImage: 'url(/images/gallery-1.png)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: imgLoaded ? 1 : 0,
                }}
                onLoad={() => setImgLoaded(true)}
              />
              {!imgLoaded && (
                <div className="absolute inset-0 bg-dark-elevated animate-pulse" />
              )}

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/50 via-transparent to-transparent" />

              {/* Decorative corner frame */}
              <div className="absolute top-4 left-4 w-16 h-16 border-t-2 border-l-2 border-gold/40 rounded-tl-lg" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-b-2 border-r-2 border-gold/40 rounded-br-lg" />
            </motion.div>

            {/* Floating accent card */}
            <motion.div
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 glass-strong p-4 md:p-6 rounded-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-gradient-rose">10+</div>
              <div className="text-xs text-cream/50 tracking-wider uppercase font-body mt-1">
                {language === 'tr' ? 'Yıllık Deneyim' : 'Years Experience'}
              </div>
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:pl-8">
            {/* Section tag */}
            <motion.div
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="mb-4"
            >
              <span className="text-xs tracking-[0.3em] uppercase text-gold/70 font-body">
                {language === 'tr' ? 'Biz Kimiz' : 'About Us'}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              custom={1}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cream mb-2 leading-tight"
            >
              {language === 'tr' ? 'Güzelliğe' : 'Where Beauty'}
            </motion.h2>
            <motion.h3
              custom={1.5}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="font-display text-3xl md:text-4xl lg:text-5xl font-light italic text-gradient-gold mb-6"
            >
              {language === 'tr' ? 'Değer Katıyoruz' : 'Meets Passion'}
            </motion.h3>

            {/* Description */}
            <motion.div
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="space-y-4 mb-10"
            >
              <p className="text-cream/60 font-body leading-relaxed text-sm md:text-base">
                {language === 'tr'
                  ? 'Pursaklar, Ankara\'da 10 yılı aşkın deneyimimizle, her müşterimize özel ve profesyonel güzellik hizmetleri sunuyoruz. En son trendleri takip ederek, kişisel tarzınıza en uygun çözümleri üretiyoruz.'
                  : 'With over 10 years of experience in Pursaklar, Ankara, we offer personalized and professional beauty services to each of our clients. We follow the latest trends and create solutions that best suit your personal style.'}
              </p>
              <p className="text-cream/40 font-body leading-relaxed text-sm md:text-base">
                {language === 'tr'
                  ? 'Modern ekipmanlarımız ve uzman ekibimizle, sizi en iyi şekilde ağırlamak için buradayız. Güzelliğinize yatırım yapmak için bize güvenebilirsiniz.'
                  : 'With our modern equipment and expert team, we are here to welcome you in the best way. You can trust us to invest in your beauty.'}
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                const s = stat[language];
                return (
                  <motion.div
                    key={i}
                    custom={3 + i}
                    variants={fadeInUp}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="glass p-4 rounded-xl group hover:bg-white/[0.06] transition-all duration-300"
                    whileHover={{ y: -4 }}
                  >
                    <Icon size={18} className="text-gold/50 mb-2 group-hover:text-gold transition-colors" />
                    <div className="text-2xl font-display font-bold text-cream">{s.value}</div>
                    <div className="text-[11px] text-cream/40 tracking-wider uppercase font-body mt-0.5">
                      {s.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
