import { Check } from 'lucide-react'

const PLANS = [
  {
    name: 'Старт',
    price: '0 ₽',
    period: '/ месяц',
    highlight: false,
    desc: 'Для одного склада или пункта отгрузки',
    features: [
      '1 адрес хранения',
      'До 3 сотрудников',
      'Мобильный сканер',
      'Интеграция с Wildberries FBS',
      'Базовая аналитика',
    ],
    cta: 'Начать бесплатно',
  },
  {
    name: 'Бизнес',
    price: '2 900 ₽',
    period: '/ адрес в месяц',
    highlight: true,
    desc: 'Для сети складов и фулфилмент-операторов',
    features: [
      'Неограниченно адресов',
      'Неограниченно сотрудников',
      'Расширенная аналитика и KPI',
      'Контроль качества сборки',
      'Приоритетная поддержка 24/7',
      'API и выгрузки',
    ],
    cta: 'Попробовать 5 дней',
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          Тарифы
        </span>
        <h2
          className="max-w-2xl text-balance text-3xl font-extrabold sm:text-4xl"
          style={{ letterSpacing: '-1px' }}
        >
          Первый адрес — бесплатно навсегда
        </h2>
        <p className="max-w-xl text-pretty text-muted-foreground">
          Платите только за дополнительные адреса хранения. Без скрытых комиссий
          и оплаты за заказы.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className={`glass relative flex flex-col gap-6 rounded-[24px] p-8 ${
              plan.highlight ? 'glass-accent' : ''
            }`}
          >
            {plan.highlight && (
              <span className="absolute right-6 top-6 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
                Популярный
              </span>
            )}
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <p className="text-sm text-muted-foreground">{plan.desc}</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span
                className="text-4xl font-extrabold"
                style={{ letterSpacing: '-1.5px' }}
              >
                {plan.price}
              </span>
              <span className="text-sm text-muted-foreground">
                {plan.period}
              </span>
            </div>
            <ul className="flex flex-col gap-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`mt-auto inline-flex min-h-[52px] items-center justify-center rounded-xl px-6 text-base font-bold transition-transform hover:scale-[1.02] ${
                plan.highlight
                  ? 'bg-accent text-accent-foreground'
                  : 'border border-border text-foreground hover:bg-muted'
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
