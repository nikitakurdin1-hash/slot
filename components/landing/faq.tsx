import Script from 'next/script'

const FAQ = [
  {
    q: 'Что такое СЛОТ?',
    a: 'СЛОТ — это WMS-система для автоматизации складской комплектации и отгрузки заказов фулфилмента маркетплейсов Wildberries, OZON и Яндекс Маркет.',
  },
  {
    q: 'Сколько стоит СЛОТ?',
    a: 'Первый адрес хранения бесплатен навсегда. Каждый дополнительный адрес стоит 2 900 ₽ в месяц без ограничения по количеству сотрудников и заказов.',
  },
  {
    q: 'Нужно ли специальное оборудование для сканирования?',
    a: 'Нет, сканирование штрихкодов происходит через камеру обычного смартфона — специальные терминалы сбора данных не требуются.',
  },
  {
    q: 'С какими маркетплейсами интегрируется СЛОТ?',
    a: 'С Wildberries FBS напрямую, а также с OZON и Яндекс Маркет.',
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
          Частые вопросы о СЛОТ
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
