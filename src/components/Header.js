// import PersonIcon from '../images/profile.png';
// import search from '../images/search.png';
// // import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import menu from '../images/menu-rounded.png'
// import {Link } from "react-router-dom";
import classes from './Header.css'
import { BsSearch } from "react-icons/bs";
import { CgProfile} from "react-icons/cg";
import { AiOutlineShoppingCart} from "react-icons/ai";
import { GiHamburgerMenu} from "react-icons/gi";

const Header =()=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const loginhandler =()=>{
        console.log("hi")
    }
    return(
        <div className="header">
            <div className='leftheader'>
                <div className="leftitems">
                <div><button className="loginbtn" onClick={loginhandler}><CgProfile/></button></div>
                <div><button className="shoppingbtn"><AiOutlineShoppingCart/></button></div>
                <div className="search_div">
                    <BsSearch className="iconsearch"/>
                <input  type="search" name="" className="searchinput"  placeholder="search here..."></input>
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
                     <div>jdcxdjjn</div>
                     <div>bsxjk</div>
                     </Offcanvas.Body>
                </Offcanvas>
                
            </div>

        </div>
        // <div style={{position: 'fixed', zIndex: '3', height:"4rem"}} class="container-fluid bg-warning">
        //     <div class="row" style={{height:"4rem"}}>
        //         <div class="col-2 bg-danger" style={{height:"4rem"}}>
        //         <button><img src={PersonIcon} style={{width:'30px'}} alt="handleShow"></img></button>
        //         <button><img src={search} style={{width:'30px'}} alt="handleShow"></img></button>
        //         <button>login</button>
        //         </div>
        //         <div class="col-4 offset-2 bg-primary text-center" style={{height:"4rem"}}><h1>وست گالری</h1></div>
        //         <div class="col-2 offset-2 bg-danger" style={{height:"4rem"}}>
        //         <button onClick={handleShow}><img src={menu} style={{width:'30px'}} alt="handleShow"></img></button>
        //         <Offcanvas show={show} onHide={handleClose}>
        //             <Offcanvas.Header closeButton>
        //             <Offcanvas.Title>دسته بندی ها</Offcanvas.Title>
        //             </Offcanvas.Header>
        //             <Offcanvas.Body>
        //             <div>jdcxdjjn</div>
        //             <div>bsxjk</div>
        //             </Offcanvas.Body>
        //         </Offcanvas>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Header;
