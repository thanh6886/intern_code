import { SuspenseProps } from 'react'
import http from 'src/config/https'
import { Product } from 'src/types/auth.type'

export const productAPI = {
  getProduct() {
    return http.get<Product[]>('/product')
  }
}
