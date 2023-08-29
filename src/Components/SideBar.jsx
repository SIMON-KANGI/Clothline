import React from 'react'
import { Link } from 'react-router-dom'
import './Styles/sidebar.css'
function SideBar() {
  return (
    <div>
    <div className='products'> 
    <nav className='sidenav'>
      <ul id="nav-items">
      <li id="items"><Link to="/Shoes">Shoes</Link></li>
      <hr/>
      <li id="items"><Link to="/Dresses">Dresses</Link></li>
      <hr/>
      <li id="items"><Link to="">Trousers</Link></li>
      <hr/>
      <li id="items"><Link to="">Tshirts</Link></li>
      <hr/>
      <li id="items"><Link to="/Coats">Coats</Link></li>
      <hr/>
      <li id="items"><Link to="">Shorts</Link></li>
      <hr/>
      <li id="items"><Link to="">Watches</Link></li>
      <hr/>
      <li id="items"><Link to="">Ladies wear</Link></li>
      <hr/>
      </ul>
      
      
      </nav>
     <footer> <h3>order now</h3></footer>
      </div>
     
    </div>
  )
}

export default SideBar
