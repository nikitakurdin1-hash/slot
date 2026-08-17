import Script from 'next/script'
import { SiteNav } from '@/components/landing/site-nav'
import { Hero } from '@/components/landing/hero'
import { Stats } from '@/components/landing/stats'
import { PainPoints } from '@/components/landing/pain-points'
import { Solution } from '@/components/landing/solution'
import { HowItWorks } from '@/components/landing/how-it-works'
import { WarehouseGallery } from '@/components/landing/warehouse-gallery'
import { Features } from '@/components/landing/features'
import { CaseStudy } from '@/components/landing/case-study'
import { Pricing } from '@/components/landing/pricing'
import { Integrations } from '@/components/landing/integrations'
import { Faq } from '@/components/landing/faq'
import { FinalCta } from '@/components/landing/final-cta'
import { SiteFooter } from '@/components/landing/site-footer'

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'СЛОТ WMS',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android, Web',
  description:
    'WMS-система для фулфилмента и селлеров Wildberries FBS: сканирование камерой, работа с КИЗами, интеграция с WB API.',
  offers: {
    '@type': 'Offer',
    price: '8999',
    priceCurrency: 'RUB',
    description: 'Тариф «Старт» — 8 999 ₽ / месяц',
  },
}

export default function Page() {
  return (
    <div className="app-glow relative min-h-screen">
      <div className="relative z-10">
        <SiteNav />
        <main>
          <Hero />
          <Stats />
          <PainPoints />
          <Solution />
          <HowItWorks />
          <WarehouseGallery />
          <Features />
          <CaseStudy />
          <Pricing />
          <Integrations />
          <Faq />
          <FinalCta />
        </main>
        <SiteFooter />
      </div>
      <Script
        id="software-application-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </div>
  )
}
