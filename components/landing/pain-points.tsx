import { TrendingDown, FileQuestion, Barcode, ListX, MessagesSquare, TrendingUp } from 'lucide-react'

const PAINS = [
  {
    icon: TrendingDown,
    title: 'Ошибки сборки до 20% выручки',
    text: 'Неправильно собранный товар — штрафы, возвраты, упущенная прибыль. Без контроля каждой операции ошибки множатся.',
  },
  {
    icon: FileQuestion,
    title: 'Нет прозрачного учёта',
    text: 'Не понятно, сколько товара на складе, кто что собирал, куда пропали остатки. Всё в головах и Excel.',
  },
  {
    icon: Barcode,
    title: 'Проблемы с КИЗами',
    text: 'Честный ЗНАК требует точной обработки марок. Ручной ввод — это штрафы и блокировки поставок.',
  },
  {
    icon: ListX,
    title: 'Путаница с заказами',
    text: 'Сотрудник не знает, что уже собрано, что в пути, что отгружено. Заказы теряются и дублируются.',
  },
  {
    icon: MessagesSquare,
    title: 'Склад на телефонах в мессенджерах',
    text: 'Заявки в Telegram, статусы в Excel, фото в галерее. Нет единого инструмента для работы.',
  },
  {
    icon: TrendingUp,
    title: 'Не масштабируется',
    text: 'Больше заказов — больше хаоса. Без системы рост превращается в падение качества.',
  },
]

export function PainPoints() {
  return (
    <section id="pains" className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          Боли
        </span>
        <h2
          className="max-w-2xl text-balance font-serif text-3xl font-extrabold sm:text-4xl"
          style={{ letterSpacing: '-1px' }}
        >
          Знакомые ситуации?
        </h2>
        <p className="max-w-xl text-pretty text-muted-foreground">
          Работа фулфилмента — это не только отпикать товар. Каждый день — риск
          ошибок, которые вы ещё не заметили.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PAINS.map((p) => (
          <div
            key={p.title}
            className="glass flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <p.icon className="h-6 w-6" />
            </span>
            <h3 className="font-serif text-lg font-bold">{p.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {p.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
