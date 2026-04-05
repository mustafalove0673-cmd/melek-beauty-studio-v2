// 📊 SEO OTOMASYON SİSTEMİ v1.0
// Sektör bazlı SEO metadata, Open Graph, Schema.org otomatiği

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
  canonicalUrl?: string
  locale?: string
  type?: 'website' | 'article' | 'product'
  twitterCard?: 'summary' | 'summary_large_image'
}

export interface SchemaOrg {
  '@context': string
  '@type': string
  [key: string]: unknown
}

// ============================================================
// SEO METADATA OLUŞTURUCU
// ============================================================

export function generateSEO(config: SEOConfig): Record<string, string> {
  const {
    title,
    description,
    keywords,
    ogImage = '/images/og-default.png',
    canonicalUrl,
    locale = 'tr_TR',
    type = 'website',
    twitterCard = 'summary_large_image',
  } = config

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl

  return {
    title: `${title} | ${getSiteName()}`,
    description,
    keywords: keywords.join(', '),
    'og:title': `${title} | ${getSiteName()}`,
    'og:description': description,
    'og:image': `${baseUrl}${ogImage}`,
    'og:url': fullUrl,
    'og:type': type,
    'og:locale': locale,
    'og:site_name': getSiteName(),
    'twitter:card': twitterCard,
    'twitter:title': `${title} | ${getSiteName()}`,
    'twitter:description': description,
    'twitter:image': `${baseUrl}${ogImage}`,
  }
}

function getSiteName(): string {
  return process.env.NEXT_PUBLIC_SITE_NAME || 'NOVA Digital'
}

// ============================================================
// SCHEMA.ORG GENERATOR'LAR
// ============================================================

export function generateLocalBusinessSchema(config: {
  name: string
  description: string
  phone: string
  email: string
  address: string
  city: string
  country: string
  latitude?: number
  longitude?: number
  openingHours?: string
  image?: string
}): SchemaOrg {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: config.name,
    description: config.description,
    telephone: config.phone,
    email: config.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: config.address,
      addressLocality: config.city,
      addressCountry: config.country,
    },
    geo: config.latitude && config.longitude
      ? {
          '@type': 'GeoCoordinates',
          latitude: config.latitude,
          longitude: config.longitude,
        }
      : undefined,
    openingHours: config.openingHours || 'Mo-Fr 09:00-18:00',
    image: config.image ? `${baseUrl}${config.image}` : undefined,
    url: baseUrl,
    priceRange: '$$',
  }
}

export function generateProductSchema(config: {
  name: string
  description: string
  image: string
  price: number
  currency: string
  availability: 'InStock' | 'OutOfStock'
  rating?: number
  reviewCount?: number
}): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: config.name,
    description: config.description,
    image: config.image,
    offers: {
      '@type': 'Offer',
      price: config.price.toFixed(2),
      priceCurrency: config.currency || 'TRY',
      availability: `https://schema.org/${config.availability}`,
    },
    aggregateRating: config.rating
      ? {
          '@type': 'AggregateRating',
          ratingValue: config.rating,
          reviewCount: config.reviewCount || 1,
        }
      : undefined,
  }
}

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
): SchemaOrg {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// ============================================================
// SEKTÖR BAZLI SEO PRESETS
// ============================================================

export const sectorSEOPresets: Record<string, Partial<SEOConfig>> = {
  'luxury': {
    keywords: ['lüks', 'premium', 'elit', 'özel', 'vip'],
    twitterCard: 'summary_large_image',
  },
  'construction': {
    keywords: ['inşaat', 'villa', 'mimari', 'proje', 'lüks villa'],
  },
  'technology': {
    keywords: ['teknoloji', 'yazılım', 'AI', 'SaaS', 'startup'],
  },
  'restaurant': {
    keywords: ['restoran', 'fine dining', 'yemek', 'rezervasyon', 'menü'],
  },
  'health': {
    keywords: ['sağlık', 'wellness', 'spa', 'masaj', 'estetik'],
  },
}

// ============================================================
// NEXT.JS METADATA EXPORT
// ============================================================

export function createMetadata(config: SEOConfig) {
  const seo = generateSEO(config)
  const schemas = [
    generateLocalBusinessSchema({
      name: config.title,
      description: config.description,
      phone: '+90 555 000 0000',
      email: 'info@example.com',
      address: 'Örnek Mahallesi',
      city: 'İstanbul',
      country: 'TR',
    }),
  ]

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo['og:title'],
      description: seo['og:description'],
      images: [seo['og:image']],
      url: seo['og:url'],
      type: seo['og:type'] as 'website' | 'article',
      locale: seo['og:locale'],
      siteName: seo['og:site_name'],
    },
    twitter: {
      card: seo['twitter:card'] as 'summary' | 'summary_large_image',
      title: seo['twitter:title'],
      description: seo['twitter:description'],
      images: [seo['twitter:image']],
    },
    alternates: {
      canonical: seo['og:url'],
    },
    other: {
      'script:ld+json': JSON.stringify(schemas),
    },
  }
}

// ============================================================
// SITEMAP GENERATOR
// ============================================================

export function generateSitemap(
  baseUrl: string,
  pages: Array<{ path: string; priority?: number; changefreq?: string }>
): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `  <url>
    <loc>${baseUrl}${page.path}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq || 'weekly'}</changefreq>
    <priority>${page.priority || 0.8}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`

  return xml
}

// ============================================================
// ROBOTS.TXT GENERATOR
// ============================================================

export function generateRobotsTxt(baseUrl: string): string {
  return `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: ${baseUrl}/sitemap.xml
`
}
