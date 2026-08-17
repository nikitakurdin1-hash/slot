import {
  Smartphone,
  BarChart3,
  Users,
  Boxes,
  Bell,
  ShieldCheck,
} from 'lucide-react'

const FEATURES = [
  {
    icon: Smartphone,
    title: 'Мобильный сканер',
    text: 'Превратите смартфон в терминал сбора данных. Камера сканирует штрихкоды без доп. оборудования.',
  },
  {
    icon: BarChart3,
    title: 'Аналитика в реальном времени',
    text: 'Скорость сборки, загрузка сотрудников и статусы заказов на одном дашборде.',
  },
  {
    icon: Users,
    title: 'Управление персоналом',
    text: 'Роли, смены и KPI каждого сборщика. Прозрачная мотивация и учёт выработки.',
  },
  {
    icon: Boxes,
    title: 'Учёт остатков',
    text: 'Актуальные остатки по ячейкам и адресам хранения с историей движений.',
  },
  {
    icon: Bell,
    title: 'Уведомления',
    text: 'Оповещения о новых заказах, дедлайнах поставок и ошибках комплектации.',
  },
  {
    icon: ShieldCheck,
    title: 'Контроль качества',
    text: 'Двойная проверка комплектности исключает пересорт и возвраты покупателей.',
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
          Всё для эффективного склада
        </h2>
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
