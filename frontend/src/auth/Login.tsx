import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

type LoginForm = {
  email: string
  password: string
  remember: boolean
}

export default function Login() {
  const { register, handleSubmit } = useForm<LoginForm>({
    defaultValues: {
      email: '',
      password: '',
      remember: true,
    },
  })

  const onSubmit = (data: LoginForm) => {
    console.log('Login', data)
  }

  return (
    <section className="section-pad">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div className="space-y-5">
          <p className="section-kicker">Login</p>
          <h2 className="section-title">Welcome back to Find-me-something.</h2>
          <p className="text-sm text-[#5d534b]">
            Log in to manage your creator page, track supporter analytics, and launch new share
            campaigns.
          </p>
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/70 px-4 py-3 text-xs font-semibold text-[#7a6558]">
              Secure access
            </div>
            <div className="rounded-2xl bg-white/70 px-4 py-3 text-xs font-semibold text-[#7a6558]">
              Interswitch payouts
            </div>
          </div>
        </div>

        <div className="glass-card rounded-3xl p-7">
          <p className="text-lg font-semibold">Sign in</p>
          <form className="mt-6 space-y-4 text-sm" onSubmit={handleSubmit(onSubmit)}>
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a776b]">
                Email
              </span>
              <input
                {...register('email')}
                className="mt-2 w-full rounded-2xl border border-[#e6d9cc] bg-white px-4 py-3 outline-none focus:border-[#1f1c1a]"
                placeholder="you@opensource.dev"
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
                placeholder="Enter your password"
                type="password"
              />
            </label>
            <div className="flex items-center justify-between text-xs text-[#7a6558]">
              <label className="flex items-center gap-2">
                <input
                  {...register('remember')}
                  type="checkbox"
                  className="h-4 w-4 accent-[#1f1c1a]"
                />
                Remember me
              </label>
              <button type="button" className="text-[#1f1c1a]">
                Forgot password?
              </button>
            </div>
            <button className="w-full rounded-2xl bg-[#1f1c1a] py-3 text-sm font-semibold text-white">
              Log in
            </button>
            <p className="text-xs text-[#7a6558]">
              Don&apos;t have an account?{' '}
              <Link className="font-semibold text-[#d76b4d]" to="/signup">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
