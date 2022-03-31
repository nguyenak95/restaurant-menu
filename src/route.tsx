import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard/dashboard-page'
import MenuPage from './pages/menu/menu-page'

const AppRoute = () => {
  return (
    <Routes>
        <Route index element={<Dashboard />} />
        <Route path='menu' element={<MenuPage />} />
    </Routes>
  )
}

export default AppRoute