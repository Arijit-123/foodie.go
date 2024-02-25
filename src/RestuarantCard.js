const ResturantCards=({id, name,rating,cost})=>{

    const newname=name?.substring(0,18);
    return(
        <div className="w-[190px] bg-blue-200 ml-5 mb-5 hover:bg-green-100 rounded-lg" id={id}>
    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/matka_biryani_zdish.png" />
    <h5 className="font-bold">{newname}...</h5>
    <h4>Biryani</h4>
    <h4>{rating} stars</h4>
    <h4>{cost}</h4>
    </div>
    )
    }

    //higher order compoenent

  export  const withpromotedlabel=(ResturantCards)=>{
return ({id, name,rating,cost})=>{
    return(
        <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Superb</label>
            <ResturantCards id={id} name={name} rating={rating} cost={cost}/>
        </div>
    )
}
    }
    export default ResturantCards;