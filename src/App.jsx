import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './views/Login'
import Dashboard from './views/Dashboard'
import Register from './views/Register'
import Layout from './layouts/Layout'
import PrivateRoute from './components/PrivateRoute'
import NotFound from './views/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrivateRoute><Layout><Dashboard/></Layout></PrivateRoute>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
