import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from '../components/Home'
import NotFound from './NotFound'
import Public from '../components/Public'
import Register from '../components/Register'
import Login from '../components/Login'
const AppRouters = () => {
  return (
    <Routes>
        <Route path="/" element={<Public/>}>
            <Route index element={<Home/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
        </Route>
        <Route path='*' element={<NotFound/>} />
    </Routes>
  )
}

export default AppRouters