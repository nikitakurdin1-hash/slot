import { FileDown, ScanLine, PackageCheck, Truck } from 'lucide-react'

const STEPS = [
  {
    icon: FileDown,
    title: 'Подключите кабинет',
    text: 'API-ключ Wildberries. Заказы подтягиваются автоматически.',
  },
  {
    icon: ScanLine,
    title: 'Собирайте заказы',
    text: 'Сканер камерой проверяет штрихкоды и Честный ЗНАК.',
  },
  {
    icon: PackageCheck,
    title: 'Упаковывайте',
    text: 'ШК коробов от WB, печать этикеток, наклейка.',
  },
  {
    icon: Truck,
    title: 'Отгружайте',
    text: 'Фиксация поставки в WB API одним нажатием.',
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          Как это работает
        </span>
        <h2
          className="max-w-2xl text-balance font-serif text-3xl font-extrabold sm:text-4xl"
          style={{ letterSpacing: '-1px' }}
        >
          Четыре простых шага от заказа до отгрузки
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step, i) => (
          <div
            key={step.title}
            className="glass group relative flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <span className="text-sm font-bold text-muted-foreground">
              0{i + 1}
            </span>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <step.icon className="h-6 w-6" />
            </span>
            <h3 className="font-serif text-lg font-bold">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
