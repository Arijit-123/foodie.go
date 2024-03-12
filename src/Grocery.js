import React, { useEffect, useState } from 'react'

function Grocery() {
const[data,setData]=useState(null);
  useEffect(()=>{
    datafetch();
  },[])
  async function datafetch(){
    const data=await fetch("https://backend.fruive.com/api/v1/001/dashboard");
    const json_data= await data.json();
setData(json_data?.data?.shop_by_category?.categories);
  }

  console.log("niu", data);
  return (
    <div className='flex flex-wrap items-stretch'>


    {
    data?.map((item)=>(
    <>
    <div className='mx-4 my-4'>
   
    <div className='border border-black'> <img className='w-72' src={item.image_url}></img>
    <p className='font font-bold mx-4 my-4'>{item.altTag}</p>
    </div>


    
    </div>
    </>
    ))
    
    
    
    }
      
    </div>
  )
}

export default Grocery
