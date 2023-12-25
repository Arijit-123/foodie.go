import { useEffect, useState } from "react";
import ResturantCards from "./RestuarantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body=()=>{
const [data,setData]=useState([]);
const [filtereddata, setfiltereddata]=useState([]);
const [text,setText]=useState("");
    useEffect(()=>{
        fetcdata();
    },[])
async function fetcdata(){
    const dataone=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.5924893&lng=85.13367459999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json_data=await dataone.json();
    console.log("newdata", json_data? json_data:"");
    setData(json_data.data.cards[5]?.card.card?.gridElements?.infoWithStyle?.restaurants);
   setfiltereddata(json_data.data.cards[5]?.card.card?.gridElements?.infoWithStyle?.restaurants);
}
console.log('datanew',data);


    return(
        <>
     {text==null? setfiltereddata(json_data.data.cards[5]?.card.card?.gridElements?.infoWithStyle?.restaurants):""} 
        {data.length==0?<Shimmer/>: <div >
<div className="search">
<input type="text" value={text} onChange={(e)=>(setText(e.target.value))}></input>
<button onClick={()=>{
    console.log('newtext',text)
   const fildata= data.filter((res)=>res.info.name.toLowerCase().includes(text.toLowerCase()));
   console.log("resinfo",fildata);
   setfiltereddata(fildata);
}}>Search</button>
</div>
<div className="rescontainer">
{filtereddata.map((item)=>(
    <>
    <div className="card-new">
 <Link to={"/restaurants/"+item?.info?.id}>
    <ResturantCards id={item?.info?.id} name={item?.info?.name} rating={item.info.avgRatingString} cost={item.info.costForTwo}/>
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