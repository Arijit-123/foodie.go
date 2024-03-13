import React from 'react'

function Grocerycards({item}) {
  return (
    <>
        <div className='mx-4 my-4 shadow-lg'>
   
   <div className='border border-gray'> <img className='w-72' src={item.image_url}></img>
   <p className='font font-bold mx-4 my-4'>{item.altTag}</p>
   </div>
   </div>
    </>
  )
}

export default Grocerycards
