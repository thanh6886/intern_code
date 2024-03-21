import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect, useContext } from 'react'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { HelmetProvider } from 'react-helmet-async'
import RouterElements from './router/RouterElements'

function App() {
  const RouteElements = RouterElements()

  return (
    <>
      {RouteElements}

      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}

export default App
