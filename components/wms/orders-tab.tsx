'use client'

import { Package, Clock, CheckCircle2, TrendingUp } from 'lucide-react'
import { orders, statusMeta } from './data'

const stats = [
  { label: 'Активные заказы', value: '42', icon: Package, tint: '#64ffda' },
  { label: 'В очереди', value: '17', icon: Clock, tint: '#ffd479' },
  { label: 'Собрано сегодня', value: '128', icon: CheckCircle2, tint: '#7aa2ff' },
  { label: 'Выполнение', value: '94%', icon: TrendingUp, tint: '#64ffda' },
]

export function OrdersTab() {
  return (
    <div className="flex flex-col gap-5">
      <section aria-label="Показатели" className="grid grid-cols-2 gap-3">
        {stats.map(({ label, value, icon: Icon, tint }) => (
          <div
            key={label}
            className="glass rounded-[16px] p-4 flex flex-col gap-3 transition-transform duration-200 active:scale-[0.98] hover:-translate-y-0.5"
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-[10px]"
              style={{ backgroundColor: `${tint}1f`, color: tint }}
            >
              <Icon size={18} strokeWidth={2} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-3xl font-semibold tracking-tight tabular-nums">{value}</span>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          </div>
        ))}
      </section>

      <section aria-label="Список заказов" className="flex flex-col gap-3">
        <div className="flex items-center justify-between px-1">
          <h2 className="text-sm font-semibold">Очередь заказов</h2>
          <span className="text-xs text-muted-foreground">{orders.length} шт.</span>
        </div>

        <ul className="flex flex-col gap-2.5">
          {orders.map((order) => {
            const meta = statusMeta[order.status]
            return (
              <li
                key={order.id}
                className="glass rounded-[16px] p-4 flex items-center gap-4 transition-colors duration-200 hover:border-[color:var(--accent)]/30"
              >
                <div className="flex flex-1 flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{order.code}</span>
                    <span className="text-xs text-muted-foreground">{order.time}</span>
                  </div>
                  <span className="truncate text-xs text-muted-foreground">
                    {order.client} · {order.items} поз.
                  </span>
                </div>
                <span
                  className="shrink-0 rounded-full px-3 py-1.5 text-xs font-medium"
                  style={{ backgroundColor: `${meta.color}1f`, color: meta.color }}
                >
                  {meta.label}
                </span>
              </li>
            )
          })}
        </ul>
      </section>
    </div>
  )
}
