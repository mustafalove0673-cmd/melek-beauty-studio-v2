/**
 * REPO CAPABILITIES SYSTEM v1.0
 * 
 * 177 GitHub repo'su → Gerçek kullanılabilir yeteneklere dönüştürüldü
 * Her "tema [konu]" komutunda bu sistem aktif olarak kullanılır
 * 
 * Kullanım: import { getCapabilities } from '@/lib/repo-capabilities'
 *          getCapabilities('construction') → Sektör için en uygun yetenekler
 */

// ─── KURULU PAKETLER (npm install ile projede mevcut) ───
export const INSTALLED_PACKAGES = {
  // Core 3D
  three: { pkg: 'three@0.183.2', repo: 'mrdoob/three.js', capability: '3d-render-engine' },
  reactThreeFiber: { pkg: '@react-three/fiber@9.5.0', repo: 'pmndrs/react-three-fiber', capability: 'react-3d' },
  drei: { pkg: '@react-three/drei@10.7.7', repo: 'pmndrs/drei', capability: '3d-helpers' },
  postprocessing: { pkg: '@react-three/postprocessing@3.0.4', repo: 'pmndrs/postprocessing', capability: '3d-postfx' },
  reactSpring: { pkg: '@react-spring/three@10.0.3', repo: 'FormidableLabs/react-spring', capability: 'spring-animation' },

  // Animation
  gsap: { pkg: 'gsap@3.14.2', repo: 'greensock/GSAP', capability: 'timeline-animation' },
  framerMotion: { pkg: 'framer-motion@12.23.2', repo: 'framer/motion', capability: 'react-animation' },

  // UI
  shadcn: { pkg: 'shadcn/ui (components)', repo: 'shadcn-ui/ui', capability: 'ui-components' },
  lucide: { pkg: 'lucide-react@0.525.0', repo: 'lucide/lucide', capability: 'icons' },
  nextThemes: { pkg: 'next-themes@0.4.6', repo: 'pacocoursey/next-themes', capability: 'theme-toggle' },
  zustand: { pkg: 'zustand@5.0.6', repo: 'pmndrs/zustand', capability: 'state-management' },

  // Scroll & Interaction
  lenis: { pkg: '@studio-freight/lenis@1.0.42', repo: 'darkroomengineering/lenis', capability: 'smooth-scroll' },
  useGesture: { pkg: '@use-gesture/react@10.3.1', repo: 'pmndrs/use-gesture', capability: 'gesture-interaction' },

  // 3D Performance
  threeMeshBvh: { pkg: 'three-mesh-bvh@0.9.9', repo: 'gkjohnson/three-mesh-bvh', capability: '3d-raycasting' },

  // Email
  reactEmail: { pkg: 'react-email@5.2.10', repo: 'resendl/react-email', capability: 'email-templates' },

  // Framework
  nextjs: { pkg: 'next@16.1.1', repo: 'vercel/next.js', capability: 'framework' },
  tailwind: { pkg: 'tailwindcss@4', repo: 'tailwindlabs/tailwindcss', capability: 'styling' },
  prisma: { pkg: 'prisma@6.11.1', repo: 'prisma/prisma', capability: 'database' },
  twAnimate: { pkg: 'tailwindcss-animate@1.0.7', repo: 'NickCis/tailwindcss-animate', capability: 'css-animation' },
} as const;

// ─── YETENEK TİPLERİ ───
export type CapabilityType =
  | '3d-engine' | '3d-render-engine' | 'react-3d' | '3d-helpers' | '3d-postfx' | '3d-physics'
  | '3d-terrain' | '3d-model-viewer' | '3d-keyframe' | '3d-pathtracer' | '3d-raycasting'
  | 'timeline-animation' | 'react-animation' | 'spring-animation' | 'css-animation'
  | 'smooth-scroll' | 'gesture-interaction' | 'tilt-effect' | 'parallax'
  | 'shader-glsl' | 'noise-generation' | 'creative-coding' | 'generative-art'
  | 'ui-components' | 'design-system' | 'icons' | 'theme-toggle' | 'state-management'
  | 'data-visualization' | 'charts' | 'form-components' | 'tooltip-popover'
  | 'email-templates' | 'cms' | 'framework' | 'styling' | 'database'
  | 'accessibility' | 'performance' | 'web-quality';

