'use client'

import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { Laurel } from './laurel'

const links = [
  { href: '#show', label: 'Шоу гладиаторов' },
  { href: '#activities', label: 'Активности' },
  { href: '#schedule', label: 'Расписание' },
  { href: '#contacts', label: 'Контакты' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#top" className="flex items-center gap-2 text-gold">
          <Laurel className="h-7 w-20 text-gold" />
          <span className="font-heading text-base font-bold leading-none tracking-wide text-foreground md:text-lg">
            Великая Империя
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:+79884647333"
          className="hidden items-center gap-2 rounded-md border border-gold/50 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-colors hover:bg-gold hover:text-gold-foreground md:flex"
        >
          <Phone className="h-4 w-4" />
          +7 (988) 46-47-333
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-gold md:hidden"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 bg-background px-4 py-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+79884647333"
            className="mt-1 flex items-center justify-center gap-2 rounded-md border border-gold/50 bg-gold/10 px-4 py-2.5 text-sm font-semibold text-gold"
          >
            <Phone className="h-4 w-4" />
            +7 (988) 46-47-333
          </a>
        </nav>
      )}
    </header>
  )
}
