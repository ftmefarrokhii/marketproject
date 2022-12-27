import { Fragment } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import Header from './components/Header';
import MainHeader from './components/MainHeader';
import Slideshow from './components/Slideshow';
import Test from './components/Test';
import SlideMain from './components/SlideMain';
import Login from './components/Login';
function App() {
  return (
    <Fragment>
      
      <Header></Header>
      <MainHeader></MainHeader>
      <SlideMain></SlideMain>
      <Slideshow></Slideshow>
      <Test></Test>
      <Login></Login>
      
    </Fragment>
    

  );
}

export default App;
