import React, { useEffect, useState } from 'react'

function Grocery() {
const[data,setData]=useState(null);
  useEffect(()=>{
    datafetch();
  },[])
  async function datafetch(){
    const data=await fetch("https://www.bigbasket.com/ui-svc/v2/header?_=1707337154323&send_address_set_by_user=true");
    const json_data= await data.json();
setData(json_data);
  }

  console.log("niu", data);
  return (
    <div>
     <h1> this is grocery page</h1>
      <input className='border border-black' placeholder='name'>
      </input>
      <input placeholder='message' className='border border-black'></input>
      <button className='bg-gray-200'>Submit</button>
    </div>
  )
}

export default Grocery
