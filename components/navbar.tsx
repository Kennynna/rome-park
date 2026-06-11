'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '#show', label: 'Шоу' },
  { href: '#activities', label: 'Активности' },
  { href: '#prices', label: 'Цены' },
  { href: '#contacts', label: 'Контакты' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-gold/15 bg-background/70 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6">
        <a href="#hero" className="group flex items-center gap-3">
          <Image
            src="/IMG_4716.JPG"
            alt="Эмблема парка «Римская империя»"
            width={44}
            height={44}
            className="size-10 rounded-full ring-1 ring-gold/40 transition-transform duration-300 group-hover:scale-110 md:size-11"
          />
          <span className="flex flex-col leading-none">
            <span className="font-heading text-base font-semibold tracking-wide text-gold md:text-lg">
              Римская Империя
            </span>
            <span className="font-display text-[10px] tracking-[0.3em] text-foreground/60 uppercase">
              Геленджик · SPQR
            </span>
          </span>
        </a>

        {/* Десктопное меню */}
        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-foreground/80 transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:text-gold hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contacts"
            className="hidden rounded-md border border-gold/60 px-5 py-2.5 text-sm font-semibold text-gold transition-all duration-300 hover:scale-105 hover:bg-gold/10 hover:shadow-[0_0_20px_0_rgba(212,175,55,0.25)] sm:inline-block"
          >
            Узнать расписание
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex size-10 items-center justify-center rounded-md border border-gold/30 text-gold transition-colors hover:bg-gold/10 lg:hidden"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Мобильное бургер-меню */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="overflow-hidden border-b border-gold/15 bg-background/90 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-md px-3 py-3 text-base font-medium text-foreground/85 transition-colors hover:bg-gold/10 hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contacts"
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md bg-gold px-3 py-3 text-center text-base font-semibold text-gold-foreground transition-transform hover:scale-[1.02]"
                >
                  Узнать расписание
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
