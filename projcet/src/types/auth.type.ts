import { SuccessResponse } from 'src/interface/auth'
import { User } from 'src/interface/user'

export type AuthResponse = SuccessResponse<{
  data: []
  user: User
  user_cookie: string
}>
