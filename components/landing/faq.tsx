import Script from 'next/script'

const FAQ = [
  {
    q: 'Что такое СЛОТ WMS?',
    a: 'СЛОТ — это WMS-система для фулфилмента и селлеров на маркетплейсах: сканирование заказов камерой смартфона, работа с Честным ЗНАКом (КИЗ) и прямая интеграция с Wildberries API.',
  },
  {
    q: 'Сколько стоит СЛОТ?',
    a: 'Тариф «Старт» — 8 999 ₽/мес для команды до 3 сотрудников, «Стандарт» — 50 000 ₽/мес до 15 сотрудников, «Корпоративный» — 100 000 ₽/мес без ограничения по сотрудникам.',
  },
  {
    q: 'Нужно ли специальное оборудование для сканирования?',
    a: 'Нет, сканирование штрихкодов и Честного ЗНАКа происходит через камеру обычного смартфона на Android — специальные терминалы сбора данных не требуются.',
  },
  {
    q: 'С какими маркетплейсами интегрируется СЛОТ?',
    a: 'Напрямую с Wildberries: заказы, остатки и поставки синхронизируются через официальный API.',
  },
  {
    q: 'Есть ли бесплатный пробный период?',
    a: 'Да, 5 дней демо-доступа без привязки банковской карты.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-[1200px] px-5 py-16">
      <div className="mb-10 flex flex-col gap-3">
        <span className="text-sm font-semibold uppercase tracking-wider text-accent">
          Вопросы и ответы
        </span>
        <h2
          className="max-w-2xl text-balance font-serif text-3xl font-extrabold sm:text-4xl"
          style={{ letterSpacing: '-1px' }}
        >
          Частые вопросы о СЛОТ WMS
        </h2>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-3">
        {FAQ.map((item) => (
          <details
            key={item.q}
            className="glass group rounded-2xl p-5 [&_summary]:cursor-pointer"
          >
            <summary className="flex items-center justify-between gap-4 font-semibold text-foreground">
              {item.q}
              <span className="shrink-0 text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
          </details>
        ))}
      </div>

      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  )
}
