import { Fragment } from 'react';
import './App.css';
import Blog from './Blog';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import logoImg from './images/logo.jpg'
import Header from './components/Header';
import Slideshow from './components/Slideshow';
import Test from './components/Test';
function App() {
  return (
    <Fragment>
      <Header></Header>
      <img src={logoImg} alt="logo" className="logoImg"></img>
      <Blog></Blog>
      <Slideshow></Slideshow>
      <Test></Test>
    </Fragment>
    

  );
}

export default App;
