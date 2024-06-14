export type Post = {
  id?: string
  title: string
}
export type Product = {
  id: string
  title: string
  price?: number
  description?: string
  image?: string
  category?: CategoriesEnum
  quantity?: number
  createdAt?: string
  updadtedAt?: string
}

export type Todo = {
  id: number
  title: string
  isCompleted: boolean
  createdAt?: string
  updadtedAt?: string
}
export enum RoleEnum {
  USER = 'USER',
  REDACTOR = 'REDACTOR',
  ADMIN = 'ADMIN',
}
export type User = {
  id: string
  email: string
  password: string
  name?: string
  role: RoleEnum
}
export type AddUser = Partial<Pick<User, 'id'>> & Omit<User, 'id'>
export type AddTodo = Partial<Pick<Todo, 'id'>> & Omit<Todo, 'id'>
export enum CategoriesEnum {
  default = 'default',
  lighting = 'lighting',
  furniture = 'furniture',
  bags = 'bags',
}
export type Session = {
  sessionId: string
  userId: string
  expiresAt: string
}

export type AuthSession = {
  user: User
  expires: Date
}
export enum SessionType {
  STATELESS = 'STATELESS',
  DATABASE = 'DATABASE',
}
