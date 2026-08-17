import { Download } from 'lucide-react'

export function FinalCta() {
  return (
    <section id="cta" className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="glass glass-accent relative overflow-hidden rounded-[28px] px-6 py-16 text-center sm:px-12">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(500px circle at 50% 0%, rgba(252,238,76,0.14), transparent 60%)',
          }}
        />
        <div className="relative flex flex-col items-center gap-6">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold text-accent">
            Без карты · Без обязательств
          </span>
          <h2
            className="max-w-2xl text-balance font-serif text-4xl font-extrabold sm:text-5xl"
            style={{ letterSpacing: '-1.5px' }}
          >
            Попробуйте СЛОТ WMS 5 дней бесплатно
          </h2>
          <p className="max-w-lg text-pretty text-lg text-muted-foreground">
            Подключите склад за 1 день и снизьте ошибки сборки уже на этой неделе.
          </p>
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <a
              href="/dashboard"
              className="inline-flex min-h-[52px] items-center justify-center rounded-xl bg-accent px-8 text-base font-bold text-accent-foreground transition-transform hover:scale-[1.03]"
            >
              Записаться на демо
            </a>
            <a
              href="#"
              className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-xl border border-border px-8 text-base font-semibold text-foreground transition-colors hover:bg-muted"
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
