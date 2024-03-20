
import { img_link } from "./util/constant"
import { Link } from "react-router-dom";
import useOnlinestatus from "./util/useOnlinestatus";
import { UseSelector, useSelector } from "react-redux";
import { useState,useContext } from "react";
import UserContext from "./util/UserContext";
const Header=()=>{
    const cartItems=useSelector((store)=>store.cart.items);
    const groceryitems=useSelector((store)=>store.grocery?.items);
    const status=useOnlinestatus();
    //const data=useContext(UserContext);
    const {loggedInUser}=useContext(UserContext);
    console.log('cartitems',loggedInUser);
    console.log('header comp list',cartItems);
    const finallength=groceryitems?.length +cartItems?.length;
    console.log('finallength',finallength);
    return(
    <div className="flex justify-between bg-green-100 " >
    <div className="w-28">
    <img src={img_link}></img> 
    </div>
    <div className="nav-item">
        <ul className="flex p-4 m-4">
        <li className="mr-4">Online Status:{status?"🟢":"🔴"}</li>
            <li className="mr-4"><Link to="/">Food </Link></li>
            <li className="mr-4"><Link to="/about">About Us </Link></li>
            <li className="mr-4"><Link to="/grocery">Grocery</Link></li>
            <li className="mr-4">Contact Us </li>
            <li className="mr-4"><Link to="/cart">Cart{(groceryitems?.length +cartItems?.length)} </Link></li>
            <li>user:{loggedInUser}</li>
           
        </ul>
    </div>
            </div>
    )
}

export default Header