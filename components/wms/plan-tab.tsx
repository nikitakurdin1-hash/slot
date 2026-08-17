'use client'

import { useState } from 'react'
import { warehouseCells, cellStatusMeta, type WarehouseCell } from './data'

export function PlanTab() {
  const [selected, setSelected] = useState<WarehouseCell | null>(null)

  const totals = {
    empty: warehouseCells.filter((c) => c.status === 'empty').length,
    filling: warehouseCells.filter((c) => c.status === 'filling').length,
    full: warehouseCells.filter((c) => c.status === 'full').length,
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold">План склада «Восток-1»</h2>
      </div>

      <div className="glass flex items-center justify-around rounded-[16px] p-3">
        {(['empty', 'filling', 'full'] as const).map((status) => (
          <div key={status} className="flex flex-col items-center gap-1">
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: cellStatusMeta[status].color }}
              aria-hidden="true"
            />
            <span className="text-xs text-muted-foreground">{cellStatusMeta[status].label}</span>
            <span className="text-sm font-bold tabular-nums">{totals[status]}</span>
          </div>
        ))}
      </div>

      <div className="glass grid grid-cols-4 gap-2.5 rounded-[16px] p-4">
        {warehouseCells.map((cell) => (
          <button
            key={cell.id}
            type="button"
            onClick={() => setSelected(cell)}
            aria-label={`Ячейка ${cell.code}, ${cellStatusMeta[cell.status].label}, заполнено ${cell.fill}%`}
            className="flex aspect-square flex-col items-center justify-center gap-1 rounded-[12px] border transition-all duration-200 active:scale-95"
            style={{
              backgroundColor: `${cellStatusMeta[cell.status].color}1a`,
              borderColor: `${cellStatusMeta[cell.status].color}55`,
            }}
          >
            <span className="text-[11px] font-semibold text-foreground">{cell.code}</span>
            <span className="text-[10px] tabular-nums text-muted-foreground">{cell.fill}%</span>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Ячейка ${selected.code}`}
          onClick={() => setSelected(null)}
        >
          <div
            className="glass w-full max-w-[448px] rounded-[20px] p-5 flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-base font-semibold">Ячейка {selected.code}</h3>
              <span
                className="rounded-full px-3 py-1 text-xs font-semibold"
                style={{
                  backgroundColor: `${cellStatusMeta[selected.status].color}22`,
                  color: cellStatusMeta[selected.status].color,
                }}
              >
                {cellStatusMeta[selected.status].label}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${selected.fill}%`, backgroundColor: cellStatusMeta[selected.status].color }}
              />
            </div>
            <span className="text-sm text-muted-foreground">Заполнено на {selected.fill}%</span>
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="mt-1 flex h-12 items-center justify-center rounded-[12px] bg-accent text-sm font-semibold text-accent-foreground transition-transform active:scale-[0.98]"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
