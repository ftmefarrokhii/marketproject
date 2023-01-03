import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import MainHeader from './components/MainHeader';
import Slideshow from './components/Slideshow';
import SlideMain from './components/SlideMain';
import Login from './components/Login';
import { Router} from "react-router-dom";
import {Route} from 'react-router-dom';
import Products from './components/Products';

function App() {
  return (
    <Fragment>
      <Header></Header>
      <MainHeader></MainHeader>
      <Slideshow></Slideshow>
      
     <Products/>
    <SlideMain></SlideMain>
    <Login></Login>
      
    </Fragment>
    

  );
}

export default App;
