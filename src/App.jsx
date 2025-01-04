import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Men from './pages/Men'
import Women from "./pages/Women"
import Kids from './pages/Kids'
import Sale from "./pages/Sale"
import SNKRS from "./pages/SNKRS"
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Navbar from './components/Navbar'
import Header from './components/Header'


const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
      
        <Route path='/' element={<Home />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/sale' element={<Sale />} />
        <Route path='/launch' element={<SNKRS />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />

      </Routes>
      </div>
    
  )
}

export default App