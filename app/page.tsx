import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { ShowSection } from '@/components/show-section'
import { ActivitiesSection } from '@/components/activities-section'
import { ScheduleSection } from '@/components/schedule-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <ShowSection />
        <ActivitiesSection />
        <ScheduleSection />
      </main>
      <SiteFooter />
    </div>
  )
}
