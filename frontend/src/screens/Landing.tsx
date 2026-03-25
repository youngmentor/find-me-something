import { useEffect, useState } from 'react'

const typewriterWords = [
  'free tools',
  'open-source projects',
  'developer toolkits',
  'indie maker apps',
  'digital craftsmanship',
  'side project gems',
]

const howItWorks = [
  {
    title: 'List your tool',
    detail:
      'Connect your GitHub or package manager and create a beautiful spotlight page in seconds.',
    icon: '📦',
    tone: 'bg-[#ffe9d1] text-[#a45a14]',
  },
  {
    title: 'Receive support',
    detail:
      'Let users buy you a coffee or sponsor a feature via a seamless, non-intrusive widget.',
    icon: '🤝',
    tone: 'bg-[#e6ecff] text-[#1f3a93]',
  },
  {
    title: 'Grow sustainably',
    detail:
      'Use detailed analytics to understand impact and focus your energy on what matters most.',
    icon: '📈',
    tone: 'bg-[#e3f6f1] text-[#0f5d4c]',
  },
]

const curated = [
  {
    title: 'HyperLog v2.0',
    description:
      'The lightweight, ultra-fast logging engine for distributed systems. Zero configuration required.',
    badge: 'Trending',
    stats: ['12.4k', '842'],
  },
  {
    title: 'Atelier UI Kit',
    description: 'A set of minimalist React components for rapid prototyping.',
    badge: 'Starter kit',
    stats: ['4.1k', '214'],
  },
  {
    title: 'Shield.js',
    description: 'Enterprise-grade encryption for local storage data protection.',
    badge: 'Security',
    stats: ['8.7k', '506'],
  },
]

const testimonials = [
  {
    quote:
      'Find-me-something gave my side project a professional home. Within the first week, I had three regular sponsors.',
    name: 'Alex Rivera',
    role: 'Creator of FluxDB',
  },
  {
    quote:
      'The support widget is so clean. It fits my aesthetic perfectly and makes supporting my tools feel premium.',
    name: 'Sarah Chen',
    role: 'Lead at PixelForge',
  },
  {
    quote:
      'Sustainable open source is finally possible. The analytics show me exactly how to prioritize improvements.',
    name: 'Marcus Thorne',
    role: 'DevOps Specialist',
  },
]

