import React, { useEffect, useState } from 'react'
import Grocerycards from './util/Grocerycards';
import { Link } from 'react-router-dom';

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
    <div className='flex flex-wrap justify-center items-center'>


    {
    data?.map((item)=>(
    <>
    <Link to={"/groceryinfo/"+item?.category_id}>
    <Grocerycards item={item}/>
    </Link>
    </>
    ))
    
    
    
    }
      
    </div>
  )
}

export default Grocery
