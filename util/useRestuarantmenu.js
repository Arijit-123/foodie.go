import React,{useEffect,useState} from 'react'
import { menuapi } from './constant';
function useRestuarantmenu(resId) {
    const[info, setInfo]=useState(null)
    useEffect(()=>{
        fetchdata();
    },[])

    async function fetchdata(){
   const data=await fetch(menuapi+resId);
   const data_json=await data.json();
   setInfo(data_json);
    }

  return info;
}

export default useRestuarantmenu
