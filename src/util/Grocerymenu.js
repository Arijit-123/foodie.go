import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import useGrocerydata from './useGrocerydata';
import Grocerycards from './Grocerycards';
function Grocerymenu() {

    const {newid}=useParams();
        const newdata=useGrocerydata(newid);
    
        console.log('newdata',newdata);

  return (
    <div className='flex flex-wrap justify-center items-center'>
      { newdata?.data?.map((item)=>
      <>
      <Grocerycards item={item} type="grocerymenu"/>
      </>
      )
      }
    </div>
  )
}

export default Grocerymenu
