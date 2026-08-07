import Link from 'next/link'

export function Logo({ size = 'md' }: { size?: 'md' | 'lg' }) {
  const text = size === 'lg' ? 'text-4xl' : 'text-2xl'
  const tag = size === 'lg' ? 'text-sm' : 'text-[11px]'
  return (
    <div className="flex flex-col leading-none">
      <span
        className={`${text} font-extrabold tracking-tight text-foreground`}
        style={{ letterSpacing: '-1px' }}
      >
        СЛОТ<span className="text-accent">.</span>
      </span>
      <span className={`${tag} mt-1 font-medium text-muted-foreground`}>
        WMS для фулфилмента
      </span>
    </div>
  )
}

const NAV = [
  { label: 'Как это работает', href: '#how' },
  { label: 'Возможности', href: '#features' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Интеграции', href: '#integrations' },
]

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-4">
        <div className="glass flex items-center rounded-2xl px-4 py-2.5">
          <Logo />
        </div>

        <nav className="glass hidden items-center gap-1 rounded-2xl px-2 py-2 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/dashboard"
            className="hidden rounded-xl border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-muted sm:inline-flex"
          >
            Войти
          </Link>
          <a
            href="#cta"
            className="inline-flex min-h-[44px] items-center rounded-xl bg-accent px-5 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.03]"
          >
            Начать бесплатно
          </a>
        </div>
      </div>
    </header>
  )
}