// ─── SEKTÖR → YETENEK EŞLEŞTİRMESİ ───
export interface SectorMapping {
  sector: string;
  label: string;
  colorPalette: { primary: string; secondary: string; accent: string; bg: string; };
  fonts: { display: string; body: string; };
  capabilities: CapabilityType[];
  repos: string[]; // GitHub repo slugs
  threeConcept: string;
  style: string;
}

export const SECTOR_MAPPINGS: Record<string, SectorMapping> = {
  construction: {
    sector: 'construction',
    label: 'Inşaat & Mimari',
    colorPalette: { primary: '#4A90D9', secondary: '#C5A55A', accent: '#E8E4E0', bg: '#1C1C1C' },
    fonts: { display: 'Josefin Sans', body: 'Source Sans 3' },
    capabilities: [
      '3d-render-engine', 'react-3d', '3d-helpers', '3d-postfx',
      'timeline-animation', 'react-animation', 'spring-animation',
      'smooth-scroll', 'gesture-interaction',
      'ui-components', 'design-system', 'icons',
      'data-visualization', 'performance', 'web-quality'
    ],
    repos: [
      'mrdoob/three.js', 'pmndrs/react-three-fiber', 'pmndrs/drei', 'pmndrs/postprocessing',
      'greensock/GSAP', 'framer/motion', 'FormidableLabs/react-spring',
      'darkroomengineering/lenis', 'pmndrs/use-gesture',
      'shadcn-ui/ui', 'magicui-designs/magicui', 'DavidHDev/react-bits',
      'lucide/lucide', 'recharts/recharts', 'addyosmani/web-quality-skills',
      'theatre-js/theatre', 'sherzodartikbayev/Awwwards-Winning',
      'patriciogonzalezvivo/thebookofshaders', 'stackgl/glslify',
      'gkjohnson/three-mesh-bvh', 'pmndrs/cannon-es',
      'tweenjs/tween.js', 'vanilla-tilt/vanilla-tilt.js',
      'Fullstack-Empire/GSAP-Awwwards-Website', 'NickCis/tailwindcss-animate',
      'BabylonJS/Babylon.js', 'pmndrs/leva', 'pmndrs/kokomi.js'
    ],
    threeConcept: 'Blueprint grid + Villa wireframe + Construction particles + Gold accent rings',
    style: 'Minimal, geometric, blueprint lines, industrial, clean'
  },
  
  luxury: {
    sector: 'luxury',
    label: 'Lüks & Güzellik',
    colorPalette: { primary: '#C8506F', secondary: '#D4A574', accent: '#F5E6D3', bg: '#0A0A0F' },
    fonts: { display: 'Playfair Display', body: 'Inter' },
    capabilities: [
      '3d-render-engine', 'react-3d', '3d-helpers', '3d-postfx',
      'timeline-animation', 'react-animation', 'spring-animation',
      'smooth-scroll', 'tilt-effect', 'parallax',
      'ui-components', 'design-system', 'icons', 'theme-toggle'
    ],
    repos: [
      'mrdoob/three.js', 'pmndrs/react-three-fiber', 'pmndrs/drei', 'pmndrs/postprocessing',
      'greensock/GSAP', 'framer/motion', 'FormidableLabs/react-spring',
      'darkroomengineering/lenis', 'vanilla-tilt/vanilla-tilt.js',
      'shadcn-ui/ui', 'magicui-designs/magicui', 'DavidHDev/react-bits',
      'lucide/lucide', 'pacocoursey/next-themes',
      'chakra-ui/chakra-ui', 'mantinedev/mantine',
      'react-icons/react-icons', 'joshwcomeau/usehooks',
      'streamich/react-use', 'styled-components/styled-components'
    ],
    threeConcept: 'Distort sphere + Gold rings + Crystal mesh + Sparkle particles',
    style: 'Glassmorphism, soft glow, elegant, premium'
  },

  tech: {
    sector: 'tech',
    label: 'Teknoloji & Startup',
    colorPalette: { primary: '#00D4FF', secondary: '#00FF88', accent: '#0F172A', bg: '#0A0A0A' },
    fonts: { display: 'Space Grotesk', body: 'DM Sans' },
    capabilities: [
      '3d-render-engine', 'react-3d', '3d-helpers',
      'timeline-animation', 'react-animation',
      'smooth-scroll', 'gesture-interaction',
      'ui-components', 'design-system', 'icons', 'state-management',
      'data-visualization', 'charts', 'performance'
    ],
    repos: [
      'mrdoob/three.js', 'pmndrs/react-three-fiber', 'pmndrs/drei',
      'greensock/GSAP', 'framer/motion',
      'darkroomengineering/lenis', 'pmndrs/use-gesture',
      'shadcn-ui/ui', 'lucide/lucide', 'pmndrs/zustand',
      'recharts/recharts', 'addyosmani/web-quality-skills',
      'ant-design/ant-design', 'nextui-org/nextui',
      'vercel/next.js', 'prisma/prisma'
    ],
    threeConcept: 'Wireframe globe + Particle network + Hologram mesh',
    style: 'Cyberpunk, holographic, sharp, neon'
  },

  restaurant: {
    sector: 'restaurant',
    label: 'Restoran & Yemek',
    colorPalette: { primary: '#FF8C42', secondary: '#8B1A1A', accent: '#FFF8E7', bg: '#1A1A1A' },
    fonts: { display: 'Cormorant Garamond', body: 'Lato' },
    capabilities: [
      '3d-render-engine', 'react-3d', '3d-helpers',
      'timeline-animation', 'react-animation', 'spring-animation',
      'smooth-scroll', 'parallax',
      'ui-components', 'icons', 'data-visualization'
    ],
    repos: [
      'mrdoob/three.js', 'pmndrs/react-three-fiber', 'pmndrs/drei',
      'greensock/GSAP', 'framer/motion', 'FormidableLabs/react-spring',
      'darkroomengineering/lenis',
      'shadcn-ui/ui', 'lucide/lucide', 'recharts/recharts',
      'chakra-ui/chakra-ui', 'styled-components/styled-components'
    ],
    threeConcept: 'Floating food elements + Steam particles + Warm ambient lighting',
    style: 'Warm, cinematic, depth of field, appetizing'
  },

  portfolio: {
    sector: 'portfolio',
    label: 'Portfolio & Galeri',
    colorPalette: { primary: '#6B21A8', secondary: '#C0C0C0', accent: '#FAFAFA', bg: '#0D0D0D' },
    fonts: { display: 'Syne', body: 'IBM Plex Sans' },
    capabilities: [
      '3d-render-engine', 'react-3d', '3d-helpers', '3d-postfx',
      'timeline-animation', 'react-animation', 'spring-animation',
      'smooth-scroll', 'tilt-effect', 'gesture-interaction',
      'ui-components', 'icons', 'css-animation'
    ],
    repos: [
      'mrdoob/three.js', 'pmndrs/react-three-fiber', 'pmndrs/drei', 'pmndrs/postprocessing',
      'greensock/GSAP', 'framer/motion', 'FormidableLabs/react-spring',
      'darkroomengineering/lenis', 'vanilla-tilt/vanilla-tilt.js', 'pmndrs/use-gesture',
      'shadcn-ui/ui', 'DavidHDev/react-bits', 'lucide/lucide',
      'animate-css/animate.css', 'NickCis/tailwindcss-animate',
      'sherzodartikbayev/Awwwards-Winning', 'bradtraversy/devportfolio',
      'theatre-js/theatre', 'csstools/postcss-plugins'
    ],
    threeConcept: 'Floating frames + Light beams + Gallery wall meshes',
    style: 'Bold, experimental, kinetic typography'
  },

  automotive: {
    sector: 'automotive',
    label: 'Otomotiv & Motorspor',
    colorPalette: { primary: '#DC2626', secondary: '#E5E7EB', accent: '#FBBF24', bg: '#1A1A1A' },
    fonts: { display: 'Orbitron', body: 'Barlow Condensed' },
    capabilities: [
      '3d-render-engine', 'react-3d', '3d-helpers', '3d-postfx', '3d-physics',
      'timeline-animation', 'react-animation',
      'smooth-scroll', 'gesture-interaction',
      'ui-components', 'icons', 'performance'
    ],
    repos: [
      'mrdoob/three.js', 'pmndrs/react-three-fiber', 'pmndrs/drei', 'pmndrs/postprocessing',
      'greensock/GSAP', 'framer/motion',
      'darkroomengineering/lenis', 'pmndrs/use-gesture',
      'pmndrs/cannon-es', 'dimforge/rapier.js',
      'shadcn-ui/ui', 'lucide/lucide', 'addyosmani/web-quality-skills',
      'BabylonJS/Babylon.js', 'pmndrs/leva'
    ],
    threeConcept: 'Car wireframe + Speed particles + Dynamic camera motion',
    style: 'Aggressive, sharp, fast, carbon fiber'
  },

  healthcare: {
    sector: 'healthcare',
    label: 'Sağlık & Wellness',
    colorPalette: { primary: '#34D399', secondary: '#93C5FD', accent: '#F8FAFC', bg: '#F0FDF4' },
    fonts: { display: 'Fraunces', body: 'Work Sans' },
    capabilities: [
      '3d-render-engine', 'react-3d', '3d-helpers',
      'react-animation', 'spring-animation',
      'smooth-scroll',
      'ui-components', 'design-system', 'icons', 'accessibility'
    ],
    repos: [
      'mrdoob/three.js', 'pmndrs/react-three-fiber', 'pmndrs/drei',
      'framer/motion', 'FormidableLabs/react-spring',
      'darkroomengineering/lenis',
      'shadcn-ui/ui', 'radix-ui/themes', 'lucide/lucide',
      'adobe/react-spectrum', 'reach/reach-ui',
      'mantine/mantine', 'nextui-org/nextui'
    ],
    threeConcept: 'Organic shapes + DNA helix + Breathing pulse animation',
    style: 'Clean, organic, rounded, soft, trustworthy'
  },

  realestate: {
    sector: 'realestate',
    label: 'Emlak & Gayrimenkul',
    colorPalette: { primary: '#4A90D9', secondary: '#C5A55A', accent: '#F5F5F5', bg: '#1C1C1C' },
    fonts: { display: 'Playfair Display', body: 'Lato' },
    capabilities: [
      '3d-render-engine', 'react-3d', '3d-helpers', '3d-postfx',
      'timeline-animation', 'react-animation',
      'smooth-scroll', 'parallax', 'gesture-interaction',
      'ui-components', 'icons', 'data-visualization', 'charts'
    ],
    repos: [
      'mrdoob/three.js', 'pmndrs/react-three-fiber', 'pmndrs/drei', 'pmndrs/postprocessing',
      'greensock/GSAP', 'framer/motion',
      'darkroomengineering/lenis', 'pmndrs/use-gesture',
      'shadcn-ui/ui', 'magicui-designs/magicui', 'lucide/lucide',
      'recharts/recharts', 'CesiumGS/cesium', 'maplibre/maplibre-gl-js',
      'vasturiano/react-globe.gl', 'plotly/plotly.js',
      'theatre-js/theatre', 'sherzodartikbayev/Awwwards-Winning'
    ],
    threeConcept: '3D building models + Map integration + Virtual tour',
    style: 'Premium, elegant, spacious, trustworthy'
  },
};

