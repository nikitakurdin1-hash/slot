'use client'

import { useState } from 'react'
import { BarChart3, Building2, ShoppingBag, PackageSearch } from 'lucide-react'
import { LogoMark } from '@/components/landing/site-nav'
import { OrdersTab } from './orders-tab'
import { ProfileTab } from './profile-tab'
import { ClientsTab } from './clients-tab'
import { PickerTab } from './picker-tab'

type TabId = 'orders' | 'profile' | 'clients' | 'picker'

const tabs: { id: TabId; label: string; icon: typeof BarChart3 }[] = [
  { id: 'orders', label: 'Заказы', icon: BarChart3 },
  { id: 'profile', label: 'Профиль', icon: Building2 },
  { id: 'clients', label: 'Клиенты', icon: ShoppingBag },
  { id: 'picker', label: 'Сборщик', icon: PackageSearch },
]

const titles: Record<TabId, string> = {
  orders: 'Заказы',
  profile: 'Профиль склада',
  clients: 'Клиенты',
  picker: 'Комплектовщики',
}

export function Dashboard() {
  const [active, setActive] = useState<TabId>('orders')

  return (
    <div className="app-glow min-h-dvh">
      <div className="relative z-10 mx-auto flex min-h-dvh w-full max-w-[480px] flex-col">
        <header className="sticky top-0 z-20 flex flex-col gap-4 px-4 pb-3 pt-5 backdrop-blur-xl bg-[color:var(--background)]/70 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <LogoMark size={26} />
              <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-[0.18em] text-accent">СЛОТ WMS</span>
                <h1 className="font-serif text-xl font-semibold tracking-tight">{titles[active]}</h1>
              </div>
            </div>
            <span className="flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_var(--accent)]" />
              Онлайн
            </span>
          </div>

          <nav
            aria-label="Разделы"
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar"
          >
            {tabs.map(({ id, label, icon: Icon }) => {
              const isActive = active === id
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActive(id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex h-12 flex-1 min-w-[84px] items-center justify-center gap-1.5 rounded-[14px] px-3 text-xs font-semibold transition-all duration-200 active:scale-95 ${
                    isActive
                      ? 'bg-accent text-accent-foreground shadow-[0_6px_20px_-6px_var(--accent)]'
                      : 'glass text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon size={17} strokeWidth={2} aria-hidden="true" />
                  {label}
                </button>
              )
            })}
          </nav>
        </header>

        <main className="flex-1 px-4 py-5">
          {active === 'orders' && <OrdersTab />}
          {active === 'profile' && <ProfileTab />}
          {active === 'clients' && <ClientsTab />}
          {active === 'picker' && <PickerTab />}
        </main>
      </div>
    </div>
  )
}
