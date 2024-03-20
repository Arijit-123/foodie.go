import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { additems } from './Cartslice';
import { additemsgrocery } from './grocerySlice';

function Grocerycards({item,type}) {
    console.log('grocerycards',item);
    console.log('grocerycardstype',type);

const dispatch=useDispatch();
    const newname=item?.product_name?.substring(0,22);
    const groceryItems=useSelector((store)=>store?.grocery?.items);

   

function newaddition(item){
  dispatch(additemsgrocery(item));
}



  //   
  return (
    <>

        <div className='mx-4 my-4 shadow-lg'>
   
   <div className='border border-gray'> 
   {type=="grocery"?"":<button className='p-2 bg-black text-white shadow-lg absolute m-auto' onClick={()=>newaddition(item)}>Add +</button>}
   
   <img className='w-72' src={item?.image_url}></img>
   <p className='font font-bold mx-4 my-4'>{type=="grocery"?item.altTag:newname}</p>
   
   </div>
   </div>
    </>
  )
}

export default Grocerycards
