import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import MainHeader from './components/MainHeader';
import SlideMain from './components/SlideMain';
import Login from './components/Login';
// import { Router, Routes} from "react-router-dom";
// import {Route} from 'react-router-dom';
import Products from './components/Products';
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer"
function App() {
  // const [cart, setCart] = useState([]);
  // const [show, setShow] = useState(true);
  
  // const handleClick = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  // };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  return (
    // <div>
    
    // <Routes>
    //   <Route exact path='/' element={<Header />}></Route>
    //   <Route path='/login' element={<Login />}><Login/></Route>
    //   <Route path='/shopping' element={<Slideshow />}><SlideMain/></Route>

    // </Routes>
    // </div>
  
    <Fragment>

      <Header></Header>
      <MainHeader></MainHeader>
      
     <Products/>
    <SlideMain></SlideMain>
    <Login></Login>
    
    <Footer></Footer>
      
    </Fragment>
    
    
  );
}

export default App;
