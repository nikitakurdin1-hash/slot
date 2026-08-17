import { Download } from 'lucide-react'

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
            Wildberries FBS · Ozon · Яндекс Маркет
          </span>

          <h1
            className="max-w-3xl text-pretty font-serif text-4xl font-extrabold leading-[1.05] sm:text-6xl"
            style={{ letterSpacing: '-1.5px' }}
          >
            Автоматизация фулфилмента{' '}
            <span className="text-accent">Wildberries FBS</span>
          </h1>

          <p className="max-w-xl text-pretty text-lg text-muted-foreground sm:text-xl">
            Сканируйте, собирайте, отгружайте в 3 раза быстрее. Готовое WMS-решение
            для складов и фулфилмент-операторов.
          </p>

          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href="#cta"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-accent px-7 text-base font-bold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Начать бесплатно
            </a>
            <a
              href="#cta"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-border bg-background/40 px-7 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-muted"
            >
              <Download className="h-5 w-5" />
              Скачать приложение
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
