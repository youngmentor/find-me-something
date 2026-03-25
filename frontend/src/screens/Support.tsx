import { useForm } from 'react-hook-form'

const toolkit = [
  {
    title: 'Deep Web Scraper Pro',
    detail: 'Advanced indexing tool for finding out-of-stock inventory.',
    icon: '🔎',
  },
  {
    title: 'Visual Semantic AI',
    detail: 'Match textures and forms across global archives.',
    icon: '✨',
  },
]

const tags = ['Sourcing', 'Product Research', 'Design History']

type SupportForm = {
  amount: string
  name: string
  note: string
}

export default function Support() {
  const { register, handleSubmit, setValue, watch } = useForm<SupportForm>({
    defaultValues: {
      amount: '$10',
      name: '',
      note: '',
    },
  })

  const selectedAmount = watch('amount')

  const onSubmit = (data: SupportForm) => {
    console.log('Support sent', data)
  }

  return (
    <section className="space-y-10 pb-20">
      <div className="mx-auto w-full max-w-6xl px-6 pt-10">
        <div className="relative overflow-hidden rounded-[36px] bg-[linear-gradient(120deg,#f5d9b5,#c4a184,#8f6d57)] p-8 shadow-[0_40px_90px_-70px_rgba(31,28,26,0.8)] md:p-12">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-10 top-10 h-24 w-24 rounded-full bg-white/50 blur-[30px]" />
            <div className="absolute right-10 bottom-8 h-32 w-32 rounded-full bg-white/40 blur-[40px]" />
          </div>
          <div className="relative z-10 flex items-end gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-[28px] bg-white/90 text-3xl shadow-[0_20px_40px_-25px_rgba(31,28,26,0.7)]">
              👤
            </div>
            <div>
              <p className="text-sm text-white/80">Creator profile</p>
              <h1 className="mt-2 text-3xl font-semibold text-white md:text-4xl">Find-me-something</h1>
              <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-[#6c4b33]">
                Curated Search & Aesthetic Sourcing Specialist
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="rounded-[32px] bg-[#f2f3ff] p-6 shadow-[0_30px_70px_-55px_rgba(31,28,26,0.7)]">
              <h2 className="text-xl font-semibold">About the Atelier</h2>
              <p className="mt-4 text-sm text-[#5d534b]">
                I specialize in finding the unfindable. Whether it&apos;s a mid-century lamp for your study or
                the perfect niche software for your workflow, I bridge the gap between desire and discovery.
                Your support helps maintain premium subscriptions and archival access required for
                high-end sourcing.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-[#6c5a4d]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-sm font-semibold text-[#1f1c1a]">
                <span className="text-lg">🧰</span>
                Curator&apos;s Toolkit
              </div>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                {toolkit.map((item) => (
                  <div key={item.title} className="rounded-3xl bg-white p-5 shadow-[0_26px_55px_-45px_rgba(31,28,26,0.6)]">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e6ecff] text-lg">
                      {item.icon}
                    </div>
                    <p className="mt-4 text-sm font-semibold">{item.title}</p>
                    <p className="mt-2 text-xs text-[#7a6558]">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-[#fff4ec] p-6 shadow-[0_26px_55px_-45px_rgba(31,28,26,0.6)]">
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>March Sourcing Fund</span>
                <span className="text-[#d76b4d]">78%</span>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-white">
                <div className="h-2 w-[78%] rounded-full bg-[#d76b4d]" />
              </div>
              <p className="mt-3 text-xs text-[#7a6558]">
                ₦1,950 raised of ₦2,500 goal for the Tokyo Design Archive expedition.
              </p>
            </div>
          </div>

          <form
            className="rounded-[32px] bg-white p-6 shadow-[0_30px_70px_-55px_rgba(31,28,26,0.7)]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="text-xl font-semibold">Support the Craft</h2>
            <p className="mt-2 text-sm text-[#7a6558]">Fuel the search for extraordinary things.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {['$5', '$10', '$25', 'Custom'].map((amount) => (
                <button
                  key={amount}
                  type="button"
                  onClick={() => setValue('amount', amount)}
                  className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                    selectedAmount === amount
                      ? 'border-[#1f1c1a] bg-[#1f1c1a] text-white'
                      : 'border-[#e6d9cc] bg-[#f2f3ff] text-[#1f1c1a] hover:border-[#1f1c1a]'
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>
            <input type="hidden" {...register('amount')} />
            <div className="mt-6 space-y-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
              <label className="block">
                Your name (optional)
                <input
                  {...register('name')}
                  className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-[#f2f3ff] px-4 py-3 text-sm font-normal text-[#1f1c1a]"
                  placeholder="Anonymous Curator"
                />
              </label>
              <label className="block">
                Leave a note
                <textarea
                  {...register('note')}
                  className="mt-2 min-h-[120px] w-full rounded-2xl border border-[#e6d9cc] bg-[#f2f3ff] px-4 py-3 text-sm font-normal text-[#1f1c1a]"
                  placeholder="I'm looking for a specific Bauhaus chair..."
                />
              </label>
            </div>
            <button className="mt-6 w-full rounded-full bg-[#d76b4d] py-3 text-sm font-semibold text-white shadow-[0_16px_30px_-18px_rgba(215,107,77,0.9)]">
              Send Support
            </button>
            <p className="mt-4 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a38f7d]">
              Secured by Interswitch payments
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