export default function Landing() {
  const [wordIndex, setWordIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex]
    let timeoutId: number

    if (!isDeleting && subIndex === currentWord.length) {
      timeoutId = window.setTimeout(() => setIsDeleting(true), 1200)
    } else if (isDeleting && subIndex === 0) {
      timeoutId = window.setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % typewriterWords.length)
      }, 300)
    } else {
      timeoutId = window.setTimeout(
        () => setSubIndex((prev) => prev + (isDeleting ? -1 : 1)),
        isDeleting ? 45 : 90,
      )
    }

    return () => window.clearTimeout(timeoutId)
  }, [isDeleting, subIndex, wordIndex])

  return (
    <section className="space-y-20 pb-20">
      <div className="mx-auto w-full max-w-6xl px-6 pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#efe4d9] bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#7a6558]">
              + Open-source empowerment
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-[#1f1c1a] md:text-5xl">
              Receive support for your{' '}
              <span className="text-[#d76b4d]">
                {typewriterWords[wordIndex].slice(0, subIndex)}
                <span className="ml-1 inline-block h-6 w-0.5 translate-y-0.5 bg-[#d76b4d] align-middle animate-pulse" />
              </span>
            </h1>
            <p className="max-w-xl text-base text-[#4c433c] md:text-lg">
              Find-me-something is the sophisticated sanctuary for digital artisans. We help creators of
              open-source utilities turn passion projects into sustainable craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-[#1f1c1a] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_32px_-20px_rgba(31,28,26,0.75)]">
                Get Started Free
              </button>
              <button className="rounded-full border border-[#1f1c1a] px-6 py-3 text-sm font-semibold text-[#1f1c1a]">
                Explore Creators
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-4xl border border-white/60 bg-white/90 p-5 shadow-[0_30px_80px_-55px_rgba(31,28,26,0.8)]">
              <div className="rounded-4xl border border-[#eae3f2] bg-linear-to-br from-[#1f3a93] to-[#5aa7ff] p-6 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">Creator dashboard</p>
                <div className="mt-4 h-36 rounded-2xl bg-white/15" />
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {['Overview', 'Supporters', 'Payouts'].map((label) => (
                    <div key={label} className="rounded-xl bg-white/20 px-3 py-2 text-xs">
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -left-6 bottom-10 rounded-2xl border border-[#efe4d9] bg-white px-4 py-3 text-xs shadow-[0_20px_40px_-26px_rgba(31,28,26,0.6)]">
              <div className="flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#f9d7b0]">❤</span>
                <div>
                  <p className="font-semibold text-[#1f1c1a]">Recent support</p>
                  <p className="text-[#7a6558]">₦12,500 · 2 mins ago</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 bottom-10 w-52 rounded-2xl border border-[#efe4d9] bg-white p-4 text-xs shadow-[0_20px_40px_-26px_rgba(31,28,26,0.6)]">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Support Widget</p>
                <span className="text-[#d76b4d]">⚡</span>
              </div>
              <p className="mt-2 text-[#7a6558]">Love using Find-me-something? Support the creator.</p>
              <div className="mt-3 flex items-center gap-2">
                {['$5', '$10', '$25'].map((amount) => (
                  <div
                    key={amount}
                    className="rounded-full border border-[#e8d9cb] bg-[#fffaf4] px-3 py-1 text-[11px] font-semibold"
                  >
                    {amount}
                  </div>
                ))}
              </div>
              <button className="mt-3 w-full rounded-full bg-[#d76b4d] py-2 text-xs font-semibold text-white">
                Support Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f2f3ff] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">How Find-me-something works</h2>
            <p className="mt-3 text-sm text-[#5d534b]">
              Simple, elegant mechanics designed to put your tools in front of the right audience while
              facilitating meaningful support.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {howItWorks.map((item) => (
              <div key={item.title} className="rounded-3xl bg-white p-6 shadow-[0_26px_55px_-45px_rgba(31,28,26,0.7)]">
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.tone}`}>
                  {item.icon}
                </div>
                <p className="mt-4 text-base font-semibold">{item.title}</p>
                <p className="mt-3 text-sm text-[#5d534b]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Curated masterpieces</p>
            <h2 className="text-3xl font-semibold">Spotlighting the best open-source tools.</h2>
          </div>
          <button className="rounded-full border border-[#1f1c1a] px-5 py-2 text-sm font-semibold text-[#1f1c1a]">
            View Full Library
          </button>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl bg-white p-6 shadow-[0_32px_70px_-55px_rgba(31,28,26,0.7)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#7a6558]">{curated[0].badge}</p>
                <p className="mt-2 text-xl font-semibold">{curated[0].title}</p>
              </div>
              <span className="rounded-full bg-[#f7efe7] px-3 py-1 text-xs font-semibold text-[#7a6558]">
                Trending
              </span>
            </div>
            <p className="mt-4 text-sm text-[#5d534b]">{curated[0].description}</p>
            <div className="mt-6 flex items-center gap-6 text-xs text-[#7a6558]">
              <span>⭐ {curated[0].stats[0]}</span>
              <span>👥 {curated[0].stats[1]}</span>
            </div>
            <div className="mt-6 h-32 rounded-2xl bg-[linear-gradient(135deg,#dfe7ff,#f6f1ff)]" />
          </div>
          <div className="space-y-6">
            {curated.slice(1).map((item) => (
              <div key={item.title} className="rounded-3xl bg-[#f2f5ff] p-5 shadow-[0_30px_60px_-50px_rgba(31,28,26,0.6)]">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold text-[#7a6558]">
                    {item.badge}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#5d534b]">{item.description}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-[#7a6558]">
                  <span>⭐ {item.stats[0]}</span>
                  <span>👥 {item.stats[1]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#dfe4ff] py-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="text-center">
            <p className="section-kicker">Loved by creators</p>
            <h2 className="text-3xl font-semibold">Trusted by the community</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-3xl bg-white p-6 shadow-[0_32px_70px_-55px_rgba(31,28,26,0.7)]">
                <p className="text-sm text-[#1f1c1a]">★★★★★</p>
                <p className="mt-4 text-sm text-[#5d534b]">“{item.quote}”</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-xs text-[#7a6558]">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
