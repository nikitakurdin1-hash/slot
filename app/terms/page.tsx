import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/landing/site-nav'
import { SiteFooter } from '@/components/landing/site-footer'

export const metadata: Metadata = {
  title: 'Условия использования и оферта',
  description: 'Условия использования сервиса СЛОТ WMS и публичная оферта.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <div className="app-glow min-h-dvh">
      <div className="relative z-10">
        <SiteNav />
        <main className="mx-auto max-w-[760px] px-5 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Документы</p>
          <h1 className="mt-3 font-serif text-3xl font-extrabold sm:text-4xl" style={{ letterSpacing: '-1px' }}>
            Условия использования
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Действует с {new Date().toLocaleDateString('ru-RU')}</p>

          <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-lg font-bold text-foreground">1. Общие положения</h2>
              <p>
                Используя сервис СЛОТ WMS (slotwms.ru), пользователь соглашается с настоящими
                условиями. Сервис предоставляется по модели SaaS для автоматизации складской
                комплектации и фулфилмента заказов маркетплейсов.
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-lg font-bold text-foreground">2. Тарифы и оплата</h2>
              <p>
                Первый адрес хранения предоставляется бесплатно без ограничения по времени.
                Подключение дополнительных адресов оплачивается ежемесячно согласно действующим
                тарифам, опубликованным на сайте.
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-lg font-bold text-foreground">3. Обязанности пользователя</h2>
              <p>
                Пользователь обязуется предоставлять достоверные данные, не передавать доступ к
                учётной записи третьим лицам и использовать сервис в соответствии с его назначением.
              </p>
            </section>
            <section id="offer" className="flex flex-col gap-2">
              <h2 className="font-serif text-lg font-bold text-foreground">4. Публичная оферта</h2>
              <p>
                Настоящий документ является публичной офертой в соответствии со ст. 437
                Гражданского кодекса РФ. Регистрация в сервисе означает полное и безусловное
                принятие условий оферты.
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-lg font-bold text-foreground">5. Контакты</h2>
              <p>По всем вопросам: info@slotwms.ru, +7 (920) 459-64-74.</p>
            </section>
          </div>

          <Link href="/" className="mt-10 inline-flex text-sm font-semibold text-accent hover:opacity-80">
            ← Вернуться на главную
          </Link>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
