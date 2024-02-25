import React from 'react'
import { itemlistimg } from './util/constant';
import { useDispatch } from 'react-redux';
import React,{useEffect, useState} from 'react';
import { additems } from './util/Cartslice';





function Itemlist({item,comp}) {
  console.log("tim tim",item);
  const dispatch = useDispatch();

  function additemsnew(item){
    console.log("itemnew",item);
    dispatch(additems(item));
}
  return (
    <div>
      {
      comp=="rescat"? 
item?.card?.card?.itemCards?.map((item,index)=>{
  return (
  <>

<div key={index} className='p-2 m-2 border-gray-200 border-b-2 text-left '>

<div className='py-2'>
   <span>  {item?.card?.info?.name}</span> 
  <span> ₹ {item?.card?.info?.price/100}</span> 
  </div>
  <p className='text-xs'>{item?.card?.info?.description}</p>
  <div className='flex justify-end '>
    <img src={itemlistimg + item?.card?.info?.imageId} className='w-3/12'></img>
    <button className='p-2 bg-black text-white shadow-lg absolute m-auto' onClick={()=>additemsnew(item)}>Add +</button>
    </div>
    </div>
    
  </>
  )
}):
item.map((res,index)=>
<>
<div key={index}  className='p-2 m-2 border-gray-200 border-b-2 text-left '>
<div className='py-2'>
  <span>
{res.card.info.name}
  </span>
  <span>₹ {res?.card?.info?.defaultPrice/100}</span>
  </div>
  <div className='flex justify-end '>
    <img src={itemlistimg + res?.card?.info?.imageId} className='w-3/12'></img>
    <button className='p-2 bg-black text-white shadow-lg absolute m-auto' onClick={()=>additemsnew(item)}>Add +</button>
    </div>
  </div>
</>


)

      }
    </div>
  )
}

export default Itemlist
