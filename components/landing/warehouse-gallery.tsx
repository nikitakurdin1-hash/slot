import { ScanLine, Boxes, PackageCheck, Truck } from 'lucide-react'

const TILES = [
  {
    image: '/gallery-scanner.png',
    icon: ScanLine,
    title: 'Терминал сбора данных',
    text: 'Смартфон или ТСД сканирует штрихкод и сверяет товар с заказом за долю секунды.',
    span: 'lg:col-span-3 lg:row-span-2',
    aspect: 'aspect-[4/5] lg:aspect-auto lg:h-full',
  },
  {
    image: '/gallery-racks.png',
    icon: Boxes,
    title: 'Адресное хранение',
    text: 'Каждая ячейка на стеллаже привязана к коду — система всегда знает, где товар.',
    span: 'lg:col-span-3',
    aspect: 'aspect-[16/10]',
  },
  {
    image: '/gallery-packing.png',
    icon: PackageCheck,
    title: 'Упаковка и маркировка',
    text: 'Этикетка печатается автоматически по данным заказа сразу после сборки.',
    span: 'lg:col-span-3',
    aspect: 'aspect-[16/10]',
  },
]

export function WarehouseGallery() {
  return (
    <section id="warehouse" className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          Реальный склад
        </span>
        <h2
          className="max-w-2xl text-balance font-serif text-3xl font-extrabold sm:text-4xl"
          style={{ letterSpacing: '-1px' }}
        >
          Как СЛОТ работает на площадке
        </h2>
        <p className="max-w-xl text-pretty text-base text-muted-foreground sm:text-lg">
          От сканирования штрихкода до отгрузки — каждый этап зафиксирован в
          системе и виден в реальном времени.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6">
        {TILES.map((tile) => (
          <div
            key={tile.title}
            className={`group relative overflow-hidden rounded-2xl border border-border ${tile.span}`}
          >
            <img
              src={tile.image || '/placeholder.svg'}
              alt={tile.title}
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${tile.aspect}`}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(180deg, rgba(5,5,5,0.05) 0%, rgba(5,5,5,0.55) 65%, rgba(5,5,5,0.9) 100%)',
              }}
            />
            <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <tile.icon className="h-5 w-5" />
              </span>
              <h3 className="font-serif text-lg font-bold text-foreground">
                {tile.title}
              </h3>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                {tile.text}
              </p>
            </div>
          </div>
        ))}

        {/* shipping strip */}
        <div className="relative overflow-hidden rounded-2xl border border-border lg:col-span-6">
          <img
            src="/gallery-shipping.png"
            alt="Зона отгрузки склада с готовыми к отправке коробами"
            className="aspect-[16/6] w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:aspect-[16/4]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(5,5,5,0.9) 0%, rgba(5,5,5,0.35) 55%, rgba(5,5,5,0.05) 100%)',
            }}
          />
          <div className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center gap-2 p-6 sm:p-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <Truck className="h-5 w-5" />
            </span>
            <h3 className="font-serif text-lg font-bold text-foreground sm:text-xl">
              Отгрузка одним нажатием
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Короба маркируются, документы формируются автоматически —
              водителю остаётся только забрать поставку.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
