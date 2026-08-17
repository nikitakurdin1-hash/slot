import {
  ScanLine,
  Volume2,
  Smartphone,
  Link2,
  Users,
  Boxes,
} from 'lucide-react'

const FEATURES = [
  {
    icon: ScanLine,
    title: 'Сканер камерой',
    text: 'Распознавание штрихкодов, EAN-13, DataMatrix. Нативная камера без задержек.',
  },
  {
    icon: Volume2,
    title: 'Звуковые подсказки',
    text: 'Сигналы при сканировании — сотрудник работает быстрее и точнее.',
  },
  {
    icon: Smartphone,
    title: 'Android приложение',
    text: 'APK устанавливается на любой телефон. Не требует Google Play.',
  },
  {
    icon: Link2,
    title: 'WB API интеграция',
    text: 'Заказы, остатки, поставки — прямая синхронизация с Wildberries.',
  },
  {
    icon: Users,
    title: 'Роли и доступы',
    text: 'Владелец, сотрудники, клиенты — каждый видит только своё.',
  },
  {
    icon: Boxes,
    title: 'Остатки и статистика',
    text: 'Учёт остатков, синхронизация с WB, история движений.',
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          Возможности
        </span>
        <h2
          className="max-w-2xl text-balance font-serif text-3xl font-extrabold sm:text-4xl"
          style={{ letterSpacing: '-1px' }}
        >
          Возможности СЛОТ WMS
        </h2>
        <p className="max-w-xl text-pretty text-muted-foreground">
          Всё, что нужно для работы современного фулфилмента
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="glass flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <f.icon className="h-6 w-6" />
            </span>
            <h3 className="font-serif text-lg font-bold">{f.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {f.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
