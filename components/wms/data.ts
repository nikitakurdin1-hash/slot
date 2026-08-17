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

export type Good = {
  id: string
  name: string
  sku: string
  client: string
  stock: number
  unit: string
}

export const initialGoods: Good[] = [
  { id: 'g1', name: 'Кроссовки беговые Air Flow', sku: 'WB-48213-M', client: 'Спортмастер', stock: 342, unit: 'шт' },
  { id: 'g2', name: 'Толстовка оверсайз чёрная', sku: 'WB-77102-L', client: 'Пятёрочка', stock: 128, unit: 'шт' },
  { id: 'g3', name: 'Термокружка 500 мл', sku: 'WB-90341-S', client: 'М.Видео', stock: 76, unit: 'шт' },
  { id: 'g4', name: 'Набор кухонных ножей', sku: 'WB-22019-K', client: 'Лента', stock: 54, unit: 'уп' },
  { id: 'g5', name: 'Рюкзак городской 20л', sku: 'WB-58831-B', client: 'Детский Мир', stock: 19, unit: 'шт' },
  { id: 'g6', name: 'Наушники беспроводные', sku: 'WB-10456-H', client: 'Вкусвилл', stock: 8, unit: 'шт' },
]

export type CellStatus = 'empty' | 'filling' | 'full'

export type WarehouseCell = {
  id: string
  code: string
  status: CellStatus
  fill: number
}

const cellStatusByFill = (fill: number): CellStatus =>
  fill === 0 ? 'empty' : fill < 80 ? 'filling' : 'full'

export const warehouseCells: WarehouseCell[] = Array.from({ length: 24 }, (_, i) => {
  const row = Math.floor(i / 4) + 1
  const col = (i % 4) + 1
  const fill = [0, 45, 90, 60, 100, 0, 20, 75, 0, 100, 55, 30, 85, 0, 65, 100, 10, 0, 95, 40, 0, 70, 100, 25][i]
  return {
    id: `w${i + 1}`,
    code: `A${row}-${col}`,
    status: cellStatusByFill(fill),
    fill,
  }
})

export const cellStatusMeta: Record<CellStatus, { label: string; color: string }> = {
  empty: { label: 'Свободно', color: '#8a93a6' },
  filling: { label: 'Заполняется', color: '#fcee4c' },
  full: { label: 'Занято', color: '#ffb84d' },
}

export type RequestStatus = 'pending' | 'approved' | 'rejected'

export type Request = {
  id: string
  title: string
  client: string
  type: string
  status: RequestStatus
  date: string
}

export const initialRequests: Request[] = [
  { id: 'r1', title: 'Расширение адреса хранения', client: 'Лента', type: 'Адрес', status: 'pending', date: '18 июн' },
  { id: 'r2', title: 'Приёмка партии 480 ед.', client: 'Пятёрочка', type: 'Приёмка', status: 'approved', date: '17 июн' },
  { id: 'r3', title: 'Возврат брака по накладной', client: 'Спортмастер', type: 'Возврат', status: 'pending', date: '17 июн' },
  { id: 'r4', title: 'Смена тарифа хранения', client: 'Вкусвилл', type: 'Тариф', status: 'rejected', date: '15 июн' },
  { id: 'r5', title: 'Подключение второго склада', client: 'М.Видео', type: 'Адрес', status: 'approved', date: '12 июн' },
]

export const requestStatusMeta: Record<RequestStatus, { label: string; color: string }> = {
  pending: { label: 'На рассмотрении', color: '#fcee4c' },
  approved: { label: 'Одобрено', color: '#7ee787' },
  rejected: { label: 'Отклонено', color: '#ff5c5c' },
}

export type Zone = {
  id: string
  name: string
  cells: number
  occupied: number
  temp: string
}

export const warehouseZones: Zone[] = [
  { id: 'z1', name: 'Зона А · Стеллажи', cells: 24, occupied: 17, temp: '+18°C' },
  { id: 'z2', name: 'Зона Б · Крупногабарит', cells: 12, occupied: 6, temp: '+18°C' },
  { id: 'z3', name: 'Зона В · Приёмка', cells: 8, occupied: 5, temp: '+20°C' },
  { id: 'z4', name: 'Зона Г · Отгрузка', cells: 10, occupied: 4, temp: '+20°C' },
]
