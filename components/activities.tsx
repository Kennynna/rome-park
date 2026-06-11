import Image from 'next/image'
import { Target, Shield, Map, Hammer, Camera, Mountain } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

type Activity = {
  icon: typeof Target
  title: string
  text: string
  image?: { src: string; alt: string }
  className?: string
}

const ACTIVITIES: Activity[] = [
  {
    icon: Target,
    title: 'Античный тир',
    text: 'Стрельба из лука, арбалета и метание копья — почувствуйте себя римским лучником под присмотром инструктора.',
    image: { src: '/IMG_4726.JPG', alt: 'Мальчик стреляет из арбалета в античном тире' },
    className: 'md:col-span-2',
  },
  {
    icon: Shield,
    title: 'Посвящение в римляне',
    text: 'Торжественная церемония от мудреца парка: клятва легионера, свиток гражданина и собственный щит.',
    image: { src: '/IMG_2131.JPG', alt: 'Мудрец вручает мальчику свиток римского гражданина' },
    className: 'md:row-span-2',
  },
  {
    icon: Map,
    title: 'Квесты и испытания',
    text: 'Карта в руки — и вперёд: загадки империи, тайные свитки и испытания на смелость по всему парку.',
    image: { src: '/IMG_2122.JPG', alt: 'Ребёнок с сияющим свитком «Римская империя»' },
  },
  {
    icon: Hammer,
    title: 'Мастер-классы',
    text: 'Гончарный круг и «Римская пекарня»: слепите амфору и испеките хлеб по древнему рецепту. Изделие заберёте с собой.',
  },
  {
    icon: Camera,
    title: 'Фотозоны',
    text: 'Колоннады, мосты, арена и герои парка — десятки живописных локаций. Фото на свою технику — бесплатно.',
    image: { src: '/IMG_4725.JPG', alt: 'Мудрец с детьми на деревянном мосту парка' },
    className: 'md:col-span-2',
  },
  {
    icon: Mountain,
    title: 'Скалодром и Имперский рудник',
    text: 'Покорите стену легионера и спуститесь в шуточный рудник — испытания для самых отважных.',
  },
]

export function Activities() {
  return (
    <section id="activities" className="relative py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_50%,rgba(212,175,55,0.06),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Развлечения"
          title="Активности для детей и взрослых"
          subtitle="Каждый найдёт приключение по душе — от стрельбы из арбалета до выпечки римского хлеба."
        />

        <div className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-5 md:grid-cols-3">
          {ACTIVITIES.map((activity, index) => (
            <Reveal key={activity.title} delay={(index % 3) * 0.12} className={activity.className}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gold/25 bg-card gold-glow-hover hover:-translate-y-1 hover:border-gold/60">
                {activity.image && (
                  <div className="relative min-h-44 flex-1 overflow-hidden">
                    <Image
                      src={activity.image.src}
                      alt={activity.image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  </div>
                )}
                <div className={`flex flex-col gap-3 p-6 ${activity.image ? '' : 'flex-1 justify-center'}`}>
                  <span className="inline-flex size-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold transition-transform duration-300 group-hover:scale-110">
                    <activity.icon className="size-5" />
                  </span>
                  <h3 className="text-xl font-semibold text-gold">{activity.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground/75 md:text-base">
                    {activity.text}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
