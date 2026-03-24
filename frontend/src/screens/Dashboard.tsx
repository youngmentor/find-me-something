const analytics = [
  { label: 'Monthly Support', value: '₦4.6m', delta: '+18% MoM' },
  { label: 'Active Supporters', value: '1,482', delta: '+9% MoM' },
  { label: 'Conversion Rate', value: '4.2%', delta: '+0.6% MoM' },
  { label: 'Avg. Tip', value: '₦6,400', delta: '+3% MoM' },
]

const transactions = [
  {
    name: 'Seyi Adeoye',
    amount: '₦25,000',
    tier: 'Launch Sponsor',
    status: 'Paid',
    date: 'Mar 22, 2026',
  },
  {
    name: 'OpenBuild Team',
    amount: '₦12,000',
    tier: 'Monthly Backer',
    status: 'Paid',
    date: 'Mar 21, 2026',
  },
  {
    name: 'Ngozi Ifeanyi',
    amount: '₦6,500',
    tier: 'One-time',
    status: 'Pending',
    date: 'Mar 20, 2026',
  },
  {
    name: 'Bryan Chen',
    amount: '₦18,000',
    tier: 'Launch Sponsor',
    status: 'Paid',
    date: 'Mar 19, 2026',
  },
]

const momentumStats = [
  { label: 'New supporters', value: '74' },
  { label: 'One-time gifts', value: '39' },
  { label: 'Recurring plans', value: '21' },
]

export default function Dashboard() {
  return (
    <section className="section-pad">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Creator dashboard</p>
            <h2 className="section-title">Analytics built for sustainable funding.</h2>
          </div>
          <button className="rounded-full border border-[#1f1c1a] px-5 py-2 text-sm font-semibold text-[#1f1c1a]">
            Export report
          </button>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {analytics.map((metric) => (
            <div key={metric.label} className="glass-card rounded-3xl p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8a776b]">{metric.label}</p>
              <p className="mt-3 text-2xl font-semibold">{metric.value}</p>
              <p className="mt-2 text-xs text-[#7a6558]">{metric.delta}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="glass-card rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Support momentum</p>
              <span className="rounded-full bg-[#f7efe7] px-3 py-1 text-xs font-semibold text-[#7a6558]">
                Last 30 days
              </span>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {momentumStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-[#eadfd4] bg-white p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8a776b]">{stat.label}</p>
                  <p className="mt-3 text-xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 h-40 rounded-2xl border border-dashed border-[#d6c8ba] bg-[linear-gradient(120deg,#fff,#f4ebe3)]" />
          </div>

          <div className="glass-card rounded-3xl p-6">
            <p className="text-sm font-semibold">Latest transactions</p>
            <div className="mt-4 space-y-3 text-sm">
              {transactions.map((transaction) => (
                <div
                  key={transaction.name}
                  className="flex items-center justify-between rounded-2xl border border-[#eadfd4] bg-white px-4 py-3"
                >
                  <div>
                    <p className="font-semibold">{transaction.name}</p>
                    <p className="text-xs text-[#7a6558]">{transaction.tier}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{transaction.amount}</p>
                    <p className="text-xs text-[#7a6558]">{transaction.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full rounded-2xl border border-[#1f1c1a] py-2 text-sm font-semibold text-[#1f1c1a]">
              View all transactions
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
