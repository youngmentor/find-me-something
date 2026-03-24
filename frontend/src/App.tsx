import { NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fff4e4_0%,#f7f3ed_45%,#eef4f1_100%)] text-[#1f1c1a]">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[8%] top-[12%] h-52 w-52 rounded-full bg-[#f7c98b] blur-[120px]" />
        <div className="absolute right-[12%] top-[22%] h-64 w-64 rounded-full bg-[#7bb6b2] blur-[140px]" />
      </div>

      <header className="relative z-20 border-b border-[#efe4d9] bg-white/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-5">
          <div className="flex items-center gap-2 text-base font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-2xl bg-[#1f1c1a] text-xs font-semibold text-white">
              Fm
            </span>
            <span>Find-me-something</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-[#6c5a4d] md:flex">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-[#1f1c1a]' : 'transition hover:text-[#1f1c1a]'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/creator"
              className={({ isActive }) =>
                isActive ? 'text-[#1f1c1a]' : 'transition hover:text-[#1f1c1a]'
              }
            >
              Browse
            </NavLink>
          </nav>
          <div className="flex items-center gap-3 text-sm">
            <NavLink to="/signup" className="text-[#6c5a4d] hover:text-[#1f1c1a]">
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="rounded-full bg-[#d76b4d] px-4 py-2 text-xs font-semibold text-white shadow-[0_12px_30px_-18px_rgba(215,107,77,0.85)]"
            >
              Join Free
            </NavLink>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <Outlet />
      </main>

      <footer className="relative z-10 border-t border-[#eadfd4] py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base font-semibold">Find-me-something</p>
            <p className="text-sm text-[#7a6558]">Empowering open tools through community support.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#5d534b]">
            <span>Security</span>
            <span>Docs</span>
            <span>Pricing</span>
            <span>Support</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
