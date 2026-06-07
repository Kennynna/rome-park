import { Laurel } from './laurel'
import { Clock, Ticket } from 'lucide-react'

const sessions = [
  { time: '10:00', note: 'Утреннее представление' },
  { time: '12:00', note: 'Дневная программа' },
  { time: '14:00', note: 'Дневная программа' },
  { time: '16:00', note: 'Вечернее шоу' },
]

export function ScheduleSection() {
  return (
    <section id="schedule" className="relative scroll-mt-16 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Laurel className="mx-auto h-9 w-24 text-gold" />
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Расписание программ
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Каждый день, четыре сеанса. Бесплатная парковка. Автобусная
            остановка — поворот на Дивноморское.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
          {sessions.map((s) => (
            <div
              key={s.time}
              className="flex flex-col items-center rounded-xl border border-border/60 bg-card p-6 text-center transition-colors hover:border-gold/50"
            >
              <Clock className="h-6 w-6 text-gold" />
              <span className="mt-3 font-heading text-3xl font-extrabold text-foreground">
                {s.time}
              </span>
              <span className="mt-1 text-xs text-muted-foreground">{s.note}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-accent/30 to-card p-8 text-center md:p-12">
          <h3 className="text-balance font-heading text-2xl font-extrabold text-foreground md:text-3xl">
            Проведите день всей семьёй как настоящее римское приключение
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            История, которую хочется прожить вместе. Бронируйте билеты заранее —
            количество мест на каждый сеанс ограничено.
          </p>
          <a
            href="tel:+79884647333"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-gold px-8 py-4 font-heading text-sm font-bold uppercase tracking-wider text-gold-foreground shadow-lg shadow-gold/20 transition-transform hover:scale-[1.03]"
          >
            <Ticket className="h-5 w-5" />
            Забронировать билеты
          </a>
        </div>
      </div>
    </section>
  )
}
