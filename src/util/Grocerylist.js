import React from 'react'
import { useSelector } from 'react-redux'

function Grocerylist({items}) {

  console.log("grocerlist234", items);

    

  return (
    <div>
      {
        items.map((item)=>(
          <>
            <div className='shadow-lg text-left '>
            <span className='mt-9 font-bold ml-2'>
            {item.product_name}</span>
            <div className='flex justify-end'>
            <img className='w-3/12' src={item.image_url}></img>
            </div>
            </div>
          </>
        ))
      }
    </div>
  )
}

export default Grocerylist
