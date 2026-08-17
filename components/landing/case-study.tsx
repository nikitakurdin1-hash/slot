const RESULTS = [
  {
    label: 'Скорость',
    value: '+3×',
    text: 'Скорость сборки заказов выросла в 3 раза после внедрения сканирования камерой и чёткого разделения зон.',
  },
  {
    label: 'Точность',
    value: '−90%',
    text: 'Ошибки сборки снизились на 90%: система не даёт закрыть заказ, пока не отсканированы все артикулы.',
  },
  {
    label: 'Обучение',
    value: '1 час',
    text: 'Новый сотрудник выходит на самостоятельную сборку за час благодаря простому интерфейсу.',
  },
]

export function CaseStudy() {
  return (
    <section id="case" className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          Кейсы
        </span>
        <h2
          className="max-w-2xl text-balance font-serif text-3xl font-extrabold sm:text-4xl"
          style={{ letterSpacing: '-1px' }}
        >
          Как это работает на практике
        </h2>
        <p className="max-w-xl text-pretty text-muted-foreground">
          Пилот на нашем складе. Результаты, которые уже можно повторить.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {RESULTS.map((r) => (
          <div key={r.label} className="glass flex flex-col gap-2 rounded-2xl p-6">
            <span className="text-sm font-semibold text-muted-foreground">{r.label}</span>
            <span
              className="font-serif text-4xl font-extrabold text-accent"
              style={{ letterSpacing: '-1.5px' }}
            >
              {r.value}
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">{r.text}</p>
          </div>
        ))}
      </div>

      <blockquote className="glass glass-accent mt-6 flex flex-col gap-4 rounded-2xl p-8">
        <p className="text-pretty font-serif text-lg leading-relaxed sm:text-xl">
          «После внедрения СЛОТ WMS мы перестали терять заказы и пересобирать брак.
          Всё видно в одном окне: кто, что и когда собрал. Можно спокойно
          масштабироваться.»
        </p>
        <span className="text-sm font-semibold text-muted-foreground">
          Команда СЛОТ WMS · пилотный склад
        </span>
      </blockquote>
    </section>
  )
}
