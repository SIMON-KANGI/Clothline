import React from 'react'
import { useCart } from 'react-use-cart'
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import cart from "../assets/cart.png"
function Cart() {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateCartMetadata,
        updateItemQuantity,
        removeItem,
        emptyCart
    }= useCart();
    if(isEmpty){
      return(<>
        <NavBar/> 
       <div style={{backgroundColor:'whitesmoke', marginTop:"2rem"}} className='container'>
      <div className='text-center'><img style={{width:"200px", borderRadius:"50%"}} src={cart} alt=""/></div>
       <h4 className='text-center'>Cart is empty!</h4>
       <p className='text-center'>Browse our categories and discover best deals</p>
      <div className='text-center'>
      <button className='btn btn-primary'><Link style={{color:"white", textDecoration:"none"}} to="/">Start shopping</Link></button>
      </div>
      
      </div></>
    
      )
      }
  return (
    <>
    <NavBar/>
    <section className='container'>
  
     <div className='row justify-content-center'>
    <div className='col-12'>
  <h5>cart ({totalUniqueItems}) total Items: ({totalItems})</h5>  
  <table className='table table-light table-hover m-0'>
  
    <tbody> 
   {items.map((item, id)=>{
    return( 
       <tr key="id">
        <td>
        <img src={item.img} style={{height:'6rem'}} alt=""/>
        </td>
        <td>{item.name}</td>
        <td>{item.title}</td>
        <td>Quantity({item.quantity})</td>
        <td>
        <button onClick={()=>updateItemQuantity(item.id, item.quantity-1)} className='btn btn-info ms-2'>-</button>
        <button onClick={()=>updateItemQuantity(item.id, item.quantity+1)}className="btn btn-info ms-2">+</button>
        <button className='btn btn-danger'
        onClick={()=>removeItem(item.id)}
        >Remove from cart</button>
        </td>
        </tr> )
      })}
  
        </tbody>
   
   
  
  </table>
    </div>
    <div className='col-auto ms-auto'>
    <h2>Total Price: ${cartTotal}</h2>
    </div>
    <div className='col-auto'>
    <button className='btn btn-danger m-2' onClick={()=>emptyCart()}>Clear Cart</button>
    <button id="btn" popovertarget="pay" className='btn btn-primary' data-bs-toggle="collapse" data-bs-target="#pay">Order now</button>
    <div className="collapse" id="pay" popover anchor="btn">
    <input  placeholder="phone number" type="number"/></div>
    </div>
    </div>
    </section>
   </>
  )
}

export default Cart
