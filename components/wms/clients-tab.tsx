'use client'

import { useMemo, useState } from 'react'
import { Pencil, Trash2, Plus, X, Check } from 'lucide-react'
import { initialClients, type Client } from './data'

export function ClientsTab() {
  const [clients, setClients] = useState<Client[]>(initialClients)
  const [editing, setEditing] = useState<Client | null>(null)
  const [draftName, setDraftName] = useState('')
  const [draftCompany, setDraftCompany] = useState('')

  const sorted = useMemo(
    () => [...clients].sort((a, b) => a.name.localeCompare(b.name, 'ru')),
    [clients],
  )

  function openEdit(client: Client) {
    setEditing(client)
    setDraftName(client.name)
    setDraftCompany(client.company)
  }

  function openNew() {
    const fresh: Client = { id: `c${Date.now()}`, name: '', company: '', orders: 0 }
    setEditing(fresh)
    setDraftName('')
    setDraftCompany('')
  }

  function save() {
    if (!editing || !draftName.trim()) return
    setClients((prev) => {
      const exists = prev.some((c) => c.id === editing.id)
      const next: Client = { ...editing, name: draftName.trim(), company: draftCompany.trim() }
      return exists ? prev.map((c) => (c.id === editing.id ? next : c)) : [...prev, next]
    })
    setEditing(null)
  }

  function remove(id: string) {
    setClients((prev) => prev.filter((c) => c.id !== id))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold">Клиенты · {sorted.length}</h2>
        <button
          type="button"
          onClick={openNew}
          className="flex h-9 items-center gap-1.5 rounded-full bg-accent px-4 text-xs font-semibold text-accent-foreground transition-transform active:scale-95"
        >
          <Plus size={15} strokeWidth={2.5} aria-hidden="true" />
          Добавить
        </button>
      </div>

      <ul className="flex flex-col gap-2.5">
        {sorted.map((client) => (
          <li
            key={client.id}
            className="glass rounded-[16px] p-4 flex items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-base font-semibold text-accent">
              {client.name.charAt(0)}
            </span>
            <div className="flex flex-1 flex-col gap-0.5 min-w-0">
              <span className="truncate text-sm font-semibold">{client.name}</span>
              <span className="truncate text-xs text-muted-foreground">
                {client.company} · {client.orders} заказов
              </span>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => openEdit(client)}
                aria-label={`Редактировать ${client.name}`}
                className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-muted text-muted-foreground transition-colors hover:text-accent hover:bg-accent/10 active:scale-95"
              >
                <Pencil size={17} strokeWidth={2} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => remove(client.id)}
                aria-label={`Удалить ${client.name}`}
                className="flex h-11 w-11 items-center justify-center rounded-[12px] bg-muted text-muted-foreground transition-colors hover:text-destructive hover:bg-destructive/10 active:scale-95"
              >
                <Trash2 size={17} strokeWidth={2} aria-hidden="true" />
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editing && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 backdrop-blur-sm sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Редактирование клиента"
          onClick={() => setEditing(null)}
        >
          <div
            className="glass w-full max-w-[448px] rounded-[20px] p-5 flex flex-col gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-base font-semibold">
                {clients.some((c) => c.id === editing.id) ? 'Редактировать клиента' : 'Новый клиент'}
              </h3>
              <button
                type="button"
                onClick={() => setEditing(null)}
                aria-label="Закрыть"
                className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-muted text-muted-foreground active:scale-95"
              >
                <X size={18} aria-hidden="true" />
              </button>
            </div>

            <label className="flex flex-col gap-1.5">
              <span className="text-xs text-muted-foreground">Название</span>
              <input
                value={draftName}
                onChange={(e) => setDraftName(e.target.value)}
                placeholder="Название клиента"
                className="h-12 rounded-[12px] border border-border bg-muted px-4 text-sm outline-none transition-colors focus:border-[color:var(--accent)]"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="text-xs text-muted-foreground">Организация</span>
              <input
                value={draftCompany}
                onChange={(e) => setDraftCompany(e.target.value)}
                placeholder="Юридическое лицо"
                className="h-12 rounded-[12px] border border-border bg-muted px-4 text-sm outline-none transition-colors focus:border-[color:var(--accent)]"
              />
            </label>

            <button
              type="button"
              onClick={save}
              disabled={!draftName.trim()}
              className="flex h-12 items-center justify-center gap-2 rounded-[12px] bg-accent text-sm font-semibold text-accent-foreground transition-transform active:scale-[0.98] disabled:opacity-40"
            >
              <Check size={18} strokeWidth={2.5} aria-hidden="true" />
              Сохранить
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
