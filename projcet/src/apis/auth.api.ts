import http from 'src/config/https'

export const authApi = {
  login(body: { email: string; password: string }) {
    return http.post('/login', body)
  }
}
