import React from 'react'
import { Outlet } from 'react-router'
import ThemeSwap from '../components/ThemeSwap'

const PublicLayout = () => {
  return (
    <div>
        <h1>header</h1>
        <ThemeSwap/>
        <Outlet/>
        <footer>footer</footer>
    </div>
  )
}

export default PublicLayout