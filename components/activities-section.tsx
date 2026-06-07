import { Laurel } from './laurel'

type Activity = {
  title: string
  description: string
  image: string
  tag: string
}

const activities: Activity[] = [
  {
    tag: 'Экскурсии',
    title: 'Прогулка по древнему городу',
    description:
      'Гид в тоге проведёт по улицам античного города: колонны, храмы и статуи, ожившие легенды и истории Великого Рима.',
    image: '/excursion.png',
  },
  {
    tag: 'Скалодром',
    title: 'Штурм крепостной башни',
    description:
      'Безопасный скалодром в виде римской сторожевой башни. Проверь ловкость и силу настоящего легионера — со страховкой и инструктором.',
    image: '/climbing.png',
  },
  {
    tag: 'Мастер-класс',
    title: 'Гончарный круг',
    description:
      'Слепи свою амфору на настоящем гончарном круге, как ремесленники Древнего Рима, и забери изделие на память.',
    image: '/pottery.png',
  },
  {
    tag: 'Мастер-класс',
    title: 'Римская пекарня',
    description:
      'Замеси тесто и испеки ароматный круглый хлеб в дровяной печи по античному рецепту. Вкусно, тепло и по-настоящему.',
    image: '/bakery.png',
  },
  {
    tag: 'Античный тир',
    title: 'Стрельба из лука',
    description:
      'Меткость под присмотром инструкторов: классический лук и мишени. Почувствуй себя воином легиона.',
    image: '/archery.png',
  },
  {
    tag: 'Античный тир',
    title: 'Баллиста и боевые машины',
    description:
      'Стрельба из древних осадных машин — баллисты и катапульты. Мощь античной инженерии в действии.',
    image: '/ballista.png',
  },
]

export function ActivitiesSection() {
  return (
    <section
      id="activities"
      className="relative scroll-mt-16 border-y border-border/50 bg-card/40 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Laurel className="mx-auto h-9 w-24 text-gold" />
          <h2 className="mt-4 text-balance font-heading text-3xl font-extrabold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Активности для детей и взрослых
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
            Шесть способов прожить день как настоящий римлянин — от ремёсел до
            боевых испытаний.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {activities.map((a) => (
            <article
              key={a.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border/60 bg-card transition-colors hover:border-gold/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={a.image || '/placeholder.svg'}
                  alt={a.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full border border-gold/40 bg-background/80 px-3 py-1 font-heading text-[11px] font-semibold uppercase tracking-wider text-gold backdrop-blur">
                  {a.tag}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {a.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
