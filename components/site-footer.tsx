import { Laurel } from './laurel'
import { Phone, MapPin, Car, Bus, Globe } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer
      id="contacts"
      className="scroll-mt-16 border-t border-border/60 bg-card/50"
    >
      <div className="mx-auto max-w-6xl px-4 py-14 md:px-6">
        <div className="flex flex-col items-center text-center">
          <Laurel className="h-9 w-24 text-gold" />
          <p className="mt-3 font-heading text-2xl font-extrabold text-gold">
            Великая Империя
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Семейный шоу-парк в стиле Древнего Рима
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="tel:+79884647333"
            className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/40 p-5 text-center transition-colors hover:border-gold/50"
          >
            <Phone className="h-5 w-5 text-gold" />
            <span className="text-sm font-semibold text-foreground">
              +7 (988) 46-47-333
            </span>
            <span className="text-xs text-muted-foreground">Звоните ежедневно</span>
          </a>

          <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/40 p-5 text-center">
            <MapPin className="h-5 w-5 text-gold" />
            <span className="text-sm font-semibold text-foreground">
              Геленджик
            </span>
            <span className="text-xs text-muted-foreground">
              Сухумское шоссе, 4 км
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/40 p-5 text-center">
            <Car className="h-5 w-5 text-gold" />
            <span className="text-sm font-semibold text-foreground">
              Бесплатная парковка
            </span>
            <span className="text-xs text-muted-foreground">Для всех гостей</span>
          </div>

          <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-background/40 p-5 text-center">
            <Bus className="h-5 w-5 text-gold" />
            <span className="text-sm font-semibold text-foreground">
              Автобусная остановка
            </span>
            <span className="text-xs text-muted-foreground">
              Поворот на Дивноморское
            </span>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-6 text-sm text-muted-foreground sm:flex-row">
          <span className="flex items-center gap-2">
            <Globe className="h-4 w-4 text-gold" />
            rim-park.ru
          </span>
          <span>© {new Date().getFullYear()} Великая Империя. Все права защищены.</span>
        </div>
      </div>
    </footer>
  )
}
