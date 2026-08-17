# HANDOFF для Devin — единый дизайн СЛОТ WMS

Этот документ подготовлен, чтобы агент Devin мог перенести дизайн из этого
проекта (v0) в реальный код slotwms.ru **без ошибок и без ручного угадывания
цветов/шрифтов**. Ниже — точные значения, список изменённых файлов и
чек-лист проверки.

## 1. Что изменилось

Единый фирменный стиль приведён в соответствие с реальным продакшен-сайтом
slotwms.ru (жёлто-золотой акцент, тёмный фон), а не с исходным бирюзовым
макетом. Значения ниже сняты непосредственно со страниц slotwms.ru через
`getComputedStyle` — можно копировать as-is.

## 2. Design tokens (источник истины: `app/globals.css`)

```css
--background: #050505;       /* было #06060f */
--foreground: #f5f5f2;
--card: rgba(255, 255, 255, 0.035);
--muted: rgba(255, 255, 255, 0.05);
--muted-foreground: #9a9a95;
--accent: #fcee4c;           /* было #64ffda — ключевое изменение */
--accent-foreground: #0a0a05;
--border: rgba(255, 255, 255, 0.1);
--destructive: #ff5c5c;
--radius: 16px;              /* без изменений */
```

Статусные цвета (вторичная палитра для бейджей заказов/смен) не менялись,
кроме замены бирюзового на жёлтый:
`picking/День: #fcee4c`, `packed/Утро: #ffb84d`, `new/Ночь: #7aa2ff` (без
изменений), `shipped: #8a93a6` (без изменений).

## 3. Типографика

- Основной текст — **Inter** (без изменений), `letter-spacing: -0.2px`.
- Заголовки (h1/h2/h3, крупные цифры) — добавлен **Manrope** (700/800),
  подключён как `--font-serif` в Tailwind theme и используется через класс
  `font-serif`. Импортируется в `app/layout.tsx`:
  ```ts
  import { Inter, Manrope } from 'next/font/google'
  const manrope = Manrope({ subsets: ['latin', 'cyrillic'], variable: '--font-manrope', weight: ['700', '800'] })
  ```
- Правило: **максимум 2 шрифта** — не добавляйте третий.

## 4. Логотип (важно — требует вашего действия)

В файле `components/landing/site-nav.tsx` есть компонент `LogoMark` —
это **временная SVG-реконструкция** знака "три шеврона", а не оригинальный
файл с сайта. Он использован в шапке лендинга (`site-nav.tsx`), в футере
(через `Logo`) и в шапке личного кабинета (`components/wms/dashboard.tsx`).

**Что нужно сделать:** если у вас есть оригинальный файл лого
(SVG/PNG/AI) — замените содержимое `<LogoMark />` на `<img src="/logo.svg" />`
или инлайн-SVG из оригинала. Компонент используется в 3 местах, поэтому
достаточно поправить один файл (`site-nav.tsx`) — изменения подхватятся
везде через импорт.

## 5. Карта изменённых файлов

