import { ScanLine, UserCheck, Link2, Check } from 'lucide-react'

const SOLUTION_FEATURES = [
  {
    icon: ScanLine,
    title: 'Сканирование каждого товара',
    text: 'Камера или ТСД. Система не даст собрать заказ, пока не отсканированы все артикулы и КИЗы.',
  },
  {
    icon: UserCheck,
    title: 'Работа сотрудников под контролем',
    text: 'Каждый логин, каждая операция, каждая ошибка — в отчёте. Автор брака находится за минуту.',
  },
  {
    icon: Link2,
    title: 'Прямая интеграция с Wildberries',
    text: 'Заказы, остатки, поставки и статусы синхронизируются с WB API в реальном времени.',
  },
]

const RESULTS = [
  'Ошибки сборки стремятся к нулю',
  'Прозрачный учёт остатков и движений',
  'Быстрая обработка КИЗов и марок',
  'Все заказы в одном окне',
  'Рост без хаоса: масштабируйте склад',
]

export function Solution() {
  return (
    <section id="solution" className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          Решение
        </span>
        <h2
          className="max-w-2xl text-balance font-serif text-3xl font-extrabold sm:text-4xl"
          style={{ letterSpacing: '-1px' }}
        >
          СЛОТ WMS — это не просто софт. Это контроль над складом.
        </h2>
        <p className="max-w-xl text-pretty text-muted-foreground">
          Мы заменяем Excel, чаты и ручной контроль единой системой, где каждая
          операция фиксируется, а ошибки исключаются ещё до упаковки.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {SOLUTION_FEATURES.map((f) => (
            <div key={f.title} className="glass flex flex-col gap-4 rounded-2xl p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                <f.icon className="h-6 w-6" />
              </span>
              <h3 className="font-serif text-base font-bold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {f.text}
              </p>
            </div>
          ))}
        </div>

        <div className="glass glass-accent flex flex-col gap-4 rounded-2xl p-6">
          <h3 className="font-serif text-lg font-bold">Что получаете</h3>
          <ul className="flex flex-col gap-3">
            {RESULTS.map((r) => (
              <li key={r} className="flex items-start gap-3 text-sm leading-relaxed">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-3 w-3" />
                </span>
                {r}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
