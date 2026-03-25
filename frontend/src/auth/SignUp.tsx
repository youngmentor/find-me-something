import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

type SignUpForm = {
  fullName: string
  email: string
  password: string
}

export default function SignUp() {
  const { register, handleSubmit } = useForm<SignUpForm>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
    },
  })

  const onSubmit = (data: SignUpForm) => {
    console.log('Sign up', data)
  }

  return (
    <section className="section-pad">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="space-y-5">
          <p className="section-kicker">Sign up</p>
          <h2 className="section-title">Get a creator page in under 4 minutes.</h2>
          <p className="text-sm text-[#5d534b]">
            Designed for developers, indie makers, and teams building free tools. Bring your GitHub,
            product links, and choose your default support tiers. We handle the rest.
          </p>
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/70 px-4 py-3 text-xs font-semibold text-[#7a6558]">
              Invite-only beta
            </div>
            <div className="rounded-2xl bg-white/70 px-4 py-3 text-xs font-semibold text-[#7a6558]">
              SOC2-ready
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-7">
          <p className="text-lg font-semibold">Create your account</p>
          <form className="mt-6 space-y-4 text-sm" onSubmit={handleSubmit(onSubmit)}>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                Full name
              </span>
              <input
                {...register('fullName')}
                className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                placeholder="Ada Lovelace"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                Email
              </span>
              <input
                {...register('email')}
                className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                placeholder="ada@opensource.dev"
                type="email"
              />
            </label>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                Password
              </span>
              <input
                {...register('password')}
                className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                placeholder="Create a strong password"
                type="password"
              />
            </label>
            <button className="w-full rounded-2xl bg-[#1f1c1a] py-3 text-sm font-semibold text-white">
              Create account
            </button>
            <p className="text-xs text-[#7a6558]">
              By continuing you agree to receive product updates and payout notifications.
            </p>
            <p className="text-xs text-[#7a6558]">
              Already have an account?{' '}
              <Link className="font-semibold text-[#d76b4d]" to="/login">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
