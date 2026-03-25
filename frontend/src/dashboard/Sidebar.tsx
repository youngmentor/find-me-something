import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Overview', to: '/dashboard' },
  { label: 'Supporters', to: '/dashboard/supporters' },
  { label: 'Campaigns', to: '/dashboard/campaigns' },
  { label: 'Payouts', to: '/dashboard/payouts' },
  { label: 'Settings', to: '/dashboard/settings' },
]

function Sidebar() {
  return (
    <aside className="w-full shrink-0 lg:w-64">
      <div className="rounded-3xl border border-[#eadfd4] bg-white/80 p-5 shadow-[0_24px_60px_-40px_rgba(31,28,26,0.6)] backdrop-blur lg:sticky lg:top-8">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-[#1f1c1a] text-xs font-semibold text-white">
            Fm
          </span>
          <div>
            <p className="text-sm font-semibold">Creator Studio</p>
            <p className="text-xs text-[#7a6558]">Dashboard</p>
          </div>
        </div>

        <div className="mt-6 grid gap-1 text-sm">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                [
                  'flex items-center justify-between rounded-2xl px-3 py-2 transition',
                  isActive
                    ? 'bg-[#1f1c1a] text-white'
                    : 'text-[#6c5a4d] hover:bg-[#f5eee7] hover:text-[#1f1c1a]',
                ].join(' ')
              }
              end={link.to === '/dashboard'}
            >
              <span>{link.label}</span>
              {link.to === '/dashboard' ? null : (
                <span className="text-xs text-[#b39d8e]">Soon</span>
              )}
            </NavLink>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-[#eadfd4] bg-white p-4">
          <p className="text-xs uppercase tracking-[0.2em] text-[#8a776b]">Plan</p>
          <p className="mt-2 text-sm font-semibold">Community Pro</p>
          <p className="mt-1 text-xs text-[#7a6558]">Next payout in 3 days</p>
          <button className="mt-4 w-full rounded-full border border-[#1f1c1a] py-2 text-xs font-semibold text-[#1f1c1a]">
            Manage plan
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
