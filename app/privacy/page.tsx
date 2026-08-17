import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteNav } from '@/components/landing/site-nav'
import { SiteFooter } from '@/components/landing/site-footer'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности',
  description: 'Политика конфиденциальности и обработки персональных данных сервиса СЛОТ WMS.',
  alternates: { canonical: '/privacy' },
}

export default function PrivacyPage() {
  return (
    <div className="app-glow min-h-dvh">
      <div className="relative z-10">
        <SiteNav />
        <main className="mx-auto max-w-[760px] px-5 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent">Документы</p>
          <h1 className="mt-3 font-serif text-3xl font-extrabold sm:text-4xl" style={{ letterSpacing: '-1px' }}>
            Политика конфиденциальности
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">Действует с {new Date().toLocaleDateString('ru-RU')}</p>

          <div className="mt-8 flex flex-col gap-6 text-sm leading-relaxed text-muted-foreground">
            <p>
              ООО «СЛОТ» (далее — «Оператор») обрабатывает персональные данные пользователей сервиса
              СЛОТ WMS (slotwms.ru) в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ
              «О персональных данных».
            </p>
            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-lg font-bold text-foreground">1. Какие данные мы собираем</h2>
              <p>
                Имя, номер телефона, адрес электронной почты, наименование организации и данные,
                необходимые для работы склада (заказы, товары, сотрудники), которые пользователь
                вносит самостоятельно при использовании личного кабинета.
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-lg font-bold text-foreground">2. Цели обработки</h2>
              <p>
                Предоставление доступа к сервису, идентификация пользователя при входе по номеру
                телефона, техническая поддержка, улучшение качества сервиса и информирование о
                значимых обновлениях.
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-lg font-bold text-foreground">3. Хранение и защита данных</h2>
              <p>
                Данные хранятся на серверах, расположенных на территории Российской Федерации.
                Оператор принимает организационные и технические меры для защиты данных от
                несанкционированного доступа, изменения и уничтожения.
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-lg font-bold text-foreground">4. Права пользователя</h2>
              <p>
                Пользователь может запросить уточнение, блокировку или удаление своих персональных
                данных, направив запрос на info@slotwms.ru.
              </p>
            </section>
            <section className="flex flex-col gap-2">
              <h2 className="font-serif text-lg font-bold text-foreground">5. Контакты</h2>
              <p>
                По вопросам обработки персональных данных: info@slotwms.ru, +7 (920) 459-64-74.
              </p>
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
