import { Laurel } from './laurel'
import { Flame } from 'lucide-react'

export function ShowSection() {
  return (
    <section id="show" className="relative scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <Laurel className="h-9 w-24 text-gold" />
            <p className="mt-4 font-heading text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Главное событие
            </p>
            <h2 className="mt-3 text-balance font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
              Бои гладиаторов на арене
            </h2>
            <p className="mt-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Зрелищная шоу-программа, где настоящие гладиаторы сходятся в
              поединке под рёв толпы. Звон мечей, пылающие факелы и атмосфера
              Колизея — представление, от которого замирает сердце и у детей, и у
              взрослых.
            </p>

            <ul className="mt-7 space-y-3">
              {[
                'Постановочные сражения с трюками и спецэффектами',
                'Интерактив: зрители решают судьбу бойцов',
                'Историческое оружие, доспехи и костюмы',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground md:text-base">
                  <Flame className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#schedule"
              className="mt-8 inline-block rounded-md bg-gold px-7 py-3.5 font-heading text-sm font-bold uppercase tracking-wider text-gold-foreground transition-transform hover:scale-[1.03]"
            >
              Смотреть расписание
            </a>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-xl border border-gold/30 shadow-2xl shadow-black/40">
              <img
                src="/hero-gladiators.png"
                alt="Бой двух гладиаторов на арене древнего Рима"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/20" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
