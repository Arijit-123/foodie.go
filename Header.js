
import { img_link } from "./util/constant"
const Header=()=>{
    return(
    <div className="app">
    <div className="logo">
    <img src={img_link}></img> 
    </div>
    <div className="nav-item">
        <ul>
            <li>Home </li>
            <li>About Us </li>
            <li>Contact Us </li>
            <li>Cart </li>
           
        </ul>
    </div>
            </div>
    )
}

export default Header