function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-xl select-none">
      <div className="absolute inset-8 rounded-full bg-cyan-200/60 blur-3xl" />

      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_32px_80px_-32px_rgba(15,23,42,0.38)]">
        <div className="flex items-center gap-2 border-b border-slate-100 px-5 py-4">
          <span className="size-2.5 rounded-full bg-rose-300" />
          <span className="size-2.5 rounded-full bg-amber-300" />
          <span className="size-2.5 rounded-full bg-emerald-300" />
          <span className="ml-5 h-6 flex-1 rounded-md bg-slate-100" />
        </div>

        <div className="p-5 sm:p-7">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-slate-950 text-cyan-300">
                <svg viewBox="0 0 24 24" fill="none" className="size-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m8 8-4 4 4 4M16 8l4 4-4 4M14 5l-4 14" />
                </svg>
              </span>
              <span className="h-2.5 w-20 rounded-full bg-slate-800" />
            </div>
            <div className="hidden gap-2 sm:flex">
              <span className="h-2 w-9 rounded-full bg-slate-200" />
              <span className="h-2 w-9 rounded-full bg-slate-200" />
              <span className="h-2 w-9 rounded-full bg-slate-200" />
            </div>
          </div>

          <div className="grid items-center gap-6 sm:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3">
              <div className="h-3 w-20 rounded-full bg-cyan-200" />
              <div className="h-5 w-full rounded-full bg-slate-900" />
              <div className="h-5 w-4/5 rounded-full bg-slate-900" />
              <div className="h-2 w-full rounded-full bg-slate-200" />
              <div className="h-2 w-5/6 rounded-full bg-slate-200" />
              <div className="h-1 w-16 rounded-full bg-cyan-500" />
            </div>

            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 to-slate-700">
              <div className="absolute -right-9 -top-9 size-32 rounded-full border border-cyan-400/40" />
              <div className="absolute -bottom-12 -left-8 size-36 rounded-full border border-cyan-400/30" />
              <svg viewBox="0 0 120 120" fill="none" className="relative w-24 text-cyan-300" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="17" y="25" width="86" height="70" rx="9" />
                <path d="M17 43h86M28 34h2M38 34h2M48 34h2M37 67l-9 8 9 8m46-16 9 8-9 8M68 59 53 91" />
              </svg>
            </div>
          </div>

          <div className="mt-7 grid grid-cols-3 gap-3">
            <div className="rounded-lg border border-slate-100 p-3">
              <div className="mb-3 size-6 rounded-md bg-cyan-100" />
              <div className="h-2 w-4/5 rounded-full bg-slate-200" />
            </div>
            <div className="rounded-lg border border-slate-100 p-3">
              <div className="mb-3 size-6 rounded-md bg-slate-200" />
              <div className="h-2 w-4/5 rounded-full bg-slate-200" />
            </div>
            <div className="rounded-lg border border-slate-100 p-3">
              <div className="mb-3 size-6 rounded-md bg-slate-200" />
              <div className="h-2 w-4/5 rounded-full bg-slate-200" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -left-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:-left-8">
        <span className="flex size-9 items-center justify-center rounded-lg bg-cyan-50 text-cyan-700">
          <svg viewBox="0 0 24 24" fill="none" className="size-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
          </svg>
        </span>
        <div className="space-y-1.5">
          <div className="h-2 w-16 rounded-full bg-slate-800" />
          <div className="h-2 w-11 rounded-full bg-slate-200" />
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-cyan-50/70"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 sm:px-10 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:py-28">
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-800">
            <span aria-hidden="true" className="size-2 rounded-full bg-cyan-600" />
            Kodela Studio
          </div>
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl"
          >
            Website Profesional untuk Bisnis yang Terus Berkembang
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-700 sm:mt-9 sm:text-xl">
            Kodela Studio membantu UMKM dan perusahaan membangun website serta aplikasi web yang modern, mudah digunakan, dan sesuai kebutuhan bisnis.
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

export default Hero
