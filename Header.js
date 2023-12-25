
import { img_link } from "./util/constant"
import { Link } from "react-router-dom"
const Header=()=>{
    return(
    <div className="app">
    <div className="logo">
    <img src={img_link}></img> 
    </div>
    <div className="nav-item">
        <ul>
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