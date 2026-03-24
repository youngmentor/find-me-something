const shareTools = [
  {
    title: 'Smart Link',
    detail: 'findme.to/devfolio',
    action: 'Copy link',
  },
  {
    title: 'GitHub Badge',
    detail: 'Add to README.md',
    action: 'Get snippet',
  },
  {
    title: 'Newsletter CTA',
    detail: 'Monthly support button',
    action: 'Customize',
  },
]

export default function ShareTools() {
  return (
    <section className="section-pad">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Share tools</p>
            <h2 className="section-title">Every creator gets a growth toolkit.</h2>
          </div>
          <button className="rounded-full bg-[#1f1c1a] px-5 py-2 text-sm font-semibold text-white">
            Generate share kit
          </button>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            {shareTools.map((tool) => (
              <div key={tool.title} className="glass-card flex items-center justify-between rounded-3xl p-5">
                <div>
                  <p className="text-base font-semibold">{tool.title}</p>
                  <p className="text-sm text-[#5d534b]">{tool.detail}</p>
                </div>
                <button className="rounded-full border border-[#1f1c1a] px-4 py-2 text-xs font-semibold text-[#1f1c1a]">
                  {tool.action}
                </button>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Embeddable widget preview</p>
              <span className="text-xs text-[#7a6558]">Live</span>
            </div>
            <div className="mt-5 rounded-3xl border border-[#eadfd4] bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-[#f7c98b]" />
                <div>
                  <p className="text-sm font-semibold">Support SignalKit</p>
                  <p className="text-xs text-[#7a6558]">Widget · Compact</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-[#5d534b]">Monthly goal</span>
                <span className="font-semibold">₦1.8m</span>
              </div>
              <div className="mt-2 h-2 w-full rounded-full bg-[#f1e7dd]">
                <div className="h-2 w-[72%] rounded-full bg-[#1f1c1a]" />
              </div>
              <button className="mt-4 w-full rounded-2xl bg-[#d76b4d] py-2 text-xs font-semibold text-white">
                Support now
              </button>
            </div>
            <div className="mt-5 rounded-2xl border border-[#eadfd4] bg-[#1f1c1a] p-4 text-xs text-[#f7f3ed]">
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#f7c98b]">Embed code</p>
              <code className="mt-2 block text-[12px] text-[#f7f3ed]">
                &lt;script src="https://findme.so/widget.js" data-creator="signalkit"&gt;&lt;/script&gt;
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
