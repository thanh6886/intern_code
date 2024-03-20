import React from 'react'
import { useRoutes } from 'react-router-dom'
import path from 'src/constants/path'
import LoginPgae from 'src/modules/pages/LoginPgae'

export default function RouterElements() {
  const routerElements = useRoutes([
    {
      path: path.login,
      element: <LoginPgae />
    }
  ])
  return routerElements
}
