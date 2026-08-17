const PARTNERS = [
  { name: 'Wildberries', short: 'WB', primary: true },
  { name: 'Ozon', short: 'OZON', primary: false },
  { name: 'Яндекс Маркет', short: 'ЯМ', primary: false },
  { name: 'СберМегаМаркет', short: 'СММ', primary: false },
]

export function Integrations() {
  return (
    <section id="integrations" className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="glass flex flex-col items-center gap-8 rounded-[24px] px-6 py-12 text-center">
        <div className="flex flex-col gap-3">
          <span className="text-sm font-semibold uppercase tracking-wider text-accent">
            Интеграции
          </span>
          <h2
            className="text-balance font-serif text-3xl font-extrabold sm:text-4xl"
            style={{ letterSpacing: '-1px' }}
          >
            Работаем с ведущими маркетплейсами
          </h2>
          <p className="mx-auto max-w-lg text-pretty text-muted-foreground">
            Прямая интеграция с Wildberries FBS. Заказы, поставки и статусы
            синхронизируются автоматически.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
          {PARTNERS.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col items-center justify-center gap-3 rounded-2xl border p-6 transition-transform hover:-translate-y-1 ${
                p.primary
                  ? 'border-accent/40 bg-accent/5'
                  : 'border-border bg-muted'
              }`}
            >
              <span
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-extrabold ${
                  p.primary
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-background text-foreground'
                }`}
                style={{ letterSpacing: '-1px' }}
                aria-hidden="true"
              >
                {p.short}
              </span>
              <span className="text-sm font-semibold">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
