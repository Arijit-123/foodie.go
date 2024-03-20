const ResturantCards=({id, name,image_url,rating,cost})=>{

    const newname=name?.substring(0,18);
    return(
        <div className="w-[190px]  bg-blue-200 ml-5 mb-5 hover:bg-green-100 rounded-lg" id={id}>
    <img className="h-[200px] w-[200px]" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${image_url}`} />
    <h5 className="font-bold">{newname}...</h5>
    <h4></h4>
    <h4>{rating} stars</h4>
    <h4>{cost}</h4>
    </div>
    )
    }

    //higher order compoenent

  export  const withpromotedlabel=(ResturantCards)=>{
return ({id, name,image_url,rating,cost})=>{
    return(
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Superb</label>
            <ResturantCards id={id} name={name} image_url={image_url} rating={rating} cost={cost}/>
        </div>
    )
}
    }
    export default ResturantCards;