| Файл | Что изменено |
|---|---|
| `app/globals.css` | Дизайн-токены → жёлто-золотая палитра, добавлен `--font-serif`, флэттер `.glass` (меньше blur) |
| `app/layout.tsx` | Добавлен шрифт Manrope, метатеги (title/description/keywords/OG), `themeColor: #050505`, JSON-LD `Organization` |
| `app/page.tsx` | Добавлена секция FAQ, JSON-LD `SoftwareApplication` |
| `app/privacy/page.tsx` | **Новая страница** — политика конфиденциальности |
| `app/terms/page.tsx` | **Новая страница** — условия использования и оферта |
| `app/sitemap.ts` | **Новый файл** — sitemap.xml (Next.js Metadata API) |
| `app/robots.ts` | **Новый файл** — robots.txt с явным допуском AI-краулеров |
| `public/llms.txt` | **Новый файл** — для GPTBot/ClaudeBot/PerplexityBot |
| `seo/site-structure.json` | **Новый файл** — полная SEO/AI-структура: страницы, meta, keywords, Schema.org (см. п. 6) |
| `components/landing/site-nav.tsx` | Логотип со знаком-стрелкой, `font-serif` на wordmark |
| `components/landing/faq.tsx` | **Новый компонент** — FAQ с `FAQPage` JSON-LD |
| `components/landing/site-footer.tsx` | Реальные контакты (+7 920 459-64-74, info@slotwms.ru), ссылки на /privacy и /terms |
| `components/landing/hero.tsx`, `how-it-works.tsx`, `features.tsx`, `pricing.tsx`, `integrations.tsx`, `stats.tsx`, `final-cta.tsx` | `font-serif` на заголовках, цвет свечения `rgba(100,255,218,*)` → `rgba(252,238,76,*)` |
| `components/wms/dashboard.tsx` | Логотип в шапке кабинета, `font-serif` на заголовке раздела, навигация расширена до 8 разделов (была 4) |
| `components/wms/orders-tab.tsx`, `picker-tab.tsx`, `profile-tab.tsx`, `clients-tab.tsx`, `data.ts` | Замена `#64ffda` → `#fcee4c` в статусах/акцентах, `font-serif` на заголовках |
| `components/wms/goods-tab.tsx` | **Новый компонент** — раздел «Товары»: поиск по названию/SKU, список остатков |
| `components/wms/warehouse-tab.tsx` | **Новый компонент** — раздел «Склад»: общая загрузка + разбивка по зонам (стеллажи, крупногабарит, приёмка, отгрузка) |
| `components/wms/plan-tab.tsx` | **Новый компонент** — раздел «План»: визуальная сетка ячеек 4×N с цветовым статусом и модалкой деталей ячейки |
| `components/wms/requests-tab.tsx` | **Новый компонент** — раздел «Заявки»: список заявок клиентов со статусами (на рассмотрении/одобрено/отклонено) |

## 6. SEO/AI-структура (per ваш запрос)

Полный JSON со списком страниц, meta-тегами, ключевыми словами и
Schema.org-разметкой — в `seo/site-structure.json`. Реализованы:
`/`, `/privacy`, `/terms` + `sitemap.xml`, `robots.txt`, `llms.txt`.
Запланированные страницы (`/wms-wildberries`, `/wms-ozon`,
`/wms-yandex-market`, `/features`, `/pricing`, `/blog`) — в том же JSON
есть готовые title/description/h1/h2/keywords/schema для каждой; создайте
их как `app/<slug>/page.tsx`, используя `SiteNav`/`SiteFooter`.

## 7. Известные ограничения / чего НЕ хватает

1. **Личный кабинет здесь (в v0) содержит 8 разделов** (Заказы, Профиль,
   Клиенты, Сборщик, Товары, Склад, План, Заявки) — данные во всех новых
   разделах (`goods-tab.tsx`, `warehouse-tab.tsx`, `plan-tab.tsx`,
   `requests-tab.tsx`) моковые (`data.ts`), их нужно подключить к реальному
   API. Названия и наборы разделов на slotwms.ru нужно сверить перед
   продом — они собраны по аналогии с общей WMS-логикой, а не сняты 1:1
   с продакшена (в отличие от «Заказы/Профиль/Клиенты/Сборщик»).
2. Логотип — временная реконструкция (см. п. 4).
3. Юридические реквизиты в футере (`ИНН 7700000000`) — placeholder,
   замените на реальные.

## 8. Чек-лист перед деплоем

- [ ] Собрать проект (`pnpm build`) — 0 ошибок TypeScript/ESLint
- [ ] Проверить `/`, `/privacy`, `/terms`, `/dashboard` в браузере
- [ ] Заменить `LogoMark` на оригинальный файл лого (если есть)
- [x] Доверстать недостающие разделы кабинета (Товары, Склад, План, Заявки)
- [ ] Проверить `sitemap.xml` и `robots.txt` на проде
- [ ] Обновить ИНН и юридические реквизиты в футере
