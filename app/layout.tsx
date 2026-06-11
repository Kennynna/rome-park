import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Playfair_Display, Montserrat, Cinzel } from 'next/font/google'
import './globals.css'

// Playfair Display — заголовки (поддерживает кириллицу, античный стиль с засечками)
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700', '800'],
})

// Montserrat — основной текст (хорошая читаемость, кириллица)
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
})

// Cinzel — декоративные латинские надписи (SPQR, римские цифры)
const cinzel = Cinzel({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Парк «Римская империя» в Геленджике — семейный шоу-парк',
  description:
    'Семейный отдых в атмосфере Древнего Рима: гладиаторские шоу, квесты, античный тир, мастер-классы и фотозоны. Геленджик, Сухумское шоссе, 4 км. Бесплатная парковка.',
  icons: {
    icon: '/IMG_4716.JPG',
    apple: '/IMG_4716.JPG',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`${playfair.variable} ${montserrat.variable} ${cinzel.variable} bg-background scroll-smooth`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