// ─── SEKTÖR TESPİT FONKSİYONU ───
export function detectSector(topic: string): SectorMapping | null {
  const lower = topic.toLowerCase();
  const keywords: Record<string, string[]> = {
    construction: ['inşaat', 'villa', 'mimari', 'construction', 'building', 'mimarlık', 'yapı', 'insaat'],
    luxury: ['lüks', 'güzellik', 'salon', 'spa', 'kozmetik', 'moda', 'luxury', 'beauty', 'hair', 'saç'],
    tech: ['teknoloji', 'startup', 'saas', 'ai', 'fintech', 'tech', 'yazılım', 'software'],
    restaurant: ['restoran', 'yemek', 'cafe', 'bar', 'restaurant', 'food', 'dining'],
    portfolio: ['portfolio', 'galeri', 'sanat', 'art', 'gallery', 'müze', 'museum'],
    automotive: ['otomotiv', 'araba', 'motorspor', 'car', 'auto', 'racing'],
    healthcare: ['sağlık', 'hastane', 'gym', 'yoga', 'health', 'wellness', 'medical'],
    realestate: ['emlak', 'gayrimenkul', 'daire', 'real estate', 'property', 'konut'],
  };

  for (const [sector, words] of Object.entries(keywords)) {
    if (words.some(w => lower.includes(w))) {
      return SECTOR_MAPPINGS[sector] || null;
    }
  }
  return null;
}

