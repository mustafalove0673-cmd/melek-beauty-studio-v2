/**
 * COLOR PALETTE SYSTEM v2.0
 * 
 * Video analizinden çıkarılan renk paletleri
 * "Stop using these Color Palette" video'dan yanlış/doğru renk eşleştirmeleri
 * "Websites can't have aura" video'dan aura/glow efekt renkleri
 * 
 * Kullanım: import { getColorSystem, getWrongColors, getAuraPalette } from '@/lib/color-system'
 */

// ─── YANLIŞ RENK PALETLERİ (KULLANMAYIN!) ───
export const WRONG_PALETTES = {
  // ❌ Çok parlak ve göz yoran - web sitesinde KULLANMAYIN
  neonOverload: {
    name: 'Neon Overload',
    why: 'Göz yorar, okunamaz, amatör görünüm',
    colors: ['#FF00FF', '#00FF00', '#0000FF', '#FFFF00', '#FF0000'],
    tip: 'Neon renkleri sadece küçük aksanlarda kullanın'
  },
  // ❌ Çok soluk ve görünmez
  paleWashout: {
    name: 'Pale Washout',
    why: 'Kontrast yok, eriyen metin, erişilebilirlik başarısız',
    colors: ['#F0F0F0', '#E8E8E8', '#DDDDDD', '#CCCCCC', '#BBBBBB'],
    tip: 'Açık temalarda en az %4.5 kontrast oranı gerek'
  },
  // ❌ Rastgele gökkuşağı - tutarsız marka
  rainbowMess: {
    name: 'Rainbow Mess',
    why: 'Tutarsız, profesyonel değil, marka kimliği yok',
    colors: ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#8B00FF'],
    tip: 'Maksimum 3 ana renk kullanın'
  },
  // ❌ Düşük kontrast karanlık
  lowContrastDark: {
    name: 'Low Contrast Dark',
    why: 'Metin görünmez, erişilebilirlik hatası',
    colors: ['#1A1A2E', '#16213E', '#0F3460', '#1A1A2E', '#533483'],
    tip: 'Dark temada metin en az #E0E0E0 olmalı'
  },
  // ❌ Çok fazla mavi tonu
  blueMonotone: {
    name: 'Blue Monotone',
    why: 'Sıkıcı, sıradan, her yerde var',
    colors: ['#003366', '#004488', '#0055AA', '#0066CC', '#0077EE'],
    tip: 'Maviyi farklı tonlarla zenginleştirin'
  },
  // ❌ Pastel çokluğu
  pastelOverdose: {
    name: 'Pastel Overdose',
    why: 'Çocuk bahçesi görünümü, güven vermiyor',
    colors: ['#FFB3BA', '#BAFFC9', '#BAE1FF', '#FFFFBA', '#E8BAFF'],
    tip: 'Pastel max 2 renk, güçlü bir aksanla dengeleyin'
  }
} as const;

