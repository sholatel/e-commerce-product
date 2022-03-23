import React  from "react";
import topNavSyle from '../CustomComponentStyle/TopNavStyle.css'

function TopNav() {
    return   <ul id="top-nav-container">
    <li className="item-1"><a  className='nav-menu'href=''>Collections</a> </li>
    <li className="item-2"><a className='nav-menu' href=''>Men</a></li> 
    <li className="item-3"><a className='nav-menu' href=''>Women</a></li>
    <li className="item-4"><a className='nav-menu' href=''>About</a></li>
    <li className="item-5"><a  className='nav-menu' href=''>Contact</a> </li>
 </ul>
    
}

export default TopNav;




