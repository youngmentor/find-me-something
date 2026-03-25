import { useState } from 'react'
import { useForm } from 'react-hook-form'

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
]

type OnboardingForm = {
  displayName: string
  handle: string
  bio: string
  website: string
  payoutBank: string
  payoutAccount: string
  payoutFrequency: 'Weekly' | 'Bi-weekly' | 'Monthly'
}

export default function Onboarding() {
  const [activeStep, setActiveStep] = useState(0)
  const { register, handleSubmit, } = useForm<OnboardingForm>({
    defaultValues: {
      displayName: '',
      handle: '',
      bio: '',
      website: '',
      payoutBank: '',
      payoutAccount: '',
      payoutFrequency: 'Monthly',
    },
  })


  const onSubmit = (data: OnboardingForm) => {
    console.log('Onboarding submit', data)
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

          <form className="glass-card rounded-3xl p-6" onSubmit={handleSubmit(onSubmit)}>
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
                      Handle
                    </span>
                    <input
                      {...register('handle')}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="@novacli"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Short bio
                    </span>
                    <textarea
                      {...register('bio')}
                      className="mt-2 min-h-40 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="Tell supporters what you are building."
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Primary website
                    </span>
                    <input
                      {...register('website')}
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
                      {...register('payoutBank')}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="Interswitch-enabled bank"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                      Account number
                    </span>
                    <input
                      {...register('payoutAccount')}
                      className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                      placeholder="0123456789"
                    />
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
                    type="submit"
                    className="rounded-full bg-[#d76b4d] px-6 py-2 text-sm font-semibold text-white"
                  >
                    Publish creator page
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
