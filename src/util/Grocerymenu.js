import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom';
import useGrocerydata from './useGrocerydata';
function Grocerymenu() {

    const {newid}=useParams();
        const newdata=useGrocerydata(newid);
    

  return (
    <div>
      Grocery menu
    </div>
  )
}

export default Grocerymenu
