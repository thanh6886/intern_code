import http from 'src/config/https'
import { SuccessResponse } from 'src/interface/auth'
import { AuthResponse } from 'src/types/auth.type'

export const authApi = {
  login(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/login', body)
  }
}
