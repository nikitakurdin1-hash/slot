'use client'

import { useMemo, useState } from 'react'
import { Search, Package } from 'lucide-react'
import { initialGoods } from './data'

export function GoodsTab() {
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return initialGoods
    return initialGoods.filter(
      (g) => g.name.toLowerCase().includes(q) || g.sku.toLowerCase().includes(q),
    )
  }, [query])

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold">Товары · {filtered.length}</h2>
      </div>

      <label className="relative flex items-center">
        <Search
          size={17}
          strokeWidth={2}
          aria-hidden="true"
          className="pointer-events-none absolute left-4 text-muted-foreground"
        />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск по названию или SKU"
          className="h-12 w-full rounded-[12px] border border-border bg-muted pl-11 pr-4 text-sm outline-none transition-colors focus:border-[color:var(--accent)]"
        />
      </label>

      <ul className="flex flex-col gap-2.5">
        {filtered.map((good) => (
          <li
            key={good.id}
            className="glass rounded-[16px] p-4 flex items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-accent/10 text-accent">
              <Package size={19} strokeWidth={2} aria-hidden="true" />
            </span>
            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
              <span className="truncate text-sm font-semibold">{good.name}</span>
              <span className="truncate text-xs text-muted-foreground">
                {good.sku} · {good.client}
              </span>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-0.5">
              <span className="text-sm font-bold tabular-nums text-accent">{good.stock}</span>
              <span className="text-[11px] text-muted-foreground">{good.unit}</span>
            </div>
          </li>
        ))}

        {filtered.length === 0 && (
          <li className="glass rounded-[16px] p-6 text-center text-sm text-muted-foreground">
            Ничего не найдено
          </li>
        )}
      </ul>
    </div>
  )
}
