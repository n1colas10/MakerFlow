import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './style/index.css'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Calendar from './pages/Calendar.jsx'
import Materials from './pages/Materials.jsx'
import Bookings from './pages/Bookings.jsx'
import AdminPanel from './pages/AdminPanel.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

import MainLayout from './layouts/MainLayout.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
      <Routes>
      
        <Route element={<MainLayout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/projects' element={<Projects/>} />
          <Route path='/calendar' element={<Calendar/>} />
          <Route path='/materials' element={<Materials/>} />
          <Route path='/bookings' element={<Bookings/>} />
          <Route path='/admin' element={<AdminPanel/>} />
        </Route>

        <Route element={<AuthLayout/>}>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>}></Route>
        </Route>
      
      </Routes>
    
    </BrowserRouter>
  </StrictMode>
)