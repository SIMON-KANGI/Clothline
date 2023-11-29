import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './Styles/NavBar.css'
import {AiOutlineClose} from 'react-icons/ai'
import {FaBars} from 'react-icons/fa'
import Products from './Products'
import Data from './Data'
import SearchBar from './SearchBar'
import SearchResults from './searchResults'


function NavBar(props) {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isNavClosed, setIsNavClosed]= useState(false)
 const handleToggleNav=()=>{
        setIsNavOpen(prevState => !prevState);
    }
    const handleCloseNav=()=>{
      setIsNavClosed(prevState => !prevState);
  }
  const [results, setResults]= useState([])
  return (
    <div>
    <header>
    <h1 className='logo'>out<span>fits</span></h1>
    <div style={{display:"block", width:"100%"}}>
     <SearchBar setResults={setResults} style={{width:"50%"}}/>
  <SearchResults results={results}/>
  </div>
 
   
    <div className='bars'>
    
    <FaBars onClick={handleToggleNav} className={isNavOpen? 'nav-open': 'nav-closed'}/>
    </div>
    <nav id="navbar">
    
    <AiOutlineClose onClick={handleCloseNav} id='close' className={isNavClosed?'nav-closed': 'nav-open'}/>
    
    <div className='text-center'>
      <ul className='nav-items'>
     <li><Link to="/">Home</Link></li>
      <li><Link to="/Blog">Blog</Link></li>
      <li><Link to="/Contact">Contact</Link></li>
      <li><Link to="/Account">Account</Link></li>
      <li><Link to="/Cart">Cart</Link></li>
      </ul>
      </div>
      </nav>
      <div></div>
      </header>
    
     
      
      
    </div>
  )
}

export default NavBar
