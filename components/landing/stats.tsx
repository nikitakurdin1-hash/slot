const STATS = [
  { value: '3×', label: 'быстрее сборка заказов' },
  { value: '99.8%', label: 'точность комплектации' },
  { value: '500+', label: 'складов используют СЛОТ' },
  { value: '2 млн', label: 'заказов обработано в месяц' },
]

export function Stats() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-8">
      <div className="glass glass-accent grid grid-cols-2 gap-6 rounded-[24px] p-8 sm:p-12 lg:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span
              className="text-4xl font-extrabold text-accent sm:text-5xl"
              style={{ letterSpacing: '-1.5px' }}
            >
              {s.value}
            </span>
            <span className="text-sm leading-relaxed text-muted-foreground">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
