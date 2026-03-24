export default function PaymentSuccess() {
  return (
    <section className="section-pad">
      <div className="mx-auto w-full max-w-4xl px-6">
        <div className="glass-card rounded-3xl p-8 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1f1c1a] text-2xl text-white">
            ✓
          </div>
          <h2 className="mt-6 text-3xl font-semibold">Payment confirmed</h2>
          <p className="mt-3 text-sm text-[#5d534b]">
            Your support for SignalKit was processed successfully. A receipt has been sent to your email.
          </p>
          <div className="mx-auto mt-6 grid max-w-xl gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-[#eadfd4] bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8a776b]">Amount</p>
              <p className="mt-2 text-lg font-semibold">₦15,000</p>
            </div>
            <div className="rounded-2xl border border-[#eadfd4] bg-white p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8a776b]">Status</p>
              <p className="mt-2 text-lg font-semibold">Settled via Interswitch</p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-[#d76b4d] px-6 py-2 text-sm font-semibold text-white">
              Back to creator page
            </button>
            <button className="rounded-full border border-[#1f1c1a] px-6 py-2 text-sm font-semibold text-[#1f1c1a]">
              Share your support
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
