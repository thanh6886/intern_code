import React from 'react'
import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import HomeList from './HomeList'

export default function HomePage() {
  return (
    <div>
      <div className='flex'>
        <Link to={path.login} className='bg-lime-500'>
          Login
        </Link>
        <Link to={path.register} className='ml-2 bg-cyan-400'>
          Register
        </Link>
      </div>
      <HomeList />
    </div>
  )
}
