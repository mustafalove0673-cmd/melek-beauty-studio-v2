export interface Video {
  id: number;
  title: string;
  description: string;
  category: string;
  likes: number;
  comments: number;
  date: string;
  url: string;
  repo?: string;
  repoUrl?: string;
  tags: string[];
}

export interface Category {
  name: string;
  icon: string;
  count: number;
  color: string;
}

export const categories: Category[] = [
  { name: "Tümü", icon: "📺", count: 13, color: "from-accent to-orange-500" },
  { name: "Claude Code", icon: "🤖", count: 3, color: "from-emerald-500 to-teal-500" },
  { name: "AI / ML", icon: "🧠", count: 2, color: "from-violet-500 to-purple-500" },
  { name: "Web Dev", icon: "🌐", count: 5, color: "from-sky-500 to-cyan-500" },
  { name: "Best Practice", icon: "⚡", count: 3, color: "from-rose-500 to-pink-500" },
];

export const videos: Video[] = [
  {
    id: 1,
    title: "Kendi Developer Topluluğunu Kur",
    description: "Forem, dev.to'nun arkasındaki açık kaynak altyapıdır. Blog, tartışma, profil ve bildirim sistemi hazır olarak gelir. Self-hosted çalışır ve 3.8M+ kullanıcısı vardır.",
    category: "Web Dev",
    likes: 199,
    comments: 15,
    date: "29 Mart 2026",
    url: "https://www.instagram.com/reel/DWehR3VDLZ5/",
    repo: "forem/forem",
    repoUrl: "https://github.com/forem/forem",
    tags: ["Community", "Open Source", "Self-Hosted"],
  },
  {
    id: 2,
    title: "Claude Code İçin Repo",
    description: "Claude Code kullanıyorsan ama tam verim alamıyorsan bu repo tam sana göre. Claude Code best practices kapsamlı bir şekilde toplanmıştır.",
    category: "Claude Code",
    likes: 43,
    comments: 1,
    date: "2 Nisan 2026",
    url: "https://www.instagram.com/reel/DWozvx6DElj/",
    repo: "shanraisshan/claude-code-best-practice",
    repoUrl: "https://github.com/shanraisshan/claude-code-best-practice",
    tags: ["Claude Code", "Best Practices"],
  },
  {
    id: 3,
    title: "Claude Code /simplify Komutu",
    description: "Claude Code'da /simplify komutu: önce çalıştır, sonra refactor akışını hızlandırıyor. Son değişikliklerini inceliyor, 3 paralel review alıp birleştiriyor.",
    category: "Claude Code",
    likes: 1212,
    comments: 29,
    date: "11 Mart 2026",
    url: "https://www.instagram.com/reel/DVwLYWMjKKV/",
    tags: ["Claude Code", "Productivity"],
  },
  {
    id: 4,
    title: "AI Coding Agent'ler ve Superpowers",
    description: "AI coding agent'ler bazen fazla hızlı gidip bağlam kaybediyor. Superpowers eklentisi bu sorunu çözüyor.",
    category: "Claude Code",
    likes: 280,
    comments: 22,
    date: "12 Mart 2026",
    url: "https://www.instagram.com/reel/DVyxqwWDCVi/",
    repo: "superpowers",
    tags: ["AI Agents", "Context", "Extension"],
  },
  {
    id: 5,
    title: "Claude Code Limitleri Hızlı Bitiyorsa",
    description: "/model opusplan komutu ile model yönetimi yapılabilir. Güçlü modeli sadece kritik adımlarda kullanmak limit tasarrufu sağlar.",
    category: "Claude Code",
    likes: 986,
    comments: 26,
    date: "Mart 2026",
    url: "https://www.instagram.com/reel/DV_n1CTjB30/",
    tags: ["Claude Code", "Limits", "Model"],
  },
  {
    id: 6,
    title: "SaaS Tanıtım Videosu Üret",
    description: "Openscreen ile video üretim aracı. Açık kaynak ve özelleştirilebilir. SaaS ürününün tanıtım videosunu profesyonelce oluşturmak istiyorsan.",
    category: "Web Dev",
    likes: 526,
    comments: 26,
    date: "18 Mart 2026",
    url: "https://www.instagram.com/reel/DWCMMukjJQj/",
    repo: "siddharthvaddem/openscreen",
    repoUrl: "https://github.com/siddharthvaddem/openscreen",
    tags: ["SaaS", "Video", "Marketing"],
  },
  {
    id: 7,
    title: "Lighthouse Optimizasyonu",
    description: "Lighthouse skorlarının yeşile dönmemesi için pratik çözümler. Görselleri sıkıştırma, lazy loading, code splitting optimizasyonları.",
    category: "Best Practice",
    likes: 150,
    comments: 12,
    date: "Şubat 2026",
    url: "https://www.instagram.com/reel/DOv-dQJjfh0/",
    tags: ["Performance", "SEO", "Optimization"],
  },
  {
    id: 8,
    title: "Component Test — Storybook",
    description: "Her yeni component'i test etmek için uygulamanın tamamını çalıştırmaktan bıktıysan. Storybook ile izole geliştir ve test et.",
    category: "Web Dev",
    likes: 133,
    comments: 9,
    date: "30 Ocak 2026",
    url: "https://www.instagram.com/reel/DUJMW_4jPlm/",
    repo: "storybookjs/storybook",
    repoUrl: "https://github.com/storybookjs/storybook",
    tags: ["Testing", "Components", "Documentation"],
  },
  {
    id: 9,
    title: "Yapay Zeka Öğrenmek",
    description: "Microsoft'un Generative AI for Beginners kursu: 21 ders, sıfırdan ileri seviyeye. LLM temelleri, prompt engineering, RAG, AI agents ve fine-tuning.",
    category: "AI / ML",
    likes: 388,
    comments: 5,
    date: "28 Ocak 2026",
    url: "https://www.instagram.com/reel/DUEIb8VgG_4/",
    repo: "microsoft/generative-ai-for-beginners",
    repoUrl: "https://github.com/microsoft/generative-ai-for-beginners",
    tags: ["AI", "Course", "Microsoft"],
  },
  {
    id: 10,
    title: "Website Builder — Webstudio",
    description: "Webstudio: Class yerine Token sistemi, herhangi bir API'den veri çekme, Cloudflare altyapısıyla hız, tek tıkla yayımla veya self-host.",
    category: "Web Dev",
    likes: 221,
    comments: 18,
    date: "26 Ocak 2026",
    url: "https://www.instagram.com/reel/DT-2S2ODIso/",
    repo: "webstudio-is/webstudio",
    repoUrl: "https://github.com/webstudio-is/webstudio",
    tags: ["Website Builder", "No-Code", "Open Source"],
  },
  {
    id: 11,
    title: "Remotion ile Video Üret",
    description: "Flutter tasarım sistemleri ve AI ile teknik borç tespiti. Remotion ile React componentleri kullanarak MP4 video oluşturma.",
    category: "Web Dev",
    likes: 12,
    comments: 2,
    date: "9 Mart 2026",
    url: "https://www.instagram.com/reel/DVqgiDvD6hj/",
    repo: "remotion-dev/remotion",
    repoUrl: "https://github.com/remotion-dev/remotion",
    tags: ["Remotion", "React", "Video"],
  },
  {
    id: 12,
    title: "HTMX + Remotion",
    description: "HTMX ile sadece HTML attribute'ları kullanarak dinamik sayfalar oluşturma. Remotion ile React yazarak gerçek video üretim.",
    category: "Best Practice",
    likes: 545,
    comments: 28,
    date: "Mart 2026",
    url: "https://www.instagram.com/reel/DWUYCTIAJfC/",
    repo: "remotion-dev/remotion",
    repoUrl: "https://github.com/remotion-dev/remotion",
    tags: ["HTMX", "Remotion", "Dynamic"],
  },
  {
    id: 13,
    title: "Framework Karar Verme Stratejisi",
    description: "Framework seçiminde 3 ana kriter: Proje gereksinimleri analizi, ekip tecrübesi değerlendirmesi, framework olgunluğu kontrolü.",
    category: "Best Practice",
    likes: 180,
    comments: 14,
    date: "Ekim 2025",
    url: "https://www.instagram.com/reel/DP8vR8Jjdgs/",
    tags: ["Framework", "Strategy", "Architecture"],
  },
];
