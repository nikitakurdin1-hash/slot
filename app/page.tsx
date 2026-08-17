import Script from 'next/script'
import { SiteNav } from '@/components/landing/site-nav'
import { Hero } from '@/components/landing/hero'
import { HowItWorks } from '@/components/landing/how-it-works'
import { WarehouseGallery } from '@/components/landing/warehouse-gallery'
import { Features } from '@/components/landing/features'
import { Stats } from '@/components/landing/stats'
import { Integrations } from '@/components/landing/integrations'
import { Pricing } from '@/components/landing/pricing'
import { Faq } from '@/components/landing/faq'
import { FinalCta } from '@/components/landing/final-cta'
import { SiteFooter } from '@/components/landing/site-footer'

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'СЛОТ',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  description:
    'WMS-система для фулфилмента маркетплейсов Wildberries FBS, OZON и Яндекс Маркет.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'RUB',
    description: 'Первый адрес хранения бесплатно навсегда',
  },
}

export default function Page() {
  return (
    <div className="app-glow relative min-h-screen">
      <div className="relative z-10">
        <SiteNav />
        <main>
          <Hero />
          <HowItWorks />
          <WarehouseGallery />
          <Features />
          <Stats />
          <Integrations />
          <Pricing />
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
