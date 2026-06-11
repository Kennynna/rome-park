'use client'

import { useState, type FormEvent } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Bus, Clock, CheckCircle2, Loader2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const CONTACT_FACTS = [
  {
    icon: MapPin,
    title: 'Адрес',
    text: 'г. Геленджик, Сухумское шоссе, 4 км. Бесплатная парковка у входа.',
  },
  {
    icon: Bus,
    title: 'На автобусе',
    text: 'Остановка «Поворот на Дивноморское» — 5 минут пешком до ворот парка.',
  },
  {
    icon: Clock,
    title: 'Расписание программ',
    text: 'Ежедневно: 10:00, 12:00, 14:00 и 16:00.',
  },
  {
    icon: Phone,
    title: 'Телефон',
    text: '+7 (988) 46-47-333',
    href: 'tel:+79884647333',
  },
]

type FormState = 'idle' | 'sending' | 'sent'

export function Contact() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [status, setStatus] = useState<FormState>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!name.trim() || !phone.trim()) return

    setStatus('sending')
    // TODO: добавить отправку данных в Telegram Webhook
    await new Promise((resolve) => setTimeout(resolve, 900))
    setStatus('sent')
    setName('')
    setPhone('')
  }

  return (
    <section id="contacts" className="relative py-16 md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_100%,rgba(212,175,55,0.08),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeading
          eyebrow="Контакты"
          title="Готовы к приключениям? Оставьте заявку"
          subtitle="Расскажем о расписании, программах и забронируем лучшее время для вашей семьи."
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Как добраться и контакты */}
          <div className="flex flex-col gap-5">
            {CONTACT_FACTS.map((fact, index) => (
              <Reveal key={fact.title} delay={index * 0.1}>
                <div className="flex gap-4 rounded-xl border border-gold/20 bg-card/60 p-5 gold-glow-hover hover:border-gold/50">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                    <fact.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-gold">{fact.title}</h3>
                    {fact.href ? (
                      <a
                        href={fact.href}
                        className="mt-0.5 inline-block text-sm text-foreground/80 underline-offset-4 transition-colors hover:text-gold hover:underline md:text-base"
                      >
                        {fact.text}
                      </a>
                    ) : (
                      <p className="mt-0.5 text-sm text-foreground/80 md:text-base">{fact.text}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.4} className="hidden lg:block">
              <div className="relative overflow-hidden rounded-xl border border-gold/25">
                <Image
                  src="/IMG_2118.JPG"
                  alt="Мальчик изучает карту парка «Римская империя»"
                  width={569}
                  height={1012}
                  className="h-56 w-full object-cover object-[50%_42%]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <p className="absolute bottom-4 left-5 text-sm font-medium text-foreground/90">
                  Карту парка выдаём бесплатно на входе
                </p>
              </div>
            </Reveal>
          </div>

          {/* Форма обратной связи */}
          <Reveal delay={0.2}>
            <form
              onSubmit={handleSubmit}
              className="flex h-full flex-col justify-center rounded-xl border border-gold/30 bg-card p-6 gold-glow-hover md:p-10"
            >
              <h3 className="text-2xl font-semibold text-gold">Заявка на посещение</h3>
              <p className="mt-2 text-sm text-foreground/65 md:text-base">
                Оставьте контакты — перезвоним в течение 15 минут.
              </p>

              <label className="mt-8 block">
                <span className="mb-2 block text-xs font-semibold tracking-wider text-gold/80 uppercase">
                  Ваше имя
                </span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Например, Марк Аврелий"
                  className="w-full border-b-2 border-gold/30 bg-transparent px-1 py-3 text-base text-foreground placeholder:text-foreground/35 transition-colors outline-none focus:border-gold"
                />
              </label>

              <label className="mt-6 block">
                <span className="mb-2 block text-xs font-semibold tracking-wider text-gold/80 uppercase">
                  Телефон
                </span>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border-b-2 border-gold/30 bg-transparent px-1 py-3 text-base text-foreground placeholder:text-foreground/35 transition-colors outline-none focus:border-gold"
                />
              </label>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-9 inline-flex items-center justify-center gap-2 rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-gold-foreground shadow-[0_0_25px_0_rgba(212,175,55,0.3)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_40px_0_rgba(212,175,55,0.45)] disabled:scale-100 disabled:opacity-70"
              >
                {status === 'sending' && <Loader2 className="size-5 animate-spin" />}
                {status === 'sending' ? 'Отправляем…' : 'Отправить'}
              </button>

              {status === 'sent' && (
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold">
                  <CheckCircle2 className="size-5" />
                  Заявка принята! Скоро свяжемся с вами.
                </p>
              )}

              <p className="mt-5 text-xs leading-relaxed text-foreground/45">
                Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
