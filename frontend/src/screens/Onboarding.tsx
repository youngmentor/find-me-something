import { useState } from 'react'

const onboardingSteps = [
  {
    step: 'Step 1',
    title: 'Creator profile',
    detail: 'Add your bio, tool stack, and highlight open-source impact.',
  },
  {
    step: 'Step 2',
    title: 'Payout setup',
    detail: 'Connect Interswitch, set payout cadence, verify identity.',
  },
  {
    step: 'Step 3',
    title: 'Support goals',
    detail: 'Define monthly goals, perks, and stretch milestones.',
  },
  {
    step: 'Step 4',
    title: 'Launch',
    detail: 'Publish your public page, create a share kit, invite testers.',
  },
]

export default function Onboarding() {
  const [activeStep, setActiveStep] = useState(0)
  const [form, setForm] = useState({
    displayName: '',
    handle: '',
    bio: '',
    website: '',
    payoutBank: '',
    payoutAccount: '',
    payoutFrequency: 'Monthly',
    goalMonthly: '',
    goalStretch: '',
    perkPrimary: '',
    launchDate: '',
    newsletter: true,
    terms: false,
  })

  const updateField = (key: keyof typeof form, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <section className="section-pad">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Creator onboarding</p>
            <h2 className="section-title">Set up your payout flow with confidence.</h2>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-4">
            {onboardingSteps.map((item, index) => {
              const isActive = index === activeStep
              const isCompleted = index < activeStep
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`glass-card flex w-full items-start gap-4 rounded-3xl p-5 text-left transition ${
                    isActive ? 'border-[#1f1c1a]' : 'hover:border-[#1f1c1a]'
                  }`}
                >
                  <div
                    className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl text-sm font-semibold ${
                      isCompleted
                        ? 'bg-[#1f1c1a] text-white'
                        : isActive
                          ? 'bg-[#d76b4d] text-white'
                          : 'bg-[#f7efe7] text-[#7a6558]'
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8a776b]">{item.step}</p>
                    <p className="mt-2 text-base font-semibold">{item.title}</p>
                    <p className="mt-2 text-sm text-[#5d534b]">{item.detail}</p>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="glass-card rounded-3xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                  {onboardingSteps[activeStep].step}
                </p>
                <p className="mt-2 text-lg font-semibold">{onboardingSteps[activeStep].title}</p>
              </div>
              <div className="rounded-full bg-[#f7efe7] px-4 py-2 text-xs font-semibold text-[#7a6558]">
                {activeStep + 1} of {onboardingSteps.length}
              </div>
            </div>

            <div className="mt-6 space-y-5 text-sm text-[#5d534b]">
              {activeStep === 0 && (
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Creator name
                    </span>
                    <input
                      value={form.displayName}
                      onChange={(event) => updateField('displayName', event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="Nova CLI"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Handle
                    </span>
                    <input
                      value={form.handle}
                      onChange={(event) => updateField('handle', event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="@novacli"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Short bio
                    </span>
                    <textarea
                      value={form.bio}
                      onChange={(event) => updateField('bio', event.target.value)}
                      className="mt-2 min-h-30 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="Tell supporters what you are building."
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Primary website
                    </span>
                    <input
                      value={form.website}
                      onChange={(event) => updateField('website', event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="https://novacli.dev"
                    />
                  </label>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Payout bank
                    </span>
                    <input
                      value={form.payoutBank}
                      onChange={(event) => updateField('payoutBank', event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="Interswitch-enabled bank"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Account number
                    </span>
                    <input
                      value={form.payoutAccount}
                      onChange={(event) => updateField('payoutAccount', event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="0123456789"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Payout frequency
                    </span>
                    <div className="mt-2 grid gap-3 sm:grid-cols-3">
                      {['Weekly', 'Bi-weekly', 'Monthly'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => updateField('payoutFrequency', option)}
                          className={`rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                            form.payoutFrequency === option
                              ? 'border-[#1f1c1a] bg-[#1f1c1a] text-white'
                              : 'border-[#e6d9cc] bg-white text-[#1f1c1a] hover:border-[#1f1c1a]'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </label>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Monthly goal (₦)
                    </span>
                    <input
                      value={form.goalMonthly}
                      onChange={(event) => updateField('goalMonthly', event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="1800000"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Stretch goal (₦)
                    </span>
                    <input
                      value={form.goalStretch}
                      onChange={(event) => updateField('goalStretch', event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="2500000"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Primary supporter perk
                    </span>
                    <input
                      value={form.perkPrimary}
                      onChange={(event) => updateField('perkPrimary', event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="Early access to releases"
                    />
                  </label>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-4">
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Launch date
                    </span>
                    <input
                      value={form.launchDate}
                      onChange={(event) => updateField('launchDate', event.target.value)}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="Mar 30, 2026"
                    />
                  </label>
                  <label className="flex items-center gap-3 rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3">
                    <input
                      checked={form.newsletter}
                      onChange={(event) => updateField('newsletter', event.target.checked)}
                      className="h-4 w-4 accent-[#1f1c1a]"
                      type="checkbox"
                    />
                    <span>Notify supporters with a launch update email.</span>
                  </label>
                  <label className="flex items-center gap-3 rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3">
                    <input
                      checked={form.terms}
                      onChange={(event) => updateField('terms', event.target.checked)}
                      className="h-4 w-4 accent-[#1f1c1a]"
                      type="checkbox"
                    />
                    <span>I confirm I can receive funds via Interswitch.</span>
                  </label>
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
                className="rounded-full border border-[#1f1c1a] px-5 py-2 text-sm font-semibold text-[#1f1c1a]"
                disabled={activeStep === 0}
              >
                Back
              </button>
              <div className="flex items-center gap-3">
                {activeStep < onboardingSteps.length - 1 ? (
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => Math.min(prev + 1, onboardingSteps.length - 1))}
                    className="rounded-full bg-[#1f1c1a] px-6 py-2 text-sm font-semibold text-white"
                  >
                    Next step
                  </button>
                ) : (
                  <button
                    type="button"
                    className="rounded-full bg-[#d76b4d] px-6 py-2 text-sm font-semibold text-white"
                  >
                    Publish creator page
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
