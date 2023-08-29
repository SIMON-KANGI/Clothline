import React, { useContext } from 'react'
import './Styles/Products.css'
 import { useCart } from 'react-use-cart'




function Products(props){
const  {addItem}= useCart()
  return (
    <div id="items">
    <div  className='card-row'>
     <div className='card'>
    <img className='cardimg' src={props.img} alt=""/>
    <div className='card_content'><h4>{props.name}</h4>
    <h5>${props.title}</h5>
<button id="card-btn" onClick={()=>addItem(props.item)}>Add to Cart</button>
    
  
    </div>
    </div>
    </div>
   
  </div>
  )
}

export default Products
