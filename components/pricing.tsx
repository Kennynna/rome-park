import Image from 'next/image'
import { Crown, Gift, Check } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const FREE_ITEMS = ['Парковка', 'Фото и видео на свою технику', 'Туалеты', 'Детям до 6 лет — вход в парк и на шоу']

const TICKETS = [
  { title: 'Детский билет', note: 'с 6 до 12 лет включительно', base: 1200, card: 1000 },
  { title: 'Взрослый билет', note: 'скидка 50% на шоу льготным категориям', base: 1500, card: 1300 },
]

const SERVICES = [
  { title: 'Скалодром', note: 'до 120 кг · 5 минут', base: 500, card: 300 },
  { title: 'Имперский рудник', note: 'шуточное испытание для всей семьи', base: 600, card: 400 },
  { title: 'Мастер-класс на гончарном круге', note: '15–20 минут', base: 800, card: 600 },
  { title: 'Мастер-класс «Римская пекарня»', note: 'выпечка по древнему рецепту', base: 600, card: 400 },
  { title: 'Античный тир', note: 'стрельба из одного вида оружия', base: 600, card: 400 },
  { title: 'Профессиональное фото', note: '1 магнит 10×15', base: 700, card: 500 },
]

function PriceRow({ title, note, base, card }: (typeof SERVICES)[number]) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-gold/15 py-4 last:border-b-0">
      <div className="min-w-0">
        <p className="font-medium text-foreground">{title}</p>
        <p className="mt-0.5 text-xs text-foreground/55 md:text-sm">{note}</p>
      </div>
      <div className="flex shrink-0 items-baseline gap-3 text-right">
        <span className="text-sm text-foreground/50 line-through md:text-base">{base} ₽</span>
        <span className="text-lg font-semibold text-gold md:text-xl">{card} ₽</span>
      </div>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="prices" className="relative py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Казна империи"
          title="Цены парка"
          subtitle="Честный прайс без скрытых платежей. Цены со скидкой действуют по «Карте Императора»."
        />

        {/* Бесплатные привилегии */}
        <Reveal>
          <div className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-xl border border-gold/20 bg-card/50 px-6 py-5">
            <span className="inline-flex items-center gap-2 font-semibold text-gold">
              <Gift className="size-5" />
              Бесплатно:
            </span>
            {FREE_ITEMS.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 text-sm text-foreground/80">
                <Check className="size-4 text-gold/70" />
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Прайс-лист */}
          <Reveal>
            <div className="h-full rounded-xl border border-gold/25 bg-card p-6 gold-glow-hover md:p-8">
              <h3 className="mb-2 text-2xl font-semibold text-gold">Билеты и развлечения</h3>
              <p className="mb-4 text-xs text-foreground/55 md:text-sm">
                обычная цена · <span className="font-semibold text-gold">цена с Картой Императора</span>
              </p>
              {TICKETS.map((ticket) => (
                <PriceRow key={ticket.title} {...ticket} />
              ))}
              <div className="my-2 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              {SERVICES.map((service) => (
                <PriceRow key={service.title} {...service} />
              ))}
            </div>
          </Reveal>

          {/* Карта Императора — выделенный блок */}
          <Reveal delay={0.15}>
            <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-2 border-gold/70 bg-gradient-to-b from-gold/15 via-card to-card p-6 shadow-[0_0_50px_0_rgba(212,175,55,0.2)] gold-glow-hover md:p-8">
              <span className="absolute top-0 right-0 rounded-bl-xl bg-gold px-4 py-1.5 text-xs font-bold tracking-wide text-gold-foreground uppercase">
                Выгодно
              </span>
              <Crown className="mb-4 size-10 text-gold" />
              <h3 className="text-2xl font-semibold text-gold-gradient">Скидочная карта Императора</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80 md:text-base">
                Покупается один раз на входе и даёт право скидки на все покупки в парке, кроме кафе.
                Окупается уже на двух билетах!
              </p>
              <p className="mt-5">
                <span className="font-heading text-5xl font-bold text-gold">500 ₽</span>
                <span className="ml-2 text-sm text-foreground/60">за карту</span>
              </p>
              <ul className="mt-5 space-y-2.5 text-sm text-foreground/80 md:text-base">
                {['Скидка до 200 ₽ на каждый билет', 'Скидки на тир, рудник и скалодром', 'Скидки на мастер-классы и фото'].map(
                  (perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                      {perk}
                    </li>
                  ),
                )}
              </ul>
              <div className="relative mt-6 overflow-hidden rounded-lg border border-gold/30">
                <Image
                  src="/IMG_2126.JPG"
                  alt="Мудрец у казны парка с прайс-листом"
                  width={571}
                  height={500}
                  className="h-44 w-full object-cover object-[50%_35%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/70 to-transparent" />
                <p className="font-display absolute bottom-3 left-4 text-xs tracking-[0.25em] text-gold uppercase">
                  Казна работает с 10:00
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
