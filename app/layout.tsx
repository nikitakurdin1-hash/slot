import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-manrope',
  weight: ['700', '800'],
  display: 'swap',
})

const SITE_URL = 'https://slotwms.ru'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'СЛОТ — WMS для фулфилмента Wildberries FBS, OZON и Яндекс Маркет',
    template: '%s — СЛОТ WMS',
  },
  description:
    'СЛОТ — WMS-система для фулфилмента маркетплейсов. Сканируйте, собирайте и отгружайте заказы Wildberries FBS, OZON и Яндекс Маркет в 3 раза быстрее.',
  keywords: [
    'WMS для Wildberries',
    'WMS для маркетплейсов',
    'система управления складом',
    'фулфилмент Wildberries FBS',
    'WMS OZON',
    'автоматизация склада маркетплейс',
  ],
  generator: 'v0.app',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'СЛОТ WMS',
    title: 'СЛОТ — WMS для фулфилмента Wildberries FBS',
    description: 'Сканируйте, собирайте, отгружайте в 3 раза быстрее.',
    url: SITE_URL,
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'СЛОТ',
  alternateName: 'SLOT WMS',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: 'WMS-система для фулфилмента маркетплейсов Wildberries FBS, OZON и Яндекс Маркет.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+7-920-459-64-74',
    contactType: 'customer support',
    areaServed: 'RU',
    availableLanguage: 'Russian',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="antialiased font-sans">
        {children}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
