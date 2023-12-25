import React,{useEffect, useState} from 'react'
import Shimmer from '../Shimmer';
import { useParams } from 'react-router-dom';
import { menuapi } from './constant';
function Restuarantmenu() {
const [newdata,setnewdata]=useState(null);
const {resId}=useParams();
// console.log('resid',id);
  useEffect(()=>{
    fetchresdetail();
  },[]);
    async function fetchresdetail(){
        const data_detail=await fetch(menuapi+resId);
        const json_data= await data_detail.json();
      console.log('newdata',json_data);
        setnewdata(json_data)
    };
    if (!newdata) {
      return <Shimmer />;
    }
    
      const { name, avgRating } = newdata?.data?.cards[0]?.card?.card?.info;
      console.log("whole data", newdata?.data?.cards[0]?.card?.card?.info?.name);
      
       const{itemCards}=newdata?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
       console.log('newitemcard',itemCards);
    
  
    


  return (
    <>{newdata==null?<Shimmer/>:
    <div>
      <h1>Name of Restuarant:{name}</h1>
      <h3> Average rating:{avgRating}</h3>
      <p>Menu:</p>
      <ul>
      {itemCards.map((item)=>(
        <li key={item.card.info.id}>{item.card.info.name}</li>
      ))}
        
      
      </ul>
      

    </div>
    }
    </>
  )
}

export default Restuarantmenu