// ─── DOĞRU RENK PALETLERİ (KULLANIN!) ───
export const CORRECT_PALETTES = {
  // ✅ Aura/Glow - 3D website için
  auraGlow: {
    name: 'Aura Glow',
    why: 'Neon aksanlar + koyu arka plan = premium his',
    colors: {
      bg: '#0A0A0F',
      surface: '#12121A',
      primary: '#00D4FF',
      secondary: '#7C3AED',
      accent: '#00FF88',
      glow: '#00D4FF',
      text: '#F8FAFC',
      muted: '#94A3B8'
    },
    gradient: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
    glowEffect: '0 0 40px rgba(0, 212, 255, 0.3)',
    auraRing: 'radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)'
  },
  // ✅ Lüks Altın
  luxuryGold: {
    name: 'Luxury Gold',
    why: 'Altın + koyu = zenginlik hissi, güven verir',
    colors: {
      bg: '#0A0A0F',
      surface: '#141414',
      primary: '#C5A55A',
      secondary: '#D4A574',
      accent: '#F5E6D3',
      glow: '#C5A55A',
      text: '#FAFAFA',
      muted: '#A3A3A3'
    },
    gradient: 'linear-gradient(135deg, #C5A55A, #D4A574)',
    glowEffect: '0 0 30px rgba(197, 165, 90, 0.25)',
    auraRing: 'radial-gradient(circle, rgba(197,165,90,0.12) 0%, transparent 70%)'
  },
  // ✅ Siberpunk Neon
  cyberpunk: {
    name: 'Cyberpunk Neon',
    why: 'Futuristik, göz alıcı, teknoloji markaları için',
    colors: {
      bg: '#050510',
      surface: '#0D0D1A',
      primary: '#FF006E',
      secondary: '#00F5D4',
      accent: '#FFBE0B',
      glow: '#FF006E',
      text: '#F0F0F0',
      muted: '#888'
    },
    gradient: 'linear-gradient(135deg, #FF006E, #00F5D4)',
    glowEffect: '0 0 50px rgba(255, 0, 110, 0.3)',
    auraRing: 'radial-gradient(circle, rgba(255,0,110,0.2) 0%, transparent 70%)'
  },
  // ✅ Mimari Çelik
  architecturalSteel: {
    name: 'Architectural Steel',
    why: 'Profesyonel, temiz, güven verici',
    colors: {
      bg: '#1C1C1C',
      surface: '#252525',
      primary: '#4A90D9',
      secondary: '#C5A55A',
      accent: '#E8E4E0',
      glow: '#4A90D9',
      text: '#F5F5F5',
      muted: '#999'
    },
    gradient: 'linear-gradient(135deg, #4A90D9, #C5A55A)',
    glowEffect: '0 0 30px rgba(74, 144, 217, 0.2)',
    auraRing: 'radial-gradient(circle, rgba(74,144,217,0.12) 0%, transparent 70%)'
  },
  // ✅ Organik Yeşil
  organicGreen: {
    name: 'Organic Green',
    why: 'Doğal, sakin, wellness markaları için',
    colors: {
      bg: '#0A1A0A',
      surface: '#142814',
      primary: '#34D399',
      secondary: '#059669',
      accent: '#A7F3D0',
      glow: '#34D399',
      text: '#ECFDF5',
      muted: '#6B8F6B'
    },
    gradient: 'linear-gradient(135deg, #34D399, #059669)',
    glowEffect: '0 0 30px rgba(52, 211, 153, 0.2)',
    auraRing: 'radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)'
  },
  // ✅ Sinematik Kırmızı
  cinematicRed: {
    name: 'Cinematic Red',
    why: 'Dramatik, güçlü, premium restoran için',
    colors: {
      bg: '#0F0A0A',
      surface: '#1A1212',
      primary: '#DC2626',
      secondary: '#B91C1C',
      accent: '#FECACA',
      glow: '#DC2626',
      text: '#FEF2F2',
      muted: '#A08080'
    },
    gradient: 'linear-gradient(135deg, #DC2626, #991B1B)',
    glowEffect: '0 0 35px rgba(220, 38, 38, 0.25)',
    auraRing: 'radial-gradient(circle, rgba(220,38,38,0.15) 0%, transparent 70%)'
  },
  // ✅ Galaksi Mor
  galaxyPurple: {
    name: 'Galaxy Purple',
    why: 'Benzersiz, yaratıcı, sanat markaları için',
    colors: {
      bg: '#0D0A1A',
      surface: '#16122A',
      primary: '#A855F7',
      secondary: '#7C3AED',
      accent: '#E9D5FF',
      glow: '#A855F7',
      text: '#FAF5FF',
      muted: '#9B8BB0'
    },
    gradient: 'linear-gradient(135deg, #A855F7, #7C3AED)',
    glowEffect: '0 0 40px rgba(168, 85, 247, 0.25)',
    auraRing: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)'
  },
  // ✅ Okyanus Mavisi
  oceanBlue: {
    name: 'Ocean Blue',
    why: 'Sakin, güvenilir, deniz/marina için',
    colors: {
      bg: '#0A1628',
      surface: '#0F1F36',
      primary: '#0077B6',
      secondary: '#00B4D8',
      accent: '#E6C288',
      glow: '#00B4D8',
      text: '#F0F7FF',
      muted: '#6B8FAD'
    },
    gradient: 'linear-gradient(135deg, #0077B6, #00B4D8)',
    glowEffect: '0 0 30px rgba(0, 180, 216, 0.2)',
    auraRing: 'radial-gradient(circle, rgba(0,180,216,0.12) 0%, transparent 70%)'
  },
  // ✅ Gün Batımı
  sunset: {
    name: 'Sunset',
    why: 'Sıcak, davetkar, kafeler için',
    colors: {
      bg: '#1A0F0A',
      surface: '#251812',
      primary: '#F97316',
      secondary: '#EF4444',
      accent: '#FDE68A',
      glow: '#F97316',
      text: '#FFF7ED',
      muted: '#B09070'
    },
    gradient: 'linear-gradient(135deg, #F97316, #EF4444)',
    glowEffect: '0 0 35px rgba(249, 115, 22, 0.25)',
    auraRing: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)'
  }
} as const;

