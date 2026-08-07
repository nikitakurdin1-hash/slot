import { Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from './site-nav'

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1200px] px-5 pb-10 pt-8">
      <div className="glass rounded-[24px] p-8 sm:p-10">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex flex-col gap-4">
            <Logo size="lg" />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Готовое WMS-решение для автоматизации фулфилмента на маркетплейсах.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold">Продукт</span>
              <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">Возможности</a>
              <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground">Тарифы</a>
              <a href="#integrations" className="text-sm text-muted-foreground hover:text-foreground">Интеграции</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold">Документы</span>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Политика конфиденциальности</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Условия использования</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground">Оферта</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-sm font-bold">Контакты</span>
              <a href="tel:+78001234567" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <Phone className="h-4 w-4 text-accent" /> 8 800 123-45-67
              </a>
              <a href="mailto:hello@slot.io" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <Mail className="h-4 w-4 text-accent" /> hello@slot.io
              </a>
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-accent" /> Москва, Россия
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} СЛОТ. Все права защищены.
          </span>
          <span className="text-xs text-muted-foreground">ООО «СЛОТ» · ИНН 7700000000</span>
        </div>
      </div>
    </footer>
  )
}
