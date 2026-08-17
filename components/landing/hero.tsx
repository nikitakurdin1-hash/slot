const TRUST_BADGES = ['5 дней бесплатно', 'Подключение за 1 день', 'Без карты']

export function Hero() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-5 pt-8 pb-16">
      <div className="relative overflow-hidden rounded-[24px] border border-border">
        {/* background photo */}
        <img
          src="/warehouse-hero.png"
          alt="Складской комплекс фулфилмента с высокими стеллажами и сотрудником со сканером"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.82) 60%, rgba(5,5,5,0.96) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(700px circle at 15% 0%, rgba(252,238,76,0.1), transparent 55%)',
          }}
        />

        {/* content */}
        <div className="relative flex flex-col items-start gap-6 px-6 py-16 sm:px-12 sm:py-24 lg:py-28">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Для фулфилмента и селлеров на МП
          </span>

          <h1
            className="max-w-3xl text-pretty font-serif text-4xl font-extrabold leading-[1.05] sm:text-6xl"
            style={{ letterSpacing: '-1.5px' }}
          >
            WMS, которая снижает <span className="text-accent">ошибки сборки до нуля</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
            СЛОТ WMS убирает путаницу с заказами, автоматизирует работу с КИЗами и
            даёт прозрачный учёт фулфилмента. Без Excel, без ручного контроля, без
            упущенной выручки.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-accent px-7 text-base font-bold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Записаться на демо
            </a>
            <a
              href="#how"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl border border-border bg-background/40 px-7 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-muted"
            >
              Как это работает
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1">
            {TRUST_BADGES.map((b) => (
              <span key={b} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
