import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import MainHeader from './components/MainHeader';
import Slideshow from './components/Slideshow';
import SlideMain from './components/SlideMain';
import Login from './components/Login';
import Drag from './components/Drag';
import { Router, Routes} from "react-router-dom";
import {Route} from 'react-router-dom';
import Products from './components/Products';
import { Home } from '@mui/icons-material';

function App() {
  return (
    
      
    // <Routes>
    //   <Route exact path='/' element={<Header/>}></Route>
    //   <Route path='/login' element={<Login/>}><Login/></Route>
    //   <Route path='/shopping' element={<Slideshow/>}><SlideMain/></Route>

    // </Routes>
    <Fragment>
      <Header></Header>
      <MainHeader></MainHeader>
      <Slideshow></Slideshow>
      
     <Products/>
    <SlideMain></SlideMain>
    <Login></Login>
    <Drag/>
      
    </Fragment>
    
    
  );
}

export default App;
