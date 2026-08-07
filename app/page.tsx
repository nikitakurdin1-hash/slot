import { SiteNav } from '@/components/landing/site-nav'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { Features } from '@/components/landing/features'
import { Stats } from '@/components/landing/stats'
import { Integrations } from '@/components/landing/integrations'
import { Pricing } from '@/components/landing/pricing'
import { FinalCta } from '@/components/landing/final-cta'
import { SiteFooter } from '@/components/landing/site-footer'

export default function Page() {
  return (
    <div className="app-glow relative min-h-screen">
      <div className="relative z-10">
        <SiteNav />
        <main>
          <Hero />
          <HowItWorks />
          <Features />
          <Stats />
          <Integrations />
          <Pricing />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
