import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import Itemlist from './Itemlist';
import { UseDispatch } from 'react-redux';
import { clearCart } from './util/Cartslice';
function Cart() {
  const cartItems=useSelector((store)=>store.cart.items);

  

 
const dispatch=useDispatch();
function clearcart(){
dispatch(clearCart());
}
  console.log("itemcart", cartItems);
  return (
    <div className='text-center m-4 p-4'>
      <h1 className='text-2xl font-bold'> Cart</h1>
      <button onClick={clearcart} className= 'bg-black p-2 m-2 text-white rounded-lg'>Clear Cart</button>
      <div className='w-6/12 mx-auto my-4 shadow-lg bg-gray-50 p-4 '>
 <Itemlist item={cartItems} comp={"cart"}/>
 </div>
    </div>
  )
}

export default Cart
