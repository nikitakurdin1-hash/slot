'use client'

import { MapPin, Boxes, Truck, Warehouse, Phone, Mail } from 'lucide-react'

const metrics = [
  { label: 'Загрузка склада', value: '78%', icon: Boxes },
  { label: 'Отгрузок сегодня', value: '36', icon: Truck },
]

const details = [
  { icon: MapPin, label: 'Адрес', value: 'г. Москва, Логистический пр-д, 12, стр. 4' },
  { icon: Phone, label: 'Телефон', value: '+7 495 120-45-00' },
  { icon: Mail, label: 'Почта', value: 'sklad@wms.ru' },
]

export function ProfileTab() {
  return (
    <div className="flex flex-col gap-5">
      <section className="glass glass-accent rounded-[20px] p-5 flex items-center gap-4">
        <span className="flex h-14 w-14 items-center justify-center rounded-[16px] bg-accent text-accent-foreground">
          <Warehouse size={26} strokeWidth={2} aria-hidden="true" />
        </span>
        <div className="flex flex-col gap-0.5">
          <h2 className="text-lg font-semibold tracking-tight">Склад «Восток-1»</h2>
          <span className="text-xs text-muted-foreground">РЦ · Зона комплектации А</span>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        {metrics.map(({ label, value, icon: Icon }) => (
          <div key={label} className="glass rounded-[16px] p-4 flex flex-col gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-accent/10 text-accent">
              <Icon size={18} strokeWidth={2} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-0.5">
              <span className="text-3xl font-semibold tracking-tight tabular-nums">{value}</span>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          </div>
        ))}
      </section>

      <section className="glass rounded-[16px] p-2 flex flex-col">
        {details.map(({ icon: Icon, label, value }, i) => (
          <div
            key={label}
            className="flex items-center gap-3 p-3"
            style={{ borderTop: i === 0 ? 'none' : '1px solid var(--border)' }}
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-muted text-muted-foreground">
              <Icon size={17} strokeWidth={2} aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-[11px] uppercase tracking-wide text-muted-foreground">{label}</span>
              <span className="text-sm">{value}</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
