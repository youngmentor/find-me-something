function Footer() {
  return (
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
  )
}

export default Footer
