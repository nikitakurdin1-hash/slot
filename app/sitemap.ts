import type { MetadataRoute } from 'next'

const SITE_URL = 'https://slotwms.ru'

/**
 * ВАЖНО ДЛЯ DEVIN: здесь перечислены как уже существующие в проекте страницы,
 * так и запланированные посадочные страницы под ключевые запросы
 * (см. /seo/site-structure.json). Раскомментируйте/добавьте записи по мере
 * того, как соответствующие страницы будут реализованы в реальном коде.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },

    // Запланированные страницы — см. /seo/site-structure.json для meta/keywords/schema.
    // { url: `${SITE_URL}/wms-wildberries`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    // { url: `${SITE_URL}/wms-ozon`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    // { url: `${SITE_URL}/wms-yandex-market`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    // { url: `${SITE_URL}/features`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    // { url: `${SITE_URL}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    // { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'daily', priority: 0.6 },
  ]
}
