'use client'

import { useState } from 'react'
import { Phone, Trash2, UserPlus } from 'lucide-react'
import { initialStaff, type Staff } from './data'

const shiftColor: Record<string, string> = {
  Утро: '#ffb84d',
  День: '#fcee4c',
  Ночь: '#7aa2ff',
}

export function PickerTab() {
  const [staff, setStaff] = useState<Staff[]>(initialStaff)

  function remove(id: string) {
    setStaff((prev) => prev.filter((s) => s.id !== id))
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-1">
        <h2 className="text-sm font-semibold">Комплектовщики · {staff.length}</h2>
        <button
          type="button"
          className="flex h-9 items-center gap-1.5 rounded-full bg-accent px-4 text-xs font-semibold text-accent-foreground transition-transform active:scale-95"
        >
          <UserPlus size={15} strokeWidth={2.5} aria-hidden="true" />
          Добавить
        </button>
      </div>

      <ul className="flex flex-col gap-2.5">
        {staff.map((person) => {
          const color = shiftColor[person.shift] ?? '#8a93a6'
          return (
            <li
              key={person.id}
              className="glass rounded-[16px] p-4 flex items-center gap-3 transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-base font-semibold text-accent">
                {person.name.charAt(0)}
              </span>
              <div className="flex flex-1 flex-col gap-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="truncate text-sm font-semibold">{person.name}</span>
                  <span
                    className="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium"
                    style={{ backgroundColor: `${color}1f`, color }}
                  >
                    {person.shift}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground">{person.role}</span>
                <a
                  href={`tel:${person.phone.replace(/[^+\d]/g, '')}`}
                  className="flex items-center gap-1.5 text-xs text-accent transition-opacity hover:opacity-80"
                >
                  <Phone size={13} strokeWidth={2} aria-hidden="true" />
                  {person.phone}
                </a>
              </div>
              <button
                type="button"
                onClick={() => remove(person.id)}
                aria-label={`Удалить ${person.name}`}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-muted text-muted-foreground transition-colors hover:text-destructive hover:bg-destructive/10 active:scale-95"
              >
                <Trash2 size={17} strokeWidth={2} aria-hidden="true" />
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
