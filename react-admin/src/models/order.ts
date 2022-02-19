import { OrderItem } from './order-item'

export interface Order {
	id: number
	name: string
	email: string
	total: number
	description: string
	order_items: OrderItem[]
}
