'use client'

import { Warehouse, Thermometer } from 'lucide-react'
import { warehouseZones } from './data'

export function WarehouseTab() {
  const totalCells = warehouseZones.reduce((sum, z) => sum + z.cells, 0)
  const totalOccupied = warehouseZones.reduce((sum, z) => sum + z.occupied, 0)
  const loadPct = Math.round((totalOccupied / totalCells) * 100)

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold">Склад «Восток-1»</h2>
      </div>

      <div className="glass rounded-[16px] p-4 flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-accent/10 text-accent">
          <Warehouse size={22} strokeWidth={2} aria-hidden="true" />
        </span>
        <div className="flex flex-1 flex-col gap-1.5 min-w-0">
          <div className="flex items-baseline justify-between">
            <span className="text-sm font-semibold">Загрузка склада</span>
            <span className="text-lg font-bold tabular-nums text-accent">{loadPct}%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-accent transition-all"
              style={{ width: `${loadPct}%` }}
            />
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-2.5">
        {warehouseZones.map((zone) => {
          const pct = Math.round((zone.occupied / zone.cells) * 100)
          return (
            <li key={zone.id} className="glass rounded-[16px] p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">{zone.name}</span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Thermometer size={13} strokeWidth={2} aria-hidden="true" />
                  {zone.temp}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                  <div
                    className="h-full rounded-full bg-accent transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="shrink-0 text-xs tabular-nums text-muted-foreground">
                  {zone.occupied}/{zone.cells}
                </span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
