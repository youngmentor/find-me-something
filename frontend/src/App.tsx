import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'

function Layout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#fff4e4_0%,#f7f3ed_45%,#eef4f1_100%)] text-[#1f1c1a]">

      <Header />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Layout
