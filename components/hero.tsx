import { Laurel } from './laurel'
import { MapPin, Clock } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/show-arena.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--background)_95%)]" />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center md:py-32">
        <Laurel className="h-10 w-28 text-gold md:h-12 md:w-36" />
        <p className="mt-4 font-heading text-xs font-semibold uppercase tracking-[0.3em] text-gold md:text-sm">
          Шоу-парк в Геленджике
        </p>
        <h1 className="mt-4 text-balance font-heading text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          Римская Империя
          <span className="mt-2 block text-gold">оживает</span>
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          Семейное приключение в мире легионеров. Здесь каждый ребёнок
          почувствует себя героем, а каждый взрослый поверит в магию приключений.
        </p>

        <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
          <a
            href="#schedule"
            className="rounded-md bg-gold px-7 py-3.5 text-center font-heading text-sm font-bold uppercase tracking-wider text-gold-foreground shadow-lg shadow-gold/20 transition-transform hover:scale-[1.03]"
          >
            Купить билеты
          </a>
          <a
            href="#activities"
            className="rounded-md border border-gold/50 bg-background/40 px-7 py-3.5 text-center font-heading text-sm font-bold uppercase tracking-wider text-gold backdrop-blur transition-colors hover:bg-gold/10"
          >
            Все активности
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-sm text-muted-foreground sm:flex-row sm:gap-8">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gold" />
            Геленджик, Сухумское шоссе, 4 км
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-gold" />
            Программы: 10:00 · 12:00 · 14:00 · 16:00
          </span>
        </div>
      </div>
    </section>
  )
}
