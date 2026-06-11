import Image from 'next/image'
import { Swords, Clock, Users, Ticket } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const SHOW_FACTS = [
  {
    icon: Clock,
    title: '4 шоу в день',
    text: 'Программы стартуют в 10:00, 12:00, 14:00 и 16:00 — выбирайте удобное время.',
  },
  {
    icon: Users,
    title: 'Для всей семьи',
    text: 'Зрелищные постановки, в которых интересно и детям, и взрослым.',
  },
  {
    icon: Ticket,
    title: 'Детям до 6 лет — бесплатно',
    text: 'Вход в парк и на шоу-программу свободный при подтверждении возраста.',
  },
]

export function Show() {
  return (
    <section id="show" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Ave, зритель!"
          title="Гладиаторские шоу на арене"
          subtitle="Главное событие парка — живые сражения легионеров и гладиаторов. Звон мечей, рев трибун и маленькие герои в центре арены."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="group relative overflow-hidden rounded-xl border border-gold/30 bg-card p-2 gold-glow-hover">
              <Image
                src="/IMG_4730.JPG"
                alt="Гладиаторское шоу на арене парка"
                width={1024}
                height={432}
                className="w-full rounded-lg object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/80 px-4 py-1.5 text-xs font-semibold text-gold backdrop-blur md:text-sm">
                <Swords className="size-4" />
                Арена «Римской империи»
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {SHOW_FACTS.map((fact, index) => (
              <Reveal key={fact.title} delay={index * 0.12}>
                <div className="flex gap-4 rounded-xl border border-gold/20 bg-card/60 p-5 gold-glow-hover hover:border-gold/50">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                    <fact.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-gold">{fact.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/75 md:text-base">
                      {fact.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.4}>
              <p className="font-display pl-1 text-xs tracking-[0.25em] text-gold/60 uppercase">
                Panem et circenses · Хлеба и зрелищ
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
