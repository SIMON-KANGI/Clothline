import React from 'react'
import SideBar from '../SideBar'
import NavBar from '../NavBar'
import Data from '../Data'
import Products from '../Products'
function Shoes() {
  return (
    <div>
    <NavBar/>
    <div id="home" className='container-fluid'>
     <SideBar/>
 {
  Data.items2.map((item, id)=>{
    return(
      <ul className='data'>
      <Products key={id}
       item={item} 
       img={item.img}
        name={item.name} 
        title={item.price}/> </ul>
    )
  
  })
  }
 
 
  
    </div>
    </div>
  )
}

export default Shoes
