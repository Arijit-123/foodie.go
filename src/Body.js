import { useContext, useEffect, useState } from "react";
import ResturantCards,{withpromotedlabel} from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "./util/UserContext";
const Body=()=>{
const [data,setData]=useState([]);
const [filtereddata, setfiltereddata]=useState([]);
const [text,setText]=useState("");

const Restaurantcardpromoted=withpromotedlabel(ResturantCards);
    useEffect(()=>{
        fetcdata();
    },[])
async function fetcdata(){
    const dataone=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9394137&lng=77.6952031&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json_data=await dataone.json();
    console.log("newdata", json_data? json_data.data.cards:"");
    // setData(json_data.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setData(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//    setfiltereddata(json_data.data.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants);
setfiltereddata(json_data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   console.log("full data", json_data.data.cards[4].card.card.restaurants);

}

const {loggedInUser, setInfo}=useContext(UserContext);
console.log('datanew',data?data:"");

    return(
        <>
     {text==null? setfiltereddata(data.data.cards[1]?.card.card?.gridElements?.infoWithStyle?.restaurants):""} 
        {data?.length==0?<Shimmer/>: <div >
<div className="search">
<input type="text" className="border border-solid border-black ml-2" value={text} onChange={(e)=>(setText(e.target.value))}></input>
<button className="px-5 py-1 bg-green-500 m-4 rounded-lg" onClick={()=>{
    console.log('newtext',text)
   const fildata= data?.filter((res)=>res.info.name.toLowerCase().includes(text.toLowerCase()));
   console.log("resinfo",fildata);
   setfiltereddata(fildata);
}}>Search</button>

<input type="text" className="border border-solid border-black ml-2" value={loggedInUser} onChange={(e)=>setInfo(e.target.value)}></input>

</div>
<h1 className="text-3xl my-8 mx-8 font-bold text-blue-600"> Top Restaurant choices</h1>

<div className="flex flex-wrap">
{filtereddata?.map((item)=>(
    <>
    <div className="">
 <Link to={"/restaurants/"+item?.info?.id}>
 {item.info.avgRating> 4.3 ? <Restaurantcardpromoted id={item?.info?.id} name={item?.info?.name} rating={item.info.avgRatingString} cost={item.info.costForTwo}/> :  <ResturantCards id={item?.info?.id} name={item?.info?.name} rating={item.info.avgRatingString} cost={item.info.costForTwo}/>}
   
    </Link>

    </div>
   
    </>
))

}


</div>

        </div>}
        

        </>
    )
}
export default Body;