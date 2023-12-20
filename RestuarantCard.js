const ResturantCards=({id, name,rating,cost})=>{
    return(
        <div className="rescards" id={id}>
    <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=1080/assets/search/usecase/matka_biryani_zdish.png" />
    <h5>{name}</h5>
    <h4>Biryani</h4>
    <h4>{rating} stars</h4>
    <h4>{cost}</h4>
    </div>
    )
    }
    export default ResturantCards;