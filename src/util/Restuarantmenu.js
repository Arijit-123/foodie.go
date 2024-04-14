import React,{useEffect, useState} from 'react'
import { additems } from './Cartslice';
import Shimmer from '../Shimmer';
import { useParams } from 'react-router-dom';
import useRestuarantmenu from './useRestuarantmenu';
import { useDispatch } from 'react-redux';
import Restuarantcat from '../Restaurantcat';
function Restuarantmenu() {

const {resId}=useParams();
const newdata=useRestuarantmenu(resId);

const dispatch = useDispatch();
const [showitem,setShowitem]=useState(false);
const [showindex,setShowindex]=useState(null);
    if (!newdata) {
      return <Shimmer />;
    }
    
      const { name, avgRating } = newdata?.data?.cards[2]?.card?.card?.info;
      // console.log("whole data", newdata?.data?.cards[0]?.card?.card?.info?.name);
      
       const{itemCards}=newdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
       console.log('newitemcard',newdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    
       const category_one=newdata?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
      console.log('cat',category_one);
  function additemsnew(itemnew){
      dispatch(additems(itemnew));
  }
    


  return (
    <>{newdata==null?<Shimmer/>:
    <div className='text-center'>
      <h1 className='font-bold text-2xl'>{name}</h1>
      <h3> Average rating:{avgRating}</h3>
      <p>Menu:</p>
      <ul>
      {/* {itemCards?.map((item,index)=>(
        <>
        <li key={item.card.info.id}>{item.card.info.name}</li>
        <button onClick={()=>additemsnew(item)}> Add</button>
        </>
      ))} */}
        
      
      </ul>
      
{
  category_one.map((item,index)=>
  (
    <Restuarantcat  item={item} key={index}
    showitem={index==showindex ? true :false}
     setShowindex={()=>setShowindex(index)}/>
  ))
}
    </div>
    }
    </>
  )
}

export default Restuarantmenu
