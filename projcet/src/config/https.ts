import axios, { AxiosError, type AxiosInstance } from 'axios'
import { GetlocalStorage } from 'src/utils/utils'
class Http {
  instance: AxiosInstance
  private token: string
  constructor() {
    this.token = GetlocalStorage()
    this.instance = axios.create({
      baseURL: 'http://api.training.div3.pgtest.co/api/v1',
      timeout: 1000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.token && config.headers) {
          config.headers.Authorization = this.token
          return config
        }
        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance
export default http
