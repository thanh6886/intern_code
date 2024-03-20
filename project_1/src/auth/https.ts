import axios, { AxiosError, type AxiosInstance } from 'axios'
class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: 'https://api.gearfocus.div4.pgtest.co/api/authentication',
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
const http = new Http().instance
export default http
