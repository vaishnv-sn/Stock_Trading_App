import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register'
import Login from './pages/Login'
import CompanyRegister from './pages/CompanyRegister'
import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home />} />
      <Route exact path='/register' element={<Register />} />
      <Route exact path='/login' element={<Login />} />
      <Route exact path='/companyRegister' element={<CompanyRegister />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App