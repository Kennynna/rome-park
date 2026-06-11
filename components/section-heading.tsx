import { Reveal } from '@/components/reveal'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
}

// Единый заголовок секции с золотым орнаментом
export function SectionHeading({ eyebrow, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
      <p className="font-display mb-3 text-xs tracking-[0.35em] text-gold/80 uppercase">
        {eyebrow}
      </p>
      <h2 className="text-gold-gradient text-3xl font-semibold text-balance md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-5 flex items-center justify-center gap-3" aria-hidden>
        <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold/60" />
        <span className="size-1.5 rotate-45 bg-gold/80" />
        <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold/60" />
      </div>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-foreground/75 md:text-lg">{subtitle}</p>
      )}
    </Reveal>
  )
}
