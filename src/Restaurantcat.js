import React,{ useState } from "react";
import Itemlist from "./Itemlist";
import { useDispatch } from 'react-redux';
const Restuarantcat=({item,key,showitem, setShowindex})=>{

    
    
    console.log('rescat', item);

    const handleclick=()=>{
    setShowindex();
    }

    

    return (
<>
<div>
    <div className="w-6/12 mx-auto my-4 shadow-lg bg-gray-50 p-4 ">
    
        {/* Header */}
        {/* body */}
        <div className="flex justify-between  hover:bg-green-100"  onClick={handleclick}>
        <span>{item.card.card.title} ({item?.card?.card?.itemCards?.length})</span> 
        <span> {!showitem?"⏩" : "⏬"}</span>
      
        </div>
       <div className="hover:bg-blue-100">
       { showitem ? <Itemlist item={item} comp={"rescat"}/>: ""}
        
        </div>
    </div>
    
   </div>
</>
    )
}
export default Restuarantcat;