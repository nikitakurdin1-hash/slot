export type Client = {
  id: string
  name: string
  company: string
  orders: number
}

export type Staff = {
  id: string
  name: string
  role: string
  phone: string
  shift: string
}

export type OrderStatus = 'new' | 'picking' | 'packed' | 'shipped'

export type Order = {
  id: string
  code: string
  client: string
  items: number
  status: OrderStatus
  time: string
}

export const initialClients: Client[] = [
  { id: 'c1', name: 'Азбука Вкуса', company: 'ООО «Городской супермаркет»', orders: 128 },
  { id: 'c2', name: 'Вкусвилл', company: 'ООО «Эвотор»', orders: 342 },
  { id: 'c3', name: 'Детский Мир', company: 'ПАО «Детский мир»', orders: 87 },
  { id: 'c4', name: 'Лента', company: 'ООО «Лента»', orders: 511 },
  { id: 'c5', name: 'М.Видео', company: 'ПАО «М.видео»', orders: 203 },
  { id: 'c6', name: 'Пятёрочка', company: 'X5 Retail Group', orders: 764 },
  { id: 'c7', name: 'Спортмастер', company: 'ООО «Спортмастер»', orders: 156 },
]

export const initialStaff: Staff[] = [
  { id: 's1', name: 'Иванов Алексей', role: 'Комплектовщик', phone: '+7 916 234-11-08', shift: 'Утро' },
  { id: 's2', name: 'Петрова Мария', role: 'Старший смены', phone: '+7 903 771-55-42', shift: 'День' },
  { id: 's3', name: 'Сидоров Дмитрий', role: 'Комплектовщик', phone: '+7 925 118-90-27', shift: 'Ночь' },
  { id: 's4', name: 'Кузнецова Анна', role: 'Приёмка', phone: '+7 999 452-30-19', shift: 'День' },
  { id: 's5', name: 'Морозов Игорь', role: 'Погрузка', phone: '+7 962 887-64-73', shift: 'Ночь' },
]

export const orders: Order[] = [
  { id: 'o1', code: '№ 48213', client: 'Пятёрочка', items: 24, status: 'picking', time: '09:12' },
  { id: 'o2', code: '№ 48214', client: 'Лента', items: 8, status: 'new', time: '09:31' },
  { id: 'o3', code: '№ 48210', client: 'Вкусвилл', items: 15, status: 'packed', time: '08:47' },
  { id: 'o4', code: '№ 48205', client: 'М.Видео', items: 3, status: 'shipped', time: '08:05' },
  { id: 'o5', code: '№ 48216', client: 'Спортмастер', items: 11, status: 'new', time: '09:44' },
  { id: 'o6', code: '№ 48208', client: 'Азбука Вкуса', items: 19, status: 'picking', time: '08:29' },
]

export const statusMeta: Record<OrderStatus, { label: string; color: string }> = {
  new: { label: 'Новый', color: '#7aa2ff' },
  picking: { label: 'Сборка', color: '#fcee4c' },
  packed: { label: 'Упакован', color: '#ffb84d' },
  shipped: { label: 'Отгружен', color: '#8a93a6' },
}
