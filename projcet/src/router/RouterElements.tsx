import React from 'react'
import { useRoutes } from 'react-router-dom'
import path from 'src/constants/path'
import LoginPage from 'src/pages/LoginPage/LoginPage'

export default function RouterElements() {
  const routerElements = useRoutes([
    {
      path: path.login,
      element: <LoginPage />
    }
  ])
  return routerElements
}
