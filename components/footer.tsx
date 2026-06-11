import Image from 'next/image'
import { Phone, MapPin, Globe, Send } from 'lucide-react'

const FOOTER_LINKS = [
  { href: '#show', label: 'Шоу' },
  { href: '#activities', label: 'Активности' },
  { href: '#prices', label: 'Цены' },
  { href: '#contacts', label: 'Контакты' },
]

export function Footer() {
  return (
    <footer className="border-t border-gold/15 bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Логотип */}
          <div>
            <a href="#hero" className="inline-flex items-center gap-3">
              <Image
                src="/IMG_4716.JPG"
                alt="Эмблема парка «Римская империя»"
                width={56}
                height={56}
                className="size-14 rounded-full ring-1 ring-gold/40"
              />
              <span className="flex flex-col leading-none">
                <span className="font-heading text-lg font-semibold text-gold">Римская Империя</span>
                <span className="font-display mt-1 text-[10px] tracking-[0.3em] text-foreground/60 uppercase">
                  Шоу-парк · Геленджик
                </span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-foreground/65">
              Семейный парк развлечений в атмосфере Древнего Рима. Один день. Одна семья. Великая
              империя.
            </p>
          </div>

          {/* Навигация */}
          <nav aria-label="Навигация по сайту">
            <h3 className="font-display mb-4 text-xs tracking-[0.25em] text-gold/80 uppercase">
              Разделы
            </h3>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/75 transition-colors hover:text-gold md:text-base"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Контакты и соцсети */}
          <div>
            <h3 className="font-display mb-4 text-xs tracking-[0.25em] text-gold/80 uppercase">
              Контакты
            </h3>
            <ul className="space-y-3 text-sm text-foreground/75 md:text-base">
              <li>
                <a
                  href="tel:+79884647333"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <Phone className="size-4 text-gold/70" />
                  +7 (988) 46-47-333
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5">
                <MapPin className="size-4 shrink-0 text-gold/70" />
                г. Геленджик, Сухумское шоссе, 4 км
              </li>
              <li>
                <a
                  href="https://rim-park.ru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <Globe className="size-4 text-gold/70" />
                  rim-park.ru
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              <a
                href="https://t.me/rimpark"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram парка"
                className="inline-flex size-10 items-center justify-center rounded-md border border-gold/30 text-gold transition-all duration-300 hover:scale-110 hover:bg-gold/10"
              >
                <Send className="size-4" />
              </a>
              <a
                href="https://vk.com/rimpark"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ВКонтакте парка"
                className="font-display inline-flex size-10 items-center justify-center rounded-md border border-gold/30 text-sm font-bold text-gold transition-all duration-300 hover:scale-110 hover:bg-gold/10"
              >
                VK
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-gold/10 pt-6 text-xs text-foreground/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Парк «Римская империя», Геленджик</p>
          <p className="font-display tracking-[0.3em] uppercase">SPQR · MMXXVI</p>
        </div>
      </div>
    </footer>
  )
}
