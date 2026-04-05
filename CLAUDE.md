# 🧠 CLAUDE CODE - AKILLI PROJE ASİSTANI

## TEMEL KURALLAR (Her zaman uygula)

Bu bir **Awwwards-seviye ultra premium website** üretim sistemidir. Sıradan website ÜRETMEZSİN.

### 🚫 YASAKLAR
- Asla template tarzı dikey bölümlü sıradan site yapma
- Asla basic grid layout kullanma
- Asla sıkıcı renk paleti kullanma (mavi, lacivert yasak)
- Asla statik, hareketsiz sayfa yapma
- Asla boilerplate kod yazma

### ✅ ZORUNLULAR
- Her sayfa **VİRAL, İMMERSIVE, 3D** olmalı
- Three.js ile gerçek 3D sahneler eklemelisin
- GSAP/Framer Motion ile sinematik animasyonlar
- Glassmorphism, gradient, glow, cinematic lighting
- Scroll-triggered geçişler ve parallax
- Her bölüm FARKLI ve BENZERSİZ olmalı
- Hover, micro-interaction her yerde olmalı
- Dark luxury tema (#0A0A0F arka plan)

---

## 🔄 ÇALIŞMA DÖNGÜSÜ (MUTLAKA UYLA)

Kullanıcı her mesaj gönderdiğinde şu döngüyü SIFIRDAN uygula:

```
1. ANLA  → Kullanıcının ne istediğini tam olarak kavramayı çalış
2. PLANLA → Hangi bileşenleri nereye koyacağını düşün
3. YAP    → Kodu yaz ve dosyaları oluştur/güncelle
4. KONTROL ET:
   a. `npx eslint src/` çalıştır → hata varsa düzelt
   b. `bun run dev` çalıştır → compile hatası varsa düzelt
   c. dev.log dosyasını oku → runtime hataları varsa düzelt
   d. Tüm importlar eksiksiz mi kontrol et
   e. Tüm bileşenler doğru import edilmiş mi kontrol et
   f. Görseller var mı kontrol et (gerekirse z-ai ile üret)
5. EKSİK VAR MI? → Varsa 3. adıma dön ve tekrar yap
6. TAMAM MI? → Herşey temizse kullanıcıya bildir
7. TEKRAR KONTROL → En az 2 tur daha kontrol et
```

**ÖNEMLİ**: Bu döngüden ÇIKMA. Her şey çalışana kadar tekrarla. Kullanıcıya "bitti" deme, gerçekten bittiğinde söyle.

---

## 🎨 TEKNOLOJİ STACK

### Core
- **Next.js 16** (App Router) - ZORUNLU
- **TypeScript 5** - ZORUNLU
- **Tailwind CSS 4** - ZORUNLU
- **Three.js** + **@react-three/fiber** + **@react-three/drei** - 3D sahneler için

### Animasyonlar
- **Framer Motion** - Scroll animasyonları, geçişler
- **Three.js** - 3D modeller, sahneler, efektler
- **CSS Keyframes** - Hafif animasyonlar

### UI
- **shadcn/ui** (New York style) - Varsayılan bileşenler
- **Lucide React** - İkonlar
- **Zustand** - State yönetimi

### Tasarım Sistemi
- **Arka plan**: `#0A0A0F` (dark)
- **Kart**: `#12121A` (dark-card)
- **Rose**: `#C8506F` (primary)
- **Gold**: `#D4A574` (accent)
- **Cream**: `#F5E6D3` (text)
- **Font Display**: Playfair Display (serif, başlıklar)
- **Font Body**: Inter (sans-serif, metin)

---

## 📋 KOMUT KILAVUZU

Kullanıcı şu kelimelerden birini yazdığında:

### `tema [açıklama]` veya `theme [açıklama]`
→ Yeni bir website tasarla. Açıklamadaki sektöre göre:
1. İşletme bilgilerini ve sektörü anla
2. Renk paletini sektör'e uyarla
3. Three.js ile 3D hero sahnesi oluştur
4. Tüm bölümleri sıfırdan premium tasarla
5. AI görseller üret (`z-ai image` CLI kullan)
6. Döngüyü uygula, herşey çalışana kadar kontrol et

### `codex [prompt]` veya `code [prompt]`
→ Mevcut projeye yeni özellik/bölüm ekle:
1. Mevcut kodu oku ve yapısını anla
2. Yeni özelliği mevcut stile uygun ekle
3. Three.js 3D elementler ekle
4. Eksik görselleri üret
5. Döngüyü uygula

### `3d` veya `three`
→ Mevcut sayfaya Three.js 3D sahne ekle:
1. @react-three/fiber ile Canvas oluştur
2. 3D geometri, ışıklandırma, kamera ayarla
3. Interactive (mouse tracking) yap
4. Scroll ile 3D sahne etkileşimi ekle
5. Döngüyü uygula

### `düzenle [açıklama]` veya `fix [açıklama]`
→ Mevcut kodu düzenle/fix et:
1. Sorunlu dosyayı bul
2. Düzelt
3. Kontrol et
4. Döngüyü uygula

### `görsel` veya `image`
→ AI görseller üret:
1. Hangi görseller eksik kontrol et
2. `z-ai image -p "prompt" -o "./path.png" -s 1024x1024` ile üret
3. Dev server'ı kontrol et

### `kontrol` veya `check`
→ Tüm projeyi kontrol et:
1. ESLint çalıştır
2. Dev server loglarını kontrol et
3. Tüm importları kontrol et
4. Eksik dosya/görsel var mı kontrol et
5. Döngüyü uygula

---

## 🌐 THREE.JNTEGRASYON KILAVUZU

### Basic 3D Scene Setup
```tsx
'use client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Environment, MeshDistortMaterial } from '@react-three/drei';

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial color="#C8506F" speed={2} distort={0.4} />
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
}
```

### Three.js Kullanım Kuralları
1. Her zaman `'use client'` kullan
2. Canvas component'i ayrı dosyada tut
3. Heavy 3D işlemleri `Suspense` ile sar
4. Mouse tracking için `useFrame` kullan
5. Performance için `instancedMesh` kullan (çok obje varsa)
6. Işıklandırma: ambient + directional + point lights
7. Environment map kullan (`<Environment />`)

---

## 🖼️ AI GÖRSEL ÜRETİM

CLI kullanarak görsel üret:
```bash
z-ai image -p "detaylı açıklama, dark luxury, cinematic, 8K" -o "./public/images/dosya.png" -s 1024x1024
```

**Desteklenen boyutlar:** 1024x1024, 768x1344, 864x1152, 1344x768, 1152x864

**Prompt yapısı:** `[konu], [stil], [aydınlatma], [renk tonu], high quality, detailed, 8K photography`

---

## 📁 PROJE YAPISI

```
src/
├── app/
│   ├── globals.css          # Ana tasarım sistemi
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Ana sayfa (tek route)
├── components/
│   ├── sections/            # Bölüm bileşenleri
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── BookingSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── FloatingButtons.tsx
│   ├── three/               # Three.js 3D sahneler
│   │   ├── Scene3D.tsx
│   │   ├── Hero3D.tsx
│   │   └── FloatingShapes.tsx
│   └── ui/                  # shadcn/ui bileşenleri
├── lib/
│   ├── language-store.ts    # TR/EN dil yönetimi
│   └── utils.ts
└── hooks/                   # Custom hooks
public/images/               # AI üretilmiş görseller
```

---

## 🔧 KONTROL KOMUTLARI

```bash
# Lint kontrol
npx eslint src/

# Dev server başlat
bun run dev

# Dev log oku
tail -50 dev.log

# Dev server durdur
pkill -f "next dev"

# Dev server yeniden başlat
pkill -f "next dev"; sleep 2; bun run dev > dev.log 2>&1 &

# Port kontrol
ss -tlnp | rg 3000
```

---

## ⚡ HIZLI İPUÇLARI

1. **Her yeni bölüm** eklediğinde page.tsx'e import et
2. **Her yeni görsel** public/images/ klasörüne koy
3. **Three.js Canvas** her zaman Suspense ile sar
4. **Responsive** tasarım: mobile-first, sm/md/lg breakpointler
5. **Framer Motion** initial/animate/exit kullan
6. **Zustand** store'da TR/EN çevirileri tut
7. **Dev server log** her değişiklikten sonra kontrol et
8. **ESLint** sıfır hata zorunlu
9. **3000 portu** tek port, asla değiştirme
10. **next.config.ts** allowedDevOrigins ekle

---

## 🏆 KALİTE STANDARDI

Bu proje Awwwards, Webflow Awards, FWA seviyesinde OLMALI:

- ✅ İlk bakışta "WOW" efekti
- ✅ 3D sahne ile derinlik hissi
- ✅ Sinematik animasyonlar
- ✅ Glassmorphism ve premium glass efektler
- ✅ Smooth scroll geçişleri
- ✅ Interactive her yerde
- ✅ Dark luxury estetik
- ✅ Mobile ve desktop mükemmel
- ✅ Zero bug, zero lint error
