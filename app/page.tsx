import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Show } from '@/components/show'
import { Activities } from '@/components/activities'
import { Pricing } from '@/components/pricing'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Show />
        <Activities />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
