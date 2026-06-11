'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Sparkles, Clock } from 'lucide-react'

const SHOW_TIMES = ['10:00', '12:00', '14:00', '16:00']

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-16 md:pt-44 md:pb-24">
      {/* Фоновое золотое свечение */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(212,175,55,0.14),transparent_70%)]"
      />
      <div
        aria-hidden
        className="font-display pointer-events-none absolute top-24 left-1/2 -translate-x-1/2 text-[18vw] font-bold tracking-widest whitespace-nowrap text-gold/[0.04] select-none md:top-16"
      >
        SPQR
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs font-medium tracking-wide text-gold md:text-sm"
          >
            <Sparkles className="size-3.5" />
            Один день. Одна семья. Великая империя.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl leading-tight font-bold text-balance md:text-6xl"
          >
            Парк <span className="text-gold-gradient">«Римская империя»</span> в&nbsp;Геленджике
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg"
          >
            Семейный отдых в атмосфере Древнего Рима. Детские программы, квесты и&nbsp;шоу!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#activities"
              className="w-full rounded-md bg-gold px-8 py-3.5 text-base font-semibold text-gold-foreground shadow-[0_0_30px_0_rgba(212,175,55,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_0_rgba(212,175,55,0.5)] sm:w-auto"
            >
              Выбрать программу
            </a>
            <a
              href="#contacts"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-gold/60 px-8 py-3.5 text-base font-semibold text-gold transition-all duration-300 hover:scale-105 hover:bg-gold/10 sm:w-auto"
            >
              <MapPin className="size-4" />
              Как добраться
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            <span className="inline-flex items-center gap-1.5 text-xs text-foreground/60 md:text-sm">
              <Clock className="size-3.5 text-gold" />
              Шоу-программы каждый день:
            </span>
            {SHOW_TIMES.map((time) => (
              <span
                key={time}
                className="rounded-full border border-gold/25 px-3 py-1 text-xs font-semibold text-gold/90 md:text-sm"
              >
                {time}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Главное изображение в золотой рамке */}
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.75, ease: [0.21, 0.65, 0.36, 1] }}
          className="relative mx-auto mt-14 max-w-5xl md:mt-20"
        >
          <div className="absolute -inset-3 rounded-2xl bg-gradient-to-b from-gold/25 via-gold/5 to-transparent blur-xl" aria-hidden />
          <div className="relative rounded-xl border border-gold/40 bg-card p-2 shadow-2xl shadow-black/40 md:p-3">
            {/* Золотые уголки рамки */}
            <span aria-hidden className="absolute -top-px -left-px size-8 rounded-tl-xl border-t-2 border-l-2 border-gold" />
            <span aria-hidden className="absolute -top-px -right-px size-8 rounded-tr-xl border-t-2 border-r-2 border-gold" />
            <span aria-hidden className="absolute -bottom-px -left-px size-8 rounded-bl-xl border-b-2 border-l-2 border-gold" />
            <span aria-hidden className="absolute -right-px -bottom-px size-8 rounded-br-xl border-r-2 border-b-2 border-gold" />
            <Image
              src="/IMG_4719.JPG"
              alt="Семья у входа в парк «Римская империя»"
              width={1024}
              height={432}
              priority
              className="w-full rounded-lg object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