// ─── YETENEKLERİ GETİR ───
export function getCapabilities(sectorOrTopic: string): {
  mapping: SectorMapping;
  installed: string[];
  reference: string[];
  totalRepos: number;
} {
  const mapping = detectSector(sectorOrTopic) || SECTOR_MAPPINGS.construction;
  
  const installed: string[] = [];
  const reference: string[] = [];

  mapping.repos.forEach(repoSlug => {
    const found = Object.values(INSTALLED_PACKAGES).find(p => p.repo === repoSlug);
    if (found) {
      installed.push(found.repo);
    } else {
      reference.push(repoSlug);
    }
  });

  return {
    mapping,
    installed,
    reference,
    totalRepos: mapping.repos.length
  };
}

// ─── KONU BAŞINA GÖRE YAPILANDIRMA ÜRET ───
export function generateSiteConfig(topic: string) {
  const { mapping, installed, reference, totalRepos } = getCapabilities(topic);
  
  return {
    topic,
    sector: mapping.label,
    colors: mapping.colorPalette,
    fonts: mapping.fonts,
    threeConcept: mapping.threeConcept,
    style: mapping.style,
    capabilities: mapping.capabilities,
    activeRepos: {
      installed,    // Projede kurulu paketler
      reference,    // Referans olarak kullanılacak repo'lar
      total: totalRepos
    },
    sections: [
      { name: 'Navbar', type: 'navigation', usesRepos: ['shadcn-ui/ui', 'lucide/lucide'] },
      { name: 'Hero3D', type: 'hero-3d', usesRepos: ['mrdoob/three.js', 'pmndrs/react-three-fiber', 'pmndrs/drei', 'greensock/GSAP'] },
      { name: 'Features', type: 'features-grid', usesRepos: ['shadcn-ui/ui', 'framer/motion', 'DavidHDev/react-bits'] },
      { name: 'Showcase', type: 'gallery', usesRepos: ['framer/motion', 'darkroomengineering/lenis'] },
      { name: 'Stats', type: 'counter', usesRepos: ['greensock/GSAP', 'framer/motion'] },
      { name: 'Testimonials', type: 'reviews', usesRepos: ['shadcn-ui/ui', 'framer/motion'] },
      { name: 'Contact', type: 'form', usesRepos: ['shadcn-ui/ui', 'resendl/react-email'] },
      { name: 'Footer', type: 'footer', usesRepos: ['lucide/lucide'] },
    ],
    animations: {
      scroll: mapping.capabilities.includes('smooth-scroll'),
      tilt: mapping.capabilities.includes('tilt-effect'),
      parallax: mapping.capabilities.includes('parallax'),
      gesture: mapping.capabilities.includes('gesture-interaction'),
      spring: mapping.capabilities.includes('spring-animation'),
      timeline: mapping.capabilities.includes('timeline-animation'),
    },
    three3d: {
      enabled: true,
      concept: mapping.threeConcept,
      postprocessing: mapping.capabilities.includes('3d-postfx'),
      physics: mapping.capabilities.includes('3d-physics'),
      keyframe: mapping.capabilities.includes('3d-keyframe'),
    }
  };
}
