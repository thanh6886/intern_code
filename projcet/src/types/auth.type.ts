import { SuccessResponse } from 'src/interface/auth'
import { User } from 'src/interface/user'

export type AuthResponse = SuccessResponse<{
  avatar: string
  createdAt: string
  description: string
  email: string
  gender: string
  id: number
  name: string
  region: number
  state: number
  token: string
  updatedAt: string
}>
