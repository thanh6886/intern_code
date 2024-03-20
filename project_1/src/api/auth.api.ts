import http from 'src/auth/https'

export const authApi = {
  login(body: { email: string; password: string }) {
    return http.post('/login', body)
  }
}
