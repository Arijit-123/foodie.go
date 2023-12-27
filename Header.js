
import { img_link } from "./util/constant"
import { Link } from "react-router-dom";
import useOnlinestatus from "./util/useOnlinestatus";
const Header=()=>{
    const status=useOnlinestatus();
    return(
    <div className="app">
    <div className="logo">
    <img src={img_link}></img> 
    </div>
    <div className="nav-item">
        <ul>
        <li>Online Status:{status?"online":"offline"}</li>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/about">About Us </Link></li>
            <li>Contact Us </li>
            <li>Cart </li>
           
        </ul>
    </div>
            </div>
    )
}

export default Header