// ─── AURA EFEKTLERİ (3D website aura hissi) ───
export const AURA_EFFECTS = {
  // Aura site = 3D + Glow + Smooth scroll + Particle
  glowRing: {
    css: 'radial-gradient(circle at 50% 50%, rgba(0,212,255,0.08) 0%, transparent 50%)',
    animation: 'pulse 4s ease-in-out infinite'
  },
  noiseOverlay: {
    css: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\' opacity=\'0.03\'/%3E%3C/svg%3E")',
    mixBlendMode: 'overlay'
  },
  glassCard: {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
  },
  magneticButton: {
    hover: 'transform: scale(1.05); box-shadow: 0 0 30px rgba(0,212,255,0.4)',
    glow: '0 0 20px rgba(0,212,255,0.3)'
  },
  textGradient: {
    background: 'linear-gradient(135deg, #00D4FF, #7C3AED)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }
} as const;

// ─── CSS DEĞİŞKENLER OLARAK ÇIKTI ───
export function generateCSSVariables(paletteName: keyof typeof CORRECT_PALETTES) {
  const palette = CORRECT_PALETTES[paletteName];
  return {
    '--color-bg': palette.colors.bg,
    '--color-surface': palette.colors.surface,
    '--color-primary': palette.colors.primary,
    '--color-secondary': palette.colors.secondary,
    '--color-accent': palette.colors.accent,
    '--color-glow': palette.colors.glow,
    '--color-text': palette.colors.text,
    '--color-muted': palette.colors.muted,
    '--gradient-main': palette.gradient,
    '--glow-effect': palette.glowEffect,
    '--aura-ring': palette.auraRing,
  };
}

// ─── KONU → RENK PALETİ EŞLEŞTİRMESİ ───
export const TOPIC_COLOR_MAP: Record<string, keyof typeof CORRECT_PALETTES> = {
  'villa': 'architecturalSteel',
  'inşaat': 'architecturalSteel',
  'construction': 'architecturalSteel',
  'mimari': 'architecturalSteel',
  'emlak': 'luxuryGold',
  'gayrimenkul': 'luxuryGold',
  'real estate': 'luxuryGold',
  'lüks': 'luxuryGold',
  'luxury': 'luxuryGold',
  'güzellik': 'luxuryGold',
  'salon': 'luxuryGold',
  'vr': 'cyberpunk',
  'teknoloji': 'auraGlow',
  'startup': 'auraGlow',
  'saas': 'auraGlow',
  'ai': 'auraGlow',
  'fintech': 'auraGlow',
  'restoran': 'cinematicRed',
  'yemek': 'sunset',
  'cafe': 'sunset',
  'sanat': 'galaxyPurple',
  'portfolio': 'galaxyPurple',
  'galeri': 'galaxyPurple',
  'müze': 'galaxyPurple',
  'sağlık': 'organicGreen',
  'wellness': 'organicGreen',
  'gym': 'organicGreen',
  'yoga': 'organicGreen',
  'otomotiv': 'cinematicRed',
  'araba': 'cinematicRed',
  'deniz': 'oceanBlue',
  'yachting': 'oceanBlue',
  'marina': 'oceanBlue',
  'eğitim': 'architecturalSteel',
  'üniversite': 'architecturalSteel',
  '3d': 'auraGlow',
  'game': 'cyberpunk',
  'oyun': 'cyberpunk',
};

// ─── SEKTÖR İÇİN EN İYİ RENK PALETİNİ GETİR ───
export function getBestPalette(topic: string) {
  const lower = topic.toLowerCase();
  
  // Doğrudan eşleşme ara
  for (const [keyword, palette] of Object.entries(TOPIC_COLOR_MAP)) {
    if (lower.includes(keyword)) {
      return {
        paletteName: palette,
        palette: CORRECT_PALETTES[palette],
        cssVars: generateCSSVariables(palette),
        auraEffects: AURA_EFFECTS
      };
    }
  }
  
  // Varsayılan: Aura Glow (en çok yönlü)
  return {
    paletteName: 'auraGlow' as const,
    palette: CORRECT_PALETTES.auraGlow,
    cssVars: generateCSSVariables('auraGlow'),
    auraEffects: AURA_EFFECTS
  };
}

// ─── RENK PALETİ VALIDASYONU ───
export function validateContrast(bg: string, text: string): { passes: boolean; ratio: number } {
  // Basit kontrast hesaplama (gerçek projede wcag contrast ratio kullanın)
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : { r: 0, g: 0, b: 0 };
  };
  
  const bgRgb = hexToRgb(bg);
  const textRgb = hexToRgb(text);
  
  const luminance = (r: number, g: number, b: number) => {
    const [rs, gs, bs] = [r/255, g/255, b/255].map(c => c <= 0.03928 ? c/12.92 : Math.pow((c+0.055)/1.055, 2.4));
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
  };
  
  const bgL = luminance(bgRgb.r, bgRgb.g, bgRgb.b);
  const textL = luminance(textRgb.r, textRgb.g, textRgb.b);
  
  const ratio = (Math.max(bgL, textL) + 0.05) / (Math.min(bgL, textL) + 0.05);
  
  return { passes: ratio >= 4.5, ratio: Math.round(ratio * 100) / 100 };
}

// ─── TÜM DOĞRU PALETLERİ LİSTELE ───
export function getAllCorrectPalettes() {
  return Object.entries(CORRECT_PALETTES).map(([key, val]) => ({
    id: key,
    name: val.name,
    why: val.why,
    colors: val.colors,
    gradient: val.gradient,
    glow: val.glowEffect
  }));
}

// ─── TÜM YANLIŞ PALETLERİ LİSTELE ───
export function getAllWrongPalettes() {
  return Object.entries(WRONG_PALETTES).map(([key, val]) => ({
    id: key,
    name: val.name,
    why: val.why,
    colors: val.colors,
    tip: val.tip
  }));
}
