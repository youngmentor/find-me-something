import { NavLink } from 'react-router-dom'

function Header() {
  return (
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
          <NavLink to="/login" className="text-[#6c5a4d] hover:text-[#1f1c1a]">
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
  )
}

export default Header
