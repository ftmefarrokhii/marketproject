// import PersonIcon from '../images/profile.png';
// import search from '../images/search.png';
// // import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menu from '../images/menu-rounded.png';
import {Link } from "react-router-dom";
import classes from './Header.css'
import { BsSearch } from "react-icons/bs";
import { CgProfile} from "react-icons/cg";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { GiHamburgerMenu} from "react-icons/gi";

const Header =()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // const loginhandler =(event)=>{
    //     console.log("hi")
    //     event.preventDefault();
       
    // }
    return(
        <div className="header">
            <div className='leftheader'>
                <div className="leftitems">
                <div><Link to="/login"><button className="loginbtn" ><CgProfile/></button> </Link></div>
                <div><Link to="/shopping"><button className="shoppingbtn"><AiOutlineShoppingCart/></button></Link></div>
                <div className="search_div">
                    <BsSearch className="iconsearch"/>
                <input type="search" name="" className="searchinput"  placeholder="search here..."></input>
                </div> 
                </div>
            </div>
            <div className="centerheader"><h1>وست گالری</h1></div>
            <div className="rightheader">
            <button className="menubtn" onClick={handleShow}><GiHamburgerMenu/></button>
                <Offcanvas show={show} onHide={handleClose}>
                   <Offcanvas.Header closeButton>
                   <Offcanvas.Title>دسته بندی ها</Offcanvas.Title>
                   </Offcanvas.Header>
                     <Offcanvas.Body>
                     <div><a to='/nhb'>shalvar</a></div>
                     <div>bsxjk</div>
                     </Offcanvas.Body>
                </Offcanvas>
                
            </div>
        </div>
    )
}

export default Header;
