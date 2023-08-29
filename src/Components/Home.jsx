import React, {useState} from 'react'
import './Styles/Home.css'
import NavBar from './NavBar'
import SideBar from './SideBar'
import Data from './Data'
import Products from './Products'
import Shoes from './Products/Shoes'
import { Routes, Route } from 'react-router-dom'
function Home() {
  return (
    <div>
    <NavBar/>
    
    <div id="home" className='container-fluid'>
    <SideBar/>
    <Data/>
    </div>
 
    </div>
    
  )
}

export default Home
