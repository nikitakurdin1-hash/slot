'use client'

import { initialRequests, requestStatusMeta } from './data'

export function RequestsTab() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold">Заявки · {initialRequests.length}</h2>
      </div>

      <ul className="flex flex-col gap-2.5">
        {initialRequests.map((request) => {
          const meta = requestStatusMeta[request.status]
          return (
            <li key={request.id} className="glass rounded-[16px] p-4 flex flex-col gap-2.5">
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-semibold leading-snug">{request.title}</span>
                <span
                  className="shrink-0 rounded-full px-2.5 py-1 text-[11px] font-semibold"
                  style={{ backgroundColor: `${meta.color}22`, color: meta.color }}
                >
                  {meta.label}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>
                  {request.client} · {request.type}
                </span>
                <span>{request.date}</span>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
