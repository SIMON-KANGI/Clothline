import React from 'react'
import { CartProvider  } from 'react-use-cart'
import './App.css'
import Home from './Components/Home'
import {Routes, Route} from 'react-router-dom'
import Blog from './Components/Blog'
import Contact from './Components/Contact'
import Account from './Components/Account'
import Cart from './Components/Cart'
import Shoes from './Components/Products/Shoes'
import Coats from './Components/Products/Coats'
import Dresses from './Components/Products/Dresses'
function App() {

    
   return (
    <>
    <div className='container-fluid'>
    <CartProvider><Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/Blog" element={<Blog/>}/>
   <Route path="/Contact" element={<Contact/>}/>
   <Route path="/Account" element={<Account/>}/>
   <Route path="/Cart" element={<Cart/>}/>
   <Route path="/Shoes" element={<Shoes/>}/>
   <Route path="/Coats" element={<Coats/>}/>
   <Route path="/Dresses" element={<Dresses/>}/>
   </Routes>
   </CartProvider>
    
   </div>
   
    </>
    
   
  )
}

export default App
