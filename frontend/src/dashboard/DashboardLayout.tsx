import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#f7f3ed] text-[#1f1c1a]">
      <div className="mx-auto flex w-full max-w-7xl gap-6 px-6 py-8">
       <section className='w-[15%]'>
          <Sidebar />
       </section>
        <main className="w-[85%]">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
