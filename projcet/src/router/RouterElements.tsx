import React from 'react'
import { useRoutes } from 'react-router-dom'
import path from 'src/constants/path'
import HomePage from 'src/pages/HomePage/HomePage'
import LoginPage from 'src/pages/LoginPage/LoginPage'

export default function RouterElements() {
  const routerElements = useRoutes([
    {
      path: path.login,
      element: <LoginPage />
    },
    {
      path: path.home,
      element: <HomePage />
    }
  ])
  return routerElements
}
