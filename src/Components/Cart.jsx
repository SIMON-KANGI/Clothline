import React from 'react'
import { useCart } from 'react-use-cart'
import NavBar from './NavBar';
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
    if(isEmpty){return <h4 className='text-center'>Cart is empty</h4>}
  return (
    <>
    <NavBar/>
    <section className='container'>
  
     <div className='row justify-content-center'>
    <div className='col-12'>
  <h5>cart ({totalUniqueItems}) total Items: ({totalItems})</h5>  
  <table className='tabl table-light table-hover m-0'>
  
    <tbody> 
   {items.map((item, id)=>{
    return(  <tr key="id">
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
    <button className='btn btn-primary'>Order now</button>
    </div>
    </div>
    </section>
   </>
  )
}

export default Cart
