import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import MainHeader from './components/MainHeader';
import SlideMain from './components/SlideMain';
import Login from './components/Login';
import Register from './components/Register';
// import { Router, Routes} from "react-router-dom";
// import {Route} from 'react-router-dom';
import Products from './components/Products';
import React, { useState, useEffect } from "react";
import Footer from "./components/Footer"
function App() {
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
      <Register></Register>
      <Login></Login>
      <Footer></Footer>
      
    </Fragment>
    
    
  );
}

export default App;
